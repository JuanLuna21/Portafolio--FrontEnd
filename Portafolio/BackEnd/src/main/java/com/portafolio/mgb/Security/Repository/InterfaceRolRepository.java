
package com.portafolio.mgb.Security.Repository;

import com.portafolio.mgb.Security.Entity.Rol;
import com.portafolio.mgb.Security.Enums.RolName;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfaceRolRepository extends JpaRepository<Rol, Integer> {
    
   Optional<Rol> findByRolName(RolName RolName);
   
}
