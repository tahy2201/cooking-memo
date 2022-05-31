package com.tahy.coome.controller;

import java.util.ArrayList;
import java.util.List;

import com.tahy.coome.model.Recipe;
import com.tahy.coome.repository.RecipeDao;
import com.tahy.coome.repository.UserDao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestDbtestController {

    Logger logger = LoggerFactory.getLogger(RestDbtestController.class);

    RecipeDao recipeDao;

    UserDao userDao;

    @Autowired
    public RestDbtestController(
            RecipeDao recipeDao,
            UserDao userDao) {
        this.recipeDao = recipeDao;
        this.userDao = userDao;
    }

    //
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Recipe> getAllRescipes() {
        List<Recipe> recipes = recipeDao.findAll();
        return new ArrayList<>(recipes);
    }

    @GetMapping("/v3")
    public List<Recipe> getAllRescipes2() {
        List<Recipe> recipes = recipeDao.findByOwnerId(1);
        return new ArrayList<>(recipes);
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }

}
