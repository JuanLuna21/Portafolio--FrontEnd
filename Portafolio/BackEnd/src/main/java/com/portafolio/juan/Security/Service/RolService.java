
package com.portafolio.juan.Security.Service;

import com.portafolio.juan.Security.Entity.Rol;
import com.portafolio.juan.Security.Enums.RolNombre;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portafolio.juan.Security.Repository.RolRepository;

@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository rolRepository;

    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return rolRepository.findByRolNombre(rolNombre);
    }

    public void save(Rol rol){
        rolRepository.save(rol);
    }
}