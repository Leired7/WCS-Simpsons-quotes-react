import React from 'react';
import QuoteCard from './QuoteCard';

const quotes = [
    {
        quote :
        "Los hechos no tienen sentido. Podrías usar los hechos para probar cualquier cosa que sea remotamente cierta",
        character: "Homer Simpson",
        image :
           "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
    },
    {
        quote : "Nada de lo que diga puede molestarnos. Somos la generación MTV",
        character : "Bart Simpson" ,
        image :
           "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
    },
    {
        quote : "Ahí es donde vi el duende ... Me dijo que quemara cosas",
        character: "Ralph Wiggum" ,
        image :
           "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
    },
    {
        quote :
           "Hola, Simpson. Hoy voy en el autobús porque mamá escondió las llaves de mi auto para castigarme por hablar con una mujer por teléfono. Tenía razón al hacerlo",
        character: "Principal Skinner" ,
        image :
           "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
    }
]
const Quotelist = () => (
    < div >
        {quotes.map (item => (
            <QuoteCard quote={item.quote} image={item.image} character={item.character} />
          ))}
    </ div >
    
);

export default Quotelist;

