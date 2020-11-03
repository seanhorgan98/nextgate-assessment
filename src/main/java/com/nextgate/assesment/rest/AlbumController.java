package com.nextgate.assesment.rest;

import com.nextgate.assesment.datatypes.Album;
import com.nextgate.assesment.repositories.AlbumRepository;
import com.nextgate.assesment.repositories.SingerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlbumController {

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private SingerRepository singerRepository;

    /**
     * GET request for retrieving albums by singer id
     * @param singerId
     * @param pageable
     * @return Page<Album>
     */
    @GetMapping("/singers/{singerId}/albums")
    public Page<Album> getAllAlbumBySingerId(@PathVariable (value = "singerId") Long singerId, Pageable pageable){
        return albumRepository.findBySingerId(singerId, pageable);
    }
    
}
