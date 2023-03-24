# Note-App
A simple note application using the PERN (Postgres - Express - React - NodeJS) stack in a client-server architecture

# SetUp
## Server
Use the command `yarn` to install the dependencies.
Create a DB in Postgres using the scripts in the database folder.
Create an .env file and assign the following environment variables.
 - PG_USER = "Postgres user "
 - PG_PASSWORD = "User password" 
 - PG_HOST =  "Database Host"
 - PG_DB = "Database name"
 - PORT = "Listening PORT"

To start listening in PORT use `yarn start`.

## Client
Use the command `yarn` to install the dependencies.
Create an .env file and assign the following environment variables.
 - VITE_DB_URL = "The URL of the DB Server"

To start listening in port 5173 use `yarn start`.

# Structure
```bash
├── client                          # Code related to the client side of the application
│   ├── .env                        # dotenv file to configurate environment variable (needs to be created)
│   ├── src                         # Front-end code
│   │	 ├── components             # App components made with React
│   │	 ├── hooks                  # Custom Hooks
│   │	 ├── App.tsx                # App component
│   │	 ├── App.tsx                # Configuration of environment variables
│   │	 ├── index.css              # Main css file
│   │	 ├── main.tsx               # Main react file
│   ├── index.html                  # HTML index
│   ├── postcss.config.cjs	        # Postcss configuration (needed to use TailwindCSS)
│   ├── tailwind.config.cjs	        # Tailwind configuration
│   ├── ts.config			        # TypeScript configuration
│   ├── vite.config.ts              # Vite configuration
├── server                          # Code related to the server side of the application
│   ├── .env                        # dotenv file to configurate environment variable (needs to be created)
│   ├── database                    # SQL scripts to create the database
│   ├── db.ts                       # Database controller
│   ├── main.ts                     # Where the magic happens
│   ├── routes.ts                   # Routing controlller
│   ├── ts.config                   # TypeScript configuration
```
