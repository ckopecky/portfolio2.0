import 'dotenv/config'

//anytime you add env vars to an env file and your local server is running, you must restart your frontend to incorporate the change

export const twitterUrl = process.env.REACT_APP_TWITTER_URL;
export const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;
export const githubUrl = process.env.REACT_APP_GITHUB_URL;