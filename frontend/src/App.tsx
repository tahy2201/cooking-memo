import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { SampleHome, SamplePage1, SamplePage2 } from './components/Dashboard';
import { MyRecipe } from './components/MyRecipe';
import { RecipeList } from './components/RecipeList';
import { DefaultPage } from './components/DefaultPage';

function App() {
  return (
    <div className="App flex flex-row">
      <div className="w-56 h-full bg-stone-200">
        サイドバー
      </div>
      <div className="border">
        <>
          <BrowserRouter>
            <Routes>
              <Route index element={<SampleHome />} />
              <Route path="recipeList" element={<RecipeList />} />
              <Route path="page1" element={<SamplePage1 />} />
              <Route path="page2" element={<SamplePage2 />} />
              <Route path="page3" element={<DefaultPage />} />
            </Routes>
          </BrowserRouter>
        </>
      </div>
    </div>
  );
}

export default App;
