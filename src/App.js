
import './App.css';
import TabellaVirtuale from './components/Tabellavirtuale';
import { Contattaci } from './components/Contattaci';


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Esposizioni from './components/Esposizioni';



function App() {
  


  return (
    <div className="App">
          <div>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/notes.css' rel='stylesheet'/>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/browse.css' rel='stylesheet'/>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/add-r.css' rel='stylesheet'/>
            <BrowserRouter>
              <nav>

                <div class="topnav">
                  <Link to="/"><button><i class="gg-notes"></i></button></Link>
                  <Link to="/form"><button><label className="submenu" id="label1" style={{marginLeft:"2rem", marginTop:"0.2rem"}}><b>Inserire Pubblicazioni</b></label> <i class="gg-add-r"></i></button></Link>
                  <Link to="/esposizioni"><button><i class="gg-browse"></i></button></Link>

                </div>
              </nav>
              <Routes>
                <Route path="/" element={<TabellaVirtuale />} ></Route>
                <Route path="/form" element={<Contattaci />}/>
                <Route path="/esposizioni" element={<Esposizioni />}/>
              </Routes>
            </BrowserRouter>
        </div>
      </div>
      )

  
}

export default App;
