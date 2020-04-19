package net.guides.springboot2.springboot2jpacrudexample.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.guides.springboot2.springboot2jpacrudexample.model.Employee;
import net.guides.springboot2.springboot2jpacrudexample.repository.EmployeeRepository;

@Service
public class EmployeeService {
	private EmployeeRepository repository;

    @Autowired
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> findAll() {
        return (List<Employee>) repository.findAll();
    }

    public Optional<Employee> findById(Long id) {
        return repository.findById(id);
    }

    public Employee save(Employee emp) {
        return repository.save(emp);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
    public void delete(Employee emp) {
        repository.delete(emp);
    }

	public List<Employee> findByFirstnameOrLastname(String firstName) {
		return repository.findByFirstnameOrLastname(firstName);
	}


}
