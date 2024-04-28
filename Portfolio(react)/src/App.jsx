import React from 'react';
import Layout from './components/Navigation';
import Project from './components/project';
import './App.css';

export default function App() {
  return (
    //fragment indicator to return multiple elements without wrapping them in a div or 
    // other container element. 
    <>
      <Layout>
        <Project img= "./src/assets/CommandLineReadMe.jpg" title= "Command Line ReadMe Generator" link="n/a" repo="https://github.com/AlexandraNel/CommandLineReadMe"  />       
        <Project img= "" title= "" link="" repo=""  />      
        <Project img= "" title= "" link="" repo=""  />   
        <Project img= "" title= "" link="" repo=""  />   
      </Layout>
   </>
  )
}


