import React, { ChangeEvent, useState } from "react";
import axios from "axios";

export const RecipeList = () => {
  const [name, setName] = useState('');
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name);
  }

  const getRecipeList = async () => {
    const res = await axios.get("http://localhost:8080/");
    console.log(res.data);
  }

  // マウントされたら、レシピ一覧を取得してくる
  React.useEffect(() => {
    console.log("Hello");
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
    </ >
  )
}
