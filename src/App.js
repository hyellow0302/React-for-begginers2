import Button from "./Button";
import styles from "./App.module.css";

import {useState, useEffect} from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  /*
  const iRunOnlyOnce = () =>{
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, [  ])
  */
  useEffect(()=>{
    console.log("I run only once.");
  },[]);

  useEffect(()=>{
    console.log("I run when 'keyword' changes.");
  },[keyword]);

  useEffect(()=>{
    console.log("I run when 'counter' changes.");
  },[counter]);

  useEffect(()=>{
    console.log("I run when keyword & counter change.");
  },[keyword, counter]);
  /*
  useEffect(()=>{
    if(keyword !== "" && keyword.length>5){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);
*/
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here.."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button> 
    </div>
    /*
    #6.2 Deps
    - 내 코드의 특정한 부분만이 변화했을때, 원하는 코드를 실행할 수 있는 방법을 배워보자
    - 예를 들어, 카운터를 세는데도 검색이 계속 되면 ... 좀 그러니까!
    - component가 맨 처음 render되고 이후에는 더이상 render되지않도록 함.  
    - useEffect는 2개의 argument를 가지는데, 첫번째는 딱 한번만 실행하고 싶은 코드, [] 괄호 안에 있는 값이 변화할 때 코드를 실행할 것이라고 알려줌.
    - 따라서 []빈 array로 두었을 때 코드가 단 한번만 실행됨 ! 
    */
  );
}

export default App;