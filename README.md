# Task Management Dashboard

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS. Create, organize, and track your tasks with an intuitive and beautiful interface.

## 🌐 Live Demo

**[View Live Application](https://Bvega.github.io/task-dashboard)**

## ✨ Features

### Core Functionality
- **Create Tasks** - Add new tasks with title, description, and priority levels
- **Task Management** - Mark tasks as complete, incomplete, or in-progress
- **Delete Tasks** - Remove individual tasks or bulk delete all completed tasks
- **Priority System** - Organize tasks by priority (Low, Medium, High) with color coding
- **Task Statistics** - Real-time counters for total, in-progress, and completed tasks

### User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback** - Strikethrough completed tasks with clear status indicators
- **Form Validation** - Input validation with user-friendly error messages
- **Confirmation Dialogs** - Prevent accidental deletions with confirmation prompts
- **Smooth Animations** - Hover effects and transitions for better interaction

### Technical Features
- **TypeScript** - Full type safety and enhanced developer experience
- **Component Architecture** - Modular, reusable React components
- **State Management** - Efficient state handling with React hooks
- **Modern Styling** - Tailwind CSS for responsive and consistent design

## 🚀 Technologies Used

### Frontend
- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **GitHub Pages** - Automated deployment and hosting

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bvega/task-dashboard.git
   cd task-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🎯 Usage Guide

### Creating Tasks
1. Click the **"+ Add New Task"** button
2. Fill in the task details:
   - **Title** (required) - Brief description of the task
   - **Description** (optional) - Additional details
   - **Priority** - Choose from Low, Medium, or High
3. Click **"Create Task"** to add it to your list

### Managing Tasks
- **Complete Task** - Click the "Complete" button to mark as done
- **Undo Completion** - Click "Undo" to mark a completed task as incomplete
- **Delete Task** - Click the "Delete" button and confirm to remove
- **Bulk Delete** - Use "Delete Completed" to remove all finished tasks

### Visual Indicators
- **Priority Colors** - Left border indicates priority (Red=High, Yellow=Medium, Green=Low)
- **Status Badges** - Color-coded status indicators with icons
- **Completed Tasks** - Strikethrough text and checkmark icons
- **Task Statistics** - Header shows real-time counts

## 🏗️ Project Structure

```
task-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── TaskList/
│   │       └── TaskItem.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using the `gh-pages` package.

### Deploy Updates
```bash
# Deploy latest changes
npm run deploy
```

The deployment process:
1. Builds the production version
2. Creates/updates the `gh-pages` branch
3. Pushes built files to GitHub Pages
4. Updates the live site automatically

## 🎨 Design Decisions

### Color Scheme
- **Primary**: Blue tones for actions and navigation
- **Success**: Green for completed tasks and positive actions
- **Warning**: Yellow/Orange for medium priority and in-progress tasks
- **Danger**: Red for high priority and delete actions
- **Neutral**: Gray tones for text and secondary elements

### Typography
- **Headings**: Bold, clear hierarchy for easy scanning
- **Body Text**: Readable font sizes with proper contrast
- **Interactive Elements**: Medium weight for buttons and links

### Layout
- **Card-based Design**: Each task is contained in a clean card
- **Responsive Grid**: Adapts to different screen sizes
- **Consistent Spacing**: Uniform margins and padding throughout

## 🛠️ Customization

### Adding New Features
The component structure makes it easy to extend functionality:

- **New Task Properties** - Update the `Task` interface in `App.tsx`
- **Additional Components** - Add new components in `src/components/`
- **Styling Changes** - Modify Tailwind classes or add custom CSS

### Configuration
- **Base URL** - Update `vite.config.ts` for different deployment paths
- **Styling** - Customize `tailwind.config.js` for design system changes
- **Build Settings** - Modify `package.json` scripts for different workflows

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm install`
- Clear cache and rebuild: `rm -rf dist && npm run build`

**Deployment Issues**
- Check GitHub Pages settings in repository
- Verify `homepage` URL in `package.json`
- Ensure `gh-pages` branch exists and is up to date

**Styling Problems**
- Verify Tailwind CSS is properly configured
- Check `postcss.config.js` configuration
- Ensure all CSS imports are correct

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📈 Future Enhancements

### Planned Features
- **Task Categories** - Organize tasks by project or category
- **Due Dates** - Add deadline tracking and reminders
- **Task Search** - Search and filter tasks by various criteria
- **Data Persistence** - Save tasks to localStorage or database
- **Dark Mode** - Toggle between light and dark themes
- **Task Export** - Export tasks to PDF or CSV formats

### Technical Improvements
- **Unit Tests** - Add comprehensive test coverage
- **Performance Optimization** - Implement virtual scrolling for large lists
- **Accessibility** - Enhanced screen reader support and keyboard navigation
- **PWA Features** - Add offline support and mobile app capabilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bvega**
- GitHub: [@Bvega](https://github.com/Bvega)
- Project Link: [https://github.com/Bvega/task-dashboard](https://github.com/Bvega/task-dashboard)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the fast build tool and development experience
- **GitHub Pages** - For free and reliable hosting

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*