import Header from '../../../components/header'

export default function wordPage({params: {word}}){


    return (

    <main>
        <Header/>
        <a>Holaaa esta es la palabra {word}</a>
        <div/>
    </main>
        
    )
}