import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from "reactstrap";

const Createtask = ({ modal, toggle, save }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
//   const [date, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let agendaObj = {};
    agendaObj["Title"] = title;
    agendaObj["Description"] = description;
    save(agendaObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Agenda</ModalHeader>
      <ModalBody>
        <Form>
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
          <label className="mt-4">Description</label>
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
          <div>
            <Input
                className="mt-4"
                bsSize="lg"
                type="date"
                // value={date}
                onChange={handleChange}
            />
            </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
   
  );
};

export default Createtask;
