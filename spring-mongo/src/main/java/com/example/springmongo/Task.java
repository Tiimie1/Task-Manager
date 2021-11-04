package com.example.springmongo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Task {
    @Id
    private String id;
    private String taskName;
    private String taskContent;
    //private Date dueDate;
    private Importance importance;

    public Task(String taskName,
                String taskContent,
                Importance importance) {
        this.taskName = taskName;
        this.taskContent = taskContent;
        this.importance = importance;
    }
}
