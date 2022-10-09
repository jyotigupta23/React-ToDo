import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ToDo =({toDo,markDone,setUpdateData,deleteTask})=>{
    return(
        <>
        {toDo && toDo
      .map((task,index)=>{
        return(
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
              <div className={task.status?'done':''}>
                <span className='taskNumber'>{index+1}</span>
                <span className='taskText'>{task.title}</span>
              </div>
              <div className='iconsWrap'>
                <span title='Completed/NotCompleted'
                onClick={(e)=>markDone(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                </span>

                {task.status ? null : (                  
                <span title='Edit'
                onClick={()=>setUpdateData({
                  id: task.id,
                  title:task.title,
                  status:task.status
                })}
                >
                <FontAwesomeIcon icon={faEdit} /></span>
                )}

                <span title='Delete'
                onClick={()=>deleteTask(task.id)}
                >
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </span>


              </div>

            </div>

          </React.Fragment>
        )
      })
      
    } 
        </>
    )
}
export default ToDo