# HNG12 Info API

This is a API developed for the HNG12 project. It returns the following information in JSON format:

- Your registered email address
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/G-Gakii/dev-info-api.git
   cd your-repository
   ```
2. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, use the following command:

```
npm run dev

```

### API Endpoint

- URL: /api/info
- Method: GET
- Success Response:

  - Code: 200 OK
  - Content:
    ```
    {
    "email": "gakiiviolet1@gmail.com",
    "current_datetime": "2025-01-29T06:03:27.190Z",
    "github_url": "https://github.com/G-Gakii/dev-info-api"
    ```

  } ```
