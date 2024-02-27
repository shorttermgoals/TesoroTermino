'use client'

import Header from '../../../components/headerWord';
import { useEffect } from 'react';

export default function wordPage({params: {word}}){

    useEffect(() => {

        const storedCurrentColor = localStorage.getItem('currentColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');

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
    return (

    <main>
        <div className='loader' id='loader'/>
        <Header/>
        <a>Holaaa esta es la palabra {word}</a>
        <div/>
    </main>
        
    )
}