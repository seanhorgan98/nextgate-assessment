package com.nextgate.assesment.rest;

import com.nextgate.assesment.datatypes.Album;
import com.nextgate.assesment.exception.ResourceNotFoundException;
import com.nextgate.assesment.repositories.AlbumRepository;
import com.nextgate.assesment.repositories.SingerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
public class AlbumController {

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private SingerRepository singerRepository;

    /**
     * GET method to retrieve all albums in the db
     * @param pageable
     * @return Page<Album>
     */
    @GetMapping("/albums")
    public Page<Album> getAllAlbums(Pageable pageable){
        return albumRepository.findAll(pageable);
    }


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

    /**
     * POST method for creating a new album for a specific singer
     * @param singerId
     * @param album
     * @return
     */
    @PostMapping("/singers/{singerId}/albums")
    public Album createAlbum(@PathVariable (value = "singerId") Long singerId,
                                 @RequestBody Album album) {
        return singerRepository.findById(singerId).map(singer -> {
            album.setSinger(singer);
            return albumRepository.save(album);
        }).orElseThrow(() -> new ResourceNotFoundException("SingerId " + singerId + " not found"));
    }

    /**
     * DELETE method to delete an album from the database
     * @param albumId
     * @return
     */
    @DeleteMapping("/albums/{albumId}")
    public ResponseEntity<?> deleteAlbum(@PathVariable Long albumId) {
        return albumRepository.findById(albumId).map(album -> {
            albumRepository.delete(album);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("AlbumId " + albumId + " not found"));
    }
    
}
