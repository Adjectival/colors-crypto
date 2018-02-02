import React, { Component } from 'react'
import { Router, browserHistory, Route } from 'react-router'
import { MyFa } from './MyFa'
import { Widget } from './Widget'

import './App.css';

const Page = ({ title }) => (
    <div className="App">
    {/* title, gears for Ohs */}
        <div className="App-header row justify-content-around">
            <div>
                <h1 className="emboss">
    {/* line 1 */}
                    <span className="d-block">F<MyFa name='cog' size={1} spin />nt Awes<MyFa name='cog' size={1} spin />me</span>
    {/* line 2 */}
                    <span className="d-block">Crypt<MyFa name='cog' size={1} spin />  N<MyFa name='cog' size={1} spin />tes</span>
                </h1>
                <h6 className="emboss">
                    Created for educational purposes only.
                </h6>
                <h6 className="emboss">
                    Not intended as a replacement for professional investment advice.
                </h6>
                <h6 className="emboss">
                    Donate ETH: 0xd74cb5c0e868B06DaEA6Bb25364dCF1f2C096855
                </h6>
                <h6 className="emboss">
                    Donate LTC: LNJ9mQn5FLWmKhvDTwkbiEKBVdiMbGCEaV
                </h6>
                <p>
                </p>
            </div>
            <div className="icontray py-3 px-5">
                <h5>Font Awesome Icon Key</h5>
                <div className="row justify-content-around">
                    <div className='justify-content-center m-2'><MyFa size={2} name='circle-o' /><h6>Pre-mined</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='stop-circle' /><h6>Finite</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='stop' /><h6>Infinite</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='shower' /><h6>Best ASIC</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='tv' /><h6>Best GPU</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='microchip' /><h6>Any mining</h6></div>
                </div>
                <div className="row justify-content-around">
                    <div className='justify-content-center m-2'><MyFa size={2} name='chain' /><h6>Original</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='unlink' /><h6>Altcoin</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='file-o' /><h6>Fungible</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='file-text-o' /><h6>Traceable</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='question-circle-o' /><h6>Anonymous</h6></div>
                    <div className='justify-content-center m-2'><MyFa size={2} name='hand-spock-o' /><h6>Non-profit</h6></div>
                </div>
            </div>

        </div>

    {/* room for more info links, under dev */}

        <p className="row justify-content-around">
            <h5>
            <a href="http://alexanderjacks.biz"><span className="fire">Learn more about this App, visit my Portfolio</span></a>
            </h5>
        </p>


{/* begin list of widgets */}

{/* top 10 */}

        <div className="bg bg1"><Widget currency='bitcoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg2"><Widget currency='ethereum' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop' /></span>
                    <span className='p-2'><MyFa size={2} name='microchip' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg3"><Widget currency='ripple' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg4"><Widget currency='bitcoin-cash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg5"><Widget currency='cardano' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg6"><Widget currency='stellar' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg8"><Widget currency='neo' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg7"><Widget currency='litecoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg9"><Widget currency='eos' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='unlink' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg10"><Widget currency='nem' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='tv' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

    {/* 11 - 20 */}

        <div className="bg bg12"><Widget currency='iota' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='circle-o' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg14">
            <Widget currency='dash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='shower' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg13">
            <Widget currency='monero' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop-circle' /></span>
                    <span className='p-2'><MyFa size={2} name='tv' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-o' /></span>
                    <span className='p-2'><MyFa size={2} name='question-circle-o' /></span>
                </div>
            </div>
        </div>


        <div className="bg bg11"><Widget currency='tron' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg17"><Widget currency='qtum' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg20"><Widget currency='lisk' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg15"><Widget currency='ethereum-classic' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <span className='p-2'><MyFa size={2} name='stop' /></span>
                    <span className='p-2'><MyFa size={2} name='microchip' /></span>
                    <span className='p-2'><MyFa size={2} name='chain' /></span>
                    <span className='p-2'><MyFa size={2} name='file-text-o' /></span>
                    <span className='p-2'><MyFa size={2} name='hand-spock-o' /></span>
                </div>
            </div>
        </div>

        <div className="bg bg24"><Widget currency='tether' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='money' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg19"><Widget currency='bitcoin-gold' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

    {/* 21 - 30*/}
        <div className="bg bg16"><Widget currency='icon' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg21"><Widget currency='raiblocks' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop' /></div>
                    <div className='p-2'><MyFa size={2} name='microchip' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg22"><Widget currency='populous' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg23"><Widget currency='omisego' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg18"><Widget currency='zcash' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='question-circle-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg25"><Widget currency='stratis' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                    <div className='p-2'><MyFa size={2} name='windows' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg27"><Widget currency='bytecoin-bcn' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='tv' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='question-circle-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg28"><Widget currency='siacoin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='file-o' /></div>
                    <div className='p-2'><MyFa size={2} name='server' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg29"><Widget currency='verge' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop-circle' /></div>
                    <div className='p-2'><MyFa size={2} name='shower' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                    <div className='p-2'><MyFa size={2} name='hand-spock-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg30"><Widget currency='ardor' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='circle-o' /></div>
                    <div className='p-2'><MyFa size={2} name='chain' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>

        <div className="bg bg26"><Widget currency='binance-coin' />
            <div className="icontray">
                <div className="row justify-content-around">
                    <div className='p-2'><MyFa size={2} name='stop' /></div>
                    <div className='p-2'><MyFa size={2} name='unlink' /></div>
                    <div className='p-2'><MyFa size={2} name='file-text-o' /></div>
                </div>
            </div>
        </div>


    </div>
);



const Home = (props) => (
 <Page title="Home"/>
);

const About = (props) => (
 <Page title="About"/>
);

const Settings = (props) => (
 <Page title="Settings"/>
);

class App extends Component {
 render() {
   return (
     <Router history={browserHistory}>
       <Route path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/settings" component={Settings}/>
     </Router>

   );
 }
}
export default App;
