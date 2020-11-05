package com.nextgate.assesment.rest;

import com.nextgate.assesment.exception.ResourceNotFoundException;
import com.nextgate.assesment.datatypes.Singer;
import com.nextgate.assesment.repositories.SingerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SingerController {
    
    @Autowired
    private SingerRepository singerRepository;


    /**
     * GET method to retrieve all singers in the db
     * @param pageable
     * @return Page<Singer>
     */
    @GetMapping("/singers")
    public Page<Singer> getAllSingers(Pageable pageable){
        return singerRepository.findAll(pageable);
    }

    /**
     * POST method to create a new singer
     * @param singer
     * @return
     */
    @PostMapping("/singers")
    public Singer createSinger(@RequestBody Singer singer){
        return singerRepository.save(singer);
    }

    /**
     * DELETE method to delete a singer from the database
     * @param singerId
     * @return
     */
    @DeleteMapping("/singers/{singerId}")
    public ResponseEntity<?> deleteSinger(@PathVariable Long singerId) {
        return singerRepository.findById(singerId).map(singer -> {
            singerRepository.delete(singer);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("SingerId " + singerId + " not found"));
    }

}
