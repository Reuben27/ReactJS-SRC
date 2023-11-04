import {useState, useEffect} from 'react';
import { BASEURL } from "../Utils/Constants";
import { Card, Button } from 'react-bootstrap';
import { IoCheckmarkDoneCircleOutline, IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import moment from 'moment';

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const t = props.tasks;
    const sorted = [...t].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    setTasks(sorted);
  }, [props.tasks]);

  const handleDone = (task) => {
    let doo = false;
    if(task.isDone === false){
      doo = true;
    }
    fetch(BASEURL + 'tasks/' + task.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "title" : task.title, "isDone" : doo}),
    }).then(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }

  const handleDelete = (task) => {
    // console.log(task.id);
    fetch(BASEURL + 'deleted-tasks/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"title" : task.title, "isDone": task.isDone, "deadline" : task.deadline,}),
    }).then(() => {
      fetch(BASEURL + 'tasks/' + task.id, {
      method: 'DELETE',
      }).then(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });
    });
  }

  return ( 
    <div className = "task-list">
      {tasks.map(task => (
        <div key = {task.id} className="m-2"> 
          <Card>
            <Card.Body>
              <div className = "todo d-md-flex flex-row">
                <h5 style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.title}</h5>
                <div>
                  <Button variant="outline-success" type = "submit" onClick = {() => {handleDone(task)}}>{task.isDone === false && <IoCheckmarkDoneCircleOutline size={24}/>} {task.isDone && <IoCheckmarkDoneCircleSharp size={24}/>}</Button>{' '}
                  <Button variant="outline-danger" type = "submit" onClick = {() => {handleDelete(task)}}>✕</Button>
                  </div> 
              </div>
              <div className = "todo flex-row">
                <p></p>
                <span>Deadline: {moment(task.deadline).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
 
export default TaskList;