# DraftAutoFlow Frontend

## Overview
DraftAutoFlow is a multi-step application process built with React and Vite. The application includes the following steps:
1. **Eligibility Check**: Users can verify their eligibility for the application.
2. **Job Details**: Users can provide job-related information.
3. **Review & Submit**: Users can review their details and submit the application, with AI-powered email generation.

The application is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.

---

## Features
- **Multi-Step Form**: Navigate through steps with a progress indicator.
- **Eligibility Check**: Dynamic eligibility validation.
- **AI-Powered Email Generation**: Generate emails automatically in the final step.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Modern Tooling**: Built with Vite for fast development and TypeScript for type safety.

---

## Project Structure
```
frontend/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── sections/      # Form sections
│   │   └── ui/            # UI elements (Button, Input, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Application pages (EligibilityCheck, StepOne, etc.)
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main application entry
│   └── main.tsx           # Application bootstrap
├── package.json           # Project metadata and dependencies
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Routes
The application uses React Router for navigation. Below are the defined routes:
- `/`: Redirects to the first step (Eligibility Check).
- `/step-one`: Displays the Job Details form.
- `/step-two`: Displays additional details (if any).
- `/step-three`: Displays the Review & Submit page.

---

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application
To run the application locally, use the following commands:

- **Development Server**:
  ```bash
  npm run dev
  ```
  This starts the development server at `http://localhost:3000`.

- **Build for Production**:
  ```bash
  npm run build
  ```
  This generates a production-ready build in the `dist` folder.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  This previews the production build locally.

---

## Dependencies
### Main Dependencies:
- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Hook Form**: For managing form state.
- **Zod**: For schema validation.

### Development Dependencies:
- **Vite**: Build tool for fast development.
- **TypeScript**: For static typing.
- **ESLint**: For linting and code quality.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

