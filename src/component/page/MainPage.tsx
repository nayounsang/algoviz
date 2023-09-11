import React from "react";
import MyCard from "../Main/MyCard";
import { useNavigate } from "react-router-dom";
import MyAppbar from "../MyAppbar";



const MainPage = () => {

    const navigate = useNavigate();

    const data = [
        {img:'/image/help.png',title:'도움말',text:'도웅말',onClick:()=>{navigate('/help')}},
        {img:'/image/udgraph.png',title:'무향그래프',text:'DFS, BFS, 다익스트라',onClick:()=>{navigate('/udgraph')}},
        {img:'/image/dgraph.png',title:'방향그래프',text:'DFS, BFS, 다익스트라, 위상정렬',onClick:()=>{navigate('/dgraph')}},
    ]

    return (
    <div>
        <MyAppbar title={'그래프 알고리즘 시각화'} style={{}}/>
        <div style = {{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#f9f9f9'}}>
            <div style={{height:100}}></div>
            {data.map((d,i)=>(
                <MyCard key={i} img={d.img} title={d.title} text={d.text} onClick={d.onClick}/>
            ))}
        </div> 
    </div>
    )
}

export default MainPage;