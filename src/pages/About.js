import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo></Logo>
            <Navigation></Navigation>
            <h1>A propos</h1>
            <p>
                un pays est une désignation géographique, un endroit, limité par ses frontières ;
                une nation désigne le peuple qui y vit ;
                un État désigne les institutions fonctionnant sur un territoire ;
                <br></br>
                on peut également parler de pays lorsque l'on désigne une aire géographique et culturelle très restreinte.
                le mot pays est souvent utilisé à la place du mot État. <br></br>On croit que cela a le même sens mais État est plus précis. « État » est normalement utilisé 
                pour les lois, les accords et les traités .Traités et accords ont un petit peu le même sens.
            </p>
            <br/>
            <p>
                Le sens le plus courant est aujourd'hui celui d'État ou État souverain. Toutefois, « pays » est moins précis et plus neutre qu’« État » 
                et permet de désigner des espaces<br></br> géographiques aux statuts très divers. Tous les pays reconnus suivent les standards internationaux 
                <br></br>
                de symboles nationaux tels les drapeaux et de droits politiques telle la citoyenneté. 
                Il y a en 2013, 196 pays reconnus par l'Organisation des Nations unies. D'autres pays <br></br>ne sont pas à l'ONU, pour des raisons politiques, par exemple Taïwan.
            </p>
        </div>
    );
};

export default About;