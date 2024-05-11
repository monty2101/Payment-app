# Payment App

## Overview
This project is a payment application designed to facilitate secure transactions between users. The frontend is built using React, styled with Tailwind CSS for efficient and responsive UI design. The backend is powered by Node.js with Express handling authentication using JWT tokens. Data is stored in a MongoDB database.

## Features
- **User Authentication**: Users can sign up and log in securely using JWT tokens for authentication.
- **Dashboard**: Upon logging in, users are directed to a dashboard where they can view their transaction history and account details.
- **Send Money**: Users can send money securely to other users within the app.

## Components
1. **Signup**: Allows new users to create an account.
2. **Signin**: Allows existing users to log in.
3. **Dashboard**: Displays user's account details and other user name, you can directly send money from there by searching for your friend's name.
4. **Send Money**: Enables users to send money to other users.

## Technologies Used
- Frontend: React, Tailwind CSS,axios,JavaScript
- Backend: Node.js, Express,jwt,JavaScript
- Database: MongoDB,SQL

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
    ```
    npm install
    ```
4. Start the backend server:
    ```
    npm start
    ```
5. Start the frontend development server:
    ```
    cd client
    npm start
    ```
6. Access the application at `http://localhost:3000`.

## Configuration
- Database connection string should be provided in the backend `.env` file.
- JWT secret key should be provided in the backend `.env` file.

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

