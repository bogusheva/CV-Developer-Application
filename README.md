Building a CV developer application is my Capstone Project for FRONTEND DEVELOPMENT PROGRAM at EPAM UpSkill. I created a single-page React-based application from scratch. This project solidifies all my gained knowledge and helps me to get more practical experience in HTML, CSS, JavaScript and React infrastructure. You can see it here: https://react-portfolio-bo.netlify.app

The aim of this project is to create a personal, professional CV web application that allows users to have a working prototype to share with audiences to introduce themselves or use as a first portfolio project.

My work with Capstone Project includes the next stages.
Firstly, I created project with Create React app, installed the required dependencies, added scss structure, imported custom fonts and Awesome icons, and prepared the folder structure.
After that, I created a skeleton of my application, implemented basic functionality, and made styled components. Next, I filled my app with advanced functionality and integration with APIs, and made unit tests.

My Capstone Project meets the next functional requirements for this application. This web application is based on two main screens: the start page and the inner page, and it has responsive design. The application contains sections and elements like in the given Figma design. All styles and element positions are implemented according to this design.

Let's take a closer look at stage 1 – implementing basic functionality.
My application contains start page and main screen. Navigation between these screens is based on the React Router library. Each page contains shared components as building blocks for application logic, so I could split the UI into independent, reusable pieces.
The users can navigate through the main sections of the application using the navigation links. Also on the inner page the application supports back-to-top functionality when the user presses the back-to-top button and the browser scroll is scrolled to the top of the page.
This application allows users to show and hide the slider panel to increase the working space of the main resume application page. The users are able to filter the portfolio, but by default, we can see all portfolio items.

Now we can look at the logic of each component.
For example, component Box. It is used in section “About”. The main idea of this component is to create a wrapper for content. The box component includes the title and content that can be added by props.
The next reusable component is Button, that contains icon and text as a "props". It helps create different types of Button. I have here button “Know more” on the start page, “Go-back” and scroll-up button on the main page. I use here FontAwesomeIcon, it is a third-party component that displays icons.
The main idea of Timeline, Feedbacks and Experience components is to create lists with data. These components contain data with dynamic input of content. The timeline component has an internal scroll with a height equal to 30vh.
The Panel component contains the main navigation logic in Navigation component to support the active state, a navigation “Go-back” button, and a simple personal component PhotoBox with a photo, and a user name. The Panel component has a toggle show/hide functionality when the user presses the "hamburger" button. The Panel component changes views based on screen size.
Functionality of Portfolio component is based on Filter & sort magical layouts. I use Isotope-layout plugin here for sorting out my portfolio projects (all, code, UI).
Finally, I have section “Address” with the same named component. The address component includes the user's contact information and uses Uniform Resource Identifier schemes.

Now let's take a closer look at stage 2 – implementing advanced functionality, integrating with a mock API, setting up quality gates based on unit tests.
I needed advanced functionality for components Timeline and Expertize. I added data loading with loading status for both components, and Skillsform component for Expertize component to add new skills. That’s why I used the next tools. I added a state management system based on Redux Toolkit. Implement server logic based on MirageJS. I added validation to the Skillsform component using the Formik library. Users is able to see the loading status while component data is loading. Loading is represented by an animated loading icon and a white transparent background. The user sees the error message if the timeline's educational data doesn't load.
Adding a new skill is done using a form. To open the form, the user must click on the "Open Edit" button. By default, the form is hidden. To add a new skill, a user fills in the form fields and submit the form. Form fields pass all required Formik validation. The "Submit form" button is disabled if the form is invalid. To store data in the application, I use localStorage. The form is reset to the default state after successfully submitting the data.

And, finally, I used Jest and React Testing Library to make unit tests for components and added test execution on Git pre-push using the Husky.

## Additional Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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
