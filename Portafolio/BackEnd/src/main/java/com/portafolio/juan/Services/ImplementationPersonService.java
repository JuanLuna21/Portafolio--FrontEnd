
package com.portafolio.juan.Services;

import com.portafolio.juan.Entity.Person;
import com.portafolio.juan.Interface.InterfacePersonService;
import com.portafolio.juan.Repository.InterfacePersonRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImplementationPersonService implements InterfacePersonService {

    @Autowired InterfacePersonRepository InterfacePersonRepository;
    
    @Override
    public List<Person> getPerson() {
        
        List<Person> persons =InterfacePersonRepository.findAll();
        return persons;
    }

    @Override
    public void savePerson(Person person) {
       InterfacePersonRepository.save(person);
    }

    @Override
    public void deletePerson(Long id) {
       InterfacePersonRepository.deleteById(id);
    }

    @Override
    public Person findPerson(Long id) {
        
        Person person= InterfacePersonRepository.findById(id).orElse(null);
        return person;
        
    }
    
}


