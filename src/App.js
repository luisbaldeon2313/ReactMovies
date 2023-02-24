import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import './App.css';
import 'bulma/css/bulma.css'

// /detail/123
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/detail/:movieId' element={<Detail/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
