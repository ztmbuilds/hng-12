## Description

A simple express server that responds with a JSON object containing an email, the current date and time, and the GitHub URL of this repo.

## Getting Started

### Prerequisites

The tools listed below are needed to run this application:

- Node
- Npm

You can check the Node.js and npm versions by running the following commands.

### Check node.js version

`node -v`

### Check npm version

`npm -v`

## Installation

To run this API on your local machine:

- Install project dependencies by running `npm install`.

- Start the server with `node index.js`

- Server will be listening for requests on port 3000

## API Documentation

### Endpoint URL

`GET /`

### Request

No request parameters are needed.

### Response

The response is a JSON object with the following format:

```json
{
  "email": "s.zetro007@gmail.com",
  "current_datetime": "2023-10-05T14:48:00.000Z",
  "github_url": "https://github.com/ztmbuilds/hng-12"
}
```

## Link

- https://hng.tech/hire/nodejs-developers
