'use client'

import { useEffect } from 'react';

export default function Footer({clicked}){

    const changeColor = (event) => {
        const currentColor = event.target.style.backgroundColor;
        document.body.style.backgroundColor = currentColor;
        let aText = document.getElementsByTagName("a");
        let supText = document.getElementsByTagName("sup");
        let input = document.querySelector("input");
        let loader = document.getElementById("id");
        let secondary;
        switch (currentColor) {
            case 'red':
                secondary = 'black';
                break;
            case 'blue':
                secondary = 'white'
                break;        
            case 'seagreen':
                secondary = 'yellow';
                break;
            case 'darkorange':
                secondary = 'brown';
        }

        localStorage.setItem('secondaryColor', secondary);
        localStorage.setItem('currentColor', currentColor);

        for (let i = 0; i < aText.length; i++){
            aText[i].style.color = secondary;
        }
        for (let i = 0; i < supText.length; i++){
            supText[i].style.color = secondary;
        }
        input.style.borderBottomColor = secondary;
        input.style.color = secondary;
        input.style.setProperty('--c', secondary);
    }

    useEffect(() => {
        // Recuperar el color actual y el color secundario del almacenamiento local al cargar la página
        const storedCurrentColor = localStorage.getItem('currentColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');
        if (storedCurrentColor && storedSecondaryColor) {
            // Aplicar el color actual y el color secundario recuperados a los elementos
            document.body.style.backgroundColor = storedCurrentColor;

            const aText = document.getElementsByTagName("a");
            const supText = document.getElementsByTagName("sup");
            const input = document.querySelector("input");

            if(loader) {
                loader.style.backgroundColor = storedCurrentColor;
            }

            for (let i = 0; i < aText.length; i++){
                aText[i].style.color = storedSecondaryColor;
            }
            for (let i = 0; i < supText.length; i++){
                supText[i].style.color = storedSecondaryColor;
            }
            input.style.borderBottomColor = storedSecondaryColor;
            input.style.color = storedSecondaryColor;
            input.style.setProperty('--c', storedSecondaryColor); 
        }
    }, []);

    return (
        <footer className="headerfooter">
            {clicked && (
                <>
                    <div/>
                    <div style={{textAlign: 'justify'}}>
                        <a style={{opacity: '0'}}> 
                            tesoro térmico IS A DICTIONARY APP BUILT WITH REACT USING NEXTJS,
                            THE URBAN DICTIONARY API FEEDS THE APP WITH EVERY DEFINITION FOUND OF THE SEARCHED WORD.
                            THE LITTLE PALETTE  IS INSPIRED BY THE COLORS USED ON 'jazz' BY henri matisse.
                        </a>
                    </div>
                </>
            )}
            <div className="colors">
                <div className="colorbox" style={{backgroundColor: 'blue', borderBottomColor: 'white'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'red', borderBottomColor: 'black'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'seagreen', borderBottomColor: 'yellow'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'darkorange', borderBottomColor: 'brown'}} onClick={changeColor}></div>
            </div>
            <div className='info'>    
                <a>made by SHORTTERMGOALZ</a>
            </div>
      </footer>
    )
}