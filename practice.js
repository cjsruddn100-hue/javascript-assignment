const isMember = true;
const totalPrice = 35000;

if (isMember && totalPrice >= 30000) {
  console.log("회원 혜택 적용");
} else if (isMember) {
  console.log("기본 회원 혜택 적용");
} else {
  console.log("일반 예매");
}
