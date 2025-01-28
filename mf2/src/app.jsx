import React, { useState } from 'react';

import Style from './style.css';

const App = (props) => {

  const {arr1,checkedItems1,result1,setResult1}=props;

  let count=0;
  for (let index = 0; index < checkedItems1.length; index++) {
    if(checkedItems1[index]){
      count++;
    }
  }

  let pending=arr1.length-count;
  return (

    <div className='mf2'>
      <div className='mf2-head'>
        Final Result
      </div>
      <div className='heading-container'>
        <div className='heading'>
          Completed-{count}
        </div>
        <div className='heading'>
          Pending-{pending}
        </div>
      </div>
      <button onClick={()=>{setResult1(false)}} className='btn2'>Go Back</button>
    </div>
  );
};

export default App;