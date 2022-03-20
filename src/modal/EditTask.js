import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const EditTask = ({ modal, toggle, updateAgenda, agendaObj }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else {
      setDate(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Title"] = title;
    tempObj["Description"] = description;
    tempObj["Date"] = date;
    updateAgenda(tempObj);
  };

  useEffect(() => {
    setTitle(agendaObj.Title);
    setDescription(agendaObj.Description);
    setDate(agendaObj.Date);
  }, []);
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Agenda</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={handleChange}
            />
          </div>
          <label>Description</label>
          <div className="form-group">
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <label className="mt-4">Date</label>
          <Input
            className="mt-4"
            bsSize="lg"
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
