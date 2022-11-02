import Home from './routes/Home';
import Detail from './routes/Detail';
import {
  BrowserRouter as Router,//HashRouter�̶�� �͵� �ִ�
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
.then�� ���� ������� �ʴ´�. ��� ����ϴ°� async�� await!

Router�� ����: ȭ���� ��ȯ��Ű�� ~  url�ڿ� /�ӽñ� �̷��� �ٴ� ����!
Switch�� Route�� ã�� ����
Route�� URL�� �ǹ���

�츮�� 2���� ������ٰ��� �ϳ��� Ȩ���� ���°�! <Route path="/">

������ �츮 url /�� �ִٸ� home�� �����
*/
/*
<�츮�� route ����~>
home���� ���� �� �����ְ� ~~!!
movie���� ��ȭ �ϳ��� �����ְ����Ѵ� !!
*/