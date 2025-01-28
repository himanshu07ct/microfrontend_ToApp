import React from 'react';

import Style from './style.css';
import AppFromMF1 from 'mf1/App';

import AppFromMF2 from 'mf2/App';

import { useState } from 'react';

const App = () => {

  const [arr,setArr]=useState(["Task1","Task2","Task3","Task4"]);

  const [checkedItems,setCheckedItems]=useState(new Array(arr.length).fill(false));

  const [result,setResult]=useState(false);

  return (
    <div className='container'>

      <div className='shell'>
        <ul type="none">
          <li><h1>Todo</h1></li>
          <li><h1>Tasks Status</h1></li>
        </ul>
      </div>

      {!result?<AppFromMF1 id ="mf1" arr1={arr} setArr1={setArr} checkedItems1={checkedItems} setCheckedItems1={setCheckedItems} result1={result} setResult1={setResult}/>:
        <AppFromMF2 arr1={arr} setArr1={setArr} checkedItems1={checkedItems} setCheckedItems1={setCheckedItems} result1={result} setResult1={setResult}/>
      }
    </div>
  );
};

export default App;