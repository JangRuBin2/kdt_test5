<!-- ? 23.04.28(금) -->
1. 아키텍팅(구조화) 과정에서 입력처리 실험이 필요하게 됨
2. 서버로 송출하는 형태로 입력처리를 하는 것은 로직 구성하는데 불편하다고 판단하게 되었다.
3. 실험용 입력처리로, npm 외부 프레임워크나 외부 라이브러리등, node.js에서 지원하는 입력처리 방식을 사용하기로 결정 되었다.

<!-- !개발자 요구 사항 -->
1. npm 에서 지원하는 commander.js inquirer.js 모듈을 설치할 것
2. cli 환경에서 입력처리가 올바르게 작동하는지 확일할 것
3. CURD, 주요 기능과 상호작용 하는지 확인할 것

<!-- ! 사장님 요구 사항 -->
1. CLI 환경에서 입력 받은 데이터가 html 파일의 이름으로 사용 된다.
2. html 파일의 기본 요구사항
  a. title 태그의 기본 정보
  b. body 태그의 자식으로서 최상위 div #root 태그 사용 유무 선택 가능한 방식
  c. 본문 <p>내용</p>이 작성 가능하게
3. 위 abc 항을 모두 충족하는 형태의 CLI 입력을 모두 받고, 입력 데이터를 기초 데이터로 HTML 파일이 /result 디렉토리에 생성

<!-- ? Check List -->
1. 버전 관리 필수
2. 작업 진행 방향과 시도를 파악 가능하게 정기적인 커밋 바람
3. root(최상위) > result폴더가 있어야 함