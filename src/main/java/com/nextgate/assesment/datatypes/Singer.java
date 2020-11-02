package com.nextgate.assesment.datatypes;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.nextgate.assesment.datatypes.Gender;


@Entity
public class Singer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private Gender sex;
    private LocalDate dob;
    private String company;

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public Gender getSex(){
        return sex;
    }

    public void setSex(Gender sex){
        this.sex = sex;
    }

    public void setCompany(String company){
        this.company = company;
    }

    public String getCompany(){
        return company;
    }
    
    public void setDob(LocalDate dob){
        this.dob = dob;
    }
}
