import Clock from './components/clock.js'



export default function Home() {

  
  return (
    <main>
      <div className="background">
        <Clock/>
        <sup> (GMT+1)</sup>
        <a>INFO</a>
      </div>
    </main>
  );
}
