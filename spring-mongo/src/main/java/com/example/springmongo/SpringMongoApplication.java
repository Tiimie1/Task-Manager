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
		};
	}
}


