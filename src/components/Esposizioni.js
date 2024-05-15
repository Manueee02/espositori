import { useRef, useEffect } from 'react';

export default function Esposizioni(){
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
  }, []);
 return (
     <iframe ref={iframeRef} src="tabella_turni_iframe/esposizioni.html"  title="Example" width="100%" frameBorder="0" scrolling="no" />
     );}
