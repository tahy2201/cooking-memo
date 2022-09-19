package com.tahy.coome.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tahy.coome.model.Recipe;
import com.tahy.coome.repository.RecipeDao;

@Component
public class RecipeService {

    private RecipeDao recipeDao;

    @Autowired
    public RecipeService(
            RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    public void saveRecipe(Recipe recipe) {
        recipeDao.save(recipe);
    }

    public Optional<Recipe> getRecipe(Integer id) {
        return recipeDao.findById(id);
    }

}
