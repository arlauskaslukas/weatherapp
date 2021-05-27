# weatherapp

This app consists of three parts: frontend (client-app), backend and MySQL.

## Used ports:

Frontend: 3000.
Backend: 5000,
MySQL: 3306

## Instructions for setup

Setup the database using the database file provided in the folder "Datanase-File".

The database name should be "weatherapp" exactly.

Other database settings: 
Port: 3306.
Host: localhost.
Username: root.
Password: root.

Then run the backend solution from the backend folder. The webpage will open one of api pages. Ignore it.

Launch the frontend app from client-app directory using npm start command. If it fails, do the npm install.

Use it.

**Note: the entity framework was not used because all the data that is being paased to the backend is controlled. However in a real case scenario, the cleanup of sql string might be useful or even switching out to EF entirely.**

**Note: CORS has been enabled in the backend only for the http://localhost:3000. If the client app is being launched on a different port, it won't access the data. Alternatively use the plugin for brrowser to turn off the CORS errors.**