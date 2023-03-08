
// 引入react核心库
import React from 'react';

// 引入ReactDOM
import ReactDOM from 'react-dom/client';

// 引入App组件
import App from './App';


// 渲染App到页面
// ReactDOM.render(<App/>, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 可以检查App以及App里面的代码写的是否合理
  <React.StrictMode>
    <App />
  </React.StrictMode>
);