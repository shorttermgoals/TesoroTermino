'use client'

import {useState, useEffect} from 'react'

export default function Clock(){

    const d = new Date();
    const [currentTime, setCurrentTime] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        const d = new Date();
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        const date = `${hours}:${minutes}:${seconds}`;
        setCurrentTime(date);
      }, 500);
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(timer);
    }, []); // Ejecutar solo una vez al montar el componente

    return <a>{currentTime}</a>

}
