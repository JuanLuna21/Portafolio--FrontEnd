
package com.portafolio.mgb.Security.Entity;

import com.portafolio.mgb.Security.Enums.RolName;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Enumerated(EnumType.STRING)
    private RolName RolName;
    
    //Constructor.

    public Rol() {
        
    }

    public Rol(RolName RolName) {
        this.RolName = RolName;
    }
    
    //Getter and Setter.

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RolName getRolName() {
        return RolName;
    }

    public void setRolName(RolName RolName) {
        this.RolName = RolName;
    }
    
    
    
    
    
}
