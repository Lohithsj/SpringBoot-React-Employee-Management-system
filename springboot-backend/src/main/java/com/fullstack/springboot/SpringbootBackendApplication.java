package com.fullstack.springboot;

import com.fullstack.springboot.model.Employee;
import com.fullstack.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void run(String... args)throws Exception{
		Employee employee = new Employee();
		employee.setFirstName("ramesh");
		employee.setLastName("arvind");
		employee.setEmail("ramesh_arvind@mail.com");
		employeeRepository.save(employee);

		Employee employee1 = new Employee();
		employee1.setFirstName("suresh");
		employee1.setLastName("arvind");
		employee1.setEmail("suresh_arvind@mail.com");
		employeeRepository.save(employee1);
	}

}
