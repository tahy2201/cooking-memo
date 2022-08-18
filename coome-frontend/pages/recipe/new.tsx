import React, { FC, useState } from "react";
import { Ingredients, Recipe } from "../../dto/QueryTypes";
import { Edit, Save, Favorite, Share, Add, Remove } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

export const NewRecipe: FC = () => {

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDesctiprion] = useState("");
  const [ingredients, setIngredients] = useState([] as Ingredients[]);
  const [process, setProcess] = useState([] as string[]);
  const [srcLink, setSrcLink] = useState("");

  function addIngredients(event: any) {
    let tmpIng = [...ingredients];
    tmpIng.push({ name: "", amount: 1, unit: "個" });
    setIngredients(tmpIng);
  }

  function removeIngredients(event: any) {
    let tmpIng = [...ingredients];
    tmpIng.splice(event.currentTarget.getAttribute("ing-num"), 1);
    setIngredients(tmpIng);
  }

  function addProcess(event: any) {
    let tmpProcess = [...process];
    tmpProcess.push("");
    setProcess(tmpProcess);
  }

  function removeProcess(event: any) {
    let tmpProcess = [...process];
    tmpProcess.splice(event.currentTarget.getAttribute("ing-num"), 1);
    setProcess(tmpProcess);
  }

  return (
    <div className="bg-lime-100">
      
      <h1 className="pt-5 pb-5 text-3xl">
        <TextField
            required
            id="outlined-required"
            label="料理名"
            value={title}
            onChange={(event: any) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
          />
      </h1>
      <div className="flex flex-row text-center justify-center">
        <div className="bg-red-200 p-10">
          <img src="http://localhost:9090/dev-coome-asset/aaaa" width="300" className="border border-solid border-gray-700 " />
        </div>
        <div className="bg-green-200 grow p-5 flex flex-col max-w-2xl">
          <div>
          <TextField
            id="outlined-multiline-flexible"
            label="料理の説明"
            multiline
            maxRows={4}
            value={description}
            onChange={(event: any) => {
              console.log(event.target.value);
              setDesctiprion(event.target.value);
            }}
        />
          </div>
          <text className="pt-4 text-left text-2xl">材料</text>
          <div key={ingredients.length} className="py-4">
            {ingredients.map((ing: Ingredients, index: number) => (
              <div key={index} className="py-1 px-2 flex flex-row items-center">
                <TextField
                  id="outlined-multiline-flexible"
                  label="材料名"
                  value={ing.name}
                  onChange={(event: any) => {
                    console.log(event.target.value);
                    let tmpIng = {...ing};
                    tmpIng.name = event.target.value;
                    setIngredients(
                      ingredients.map((v, i) => (i === index ? tmpIng : v))
                    );
                  }}
                  className="basis-1/2 text-left"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="個数"
                  type="number"
                  value={ing.amount}
                  onChange={(event: any) => {
                    console.log(event.target.value);
                    let tmpIng = {...ing};
                    tmpIng.amount = event.target.value;
                    setIngredients(
                      ingredients.map((v, i) => (i === index ? tmpIng : v))
                    );
                  }}
                  className="basis-1/5 px-2"
                />
                <Fab size="small" color="secondary" aria-label="remove">
                  <Remove onClick={removeIngredients} ing-num={index} />
                </Fab>
              </div>
            ))}
          </div>
          <div className="text-left p-4">
            <Fab size="small" color="secondary" aria-label="add">
              <Add onClick={addIngredients}/>
            </Fab>
          </div>
        </div>
      </div>
      <div className="text-left pl-10 py-10">
        <p className="text-2xl">作り方</p>
        <div className="py-2">
          {process.map((p: string, index: number) => (
            <div key={index} className="py-1 px-2 flex flex-row items-center">
              <p className="pr-5">{index + 1}. </p>
              <TextField
                  id="outlined-multiline-flexible"
                  label="作り方"
                  value={p}
                  onChange={(event: any) => {
                    console.log(event.target.value);
                    setProcess(
                      process.map((v, i) => (i === index ? event.target.value : v))
                    );
                  }}
                  className="basis-1/2 text-left pr-2"
                />
                <Fab size="small" color="secondary" aria-label="remove">
                  <Remove onClick={removeProcess} ing-num={index} />
                </Fab>
            </div>
          ))}
          <div className="text-left p-4">
            <Fab size="small" color="secondary" aria-label="add">
              <Add onClick={addProcess}/>
            </Fab>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRecipe;