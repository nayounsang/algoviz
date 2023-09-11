import React from "react";
import MyAppbar from "../MyAppbar";

const Part1 = () => {
  return (
    <div>
      <p data-ke-size="size16">
        정점/간선을 추가,삭제를 하거나 그래프를 인접리스트 형식으로 볼 수
        있습니다.
      </p>
      <p data-ke-size="size16">
        백준에서 제일 빈번하게 나오는 입력형식을 따릅니다.
      </p>
      <p data-ke-size="size16">a b c: 가중치가 c이고 정점 a와 b를 잇는 간선</p>
      <p data-ke-size="size16">a b: 정점 a와 b를 잇는 간선</p>
      <p data-ke-size="size16">a: 정점 a</p>
      <p data-ke-size="size16">
        간선을 추가할 시 (그래프에 존재하지 않는 정점이라면) 정점이 자동으로
        추가됩니다.
      </p>
      <p data-ke-size="size16">
        존재하지 않는 정점이 포함되거나 간선을 삭제하려하면 삭제되지 않습니다.
      </p>
      <p data-ke-size="size16">
        여러줄에 입력한다면 한번에 여러 간선/정점을 추가/삭제가 가능합니다.
      </p>
      <p data-ke-size="size16">다음은 예시입니다.</p>
      <pre style={{ backgroundColor: "#f9f9f9" }}>
        {`
//가중치그래프 예시 주석은 복사하지 말아주세요.
1 3 10
1 2 7
2 4 5
2 5 9
5 6 4
6 7 8`}
      </pre>
      <pre style={{ backgroundColor: "#f9f9f9" }}>
        {`
//혼합 사용도 가능합니다.
1 3 
1 2 7
2 4 
2 5 9
5 6 4
7
8`}
      </pre>
    </div>
  );
};

const Part2 = () => {
  return (
    <div>
      <p data-ke-size="size16">
        {`알고리즘을 선택하시고, 요구하는 인풋이 있다면 입력한 다음 시작버튼을 눌러주세요.`}
      </p>
      <p data-ke-size="size16">
        {`진행하기 버튼을 누르면 알고리즘이 진행하는 과정을 볼 수 있습니다.`}
      </p>
      <p data-ke-size="size16">
        {`뒤로가기 버튼을 누르면 이전과정을 볼 수 있습니다.`}
      </p>
      <p data-ke-size="size16">
        {`만약에 더 진행할 수 없다면(알고리즘이 중료됐다면) 중지하기를 눌러주세요.`}
      </p>
      <p data-ke-size="size16">
        {` 중지하기는 알고리즘 진행 중에도 누를 수 있고 누른다면 지금까지의 알고리즘 진행과정이 초기화됩니다.`}
      </p>
    </div>
  );
};

const Part3 = () => {
  return (
    <div>
      <p data-ke-size="size16">
        {`알고리즘 종료메시지나 기타 오류(주으)메시지가 나옵니다. 너무 많은 메시지가 있는 것 같다면 초기화버튼을 눌러주세요.`}
      </p>
    </div>
  )
}

const Part4 = () => {
  return (
    <div>
      <p data-ke-size="size16">
        {`각 알고리즘 진행단계마다 스택상태와 같은 여러 변수의 정보를 볼 수 있습니다.`}
      </p>
    </div>
  )
}

const HelpPage = () => {
  return (
    <div>
      <MyAppbar title={"도움말"} style={{}} />
      <div style={{ height: 100 }}></div>
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <p>그래프 알고리즘을 시각화 할 수 있습니다.</p>
        <h3>그래프 제어 부분</h3>
        <Part1 />
        <h3>알고리즘 동작 부분</h3>
        <Part2 />
        <h3>메시지 부분</h3>
        <Part3/>
        <h3>알고리즘 정보 부분</h3>
        <Part4/>
      </div>
    </div>
  );
};

export default HelpPage;
