
package com.portafolio.mgb.Interface;

import com.portafolio.mgb.Entity.Person;
import java.util.List;


public interface InterfacePersonService {
    
    public List<Person> getPerson();
    
    public void savePerson(Person person);
    
    public void deletePerson(Long id);
    
    public Person findPerson(Long id);
}
