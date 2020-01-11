import React, {Component} from 'react';
import 'es6-shim'
import './App.css';
import SwitchCom from './nav/nav'
import './assets/css/public.css'
import './assets/css/public.less'


class App extends Component {
    render() {
        return (
            <div className="App">
                <SwitchCom/>
            </div>
        );
    }
}

export default App;
