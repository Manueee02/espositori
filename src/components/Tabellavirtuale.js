import { useEffect, useState } from 'react';
import { db } from "./firebase";
import { ref, get } from "firebase/database";

export default function TabellaVirtuale() {
  const [turni, setTurni] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
        
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

 
    // altezza dell'iframe in base alla pagina web

 const iframeRef = useRef(null);
  useEffect(() => {const iframe = iframeRef.current;
    iframe.style.height = '0px'; 

    // imposta l'altezza iniziale dell'iframe a 0
    const updateHeight = () => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const height = iframeDoc.documentElement.scrollHeight;

    iframe.style.height = height + 'px';};
    iframe.onload = updateHeight; // aggiorna l'altezza quando la pagina è caricata    
    window.addEventListener('resize', updateHeight); // aggiorna l'altezza quando la finestra cambia dimensione    
    return () => window.removeEventListener('resize', updateHeight); 
    
    // rimuovi l'ascoltatore quando il componente viene smontato  
  }, []);*/

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

  const data = new Date();

  return (
    <div>
      {loading ? (
        // Loader mentre i dati vengono caricati
        <div><div class="loader book">
          <figure class="page"></figure>
          <figure class="page"></figure>
          <figure class="page"></figure>
        </div>
      
      <h2>Loading</h2></div>
      ) : (
        // Tabella dei turni
        <table>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">In turno</th>
              <th scope="col">Orario</th>
              <th scope="col">Luogo</th>
            </tr>
          </thead>
          <tbody>
            {turni.map((turno) => {
                if (turno && turno.data) {
                  const dataTurno = turno.data.split('/');
                  const [giorno, mese, anno] = dataTurno.map(Number);
                  if (!isNaN(giorno) && !isNaN(mese) && !isNaN(anno)) {
                    const dataTurnoObj = new Date(anno, mese - 1, giorno);
                    const dataIeri = new Date();
                    dataIeri.setDate(dataIeri.getDate() - 1); // Ottieni la data di ieri
                    
                    if (dataTurnoObj >= dataIeri) { // Confronta con la data di ieri
                      return (
                        <tr style={{ backgroundColor: turno.colore }} key={turno.id}>
                          <td scope="row" data-label="Data">{turno.giorno}</td>
                          <td data-label="In turno">{turno.fratello1}<br />{turno.fratello2}<br />{turno.fratello3}</td>
                          <td data-label="Orario">{turno.orario}</td>
                          <td data-label="Luogo">{turno.luogo}</td>
                        </tr>
                      );
                    }
                  } else {
                    console.error('Formato data non valido:', turno.data);
                  }
                } else {
                  console.error('Turno non definito o mancante la proprietà data:', turno);
                }
              })
            }
          </tbody>
        </table>
      )}
    </div>
  );
}
