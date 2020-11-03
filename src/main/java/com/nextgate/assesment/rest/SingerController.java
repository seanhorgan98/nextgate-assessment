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


    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {
        return singerRepository.findById(postId).map(post -> {
            singerRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }

}
