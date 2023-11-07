import React from "react";
import { useParams } from 'react-router-dom';
import { BASEURL } from "../Utils/Constants";
import useFetch from "../Utils/useFetch";
import TaskList from "./TaskList";
import CurrencyConverter from "./CurrencyConverter";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
  const {id} = useParams();
  let url = BASEURL + 'tasks/';

  if(props.taskid === "true"){
    url = url + "?id=" + id;
  }
  const {data: tasks, isPending, error} = useFetch(url);

  return (
    <div className = "container">
      <hr/>
      <CurrencyConverter/>
      <hr/>
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      <h3>Tasks</h3>
      <div></div>
      {tasks && <TaskList tasks = {tasks} type = "normal"/>}
    </div>
  );
}
 
export default Home;