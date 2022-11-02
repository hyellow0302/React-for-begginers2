import Home from './routes/Home';
import Detail from './routes/Detail';
import {
  BrowserRouter as Router,//HashRouter이라는 것도 있다
  Routes,
  Route,
} from "react-router-dom";

function App () {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Detail/>}/>
    </Routes>
  </Router>;
}

export default App;
/* 
.then을 요즘엔 사용하지 않는다. 대신 사용하는게 async와 await!

Router의 역할: 화면을 전환시키는 ~  url뒤에 /머시기 이렇게 붙는 형태!
Switch는 Route를 찾는 역할
Route는 URL을 의미함

우리는 2개를 만들어줄거임 하나는 홈으로 가는거! <Route path="/">

누군가 우리 url /에 있다면 home을 띄워줄
*/
/*
<우리의 route 구성~>
home에서 모든걸 다 보여주고 ~~!!
movie에서 영화 하나를 보여주고자한다 !!
*/