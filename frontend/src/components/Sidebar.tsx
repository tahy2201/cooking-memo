import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (<>
    <h1>サイドバー</h1>
    <nav className="p-10">
      <ul>
        <li><Link to="page1">マイページ</Link></li>
        <li><Link to="recipeList">レシピ一覧</Link></li>
        <li><Link to="recipe/1">レシピ参照</Link></li>
      </ul>
    </nav>
    最近見たレシピ
  </>)
}