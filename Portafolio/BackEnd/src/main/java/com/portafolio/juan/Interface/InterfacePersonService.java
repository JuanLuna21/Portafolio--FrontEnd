
package com.portafolio.juan.Interface;

import com.portafolio.juan.Entity.Person;
import java.util.List;


public interface InterfacePersonService {
    
    public List<Person> getPerson();
    
    public void savePerson(Person person);
    
    public void deletePerson(Long id);
    
    public Person findPerson(Long id);
}
