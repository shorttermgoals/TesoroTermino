'use client'

import {useState, useEffect} from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'


export default function Home() {

  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');

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
          
          console.log(result);
          setWords(result.list);
          console.log(result.definition);
        } catch (error) {
          console.error(error);
        }

  };

  useEffect(() => {
   
    getDefinition();

  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    getDefinition();
  }

  return (
    <main>
      <Header/>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Search...' 
          value={word} 
          onChange={e => setWord(e.target.value)} 
          required
        />
      </form>
      {words &&
            words.map((word) => (
              <article key={word.defid}>
                <a className="font-bold text-3xl lg:text-4xl mb-8">
                  {word.word}
                </a>

                <a className="text-neutral-700 mb-4">
                  <em className="font-bold"></em> {word.definition}
                </a>

                
              </article>
            ))}
      <Footer/>
    </main>
  );
}
