package com.tahy.coome.repository;

import com.tahy.coome.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {

}
