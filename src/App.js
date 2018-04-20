import React from 'react';
import axios from 'axios';

import { MyFa } from './MyFa';
import { Widget } from './Widget';
import { Crypto } from './Crypto';

import './App.css';


class App extends React.Component {

    state = {
        coins: []
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=77')
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })
    }

    render() {
        return (
        <div>
            <div className="ml-3">
                <h1 className="display-4">Crypto by Colors</h1>
                <h6 className="">
                    Created for educational purposes only by <a href="https://github.com/Adjectival">Alexander Jacks</a>.
                </h6>
                <h6 className="">
                    Not intended as a replacement for professional investment advice.
                </h6>
                <h4>
                    Want a crypto guide?
                    <a href="https://how-to-crypto.herokuapp.com/"> Check this out.</a>
                </h4>
                <h6 className="donate">
                    Donate ETH: 0xd74cb5c0e868B06DaEA6Bb25364dCF1f2C096855
                </h6>
            </div>



            <ul className="card-deck">
{/* iterate thru the array list gathered from the API*/}
                { this.state.coins.map(coin =>
                    <a href={"https://coinmarketcap.com/currencies/" + coin.id}>
                    <li className={"card bg-" + coin.id}>
                        {/* title zone */}
                        <img src={"/images/"+ coin.symbol +".png"} />
                        <span className="h2">#{coin.rank} {coin.name}</span>
                        <span className="h3">{coin.symbol}</span>
                        {/* metadata zone */}
                        <span className="h5">
                            Value in USD $ 
                            <span className="h4">{coin.price_usd}</span>
                        </span><span className="h5">
                            Weekly Change:
                            <span className="h4"> {coin.percent_change_7d}%</span>
                        </span>
                    </li>
                    </a>
                )}
            </ul>
        </div>
        );
    }
}

export default App;
