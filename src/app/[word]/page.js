'use client'

import Header from '../../../components/headerWord';
import { useEffect,useState } from 'react';

export default function wordPage({params: {word}}){

    const [currentCount, setCurrentCount] = useState(0);
    const [words, setWords] = useState([]);
    const [noWord,setNoword] = useState(false);

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
                setWords(result.list);
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
            if(currentCount > -1){
                setCurrentCount(prevCount => Math.max(prevCount - 1, 0));
            }
        };

        const handleRightArrowClick = () => {
            if(currentCount < 9){
                setCurrentCount(prevCount => Math.min(prevCount + 1));
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
    },[currentCount]);

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

    const num = 0;

    return (

    <main>
        <div className='loader' id='loader'/>
        <Header/>
        <div className='arrows'>
            <div className='arrow' id='leftArrow'></div>
            <div className='arrow' id='rightArrow'></div>
        </div>
        <div className='wordContainer'>
            <div className='text'>
                <div className='word'>
                    <a>{word}</a>
                </div>
                <div className='definition'>
                    <a>{currentCount + 1 + '. ' + words[currentCount]?.definition}</a>
                </div>
                <div className='example'>    
                    <a>{words[currentCount]?.example}</a>
                </div>
            </div>
        </div>
        <div/>
    </main>
        
    )
}