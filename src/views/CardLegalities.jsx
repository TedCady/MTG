import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const CardLegalities = props => {
    const { legality, format } = props;
    console.log("legality starts here")
    const [legalities, setLegalities] = useState({});


    useEffect((request, response) => {
        axios.get(`https://api.magicthegathering.io/v1/cards/${props.id}`)
            .then(response => setLegalities(response.data.cards.legalities))
            .catch(err => console.log(err))
    }, [props.id])

    return (
        <div>
            <h3>Game format and legality</h3>

            {legalities.map((legalities, i) => {
                return <ul key={i}>
                    <li><b>Format: </b>{legalities.gameFormat}</li>
                    <li><b>Legality: </b>{legalities.legality}</li>

                </ul>
            })
    
        };
        </div>
    )
        
    };
export default CardLegalities
