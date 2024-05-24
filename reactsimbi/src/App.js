import React from 'react';
import DataFetcher from './components/DataFetcher';
import './App.css';


function App() {
    return (
        <div className="App">
            <p className='text'>Ver outros Projetos do Proponente</p>
            <br></br>
            <header className="App-header">
                {/* <h1>Consumo da API Laravel</h1> */}

                <DataFetcher />
            </header>
        </div>
    );
}

export default App;
