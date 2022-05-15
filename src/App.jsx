import React from 'react'
import './assets/css/base/base.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Pagina404 from './pages/Pagina404'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Fisioterapia from './pages/Fisioterapia'
import TerapiaOcupacional from './pages/TerapiaOcupacional'
import Fonoaudiologia from './pages/Fonoaudiologia'
import Psicologia from './pages/Psicologia'
import EstimulacaoVisual from './pages/EstimulacaoVisual'
import Therasuit from './pages/Therasuit'
import Musicoterapia from './pages/Musicoterapia'
import Therapias from './pages/Therapias'







function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home exact path='/' />      
        </Route>
        <Route path='/therapias'>
          <Therapias />
        </Route>
        <Route path='/fisioterapia'>
          <Fisioterapia />
        </Route>
        <Route path='/terapia_ocupacional'>
          <TerapiaOcupacional />
        </Route>
        <Route path='/fonoaudiologia'>
          <Fonoaudiologia />
        </Route>
        <Route path='/psicologia'>
          <Psicologia />
        </Route>
        <Route path='/estimulacao_visual'>
          <EstimulacaoVisual />
        </Route>
        <Route path='/therasuit'>
          <Therasuit />
        </Route>
        <Route path='/musicoterapia'>
          <Musicoterapia />
        </Route>
        <Route>  
          <Pagina404 />
        </Route>
      </Switch>
        <Rodape />        
    </Router>
  )
}

export default App;
