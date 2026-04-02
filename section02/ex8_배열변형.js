// 5가지 배열 변형 메서드

// 1, filter
// 어디에 쓰이는가 : 용도 : 웹 서비스 개발시 특정 조건에 의해 검색하는 기능, 카테고리별 필터 기능 구현에 필수적 사용 !!
// 필터는 조건에 의해 무언가를 걸러낼 때 사용
let arr1 = [
  { name: "이종빈", hobby: "게임" },
  { name: "강한수", hobby: "게임" },
  { name: "김승경", hobby: "게임" },
  { name: "김아라", hobby: "유튜브" },
];

//배열의 모든 요소를 순회하면서 조건을 만족하는 값들만 새로운 배열로 반환
const gammer = arr1.filter((item) => item.hobby === "게임");
console.log(gammer);

// 2. map
// 이요소의 값들을 바꾸고 싶을때 사용함
// 배열의 모든 요소를 순회하면서 각각 콜백함수 실행 후 그 결과 값을 모아서 새로운 배열로 반환
// 즉 , 원본 배열의 값들을 변형한 새로운 배열 생성

let arr2 = [1, 2, 3];
const mapResult = arr2.map((item) => item * 10);
console.log(mapResult); // 10,20,30으로 나옴
// 이렇게 값을 바꿔야 할 때 사용

// forEach,filter,map 모두 매개변수 - 요소, 인덱스 , 원본 배열 -> 필요한 변수만 사용 가능하다.

//3. sort
// 배열의 요소들을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 7]; // 오름 차순
arr3.sort((a, b) => a - b);
console.log(arr3);

// sort 의 내림 차순
arr3.sort((a, b) => b - a);
console.log(arr3);
// 내부 코드
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b앞으로 이동
    return -1;
  } else if (a < b) {
    // b가 a앞으로 이동
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 않음
    return 0;
  }
});
console.log("-------------------------------------");

// 4. toSorted( 최신 정렬 함수 )
// 정렬된 새로운 배열을 반환하는 메서드
// 장점 :  원본 배열을 그대로 유지
let arr4 = [10, 3, 7];
let sortedArr = arr4.toSorted((a, b) => a - b);
console.log(sortedArr);
console.log(arr4);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["Hi", "My", "name", "is", "jongbeen"];
const joined = arr5.join(" "); // 구분자 매개변수로 전달 가능( 기본 구분자는 ,)
console.log(joined);
