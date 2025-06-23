import { useState } from 'react';
import TaskItem from './components/TaskList/TaskItem';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Learn React",
      description: "Understanding components, props, and state",
      status: "in-progress",
      priority: "high",
      createdAt: new Date("2024-06-20"),
    },
    {
      id: "2", 
      title: "Build Task Dashboard",
      description: "Create a full-featured task management application",
      status: "todo",
      priority: "medium",
      createdAt: new Date("2024-06-21"),
    },
    {
      id: "3",
      title: "Learn TypeScript",
      description: "Understanding types and interfaces",
      status: "completed",
      priority: "low",
      createdAt: new Date("2024-06-19"),
    }
  ]);

  // Form state for creating new tasks
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  });

  const handleToggleStatus = (taskId: string) => {
    setTasks(currentTasks => 
      currentTasks.map(task => {
        if (task.id === taskId) {
          const newStatus = task.status === 'completed' ? 'todo' : 'completed';
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(currentTasks => 
        currentTasks.filter(task => task.id !== taskId)
      );
    }
  };

  // Delete all completed tasks
  const handleDeleteCompleted = () => {
    const completedCount = tasks.filter(t => t.status === 'completed').length;
    if (completedCount === 0) {
      alert('No completed tasks to delete!');
      return;
    }
    
    if (window.confirm(`Delete all ${completedCount} completed tasks?`)) {
      setTasks(currentTasks => 
        currentTasks.filter(task => task.status !== 'completed')
      );
    }
  };

  // Add new task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a task title!');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: 'todo',
      priority: formData.priority,
      createdAt: new Date(),
    };

    setTasks(currentTasks => [...currentTasks, newTask]);
    
    // Reset form
    setFormData({ title: '', description: '', priority: 'medium' });
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Task Management Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your tasks efficiently with this beautiful interface
          </p>
          
          {/* Task Statistics */}
          <div className="mt-4 flex gap-6 text-sm">
            <span className="text-blue-600">
              Total: {tasks.length}
            </span>
            <span className="text-yellow-600">
              In Progress: {tasks.filter(t => t.status === 'in-progress').length}
            </span>
            <span className="text-green-600">
              Completed: {tasks.filter(t => t.status === 'completed').length}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                         transition-colors duration-200 font-medium"
            >
              {showForm ? 'Cancel' : '+ Add New Task'}
            </button>
            
            {tasks.filter(t => t.status === 'completed').length > 0 && (
              <button
                onClick={handleDeleteCompleted}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
                           transition-colors duration-200 font-medium"
              >
                Delete Completed ({tasks.filter(t => t.status === 'completed').length})
              </button>
            )}
          </div>
        </div>

        {/* Add Task Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Create New Task
            </h2>
            
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter task title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter task description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 
                             transition-colors duration-200 font-medium"
                >
                  Create Task
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 
                             transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Task List */}
        <div className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">No tasks yet! 🎉</p>
              <p className="text-gray-400">Click "Add New Task" to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;