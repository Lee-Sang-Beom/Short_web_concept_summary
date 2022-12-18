## Box Model(CSS)

- **Box Model**은 HTML element가 웹 페이지에서 차지하는 공간을 정의한 모델입니다.
    - **HTML element**들은 페이지에서 각각 자신만의 영역을 갖고 있으며, 각 영역은 다시 여러개의 작은 영역으로 구분할 수 있습니다.
    - **렌더링 엔진**은 HTML 문서의 요소를 화면에 배치하기 위해, 표준 css 박스모델에 따라, 각 HTML Element요소들을 Box 모양으로 표현합니다.

- 박스모델은 총 4부분으로, **content, padding, border, margin**의 부분을 가집니다. 

    1. **content**는 말 그대로, 입력 내용을 표시하기 위해 생기는 아주 기본적이고 실질적인 공간입니다.
    2. **padding**은 content(내용)와 border(테두리)사이의 공간입니다.
    3. **border**는 content(내용)와 padding을 감싸는 테두리입니다.
    4. **margin**은 border(테두리) 외부와 이웃하는 요소 사이의 간격입니다.