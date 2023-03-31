import './App.css'
import Answers from './components/Answers/Answers'
import Contianer from './components/Container/Contianer'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const sweetAlert = () => {
    toast("You Have Already Bookmarked This Blog!")
}
  return (
    <div className="App px-5">
      <Header></Header>
      <Contianer sweetAlert={sweetAlert}></Contianer>
      <Answers></Answers>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
