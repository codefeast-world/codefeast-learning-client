# Codefeast Learning Client

## Project Setup and Management using pnpm

This project is a Next.js application managed with `pnpm`. Follow the steps below to set up and run the project.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: v18 or later)
- [pnpm](https://pnpm.io/) (Recommended: v8 or later)

You can install `pnpm` globally using:
```sh
npm install -g pnpm
```

### Installation

Clone the repository and navigate to the project directory:
```sh
git clone <repository-url>
cd codefeast-learning-client
```

Install dependencies using `pnpm`:
```sh
pnpm install
```

### Running the Project

#### Development Mode
To start the development server:
```sh
pnpm dev
```
This will start the Next.js development server at `http://localhost:3000/`.

#### Production Build
To create a production build:
```sh
pnpm build
```

To start the production server:
```sh
pnpm start
```
This will serve the built application.

### Linting
To check for linting errors, run:
```sh
pnpm lint
```

### Additional Notes
- This project uses Tailwind CSS for styling.
- The Next.js version used is `15.1.3`.
- Ensure `pnpm` is used instead of `npm` or `yarn` to avoid dependency issues.

For further details, refer to the official Next.js and pnpm documentation.

## Author
Pratham Saxena ([GitHub](https://github.com/prathamsaxen))

