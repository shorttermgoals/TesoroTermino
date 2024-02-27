
import Clock from './clock'
import { useState, useRef, useEffect } from 'react';


export default function Header(){

    const [clicked,setClicked] = useState(false);
    const infoRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
      
        const infoElement = infoRef.current;
        const popupElement = popupRef.current;

        const handleClick = () => {
            setClicked(!clicked);
            // Actualizar el texto durante el clic
            infoElement.textContent = clicked ? "▼INFO" : "▲INFO";
            popupElement.style.display = clicked ? "none" : "block";
        };

        if (infoElement) {
            infoElement.addEventListener("mouseover", () => {
             
                // Cambiar el texto durante el hover dependiendo del estado de clicked
                infoElement.textContent = clicked ? "▲INFO" : "▼INFO";
            });

            infoElement.addEventListener("mouseout", () => {
           
                // Restaurar el texto original cuando el mouse sale, solo si no está clickeado
                if (!clicked) {
                    infoElement.textContent = "INFO";
                }
            });

            infoElement.addEventListener("click", handleClick);
        }
        // Limpiamos el event listener al desmontar el componente
        return () => {
            if (infoElement) {
                infoElement.removeEventListener("mouseover", () => {});
                infoElement.removeEventListener("mouseout", () => {});
                infoElement.removeEventListener("click", handleClick);
            }
        };
    }, [clicked]);
    

    return (
        <header className='headerfooter'>
            <div>
                <Clock/>
                <sup> (GMT+1)</sup>
            </div>
            <div className='info'>    
                <a className='infoText' ref={infoRef}>INFO</a>
                <sup></sup>
            </div>
            <div/>
            <div ref={popupRef} style={{display: 'none'}}>
                <a> 
                    tesoro térmico IS A DICTIONARY APP BUILT WITH REACT USING NEXTJS AS A FRAMEWORK,
                    THE <a style={{textDecoration: 'none'}} href='https://www.urbandictionary.com/'>URBAN DICTIONARY</a> API FEEDS THE APP WITH EVERY DEFINITION FOUND OF THE SEARCHED WORD.
                    ADDED A LITTLE PALETTE INSPIRED BY THE COLORS USED ON 'JAZZ' BY HENRI MATISSE.
                    SEE YA
                </a>
            </div>
      </header>
    )
}