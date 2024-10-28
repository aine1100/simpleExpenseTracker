
# Expense Tracker

A responsive, intuitive expense tracker built with React, Vite, and Chart.js to help manage personal finances. This project allows users to add, categorize, and view expenses visually via a pie chart, with options for filtering and data persistence.

- [ExpenseTrackerPreview](https://simple-expense-tracker-dun.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Add, view, and delete expenses with descriptions, dates, and categories.
- Visualize expenses by category using a pie chart.
- Responsive design with collapsible sidebar navigation and an intuitive interface for mobile devices.
- Data is saved in local storage, ensuring persistence across sessions.
- Filter expenses by category.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Charting**: Chart.js, React Chart.js 2
- **Bundler**: Vite
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

To run this project locally, you’ll need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/aine1100/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:3000`.

4. **Build for production**

   ```bash
   npm run build
   ```

   This will output optimized, production-ready code in the `dist` folder.

## Usage

1. **Adding Expenses**: Fill out the form to enter an expense, specifying the amount, category, date, and a brief description.
2. **Viewing Expenses**: All expenses are displayed in a table. Use the search feature to filter by category.
3. **Removing Expenses**: Click the “Remove” button in the table to delete an expense.
4. **Visualizing Expenses**: The pie chart provides a breakdown of expenses by category.

## Deployment

To deploy the project to [Vercel](https://vercel.com/), follow these steps:

1. **Push the repository to GitHub**.
2. **Sign in to Vercel** and link the repository.
3. **Configure build settings** if necessary:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** and Vercel will automatically handle builds and deployment.

> **Note**: If you encounter a `vite: Rollup failed to resolve import` error during deployment, ensure all dependencies are installed and listed under `dependencies` in `package.json`.

## Contributing

Contributions are welcome! If you would like to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

T
