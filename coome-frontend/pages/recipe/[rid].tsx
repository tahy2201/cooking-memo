import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { RecipePage } from "../../components/recipe";

const Post = () => {
  const router = useRouter();
  const { rid } = router.query;

  return (
    <>
      <p>Post: {rid}</p>
      <RecipePage rid={parseInt(rid as string, 10)} />
    </>
  );
};

export default Post;
