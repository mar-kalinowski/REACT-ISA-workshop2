import React from 'react';
import ReactDOM from 'react-dom';
// import libraries to routing
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './routes/Home';
import {About} from './routes/About';
import {Posts} from './routes/Posts';
import {AddPost} from './routes/AddPost';
import {PostDetails} from './routes/PostDetails';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/posts-list" element={<Posts/>}></Route>
      <Route path="/post-details" element={<PostDetails/>}></Route>
      <Route path="/add-post" element={<AddPost/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
