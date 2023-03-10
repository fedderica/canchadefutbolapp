import React from 'react';
 import { Provider } from 'react-redux'
 import store from "./store"
import Jugadores from './componentes/Jugadores';
import EquipoSeleccionado from './componentes/equipoSeleccionado';
import "./styles/styles.css"

const App = () => (
  <Provider store={store}>
    <main>
    <h1>Edmanager</h1>
    <Jugadores/>
  <EquipoSeleccionado />
  </main>
  </Provider>
)


export default App;
