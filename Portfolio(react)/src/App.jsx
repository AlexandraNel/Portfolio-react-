import React from 'react';
import { useState } from 'react';
import Layout from './components/layout';
import Project from './components/project';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    //fragment indicator to return multiple elements without wrapping them in a div or 
    // other container element. 
    <>
      <Layout>

      </Layout>
   </>
  )
}

export default App
