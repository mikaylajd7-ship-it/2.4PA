# User Schema Extensions Performance Assessment

**Student:** Mikayla Dickerson  
**Date:** November 26, 2026  
**Assignment:** Extending the Mongoose User Schema

## Overview

This project continues the Mongoose Integration Guided Practice. It extends the existing `User` schema with default values and all three string schema modifiers: `lowercase`, `uppercase`, and `trim`. The Express application connects to MongoDB and exposes `POST /users` for creating user documents.

## Schema changes

### Defining default values

The schema now supplies defaults when values are not included in a request:

| Field | Default |
|---|---|
| `firstName` | `New` |
| `lastName` | `USER` |
| `email` | `unknown@example.com` |
| `username` | `newuser` |
| `role` | `user` |
| `isActive` | `true` |
| `createdAt` | Current date and time (`Date.now`) |

The `password` field has no default because a user should provide a password when creating an account.

### Using schema modifiers

The schema uses the three string modifiers:

- **`lowercase: true`** converts email addresses and usernames to lowercase before saving.
- **`uppercase: true`** converts last names to uppercase before saving.
- **`trim: true`** removes whitespace from the beginning and end of first name, last name, email, username, and password values.

These are Mongoose schema options, so normalization is applied when Mongoose processes and saves a document.

## Project structure

```text
UserSchemaExtensionsPerformanceAssessment/
├── app/
│   ├── controllers/
│   │   ├── index.server.controller.js
│   │   └── user.server.controller.js
│   ├── models/
│   │   └── user.server.model.js
│   ├── routes/
│   │   ├── index.server.routes.js
│   │   └── user.server.routes.js
│   └── views/
│       └── index.ejs
├── config/
│   ├── env/
│   ├── config.js
│   ├── express.js
│   └── mongoose.js
├── public/
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run the application

1. Start MongoDB Community Server and confirm it is listening on `127.0.0.1:27017`.
2. Open this project folder in VS Code.
3. Open the VS Code terminal in the project root.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the application:

   ```bash
   node server
   ```

6. Open `http://localhost:3000/` in a browser. The starter page should display the student name and Hello World heading.

The development configuration connects to `mongodb://127.0.0.1/mean-book`.

## Test with Git Bash and curl

Leave the Node server running in VS Code. Open Git Bash in the project directory and send this POST request:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"  Mikayla  ","lastName":"  Dickerson  ","email":"  MIKAYLA@example.com  ","username":"  MIKDIC  ","password":"  practicePassword  "}'
```

Expected response:

```text
User Added
```

The saved document should demonstrate the modifiers:

- `firstName` is stored as `Mikayla` with surrounding spaces removed.
- `lastName` is stored as `DICKERSON`.
- `email` is stored as `mikayla@example.com`.
- `username` is stored as `mikdic`.
- `password` has surrounding spaces removed but its letter case is unchanged.
- `role` defaults to `user`.
- `isActive` defaults to `true`.
- `createdAt` receives the current date and time.

To test the default values as well, send a second request without optional profile fields:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"password":"anotherPracticePassword"}'
```

That request should create a user with the schema's default first name, last name, email, username, role, active status, and creation date.

## Required screenshots

Save two genuine screenshots in the same folder as this README:

1. **VS Code server console:** show the server running and the successful user save output after sending the POST request.
2. **Git Bash console:** show the complete `curl` POST command and the `User Added` response.

The screenshots are not pre-created because they must show the actual output from your MongoDB and Node.js environment.

## GitHub submission

1. Create a GitHub repository named `UserSchemaExtensionsPerformanceAssessment`.
2. Select a Node `.gitignore` when creating the repository.
3. Add the instructor as a collaborator.
4. Clone the repository and copy these project files into it.
5. Add the two genuine screenshots beside this README.
6. Commit and push the project.
7. Submit the GitHub repository URL in Canvas.

## Implementation note

The password field remains a plain string to stay consistent with the guided-practice schema and demonstrate the requested schema modifiers. This is a learning example, not production authentication. A real application must hash passwords before storing them and must never return or log plaintext passwords.
