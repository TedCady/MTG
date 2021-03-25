import './App.css';
import { navigate, Router } from '@reach/router';
import { React, useState } from 'react';
import MTGList from './components/MTGList';
import CardInfo from './views/CardInfo';


function App() {
    const [getCards, setCards] = useState([]);

    return (
        <div className="App" >
            <Router >
                <MTGList path="/" />
                <CardInfo path = '/cards/:id'/>
            </Router>
        </div>
    );
}

export default App;