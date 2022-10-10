import React, {useState} from 'react';
import './App.css';

function App() {

  const[tasks, setTasks] = useState( [
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
    { name :"Make Curtain Pole Structurally Sound", priority: "high"}
  ]);
  

  const [newTask, setNewTask] = useState("");
  
  //

  //

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} >
        <span>{task.name} {task.priority == "high" ? "HIGH PRIORITY!!!" : ""}</span>
      </li>
    )

  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();

    const copyTasks = [...tasks];
    copyTasks.push({name : newTask, priority: "low"});  /// COME BACK TO THIS
    //
    //
    // COME BACK TO THIS
    setTasks(copyTasks);

    setNewTask("")

  }
  


  return (
    <div className="App">
      <h1>ToDo's</h1>
      <hr></hr>

    <form onSubmit={saveNewTask}>
      <label htmlFor="new-task">Add new task: </label>
      <input id="new-task" type = "text" value ={newTask} onChange={handleTaskInput} />

      {/* <div onChange={handleRadioChangeValue}>
        <input type="radio" id="high" name="priority" value="high"></input>
        <label for="high">High</label>
        <input type="radio" id="low" name="priority" value="low"></input>
        <label for="low">Low</label>
      </div> */}


      <input type="submit" value="Save New Task" />
    </form>


      <ul>
        {taskNodes}
      </ul>

    </div>
  );



  
}

export default App;
