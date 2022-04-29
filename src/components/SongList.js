import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { CallMissedSharp, PlayArrow, Save } from '@material-ui/icons'

const SongList = () => {
  let loading = false

  const song = {
    title: 'I Drink Wine',
    author: 'Adele',
    thumbnail:
      'https://i.ytimg.com/an_webp/LwXQ7WUh-D0/mqdefault_6s.webp?du=3000&sqp=CIySr5MG&rs=AOn4CLASbxokj8Tp68CG8MeBwhuUL-8IKw',
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    )
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  thumbnail: {
    objectFit: 'cover',
    width: 140,
    height: 140,
  },
}))

function Song({ song }) {
  const classes = useStyles()
  const { title, artist, thumbnail } = song

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia className={classes.thumbnail} image={thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body1' component='p' color='textSecondary'>
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size='small' color='primary'>
              <PlayArrow />
            </IconButton>
            <IconButton size='small' color='secondary'>
              <Save color='secondary' />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default SongList
