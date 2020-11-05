package com.nextgate.assesment.datatypes;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nextgate.assesment.datatypes.Gender;

import org.springframework.lang.NonNull;


@Entity
public class Singer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull
    private String name;

    @NonNull
    private Gender sex;

    @NonNull
    @JsonFormat(pattern="yyyyMMdd")
    private LocalDate dob;

    @NonNull
    private String company;

    protected Singer(){}

    public Singer(String name, String sex, String dob, String company){
        this.name = name;
        this.sex = Gender.valueOf(sex);        
        this.dob = LocalDate.parse(dob);
        this.company = company;
    }

    @Override
    public String toString(){
        return String.format("Singer [id=%d, name='%s', sex=%s, dob=%s, company=%s]",
                                id, name, sex.toString(), dob.toString(), company);
    }


    /**
     * @return long return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return Gender return the sex
     */
    public Gender getSex() {
        return sex;
    }

    /**
     * @param sex the sex to set
     */
    public void setSex(Gender sex) {
        this.sex = sex;
    }

    /**
     * @return LocalDate return the date of birth
     */
    public LocalDate getDob() {
        return dob;
    }

    /**
     * @param dob the date of birth to set
     */
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    /**
     * @return String return the company
     */
    public String getCompany() {
        return company;
    }

    /**
     * @param company the company to set
     */
    public void setCompany(String company) {
        this.company = company;
    }

}
