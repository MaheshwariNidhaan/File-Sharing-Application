# File Sharing Application

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-blue)

![Deployed](https://img.shields.io/badge/Deployed-Yes-brightgreen)

## Overview

This File Sharing Application is built using the MERN stack. It allows users to upload an image file and generate a shareable link. When someone clicks on the link, they can download the file to their local machine.

You can access the deployed application [here](https://file-sharing-application-theta.vercel.app/).

## Features

- **Upload Files:** Users can upload image files from their machine.
- **Generate Links:** The application generates a unique link for each uploaded file.
- **Download Files:** Anyone with the link can download the file.

## Tech Stack

- **Frontend:**
  - ![React](https://img.shields.io/badge/React-18.2.0-blue)
  - ![Vite](https://img.shields.io/badge/Vite-5.2.0-blue)
  - React Hooks: `useState`, `useEffect`, `useRef`

- **Backend:**
  - ![Node.js](https://img.shields.io/badge/Node.js-20.2.0-green)
  - ![Express](https://img.shields.io/badge/Express-4.19.2-green)
  - ![MongoDB](https://img.shields.io/badge/MongoDB-8.4.4-green)
  - Multer for file uploads

- **Deployment:**
  - ![Render](https://img.shields.io/badge/Backend-Render-blue)
  - ![Vercel](https://img.shields.io/badge/Frontend-Vercel-blue)

## Architecture

The application follows the Model-View-Controller (MVC) architecture:

- **Model:** Defines the data structure and schema for file references.
- **View:** The frontend built with React and Vite, providing a user interface for uploading files and generating links.
- **Controller:** Handles the logic for file uploads and link generation.

## Conclusion

This File Sharing Application demonstrates the power and flexibility of the MERN stack, providing a seamless user experience for uploading and sharing files. It combines modern frontend and backend technologies to create a robust and scalable solution. Feel free to explore, contribute, and enhance the application further!
