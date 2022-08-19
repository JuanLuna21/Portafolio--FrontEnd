
package com.portafolio.mgb.Security.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfaceUserRepository extends JpaRepository<User, Integer>{
    Optional<User>findByNameUser(String nameUser);
    
    boolean existByNameUser(String nameUser);
    boolean existByEmail(String email);
    
}
