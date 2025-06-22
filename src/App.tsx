import TaskItem from './components/TaskList/TaskItem';

function App() {
  // Create some sample tasks to test our component
  const sampleTasks = [
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
  ];

  // These functions will handle the button clicks
  // For now, they just show alerts - later we'll make them actually work
  const handleToggleStatus = (taskId) => {
    alert(`Toggle status for task ${taskId}`);
  };

  const handleDeleteTask = (taskId) => {
    alert(`Delete task ${taskId}`);
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
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {sampleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;