package com.tahy.coome.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class SaveRecipeRequestParam {

    Integer userId;

    Recipe recipe;

}
