import React, { FC, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import { Ingredients, Recipe } from "../dto/QueryTypes";

export const RecipeEdit: FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>レシピ編集</h1>
        </>
    )
}
