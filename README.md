# Portfolio Site
Portolio Landing Page
<img src="./src/assets/Screen Shot 2020-08-03 at 9.52.36 AM.png" align="right">


Portfolio Project Cards
<img src="./src/assets/Screen Shot 2020-08-03 at 9.57.13 AM.png" />

Portfolio Theme Change
<img src="./src/assets/Screen Shot 2020-08-03 at 9.53.48 AM.png" />

### Deployment

Client: [Christina Kopecky Portfolio](http://christinakopecky.com/)

#### Frontend Built Using:

- React.js
- Dependencies:

    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [react](https://reactjs.org/docs/getting-started.html)
    - [react-router-dom](https://www.npmjs.com/package/react-router-dom)

- Heroku
    - [https://www.heroku.com/](https://www.heroku.com/)

#### Environmental Variables:
    ##### Frontend Variables:
    REACT_APP_TWITTER_URL=URL to your twitter
    REACT_APP_GITHUB_URL=URL to your github
    REACT_APP_LINKEDIN_URL=URL to your linked in profile
    REACT_APP_FORMSPREE_URI=https://formspree.io/your-email

Environmental variables are also used to point to the Github Repo and the Deployed Site for each of the portfolio pieces so that information is not in the code. Use the prefix `REACT_APP_` + whatever you want to call your variable to use environmental variables in a React application and just be sure that those vars match in your code. 

<p align="center"><a href="#"><strong>Back To Top</strong></a></p>

##### Using the Application

Requirements: 
- Node
- Package Manager (such as Yarn or npm)
    - [**Yarn**](https://yarnpkg.com/en/) was used to build this project.

Have Node? Have **Yarn** or **npm**?
Follow these steps:

1. Fork and clone repo

2. Add an `.env` file to the client side at the root of the folder (same level as the `package.json` file). 

3. Add environmental variables for the frontend. 

4. Run `yarn install` to install the necessary node_modules on the frontend. 

6. Run `yarn start` to run the frontend on `localhost:3000`

7. Your application is now running and can be tested locally. 

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 
