'use client'

import Header from '../../../components/headerWord';
import { useEffect,useState } from 'react';

export default function wordPage({params: {word}}){

    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {

        const storedCurrentColor = localStorage.getItem('currentColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');
        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");

        const handleLeftArrowClick = () => {
            if(currentCount > -1){
                setCurrentCount(prevCount => Math.max(prevCount - 1, 0));
            }
        };

        const handleRightArrowClick = () => {
            if(currentCount < definitions.length){
                setCurrentCount(prevCount => Math.min(prevCount + 1, definitions.length - 1));
            }
        };

        //SE SALTA LA SEGUNDA DEFINICION EN EL ARRAY DE DEFINICIONES

        if(leftArrow && rightArrow) {
            leftArrow.addEventListener("click", handleLeftArrowClick);
            rightArrow.addEventListener("click", handleRightArrowClick);
        }

        if(storedCurrentColor && storedSecondaryColor) {

            const loader = document.getElementById("loader");
            const aText = document.getElementsByTagName("a");
            const suptText = document.getElementsByTagName("sup");

            document.body.style.backgroundColor = storedCurrentColor;

            if(loader) {
                loader.style.backgroundColor = storedCurrentColor;
            }

            for(let i=0 ; i < aText.length ; i++){
                aText[i].style.color = storedSecondaryColor;
            }

            for(let i=0 ; i < suptText.length ; i++){
                suptText[i].style.color = storedSecondaryColor;
            }
        }
    },[]);

    window.addEventListener("mouseover" , function() {
        var loader = document.getElementById("loader");
        setTimeout(function() {
          loader.classList.add("hidden");
        }, 500);
    });

    window.addEventListener("load" , function() {
    var loader = document.getElementById("loader");
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 500);
    });

    const definitions = [
        "(noun)a building which functions as a home for human habitation, it usually consists of a ground floor and one or more upper storeys.",
        "A fucking wooden or brick fucking place where you live eat and sleep in.",
        "To steal; To appropriate; To confiscate without authority; To borrow or take without permission"
    ]

    const num = 0;
    return (

    <main>
        <div className='loader' id='loader'/>
        <Header/>
        <div className='wordContainer' style={{display: 'grid'}}>
            <div className='arrow' id='leftArrow'></div>
            <div className='text'>
                <div style={{textAlign: 'justify'}} className='wordAndDefinition'>
                    <a style={{fontSize: '130px'}}>{word}</a>
                    <div/>
                    <a style={{fontSize: '40px'}}>{currentCount + 1 + '. ' + definitions[currentCount]}</a>
                </div>
                <div className='example'>    
                    <a style={{fontSize: '25px'}}>"Hope you don't mind, we housed your RPG dice to play Cee-lo."</a>
                    <div/>
                    <a style={{fontSize: '25px'}}>"That guy just totally housed your parking spot."</a>
                    <div/>
                    <a style={{fontSize: '25px'}}>"Where's my sippin' tequila??"
                    "Oh, the ladies housed it for margaritas."</a>
                </div>
            </div>
            <div className='arrow' id='rightArrow'></div>
        </div>
        <div/>
    </main>
        
    )
}