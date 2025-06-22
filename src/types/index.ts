// This is like a blueprint for what a Task looks like
export interface Task {
  id: string;           // Unique identifier (like "task_123")
  title: string;        // Task name (like "Buy groceries")
  description: string;  // More details (like "Buy milk, bread, eggs")
  status: TaskStatus;   // Current state (todo, in-progress, completed)
  priority: TaskPriority; // How important (low, medium, high)
  createdAt: Date;      // When it was created
  updatedAt: Date;      // When it was last changed
  dueDate?: Date;       // When it's due (? means optional)
}

// These are the only allowed values for status
export type TaskStatus = 'todo' | 'in-progress' | 'completed';

// These are the only allowed values for priority  
export type TaskPriority = 'low' | 'medium' | 'high';

// Theme for dark/light mode
export type ThemeMode = 'light' | 'dark';

// Props are data we pass to components
// These define what each component expects to receive

export interface TaskItemProps {
  task: Task;                              // The task data
  onToggleStatus: (id: string) => void;    // Function to change status
  onDelete: (id: string) => void;          // Function to delete task
  onEdit: (task: Task) => void;            // Function to edit task
}

export interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  initialTask?: Task;     // Optional - for editing existing tasks
  onCancel: () => void;   // Function to cancel form
}

export interface TaskFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  onSearchChange: (search: string) => void;
  activeFilters: FilterOptions;
  searchTerm: string;
}
// How we want to filter and sort tasks
export interface FilterOptions {
  status: TaskStatus | 'all';           // Filter by status or show all
  priority: TaskPriority | 'all';       // Filter by priority or show all
  sortBy: 'createdAt' | 'dueDate' | 'priority' | 'title';
  sortOrder: 'asc' | 'desc';            // Ascending or descending
}

// Form data (what the user types in)
export interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;        // Forms give us strings, we convert to Date later
}

// Form validation errors
export interface ValidationErrors {
  title?: string;         // Error message for title (if any)
  description?: string;   // Error message for description (if any)
  dueDate?: string;       // Error message for due date (if any)
}
// How we want to filter and sort tasks
export interface FilterOptions {
  status: TaskStatus | 'all';           // Filter by status or show all
  priority: TaskPriority | 'all';       // Filter by priority or show all
  sortBy: 'createdAt' | 'dueDate' | 'priority' | 'title';
  sortOrder: 'asc' | 'desc';            // Ascending or descending
}

// Form data (what the user types in)
export interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;        // Forms give us strings, we convert to Date later
}

// Form validation errors
export interface ValidationErrors {
  title?: string;         // Error message for title (if any)
  description?: string;   // Error message for description (if any)
  dueDate?: string;       // Error message for due date (if any)
}