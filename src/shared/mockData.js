//리뷰 데이터
export const reviewData = [
  //reviewUser: userData의 UID
  // like : 좋아요 개수
  // date: 리뷰 작성 날짜
  // bookId: bookData의 itemId
  {
    idx: 0,
    reviewUser: 'iron1',
    content: 'dfdfddfd',
    like: 1,
    bookId: 356791451,
    date: '2024-02-08'
  },
  {
    idx: 1,
    reviewUser: 'iron2',
    content: 'sdfdfdsfds',
    like: 1,
    bookId: 356841038,
    date: '2024-02-07'
  },
  {
    idx: 2,
    reviewUser: 'iron3',
    content: 'sdfdfdsfds',
    like: 1,
    bookId: 356838150,
    date: '2024-02-06'
  },
  {
    idx: 3,
    reviewUser: 'iron3',
    content: 'sdfdfdsfds',
    like: 1,
    bookId: 356790670,
    date: '2024-02-02'
  },
  {
    idx: 4,
    reviewUser: 'iron4',
    content: 'sdfdfdsfds',
    like: 3,
    bookId: 356855173,
    date: '2024-02-01'
  }
];

// 책 아이디에 등록

// 리뷰를 등록했을때 랜덤으로 부여되는 uid.....

export const userData = [
  {
    uid: '0',
    profile: '',
    userNickName: 'iron1',
    userEmail: 'andatne1104@naver.com',
    userPwd: 'sudal123',
    isLoggedIn: false,
    review: []
  },
  {
    uid: '1',
    profile: '',
    userNickName: 'iron2',
    userEmail: 'naver123@gmail.com',
    userPwd: 'su32231',
    isLoggedIn: true,
    review: []
  },
  {
    uid: '2',
    profile: '',
    userNickName: 'iron3',
    userEmail: 'nauro1104@daum.com',
    userPwd: 'dele123123321@',
    isLoggedIn: false,
    review: [
      { idx: 4, reviewUser: 'iron3', content: 'dfdfddfd', like: 0 },
      { idx: 5, reviewUser: 'iron3', content: 'sdfdfdsfds', like: 2 }
    ]
  },
  {
    uid: '3',
    profile: '',
    userNickName: 'iron4',
    userEmail: 'nauro1204@naver.com ',
    userPwd: 'd44443321@#',
    isLoggedIn: false,
    review: [
      { idx: 6, reviewUser: 'iron4', content: 'dfdfddfd', like: 0 },
      { idx: 7, reviewUser: 'iron4', content: 'sdfdfdsfds', like: 2 }
    ]
  },
  {
    uid: '4',
    profile: '',
    userNickName: 'iron5',
    userEmail: 'nauro12204@naver.com',
    userPwd: 'd3321@#',
    isLoggedIn: false,
    review: [
      { idx: 8, reviewUser: 'iron5', content: 'dfdfddfd', like: 0 },
      { idx: 9, reviewUser: 'iron5', content: 'sdfdfdsfds', like: 2 }
    ]
  }
];

export const bookData = [
  {
    itemId: 356791451,
    title: '마흔에 읽는 쇼펜하우어',
    description: `★쇼펜하우어 신드롬을 일으킨 화제의 책★
    ★교양과 트렌드를 망라한 ‘마흔에 읽는’ 철학서★
    
    ‘쇼펜하우어 신드롬’을 일으킨 화제의 책
    마흔의 삶에 지혜를 주는 쇼펜하우어의 30가지 조언
    
    2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.
    
    ‘마흔’, ‘오십’, ‘서른’ 등 연령을 키워드로 한 인문 교양 도서들이 휩쓸고 있다. 많은 사람이 나이들며 겪는 환경과 감정에 현명하게 대처하기 위한 지혜를 책에서 찾고, ‘어떻게 살아야 하는가’에 대한 고민을 철학과 함께 풀고 있다. 특히 《마흔에 읽는 쇼펜하우어》가 일으킨 ‘쇼펜하우어 신드롬’은 사람들이 공감하는 생각과 말이라면 시대와 상관없이 통한다는 것을 증명한다....`,
    pubDate: '20230907',
    priceStandard: 17000,
    priceSales: 15300,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '850',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/4/5/1/356791451h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/4/5/1/356791451s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '유노북스',
    customerReviewRank: 9.9,
    author: '강용수',
    translator: '',
    isbn: '9791192300818',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356791451&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356791451&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356791451&biz_cd=',
    reviewCount: [
      { idx: 0, content: 'dsdsadd', likes: 3, data: '2024-02-08' },
      { idx: 1, content: 'dsdsadd', likes: 3, data: '2024-02-08' },
      { idx: 2, content: 'dsdsadd', likes: 3, data: '2024-02-08' }
    ],
    rank: 1
  },
  {
    itemId: 356860849,
    title: '박근혜 회고록 1: 어둠을 지나 미래로',
    description: `“침묵을 깨고
    역사 앞에 서다”
    2024년, 새해 박근혜 전 대통령 회고록 출간!
    
    제18대 대선 이후인 2012년 말부터 
    2022년 3월 대구광역시 달성 사저로 내려오기까지 
    약 10년에 걸친 박근혜 전 대통령의 이야기를 모두 담아낸 유일한 책!
    
    박근혜 전 대통령의 정치 일대기를 담은 도서, 《박근혜 회고록: 어둠을 지나 미래로 1ㆍ2》 총 2권이 2024년 새해를 맞이해 출간됐다. 본 도서는 박근혜 전 대통령의 1998년 정계 입문 시기부터 대통령 당선 후 펼친 외교안보와 국내 다양한 정책 및 2017년 탄핵과 특별 사면에 이르기까지 박근혜 대통령의 정치 역사를 모두 살펴볼 수 있는 책으로, 역사적 사료로서의 가치도 높다.`,
    pubDate: '20240205',
    priceStandard: 25000,
    priceSales: 22500,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '1250',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/8/4/9/356860849h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/8/4/9/356860849s.jpg',
    categoryId: '104',
    categoryName: '국내도서',
    publisher: '중앙북스',
    customerReviewRank: 0,
    author: '박근혜',
    translator: '',
    isbn: '9788927812517',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356860849&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356860849&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356860849&biz_cd=',
    reviewCount: 0,
    rank: 2
  },
  {
    itemId: 356860848,
    title: '박근혜 회고록 2: 어둠을 지나 미래로',
    description: `“침묵을 깨고
    역사 앞에 서다”
    2024년, 새해 박근혜 전 대통령 회고록 출간!
    
    제18대 대선 이후인 2012년 말부터 
    2022년 3월 대구광역시 달성 사저로 내려오기까지 
    약 10년에 걸친 박근혜 전 대통령의 이야기를 모두 담아낸 유일한 책!
    
    박근혜 전 대통령의 정치 일대기를 담은 도서, 《박근혜 회고록: 어둠을 지나 미래로 1ㆍ2》 총 2권이 2024년 새해를 맞이해 출간됐다. 본 도서는 박근혜 전 대통령의 1998년 정계 입문 시기부터 대통령 당선 후 펼친 외교안보와 국내 다양한 정책 및 2017년 탄핵과 특별 사면에 이르기까지 박근혜 대통령의 정치 역사를 모두 살펴볼 수 있는 책으로, 역사적 사료로서의 가치도 높다.`,
    pubDate: '20240205',
    priceStandard: 25000,
    priceSales: 22500,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '1250',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/8/4/8/356860848h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/8/4/8/356860848s.jpg',
    categoryId: '104',
    categoryName: '국내도서',
    publisher: '중앙북스',
    customerReviewRank: 0,
    author: '박근혜',
    translator: '',
    isbn: '9788927813088',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356860848&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356860848&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356860848&biz_cd=',
    reviewCount: 0,
    rank: 3
  },
  {
    itemId: 356827424,
    title: '나는 메트로폴리탄 미술관의 경비원입니다',
    description: `★ 아마존 40주 연속 베스트셀러 ★
    ★ 『랩 걸』 호프 자런, 곽아람 기자, 김소영 대표 추천 ★
    ★ 《뉴욕타임스》, 《워싱턴포스트》, 《파이낸셜타임스》, 《가디언》의 압도적 찬사 ★
    
    “나의 결혼식이 열렸어야 했던 날, 형의 장례식이 거행되었다.
    그해 가을, 나는 다니던 《뉴요커》를 그만두고 
    메트로폴리탄 미술관의 경비원으로 지원했다. 
    그렇게 한동안은 고요하게 서 있고 싶었다”
    
    뉴욕 메트로폴리탄 미술관의 경비원으로 10년,
    인류의 위대한 걸작들을 가장 가까이서 지켜본 한 남자의 
    삶과 죽음, 인생과 예술에 대한 우아하고 지적인 회고
    
    『나는 메트로폴리탄 미술관의 경비원입니다』는 뉴욕 메트로폴리탄 미술관에서 경비원으로 근무했던 패트릭 브링리의 독특하면서도 지적인 회고를 담은 에세이다. 가족의 죽음으로...`,
    pubDate: '20231124',
    priceStandard: 17500,
    priceSales: 15750,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '870',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/4/2/4/356827424h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/4/2/4/356827424s.jpg',
    categoryId: '102',
    categoryName: '국내도서',
    publisher: '웅진지식하우스',
    customerReviewRank: 9.8,
    author: '패트릭 브링리',
    translator: '김희정,조현주',
    isbn: '9788901276533',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356827424&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356827424&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356827424&biz_cd=',
    reviewCount: 2,
    rank: 4
  },
  {
    itemId: 356811279,
    title: '남에게 보여주려고 인생을 낭비하지 마라',
    description: `얄팍한 행복 대신 단단한 외로움을 선택하라!
    니체, 톨스토이, 아인슈타인에게 영감을 준 쇼펜하우어의 삶과 지혜에 대한 격언
    * “나는 쇼펜하우어를 읽으며 여태껏 한 번도 몰랐던 강력한 기쁨을 만끽했다.” _톨스토이
    * “쇼펜하우어는 모든 희망을 잃고도 진리를 추구한 유일한 인물이다.” _니체
    * “이 책이 지금의 명성을 얻은 데는 분명한 이유가 있다. 우아하고 매우 실용적이다.” _로버트 짐머
    철학자들의 철학자로 불리는 쇼펜하우어에게는 늘 비관론자, 비평가, 아웃사이더 등의 꼬리표가 따라다녔다. 하지만 그는 누구보다 인간적인 시선으로 삶의 진리를 추구하던 사람이었다. 1851년 출간된 이 책에서 그는 냉소적이지만 누구보다 현실적인 행복의 의미를 풀어냈고, 200년이 지난 지금까지 많은 사람에게 읽히며... `,
    pubDate: '20231030',
    priceStandard: 17500,
    priceSales: 15750,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '870',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/2/7/9/356811279h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/2/7/9/356811279s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '페이지2북스',
    customerReviewRank: 10,
    author: '쇼펜하우어',
    translator: '박제헌',
    isbn: '9791169850445',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356811279&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356811279&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356811279&biz_cd=',
    reviewCount: 1,
    rank: 5
  },
  {
    itemId: 356838150,
    title: '죽음이 물었다, 어떻게 살 거냐고',
    description: `“언젠가 반드시 죽는다는 것을 기억하라.
    그보다 더 확실한 삶의 철학은 없다.
    죽음은 우리를 늘 깨어 있게 만든다.”
    
    쇼펜하우어, 소크라테스, 반 고흐, 오스카 와일드… 
    찬란한 생의 끝에 만난 마지막 문장들
    
    - 이해인 수녀 추천
    - 독일 아마존 베스트셀러, 독일 현지 언론의 찬사
    - 세계적 현자들의 삶과 죽음에 대한 고찰
    
    “나는 죽음 앞에서 일말의 두려움도 갖고 있지 않다.”  _찰스 다윈
    “슬픔은 영원히 남는 거야. 난 이제 집에 가는 거라고.”  _반 고흐
    “이제야 나의 감옥에서 해방되는구나.”  _술탄 살라딘
    “지금까지 살아온 것처럼 내 처지를 넘어 분에 넘치게 죽음을 맞이하네.”  _오스카 와일드
    
    모든 인간에게는 한 번의 탄생과 한 번의 죽음이 공평하게 허락된다. 탄생이 삶의 일부라면 죽음도...`,
    pubDate: '20231225',
    priceStandard: 17800,
    priceSales: 16020,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '890',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/1/5/0/356838150h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/1/5/0/356838150s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '포레스트북스',
    customerReviewRank: 0,
    author: '한스 할터',
    translator: '한윤진',
    isbn: '9791193506219',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356838150&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356838150&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356838150&biz_cd=',
    reviewCount: 0,
    rank: 6
  },
  {
    itemId: 356861164,
    title: '아이는 무엇으로 자라는가',
    description: `버지니아 사티어의 전설적인 육아 바이블 
    『아이는 무엇으로 자라는가』 출간!
    
    ★★★ 세계에서 가장 많이 읽힌 자녀교육 베스트셀러 
    
    세계적 가족 심리학자, 가족치료의 1인자 버지니아 사티어의 역작이자 누적 부수 100만 부를 돌파한 책 『아이는 무엇으로 자라는가(원제: The New peoplemaking)』가 국내에서 출간되었다. 유수의 언론과 아동, 청소년 전문 교육자와 심리학자들이 극찬하는 이 책은 1988년에 첫 출간된 이후 전 세계 15개국에 번역 출간되었으며, 오랫동안 아마존 베스트셀러의 자리를 지켜온 전설적인 육아의 바이블로 통한다. 
    
    세계적 가족 심리학자이자 가족치료의 1인자인 이 책의 저자 버지니아 사티어는 모든 부모에게, 육아를 할 때는 부모와 가정이라는 정체성부터 단단히 확립할 것을...`,
    pubDate: '20231218',
    priceStandard: 17500,
    priceSales: 15750,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '870',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/1/6/4/356861164h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/1/6/4/356861164s.jpg',
    categoryId: '111',
    categoryName: '국내도서',
    publisher: '포레스트북스',
    customerReviewRank: 0,
    author: '버지니아 사티어',
    translator: '강유리',
    isbn: '9791193506202',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356861164&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356861164&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356861164&biz_cd=',
    reviewCount: 0,
    rank: 7
  },
  {
    itemId: 356790670,
    title: '퓨처 셀프',
    description: `‘미래의 나’를 적용하는 과학 분야 세계 최고의 전문가,
    자기계발 분야 파워블로거이자 베스트셀러 작가의 신작
    세계적인 동기부여 전문가, 토니 로빈스 강력 추천!
    
    현재와 미래를 더 가치 있게 바꾸고 싶다면,
    ‘미래의 나’와 연결하라!
    
    살 날이 얼마 남지 않은 ‘미래의 내’가 현재로 시간 여행을 왔다고 상상해보자. ‘현재의 나’는 해야 할 일은 미뤄둔 채 소파에 누워 핸드폰을 보느라 시간 가는 줄 모른다. 당장 사고 싶은 것, 먹고 싶은 것에 생각 없이 돈을 쓰고, ‘다음 달의 나’에게 결제를 미룬다. 자극적이고 간편한 정크 푸드를 즐겨 먹으며 건강은 생각하지 않는다. 어린 자녀와 눈을 맞추고 시간을 보내기보다 잔소리와 고성이 오가는 전쟁 같은 하루하루를 보낸다. 이 모습을 본 ‘미래의 나’는 과연 어떤 말...`,
    pubDate: '20230830',
    priceStandard: 19800,
    priceSales: 17820,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '990',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/6/7/0/356790670h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/6/7/0/356790670s.jpg',
    categoryId: '118',
    categoryName: '국내도서',
    publisher: '상상스퀘어',
    customerReviewRank: 10,
    author: '벤저민 하디',
    translator: '최은아',
    isbn: '9791192389325',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356790670&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356790670&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356790670&biz_cd=',
    reviewCount: 2,
    rank: 8
  },
  {
    itemId: 356522531,
    title: '세이노의 가르침',
    description: `70만부 기념 빨간 표지
    
    재야의 명저 《세이노의 가르침》 2023년판 정식 출간!
    순자산 천억 원대 자산가, 세이노의 ‘요즘 생각’을 만나다
    
    2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.
    
    더 많은 사람이 이 책을 보고 힘을 얻길 바라기에 인세도 안 받는 저자의  마음을 담아, 700쪽이 넘는 분량에도 7천 원 안팎에 책을 구매할 수 있도록 했다. 정식 출간 전자책 또한 무료로 선보인다.
    
    *필명 ‘세이노(Say No)’는 당신이 믿고 있는 것...`,
    pubDate: '20230302',
    priceStandard: 7200,
    priceSales: 6480,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '360',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/5/3/1/356522531h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/5/3/1/356522531s.jpg',
    categoryId: '118',
    categoryName: '국내도서',
    publisher: '데이원',
    customerReviewRank: 9.8,
    author: '세이노',
    translator: '',
    isbn: '9791168473690',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356522531&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356522531&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356522531&biz_cd=',
    reviewCount: 7,
    rank: 9
  },
  {
    itemId: 356857715,
    title: '2024 큰별쌤 최태성의 별별한국사 기출 500제 한국사능력검정시험 심화(1,2,3급)',
    description: `〈2024 큰별쌤 최태성의 별별한국사 기출 500제 한국사능력검정시험 심화(1,2,3급)〉는 2023년 68회 시험부터 2022년 59회 시험까지 최신 기출문제 10회분, 총 500문항으로 구성되었습니다. &#39기출 BOOK&#39은 실제 시험지를 그대로 구현하여 실전과 같은 문제풀이가 가능하며, &#39해설 BOOK&#39은 모든 선택지의 자세한 해설뿐만 아니라 기출 선택지와 핵심 내용도 수록하여 중요 개념을 반복적으로 학습할 수 있어 한 권으로 기출문제 풀이뿐만 아니라 개념까지 다질 수 있습니다.`,
    pubDate: '20240117',
    priceStandard: 19500,
    priceSales: 17550,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '970',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/7/1/5/356857715h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/7/1/5/356857715s.jpg',
    categoryId: '123',
    categoryName: '국내도서',
    publisher: '이투스북',
    customerReviewRank: 0,
    author: '최태성',
    translator: '',
    isbn: '9791138920162',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356857715&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356857715&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356857715&biz_cd=',
    reviewCount: 0,
    rank: 10
  },
  {
    itemId: 356841038,
    title: '처음부터 시작하는 주식투자 단타전략',
    description: `실전투자대회 1위, 대학생 모의투자대회 1위를 차지한 20대 MZ트레이더의 노하우
    여의도 제도권 취업보다 전업투자자를 선택하게 만든 안전한 매매 공식
    
    -차근차근 시작해서 억대 연봉 버는 주식 단기매매 필승 전략
    -시장에서 확실히 터득하고 완전히 아는 내용만 담은 실전투자 공략집
    -종목 선정, 수급, 거래원, 호가창의 비밀과 장대양봉 매매법까지 단타의 A to Z
    -단타 투자를 시작하려는 사람에게 가장 알맞은 최고의 안내서 
    
    대학을 갓 졸업한 MZ세대 트레이더는 어떻게 억대 수익을 거두는가?
    가장 위험하게 느껴지는 단타 투자를 가장 안전하게 해내는 대왕개미의 필승 전략
    
    “당신이 원하는 삶, 단기매매로 이룰 수 있습니다”
    
    사람들은 단타 투자가 무조건 위험하다고 생각하는 경향이 있다. 반은 맞고 반은...`,
    pubDate: '20231222',
    priceStandard: 21000,
    priceSales: 18900,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '1050',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/0/3/8/356841038h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/0/3/8/356841038s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '길벗',
    customerReviewRank: 0,
    author: '홍인기',
    translator: '',
    isbn: '9791140707492',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356841038&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356841038&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356841038&biz_cd=',
    reviewCount: 0,
    rank: 11
  },
  {
    itemId: 356839610,
    title: 'ETS 토익 정기시험 기출문제집 1000 Vol 4 RC(리딩)',
    description: `출제기관 ETS 토익 정기시험 기출문제 10회 최신판 Vol.4 독점공개!
    시험에 출제된 기출문제 그대로, 빠르고 확실하게 대비하라!
    
    1. 실제 기출문제 전격 공개!
    이 책에는 정기시험 최신 기출문제 10세트가 수록되어 있다. 시험에 나온 최신 기출문제로 실전 감각을 키워 시험에 확실하게 대비하자!
    
    2. 고난도 문항 무료 동영상 강의!
    교재 내 QR코드는 해당 회차의 무료 동영상 강의로 연결된다. 오답률 높은 고난도 문항을 친절한 해설 강의와 함께 완벽 마스터하자!
    
    3. 기출 포인트를 꿰뚫는 해설! 
    최신 출제경향을 가장 정확하게 알 수 있는 기출문제를 풀고 출제 포인트가 보이는 명쾌한 해설로 토익을 정복해 보자!
    
    4 ETS가 제공하는 표준 점수환산표
    출제기관 ETS의 최신 표준 점수환산표를 제공한다...`,
    pubDate: '20231218',
    priceStandard: 19800,
    priceSales: 17820,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '990',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/6/1/0/356839610h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/6/1/0/356839610s.jpg',
    categoryName: '',
    publisher: 'YBM',
    customerReviewRank: 0,
    author: 'ETS',
    translator: '',
    isbn: '9788917239508',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356839610&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356839610&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356839610&biz_cd=',
    reviewCount: 0,
    rank: 12
  },
  {
    itemId: 356839609,
    title: 'ETS 토익 정기시험 기출문제집 1000 Vol 4 LC(리스닝)',
    description: `출제기관 ETS 토익 정기시험 기출문제 10회 최신판 Vol.4 독점공개!
    시험에 출제된 기출문제와 정기시험 성우 음성 그대로, 빠르고 확실하게 대비하라!
    
    1. 실제 기출문제 전격 공개!
    이 책에는 정기시험 최신 기출문제 10세트가 수록되어 있다. 시험에 나온 기출문제로 실전 감각을 키워 시험에 확실하게 대비하자!
    
    2. 실제 정기시험 성우 음성으로 실전 대비!
    이 책에 수록된 10세트의 LC 음원은 모두 정기시험 성우의 음원이다. 시험장에서 듣게 될 음성으로 공부하면 까다로운 영국식, 호주식 발음도 걱정 없다. 또한 강도 높은 학습을 위해 고속 버전과 소음 버전을 추가로 제공하며, YBM북스닷컴 출판 홈페이지 www.ybmbooks.com에서 무료로 다운로드 가능하다.
    
    3 고난도 문항 무료 동영상 강의...`,
    pubDate: '20231218',
    priceStandard: 19800,
    priceSales: 17820,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '990',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/6/0/9/356839609h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/6/0/9/356839609s.jpg',
    categoryName: '',
    publisher: 'YBM',
    customerReviewRank: 0,
    author: 'ETS',
    translator: '',
    isbn: '9788917239492',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356839609&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356839609&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356839609&biz_cd=',
    reviewCount: 0,
    rank: 13
  },
  {
    itemId: 356855173,
    title: '벌써 마흔이 된 딸에게',
    description: `20만 부 베스트셀러 《딸에게 보내는 심리학 편지》의 저자 한성희가 
    후회 없는 인생을 살고 싶은 딸에게 전하는 말들 38
    
    43년간 마음이 아픈 환자들을 돌봐 온 정신건강의학과 전문의이자 한 딸아이의 엄마인 저자는 2013년 《딸에게 보내는 심리학 편지》를 펴내 20만 독자의 공감을 얻었다. 미국 유학을 떠나 거기에서 직장을 구하고 남자 친구를 만나 결혼한 딸은 여전히 미국에 머무르고 있다. 서로 떨어져 산 지도 벌써 15년, 작년에 딸의 생일을 축하하기 위해 미국에 간 저자는 깜짝 놀랐다. 자신의 눈엔 늘 어리게만 보였던 딸이 벌써 마흔 살이 되어 있었던 것이다.
    사람들은 보통 마흔 살에 지금이 새로운 도전을 할 수 있는 마지막 기회일지 모른다는 초조함에 휩싸인다. 어영부영하다가는 인생이 허무하게 지나가...`,
    pubDate: '20240124',
    priceStandard: 18000,
    priceSales: 16200,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '900',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/5/1/7/3/356855173h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/5/1/7/3/356855173s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '메이븐',
    customerReviewRank: 0,
    author: '한성희',
    translator: '',
    isbn: '9791190538657',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356855173&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356855173&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356855173&biz_cd=',
    reviewCount: 0,
    rank: 14
  },
  {
    itemId: 356857085,
    title: '마지막 마음이 들리는 공중전화',
    description: `“이 아름다운 소설은 신의 선물이다”
    2023년 프랑크푸르트 도서전 화제작! 출간 전 해외 3개국 판권 수출
    
    세상을 떠난 사람의 마지막 마음을 들을 수 있다면? 세상에서 가장 슬픈 사연들이 모이는 심리부검센터. 그리고 그 근처에 홀로 덩그러니 남겨진 공중전화. 그곳에서 펼쳐지는 떠난 사람과 남겨진 사람 모두를 위로하는 감동 휴먼 판타지.
    『마지막 마음이 들리는 공중전화』는 정식 출간 전부터 큰 화제를 모은 작품이다. 오직 작품성만으로 2023년 프랑크푸르트 도서전 화제작으로 손꼽히며 출간 전에 이미 폴란드, 루마니아, 튀르키예 등에 판권 수출을 마쳤다. 또한, 밀리의 서재에 전자책으로 선 출간하여 8천여 명의 독자들에게 압도적인 극찬을 받으며, 주간 베스트 기준 소설 1위, 종합 4위의 성적을 기록했다. ...`,
    pubDate: '20240115',
    priceStandard: 17800,
    priceSales: 16020,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '890',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/0/8/5/356857085h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/0/8/5/356857085s.jpg',
    categoryId: '101',
    categoryName: '국내도서',
    publisher: '클레이하우스',
    customerReviewRank: 0,
    author: '이수연',
    translator: '',
    isbn: '9791193235119',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356857085&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356857085&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356857085&biz_cd=',
    reviewCount: 0,
    rank: 15
  },
  {
    itemId: 356853383,
    title: '사랑인 줄 알았는데 부정맥',
    description: `연상이
    내 취향인데
    이제 없어 
    (야마다 요우, 92세/ 지역 상점가에서 열린 센류 대상 작품)
    
    ？ 시리즈 누계 90만 부 돌파!
    ？ 일본 전역을 웃음바다로 만든, 가장 잘 팔리는 실버 센류!
    
    ‘센류’는 일본의 정형시 중 하나로 5-7-5의 총 17개 음으로 된 짧은 시를 말한다. 이 책에서 소개하는 어르신(노인)들의 일상과 고충을 유쾌하게 담아낸 ‘실버 센류’는 전국유료실버타운협회의 주최로 2001년부터 매해 열리는 센류 공모전의 이름이기도 하다. 무려 11만 수가 넘는 센류 응모작 중에 선정된 걸작선 여든여덟 수를 추려 담았다.
    
    나이를 먹는 것은 누구나 가는 길을 걷는 일이다. 기쁜 일로만 가득한 건 아닌 오르막과 내리막이 있고, 울퉁불퉁한 길이지만 &#39내려갈 때 보았네. 올라갈 때 보지 못한 그 꽃...`,
    pubDate: '20240117',
    priceStandard: 13300,
    priceSales: 11970,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '660',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/3/3/8/3/356853383h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/3/3/8/3/356853383s.jpg',
    categoryId: '102',
    categoryName: '국내도서',
    publisher: '포레스트북스',
    customerReviewRank: 0,
    author: '전국유로실버타운협회',
    translator: '이지수',
    isbn: '9791193506073',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356853383&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356853383&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356853383&biz_cd=',
    reviewCount: 0,
    rank: 16
  },
  {
    itemId: 356861672,
    title: '퍼스널 MBA(10주년 기념 증보판)',
    description: `비즈니스의 성공을 위해 꼭 알아야 하는 경영의 핵심 지식
    살아 숨 쉬는 경영의 핵심 지식이 ‘10주년 기념 증보판’으로 돌아오다!
    
    《퍼스널 MBA》는 필자가 수천 권이 넘는 경영 서적을 읽고, 수백 명의 경영 전문가를 인터뷰하고, 〈포춘〉지 선정 세계 500대 기업에서 일한 뒤, 1인 사업체서부터 수십만 명의 직원과 수십억 달러의 매출 규모를 지닌 다국적 기업에 이르기까지 다양한 기업을 컨설팅하며 배우고 경험한 지식을 모으고 정제하여 다듬은 뒤 몇 가지 개념으로 정리한, 경영 전반에 대한 핵심을 한 권에 집대성한 책이다. 이후 10년의 세월이 지나 새롭게 깨달은 내용이 추가된 10주년 기념 증보판이 출간되었다.
    
    성공적인 사업을 지속하기 위해서는 어느 한 부분의 탁월성만으로는 부족하다. 경영에는 가치창조,...`,
    pubDate: '20240125',
    priceStandard: 35500,
    priceSales: 31950,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '1770',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/6/7/2/356861672h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/6/7/2/356861672s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '진성북스',
    customerReviewRank: 0,
    author: '조쉬 카우프만',
    translator: '',
    isbn: '9788997743605',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356861672&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356861672&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356861672&biz_cd=',
    reviewCount: 0,
    rank: 17
  },
  {
    itemId: 356833850,
    title: '데일 카네기 인간관계론(무삭제 완역본)',
    description: `사람의 마음을 사로잡는 방법에 관한 영원한 고전
    케네디, 오바마, 워런 버핏 등 이 시대의 리더들이 꼽은 인생 필독서
    서문에서 부록까지 인간관계론 초판 100% 무삭제 완역본 출간
    
    인생을 성공으로 이끄는 가장 확실한 방법은 다른 사람의 마음을 사로잡는 것이다. 《데일 카네기 인간관계론》은 사람의 마음을 사로잡는 방법, 즉 인간관계를 성공으로 이끄는 방법을 알려 주는 훌륭한 고전이다. 저자는 에이브러햄 링컨, 시어도어 루스벨트 등 성공한 위인들의 삶을 집중 연구했을 뿐만 아니라, 수많은 강의를 진행하며 보통 사람들이 겪는 인간관계 문제까지 분석해 이 책을 만들었다. 그 결과 실제로 삶이 바뀌는 효과적이고 유용한 삶의 원칙들을 담아낼 수 있었다. 이것이 《데일 카네기 인간관계론》이 진정한 최초의 자기계발서이자...`,
    pubDate: '20231129',
    priceStandard: 19800,
    priceSales: 17820,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '990',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/3/8/5/0/356833850h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/3/8/5/0/356833850s.jpg',
    categoryId: '118',
    categoryName: '국내도서',
    publisher: '상상스퀘어',
    customerReviewRank: 0,
    author: '데일 카네기',
    translator: '박선영',
    isbn: '9791192389271',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356833850&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356833850&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356833850&biz_cd=',
    reviewCount: 0,
    rank: 18
  },
  {
    itemId: 317168208,
    title: '뇌, 욕망의 비밀을 풀다',
    description: `인간의 뇌 속에 숨겨진 구매욕망에 답이 있다!
    
    많은 기업이 빅데이터를 활용해 마케팅을 하고 있지만, 인간의 뇌 속에 숨겨진 구매동기와 소비욕망의 본질을 파악하지 못한다면 제아무리 뛰어난 제품이라도 시장에서 성공하기 어렵다. 신경마케팅 분야의 최고 권위자이자 세계적인 기업들의 마케팅 및 브랜딩 자문을 맡고 있는 한스-게오르크 호이젤 박사는 『뇌, 욕망의 비밀을 풀다』에서 인간의 뇌 속을 들여다보는 새로운 방법을 이용해 매출을 획기적으로 개선할 수 있는 효과적인 방법을 제시한다. 
    
    저자는 이 책에서 15년간의 뇌 연구와 시장조사를 통해 자신이 개발한 동기모형 도구인 ‘림빅R 맵’(LimbicR Map)을 따라가며 소비자의 성격을 분석하고 그들이 지닌 감정의 무게중심에 따라 7가지 유형(전통주의자, 조화론자,...`,
    pubDate: '20191004',
    priceStandard: 18000,
    priceSales: 16200,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '900',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/2/0/8/317168208h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/2/0/8/317168208s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '비즈니스북스',
    customerReviewRank: 9.6,
    author: '한스 게오르크 호이젤',
    translator: '강영옥, 김신종, 한윤진',
    isbn: '9791162541029',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=317168208&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=317168208&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=317168208&biz_cd=',
    reviewCount: 22,
    rank: 19
  },
  {
    itemId: 356835939,
    title: '느리게 나이 드는 습관',
    description: `노화 역전의 효과, 
    적은 돈과 약간의 생활 습관 교정만으로도 충분히 얻을 수 있다!
    서울아산병원 노년내과 전문의가 작심하고 전하는 감속노화 실천법!
    
    보통 ‘노화’라고 하면 주름진 얼굴, 굽은 허리, 느린 걸음걸이 같은 특징적인 모습을 떠올린다. 하지만 사람마다 얼굴과 성격이 다르듯 노화의 속도나 정도는 천차만별로 나타난다. 70세가 되었을 때 젊은 성인과 비슷하게 활기찬 삶을 영위하느냐, 침상에 누워 시간을 보내느냐의 차이는 지금부터의 내재역량 관리에 달렸다. 실제 미국의 성인 72만 명을 분석한 연구에서는 신체 활동, 식사, 수면, 사회관계, 스트레스 등의 생활 습관 요인에 따라 40세를 기점으로 남성은 24년, 여성은 21년의 수명 차이가 생긴다는 것이 밝혀지기도 했다.
    백세 시대, 성공적인 인생 이...`,
    pubDate: '20231211',
    priceStandard: 18000,
    priceSales: 16200,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '900',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/5/9/3/9/356835939h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/5/9/3/9/356835939s.jpg',
    categoryId: '126',
    categoryName: '국내도서',
    publisher: '한빛라이프',
    customerReviewRank: 0,
    author: '정희원',
    translator: '',
    isbn: '9791193080146',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356835939&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356835939&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356835939&biz_cd=',
    reviewCount: 0,
    rank: 20
  },
  {
    itemId: 356832464,
    title: '이처럼 사소한 것들',
    description: `한 세대에 한 명씩만 나오는 작가, 클레어 키건의 대표작!
    
    * 문학평론가 신형철, 르포작가 은유 추천
    * 2022 오웰상 소설 부문 수상	
    * 킬리언 머피 주연·제작 영화화
    
    2023년 4월 국내에 처음 소개된 『맡겨진 소녀』로 국내 문인들과 문학 독자들의 열렬한 환호를 받은 클레어 키건의 대표작 『이처럼 사소한 것들』이 다산책방에서 번역 출간되었다. 작가가 전작 『맡겨진 소녀』 이후 11년 만에 세상에 내놓은 소설로, 자국에서는 이미 오래전부터 거장의 반열에 오른 키건에게 미국을 넘어 세계적인 명성을 안겨준 작품이다. 2022년 부커상 최종후보에 오르고, 같은 해 오웰상(소설 부문), 케리그룹 문학상 등 유수의 문학상을 휩쓸었으며, 특히 부커상 심사위원회는 “아름답고 명료하며 실리적인 소설”이라는 평을 ...`,
    pubDate: '20231127',
    priceStandard: 13800,
    priceSales: 12420,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '690',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/4/6/4/356832464h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/4/6/4/356832464s.jpg',
    categoryId: '101',
    categoryName: '국내도서',
    publisher: '다산책방',
    customerReviewRank: 0,
    author: 'Claire Keegan',
    translator: '홍한별',
    isbn: '9791130646381',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356832464&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356832464&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356832464&biz_cd=',
    reviewCount: 0,
    rank: 21
  },
  {
    itemId: 356754061,
    title: '쇼펜하우어 아포리즘: 당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까',
    description: `？ 20주 연속 철학 1위! 10만 부 돌파 기념 스페셜 에디션!
    ？ 조선, 동아, 한겨레, 서울, 한국에 소개된 책!
    ？ 서울대 학생이 많이 읽은 도서 20 선정!
    
    온전하고 자유로운 삶을 위한
    쇼펜하우어의 독한 가르침
    
    “인간의 불행 중 상당수는
    혼자 있을 수 없어서 생기는 일이다”
    
    쇼펜하우어는 니체의 철학, 헤세와 카프카의 문학, 프로이트와 융의 심리학에 지대한 영향을 끼친, 19세기 서양 철학계의 상징적인 인물이다. 그는 “인생은 의미가 없다. 그러므로 태어나지 않는 것이 최선이고, 태어났다면 최대한 빨리 죽는 것이 차선이다.”라고 말해 흔히 염세주의자로 알려졌지만, 그 어떤 철학자, 작가보다 치열하게 살았다. 이 책은 『당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까』가 출간 6개월 만에 독자...`,
    pubDate: '20230621',
    priceStandard: 17500,
    priceSales: 15750,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '870',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/4/0/6/1/356754061h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/4/0/6/1/356754061s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '포레스트북스',
    customerReviewRank: 10,
    author: '김욱,쇼펜하우어',
    translator: '',
    isbn: '9791192625553',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356754061&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356754061&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356754061&biz_cd=',
    reviewCount: 2,
    rank: 22
  },
  {
    itemId: 344222802,
    title: '결국 해내는 사람들의 원칙',
    description: `▼ 인생의 모든 것은 내가 어떤 생각을 품는가에 달렸다
    
    ‘생각의 힘’에 대한 강조는 이미 여러 책을 통해 접해 온 주장이다. 그러나 성공한 몇몇 이들의 주장과 생각은 그들의 것이지 우리의 것이 아니다. 비루한 현실 속에서 우리는 ‘생각하는 대로 이루어진다’라는 말이 주는 용기 이면에 있는 ‘간절히 원하면 우주의 기운이 나서 도와준다’는 식의 무조건적 신념에 코웃음 칠지 모른다. 인생이 정말 내가 생각하는 대로, 원하는 대로 될 수 있다면 지금의 이 현실은 무엇이란 말인가! 수많은 실패자들은 마음에 실패를 품어서 실패했단 말인가? 생각의 힘을 강조하는 주장과 더불어 늘 재기되는 이런 의문들은 냉소로 귀결된다. 
    그런데 이 책의 저자 앨런 피즈와 바바라 피즈는 이런 우리의 생각을 읽었다! 그래서 가장 먼저 ...`,
    pubDate: '20201214',
    priceStandard: 18000,
    priceSales: 16200,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '900',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/8/0/2/344222802h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/8/0/2/344222802s.jpg',
    categoryId: '116',
    categoryName: '국내도서',
    publisher: '반니',
    customerReviewRank: 0,
    author: '앨런 피즈,바바라 피즈',
    translator: '이재경',
    isbn: '9791191214185',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=344222802&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=344222802&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=344222802&biz_cd=',
    reviewCount: 0,
    rank: 23
  },
  {
    itemId: 354469028,
    title: '부의 추월차선(10주년 스페셜 에디션)',
    description: `미국 아마존 금융ㆍ사업 분야 1위 
    국내 유명서점 10년간 종합 베스트셀러
    
    가장 빠르게 부자 되는 새로운 공식을 제시해 큰 반향 불러일으킨 책
    
    부자 되기 방식의 패러다임을 바꾼 〈부의 추월차선〉이 독자들의 사랑과 지지 속에 한국 출간 10주년을 맞이했다. 이 책은 죽도록 일하며 수십 년 간 아끼고 모아서 휠체어에 탈 때쯤 부자 되는 40년짜리 플랜을 비웃으며 한 살이라도 젊을 때 부자가 되어 은퇴하는 방법을 구체적으로 제시하고 있다. 
    
    ‘추월차선’을 알고 난 뒤 부의 지도를 다시 그린 사람들은 하나같이 입을 모은다.
    “추월차선 법칙을 알게 된 뒤 나는 내가 돈에 쪼들리며 사는 이유를 알게 되었고, 그런 인생으로부터 벗어나기로 결심했다. 4년 후 나는 자산을 4배로 불릴 수 있었다.”
    “이제 나는 부자가...`,
    pubDate: '20220204',
    priceStandard: 17500,
    priceSales: 15750,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '870',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/0/2/8/354469028h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/0/2/8/354469028s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '토트',
    customerReviewRank: 9.6,
    author: '엠제이 드마코',
    translator: '신소영',
    isbn: '9791187444725',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=354469028&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=354469028&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=354469028&biz_cd=',
    reviewCount: 3,
    rank: 24
  },
  {
    itemId: 356731225,
    title: '맡겨진 소녀',
    description: `문학의 나라 아일랜드, 그곳에서 현재 최고의 주목과 찬사를 받는 작가가 있다. 러시아의 문호 안톤 체호프, 같은 아일랜드 작가 윌리엄 트레버와 견주어지며 국제 문학계의 떠오르는 별로 꼽히는 소설가 클레어 키건의 이야기다. 섬세하고 감동적인 필체로 유명한 키건은 24년의 활동 기간 동안 펴낸 단 4권의 책으로 전 세계 유수의 문학상을 휩쓸며 천재 소설가라는 칭호와 함께 평단의 찬사를 받아왔으며 특히 지금, 세계의 독자들에게 열렬한 사랑을 받고 있다. 국내에서 마침내 처음 번역 출간되는 키건의 책 『맡겨진 소녀』는 2009년 데이비 번스 문학상을 수상한 작품으로, 애정 없는 부모로부터 낯선 친척 집에 맡겨진 한 소녀의 이야기를 그린다. 이 책을 원작으로 하는 영화 「말없는 소녀」 또한 세계 관객들의 열렬한 호평...`,
    pubDate: '20230421',
    priceStandard: 13000,
    priceSales: 11700,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '650',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/2/2/5/356731225h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/2/2/5/356731225s.jpg',
    categoryId: '101',
    categoryName: '국내도서',
    publisher: '다산책방',
    customerReviewRank: 9.9,
    author: '클레어 키건',
    translator: '허진',
    isbn: '9791130698199',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356731225&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356731225&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356731225&biz_cd=',
    reviewCount: 13,
    rank: 25
  },
  {
    itemId: 356746229,
    title: '역행자(확장판)',
    description: `한층 더 강력한 치트키,  독해진 팩트 폭격!
    50주 연속 베스트셀러·40만 독자의 삶을 바꾼 
    『역행자』가 확장판으로 돌아왔다
    
    “절대로 읽지 마라! 
    죽을 때까지 순리자로 살고 싶다면!”
    
    95퍼센트의 인간은 타고난 유전자와 본성의 꼭두각시로 살아간다. 이들은 평생 돈, 시간, 운명에게 속박되어, 평범함을 벗어나지 못하고 불행하게 사는 ‘순리자’다. 그러나 5퍼센트의 인간은 다르다. 이들은 타고난 유전자의 본성을 역행해 돈, 시간, 운명으로부터 완전한 자유를 얻는다. 본성을 거슬러 행복을 쟁취하는 이들이 바로 ‘역행자’다. 
    운명과 본능의 지배에서 벗어나 경제적 자유와 행복을 쟁취하는 라이프해킹의 비밀을 담은 책, 『역행자』가 2022년 출간된 지 1년 만에 확장판으로 다시 돌아왔다. ‘무자본 연쇄창업...`,
    pubDate: '20230529',
    priceStandard: 19500,
    priceSales: 17550,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '970',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/6/2/2/9/356746229h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/6/2/2/9/356746229s.jpg',
    categoryId: '118',
    categoryName: '국내도서',
    publisher: '웅진지식하우스',
    customerReviewRank: 10,
    author: '자청',
    translator: '',
    isbn: '9788901272580',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356746229&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356746229&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356746229&biz_cd=',
    reviewCount: 3,
    rank: 26
  },
  {
    itemId: 356837870,
    title: '놀라움의 힘',
    description: `내 삶을 바꾸는 놀라움의 힘
    당신이 놀라는 순간,
    뇌는 새로운 믿음을 형성하고 당신의 삶을 변화시킨다
    
    놀라움은 새로운 믿음을 형성시키고, 믿음은 삶을 변화시킨다. 따라서 놀라움을 어떻게 활용하느냐에 따라 인생이 바뀔 수도 있다. 《놀라움의 힘》은 우리가 살면서 맞닥뜨리는 놀라움이라는 감정이 어떻게 우리의 뇌와 인생을 변화시키는지 보여주는 책이다.
    
    사실 믿음을 바꾸는 것은 매우 어려운 일이다. 하지만 저자는 놀라움을 느끼는 순간 본인도 눈치채지 못하는 사이에 믿음이 변화한다고 말한다. 놀라움이라는 감정은 기존의 믿음을 둘러싸고 있는 무장을 즉시 해제시키도록 진화했기 때문이다. 그렇기에 자아 정체성을 이루는 믿음을 변화시키려면 ‘놀라움의 순간’이 반드시 필요하다. 이것이 바로 이 책에서 말하고자 하는 ‘놀라...`,
    pubDate: '20240103',
    priceStandard: 22000,
    priceSales: 19800,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '1100',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/8/7/0/356837870h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/8/7/0/356837870s.jpg',
    categoryId: '118',
    categoryName: '국내도서',
    publisher: '상상스퀘어',
    customerReviewRank: 0,
    author: '마이클 루셀',
    translator: '김지연',
    isbn: '9791192389516',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356837870&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356837870&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356837870&biz_cd=',
    reviewCount: 0,
    rank: 27
  },
  {
    itemId: 356731097,
    title: '도둑맞은 집중력',
    description: `“우리는 어떻게 ‘나도 모르는 새’ 집중력을 도둑맞고 있을까”
    3만 마일의 비행, 250명 전문가와의 인터뷰
    뉴욕타임스 베스트셀러 작가의 전방위적인 탐사가 시작된다
    
    전 세계 모든 곳에서, 집중하는 우리의 능력은 붕괴하고 있다. 미국의 10대들은 한 가지 일에 65초 이상 집중하지 못한다. 직장인들의 평균 집중 시간은 단 3분에 불과하다. 뉴욕타임스 베스트셀러 작가이자 저널리스트인 요한 하리는 왜 이런 현상이 벌어지는지 알아보기 위해 이 분야를 주도하는 전 세계 과학자들과 전문가들을 만나기 위한 대장정을 떠났다. 그리고 그동안 이 주제에 대해 우리가 잘못 알고 있음을 발견했다.
    우리는 집중하지 못하고 산만해지는 것이 흔히 스마트폰과 같은 디지털 기기에 대해 자제력을 발휘하지 못하는 개인의 실패라고 생각한다....`,
    pubDate: '20230428',
    priceStandard: 18800,
    priceSales: 16920,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '940',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/0/9/7/356731097h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/0/9/7/356731097s.jpg',
    categoryId: '119',
    categoryName: '국내도서',
    publisher: '어크로스',
    customerReviewRank: 9.7,
    author: '요한 하리',
    translator: '김하현',
    isbn: '9791167740984',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356731097&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356731097&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356731097&biz_cd=',
    reviewCount: 11,
    rank: 28
  },
  {
    itemId: 356797731,
    title: '트렌드 코리아 2024',
    description: `DRAGON EYES
    청룡을 타고 비상하는 2024를 기원하며!
    
    모든 일은 서서히 준비되고 있다가 갑작스럽게 나타난다. 챗GPT가 그랬다. 인공지능 기술과 이야기가 수도 없이 나왔지만, 챗GPT만큼 우리에게 충격을 주는 것은 없었다. 무엇이 달랐던 것일까? ‘자연어’ 소통이 가능하다는 점일 것이다. “가장 인기 있는 새로운 프로그래밍 언어는 영어”라는 말이 나오는 이유다. 여기서 말하는 ‘영어’는 한국어도 될 수 있고, 일본어도 될 수 있다. 그러니까 그냥 평상시의 말과 글로 이루어지는 인공지능 시대에 돌입한 것이다. 모든 학자들이, 모든 책들이 ‘AI’와 ‘인공지능’, ‘챗GPT’를 얘기하는 이 시점에서 『트렌드 코리아 2024』는 인간의 역할 혹은 역량에 주목했다. 중요한 점은 이것이다. 즉, AI는 ...`,
    pubDate: '20231012',
    priceStandard: 19000,
    priceSales: 17100,
    discountRate: '10',
    saleStatus: '판매중',
    mileage: '950',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/7/3/1/356797731h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/7/7/3/1/356797731s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '미래의창',
    customerReviewRank: 10,
    author: '김난도,추예린,전다현,전미영,최지혜',
    translator: '',
    isbn: '9788959897179',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356797731&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356797731&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356797731&biz_cd=',
    reviewCount: 5,
    rank: 29
  },
  {
    itemId: 356778317,
    title: '대한민국 돈의 역사',
    description: `남북 분단에서 코로나까지 대한민국 돈의 역사 총망라
    국내 최고의 이코노미스트 홍춘욱 박사가 들려주는 넓고 깊은 한국 경제 이야기 
    주식 시장과 부동산 시장을 통찰하는 안목을 선사하는 최고의 책
    
    역사는 반복되고, 돈의 역사는 더욱 그렇다. 역사를 모르면 과거의 실수를 반복할 수밖에 없다. 그러니 돈을 벌고 싶다면, 아니 최소한 잃고 싶지 않다면 돈의 역사를 공부해야 한다. 돈의 역사는 자본주의 시대에서 살아남기 위한 생존 지침이다.
    
    국내 최고의 이코노미스트 홍춘욱 박사가 마침내 ‘대한민국 돈의 역사’를 다뤘다. 세계 경제사를 다룬 《50대 사건으로 보는 돈의 역사》와 《7대 이슈로 보는 돈의 역사》를 쓴 그가 이번에는 대한민국 경제사로 눈을 돌린 것이다. 저자는 역사와 경제 그리고 경영 세 분야에서 학위를...`,
    pubDate: '20230802',
    priceStandard: 33000,
    priceSales: 29700,
    discountRate: '10',
    saleStatus: '예약판매',
    mileage: '1650',
    mileageRate: '6',
    coverSmallUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/3/1/7/356778317h.jpg',
    coverLargeUrl: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/3/1/7/356778317s.jpg',
    categoryId: '117',
    categoryName: '국내도서',
    publisher: '상상스퀘어',
    customerReviewRank: 9.9,
    author: '홍춘욱',
    translator: '',
    isbn: '9791192389264',
    link: 'http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=356778317&refererType=8305',
    mobileLink: 'http://m.book.interpark.com/view.html?PRD_NO=356778317&SHOP_NO=0000400000',
    additionalLink: 'http://book.interpark.com/gate/ippgw.jsp?goods_no=356778317&biz_cd=',
    reviewCount: 1,
    rank: 30
  }
];

//1009줄까지가 베스트셀러 정보입니다.
