import {
  TextField,
  InputAdornment,
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  makeStyles,
} from '@material-ui/core'
import { AddBoxOutlined, Link } from '@material-ui/icons'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  urlInput: {
    margin: theme.spacing(1),
  },
  addSongButton: {
    margin: theme.spacing(1),
  },
  dialog: {
    textAlign: 'center',
  },
  thumbnail: {
    width: '90%',
  },
}))

const AddSong = () => {
  const classes = useStyles()
  const [dialog, setDialog] = useState(false)

  function handleCloseDialog() {
    setDialog(false)
  }

  return (
    <div className={classes.container}>
      <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            src='https://i.ytimg.com/an_webp/Ne5J4bxWypI/mqdefault_6s.webp?du=3000&sqp=CPryr5MG&rs=AOn4CLCJy52Olsz2qtRD6aYdkir-3sCD5g'
            alt='Song thumbnail'
            className={classes.thumbnail}
          />
          <TextField margin='dense' name='title' label='Title' fullWidth />
          <TextField margin='dense' name='artist' label='Artist' fullWidth />
          <TextField
            margin='dense'
            name='thumbnail'
            label='Thumbnail'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='secondary'>
            Cancel
          </Button>
          <Button variant='outlined' color='primary'>
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        placeholder='Add URL'
        fullWidth
        margin='normal'
        type='url'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant='contained'
        color='primary'
        endIcon={<AddBoxOutlined />}
      >
        Add
      </Button>
    </div>
  )
}

export default AddSong
