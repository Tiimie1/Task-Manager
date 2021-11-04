package com.example.springmongo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public void addTask(Task task){
        taskRepository.insert(task);
    }

    public void removeTask(String taskId){
        taskRepository.deleteById(taskId);
    }
}
