//import Button from "../Download";
//import styles from "./App.module.css";

import {useState, useEffect} from "react";


function App() {
  const [data, setData] = useState([]);
  const [downtype, setDowntype] = useState([]);
  const onChange = (event) => {setDowntype(event.target.value)};
  console.log(downtype);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setData(json);
    });
  }, []);//1번만 시행시키기 위해서 빈 배열 설정
    return(
        <div>
          <header>
            <div class="algorithm_preview">-[알고리즘] 미리보기-</div>
          </header>
            <table border="1">
              {data.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>{item.quotes.USD.price} </td>
                </tr>
              ))}
          </table>
          <form name="download_category" action="" method="get" onchange={onChange}>
            <input type="radio" id="contactChoice1" name="contact" value="EXL"/>
            <label for="contactChoice1">EXL</label>
            <input type="radio" id="contactChoice2" name="contact" value="PDF"/>
            <label for="contactChoice2">PDF</label>
            <input type="radio" id="contactChoice3" ame="contact" value="CSV"/>
            <label for="contactChoice3">CSV</label>
            <input type="radio" id="contactChoice3" name="contact" value="HWP"/>
            <label for="contactChoice3">HWP</label>
          </form>
        </div>
  );
}
export default App;