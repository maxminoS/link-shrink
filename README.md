# Link Shrink

A simple URL shortener.

Link Shrink has a limit of 25 links being stored at any one time.

## Project

This URL shortener is made using the MERN stack. The frontend is in **React** and **Tailwind** using **TypeScript**; the backend using **Node** and **Express**, also in **TypeScript**, with a **MongoDB** database to store the links and the shortened link. The backend has been containerized using **Docker**.

## Deploy

This project uses **Yarn workspaces** but is built for separate deployment of the frontend and backend.

The frontend is deployed using Netlify and the backend in a separate server, set as the environment variable `VITE_BACKEND_SERVER`. The Node/Express backend with MongoDB need only the `docker compose up` to start.

## Development

In the project directory, you can run:

### `yarn start`

Runs both client and server, reloading on edits.

### `yarn client`

Runs app in development mode, reloading on edits.\
Open [http://localhost:3000](http://localhost:3000)


### `yarn server`

Runs backend in development mode, reloading on edits.\
Open [http://localhost:5000](http://localhost:5000)
