import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { HeadsetTwoTone } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color='primary' position='fixed'>
      <Toolbar>
        <HeadsetTwoTone />
        <Typography className={classes.title} variant='h6' component='h1'>
          MS Apollo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
