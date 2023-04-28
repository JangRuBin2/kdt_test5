import inquirer from "inquirer"
import {program} from "commander"
// ! commander라는 이름을 지원하지 않음
// console.log(program);
// console.log(inquirer);

const test = inquirer.prompt([{
  type : "input",
  // name 문자열로 해야 함
  name : "htmlFileName",
  message : "html 파일의 이름을 정해주세요 : "
}]);
test.then((result)=> {
  // console.log(result);
  const htmlFileName = result.htmlFileName;
  console.log(htmlFileName);
})