let num = Math.floor(Math.random() * 12 + 1);
console.log(num);

switch (num) {
  case 12:
  case 1:
  case 2:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;

  default:
    console.log("Fall");
    break;
}
