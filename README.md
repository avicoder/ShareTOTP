# OTP Manager

## Tech Stack
- Laravel
- React
- MySQL

## Preparing the project.

- Create an environment file using.
```bash
cp .env.example .env
```

- Then update the .env file according to your config.
- Install Composer on your machine and run following:
```bash
composer install
```
- Install NodeJS on your machine and run following:
```bash
npm run build
```

## Running the app in local machine

- Install docker on your local machine and make sure ports: 33061, 8000, 8081 are free
- Run following command on the project root:
```bash
docker compose up
```

## Accessing Services.
- Web Application: http://localhost:8000/login
- phpMyAdmin: http://localhost:8081/

