import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Layout';
import Main from './pages/Main';
import Mind from './pages/Mind';
import Bucket from './pages/Bucket';
import Vision from './pages/Vision';
import Manda from './pages/Manda';
import NotFound from './pages/NotFound';

const mindData = [
  {id: 1, body: '어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기증세다', author: '알버트 아인슈타인'},
  {id: 2, body: '열심히 노력하다가 갑자기 나태해지고 잘 참았다가 조급해지고 희망에 부풀었다가 절망에 빠지는 일을 또 다시 반복하고 있다 그래도 계속해서 노력하면 수채화를 더 잘 이해할 수 있겠지 그게 쉬운 일이었다면, 그 속에서 아무런 즐거움도 얻을 수 없었을 것이다 그러니 계속해서 그림을 그려야겠다', author: '빈센트 반 고흐'},
  {id: 3, body: `At some point, everything's gonna go south on you...everything's going to go south and you're going to say, this is it. This is how I end. Now you can either accept that, or you can get to work. That's all it is. You just begin. You do the math. You solve one problem... and you solve the next one... and then the next. And If you solve enough problems, you get to come home.`, author: 'The martian'},
]

const bucketData = {
  be: ['근육질 몸짱', '원어민과 자연스러운 대화'],
  do: ['봉사활동', '천문학공부', '조각가', '발명가'],
  have: ['나만의 공간(서재)', '화면 큰 맥북', '차'],
  where: ['오로라 볼 수 있는 곳']
}

const App = () => {
  const [ mind, setMind ] = useState(mindData);
  const [ bucket, setBucket ] = useState(bucketData);
  

  // 전달받은 body, author를 mindData에 등록함
  const mindRegister = (body, author) => {
    setMind((current)=>{
      const newMind = [...current];
      const nextId = mind[mind.length -1].id + 1;
      newMind.push({id: nextId, body: body, author: author});
      return newMind;
    })
  }

  // 전달받은 category, body를 bucketData에 등록함
  const bucketRegister = (category, body) => {
    setBucket((current)=>{
      const newBucket = {...current};
      // newBucket.category
      return newBucket;
    })
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path='/mind' element={<Mind data={mind} mindRegister={mindRegister} />}></Route>
        <Route path='/bucket' element={<Bucket data={bucket} bucketRegister={bucketRegister} />}></Route>
        <Route path='/vision' element={<Vision />}></Route>
        <Route path='/manda' element={<Manda />}></Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default App;
