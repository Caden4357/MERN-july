
import './App.css'
import Album from './components/Album'
function App() {


  return (
    <>
      <Album
        albumName={'Since I Have A Lover'}
        bandName={'6lack'}
        releaseYear={'2023'}
        genre={'R&B'}
        albumSales={20}
      />
      <Album
        albumName={'Count Your Blessings'}
        bandName={'Bring Me The Horizon'}
        releaseYear={'2006'}
        genre={'Rock'}
        albumSales={10}
      />
      <Album
        albumName={'Human After All By'}
        bandName={'Daft Punk'}
        releaseYear={'2005'}
        genre={'Techno'}
        albumSales={50}
      />
    </>
  )
}

export default App
