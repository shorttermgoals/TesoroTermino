import Clock from './clock.js'


export default function Header(){

    return (
        <header className='headerfooter'>
            <div>
                <Clock/>
                <sup> (GMT+1)</sup>
            </div>
            <div className='info'>    
                <a>INFO</a>
                <sup></sup>
            </div>
      </header>
    )
}