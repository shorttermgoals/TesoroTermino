'use client'

import {useState, useEffect} from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'


export default function Home() {

  const [words, setWords] = useState([]);
  const [word, setWord] = useState('bird');

  useEffect(() => {
    async function getDefinition() {
      const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6d342bae6amshf8d7e494f8ebc38p155582jsndbb09a10d255',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
            const response = await fetch(url, options);
            // ESTA METIENDO TODAS LAS DEFINICIONES EN 'definition' DENTRO DEL ARRAY
            const result = await response.json();
            // ESTA METIENDO TODA LA INFORMACION EN UNA LINEA DE TEXTO
            // const result = await response.text();
            console.log(result);
            setWords(result.list);
          } catch (error) {
            console.error(error);
          }

    };

    getDefinition();

  }, []);

  
  return (
    <main>
      <Header/>
      <form onSubmit=''>
        <input type='text' placeholder='Search...' required></input>
      </form>
     
      <Footer/>
    </main>
  );
}
