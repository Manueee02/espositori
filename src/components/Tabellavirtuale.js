import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Fab, Dialog } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Contattaci } from './Contattaci';
import { ref, get } from "firebase/database";
import { db } from "./firebase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FullScreenImageWithLoader from './Loader';

function TabellaVirtuale() {
  const [turni, setTurni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const query = ref(db, "Turni");
    const getData = async () => {
      try {
        const snapshot = await get(query);
        if (snapshot.exists()) {
          const turniArray = [];
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            Object.values(childData).forEach((weekData) => {
              const turniSettimana = Object.values(weekData);
              turniArray.push(...turniSettimana);
            });
          });
          setTurni(turniArray);
          setLoading(false);
        } else {
          console.log("Nessun dato trovato");
          setLoading(false);
        }
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const filteredTurni = turni.filter((turno) => {
    const fratelli = [turno.fratello1, turno.fratello2, turno.fratello3];
    return fratelli.some((fratello) =>
      fratello.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (showLoader) {
    return <FullScreenImageWithLoader />;
  }

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: '0 auto', marginBottom: '20px' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Cerca"
          inputProps={{ 'aria-label': 'cerca' }}
          onChange={handleSearchChange}
        />
        <SearchIcon sx={{ mr: 1 }} />
      </Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>In turno</TableCell>
              <TableCell>Orario</TableCell>
              <TableCell>Luogo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTurni.map((turno) => {
              if (turno && turno.data) {
                const dataTurno = turno.data.split('/');
                const [giorno, mese, anno] = dataTurno.map(Number);
                if (!isNaN(giorno) && !isNaN(mese) && !isNaN(anno)) {
                  const dataTurnoObj = new Date(anno, mese - 1, giorno);
                  const dataIeri = new Date();
                  dataIeri.setDate(dataIeri.getDate() - 1); // Ottieni la data di ieri

                  if (dataTurnoObj >= dataIeri) { // Confronta con la data di ieri
                    return (
                      <TableRow style={{ /*backgroundColor: turno.colore*/ }} key={turno.id}>
                        <TableCell align="top">{turno.giorno}</TableCell>
                        <TableCell align="top">
                          {highlightText(turno.fratello1, searchTerm)}<br />
                          {highlightText(turno.fratello2, searchTerm)}<br />
                          {highlightText(turno.fratello3, searchTerm)}
                        </TableCell>
                        <TableCell align="top">{turno.orario}</TableCell>
                        <TableCell align="top">{turno.luogo}</TableCell>
                      </TableRow>
                    );
                  }
                } else {
                  console.error('Formato data non valido:', turno.data);
                }
              } else {
                console.error('Turno non definito o mancante la proprietà data:', turno);
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <div>
          <ToastContainer handleCloseDialog={handleCloseDialog} />
          <Contattaci />
        </div>
      </Dialog>
    </div>
  );
}

export default TabellaVirtuale;
