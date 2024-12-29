import React from "react";
import MainContent from "./MainContent";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white border-b pt-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            מפתח Full Stack
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            בניית אפליקציות מודרניות באמצעות React, Node.js וטכנולוגיות ענן
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <MainContent />
    </>
  );
};

export default HomePage;
