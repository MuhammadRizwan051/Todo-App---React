import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button.js";

let App = () => {
  let [txt, setTxt] = useState("");
  let [list, setList] = useState([]);

  // Add Todos
  let add = () => {
    // if(!txt){
    //   alert('Plz fill the data')
    //   // return;
    // } 
      list.push(setTxt);
      setList([...list]);
  };


    // Edit Todos
    let b;
    let edit = (todoVal, todoInd)=> {
    let a = list.find((elem, id)=>{
      if(elem === todoVal){
        b = prompt("Edit Value", elem)
        return b
      }
    })
      setList([...list, b])
      console.log(b)
    }

  
  // Delete All Todos
  let deleteAll = () => {
    setList([])
  }
  
  // Delete Todos
  let deleteFunc = (todoValueGet, todoIndex ) => {
    setList(list.filter((e, i)=>{ return i!==todoIndex}))
  };
  
  
  return (
    <>
      <div className="container py-5 px-2" style={{height: "100%"}}>
        <div className="row mx-0">
          <input type="text" placeholder="Enter Todos" className="ps-3 p-1 fs-5 col-xxl-11 col-md-10" onChange={(e) => {
            setTxt = e.target.value;
          }}
          />
          <Button click={add} add="btn btn-success col-xxl-1 col-md-2 mt-3 mt-md-0" value="Add Todo" />
          {list.length === 0 ? <p className="text-danger fs-3 text-center mt-4">No Todos to display</p> :
          <p className="text-danger fs-3 text-center mt-4">{`Total: ${list.length}`}</p>}
        </div>


          {list.map((e, i) =>(
            <ul className="px-0" key={i}>
              <li className="fs-4 mt-5 row mx-0">
                <span className="col-1">{`${i+1}.`}</span>
                <span className="col-sm-7 col-xl-9 col-7">{e}</span>
                <Button value="Edit" edit="edit btn btn-sm btn-primary col-sm-2 col-xl-1 col-2"click={()=>edit(e,i)} />
                <Button value="Delete" delete="delete btn-sm btn btn-warning col-sm-2 col-xl-1 col-2" click={()=>deleteFunc(e,i)} />
                <hr className="mt-2" />
              </li>
            </ul>
          ))}
          {list.length > 0 ? <Button click={deleteAll} deleteAll="btn btn-danger px-3 fs-5 w-100 mt-5" value="Delete All" /> : "" }
        
      </div>
    </>
  );


};

export default App;
