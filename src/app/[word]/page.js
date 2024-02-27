'use client'

import Header from '../../../components/headerWord'

export default function wordPage({params: {word}}){

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