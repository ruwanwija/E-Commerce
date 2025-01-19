# E-Commerce

##  Setting up project and installing dependencies
1.Create project
2.Install server Dependencies
# Server
# npm init  - Create package.json
# bcryptjs: Library to hash passwords securely.
# cloudinary: Cloud-based image and video management service.
# cookie-parser: Middleware to parse cookies in HTTP requests.
# cors: Middleware to enable Cross-Origin Resource Sharing (CORS).
# dotenv: Loads environment variables from a .env file.
# express: Web framework for Node.js.
# jsonwebtoken: For generating and verifying JSON Web Tokens (JWT).
# mongoose: MongoDB object modeling for Node.js.
# multer: Middleware for handling file uploads.
# nodemon: Utility that monitors for changes in the code and automatically restarts the server.

# package.json: Declares the project's dependencies and metadata.
# package-lock.json: Ensures that the same dependency tree is used across environments by locking the exact versions.

3.Create .gitignore file and mention the ignore files
4.Create server.js file 
5.Create Mongo DB Database with cluster
6.Create client side with react-vite(npm create vite@latest)
7.Install the client dependency using npm command
# @reduxjs/toolkit: Simplifies Redux setup and logic with tools like createSlice and createAsyncThunk.
# react-redux: Official React bindings for Redux to manage global state in React components.
# axios: A promise-based HTTP client for making API requests.
# react-router-dom: Provides dynamic routing for React web applications.
8.Setup the expresss.js 
9.Configure the DB with application
10.Setup the cookieparser and cors
11.Add it into these are ["start":"serve.js",
    "dev":"nodemon server.js"] package.json file in the server
12.Setup the tailwind CSS using shadcn

## Creating pages and layout
1.Create Redux Store with authorization
2.Create login and register page
3.Create a shopping view and admin view in the pages and components
4.Create the admin pages (dashboard,features,orders,products) and admin components(layout,header,sidebar).
5.Create the shopping pages(home,listing,checkout,account) and shopping components (layout,header).
6.Create the notfound page 

##  Implementing auth logic




###### Components ########
Provider - The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
Outlet- The Outlet serves as a placeholder where the components associated with the child routes will be rendered.(ex:auth/login,auth/register)
Main-Main component is not mandatory, but it aligns with good practices in web development, improving both user experience and code maintainability. 

###### Important ######
layout-In the create layout can re-usability in the domain(ex:auth/login,auth/register)