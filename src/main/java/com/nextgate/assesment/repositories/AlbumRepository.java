package com.nextgate.assesment.repositories;

import java.util.Optional;

import com.nextgate.assesment.datatypes.Album;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long>{
    Page<Album> findBySingerId(Long singerId, Pageable pageable);
    Optional<Album> findByIdAndSingerId(Long id, Long singerId);
}
