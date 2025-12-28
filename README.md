# PlacePicker

A React application that allows users to create a personal collection of places they would like to visit or have visited. The app sorts available places by distance from the user's current location and provides an interactive interface to select and manage favorite destinations.

## Features

- **Location-based Sorting**: Automatically sorts places by distance using the user's geolocation.
- **Place Selection**: Add places to your personal collection.
- **Place Removal**: Remove places with a confirmation modal.
- **Persistent Storage**: Selected places are saved in localStorage for persistence across sessions.
- **Responsive Design**: Built with React for a smooth user experience.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and bundling.
- **JavaScript (ES6+)**: Core language for the application logic.
- **CSS**: Styling for the components.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd placepicker
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Select Places**: Click on places in the "Available Places" section to add them to your collection.
- **Remove Places**: Click on a place in the "I'd like to visit ..." section to open a removal confirmation modal.
- **Auto-Removal**: The confirmation modal will automatically confirm removal after 3 seconds if not manually interacted with.

## Project Structure

```
placepicker/
├── public/
│   └── logo.png
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   ├── DeleteConfirmation.jsx
│   │   ├── Modal.jsx
│   │   ├── Places.jsx
│   │   └── ProgressBar.jsx
│   ├── data.js          # Available places data
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

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
