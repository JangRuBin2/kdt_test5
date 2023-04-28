import inquirer from "inquirer"
import {program} from "commander"
import fs from "fs"
import { rootCertificates } from "tls";
// ! commander라는 이름을 지원하지 않음
// console.log(program);
// console.log(inquirer);

const test = inquirer.prompt([{
  // ? CLI 환경에서 입력 받은 데이터가 html 파일의 이름으로 사용 된다
  type : "input",
  // name 문자열로 해야 함
  name : "inputHtmlFileName",
  message : "html 파일의 이름을 정해주세요 :",
},
{
  // ? title 태그의 기본 정보
  type : "input",
  name : "inputHtmlTitleInfo",
  message : "title 태그의 기본 정보를 입력하세요 :"
},
{
  // ? body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택 가능한 방식
  type : "confirm",
  name : "inputRootCheck",
  message : "div(#root)를 사용하시겠습니까? :"
  // choices : ['네', '아니요']
},
{
  // ? 본문 <p>내용</p>이 작성 가능하게
  type : "input",
  name : "inputHtmlContent",
  message : "본문 내용을 작성하세요 :"
}
]);
test.then((result)=> {
  // console.log(result);
  // ! 입력 받은 html 파일 이름
  const inputHtmlFileName = result.inputHtmlFileName;
  // ! 입력 받은 title 정보
  const inputHtmlTitleInfo = result.inputHtmlTitleInfo;
  // ! 입력 받은 root 사용 여부
  const inputRootCheck = result.inputRootCheck;
  // ! 입력 받은 본문 내용 -> <p>내용</p>
  const inputHtmlContent = result.inputHtmlContent;
  // console.log("비지 않았니?"+htmlFileName);
  // console.log(htmlTitleInfo);
  // ? confirm으로 수정
  // console.log(rootCheck);
  // console.log(htmlContent);
  
  // ? 위 abc 항을 모두 충족하는 형태의 CLI 입력을 모두 받고, 입력 데이터를 기초 데이터로 HTML 파일이 /result 디렉토리에 생성
  const testSciprt = ` <script>
  const root = document.getElementById("root");
  console.log(root);
</script>`;
  // ! html 파일 제목
  const filePath = `./result/${inputHtmlFileName}.html`;
  // ! html 파일 내용
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${inputHtmlTitleInfo}</title>
  </head>
  <body>
      <p>${inputHtmlContent}</p>
  </body>
  </html>`;

  const useRootHtml =
 `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${inputHtmlTitleInfo}</title>
  </head>
  <body>
    <div id="root">
      <p>${inputHtmlContent}</p>
    </div>
  </body>
  </html>`;
  // const fileContent = "";
  try {
    // 입력 받은 파일 생성
    // ! 파일 이름이 입력되지 않았을 땐 파일생성 안함
    if(inputHtmlFileName !== "") {
      // ! root 사용하는 html
      if(inputRootCheck === true) {
        fs.writeFileSync(filePath, useRootHtml, "utf-8");
      }
      // ! root 사용 안하는 html 
      else {
        fs.writeFileSync(filePath, html, "utf-8");
      }
      // const div = document.createElement("div");
      // div.innerText = "대머리";
      // document.body.appendChild = div;
      // const root = document.getElementById("root");
      // console.log(root)

  }
  } catch (err) {
    console.log(err);
  }
});






