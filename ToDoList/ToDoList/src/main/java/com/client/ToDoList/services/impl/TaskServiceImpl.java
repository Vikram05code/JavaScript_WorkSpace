package com.client.ToDoList.services.impl;

import com.client.ToDoList.Entity.Task;
import com.client.ToDoList.exception.ResourceNotFoundException;
import com.client.ToDoList.repository.TaskRepository;
import com.client.ToDoList.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskServices {

  @Autowired
  private TaskRepository taskRepository;

    @Override
    public List<Task> getAllTask() {
        List<Task> taskList = taskRepository.findAll();
        return taskList;
    }

    @Override
    public Task getTaskById(Long id) {
      Task task =  taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User with given id is not found on server !! : "+id));
        return task;
    }

    @Override
    public Task CreateTask(Task task) {
        Task newTask = taskRepository.save(task);
        return newTask;
    }

    @Override
    public Task updateTask(Task task, Long id) {
        Task getTask = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not find by given id: "+id));
        return null;
    }

    @Override
    public Void deleteTask(Long id) {
        return null;
    }
}
