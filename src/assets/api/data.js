const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const products = [
    { id: 1, name: '프로스펙스 골프 1', description: '가볍고 편안하게 착용할 수 있는 데일리 골프화입니다.', photo: imagePath('img1.webp'), price: 119000 },
    { id: 2, name: '프로스펙스 골프 2', description: '안정적인 착화감과 깔끔한 디자인을 갖춘 골프화입니다.', photo: imagePath('img2.webp'), price: 109000 },
    { id: 3, name: 'Pro-Specs', description: '2026 S/S 시즌에 어울리는 가볍고 실용적인 제품입니다.', photo: imagePath('img3.webp'), price: 134780 },
    { id: 4, name: 'PRO-SPECS', description: '편안한 쿠셔닝과 기본에 충실한 디자인의 제품입니다.', photo: imagePath('img4.webp'), price: 59900 },
    { id: 5, name: '나이키 보메로 플러스', description: '두툼한 폼을 적용한 부드럽고 반응성이 뛰어난 여성 로드 러닝화입니다.', photo: imagePath('nike-running-01.png'), price: 197100, sku: 'HV8154-102' },
    { id: 6, name: '나이키 보메로 플러스', description: '깊은 컬러와 통기성 좋은 메시 갑피를 적용한 여성 로드 러닝화입니다.', photo: imagePath('nike-running-02.png'), price: 219000, sku: 'HV8154-606' },
    { id: 7, name: '나이키 보메로 플러스 프리미엄', description: '최상의 쿠셔닝과 특별한 컬러웨이를 담은 여성 로드 러닝화입니다.', photo: imagePath('nike-running-03.png'), price: 229000, sku: 'IR7193-400' },
    { id: 8, name: '나이키 보메로 플러스 블랙', description: '두툼한 폼과 내구성 좋은 고무 밑창을 갖춘 여성 로드 러닝화입니다.', photo: imagePath('nike-running-04.png'), price: 197100, sku: 'HV8154-001' },
    { id: 9, name: '나이키 보메로 플러스 에센셜', description: '부드러운 착화감과 뛰어난 에너지 반환을 제공하는 러닝화입니다.', photo: imagePath('nike-running-05.png'), price: 209000, sku: 'IO9916-101' },
    { id: 10, name: '나이키 보메로 플러스 SE', description: '스페셜 에디션 디테일과 뛰어난 쿠셔닝을 적용한 러닝화입니다.', photo: imagePath('nike-running-06.png'), price: 229000, sku: 'IM8331-001' },
    { id: 11, name: '나이키 보메로 프리미엄', description: '두툼한 폼과 두 개의 에어 줌 유닛으로 부드러운 착화감을 제공합니다.', photo: imagePath('nike-running-07.png'), price: 299000, sku: 'HM5973-005' },
    { id: 12, name: '나이키 페가수스 42', description: '리액트X 폼과 전체 길이 에어 줌 유닛을 적용한 여성 러닝화입니다.', photo: imagePath('nike-running-08.png'), price: 169000, sku: 'IB1881-106' },
];

export default products;
