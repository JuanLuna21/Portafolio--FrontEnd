
package com.portafolio.juan.Controller;

import com.portafolio.juan.Entity.Person;
import com.portafolio.juan.Interface.InterfacePersonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class PersonController {
    @Autowired InterfacePersonService InterfacePersonService;
    
    @GetMapping("/Person/bring")
    public List<Person> getPerson(){
        return InterfacePersonService.getPerson();
    }
    
    @PostMapping("/Persons/create")
   public String createPerson(@RequestBody Person person){
       InterfacePersonService.savePerson(person);
       return "Person was created.";
   }
  
   @DeleteMapping("/Persons/delete/{id}")
   public String deletePerson(@PathVariable Long id){
       InterfacePersonService.deletePerson(id);
       return "The person was deleted.";
   }
   
   @PutMapping("/Persons/edit/{id}")
public Person editPerson(@PathVariable Long id,
        @RequestParam("name")String newName,
        @RequestParam("lastName")String newLastName,
        @RequestParam("image")String newImage){
    Person person = InterfacePersonService.findPerson(id);
    person.setName(newName);
    person.setLastName(newLastName);
    person.setImage(newImage);
    
     InterfacePersonService.savePerson(person);
     return person;
}
}