'use client'

import {useState, useEffect} from 'react';
import Header from '../../components/headerHome'
import Footer from '../../components/footer'
import { useRouter } from 'next/navigation';


export default function Home() {

  const [word, setWord] = useState('');
  const router = useRouter();
  const [clicked,setClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    router.push(`/${word}`);
  }

  useEffect(() => {
    var loader = document.getElementById("loader");
    setTimeout(function() {
      loader.classList.add("hidden");
    }, 500);
  },[])


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
      <Footer clicked={clicked}/>
    </main>
  );
}
