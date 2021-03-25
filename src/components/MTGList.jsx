import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';



const MTGList = props => {
    const { name, cmc, colors, type, rarity } = props
    console.log("List starts here")
    const [cards, setCards] = useState([]);


    useEffect(() => {
        axios.get('https://api.magicthegathering.io/v1/cards')
            .then(response => setCards(response.data.cards))
            .catch(err => console.log(err))

    }, [])


    return (
        <div>
            <h1>Here is the list</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CMC</th>
                            <th>Colors</th>
                            <th>Type</th>
                            <th>Rarity</th>
                        </tr>

                    </thead>
                
                    <tbody>
                        {cards.map((cards, i) => {
                            return <tr key={i}>
                                <td><Link className= "btn btn-info" to = {`/cards/${cards.id}`}>{cards.name}</Link></td>
                                <td>{cards.cmc}</td>
                                <td>{cards.colors}</td>
                                <td>{cards.type}</td>
                                <td>{cards.rarity}</td>

                            </tr>
                        })}
                    </tbody>
                </table>
        </div>







    )
}
export default MTGList;