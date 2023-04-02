### Buyers.

![Skjermbilde (68)](https://user-images.githubusercontent.com/91701833/229360297-9e90f07a-b14f-4097-a18c-0d7744919a85.png)

## Description

This project is an e-commerce store built using React and the API provided by Noroff. The API can be found at https://api.noroff.dev/api/v1/online-shop.

### Pages

 - Homepage: displays a list of all products and includes a search bar to filter products by name. Clicking on a product takes the user to the individual product page.
 
 - Individual product page: displays details of a single product, including the title, description, image, and reviews. The discountedPrice property is used to display the price of the product. If there is a difference between the discountedPrice and price properties, then there is a discount for that product, which is calculated and displayed on the page. An "Add to Cart" button allows users to add the product to their cart.
 
 - Cart page: displays a list of all products in the cart as well as the total price. A "Checkout" button allows users to proceed to the Checkout success page.
 
  - Checkout success page: displays a message to the user notifying them that their order was successful, with a link to go back to the store. The cart is cleared if the user reaches this page.
  
  - Contact page: To use the ContactPage in this project, you must fill out the following inputs with specific requirements:
    ```
    Full name: minimum of 3 characters and is required
    Subject: minimum of 3 characters and is required
    Email: must be a valid email address and is required
    Body: minimum of 3 characters and is required
    
    Once you have filled out all required fields, click the "Submit" button to send your message.
    ```

## Installation

Clone the project and initialize git in your code editor.
Initialize git
```
 git clone https://github.com/Allawi465/js-framewokrs-ca.git
```
Install dependencies
```
npm i
```
start server
```
npm run start
```

## Deployment

Project is configured to run deployment on Netlify on push to branch "master" Deploy static content to Pages

[![Netlify Status](https://api.netlify.com/api/v1/badges/0645b1a9-6803-41ac-bd95-a03b68d891c3/deploy-status)](https://app.netlify.com/sites/buyers/deploys)

## Built With

The project was just build with
- React
- HTML 
- SCSS
- Bootstrap
- JavaScript
- Noroff API

## API
- https://api.noroff.dev/api/v1/online-shop

## Contact

If you have a suggestion that would make the site better, please contact me.

I am very grateful for the feedbacks and the support. 

Please contact me if you have any questions!

Don't forget to give the project a star! Thanks again!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
