## requestAnimationFrame

- **타이머를 이용한 자바스크립트의 애니메이션 구현 과정**에서, 간혹, 현재 리페인트 과정과 다음 리페인트 과정에서 일어나야 할 애니메이션 내용 수정이 어긋나게 발생되는 경우가 있을 수 있습니다. 
    - 이는 동기적으로 동작하는 이벤트 루프로 인한 딜레이로 인해 발생하게 됩니다.
    - 이 때, 애니메이션은 의도한 대로 부드럽게 움직이지 않을 수 있습니다.

- 또한 타이머 함수를 이용해 애니메이션을 구현하면, 디스플레이 주사율에 맞춰지지 않은 애니메이션이 출력될 수 있습니다.
    - 브라우저의 프레임 생성 간격에 알맞게 setTimeout이나 setInterval에 전달한 콜백함수가 실행되지 않으면 프레임을 잃을 수 있기 때문입니다.


- 그래서 브라우저는, 이러한 오류를 방지하기 위해  `requestAnimationFrame()` 를 사용하는 방법을 사용합니다.

- requestAnimationFrame 함수는 브라우저에게 수행하기를 원하는 애니메이션의 내용을 알리고, 다음 리페인트 전에, 애니메이션을 업데이트하는 함수를 호출하도록 하여 애니메이션이 의도된대로 규칙적으로 수정되고 출력될 수 있도록 합니다.
- 또, 해당 함수를 사용하면, 애니메이션이 초당 60번 동작하도록 제한됩니다. 이는 최적화된 속도로 부드러운 애니메이션을 표현하여, 성능을 최대한 확보하도록 합니다.