/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import dumy from './dummy.png';
import './App.css';


function App() {

  // var [a,b] = [10, 100];

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '권토팔 추천 맛집']);
  // let [글제목2, 글제목변경2] = useState('남자 코트 추천2');

  let [카운트, 변경된카운트] = useState(0);

 

  

  let posts = '강남 고기 맛집';
  let txt = '토팔 개발 Blog';
  let post = {color : 'aqua', fontSize : '16px'}

  function 함수(){
    return 100;
  }

  return (
    <div className="App">
        <div className="black-nav">
          <div style={ post }> { txt } </div>
        </div>
        {/* <img src={ dumy } className="immg"/> */}
        {/* <h4> { posts } </h4>  */}
        {/* <h4> { 함수() } </h4>  */}
        {/* 데이터 바인딩 */}

        <button className='btn' onClick={ ()=>{ 글제목변경(['여자 코트 추천', '강남 우동 맛집', '권토팔 추천 맛집']) } }>버튼</button>

        <div className="list">
          <h3> { 글제목[0] } <span onClick={ ()=>{변경된카운트(카운트+1);} }>❤️</span>{카운트}</h3>
          <p>11월 19일 발행</p>
          <hr/>
        </div>

        <div className="list">
          <h3> { 글제목[1] } <span onClick={ ()=>{변경된카운트(카운트+1);} }>❤️</span>{카운트}</h3>
          <p>11월 19일 발행</p>
          <hr/>
        </div>

        <div className="list">
          <h3> { 글제목[2] } <span onClick={ ()=>{변경된카운트(카운트+1);} }>❤️</span>{카운트}</h3>
          <p>11월 19일 발행</p>
          <hr/>
        </div>



    </div>
  );
}

export default App;
