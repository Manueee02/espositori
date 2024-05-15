import React from 'react';
import emailjs from "emailjs-com";
// npm install emailjs-com
// npm install react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// classe ES6 per definire un componente
class Contattaci extends React.Component {

    

    constructor(props) {
      super(props);
      this.state = {
        n_opuscoli:'',
        n_puoi_vivere:'',
        n_libri:'',
        n_riviste:'',
        n_biglietti:'',
        n_volantini:'',
        n_video:'',
        note_lingue:'',
        data: '',
      };
  
      // Necessario per accedere al corretto valore di this all'interno della callback
      this.handleInputChange = this.handleInputChange.bind(
        this
      );

      
    }
  
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      // senza la bind this potrebbe essere undefined
      this.setState({
        [name]: value
      });
    }

  inviaEmail(e) {
     // preventDefault annulla l'evento di default
      e.preventDefault();
      
      /*emailjs.sendForm('service_espositori', 'template_v61egh9', e.target, 'DVR6NlCr-hzT7HZsK')
             .then((result) => {
                toast.success("Email inviata con successo");
                console.log(result.text);
             }, (error) => {
                toast.error("Invio Email non riuscito");
                console.log(error.text);
             });*/

             

      // reset degli input del form contattaci
      emailjs.sendForm('service_espositori', 'template_v61egh9', e.target, 'DVR6NlCr-hzT7HZsK')
             .then((result) => {
                alert('Rapporto inviato con successo, grazie mille.')
             }, (error) => {
                alert("Errore nell'invio.")
             });
        
      e.target.reset();

      var vis = 1000;

    //ALERT
    window.alert = function (message) {
    //Creazione dell'elemento
      var a = document.createElement('div');
      //regole di stile CSS
      a.style.cssText = "width:20rem; height:4rem; border:1px solid #bbb; border-radius:5px; padding:10px; background:white; box-shadow:0px 0px 8px #0006; position:fixed; top:0px; right:0; left:0; bottom: 10rem; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-align:center; z-index:"+ vis+ ";";

      a.innerHTML = "<b>"+message+'</b><i class="gg-chevron-down-o" style="margin-top:1rem; left:46%; right:50%;"></i>';
      document.body.appendChild(a);

      vis--;

      //Rimozione dell'elemento al click
      a.addEventListener("click", function() {
        a.remove();
        }
      )
    };

    
  }
  
  
  //
  
    render() {

      return (
        
        <div id="form">
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/chevron-down-o.css' rel='stylesheet'></link>
            
            <p id="titolo"><b>Inserire qui le pubblicazioni lasciate durante il turno e cliccare invia.</b></p>
            <form name="frmEmail" method="post" action="?send=1" onSubmit={this.inviaEmail}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                        <TableHead>
                        </TableHead>
                        <TableBody>

                        <TableRow  className="table" id="puoi_vivere">
                                <TableCell>
                                    Puoi vivere felice per sempre (Opuscolo)
                                </TableCell>
                                
                                <TableCell align="right" className='cella_select'>
                                    <select name="n_puoi_vivere" placeholder="Selezionare numero" checked={this.state.n_opuscoli}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                        

                            

                            <TableRow  className="table">
                                <TableCell>
                                    Opuscoli
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_opuscoli" placeholder="Selezionare numero" checked={this.state.n_opuscoli}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                            <TableRow  className="table">
                                <TableCell>
                                    Libri
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_libri" placeholder="Selezionare numero" checked={this.state.n_libri}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Riviste
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_riviste" placeholder="Selezionare numero" checked={this.state.n_riviste}
                                            onChange={this.handleInputChange}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                    </select>  
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Biglietti da visita
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_biglietti" placeholder="Selezionare numero" checked={this.state.n_biglietti}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Volantini
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_volantini" placeholder="Selezionare numero" checked={this.state.n_volantini}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Video mostrati
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_video" placeholder="Selezionare numero" checked={this.state.n_video}
                                        onChange={this.handleInputChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan="2">
                                    <input type="text" name="note_lingue" id="note_lingue"  required placeholder="  Scrivere qui le pubblicazioni date in lingua e la lingua"></input>
                                </TableCell>
                                
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <b>Data:</b>
                                </TableCell>
                                <TableCell align='right'>
                                    <input type="date" name="data" required checked={this.state.data}
                                    onChange={this.handleInputChange}></input>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><input type="submit" name="submit" value="Invia"></input></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>               
            </form>
        </div>
      );
    }
  }

export {Contattaci};
