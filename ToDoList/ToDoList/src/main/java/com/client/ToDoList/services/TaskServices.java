package com.client.ToDoList.services;

import com.client.ToDoList.Entity.Task;

import java.util.List;

public interface TaskServices {

    List<Task> getAllTask();

    Task getTaskById(Long id);

    Task CreateTask(Task task);

    Task updateTask(Task task, Long id);

    Void deleteTask(Long id);

}
