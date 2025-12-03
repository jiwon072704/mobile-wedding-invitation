# 카카오맵 설정 가이드

오시는 길 섹션에 카카오맵이 통합되었습니다. 실제로 사용하려면 아래 단계를 따라주세요.

## 1. 카카오 개발자 계정 생성 및 앱 등록

1. [카카오 개발자 사이트](https://developers.kakao.com/)에 접속
2. 로그인 후 "내 애플리케이션" 메뉴로 이동
3. "애플리케이션 추가하기" 클릭
4. 앱 이름 입력 후 생성

## 2. JavaScript 키 발급

1. 생성한 앱을 선택
2. "앱 키" 섹션에서 "JavaScript 키" 복사

## 3. 플랫폼 등록

1. 같은 페이지에서 "플랫폼" 섹션으로 이동
2. "Web 플랫폼 등록" 클릭
3. 사이트 도메인 등록 (예: http://localhost:3000, https://yourdomain.com)

## 4. 코드에 API 키 적용

`/components/Location.tsx` 파일의 17번째 줄에서:

```typescript
script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&autoload=false';
```

`YOUR_KAKAO_APP_KEY`를 발급받은 JavaScript 키로 교체하세요:

```typescript
script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=여기에_발급받은_키_입력&autoload=false';
```

## 5. 좌표 설정

현재는 강남역 좌표(37.4979, 127.0276)로 설정되어 있습니다. 실제 웨딩홀 위치로 변경하려면:

1. [카카오맵](https://map.kakao.com/)에서 웨딩홀 주소 검색
2. 해당 위치에서 우클릭 > "여기가 어딘가요?" 클릭
3. 표시되는 좌표(위도, 경도) 복사
4. `/components/Location.tsx`의 25번째 줄과 33번째 줄의 좌표를 변경:

```typescript
// 25번째 줄
center: new window.kakao.maps.LatLng(위도, 경도),

// 33번째 줄  
const markerPosition = new window.kakao.maps.LatLng(위도, 경도);
```

## 6. 인포윈도우 내용 수정

40번째 줄에서 표시될 정보를 수정할 수 있습니다:

```typescript
const infowindow = new window.kakao.maps.InfoWindow({
  content: '<div style="padding:10px;text-align:center;"><strong>웨딩홀 이름</strong><br/>전체 주소</div>'
});
```

## 참고사항

- 카카오맵 API는 무료로 사용 가능합니다
- 지도 버튼(네이버 지도, 카카오맵, Google Maps)을 클릭하면 각 지도 앱에서 웨딩홀을 검색합니다
- API 키 없이는 지도가 표시되지 않으니 반드시 설정해주세요

## 문제 해결

지도가 표시되지 않는 경우:
1. 브라우저 콘솔(F12)에서 에러 메시지 확인
2. API 키가 올바르게 입력되었는지 확인
3. 도메인이 카카오 개발자 콘솔에 등록되었는지 확인
