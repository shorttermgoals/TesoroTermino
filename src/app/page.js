'use client'

import {useState, useEffect} from 'react';
import Header from '../../components/headerHome'
import Footer from '../../components/footer'
import { useRouter } from 'next/navigation';


export default function Home() {

  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const router = useRouter();
  const [clicked,setClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    router.push(`/${word}`);
  }

  

  window.addEventListener("load" , function() {
    var loader = document.getElementById("loader");
    setTimeout(function() {
      loader.classList.add("hidden");
    }, 500);
  });

  return (
    <main>
      <div className='loader' id='loader'/>
      <Header clicked={clicked} setClicked={setClicked}/>
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
      <Footer clicked={clicked}/>
    </main>
  );
}
