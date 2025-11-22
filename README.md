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