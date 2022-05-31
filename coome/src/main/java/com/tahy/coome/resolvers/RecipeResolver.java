package com.tahy.coome.resolvers;

import java.util.List;
import java.util.Optional;

import com.tahy.coome.controller.RestDbtestController;
import com.tahy.coome.model.Recipe;
import com.tahy.coome.repository.RecipeDao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import graphql.kickstart.tools.GraphQLQueryResolver;

@Component
public class RecipeResolver implements GraphQLQueryResolver {

    Logger logger = LoggerFactory.getLogger(RestDbtestController.class);

    private RecipeDao recipeDao;

    @Autowired
    public RecipeResolver(RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    public Recipe getRecipe(Integer id) {
        Optional<Recipe> recipe = recipeDao.findById(id);
        return recipe.orElse(null);
    }

    public List<Recipe> getRecipes(Integer ownerId) {
        return recipeDao.findByOwnerId(ownerId);
    }

}
