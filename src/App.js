import './App.css';
import { navigate, Router } from '@reach/router';
import { React, useState } from 'react';
import MTGList from './components/MTGList';
import CardInfo from './views/CardInfo';
import CardLegalities from './views/CardLegalities';

function App() {
    const [getCards, setCards] = useState([]);

    return (
        <div className="App" >
            <Router >
                <MTGList path="/" />
                <CardInfo path = '/cards/:id'/>
                <CardLegalities path = '/cards/legalities'/>
            </Router>
        </div>
    );
}

export default App;