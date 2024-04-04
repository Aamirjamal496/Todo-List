"use client"
import React, { useState } from "react";
import { render } from "react-dom";
const Page = () =>{
  const [title, settitle]=useState("")
  const [desc, setdesc]=useState("");
  const [mainTask, setMainTask]=useState([]);
  const deleteHandler=(i)=>{
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);  
  }
  const submithandler=(elem)=>{
    elem.preventDefault();
    setMainTask([...mainTask,{title, desc}]);
    // console.log(mainTask);
    setdesc("");
    settitle("");
  }
  let renderTask = <h1 className="font-bold px-4 py-6 text-lg">No Task Available</h1>
  if (mainTask.length>0) {
    renderTask = mainTask.map((elem, i)=>{
     return (
         <li className="">
           <div className="flex justify-between px-1 py-3 m-2">
             <h5 className="font-bold text-xl px-4 py-3">{elem.title}</h5>
             <p className="font-semibold  text-lg px-4 py-3">{elem.desc}</p>
           <button className="bg-red-500 rounded-md px-4 py-3" onClick={()=>{
            deleteHandler(i);
           }}>Delete</button>
           </div>
         </li>
     )
   })
  }
  return(
    <>
    <div className="bg-slate-500 py-3 px-4 m-5 text-center">
    <h1 className="text-3xl font-semibold ">My Todo list</h1>
    </div>
    <form className="m-5">
      <input type="text" placeholder="Enter Your Task Here" className="border-black rounded-md border-2 text-2xl px-3 py-2 m-3" value={title} onChange={(elem)=>{
        settitle(elem.target.value);
      }}/>
      <input type="text" placeholder="Enter Your Description Here" className="border-black rounded-md border-2 text-2xl px-3 py-2 m-3" value={desc} onChange={(elem)=>{
        setdesc(elem.target.value)
      }}/>
      <button className="m-3 bg-green-950 rounded-lg text-white font-bold px-5 py-4"  onClick={submithandler}>Add Task</button>
    </form>
    <hr />
    <div className="bg-slate-400 m-3" >
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}
export default Page 