'use client'

export default function Footer(){

    const changeColor = (event) => {
        const currentColor = event.target.style.backgroundColor;
        document.body.style.backgroundColor = currentColor;
    }

    return (
        <footer className="headerfooter">
            <div className="colors">
                <div className="colorbox" style={{backgroundColor: 'red'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'blue'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'pink'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'darkorange'}} onClick={changeColor}></div>
            </div>
            <div className='info'>    
                <a>made by SHORTTERMGOALZ</a>
            </div>
      </footer>
    )
}