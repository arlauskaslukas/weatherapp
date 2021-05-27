# Weather App (Task for job interview)

This project retrieves forecast data from the custom-made database and displays it in React.js app.

This app consists of three parts: React frontend (client-app), .NET core backend and MySQL database.

## Used ports:

Frontend: 3000.
Backend: 5000,
MySQL: 3306

## Instructions for setup

Setup the database using the database file provided in the folder "Database-File".

The database name should be "weatherapp" exactly.

Other database settings:

Port: 3306.

Host: localhost.

Username: root.

Password: root.

Then run the backend solution from the backend folder. The webpage will open one of api pages. Ignore it.

Launch the frontend app from client-app directory using npm start command. If it fails, do the npm install.

Use it.

## Additional provided files

There is a folder "MagicDraw-Project" which includes the complete MagicDraw UML project. If you don't have MagicDraw installed, there are relevant screenshots provided:

Class diagram of the whole database;

Entity Relations diagram of whole database;

The other thing that's provided is the ddl file for database description if there is a need to load the custom data. The default data however is provided in the csv files in the folder called "Default-Data" and is packed within the sql file.

**Note: the entity framework was not used because all the data that is being passed to the backend is controlled. However in a real case scenario, the cleanup of sql string might be useful or even switching out to EF entirely.**

**Note: CORS has been enabled in the backend only for the http://localhost:3000. If the client app is being launched on a different port, it won't access the data. Alternatively, use the plugin for browser to turn off the CORS errors.**
