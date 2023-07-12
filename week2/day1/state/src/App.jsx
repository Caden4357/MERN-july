import './App.css'
import Counter from './components/Counter'

function App() {

  const h1Alert = () => {
    alert('you clicked me')
  }

  return (
    <>
      {/* <h1 onClick={() => alert('you clicked me')}>Click Me!</h1> */}
      {/* <h1 onClick={h1Alert}>Click Me!</h1> */}

      <Counter/>
    </>
  )
}

export default App
