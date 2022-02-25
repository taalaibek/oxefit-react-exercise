# Welcome

This repository contains an incomplete React project meant for the use of demonstrating an OxeFit Front End Developer candidate's skills.

## Instructions

The goal of this exercise is to demonstrate skills such as acclimating and conforming to standards set in a new software project, code organization, as well as understanding and satiating Acceptance Criteria.

To perform this exercise:

1. Clone the repository
2. Branch off of `main` with a descriptive feature branch
3. Display your ability to maintain a clean version history with descriptive, clear, and concise commits
4. When complete, reply to the E-mail you received with either a link to a public repository hosting your solution or some other means of accessing the completed code.

The completed exercise will be discussed during a follow up technical interview.

## Acceptance Criteria

This application is meant to function as a single todo list with a toggle meant to simulate different types of users with different roles within the app. 
1. An Author can read/write to the todo list.
2. A Viewer can only read the todo list.

The application is missing some features, which will need to be implemented:
1. Each todo item should be editable if and only if 'Author' is selected.
2. Each todo item should be able to be completed if and only if 'Author' is selected.
3. Items should be able to be added to the todo list if and only if 'Author' is selected. 
4. If 'Viewer' is selected, then it should be made clear that each of the above actions are only permitted to an Author

## More Information

Notice, that `react-query` is used for querying, mutating, and caching API queries. Each query/mutation should be organized in `src/data/todos-data.ts`.

React query: https://react-query.tanstack.com/

The UI library in use is Ant Design: https://ant.design/

The API is mocked using `axios-mock-adapter`, so API requests won't be viewable in a browser's DevTools, but feel free to add log statements if need be.

The API client implementations are found in `src/mock-api/` These should not need to be changed for any reason. However, if you discover a problem, please reach out for assistance.

## Running the App

Install dependencies: `npm ci`

To run: `npm run dev`

URL: `http://localhost:3000`