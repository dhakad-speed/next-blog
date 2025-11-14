"use client";
import BaseBox from "../common/BaseBox";

import Blog from "../Blog/Blog";

import "./HomePage.scss";
const HomePage = () => {
  return (
    <BaseBox sx={{ display: "flex" }} className="home-page">
      <BaseBox className="home-block">
        <BaseBox className="home-content">
          <Blog
            content="Welcome to the blog! Here you'll find the latest updates and articles."
            blogImg="https://via.placeholder.com/600x300?text=Blog+Image"
          />
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
};

export default HomePage;
