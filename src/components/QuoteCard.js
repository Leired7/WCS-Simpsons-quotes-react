import React from 'react';
import './QuoteCard.css'

function QuoteCard () {
    return (
        <figure class = "QuoteCard" > 
            <img 
            src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"

            alt="Nelson Muntz"/> 
            <figcaption> 
            <blockquote>
                Robar en tiendas es un crimen sin víctimas, como golpear a alguien en la oscuridad.
            </blockquote> 
            <cite> Nelson Muntz </cite> 
            </figcaption> 
        </figure>
    );
}
export default QuoteCard