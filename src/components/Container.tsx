import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Container = ({ children }: any) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <Sidebar />
        <div className="flex flex-col w-full md:space-y-4">
          <Header />
          {children}
          {/*<div className="overflow-auto h-screen pb-24 px-4 md:px-6">*/}
          {/*  <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">*/}
          {/*    Good afternoom, Charlie*/}
          {/*  </h1>*/}
          {/*  <h2 className="text-md text-gray-400">*/}
          {/*    Here&#x27;s what&#x27;s happening with your ambassador account*/}
          {/*    today.*/}
          {/*  </h2>*/}
          {/*</div>*/}
        </div>
      </div>
    </main>
  );
};

export default Container;
