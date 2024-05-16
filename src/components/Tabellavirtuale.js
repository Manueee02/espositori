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
import { ref, get } from "firebase/database";
import { db } from "./firebase";

function TabellaVirtuale() {
  const [turni, setTurni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredTurni = turni.filter((turno) => {
    const fratelli = [turno.fratello1, turno.fratello2, turno.fratello3];
    return fratelli.some((fratello) =>
      fratello.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: '0 auto', marginBottom: '20px' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Cerca fratello"
          inputProps={{ 'aria-label': 'cerca fratello' }}
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
                        <TableCell align="top">{turno.fratello1}<br />{turno.fratello2}<br />{turno.fratello3}</TableCell>
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
    </div>
  );
}

export default TabellaVirtuale;
