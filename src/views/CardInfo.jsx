import React, {useEffect, useState} from 'react';
import axios from 'axios';


const CardInfo = props => {
    const {name, text, legality, gameFormat, power, toughness, setName, imageUrl} = props
    
    const [cardInfo, setCardInfo] = useState({})


    useEffect((request, response) => {
        axios.get(`https://api.magicthegathering.io/v1/cards/${props.id}`)
        .then(response => {
            console.log(response.data.card)
            setCardInfo(response.data.card)})
        .catch(err => console.log(err))
    
},[props])




return (
    <div>
        <h2>{cardInfo.name}</h2>
        <p><img src={`${cardInfo.imageUrl}`} alt=""/></p>
        <ul>
            <li><b>Text: </b>{cardInfo.text}</li>
            <li><b>Power/Toughness: </b>{cardInfo.power}/{cardInfo.toughness}</li>
            <li><b>Set Name: </b>{cardInfo.setName}</li>
        </ul>
        <a href="/cards/legalities">Legality for this Card</a>
        <h3>Languages</h3>
        <ul>
            {/* <li>{cardInfo.foreignNames[0].name}</li> */}
        </ul>
    </div>
)
};

export default CardInfo;