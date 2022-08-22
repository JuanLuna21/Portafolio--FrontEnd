
package com.portafolio.juan.Repository;

import com.portafolio.juan.Entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfacePersonRepository extends JpaRepository<Person,Long>{
    
    
    
}
