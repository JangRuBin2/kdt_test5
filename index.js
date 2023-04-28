import inquirer from "inquirer"
import {program} from "commander"
// ! commander라는 이름을 지원하지 않음
// console.log(program);
// console.log(inquirer);

const test = inquirer.prompt([{
  type : "input",
  name : "입력해봐",
  message : ""
}]);
test.then((result)=> {
  console.log(result);
})