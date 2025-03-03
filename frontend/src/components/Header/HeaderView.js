import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Box,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import logo from '../../assets/logo.png'

import { LocalShipping, Map } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: '800',
    fontSize: '0.9em',
    color: theme.palette.grey[200],
    letterSpacing: theme.spacing(0.3),
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8em',
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  body1: {
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: '600',
    fontSize: '0.7em',
    flexGrow: 1,
    color: theme.palette.grey[200],
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoImg: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1),
    maxHeight: 50,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}
function HeaderView({ setDriverView, driverView, props }) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor: "#1c1c1c"}}>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
            </IconButton>
            <div className={classes.logoImg}>
              <img
                src={logo}
                alt='logo'
                className={classes.logoImg}
              />
            </div>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
              Mottainai
            </Typography>
            <div className={classes.grow} />
            <div>
              <IconButton onClick={() => setDriverView((v) => !v)}>
                {driverView && (
                  <>
                    <Typography
                      variant='body1'
                      color='inherit'
                      className={classes.body1}
                    >
                      Go to Maps View
                    </Typography>
                    <Box m={3} />
                    <Map style={{ color: 'whitesmoke' }} />
                  </>
                )}
                {!driverView && (
                  <>
                    <Typography
                      variant='body1'
                      color='inherit'
                      className={classes.body1}
                    >
                      Driver View
                    </Typography>
                    <Box m={1} />
                    <LocalShipping style={{ color: 'whitesmoke' }} />
                  </>
                )}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default HeaderView;
