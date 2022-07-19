import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { QueryTypes, Recipe } from "../dto/QueryTypes";
import { RecipePage } from "./RecipePage";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const RecipeList = () => {
  const [name, setName] = useState('');
  const [recipes, setRecipes] = useState<Array<QueryTypes>>([]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name);
  }

  const getRecipeList = async () => {
    const res = await axios.get("http://localhost:8080/");
    console.log(res);
    setRecipes(res.data);
  }

  // マウントされたら、レシピ一覧を取得してくる
  React.useEffect(() => {
    getRecipeList();
  }, []);


  return (
    < >
      <h1>レシピ一覧</h1>
      <div className="p-5">
        <input className="border border-slate-500" type="text" value={name} onChange={handleNameChange} />
        <button className="border" onClick={handleSubmit} >Submit</button>
      </div>
      入力内容: {name}
      <div className="border border-state-500 p-5 flex flex-row">
        <div>サイドバー左</div>
        <Container key="recipes" maxWidth="md" className="border">
          {recipes.map((r: Recipe) => (
            <div key={r.id} className="flex flex-row p-5 border">
              <div>
                <img src="http://localhost:9090/dev-coome-asset/aaaa" width="100" className="border" />
              </div>
              <div className="w-full text-left pl-5">
                <Link to={"/recipe/" + r.id} replace>
                  <h2 className="inline-block">{r.title}</h2>
                </Link>
                <p className="text-xs text-slate-400">書いた人: {r.ownerId}</p>
                <p>{r.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </ >
  )
}
