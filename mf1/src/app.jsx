import React from 'react';

import './style.css';

import {useState,useEffect} from 'react';

const App = (props) => {

  const {arr1,setArr1,checkedItems1,setCheckedItems1,result1,setResult1} = props;

  // const [arr,setArr]=useState([...arr1]);

  // const [checkedItems,setCheckedItems]=useState([...checkedItems1]);

  const handlecheckChange=(index)=>{
    const temparr=[...checkedItems1];
    temparr[index]=!temparr[index];
    setCheckedItems1(temparr);
    // arr1=arr;
    // checkedItems1=checkedItems;
  }

  const handleSubmit=()=>{

  }

  // useEffect(()=>{
  //   setCount(arr.length);
  // },[arr]);
  return (

    // <div className={'mf1'}>
    //   <h1>MF1 Application</h1>
    // </div>

    <>
     {/* header */}
  <div>
   <div id="mf1-head">
    <h1>TODO APP-{arr1.length}</h1>
   </div>

     {/* body */}
   <div>
    <div>
      <h1 className='heading'>Todo</h1>
        <ul type="none" className='list'>
          
          {arr1.map((item,index)=>

          
          <li key={index}> <input type="checkbox" checked={checkedItems1[index]} onChange={()=>handlecheckChange(index)}/>{item}</li>
          )}
        </ul>
      </div>
  </div>

      {/* button */}
      <button onClick={()=>{setResult1(true)}} className='btn'>GET RESULT</button>
    </div>
    </>

  );
};

export default App;