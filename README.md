# Mailtrap

#### Email testing tool for developers.

Mailtrap allows you to perform automated e-mail tests using a fake SMTP server and an API.

- SMTP server starts on port 1025
- HTTP server starts on port 8025

## Usage

```yaml
version: '3.7'

services:

  mailtrap:
    image: spridev/mailtrap
    ports:
      - 1025:1025
      - 8025:8025
    environment:
      MAILTRAP_USER: mail-user
      MAILTRAP_PASS: mail-pass
```

## API

You need to use [Basic](https://tools.ietf.org/html/rfc7617) HTTP Authentication to access the API.

### Get all emails

```shell
GET http://localhost:8025/api/emails
```

### Clear all emails

```shell
DELETE http://localhost:8025/api/emails
```
