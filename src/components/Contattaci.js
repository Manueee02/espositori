import React from 'react';
import emailjs from "emailjs-com";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class Contattaci extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          n_opuscoli: '',
          n_puoi_vivere: '',
          n_libri: '',
          n_riviste: '',
          n_biglietti: '',
          n_volantini: '',
          n_video: '',
          note_lingue: '',
          data: '',
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.inviaEmail = this.inviaEmail.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    
      inviaEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_espositori', 'template_v61egh9', e.target, 'DVR6NlCr-hzT7HZsK')
          .then((result) => {
            toast.success('Rapporto inviato con successo, grazie mille.');

          })
          .catch((error) => {
            toast.error("Errore nell'invio.");
          });
    
        e.target.reset();
      }

  render() {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={this.inviaEmail}
        style={{padding: "1rem", width:"20rem"}}
      >
        
        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_puoi_vivere"
        label="Puoi vivere felice per sempre"
        value={this.state.n_puoi_vivere}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{
            m: 1
          }}
        style={{width:"100%"}}
        />

        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_opuscoli"
        label="Opuscoli"
        value={this.state.n_opuscoli}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{ m: 1 }}
        style={{width:"100%"}}
        />

        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_libri"
        label="Libri"
        value={this.state.n_libri}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{ m: 1 }}
        style={{width:"100%"}}
        />

        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_riviste"
        label="Riviste"
        value={this.state.n_riviste}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{ m: 1 }}
        style={{width:"100%"}}
        />

        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_biglietti"
        label="Biglietti da visita"
        value={this.state.n_biglietti}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{ m: 1 }}
        style={{width:"100%"}}
        />

        <TextField
        fullWidth
        variant="outlined"
        type="number"
        name="n_video"
        label="Video mostrati"
        value={this.state.n_video}
        onChange={this.handleInputChange}
        InputProps={{ inputProps: { min: 0 } }}
        sx={{ m: 1 }}
        style={{width:"100%"}}
        />


        <TextField
          fullWidth
          variant="outlined"
          id="note_lingue"
          name="note_lingue"
          label="Scrivere qui le pubblicazioni date in lingua e la lingua"
          value={this.state.note_lingue}
          onChange={this.handleInputChange}
          sx={{ m: 1 }}
          style={{width:"100%"}}
        />

        <TextField
          fullWidth
          type="date"
          variant="outlined"
          name="data"
          label="Data"
          value={this.state.data}
          onChange={this.handleInputChange}
          required
          style={{width:"100%"}}
          sx={{ m: 1 }}
        />

        <Button variant="contained" color="primary" type="submit" style={{width:"100%"}} sx={{ m: 1 }}>
          Invia
        </Button>
      </Box>
    );
  }
}

export { Contattaci };
