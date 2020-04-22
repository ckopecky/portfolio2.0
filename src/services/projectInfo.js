import { CineViewImages, SortingHatImages, GoogleCloneImages, InstaCloneImages, BreakoutImages, LambdaNotesImages }from './imageImports';
import 'dotenv/config';

export const CineView = {
    name: "CineView",
    images: [CineViewImages[0], CineViewImages[1]],
    github: process.env.REACT_APP_GITHUB_CINEVIEW,
    deploy: process.env.REACT_APP_DEPLOY_CINEVIEW,
    description: "An application that allows a community of movie watchers to read and write reviews on movies.",
    techStack: "PostgreSQL, Express, React, Node"
}

export const GoogleClone = {
    name: "GoogleClone",
    images: GoogleCloneImages,
    github: process.env.REACT_APP_GITHUB_GOOGLE_CLONE,
    deploy: process.env.REACT_APP_DEPLOY_GOOGLE_CLONE,
    description: "An exercise in React UI -- a functional Google Clone Search page.",
    techStack: "React"
}

export const InstaClone = {
    name: "InstaClone",
    images: InstaCloneImages,
    github: process.env.REACT_APP_GITHUB_INSTACLONE,
    deploy: process.env.REACT_APP_DEPLOY_INSTACLONE,
    description: "An exercise in User Interface development, Higher Order Components and Search/Create functionality using React -- an Instagram Clone.",
    techStack: "React"
}

export const Breakout = {
    name: "Breakout Clone",
    images: BreakoutImages,
    github: process.env.REACT_APP_GITHUB_BREAKOUT,
    deploy: null,
    description: "An exercise in Python toy game development -- a Breakout Clone.",
    techStack: "Pygame, Python"
}

export const LambdaNotes = {
    name: "Lambda Notes",
    images: LambdaNotesImages,
    github: process.env.REACT_APP_GITHUB_LAMBDA_NOTES,
    deploy: process.env.REACT_APP_DEPLOY_LAMBDA_NOTES,
    description: "Full-Stack Application created from client-designed wireframes.",
    techStack: "MongoDB, Express, React, Node"
}

export const SortingHat = {
    name: "Sorting Hat",
    images: [SortingHatImages[0]],
    github: process.env.REACT_APP_GITHUB_SORTING_HAT,
    deploy: process.env.REACT_APP_DEPLOY_SORTING_HAT,
    description: "You've been accepted to wizarding school! Take the quiz to be sorted into your house.",
    techStack: "React"

}