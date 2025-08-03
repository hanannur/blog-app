# 📰 Personal Blog Application

This is a responsive and interactive blog application built with React. It allows users to view blog posts, bookmark their favorites, and create new posts through a dynamic form. The app emphasizes clean UI, persistent state management, and a smooth user experience.

## ✨ Features

- **View Blog Posts**: Browse detailed blog entries with author info, images, and full content.
- **Bookmarking**: Save your favorite blogs using a bookmark icon. Bookmarks persist across page refreshes using localStorage.
- **Create New Posts**: Use a modal form to add new blog entries with title, description, content, author name, date, and profile image.
- **Responsive Design**: Styled with Tailwind CSS for a modern and mobile-friendly layout.
- **Routing**: Navigate between pages using React Router (`Home`, `Blog Details`, `Bookmarks`).

## 🛠️ Technologies Used

- **React**: Component-based architecture for building the UI.
- **Jotai**: Lightweight state management for bookmarks.
- **React Router**: Handles navigation between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **localStorage**: Persists blog posts and bookmarks across sessions.

## 📦 Project Structure

- `components/`: Reusable UI components like `Navbar` and `BlogForm`.
- `pages/`: Main views including `Home`, `BlogDetail`, and `Bookmark`.
- `atoms/`: Jotai atoms for global state.
- `Data/`: Static or dynamic blog data source.

##  How It Works

1. **Home Page**: Displays all blog posts stored in localStorage.
2. **Blog Detail Page**: Shows full content of a selected blog.
3. **Bookmark Page**: Lists all bookmarked blogs.
4. **Post a Blog**: Opens a modal form to submit a new blog, which is saved to localStorage and rendered on the homepage.

## 📸 Screenshots

<img width="1311" height="619" alt="image" src="https://github.com/user-attachments/assets/0535602c-6c87-4498-9220-74eb335ae546" />


## What I Learned

- Managing global state with Jotai
- Persisting data with localStorage
- Building dynamic forms and handling user input
- Structuring a React project for scalability
- Designing clean and responsive layouts with Tailwind CSS

## Thinking to add

- Add delete functionality for blog posts
- Integrate backend for real-time data storage
- Add user authentication
- Improve accessibility and SEO

---


