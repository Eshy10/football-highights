import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(1),
    },
    title: {
    background: '-webkit-linear-gradient(#007eff, hsla(180,52%,52%,1))',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    },
    circular: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },

  }));

export { useStyles };