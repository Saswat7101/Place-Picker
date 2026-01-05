# PlacePicker

A React application that allows users to create a personal collection of places they would like to visit or have visited. The app sorts available places by distance from the user's current location and provides an interactive interface to select and manage favorite destinations.

## Features

- **Location-based Sorting**: Automatically sorts places by distance using the user's geolocation.
- **Place Selection**: Add places to your personal collection.
- **Place Removal**: Remove places with a confirmation modal and HTTP DELETE requests.
- **Persistent Storage**: Selected places are saved via a backend API for persistence across sessions.
- **Custom Hooks**: Utilizes custom React hooks (e.g., useFetch) for efficient data fetching and state management.
- **Optimistic Updates**: Implements optimistic UI updates for better user experience, with error handling for failed operations.
- **Enhanced Error Handling**: Comprehensive error management for API requests and user interactions.
- **Responsive Design**: Built with React for a smooth user experience.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and bundling.
- **JavaScript (ES6+)**: Core language for the application logic.
- **CSS**: Styling for the components.
- **Node.js**: Runtime environment for the backend server.
- **Express**: Web framework for building the backend API.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd placepicker
   ```

2. Install frontend dependencies:

   ```
   npm install
   ```

3. Install backend dependencies:

   ```
   cd backend
   npm install
   cd ..
   ```

4. Start the backend server:

   ```
   cd backend
   node app.js
   ```

5. In a new terminal, start the frontend development server:

   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Select Places**: Click on places in the "Available Places" section to add them to your collection.
- **Remove Places**: Click on a place in the "I'd like to visit ..." section to open a removal confirmation modal.
- **Auto-Removal**: The confirmation modal will automatically confirm removal after 3 seconds if not manually interacted with.

## Project Structure

```
placepicker/
├── backend/
│   ├── app.js           # Backend server entry point
│   ├── data/
│   │   ├── places.json  # Available places data
│   │   └── user-places.json  # User-selected places data
│   ├── images/          # Place images
│   ├── package.json
│   └── package-lock.json
├── public/
│   └── logo.png
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   ├── AvailablePlaces.jsx
│   │   ├── DeleteConfirmation.jsx
│   │   ├── Error.jsx
│   │   ├── Modal.jsx
│   │   ├── Places.jsx
│   │   └── ProgressBar.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useFetch.js  # Custom hook for data fetching
│   ├── data.js          # Available places data
│   ├── http.js          # HTTP utilities for API calls
│   ├── loc.js           # Location sorting utilities
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Workflow

The development workflow for this project, based on commit history:

- Implemented flexible custom hooks to enhance code reusability and modularity in React components.
- Integrated the custom hook across multiple components to streamline data fetching and state management.
- Exposed nested functions from the custom hook to provide additional functionality for component interactions.
- Developed and integrated a custom hook named useFetch for efficient HTTP request handling and data retrieval.
- Updated the README file to improve documentation and provide better project guidance.
- Implemented data deletion functionality using HTTP DELETE requests to allow users to remove selected places.
- Added optimistic updating with comprehensive error handling to improve user experience during API interactions.
- Enabled sending data via POST requests to support adding new places to the user's collection.
- Improved overall code structure for better maintainability and readability.
- Implemented data transformation for fetched information to ensure proper formatting and usability.
- Added robust HTTP error handling to manage and display errors gracefully in the application.
- Implemented loading state management to provide feedback during asynchronous operations.
- Utilized async/await in useEffect hooks for cleaner asynchronous code execution.
- Configured sending requests via useEffect to trigger data fetching on component mount or dependency changes.
- Set up data modeling to define the structure and relationships of place-related data.
- Added an initial README file to document the project setup and usage instructions.
- Optimized state updates to reduce unnecessary re-renders and improve performance.
- Added a confirmation modal for place removal to prevent accidental deletions.
- Incorporated memoize functions to cache expensive computations and enhance performance.
- Used useEffect for implementing modal timeout functionality to auto-confirm removals.
- Integrated refs with DOM APIs for direct manipulation of DOM elements when necessary.
- Replaced useEffect with useCallback in appropriate scenarios to optimize function memoization.
- Implemented localStorage usage to persist user data across browser sessions.
- Integrated geolocation API to determine and utilize the user's current location for place sorting.
- Performed initial project setup, including basic structure and configuration.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
