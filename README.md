# React Todo App

A simple and clean Todo List application built with React and Tailwind CSS. This app allows users to add tasks, mark them as completed or undo completion, and delete tasks. It uses React Hooks (`useState`) for state management and follows a minimal, responsive UI design.

## Features

* Add new todo items
* Prevent empty submissions
* Mark tasks as completed / undo completion
* Delete tasks
* New tasks appear at the top
* Responsive and modern UI using Tailwind CSS

## Tech Stack

* React (Functional Components)
* React Hooks (`useState`)
* Tailwind CSS
* Remix Icons

## How It Works

* Each todo item is stored as an object with `id`, `text`, and `completed` state
* `Date.now()` is used to generate unique IDs
* Conditional styling is applied based on completion status

## Installation

```bash
npm install
npm run dev
```

## Usage

1. Type a task in the input field
2. Click **Add Item**
3. Use **Complete/Undo** to toggle task status
4. Click the delete icon to remove a task

## Future Improvements

* Persist data using localStorage
* Edit existing todos
* Add filters (All / Completed / Pending)

## Author

Built by the project author as a React practice application.
