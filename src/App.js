import { Grid } from '@material-ui/core'
import AddSong from './components/AddSong'
import Header from './components/Header'
import SongList from './components/SongList'
import SongPlayer from './components/SongPlayer'


function App() {
  return (
    <>
      <Header />
      <Grid style={{paddingTop: '80px'}} container spacing={3}>
        <Grid item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid style={{
          position: 'fixed',
          width: '100%',
          right: 0,
          top: '70'
        }} item xs={12} md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  )
}

export default App
