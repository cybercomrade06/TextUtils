import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light');
  const [greenMode,setGreenMode]= useState('');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    
    document.body.classList.add('bg-'+cls)

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'rgb(52 61 69)';
      showAlert('Dark Mode has been enabled', "success");
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light Mode has been enabled', "success")
      // document.title='TextUtils - Light Mode'


    }
  }

 


  return (
    
    <div>
      <Router>
     <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode}  />
     <Alert alert={alert} />
     <div className="container my-3">
     
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}> </Route>
        <Route exact path="/home" element={ <TextForm showAlert={showAlert} heading='Try Text Utils- Text Counter, Word Counter,UpperCase to LowerCase' mode={mode} />}> </Route>
        
        <Route path="*" element={<TextForm showAlert={showAlert} heading='Try Text Utils-Text Counter, Word Counter, UpperCase to LowerCase ' mode={mode} />} />
      </Routes> 
  
     
     </div>
     </Router> 
    </div>
    
  );
}

export default App;
