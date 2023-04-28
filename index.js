import inquirer from "inquirer"
import {program} from "commander"
import fs from "fs"
// ! commander라는 이름을 지원하지 않음
// console.log(program);
// console.log(inquirer);

const test = inquirer.prompt([{
  // ? CLI 환경에서 입력 받은 데이터가 html 파일의 이름으로 사용 된다
  type : "input",
  // name 문자열로 해야 함
  name : "htmlFileName",
  message : "html 파일의 이름을 정해주세요 :",
},
{
  // ? title 태그의 기본 정보
  type : "input",
  name : "htmlTitleInfo",
  message : "title 태그의 기본 정보를 입력하세요 :"
},
{
  // ? body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택 가능한 방식
  type : "confirm",
  name : "rootCheck",
  message : "div(#root)를 사용하시겠습니까? :"
  // choices : ['네', '아니요']
},
{
  // ? 본문 <p>내용</p>이 작성 가능하게
  type : "input",
  name : "htmlContent",
  message : "본문 내용을 작성하세요 :"
}
]);
test.then((result)=> {
  // console.log(result);
  // ! 입력 받은 html 파일 이름
  const htmlFileName = result.htmlFileName;
  // ! 입력 받은 title 정보
  const htmlTitleInfo = result.htmlTitleInfo;
  // ! 입력 받은 root 사용 여부
  const rootCheck = result.rootCheck;
  // ! 입력 받은 본문 내용 -> <p>내용</p>
  const htmlContent = result.htmlContent;
  // console.log(htmlFileName);
  // console.log(htmlTitleInfo);
  // ? confirm으로 수정
  // console.log(rootCheck);
  // console.log(htmlContent);
  
  // ? 위 abc 항을 모두 충족하는 형태의 CLI 입력을 모두 받고, 입력 데이터를 기초 데이터로 HTML 파일이 /result 디렉토리에 생성
  const filePath = `./result/${htmlFileName}.html`;
  // const fileContent = "";
  try {
    fs.writeFileSync(filePath, htmlContent, "utf-8");
  } catch (err) {
    console.log(err);
  }
});