# Jober: AI-Powered Job Finder

Jober is a demo AI-powered job finder application designed to showcase the capabilities of modern web technologies. It allows users to upload their resumes, select desired roles, and receive personalized job recommendations based on their skills and experiences.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- Resume upload and analysis
- Role selection for personalized job recommendations
- AI-powered job matching
- Application management for job seekers

## Installation

To run this demo locally, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/Jeet-baldha/jober-Job-finder-
    ```

2. Navigate to the project directory:

    ```
    cd jober
    ```

3. Install server dependencies:

    ```
    cd server
    npm install
    ```

4. Install client dependencies:

    ```
    cd ../client
    npm install
    ```

5. Start the server:

    ```
    cd ../server
    node index.js
    ```

6. Start the client:

    ```
    cd ../client
    npm run dev
    ```

## Usage

1. Open your browser and navigate to http://localhost:5173 to access the application.
2. Upload your resume and select your desired role.
3. Explore personalized job recommendations and apply for jobs directly from the platform.

## Configuration

### Server Configuration

The server can be configured by editing the environment variables in the `.env` file located in the backend directory.

```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
```

### Tailwind CSS Configuration

Tailwind CSS is used for styling the frontend. Follow these steps to set it up:

1. Install Tailwind CSS via npm:

    ```
    npm install -D tailwindcss postcss autoprefixer
    ```

2. Initialize Tailwind CSS:

    ```
    npx tailwindcss init -p
    ```

3. Configure your `tailwind.config.js` file:

    ```javascript
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Add the Tailwind directives to your CSS file (e.g., `src/index.css`):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. Ensure your CSS file is imported in your `src/main.jsx` or `src/main.tsx`:

    ```javascript
    import './index.css';
    ```

## Technologies Used

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- AI and Data Analysis: Google genrative AI
- Version Control: Git, GitHub

## Contributing

Contributions to this demo project are not being accepted at this time.

Feel free to explore and experiment with the demo version of Jober!
