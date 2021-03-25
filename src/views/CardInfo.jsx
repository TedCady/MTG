import React, {useEffect, useState} from 'react';
import axios from 'axios';


const CardInfo = props => {
    const {name, text, legality, gameFormat, power, toughness, setName} = props
    const [cardInfo, setCardInfo] = useState("")

    useEffect((request, response) => {
        axios.get('https://api.magicthegathering.io/v1/cards')
        .then(response = setCardInfo(response.data))
        .catch(err => console.log(err))
    
},[props.data])

return (
    <div>
        <h2>{cardInfo.name}</h2>
        <ul>
            <li><b>Text:</b>{cardInfo.text}</li>
            <li><b>Legality:</b>{cardInfo.legality}</li>
            <li><b>Format:</b>{cardInfo.gameFormat}</li>
            <li><b>Power/Toughness:</b>{cardInfo.power}/{cardInfo.toughness}</li>
            <li><b>Set Name:</b>{cardInfo.setName}</li>
        </ul>
    </div>
)
};

export default CardInfo;