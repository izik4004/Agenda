import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Createtask = ({modal, toggle, save}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "title" ) {
            setTitle(value)
        }else {
            setDescription(value)
        }
       
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Title"] = title
        taskObj['Description'] = description
        save(taskObj);
    }


  return (
    <Modal isOpen={modal}
    toggle={toggle} 
  >
    <ModalHeader toggle={toggle}>
      Create Agenda
    </ModalHeader>
    <ModalBody>
      <form>
        <div className="form-group">
        <label>Title</label>
            <input type="text" name="title" className='form-control' value={title} onChange={handleChange}/>
        </div>
        <label>Description</label>
        <div className="form-group">
            <textarea name="description" id="" cols="30" rows="5" className='form-control' value={description} onChange={handleChange}></textarea>
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={handleSave}
      >
        Create
      </Button>
      {' '}
      <Button 
      color="secondary"
      onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default Createtask