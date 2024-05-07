# Registration Form

Visit the live site: [Registration Form](https://registration-form-uw9u.onrender.com)

## Overview

The Registration Form project allows users to register with their first name, last name, email, and password. It utilizes Express.js for server-side handling, MongoDB for database storage, and provides a simple HTML form for user interaction.

## Features

- **User Registration**: Users can register by providing their first name, last name, email, and password.
- **Duplicate Email Check**: Checks for existing users with the same email address to prevent duplicate registrations.
- **Success and Error Pages**: Displays success and error pages based on the registration outcome.
- **Static File Serving**: Serves static HTML, CSS, and JavaScript files for the frontend interface.

## Modules Used

```javascript
  const express = require("express");
  const mongoose = require("mongoose");
  const bodyParser = require("body-parser");
  const dotenv = require("dotenv");
```

##Setup
1. Clone the repository:
```bash
git clone <repository_url>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:Create a .env file in the project root directory and specify the following variables:
```.env
PORT=<port_number>
MONGODB_USERNAME=<mongodb_username>
MONGODB_PASSWORD=<mongodb_password>
```
##Running the Application
```bash
npm start
```
The server will start running on the specified port.

##API Endpoints
```javascript
const app = express();

app.post("/register", async (req, res) => {
    // Registration logic
});

app.get("/success", (req, res) => {
    // Success page logic
});

app.get("/error", (req, res) => {
    // Error page logic
});
```
##Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements or bug fixes.


