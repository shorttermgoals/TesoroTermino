'use client'

export default function Footer(){

    const changeColor = (event) => {
        const currentColor = event.target.style.backgroundColor;
        document.body.style.backgroundColor = currentColor;
        let aText = document.getElementsByTagName("a");
        let supText = document.getElementsByTagName("sup");
        let input = document.querySelector("input");
        let secondary;
        switch (currentColor) {
            case 'red':
                secondary = 'black';
                break;
            case 'blue':
                secondary = 'white'
                break;        
            case 'cornsilk':
                secondary = 'blue';
                break;
            case 'darkorange':
                secondary = 'brown';
        }

        for (let i = 0; i < aText.length; i++){
            aText[i].style.color = secondary;
        }
        for (let i = 0; i < supText.length; i++){
            supText[i].style.color = secondary;
        }
        input.style.borderBottomColor = secondary;
        input.style.color = secondary;
        input.style.setProperty('--c', secondary);    
    }

    return (
        <footer className="headerfooter">
            <div className="colors">
                <div className="colorbox" style={{backgroundColor: 'red', borderBottomColor: 'black'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'blue', borderBottomColor: 'white'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'cornsilk', borderBottomColor: 'blue'}} onClick={changeColor}></div>
                <div className="colorbox" style={{backgroundColor: 'darkorange', borderBottomColor: 'brown'}} onClick={changeColor}></div>
            </div>
            <div className='info'>    
                <a>made by SHORTTERMGOALZ</a>
            </div>
      </footer>
    )
}