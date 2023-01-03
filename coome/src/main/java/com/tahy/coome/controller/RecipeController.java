package com.tahy.coome.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tahy.coome.model.Recipe;
import com.tahy.coome.model.SaveRecipeRequestParam;
import com.tahy.coome.service.RecipeService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/recipe")
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
        log.info(reqParam.toString());
        Recipe r = reqParam.getRecipe();
        r.setOwnerId(reqParam.getUserId());
        recipeService.saveRecipe(r);
    }

}
