package com.example.springmongo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;


@SpringBootApplication
public class SpringMongoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMongoApplication.class, args);
	}

	//SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");

	@Bean
	CommandLineRunner runner(
			TaskRepository repository,
			MongoTemplate mongoTemplate){
		return args -> {
			Task task = new Task(
					"another task",
					"number 3",
					Importance.HIGH
			);
			//Query query = new Query();
			//query.addCriteria(Criteria.where("taskName").is("Spring Boot course"));

			//List<Task> tasks = mongoTemplate.find(query, Task.class);
			//repository.insert(task);
			//repository.findTaskByTaskName("Spring Boot course").ifPresent(s -> {
				//System.out.println(s);
			//});
		};
	}
}


