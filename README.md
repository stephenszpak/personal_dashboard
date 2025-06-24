# Personal Dashboard

This project contains a skeleton for a dashboard web application using a Phoenix (Elixir) backend and a React frontend. Authentication endpoints are stubbed and the React app demonstrates basic login/register pages and a dashboard where widgets can be added and removed. Styling uses Material-UI.

## Project structure

- `backend/` – Phoenix based JSON API. Endpoints are defined for `/api/register`, `/api/login` and widget management.
- `frontend/` – React application bootstrapped with Vite and Material-UI components.

## Environment

Copy `.env.example` to `.env` and adjust the values if needed. By default the
project is configured to connect to a Postgres instance hosted on Render. If you
prefer running Postgres locally you can use Docker as described below and update
the connection settings in your `.env` file accordingly.

## Optional: Starting Postgres with Docker

If you would rather run Postgres locally instead of using the hosted instance,
the repository includes a `docker-compose.yml` file to start a container using
the credentials from your `.env` file. Follow these steps:

1. Make sure Docker is installed on your machine.
2. Create the `.env` file if you haven't already:

   ```bash
   cp .env.example .env
   ```

3. Pull the Postgres image and start the container:

   ```bash
   docker-compose up -d db
   ```

4. Check that the container is running:

   ```bash
   docker-compose ps
   ```

   View logs with:

   ```bash
   docker-compose logs -f db
   ```

The database is exposed on port 5432 (or the value of `POSTGRES_PORT`) and will
persist its data in the `postgres_data` volume until you remove it with
`docker-compose down -v`.

## Getting started

1. Ensure your `.env` file contains the credentials for the Render database.
   If you are running Postgres locally with Docker, start the container as
   described above and adjust the host settings to `localhost`.
2. Install Elixir and Phoenix. Create the database and run migrations (not provided).
3. From the `backend` directory install dependencies:
   ```bash
   mix deps.get
   mix phx.server
   ```
4. From the `frontend` directory install packages and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
5. Visit `http://localhost:5173` to see the app. API requests are proxied to the Phoenix server on port 4000.

This codebase provides the basic plumbing and is intended as a starting point for further development.
