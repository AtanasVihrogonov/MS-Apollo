import { useQuery } from '@apollo/client'
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
import { GET_SONGS } from '../graphql/queries'

const SongList = () => {
  const { data, loading, error } = useQuery(GET_SONGS)
  // const song = {
  //   title: 'I Drink Wine',
  //   author: 'ADELE',
  //   thumbnail:
  //     'https://i.ytimg.com/an_webp/Ne5J4bxWypI/mqdefault_6s.webp?du=3000&sqp=CPryr5MG&rs=AOn4CLCJy52Olsz2qtRD6aYdkir-3sCD5g',
  // }

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

  if (error) return <div>Error Fetching Songs</div>

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
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
  const { title, author, thumbnail } = song

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
              {author}
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
