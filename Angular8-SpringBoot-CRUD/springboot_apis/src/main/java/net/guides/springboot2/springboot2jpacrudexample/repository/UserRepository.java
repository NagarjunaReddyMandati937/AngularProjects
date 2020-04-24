package net.guides.springboot2.springboot2jpacrudexample.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import net.guides.springboot2.springboot2jpacrudexample.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query("select u from  User u where u.firstName = ?1 or u.lastName = ?1 or u.email = ?1 or u.username = ?1 or u.cell = ?1 or u.uid = ?1")
	List<User> findByFirstnameOrLastname(String firstName);
	

}
