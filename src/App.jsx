import './App.css'
import Answers from './components/Answers/Answers'
import Contianer from './components/Container/Contianer'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App px-5">
      <Header></Header>
      <Contianer></Contianer>
      <Answers></Answers>
    </div>
  )
}

export default App
