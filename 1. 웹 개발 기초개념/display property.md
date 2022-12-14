## display property

- display property는 레이아웃 정의에 사용되는 가장 기초적인 정의로, **블록, 인라인, 인라인 블록, none** 등의 종류가 있습니다.

1. **inline 레벨 요소**는
 - 새로운 라인에서 시작하지 않으며, 자기가 필요한 만큼만 영역을 사용합니다.
 - 블록레벨 요소 속성 중 일부는 적용해도 반영되지 않습니다. (height, width)

2. **block 레벨 요소**는 
 - 항상 새로운 라인에서 시작하며, width 100%의 전체 가로폭을 모두 차지합니다.
 - width, height, margin, padding 등의 프로퍼티 지정이 가능합니다.

3. **none**은
 - 화면에 표시하지 않습니다.

4. **inline-block**
 - 인라인처럼 새로운 라인에서 시작되지 않으며, content 너비만큼만 가로폭을 차지합니다.
 - 하지만, 블록 레벨 요소처럼 width, height, margin, padding 등의 프로퍼티 지정이 가능합니다.
 - 즉, 인라인 레벨 요소의 배치방법을 따르면서, 내부적으로는 블록 레벨 요소의 특징을 따릅니다.