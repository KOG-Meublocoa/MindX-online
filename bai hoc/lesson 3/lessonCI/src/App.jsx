import React from "react";
import FragmentDemo from "./components/FragmentDemo";
import  ExternalStyleDemo  from "./components/ExternalStyleDemo";
import Hello from "./components/Hello";
import InlineStyleDemo from "./components/InlineStyleDemo"; 

import Card2 from "./components/Card2";
import "./App.css";

const App = () => {
    return (
        <>
            <h2 className="title">THỰC HÀNH LESSON 3</h2>

            <div className="card-list">
                <Card
                    name="Nguyễn Văn A"
                    learningClass="Code Intensive"
                    slogan="Trở thành master coding là ước mơ của tôi"
                />

                <Card
                    name="Trịnh Văn B"
                    learningClass="Web Fullstack"
                    slogan="Học nữa, học mãi"
                />

                <Card
                    name="Vũ Văn C"
                    learningClass="Code For Everyone"
                    slogan="Quyết tâm thành thạo ReactJs"
                />
            </div>
        </>
    );
};

export default App;

function App() {
  return (
    <div>
      <h1>Lam quan voi React</h1>
      <h2>Phan 3: Components</h2>
      <Hello />
      <FragmentDemo />
      <h1>phan 4:hien thi data</h1>
      <InlineStyleDemo/>
      <ExternalStyleDemo/>
    </div>
  )
};
export default App;

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>Chúc mừng, tui đã chạy được React.</p>
//     </div>
//   );
// }

// export default App;
