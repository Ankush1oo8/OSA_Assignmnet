# OSA_Assignmnet

This project is a simple front-end application demonstrating user authentication (Signup and Login). It is built with React and uses React Router for navigation and Bootstrap for styling. The user data is stored in the browser's `localStorage`.

## Screenshots

| Login Screen                                     | Signup Screen                                      | Home Screen (Logged In)                                |
| ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------ |
| ![Login Screen](placeholder-login-screen.png)    | ![Signup Screen](placeholder-signup-screen.png)    | ![Home Screen](placeholder-home-screen.png)            |

*(To add your screenshots, replace the `placeholder-*.png` files with your actual screenshots and update the paths if necessary.)*

## Features

- User Signup with name, email, and password.
- User Login with email and password.
- Form validation for signup and login forms.
- A welcoming home page that displays the user's name upon successful login.
- Logout functionality.
- Simple, clean UI using Bootstrap.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd OSA_Assignmnet/frontend
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Code Overview

The main logic is contained within the `src` directory.

### `main.jsx`

This is the entry point of the application. It renders the `App` component into the DOM.

### `App.jsx`

This component sets up the routing for the application using `react-router-dom`. It defines three routes:
- `/` for the `Home` component.
- `/login` for the `Login` component.
- `/signup` for the `Signup` component.

It also imports the main Bootstrap CSS file.

### Components

#### `Home.jsx`

- This is the main landing page.
- It checks for user data in `localStorage`.
- If the user is logged in, it displays a personalized welcome message and a "Logout" button.
- If the user is not logged in, it prompts them to either log in or sign up.

#### `Login.jsx`

- Provides a form for users to log in.
- It validates the form fields (email and password).
- On submission, it checks the entered credentials against the data stored in `localStorage`.
- Upon successful login, it shows a confirmation modal and redirects the user to the home page.

#### `Signup.jsx`

- Provides a form for new users to register.
- It validates the form fields (name, email, and password).
- On successful submission, it stores the new user's data in `localStorage` and displays a success message, prompting the user to log in.

### Styling

- `src/style.css`: Contains custom styles for the application, primarily for centering the content.
- `src/index.css`: Default styles from Vite setup.
- `src/App.css`: Default styles from Vite setup.
- `bootstrap/dist/css/bootstrap.min.css`: Imported in `App.jsx` to provide Bootstrap styling.