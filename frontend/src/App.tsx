import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { SampleHome, SamplePage1, SamplePage2 } from './components/Dashboard';
import { RecipePage } from './components/RecipePage';
import { RecipeList } from './components/RecipeList';
import { DefaultPage } from './components/DefaultPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="recipeList" element={<RecipeList />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route path="page1" element={<SamplePage1 />} />
            <Route path="page2" element={<SamplePage2 />} />
            <Route path="page3" element={<DefaultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
