## Flex

- flexbox는 박스 내의 영역에서, 요소들이 위치를 정렬하기 위한 레이아웃 모델입니다. 
- 다양한 디바이스 환경에서, 일관된 레이아웃을 유지하는 데 큰 도움을 줍니다.

---

- 부모요소인 **Flex Container**에는, display: flex를 선언하여 Flex Item이 담길 공간에 대한 설정을 정의할 수 있습니다.
    - 주축방향을 설정하는 flex-direction, 
    - 주축/교차축 방향의 요소 배치방법을 결정하는 justify-content, align-items 등의 속성을 사용할 수 있습니다.

- 자식요소인 **Flex Item**에는 부모인 Flex Container 내에서, 요소의 크기를 세부적으로 설정할 수 있습니다.
    - item의 기본너비를 결정하는 flex-basis,
    - 증가 너비/감소 너비 비율을 설정하는 flex-grow, flex-shrink 등의 속성을 사용할 수 있습니다.