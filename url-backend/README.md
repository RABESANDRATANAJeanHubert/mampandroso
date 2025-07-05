This project implements a full-stack URL shortening service inspired by popular services like Bitly or TinyURL. It allows users to input a long URL and receive a short, easy-to-share URL that redirects back to the original address.

The backend is built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. It uses TypeORM with Mysql for data persistence, ensuring robust storage and retrieval of URL mappings.

The frontend is created with ReactJS, providing a clean and user-friendly interface where users can submit URLs and get shortened links instantly.

## Description

## Project Structure
url-shortener/
├── backend/                # NestJS Backend
│   ├── src/
│   │   ├── url/
│   │   │   ├── url.controller.ts
│   │   │   ├── url.service.ts
│   │   │   └── ...
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   ├── package.json
│   └── ...
├── url-shortener-frontend/ # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── UrlShortenerForm.jsx
│   │   ├── API/
│   │   │   ├── config.js
│   │   │   └── url.js
│   │   └── App.jsx
│   ├── .env
│   ├── package.json
│   └── ...

## clone the repository
git clone https://github.com/RABESANDRATANAJeanHubert/mampandroso.git

cd url-shortener-backend

## Installation

```bash
$ npm install 
```

## Running the app

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run url

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# test url
npm run test url
```

## test the application
API Endpoints
**POST /api/url**

## Creates a short URL.
Body:

{
  "longUrl": "https://example.com/my-very-long-url"
}

## Response:
{
  "shortCode": "abc123",
  "longUrl": "https://example.com/my-very-long-url"
}

 **GET /:shortCode**
Redirects to the original URL.
Example:
**Visit http://localhost:4000/abc123 in your browser → redirects to long URL**
