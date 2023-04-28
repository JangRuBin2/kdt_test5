import inquirer from "inquirer"
import {program} from "commander"
import fs from "fs"
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
  // ! 입력 받은 html 파일 이름
  const htmlFileName = result.htmlFileName;
  // console.log(htmlFileName);
  const filePath = `./result/${htmlFileName}.html`;
  const fileContent = "";
  try {
    fs.writeFileSync(filePath, fileContent, "utf-8");
  } catch (err) {
    console.log(err);
  }
});