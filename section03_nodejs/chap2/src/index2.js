// 기본 값을 불러올 때 이름 변경 가능하다. 중괄호 밖에 맨 첫번째에 쓰는 것 ( 대표니 )
import multiply, { add, sub } from "./math2.js";

console.log(add(10, 20));
console.log(sub(10, 20));

console.log(multiply(10, 20));
// console.log(mul(10, 20)); // 존재하지 않음 ( multiply로 통합했기 때문이다. )

import * as math from "./math2.js";
console.log(math.add(1, 2));
console.log(math.sub(1, 2));
console.log(math.default(1, 2));
