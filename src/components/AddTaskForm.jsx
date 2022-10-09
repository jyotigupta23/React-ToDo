const AddTaskForm =({newTask,setNewTask,addTask})=>{
    return(
        <>
        {/*Add Task */}
        <div className='row'>
          <div className='col AddiconsWrap'>

            <input
            placeholder="write your tasks..."
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            className='form-control form-control-lg'/>
          </div>
          <div className='col-auto'>
            <button
            onClick={addTask}
            className='btn btn-lg btn-success'>Add Task
            </button>
          </div>
        </div>
        </>
       )
    }

export default AddTaskForm