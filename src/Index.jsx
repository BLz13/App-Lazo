import React, { useState } from 'react';

import { CustomModal } from './components/CustomModal/CustomModal';
import { Input } from './components/Input/Input';
import { TaskList } from './components/TaskList/TaskList';
import { View } from 'react-native';
import { styles } from './indexStyles';

const black ='#1E1B18';
const grey ='#E1DEE3';
const violet ='#987284';
const pink ='#EE7674';
const orange ='#F5853F';


export const Index = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  
  return (
    <View style={styles.container}>
      <Input 
        buttonColor={violet}
        buttonText='Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='add a new task'
        task={task}
      />
      <TaskList 
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />
     <CustomModal 
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
     />
    </View>
  );
}