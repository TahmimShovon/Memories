import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles'; 
import { commentPost } from '../../actions/posts';

const CommentSection = ( {post} ) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments || []);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const commentsRef = useRef()

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));

        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }   

  return (
    <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                {comments.map((c, i) => (
                    <Typography key={i} gutterBottom variant='subtitle1' >
                        <strong>{typeof c === 'string' ? c.split(': ')[0] : null }</strong>
                        { typeof c === 'string' ? c.split(':')[1] : null }
                    </Typography>
                ))}
                <div ref={commentsRef} />
            </div>
            {user?.result?.name && (
            <div style={{ width: '70%' }}>
                <Typography gutterBottom variant='h6'>Write a comment</Typography>
                <TextField 
                    fullWidth
                    minRows={4}
                    variant='outlined'
                    label='Comment'
                    multiline
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button style={{ marginTop: '10px' }} color='primary' fullWidth disabled={!comment} variant='contained' onClick={handleClick} >
                    Comment
                </Button>
            </div>
            )}
        </div>
    </div>
  )
}

export default CommentSection