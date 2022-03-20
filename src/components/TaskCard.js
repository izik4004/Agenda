import {
  Card,
  Row,
  Col,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
} from "reactstrap";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditTask from "../modal/EditTask";
import { useState } from "react";
// import '../App.css'

const TaskCard = ({ index, agendaObj, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const handleDelete = () => {
    deleteTask(index);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const updateAgenda = (obj) => {
    updateListArray(obj, index);
  };
  return (
    <Row>
      <Col>
        <Card style={{ margin: 10, height: 200, width: 400 }}>
          <CardHeader style={{fontWeight:"bold", fontSize:18, textTransform:"uppercase"}}>{agendaObj.Title}</CardHeader>
          <CardBody>
            <CardText>{agendaObj.Description}</CardText>
          </CardBody>
          <CardFooter className="footer">
          <div>
            <h5>{agendaObj.Date}</h5>
          </div>
          <div className="icons">
            <BiEdit
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setModal(true)}
            />
            <RiDeleteBin6Line
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleDelete}
            />
          </div>
          </CardFooter>
        </Card>
      </Col>
      <EditTask
        modal={modal}
        agendaObj={agendaObj}
        toggle={toggle}
        updateAgenda={updateAgenda}
      />
    </Row>
    // </div>
  );
};

export default TaskCard;
