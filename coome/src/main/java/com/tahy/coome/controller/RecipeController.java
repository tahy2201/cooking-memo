package com.tahy.coome.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tahy.coome.model.Recipe;
import com.tahy.coome.model.SaveRecipeRequestParam;
import com.tahy.coome.service.RecipeService;

@RestController
@RequestMapping("/recipe")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST })
public class RecipeController {

    private RecipeService recipeService;

    @Autowired
    public RecipeController(
            RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/get/{id}")
    public Recipe getRecipe(@PathVariable Integer id) {
        return recipeService.getRecipe(id).orElse(null);
    }

    @PostMapping("/save")
    public void saveRecipe(@RequestBody SaveRecipeRequestParam reqParam) {
        // TODO ユーザー認証
        // TODO 共通エラー処理
        recipeService.saveRecipe(reqParam.getRecipe());
    }

}
