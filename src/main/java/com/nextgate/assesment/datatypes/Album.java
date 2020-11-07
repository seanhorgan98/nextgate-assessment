package com.nextgate.assesment.datatypes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.NonNull;

@Entity
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull
    private String title;

    @NonNull
    private int year;

    @NonNull
    private String company;

    //Many to One foreign key for singer
    @ManyToOne(optional = false)
    @JoinColumn(name = "singer_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Singer singer;

    protected Album(){}

    public Album (String title, int year, String company){
        this.title = title;
        this.year = year;
        this.company = company;
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
     * @return String return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return int return the year
     */
    public int getYear() {
        return year;
    }

    /**
     * @param year the year to set
     */
    public void setYear(int year) {
        this.year = year;
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

    /**
     * @return Singer return the singer
     */
    public String getSinger() {
        return singer.getName();
    }

    /**
     * @param singer the singer to set
     */
    public void setSinger(Singer singer) {
        this.singer = singer;
    }

}
