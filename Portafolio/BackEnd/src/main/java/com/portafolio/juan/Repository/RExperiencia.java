
package com.portafolio.juan.Repository;

import com.portafolio.juan.Entity.Experiencia;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RExperiencia  extends JpaRepository<Experiencia, Integer> {
    
    //public Optional<Experiencia> findBy(String nombreE);
    //public boolean existBy(String nombreE);
    
    
}
