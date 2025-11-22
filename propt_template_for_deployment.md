[Goal]
memloss-backend(Spring Boot)와 memloss-frontend(Vite/React)를 AWS에 배포. 1차는 수동(EB + S3/CloudFront), 이후 CI/CD 적용.

[Stack]
- Backend: Spring Boot 3.3(Java 21), WebFlux, Actuator, JAR 배포
- Frontend: Vite/React, dist 정적 호스팅
- Infra(목표): EB(Java 21, ALB), S3 + CloudFront(OAC), Route53 + ACM, CloudWatch Logs

[Current State]
- 리전: ap-northeast-2(서울)
- JAR 빌드: (예) 성공/실패, 산출물 경로: memloss-backend/build/libs/xxxx.jar
- 프론트 빌드: (예) 성공/실패, dist 생성 여부
- IAM: (예) 사용자 생성 완료, 관리형 정책 첨부
- 도메인/Route53: (예) 보유/미보유, 원하는 도메인(app/api)
- VPC/SG: (예) 기본/커스텀 여부

[Artifacts/Paths]
- Backend root: memloss-backend/
- Frontend root: memloss-frontend/
- Health check: GET /actuator/health

[Decisions]
- EB Preset: (Single instance | High availability)
- S3 버킷명(프론트): (예) memloss-frontend-prod
- EB 앱/환경명: (예) memloss-backend / memloss-backend-prod
- 도메인: app.yourdomain.com(프론트), api.yourdomain.com(백엔드)

[Commands Run]
- backend: ./gradlew clean bootJar (로그 요약/전체 첨부)
- frontend: npm ci && npm run build (로그 요약/전체 첨부)
- aws cli 설치/설정 여부: (예) 완료/미완료

[Logs/Errors]
- (있다면 전체 붙여넣기)

[Requested Help]
- EB 생성 화면: 항목별 값 체크/확정
- 프론트 S3/CloudFront 생성: 버킷/배포 설정 값
- 도메인/ACM: 발급/연결 절차 및 값
- CORS/환경변수: 구체 값 제시 및 반영 방법
- (선택) CI/CD 워크플로 YAML 제시 및 최소권한 정책 JSON 생성

[Constraints]
- 비용 최소화(초기 Single instance 선호 여부 등)
- 일정/마감

[Expected Output]
- 단계별 콘솔 클릭 순서/CLI 명령
- 필요한 리소스 이름, ARN/ID, 환경 변수 목록
- 검증 체크리스트(헬스, CORS, 캐시 무효화)


---------------------
# Step Prompt

## 백엔드 EB 생성 단계
[Goal] EB 환경 생성 완료
[State] JAR 생성 성공: memloss-backend/build/libs/app.jar
[Decisions] Preset=High availability, Health=/actuator/health, 리전=ap-northeast-2
[Question] 생성 화면 항목별로 값 제시해줘(소스 코드 오리진, 프리셋, VPC/서브넷, SG, 용량)
[Next] 콘솔 클릭 단계와 필드 값 리스트로 답변


## 프론트 S3/CloudFront 생성 단계
[Goal] S3+CloudFront로 프론트 1차 배포
[State] dist 생성 완료, S3 버킷 없음
[Decisions] 버킷명=memloss-frontend-prod, SPA 라우팅 필요, 도메인은 나중
[Question] S3 생성 옵션, CloudFront OAC, Error pages/캐시/HTTPS 설정 값은?
[Next] 콘솔 단계와 필요한 CLI 명령 제시


## 도메인/ACM 생성 단계
[Goal] app/api 서브도메인 HTTPS 연결
[State] Route53 Hosted Zone 보유, 인증서 없음
[Decisions] app.yourdomain.com(CloudFront), api.yourdomain.com(ALB)
[Question] 어떤 리전에 어떤 인증서 발급? 레코드/ALIAS 설정 값은?
[Next] 발급/검증/연결 순서대로 안내

## CORS/환경변수 설정 단계
[Goal] CORS/환경변수 반영
[State] 백엔드 CORS 파일: memloss-backend/src/main/java/com/memloss/config/CorsConfig.java
[Decisions] 허용 오리진=https://app.yourdomain.com
[Question] 프론트 .env.production 값과 EB 환경 변수 목록을 알려줘
[Next] 변경 후 검증 절차(프리플라이트/응답 헤더) 안내

## CI/CD 단계
[Goal] GitHub Actions로 자동 배포
[State] 리포=<owner>/<repo>, OIDC 역할 미생성
[Decisions] 브랜치=main, 리전=ap-northeast-2
[Question] OIDC 역할 신뢰정책/권한정책 JSON과 워크플로 YAML 제공해줘
[Next] 최소권한 버전으로 생성해줘(버킷/배포ID/EB 이름 변수화)

------------------------

[ 진행상태 ]
**[STEP 1] EC2 생성** --> 여기
**[STEP 2] EC2 환경 세팅**
**[STEP 3] CloudFront 생성 (HTTPS 적용)**
**[STEP 4] WebSocket / Audio API 최종 테스트**
**[STEP 5] CloudWatch Logs 연동 (선택)**
**[STEP 6] 전시 운영 안정성 검증**
**[STEP 7] 전시 종료 후 정리**
좋아 이제  아래 5개의 단계중 첫번째 단계 EC2 생성을 시작할 꺼야.

[ 프로젝트 특성 ]
- 기술스택
    - Backend: Spring Boot 3.3(Java 21), WebFlux, Actuator, JAR 배포
    - Frontend: Vite/React

[ 인프라 목표 ]
- Infra(목표): **EC2 + CloudFront(HTTPS) + WebSocket + React SPA + Spring Boot WebFlux**
4일 전시 동안 완전 안정 운영

[ 요구사항 ]
STEP 1: EC2 생성을 수행하기 위해 나에게 최대한 자세한 설명을 해줘


