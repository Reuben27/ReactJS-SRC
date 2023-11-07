import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import { BASEURL } from '../Utils/Constants';
import 'react-datetime-picker/dist/DateTimePicker.css';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, isDone, deadline};
    // console.log(blog);
    fetch(BASEURL + 'tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      // console.log('New Task Added!');
      //navigate.go(-1);
      navigate('/');
    });
  }
    
  return ( 
    <div>
    <div>
      <h2 className = "create">Add a new task</h2>
      <form onSubmit = {handleSubmit}>
        <label className = "createl">Title: </label>
        <input className = "createi" type = "text" required value = {title} 
          onChange = { (e) =>{
              setTitle(e.target.value);
          }}></input>
        <br></br>
        <label className = "createl">Mark as Done: </label>
        <select className = "creates" value = {isDone} onChange = {
          (e) => {
              if(e.target.value === "true"){
                setIsDone(true);
              }
              else {
                setIsDone(false);
              }
              // setIsDone(e.target.value);
          }}> 
          <option value = "true">true</option>
          <option value = "false">false</option>
        </select>
        <br></br>
        <div className = "create">
          <label className = "createl">Deadline: </label>
          <DateTimePicker  onChange = {setDeadline} value = {deadline} format = "y-MM-dd h:mm:ss a"/>
        </div>  
        <br></br>  
        { !isPending && <button className = "createb">Add Task</button>}
        { isPending && <button disabled>Adding Task.....</button>}
        <br></br>  
        <br></br>  
      </form>
    </div>
  </div>
  );
}
 
export default AddTask;