package com.tahy.coome.repository;

import java.util.List;

import com.tahy.coome.model.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeDao extends JpaRepository<Recipe, Integer> {

    public List<Recipe> findByOwnerId(Integer ownerId);
}
