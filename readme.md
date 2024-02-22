# MERN Stack Developer Assignment

This project is an implementation of a MERN (MongoDB, Express.js, React.js, Node.js) stack application with additional technologies and features as specified in the assignment.

## Application Flow

### 1. User Registration and Authentication:

-   User accesses the application and navigates to the registration page.
-   User fills out the registration form with required details including email, password, profile image, etc.
-   The frontend displays a preview of the selected profile image before submission.
-   Upon submission, the backend validates the input data, sends an email verification link to the provided email address, and stores the user data in the MySQL database using Sequelize.
-   User receives the email verification link and clicks on it to verify their email address.
-   Once the email is verified, the user can log in to the application using their email and password.
-   The backend verifies the user's credentials, generates a JWT token with a refresh token, and sends it back to the client.

### 2. Password Reset: --TODO--

-   If a user forgets their password, they can request a password reset.
-   User provides their email address and requests a password reset.
-   Backend verifies the email address and sends a password reset link to the user's email.
-   User clicks on the password reset link and is directed to a page where they can reset their password.
-   After entering a new password, the backend updates the user's password in the database.
-   Show the list of users so that he can view any user profile, search any user.
-   Create a my profile page with edit profile functionality.

### 3. Social Login with Google (optional) --TODO--

-   User chooses to log in with Google.
-   User is redirected to Google's authentication page where they log in with their Google credentials.
-   Upon successful authentication, Google redirects the user back to the application with an authentication token.
-   The backend verifies the authentication token with Google and creates a new user account or logs in the existing user based on the Google account information.

### 4. Role-Based Access Control (RBAC):

-   Upon successful authentication, the backend checks the user's role and permissions stored in the database.
-   Based on the user's role, certain features or functionalities may be restricted or accessible.
-   For example, an admin user may have access to certain administrative features while a regular user may have access to standard functionalities, like if logged in by admin then show the admin actions like deleting any user.

### 6. Pagination and Search:

-   User navigates to a page where a list of items is displayed.
-   The frontend implements pagination to limit the number of items displayed per page.
-   User can navigate through different pages to view additional items.
-   User can also use a search feature to filter items based on specific criteria.

### 8. React-Hook-Form for Form Validation:

-   User fills out a form on the frontend.
-   React-Hook-Form library validates the form inputs in real-time, providing instant feedback to the user.
-   Invalid inputs are highlighted, and error messages are displayed to guide the user on how to correct them.

### 9. Responsive Design:

-   The application is designed to be responsive and compatible with various devices and screen sizes.
-   User can access and use the application seamlessly across desktop, tablet, and mobile devices.

## Technical Requirements

### Backend Requirements:

1. Implement a MySQL database using Sequelize ORM for data storage.
2. Implement JWT authentication with refresh token feature for user authentication and authorization.
3. Utilize Multer for handling file uploads.
4. Implement express-validation for validating incoming requests.

## Technologies Used

-   React
-   Express
-   MySQL
-   TailwindCSS
-   Cloudinary
-   Sequelize ORM
-   JWT Authentication
-   Multer
-   Express-Validation
-   etc . . . .

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Rakib7425/maxlence-assignment.git
    ```

2. Navigate to the project directory: `cd maxlence-assignment`
3. Install dependencies:
    - Backend: `cd backend && npm install`
    - Frontend: `cd frontend && yarn install`
4. Set up your environment variables as per the `.env` files provided in the `backend` and `frontend` directories.
5. Start the backend server: `cd backend && npm rub dev`
6. Start the frontend development server: `cd frontend && npm run dev`

## Contributors

-   [Me and Myself Rakibul islam.](https://github.com/Rakib7425)
