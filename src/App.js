
import './App.css';
import TabellaVirtuale from './components/Tabellavirtuale';
import { Contattaci } from './components/Contattaci';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Esposizioni from './components/Esposizioni';
import FullScreenImageWithLoader from './components/Loader';




function App() {
  


  return (
    <div className="App">
          <div>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/notes.css' rel='stylesheet'/>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/browse.css' rel='stylesheet'/>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/add-r.css' rel='stylesheet'/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<TabellaVirtuale />} ></Route>
                <Route path="/esposizioni" element={<Esposizioni />}/>
              </Routes>
            </BrowserRouter>
        </div>
      </div>
      )

  
}


export default App;
