import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse', // Swap the order of flex items on small screens
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '20px', // Add top margin to the image section on small screens
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column-reverse', // Display comments in a column layout
    marginTop: '20px', // Add top margin to separate comments from other content
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row', // Revert to row layout on larger screens
      marginTop: 0, // Remove top margin on larger screens
    },
  },
  commentsInnerContainer: {
    flex: 1,
    height: '200px',
    overflowY: 'auto',
    marginRight: '20px', // Add right margin to separate comments from other content
    [theme.breakpoints.up('md')]: {
      height: 'auto', // Allow comments container to grow dynamically on larger screens
      marginRight: 0, // Remove right margin on larger screens
    },
  },
}));
