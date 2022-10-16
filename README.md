## wanted_pre_onboarding

원티드 프리온 보딩 5차 선발과제

## Tech
  *NodeJS(NestJs)
  *MYSQL(TypeOrm)

## 1. 회사 등록 <br>
채용 공고를 등록 하기 위해서 회사가 있어어 하고 회사의 등록은 post요청으로 처리 했습니다. TypeOORM의 save 활용하였고 한 회사가 여러개의 채용 공고를 등록 할 수 있기때문에 OneToMany로 Posting과 연결했습니다. <br><br>
## 2. 채용공고 등록 <br>
채용공고는 회사 등록시 없던 내용과 정보를 담고 있습니다. 회사와  ManyToOne 연결되어 있고, 요청은 post요청으로 처리 했습니다. <br><br>
## 3. 채용공고 수정 <br>
수정 할  채용공고의 id를 입력 받아 update 를 진행합니다. QueryBuilder의 update, set을 활용하여 값을 변경 가능 하게 했습니다. . <br><br>
## 4. 채용공고 삭제 <br>
삭제 할 채용공고의 id값을 입력 받아 delete를 진행합니다. TypeORM의 delete를 활용하여 기능을 구현 했습니다.
## 5-1. 채용공고 목록 <br>
전체 채용 공고 목록을 가져옵니다. get 요청을 활용하였고 QueryBuilder와  leftJoinAndSelect 으로 회사와 채용공고를 join하고 select로 원하는 값을 가져 오게 했습니다.<br><br>
## 5-2. 채용공고 검색 <br>
채용공고 검색은 search 라는 @Query로 요청을 합니다. 회사명으로 검색을 할 수 있습니다. 회사 명이 있을 경우 결과를 보여 줍니다.  QueryBuilder와  leftJoinAndSelect 을 사용하고, where의 like를 사용하여 검색을 구현 했습니다. <br><br>
## 6. 채용 상세페이지 <br>
채용공고의 id값을 이용하여 상세페이지를 구현 했습니다. QueryBuilder와  leftJoinAndSelect 사용했고 전체를 조회 할때와 다르게 채용내용이 추가로 결과값에 표현이 됩니다. <br><br>
## 7. 채용 공고 지원 <br>
유저와 apply를 만들고 유저와 apply는 서로 관련이 있기 때문에 서로 매핑을 시킵니다. 유저의 id값과 apply의 id값을 가지고  지원 합니다. <br><br>