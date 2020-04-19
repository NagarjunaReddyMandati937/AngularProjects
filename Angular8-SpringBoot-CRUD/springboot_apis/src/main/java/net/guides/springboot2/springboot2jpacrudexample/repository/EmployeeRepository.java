package net.guides.springboot2.springboot2jpacrudexample.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import net.guides.springboot2.springboot2jpacrudexample.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{
	
//	@Query("select h from House h where h.city = ?1 or h.type = ?2")
//	List<House> findByCityOrType(String city,String type);
	
	@Query("select e from  Employee e where e.firstName = ?1 or e.lastName = ?1 or e.location = ?1 or e.username = ?1 or e.cell = ?1 or e.id = ?1 or e.designation = ?1 or e.emailId = ?1 or e.skills = ?1")
	List<Employee> findByFirstnameOrLastname(String firstName);
	

	@Query("select e from  Employee e where e.firstName = ?1")
	List<Employee> findByFirstname(String firstName);


}
