## Function Declaration
- Function Declaration(함수 선언문)은 호이스팅이 발생합니다.
    - **호이스팅**은 자바스크립트 엔진에 의해, 모든 선언문이 코드 유효범위 상단으로 끌어올려지는 현상입니다.
    - 이는, 함수의 선언 자체가 코드의 최상단으로 끌어올려진다는 뜻입니다.

## Function Expression
- Function Expression은 반면, 호이스팅이 발생하지 않습니다.
    - 함수를 변수에 담고 있기 때문에, 변수 호이스팅과 똑같이 동작합니다.
    - **var** 키워드로 선언한 경우에 선언문 이전에 함수를 실행하려 하면, undefined가 저장되어 있기 때문에, undefined 데이터 타입을 호출하려 하기 때문에, **Type Error**가 발생합니다.
    - **let, const** 키워드로 선언한 경우에는, 선언문 이전에 함수를 실행하려 하면, 초기화 단계를 거치지 않았기 때문에, **Reference Error**가 발생합니다