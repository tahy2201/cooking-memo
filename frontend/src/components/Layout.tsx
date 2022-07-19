import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout: FC = () => {
  return (
    <div className="App flex flex-row">
      <div className="bg-amber-100">
        <Sidebar />
      </div>
      <div className="text-center flex-1">
        <Outlet />
      </div>
    </div>
  )

}