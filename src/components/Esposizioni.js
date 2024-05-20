import React from 'react';
import { Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Fab, Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


import img1 from './img/1.jpg';
import img2 from './img/IMG_2721.jpg';
import img3 from './img/IMG_2734.jpg';

const Esposizioni = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Disposizioni Espositori</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Coppia espositori:</Typography><br></br>
          <Card>
            <CardContent>
              
              <Typography variant="h4">Espositore 1 "<i>Puoi vivere felice per sempre</i>"</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1° Ripiano: Italiano + Albanese / Arabo + Inglese" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2° Ripiano: Ucraino (k) + Rumeno (m) / Tagalog (tg) + Spagnolo" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3° Ripiano: Hindi (Hi) + Cinese (Ch) / Francese (f)" />
                </ListItem>
              </List>
              <img src={img1} style={{ borderRadius: '1rem', maxWidth: '100%' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4">Espositore 2 "<i>Un mondo nel caos, proteggi ciò che conta</i>"</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1° Ripiano: Italiano / Inglese (e)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2° Ripiano: Bengali + Singalese / Spagnolo (s)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3° Ripiano: Rumeno (m) + Hindi / Ucraino" />
                </ListItem>
              </List>
              <img src={img2} style={{ borderRadius: '1rem', maxWidth: '100%' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Espositore singolo, per turni giovedì 15:30-18:30 e Sabato 9-12 (Palocco)</Typography>
          <br></br><Card>
            <CardContent>
              
              <Typography variant="h4">Espositore 1 "<i>Alla ricerca della verita'</i>"</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1° Ripiano: Puoi vivere felice per sempre: Tagalog + Hindi / Italiano + Spagnolo" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2° Ripiano: Svegliatevi: Singalese / Italiano" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3° Ripiano: Arabo + Inglese /Romeno" />
                </ListItem>
              </List>
              <img src={img3} style={{ borderRadius: '1rem', maxWidth: '100%' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Fab
        color="primary"
        aria-label="Esposizioni"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <Link to="/">
          <HomeIcon sx={{ color: 'white' }}/>
        </Link>
        
      </Fab>
    </Container>
  );
};

export default Esposizioni;
