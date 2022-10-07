
package com.portafolio.juan.Services;

import com.portafolio.juan.Entity.Experiencia;
import com.portafolio.juan.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class SExperiencia {
    
    @Autowired
    RExperiencia rExperiencia;
    
    public List<Experiencia> list(){
        return rExperiencia.findAll();
    }
    
    public Optional<Experiencia> getOne(int id){
        return rExperiencia.findById(id);
    }
    
//    public  Optional<Experiencia> getByNombreE(String nombreE){
 //   return rExperiencia.findBy(nombreE);
   // }
    
    public void save(Experiencia expe){
        rExperiencia.save(expe);
    }
    
    public void delete(int id){
        
        rExperiencia.deleteById(id);
    }
    
    public boolean existById(int id){
        return rExperiencia.existsById(id);
    }
    
  //  public boolean existByNombreE(String nombreE){
  //      return rExperiencia.existBy(nombreE);
  //  }
    
    
}