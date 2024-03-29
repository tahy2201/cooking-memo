import React, { FC, useState } from "react";
import { Edit, Save, Favorite, Share } from "@mui/icons-material";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Ingredients, Recipe } from "../dto/QueryTypes";

export const RecipePage: FC<{ rid: number }> = ({ rid }) => {
  // const state = useLocation().state as { recipe: Recipe };
  // const params = useParams();
  // const { id } = useParams<{ id: string }>();
  const recipeDef: Recipe = {
    id: 1,
    title: "料理名",
    thumbnail: "http://localhost:9090/dev-coome-asset/aaaa",
    description: "この料理の説明",
    ingredients: [
      { name: "材料A", amount: 1, unit: "枚" },
      { name: "材料B", amount: 2, unit: "個" },
    ],
    process: ["作り方\n改行", "作り方23"],
    ownerId: 1,
    srcLink: "http://hogehoge.com/",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const [isEdit, setIsEdit] = useState(false);
  const [recipe, setRecipes] = useState<Recipe>(recipeDef);

  React.useEffect(() => {
    if (!isNaN(rid)) {
      axios
        .get("http://localhost:3000/proxy/recipe/get/" + rid)
        .then(function (res: AxiosResponse<Recipe>) {
          const { data, status } = res;
          console.log(res);
          console.log(data);
          setRecipes(data);
        });
    }
  }, [rid]);

  return (
    <div className="bg-lime-100">
      {isEdit ? (
        <div className="w-full flex flex-row-reverse py-5 pr-5 gap-2">
          <Share />
          <Favorite />
          <Save onClick={setIsEdit.bind(this, false)} />
        </div>
      ) : (
        <div className="w-full flex flex-row-reverse py-5 pr-5 gap-2">
          <Share />
          <Favorite />
          <Edit onClick={setIsEdit.bind(this, true)} />
        </div>
      )}

      <h1 className="pb-5 text-3xl">{recipe.title}</h1>
      <div className="flex flex-row text-center justify-center">
        <div className="bg-red-200 p-10">
          <img
            src={recipe.thumbnail}
            width="300"
            className="border border-solid border-gray-700 "
          />
        </div>
        <div className="bg-green-200 grow p-5 flex flex-col max-w-2xl">
          <div>
            <text>{recipe.description}</text>
          </div>
          <text className="pt-4 text-left text-2xl">材料</text>
          <div key={recipe.ingredients.length} className="py-4">
            {/* Warning: The tag <text> is unrecognized in this browser. 
          If you meant to render a React component, start its name with an uppercase letter. */}
            {recipe.ingredients.map(
              (ingredient: Ingredients, index: number) => (
                <div key={index} className="py-1 px-2 flex flex-row">
                  <div className="basis-1/2 text-left">{ingredient.name}</div>
                  <div className="basis-1/2">
                    {ingredient.amount} {ingredient.unit}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="text-left pl-10 py-10">
        <p className="text-2xl">作り方</p>
        <div className="py-2">
          {recipe.process.map((p: string, index: number) => (
            <div key={index} className="py-1 px-2 flex flex-row items-center">
              <p className="pr-5">{index + 1}. </p>
              <p className="whitespace-pre-wrap">{p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row-reverse py-5 pr-5 gap-2">
        <Share />
        <Favorite />
        {isEdit ? (
          <Save onClick={setIsEdit.bind(this, false)} />
        ) : (
          <Edit onClick={setIsEdit.bind(this, true)} />
        )}
      </div>
    </div>
  );
};
