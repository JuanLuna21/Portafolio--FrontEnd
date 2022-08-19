package com.portafolio.mgb.Security.Service;

import com.portafolio.mgb.Security.Repository.InterfaceUserRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {

    @Autowired
    InterfaceUserRepository InterfaceuserRepository;

    public Optional<User> getByusername(String username) {
        return InterfaceuserRepository.findByNameUser(username);

    }

    public boolean existByNameUser(String nameUser) {
        return InterfaceuserRepository.existByNameUser(nameUser);
    }

    public boolean existByEmail(String email) {
        return InterfaceuserRepository.existByEmail(email);
    }

    public void save(User user){
        InterfaceuserRepository.save(user);
    }
    
}
