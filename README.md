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

To start listening in port 5000 use `yarn start`.

## Client
Use the command `yarn` to install the dependencies.
To start listening in port 5173 use `yarn start`.

# Structure
```bash
├── client                 # Code related to the client side of the application
│	 ├── src                 # Front-end code
│  │	 ├── components		     # App components made with React
│  │	 ├── App.tsx			       # App component
│  │	 ├── index.css		      # Main css file
│  │	 ├── main.tsx		       # Main react file
│  ├── index.html			       # HTML index
│  ├── postcss.config.cjs	 # Postcss configuration (needed to use TailwindCSS)
│  ├── tailwind.config.cjs	# Tailwind configuration
│  ├── ts.config			        # TypeScript configuration
│  ├── vite.config.ts		    # Vite configuration
├── server					            # Code related to the server side of the application
│  ├── database			         # SQL scripts to create the database
│  ├── .env				            # dotenv file to configurate environment variable (needs to be created)
│  ├── db.ts				           # Database controller in TS
│  ├── main.ts				         # Where the magic happens
│  ├── ts.config			        # TypeScript configuration
```
