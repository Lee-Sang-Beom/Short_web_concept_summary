## Shorthand property names

- JavaScript의 Object는 항상 Key와 value로 구성되어 있습니다.
- 만약 value에 변수명을 사용할 예정이고, 이것이 key와 이름이 같은 경우 축약하여 사용할 수 있습니다.
```
// 일반적인 경우
const obj1 = {
	name: 'Lee',
	age: 25,
};

const name = "Lee";
const age = 25;

// key, value명이 동일한 경우 축약하여 사용가능
const obj2 = {
	name, // name: name,
	age, // age: age,

};
```

---

## Destructuring Assignment

- Object의 key, value 요소에 접근하기 위해 중괄호(Array는 대괄호) 를 사용하는 방법입니다.
- Object 요소를 꺼낼 때는 {}를, Array 요소를 꺼낼 때는 []를 이용하는 것을 기본으로 합니다.
```
const {name, age} = obj1;

// 변수명을 변경하여 작성 가능
const {name: name2, age: age2} = obj1;
```

---

## Spread Syntax (연산자)

- Object나 Array 요소를 복사하기 위해 ‘…’ 키워드를 사용하는 방법입니다.
- 1depth까지는 깊은 복사의 특징을 가질 수 있지만, 이후는 얕은 복사의 특징을 가집니다.
```
const obj1 = {key: '1'};
const obj2 = {key2: '2'};
const merge = {...obj1, ...obj2};

merge.key2=100; // merge된 값 변경

// 1depth 한정 깊은 복사
console.log(obj2); // { key2: '2' }
console.log(merge); // { key: '1', key2: 100 }
```

---

## Default Parameters

- 함수로 전달될 인자의 Default값을 설정하는 방법입니다.
- 인자가 전달되지 않은 경우의 Default값을 사용 가능하고, 전달된 경우에는 전달된 인자를 사용합니다.
    ```
    function print(msg = "안녕하세요."){
        console.log(msg);
    }
    ```

---

## Ternary Operator

- 간단히 말해, 한 줄로 조건문을 기술하는 방법입니다.
-  ? 오른쪽에는 조건문이 true일 때, : 오른쪽에는 조건문이 false일 때 수행할 문장을 기술하고, 값을 반환하도록 합니다.
- ``` isTrue ? '100' : '200' ```

---

## Template Literals

- (개인적견해) React에서 엄청 자주 사용됩니다.
- 문자열 조합 시, “+” 연산자를 사용하지 않고,
- 백틱( ` ) 기호를 통해 문자열과 변수를 하나의 문자열로 통합합니다.
- ```console.log(`${isHello}, Mr ${name}~!`);```

---

## Optional Chaining

- 요소에 접근할 때, ? 기호를 사용하는 방법입니다.
- if문과 else문으로 복잡하게 접근해야 했던 “요소가 있으면 수행하는” 기능을 쉽게 구현할 수 있습니다.
    ```
        /* 
        파라미터 person이 
        1. try를 보유하고 있으면
        2. desc를 보유하고 있으면
        3. age출력
        */    
        console.log(person.try?.desc?.age);
    ```

---

## Nullish Coalescing Operator

- 정의는 **왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자입니다.**
- 즉, “??” 연산자를 사용하여, 조건을 검사하는 방법입니다.
    - 변수가 **null, undefined**경우의 조건을 강력하게 검사합니다.
    - 빈 문자열 **‘’과, number type 0**은 할당된 값으로 봅니다.
    ``` 
    // Nullish Coalescing Operator, 빈 string을 출력 가능
    console.log (name ?? "pls input name"); // 빈 내용 출력

    // Nullish Coalescing Operator, 0으로 할당된 num을 출력 가능
    console.log (num ?? "pls input number"); // 0 
    ```