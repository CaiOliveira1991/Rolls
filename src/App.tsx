import React from 'react'

import { BrowserRouter, Route, Routes} from 'react-router-dom'

import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Circle from './components/Circle';

import Home from './pages/Home';
import Show from './pages/Show';
import ErroPage from './pages/ErroPage';
import Cullinam from './pages/Cullinan';
import ApCullinan from './pages/ApCullinan';
import DetCullinan from './pages/DetCullinan';
import Spectre from './pages/Spectre';
import ApSpectre from './pages/ApSpectre';
import DetSpectre from './pages/DetSpectre'

function App() {
  return (

     <BrowserRouter>
        <Header />
        <AnimatePresence>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Show" element={<Show />} />
              <Route path="Cullinan" element={<Cullinam />} >
                  <Route path="ApCullinan" element={<ApCullinan />} />
                  <Route path="DetCullinan" element={<DetCullinan />} />
              </Route>
              <Route path="Spectre" element={<Spectre />}>
                  <Route path="ApSpectre" element={<ApSpectre />} />
                  <Route path="DetSpectre" element={<DetSpectre />} />
              </Route>
              <Route path="*" element={<ErroPage />} />
          </Routes>
        </AnimatePresence>
        <Circle />
      </BrowserRouter>

  );
}

export default App;


