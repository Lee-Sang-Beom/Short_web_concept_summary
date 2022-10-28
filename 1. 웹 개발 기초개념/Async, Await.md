## Async, Await

- **async, await**은 promise를 좀 더 편하게 사용할 수 있도록 하기 위해 등장한 키워드입니다.

- **promise**는 비동기 처리을 할 때, 비동기 처리가 정상적으로 이루어지면 **resolve**함수를 실행하고, 실패하면 **reject**함수를 실행합니다.

- async는 함수 앞에 붙이는 키워드로, **해당 함수를 promise 객체를 리턴하는 함수**로 만들어줍니다.
  promise가 아닌 값을 반환하더라도, 항상 이행상태를 의미하는 resolve() 전달값을 갖는 Promise객체를 반환합니다.

- await 키워드는 promise가 처리되어 반환될 때까지 **해당 코드 라인의 수행을**을 기다립니다.
  후속 처리 메서드인 **then()**도 promise를 반환하기 때문에, async 함수 결과로 return된 Promise객체에 then()을 처리한 결과값도 받아들일 수 있습니다.



===

## (추가) promise, await/async 차이

 - promise를 사용할 때는, 후속처리 메소드인 catch()문으로 에러 핸들링이 가능하지만,
 - async/await은 async 함수의 결과로서, promise 객체를 return받기를 기다리는 await문을 try문으로 감싸는 try-catch() 문을 활용할 수 있습니다.

 - promise는 후속처리 메서드인 then()의 긴 연결로, 콜백 지옥과 같은 가독성 문제를 발생시킬 수 있습니다.
 - **async/await** 은 비동기 코드가 동기 코드처럼 읽히게 해주니, 코드 흐름을 이해하기 쉽도록 합니다.