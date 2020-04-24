package net.guides.springboot2.springboot2jpacrudexample.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.guides.springboot2.springboot2jpacrudexample.model.Employee;
import net.guides.springboot2.springboot2jpacrudexample.model.User;
import net.guides.springboot2.springboot2jpacrudexample.repository.EmployeeRepository;
import net.guides.springboot2.springboot2jpacrudexample.repository.UserRepository;

@Service
public class UserService {
	private UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    public User save(User emp) {
        return repository.save(emp);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
    public void delete(User emp) {
        repository.delete(emp);
    }

	public List<User> findByFirstnameOrLastname(String firstName) {
		return repository.findByFirstnameOrLastname(firstName);
	}


}
