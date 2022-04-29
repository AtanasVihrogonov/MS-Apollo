import { Avatar, IconButton, Typography, makeStyles } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const QueuedSongList = () => {
  const song = {
    title: 'I Drink Wine',
    author: 'ADELE',
    thumbnail:
      'https://i.ytimg.com/an_webp/Ne5J4bxWypI/mqdefault_6s.webp?du=3000&sqp=CPryr5MG&rs=AOn4CLCJy52Olsz2qtRD6aYdkir-3sCD5g',
  }

  return (
    <div style={{ margin: '10px 0' }}>
      <Typography color='textSecondary' variant='button'>
        QUEUE (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song} />
      ))}
    </div>
  )
}

const useStyles = makeStyles({
  avatar: {
    width: 44,
    height: 44,
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  container: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50px auto 50px',
    gap: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  songInfoContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})

function QueuedSong({ song }) {
  const classes = useStyles()
  const { author, title, thumbnail } = song

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} alt='Song thumbnail' />
      <div className={classes.songInfoContainer}>
        <Typography className={classes.text} variant='subtitle2'>
          {title}
        </Typography>
        <Typography
          className={classes.text}
          variant='body2'
          color='textSecondary'
        >
          {author}
        </Typography>
      </div>
      <IconButton>
        <Delete color='error' />
      </IconButton>
    </div>
  )
}

export default QueuedSongList
