import React, { useEffect, useState } from "react";
import Createtask from "./Createtask";
import TaskCard from "./TaskCard";
import { Container, Col } from "reactstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Agenda = () => {
  const [modal, setModal] = useState(false);
  const [agendaList, setAgendaList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("agendaList");
    if (arr) {
      let obj = JSON.parse(arr);
      setAgendaList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = agendaList;
    tempList.splice(index, 1);
    localStorage.setItem("agendaList", JSON.stringify(tempList));
    setAgendaList(agendaList);
    window.location.reload();
  };
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = agendaList;
    tempList.push(taskObj);
    localStorage.setItem("agendaList", JSON.stringify(tempList));
    setAgendaList(agendaList);
    setModal(false);
  };

  const updateListArray = (obj, index) => {
    let tempList = agendaList;
    tempList[index] = obj;
    localStorage.setItem("agendaList", JSON.stringify(tempList));
    setAgendaList(tempList);
    window.location.reload();
  };
  return (
    <>
      <div className="header">
        <h1>Agenda</h1>
        <button className="btn btn-primary mt-4" onClick={() => setModal(true)}>
          Create Agenda
        </button>
      </div>

      <Container>
      <div  className="all-agenda">
      <div>
         <h2>All Agenda's</h2>
      </div>
      <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="Agenda"
        sheet="tablexls"
        buttonText="Export Agenda as XLS"
        
      />
      </div>
      </div>
      <div className="agenda-container" md={3}>
        {agendaList &&
          agendaList.map((obj, index) => (
            <TaskCard
              agendaObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <Createtask toggle={toggle} modal={modal} save={saveTask} />
     
      <table id="table-to-xls" className="d-none">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {agendaList.map(obj => (
            <tr>
              <td>{obj.Title}</td>
              <td>{obj.Description}</td>
              {/* <td>{item.age}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </Container>
    </>
  );
};

export default Agenda;
