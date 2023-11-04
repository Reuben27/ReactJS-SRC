import React from "react";
import { BASEURL } from "../Utils/Constants";
import useFetch from "../Utils/useFetch";
import TaskList from "./TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const {data: tasks, isPending, error} = useFetch(BASEURL + 'tasks/');

  return (
    <div className = "container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      <h3>Tasks</h3>
      <div></div>
      {tasks && <TaskList tasks = {tasks} type = "normal"/>}
    </div>
  );
}
 
export default Home;