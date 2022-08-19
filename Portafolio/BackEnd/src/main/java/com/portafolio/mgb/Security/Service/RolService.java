
package com.portafolio.mgb.Security.Service;

import com.portafolio.mgb.Security.Entity.Rol;
import com.portafolio.mgb.Security.Enums.RolName;
import com.portafolio.mgb.Security.Repository.InterfaceRolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    InterfaceRolRepository interfacerolrepository;
    
    public Optional<Rol>getByRolname(RolName rolName){
        return interfacerolrepository.findByRolName(rolName);
    }
    
    public void save(Rol rol){
    interfacerolrepository.save(rol);
    }
}
