import { useEffect, useState } from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateTaskForm from './components/UpdateTaskForm.jsx'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('lists'));
    }else{
      return [];
    }
  }
  //Task State
  const[toDo, setToDo]=useState(
    // [{id:1,title:"Task 1",status:false},
    // {id:2,title:"Task 2",status:false},]
    getLocalItems()
  );
  //Temp State
  const[newTask,setNewTask]=useState(''); //to temporarly hold the task being added in the list
  const[updateData,setUpdateData]=useState('');//to hold the updated task
  //to get the Item from list

  

  //Add Task
  const addTask = ()=>{
    if(newTask){
      let num=toDo.length+1;
      let newEntry={id:num, title:newTask, status:false}
      setToDo([...toDo,newEntry])
      setNewTask('');//to clean the the temp value after adding
    }

  }
  //Deleted Task
  const deleteTask = (id)=>{
    let newTask=toDo.filter(task=>task.id !==id)
    setToDo(newTask);
  }
  //Mark Task as done
  const markDone = (id)=>{
    let newTask=toDo.map(task=>{
      if(task.id===id){
        return({...task,status:!task.status})
      }
      return task;
    })
    setToDo(newTask);
  }
  //Cancel Update Task
  const cancelUpdate = ()=>{
    setUpdateData('');
  }
  //Change Task for update
  const changeTask = (e)=>{
    let newEntry={
      id:updateData.id,
      title:e.target.value,
      status:updateData.status?true:false
    }
    setUpdateData(newEntry)
  }
  //Update Task
  const updateTask = ()=>{
    let filterRecords=[...toDo].filter(task=>task.id!==updateData.id);
    let updatedObject=[...filterRecords,updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  useEffect(()=>
  {
    localStorage.setItem('lists',JSON.stringify(toDo))
  },[toDo]);


  return (
    <div className="container App">
      <br/><br/>
      <h2>To Do List App </h2>
      <br/><br/>
      {updateData && updateData?(    
        <UpdateTaskForm   
        updateData={updateData}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        changeTask={changeTask}
        />

      ):(
       <AddTaskForm
       newTask={newTask}
       setNewTask={setNewTask}
       addTask={addTask}
       />

      )}  
      
      {/*Display ToDos*/}

      {toDo && toDo.length ?'':'No Tasks...'}
      {/*sort the record*/}
      <br/><br/>


      <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
