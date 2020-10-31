import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      margin: '0 auto',
      marginTop: '2em'
    },
    title: {
        background: '-webkit-linear-gradient(#007eff, hsla(180,52%,52%,1))',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        fontWeight: 'bold'
        },
  });

  export default useStyles;