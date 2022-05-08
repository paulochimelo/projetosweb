import React from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

import Correlacaoeregrecao from './pages/correlacaoeregrecao';
import Descritiva from './pages/descritiva';
import Probabilidade from './pages/probabilidade';
import Sobre from './pages/sobre';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Correlacaoeregrecao} />
            <Route path="/descritiva" component={Descritiva} />
            <Route path="/probabilidade" component={Probabilidade} />
            <Route path="/sobre" exact component={Sobre} />
        </BrowserRouter>
    );
}

export default Routes;