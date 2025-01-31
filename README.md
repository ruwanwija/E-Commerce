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
1.Create a common component to all users firstly redirect,although in the check-auth file to authenticate the use
    1.1 if user access the page 
        1.1.1 if user not authenticate redirect to the login page
        1.1.2 if user is authenticate and user role is "admin" redirect to the admin dashboard
        1.1.3 if user is authenticate and user role is not admin redirect to the shop home page
    
    1.2 if user is not login user redirect to the login page

    1.3 if user is authenticate and user is "admin" redirect to the admin dashboard 
    1.4 if user is authenticate and user is not "admin" redirect to the shop home page
    1.5 if user is authenticate and user is not a "admin" also who can try to access the admin perspective redirect to the unauth-page
    1.6 if user is authenticate and user is "admin" also who can try to access the shop perspective redirect to the admin dashboard

2.After add the isAuthenticated is false and user is null in the app.jsx file,Then wrap the auth elemnts in the login function, admin and shop function

## Sign up and sign in page implementation
# Client Side 
    1.Install a form dependency from the shadcn ui 
    2.Create a form.jsx file in the common folder
    3.Create a config file and add the index.jsx file and it include the register form data (name,label,placeholder,componentType type)
    4.Create a form..jsx file to create a reuseable form and create a register form in register.jsx file 
    5.Create a login form in login.jsx 
-----------------------------------------------------------------------------------------------------------------------------------------
    6.handle the http request to backend and front end using axios in auth-slice.jsx file 
    7.Add the dispatch function to the register and login pages on redux to manage the state in registration and login
    8.Add the toast messages using shadcn ui toast messages 

# Server Side
    1.Create the models,controllers and routes folders 
    2.Create a User.js in the route folder it includes the user schema in the registration and login 
    3.Then create a auth-controller to control the authentication process under registration,login and logout
    4.Create a route for the registration and attach the controller
    5.Add the auth router in the server.js file  
-----------------------------------------------------------------------------------------------------------------------------------------
    6.add the controller functions to using jwt in auth-controller
    7.add the authentication routes(register/login/logout/middle auth) to the auth-route file

## Admin view header and sidebar component
# Header
    1.Add the two buttons lucide-react using on one is hamber icon and second one is logout button

# Sidebar
    1.Fistly wrap the function using Fragment after add this icon "ChartSpline"
    2,Create a navigation to the admin dashboard link and create other components in the admin sidebar
    3.Style the admin sidebar
    4.Update the Admin Sidebar to responsive using shadcn sheet uis
    
## Admin view products page - create new product and listing
## Product Page (form)
# Client Side
    1.Add the "Add New Product" button to the products page 
    2.Create a add new product form data in the index.js  file in the config folder
    3.Create a shadcn ui sheet in the product page and create a form
    4.Then Create a image-upload.jsx file in the admin-view folder
    5.add the "Upload Image" label and connect it to the products.jsx file
    6.Set the add image and remove image functions
-----------------------------------------------------------------------------------------------------------------------------------------
    7.implement the backend with the upload image 

# Server
    1.Create a clodany account and add the cloudanary dependencies 
    2.Create a cloudanary config file and add the name,api key and secret key in the codanary account also handle the function using multer
    3.Create a product controller file in the controller folder and implement the logic
    4.Create product route file in the routes folder and implement the logic
    5.Add the server.js file to the image upload router

## Product page
# Server
    1.Create a product model in the model folder
    2.The implement the logic in add new product,fetch all product,edit product and delete product in the products-controller file in the controller folder
    3.Add the above all routers in the products-routers file

# Client
    1.Create a product-slice in the store folder
    2.Create a backend pass form data process in the index.js file in the product-slice folder
    3.Then link a product-slice in the store.js file
    4.Create a product-tile.jsx in admin-view component for build the product card
    5.Add product tile card into the products.jsx file
    6.Create a edt funtion and delete function of the product

## Shopping view header component implementation
    1.Design the header with responsive
    2.Create a shopping view header menu items in the index.js file in the config folder
    3.Create a menubar with config folder index.js file
    4.Create a header rightside with login user,logout function with username 

## Shopping view product listing page
# Client
    1.Create a fiterl.jsx component in the shoping-view
    2.Product Filter Category and brand
    3.Link the filter with product listing page
    4.Add the category data into config folder
    5.Add the chadcn checkbox and style the product filter component page
    6.Add the sort by icon and add the sort data in the config folder after get the listing page
    7.Create a product-tile.jsx to create a product card in shopping-view and add the product listing file
-----------------------------------------------------------------------------------------------------------------------------------------
    8.Create a shop slice file and create a shop slice
    9.Add the product slice file in to the store file and product listing page
    10.Add the categoryOptionMap and brandOptionMap in the config file 
    11.Then set the product tile file to get the products and brand from the config file
    12.Create the filter function uing [GetProductDetails function]
    13.Then create a filter url function on filter file


# Server
    1.Create product-controller.js file in the shop folder
    2.Create products-routes.js file in the route folder and add the product controller in to the product routes
    3.Add the product routes file in to the server file
-----------------------------------------------------------------------------------------------------------------------------------------
    4.Create a filter controller function on product controller

## Shopping view product details dialog
# Client 
    1.Create a get product slice in product-slice file
    2. Create a get product slice function in the product tile file
    3.Then connect the get product tile function into the listing file
    4.THen create product details file and design the product details page after connect the listing page

# Server
    1.Create a get product details controller in products-controller file
    2.Create a route for the get product details in product-router file

## Shopping view cart component implementation

# Server
    1.Create cart.js models and implement the cart model
    2.Create cart controller in the shop controller folder and create the controllers
    3.Create a cart route and connect the cart controller
    4.Connect the cart router into the server.js file

# Client
    1.Create a cart slice file in the shop slice folder and implement the cart slice login 
    2.Connect the store.js file in the cart slice.js file
    3.Wrap the header button on the Sheet
    4.Create a cart-wrapper and cart items content component
    5.Connect the cart wrapper in tp the header file and design the cart-wrapper file
    6.Create a add to cart function in the product-tile component
    7.Design and implement the logic in cart item content 
    8.Create a function when press the "Add to cart" button on product details component add to the cart

## Shopping view home page
# Client 
1.Design the home page
2.Add the filter function when click the category or brand 
3.Create a function on navigate menu items in header file
3.Create a add to cart function on the home page 

## Shopping view account page
# Server
1.Create a address model
2.Create address Controller
3.Create address route 
4.Add the address route in to server.js file

# Client
1.Create address slice
2.Add address slice in to the store.js
3.Design the account page
4.Create a address and orders two component and connect the account page
5.Add the address content in to config folder
6.Create address-card component and connect the address component

##  Shopping view checkout page implementation
# Client
1.Design the checkout page
2.Design the orders page
3.Create a orders component in the admin view
4.Design the order page in admin and shopping components
5.Connect the admin order page with admin orders component
6.Create order details component at the admin view and connect the order component
7.Create order details component in the shopping view 
8.Implement the order details component in the account page order section
-----------------------------------------------------------------------------------------------------------------------------------------9.Create a order slice and connect it to the redux store
10.Add the paypal function on the checkout page
11.Create a paypal return page on shop view
12.Add the paypal return page on app.jsx
---------------------------------------------------------------------------------------------------------------------------------------- 
13.Create payment-success page and add the app.jsx 
-----------------------------------------------------------------------------------------------------------------------------------------14.Create Order slice on admin view and connect the redux store 

# Server    
1.Create order model
2.Setup the paypal on backend 
3.Create order controller
4.Create order route
5.Add the order router into main server
-----------------------------------------------------------------------------------------------------------------------------------------6.Create capture payment on the order-controller
7.Update the order route with capture payment controller
-----------------------------------------------------------------------------------------------------------------------------------------8.Create Order controller on admin view
9.Create order route onn admin view
10.Connect the order router in main server

## Shopping view search page implementation
# Server
1.Create search controller
2.Create search route
3.Add the search route in main server

# Client
1.Create search slice in shop view
2.Add the search tab in the header
3.Create and design search page
4.Add the search page on app.jsx


###### Components ########
Provider - The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
Outlet- The Outlet serves as a placeholder where the components associated with the child routes will be rendered.(ex:auth/login,auth/register)
Main-Main component is not mandatory, but it aligns with good practices in web development, improving both user experience and code maintainability. 
Navigate - Navigate is used for redirection
useLocation -  useLocation is used to access the current route's information (URL details)
Fragment - Fragment is a lightweight component that allows you to group a list of children elements without adding extra nodes to the DOM. It’s useful when you need to return multiple elements from a component without introducing unnecessary wrapper elements, such as <div>, which could affect layout or styling.
useRef - useRef is a hook that allows you to create a mutable reference that persists across re-renders.

###### Props ######
children - children is a prop that lets you pass and render any JSX or components inside the CheckAuth component

###### Important ######
layout-In the create layout can re-usability in the domain(ex:auth/login,auth/register)
dispatch - dispatch function is used with state management libraries like Redux. It allows you to trigger actions to update the state in a centralized Redux store.
payload-payload refers to the data that is sent with an action or API request to update the state or perform some operation.
    Usage:  In Redux Action
            In Redux Toolkit
            In Api Call
            Handle in Reducer

            Key Points to Understand:
                What is a Payload?
                    It is the data you send along with an action or request for processing.
                    Typically includes relevant information such as form data, user input, or API responses.
                
                Where is it Used?
                    In Redux actions and reducers.
                    In API requests (POST, PUT, DELETE, etc.).

                How is it Accessed?
                    Inside Redux reducers via action.payload.
                    On the server, as part of the request body or parameters.

### form.jsx file ###
The CommonForm component is a generic form builder that:
    Dynamically renders form fields based on the configuration provided in the formControls prop.
    Manages form state through the formData and setFormData props.
    Supports different types of input fields, including:
        Input fields (text, password, etc.).
        Dropdown Selects (select).
        Textareas.
        Handles form submission via the onSubmit prop.
    Includes a customizable submit button with properties like buttonText and isBtnDisabled.