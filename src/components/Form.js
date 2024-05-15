import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function FormRiviste() {
/*
    const firebaseConfig = {
        apiKey: "AIzaSyDvS1wWjJ4QL-CULZxuNQ1YU_wGCb4Wce8",
        authDomain: "espositori-f9bcb.firebaseapp.com",
        projectId: "espositori-f9bcb",
        storageBucket: "espositori-f9bcb.appspot.com",
        messagingSenderId: "50100540733",
        appId: "1:50100540733:web:7518f5896076a88bfce154"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);*/


    return(
        <div id="form">
            <p><b>Inserire qui le pubblicazioni lasciate durante il turno e cliccare invia.</b></p>
            <form name="frmEmail" method="post" action="?send=1">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                        <TableHead>
                        </TableHead>
                        <TableBody>

                            <TableRow  className="table">
                                <TableCell>
                                    Puoi vivere felice per sempre
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_opuscoli" placeholder="Selezionare numero">
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
                                    La Bibbia, qual'è il suo messaggio?
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_Bibbia" placeholder="Selezionare numero">
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
                                    La vita: opera di un Creatore?
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_creatore" placeholder="Selezionare numero">
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
                                    Rivista in corso
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_rivista" placeholder="Selezionare numero">
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
                                    La Bibbia anche per me
                                </TableCell>
                                <TableCell align="right">
                                    <select name="n_bimbi" placeholder="Selezionare numero">
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
                                    <b>Data:</b>
                                </TableCell>
                                <TableCell align='right'>
                                    <input type="date" name="data" required></input>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><input type="submit" name="submit" value="invia"></input></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>               
            </form>
        </div>

    )
}
