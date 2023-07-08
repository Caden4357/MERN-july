import './App.css'
import Nav from './components/Nav';
import Album from './components/Album';
function App() {

  return (
    <div>
      <Nav 
        username={'Chris'} 
        favLang={'JavaScript'}
        hometown={'Springdale'}
      />
      <Album
        albumName={'Since I Have A Lover'}
        bandName={'6lack'}
        releaseYear={'2023'}
        genre={'R&B'}
      />
      <Album
        albumName={'Count Your Blessings'}
        bandName={'Bring Me The Horizon'}
        releaseYear={'2006'}
        genre={'Rock'}
      />
      <Album
        albumName={'Human After All By'}
        bandName={'Daft Punk'}
        releaseYear={'2005'}
        genre={'Techno'}
      />
    </div>
  )
}

export default App
