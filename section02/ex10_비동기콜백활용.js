/**
 * if) 배달의 민족, 요기요, 쿠팡이츠와 같은 앱으로 음식 주문 하는 상황
 * - 주문 기능 구현 function orderFood
 * - 음식을 조리해야 하는 상황. ( 음식 재조 기능 구현 ) :  function makeFood
 * - 배달 기능을 구현 function delivery
 * - 음식 섭취 기능 구현 function eatFood
 */

function orderFood(callback) {
  console.log("1. 음식을 주문 합니다... 배달의 민족 ~ 주문 !");
  setTimeout(() => {
    const food = "치킨";
    console.log(`-주문처리: ${food}`);
    callback(food);
  }, 3000);
}

function makeFood(food, callback) {
  //  음식만들고 픽업 기사 부르기
  console.log(`2.${food}를 제조합니다...`);
  setTimeout(() => {
    const readyFood = `맛있게 조리된 ${food}`;
    console.log(`-조리완료 : ${readyFood}`);
    callback(readyFood);
  }, 2000);
}

function delivery(readyFood, callback) {
  console.log(`3.배달기사님이 ${readyFood}를 픽업했습니다...`);
  setTimeout(() => {
    console.log(`배달완료:${readyFood}`);
    callback(readyFood);
  }, 2000);
}

function eatFood(readyFood) {
  console.log(`배달받은 ${readyFood}를 먹습니다 냠얌`);
}

// 콜백 체인(콜백 지옥 발생 구간 )
orderFood((food) => {
  makeFood(food, (readyFood) => {
    delivery(readyFood, (readyFood) => {
      eatFood(readyFood);
    });
  });
});
