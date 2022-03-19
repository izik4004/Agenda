import React, {useEffect, useState} from 'react'
import Createtask from './Createtask';

const Agenda = () => {
    const [modal, setModal] = useState(false);
    const [agendaList, setAgendaList] = useState([])

     
    useEffect(() => {
      let arr = localStorage.getItem("agendaList")
      let obj = JSON.parse(arr)
      if(obj) {
        set
      }
    })
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = agendaList
        tempList.push(taskObj)
        localStorage.setItem("agendaList", JSON.stringify(tempList))
        setAgendaList(agendaList)
        setModal(false)
    }


  return (
    <>
        <div className='header'>
             <h1>Agenda</h1>
             <button className='btn btn-primary mt-4' onClick={()=>setModal(true)}>Create Agenda</button>
        </div>
        <div className='agenda-container'>
              {agendaList.map((obj)=>
              <li>{obj.Title}</li>
              )}
        </div>
        <Createtask toggle={toggle} modal={modal} save={saveTask}/>
        
       
    </>
  );
}

export default Agenda;