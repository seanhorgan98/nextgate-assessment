package com.nextgate.assesment.repositories;

import com.nextgate.assesment.datatypes.Singer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SingerRepository extends JpaRepository<Singer, Long>{
    
}
