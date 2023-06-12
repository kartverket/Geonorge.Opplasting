import React from 'react';
import ReactDOM from 'react-dom';
import { MainNavigation } from '@kartverket/geonorge-web-components/MainNavigation';
 import style from './App.module.scss';


function App() {
  return (
    <div className={style.kartkatalogen}>
     <main-navigation environment="dev"></main-navigation>
      
    </div>
  );
}

export default App;
