import React from "react";
import { Link } from "react-router-dom";

export const SampleHome = () => {
    return (<>
        <h1>Sample Home</h1>
        <nav>
            <ul>
                <li><Link to="page1">マイページ</Link></li>
                <li><Link to="recipeList">レシピ一覧</Link></li>
                <li><Link to="showRecipe">レシピ参照</Link></li>
                <li><Link to="page3">デフォルトのやつ</Link></li>
            </ul>
        </nav>
        あああ
    </>)
}

export const SamplePage1 = () => {
    return <h3>Sample Page 1</h3>
}

export const SamplePage2 = () => {
    return <h3>Sample Page 2</h3>
}