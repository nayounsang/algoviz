https://nayounsang.github.io/algoviz/

# 패치우선순위

1. BFS/DFS 시각화과정을 고칩니다. 방문한 정점들을 좀더 진한 색으로 칠하고, 지금껏 스택(큐)에서 꺼내온 원소들은 원래색대로 칠할 것입니다.
2.  useEffect를 이용해 페이지이동/select변환시 상태 초기화
3.  makeinfo 코드 개선
4.  터미널에서 아이디어를 따와 메세지를 출력하는 곳을 따로 만들었으나, alert로 대체할 것이 나은 것 같습니다. log를 볼 수 있는 버튼과 페이지(또는 컴포넌트)를 따로 만들것입니다.
5. 간선/정점삭제를 개선할 것입니다. 현재는 a b 형식으로 입력하면 a->b의 모든 간선들이 삭제됩니다.(가중치에 상관없이 모든 중복간선이 삭제됩니다.)
6. 주먹구구식으로 하다보니 코드구조가 너무 개판이고 반복되는 코드들을 많이 찾았습니다. 출력 메시지 상태 역시 redux로 관리할 것이고 컴포넌트들을 Atomic패턴으로 바꿀 것입니다.
7. 무향그래프에서 크루스칼 알고리즘을 추가할 것입니다.
8. 유향그래프에서 SCC를 추가할 것입니다.
9. 트리를 추가할 것입니다. LCA알고리즘을 시각화 하는 것이 목표입니다.


