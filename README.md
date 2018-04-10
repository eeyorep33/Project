# Project Proposal Outline

**E-Commerce store front**:
An application that allows users to select merchandise, add to cart, and see details of each prodect.


**Core Features**:
-  A home page with user login and random name generator
- A shop page with featured brands and links to different catagory pages
- Product page with title, image and price info
- Details page for each product
- Cart page to view items added to cart
-Server that holds cart information

**Stretch Features**: 
- Add databae for products.
- Add 'Add item' cart button on details page
- User history information


**User Stories**: The home page asks for user name and has a fun random derby name generator.  Once name is entered user can go to main shop page and choose a catagory to view.  Each catagory page has basic details and an image for prodect.  Clicking on the product name will show details about that prodeuct.  User can click add to cart button to add item.  User can view items they have in their cart and it shows the total cost of items in cart.  User can remove items they don't want from the cart.
**Tech-Stack**: 

- Create React app
- Express
- body-parser
- axios
- react-router-dom



**Description of Data**:
- The app will access the server for cart items.
- Local storage has user name stored.  
- Product model info {id: '', name: '', price: '', type: '', description:''}
                       

## Front-End: 
 - Home page
 - Shop page
 - Catagories page
 - Details page
 - Cart page

## Server-side:
 - GET endpoint to request cart information.
 - POST endpoint when adding items to cart
 - Delete endpoint to remove items from cart
 
 
 

**Project Timeline** -
1. Will work on components and front end functionality first(2 days). 
2. Enter test data to make sure routes and link function properly.  Add server with endpoints to database next.(2 days)
