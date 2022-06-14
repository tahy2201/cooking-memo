import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { QueryTypes } from "../dto/QueryTypes";

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
      <div key="recipes">
        {recipes.map((r) => (
          <div key={r.id} className="flex flex-row p-5 border">
            <div>
              <img src="http://localhost:9090/dev-coome-asset/aaaa" width="100" className="border" />
            </div>
            <div className="w-full text-left pl-5">
              <h2>{r.title}</h2>
              <p>{r.ownerId}</p>
              <p>{r.ingredients}</p>
              <p>{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ >
  )
}
