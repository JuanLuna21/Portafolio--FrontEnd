
package com.portafolio.mgb.Security.Service;


import com.portafolio.mgb.Security.Entity.PrincipalUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Juan luna
 */
@Service
public class UserDetailImplements implements UserDetailsService {
    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       
         User user = userService.getByusername(username).get();
        return  PrincipalUser.build(user);
       
    }
    
}
