
package com.portafolio.mgb.Repository;

import com.portafolio.mgb.Entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfacePersonRepository extends JpaRepository<Person,Long>{
    
    
    
}
