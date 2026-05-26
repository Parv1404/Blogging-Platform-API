# Blogging Platform API

A simple RESTful API for a blogging platform built with Node.js and Express framework. This project implements CRUD operations for blog posts and demonstrates a small, modular server structure.

## Key Features

- Create, read, update, and delete blog posts
- Modular controllers and library functions
- Simple, configurable database connection in `db/config.js`

## Tech Stack

- Node.js with Express framework
- MongoDB NoSQL Database 

## Repository Structure

- [index.js](index.js) — application entry point
- [package.json](package.json) — project manifest
- [src/controllers](src/controllers/) — request handlers ([createHandler.js](src/controllers/createHandler.js), [getHandler.js](src/controllers/getHandler.js), [updateHandler.js](src/controllers/updateHandler.js), [deleteHandler.js](src/controllers/deleteHandler.js))
- [src/lib](lib/) — business logic helpers ([create.js](lib/create.js), [get.js](lib/get.js), [update.js](lib/update.js), [delete.js](lib/delete.js))
- [db/config.js](db/config.js) — database configuration
- [models/blogSchema.js](models/blogSchema.js) — data schema for blog posts
- [routes/featureRoute.js](routes/featureRoute.js) — API route definitions

## Getting Started

Prerequisites:

- Node.js installed
- Clone the repository in local development environment
- Create an `.env` file (for setting up project's environment variables)

Install dependencies:

```bash
npm install
```

Run the server (development):

```bash
npm run start
```

The server will start from [index.js](index.js).

## API Endpoints (examples)
Common endpoints are:

- `GET /posts` — list all posts
- `GET /posts/:id` — get a single post
- `POST /posts` — create a post
- `PUT /posts/:id` — update a post
- `DELETE /posts/:id` — delete a post


<h2>Author</h2>
<p>This project is created and developed by: </p>
    Parv Aggarwal <br>
    2nd year B.Tech. CSE <br>
    HBTU, Kanpur <br>
<a href = "https://www.linkedin.com/in/parv-aggarwal-85519431a/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
       alt="LinkedIn" width="20" height="20"/>
</a>
