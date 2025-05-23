# Personal Finance Manager API

This is a Personal Finance Manager backend API built with **Express.js**, **TypeORM**, and **PostgreSQL**. It helps users manage their financial data by recording revenues(incomes), expenses and associating them with users.

## Features

- Create and store revenue (income) records
- Associate revenues with a user
- Input validation using `class-validator`
- Clean architecture (Controller, Service, Repository layers)
- Error handling with custom HttpException
- Automatic timestamping (createdAt, updatedAt)
- DTO (Data Transfer Object) usage for request/response structure

## Technologies Used

- Node.js
- Express.js
- TypeORM
- PostgreSQL
- class-validator & class-transformer
- TypeScript
- Docker

## Project Structure

```
src/
├── controllers/
│   └── revenue.controller.ts
├── dto/
│   └── revenues/
│       ├── request.revenue.dto.ts
│       └── response.revenue.dto.ts
├── entities/
│   ├── revenue.entity.ts
│   └── user.entity.ts
├── errors/
│   ├── enum/
│   │   └── http-status-code.ts
│   └── http-exception.ts
├── middlewares/
│   └── validate-dto.ts
├── routes/
│   └── revenue.routes.ts
├── services/
│   └── revenue.service.ts
└── data-source.ts
```


## Getting Started

1. Clone the repository
2. Run `npm install`
3. Setup your PostgreSQL database with `docker compose up`
4. Run the app with `npm run start:dev`
5. Use tools like Postman or Insomnia to interact with the API


## TO DO

- [ ] implementar eslint
- [ ] implementar prettier
- [ ] escolher um padrão de código

---