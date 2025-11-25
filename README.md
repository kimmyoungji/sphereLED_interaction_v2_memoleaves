# COSS LED Sphere Display interactive Contents: memoleaves - memory lives in graden
This project is a web-based interactive system that connects with the LED Sphere Display 
installed in the CO-SHOW(Conference on Convergence and Open Sharing Systems)

The main subjects of this project are dementia and plants.
Our team was inspired by the visual similarity between plant stems and brain cells, 
and we express the personal experiences of an elderly man named James, who suffers from dementia, 
through the imagery of plants.

# how to run frontend
```
cd memloss-frontend
npm install
npm run dev
```

# how to build and run backend
- required: install java 21 and gradle 8.10.2
```
cd memloss-backend
./gradlew build
./gradlew bootRun
```

# EC2 SSH 접속 명령어
```
ssh -i sphereLED-interaction-memloss-seoul-key.pem ec2-user@ec2-43-201-105-0.ap-northeast-2.compute.amazonaws.com
```

===================================================

# aws 배포 명령어
# aws 계정: kmjoyitaol2025@gmail.com
# webapp url: https://d7lhbcwl1bmkq.cloudfront.net/
# td ws connection url: ws://ec2-43-201-105-0.ap-northeast-2.compute.amazonaws.com:8080

```zsh
cd memloss-frontend
npm run build
cp -R dist /Users/myoungjikim/dev/aol/memloss2/memloss-backend/src/main/resources/static
```

```zsh
# memloss-backend 의 src/main/resources/static 하위의 dist 폴더 안의 내용을 static 바로 하위로 오도록 이동 시키기
```

```zsh
./gradlew clean bootJar
```

```zsh
scp -i sphereLED-interaction-memloss-seoul-key.pem     /Users/myoungjikim/dev/aol/memloss2/memloss-backend/build/libs/memloss-backend.jar    ec2-user@ec2-43-201-105-0.ap-northeast-2.compute.amazonaws.com:/home/ec2-user/memloss2/app/
memloss-backend.jar
```

```zsh
ssh -i sphereLED-interaction-memloss-seoul-key.pem ec2-user@ec2-43-201-105-0.ap-northeast-2.compute.amazonaws.com
```

```zsh
sudo systemctl restart memloss2
sudo systemctl status memloss2
```

