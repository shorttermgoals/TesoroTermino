'use client'

import Header from '../../../components/headerWord';
import { useEffect,useState } from 'react';

export default function wordPage({params: {word}}){

    const [currentCount, setCurrentCount] = useState(0);
    const [words, setWords] = useState([]);
    const [noWord,setNoword] = useState(false);

    function eliminarCorchetes(cadena) {
        return cadena.replace(/\[|\]/g, '');
    }

    function espaciarFrases(cadena) {
        return cadena.replace(/%20/g, ' ');
    }

    async function getDefinition() {
        const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${word}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6d342bae6amshf8d7e494f8ebc38p155582jsndbb09a10d255',
            'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
          }
        };
    
        try {
              const response = await fetch(url, options);
              // ESTA METIENDO TODAS LAS DEFINICIONES EN 'definition' DENTRO DEL ARRAY
              const result = await response.json();
              // ESTA METIENDO TODA LA INFORMACION EN UNA LINEA DE TEXTO
              // const result = await response.text();
              
              if(result.list.length === 0) {
                setNoword(true);
              } else {
                console.log(result.list[0]);
                const processedDefinitions = result.list.map(item => ({
                    ...item,
                    definition: eliminarCorchetes(item.definition),
                    example: eliminarCorchetes(item.example)
                }));
                setWords(processedDefinitions);
                setNoword(false);
              }
            } catch (error) {
              console.error(error);
              setNoword(true);
            }
    
    };

    useEffect(()=> {
        getDefinition();
    },[])

    useEffect(() => {

        const storedCurrentColor = localStorage.getItem('currentColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');
        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");

        const handleLeftArrowClick = () => {
            if(currentCount > 0){
                setCurrentCount(prevCount => prevCount - 1);
            }
        };

        const handleRightArrowClick = () => {
            if(currentCount < words.length - 1){
                setCurrentCount(prevCount => prevCount + 1);
            }
        };


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

        return () => {
            if (leftArrow && rightArrow) {
                leftArrow.removeEventListener("click", handleLeftArrowClick);
                rightArrow.removeEventListener("click", handleRightArrowClick);
            }
        };
    },[currentCount, words]);

    useEffect(() => {
        var loader = document.getElementById("loader");
        setTimeout(function() {
          loader.classList.add("hidden");
        }, 500);
    },[words]);

    window.addEventListener("load" , function() {
    var loader = document.getElementById("loader");
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 500);
    });

    const num = 0;

    return (

    <main style={{justifyContent:'start'}}>
        <div className='loader' id='loader'/>
        <Header/>
        {!noWord && (
            <div className='arrows'>
                <div className='arrowL' id='leftArrow'></div>
                <div className='arrowR' id='rightArrow'></div>
            </div>
        )}
        <div className='wordContainer'>
            <div className='text'>
                <div className='word'>
                    {!noWord && (
                        <a>{espaciarFrases(word)}</a>
                    )}
                    
                </div>
                <div className='definition'>
                    {!noWord && (
                        <a>{currentCount + 1 + '. ' + words[currentCount]?.definition}</a>
                    )}
                    <a className='wordNotFound' style={{display: noWord ? 'block' : 'none', fontSize: '100px'}}>Word not found</a>
                </div>
                <div className='example'>    
                    {!noWord && (
                        <a>{words[currentCount]?.example}</a>
                    )}
                </div>
            </div>
        </div>
        <div/>
    </main>
        
    )
}