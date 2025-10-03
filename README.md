# Todo List Manager

A modern, responsive Todo List application built with React and Bootstrap. This application provides an intuitive interface for managing your daily tasks with features like adding, editing, deleting, and marking tasks as complete.

## Features

### 🎨 Modern UI Design
- **Bootstrap Framework Integration**: Leverages Bootstrap 5 for a clean, professional look
- **Responsive Grid System**: Adapts seamlessly to different screen sizes
- **Gradient Background**: Eye-catching purple gradient background for visual appeal
- **Card-Based Layout**: Tasks are displayed in elegant cards with smooth transitions

### ✨ Core Functionality
- **Add Tasks**: Create new tasks using a modal dialog with form validation
- **Edit Tasks**: Modify existing tasks through an intuitive edit modal
- **Delete Tasks**: Remove tasks with a single click
- **Complete/Uncomplete Tasks**: Toggle task completion status by clicking on the task
- **Task Statistics**: Real-time badges showing total, completed, and pending tasks
- **Persistent Storage**: Tasks are saved to localStorage for data persistence

### 🎯 Enhanced User Experience
- **Modal Dialogs**: Clean modal interfaces for adding and editing tasks
- **Icon Integration**: React Icons (Font Awesome) for better visual communication
- **Tooltips**: Helpful tooltips on buttons for better usability
- **Hover Effects**: Smooth animations and hover effects on interactive elements
- **Visual Feedback**: Completed tasks are styled with strikethrough and checkmark icons
- **Empty State**: Friendly message when no tasks exist

### 📱 Fully Responsive
- **Mobile First**: Optimized for mobile devices (smartphones)
- **Tablet Support**: Perfect layout for tablets
- **Desktop View**: Full-featured experience on desktop screens
- **Flexible Layout**: Components adapt based on screen size

### 🧭 Navigation & Footer
- **Navigation Bar**: Professional navbar with branding and icon
- **Footer**: Copyright information and technology credits
- **Consistent Branding**: Unified color scheme and typography throughout

## Screenshots

### Desktop View - Empty State
![Empty State](https://github.com/user-attachments/assets/0e2712e2-6aa3-498e-9450-ba6f37b9a4f4)
*Clean interface showing the empty state with call-to-action*

### Add Task Modal
![Add Task Modal](https://github.com/user-attachments/assets/e57281eb-3b7a-44dd-8aa4-7b2d946c186b)
*Modal dialog for adding new tasks with gradient header*

### Tasks List View
![Tasks List View](https://github.com/user-attachments/assets/33e51e91-da61-4bb3-8952-4a5b2aacdf89)
*Multiple tasks displayed with edit and delete buttons, plus task statistics*

### Completed Task View
![Completed Task View](https://github.com/user-attachments/assets/2211de6b-b126-4d9e-aea7-c226d7e28913)
*Task marked as complete with checkmark icon and strikethrough styling*

### Edit Task Modal
![Edit Task Modal](https://github.com/user-attachments/assets/16aa6f3c-2740-4b83-bab0-0263a0d2f28c)
*Modal dialog for editing existing tasks*

## Technology Stack

- **React 18.2.0**: Modern React with hooks
- **Bootstrap 5**: UI framework for responsive design
- **React-Bootstrap**: React components for Bootstrap
- **React Icons**: Icon library with Font Awesome icons
- **React Scripts 5.0.1**: Build tooling and development server
- **localStorage API**: Client-side data persistence

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hunglc-dev/todo-list.git
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

## Project Structure

```
todo-list/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Footer.js       # Footer component with copyright
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── TodoItem.js     # Individual todo item with edit modal
│   │   └── TodoList.js     # Todo list container with add modal
│   ├── hooks/
│   │   └── useTodos.js     # Custom hook for todo logic
│   ├── pages/
│   │   └── Home.js         # Home page component
│   ├── styles/
│   │   └── App.css         # Custom styles and enhancements
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Component Overview

### Navbar
- Displays application branding with icon
- Primary blue background with white text
- Responsive navigation bar

### TodoList
- Contains the add task button and modal
- Displays task statistics badges (Total, Completed, Pending)
- Shows empty state when no tasks exist
- Lists all todo items

### TodoItem
- Displays individual task with completion status
- Click on task to toggle completion
- Edit button opens edit modal
- Delete button removes the task
- Hover effects for better UX

### Footer
- Dark footer with copyright information
- Technology credits
- Responsive design

## Customization

### Colors
The application uses a gradient color scheme. You can customize colors in `src/styles/App.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Can be modified in the `body` background property

### Fonts
Current font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Change in `src/styles/App.css` under the `body` selector

### Icons
Icons are from React Icons (Font Awesome). You can change them by importing different icons from the `react-icons` library.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

hunglc-dev

## Acknowledgments

- Bootstrap team for the excellent UI framework
- React team for the amazing library
- Font Awesome for the icon set
