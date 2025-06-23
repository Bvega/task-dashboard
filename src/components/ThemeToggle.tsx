import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 ease-in-out
                 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600
                 text-gray-800 dark:text-gray-200"
      aria-label="Toggle dark mode"
    >
      <div className="flex items-center space-x-2">
        <span className="text-lg">
          {isDark ? '☀️' : '🌙'}
        </span>
        <span className="text-sm font-medium">
          {isDark ? 'Light' : 'Dark'}
        </span>
      </div>
    </button>
  );
}

export default ThemeToggle;