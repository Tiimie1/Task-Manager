package com.example.springmongo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin
@AllArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/getAll")
    public List<Task> fetchAllTasks(){
        return taskService.getAllTasks();
    }

    @PostMapping("/add")
    public void addTask(@RequestBody Task task){
        taskService.addTask(task);
    }

    @DeleteMapping("/delete/{id}")
    public void removeTask(@PathVariable String id){ taskService.removeTask(id);}

}
