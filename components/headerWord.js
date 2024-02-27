import Link from 'next/link'
import Clock from './clock'


export default function Header(){

    return (
        <header className='headerfooter'>
            <div>
                <Clock/>
                <sup> (GMT+1)</sup>
            </div>
            <div className='info'>    
                <Link href="/">xCLOSE</Link>
                <sup></sup>
            </div>
      </header>
    )
}