# Personal Dashboard

This project contains a skeleton for a dashboard web application using a Phoenix (Elixir) backend and a React frontend. Authentication endpoints are stubbed and the React app demonstrates basic login/register pages and a dashboard where widgets can be added and removed. Styling uses Material-UI.

## Project structure

- `backend/` – Phoenix based JSON API. Endpoints are defined for `/api/register`, `/api/login` and widget management.
- `frontend/` – React application bootstrapped with Vite and Material-UI components.

## Environment

Copy `.env.example` to `.env` and adjust the values if needed. The provided
`docker-compose.yml` runs a Postgres instance using these variables.

## Getting started

1. Copy `.env.example` to `.env` and run:
   ```bash
   docker-compose up -d db
   ```
   This starts a Postgres server for development.
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
