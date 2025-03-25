# Stride Landing Page

A modern landing page built with React and Vite.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NewDara-Star/stride-landing-page.git
cd stride-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Maintenance

### Regular Updates
- Keep dependencies up to date:
  ```bash
  npm update
  ```
- Check for security vulnerabilities:
  ```bash
  npm audit
  ```

### Code Quality
- Run linting:
  ```bash
  npm run lint
  ```
- Format code:
  ```bash
  npm run format
  ```

### Troubleshooting
- If the dev server is slow to start:
  1. Clear npm cache: `npm cache clean --force`
  2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## Technologies Used
- React
- Vite
- ESLint
- Additional plugins:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
