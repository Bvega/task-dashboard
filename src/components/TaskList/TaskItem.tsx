// This is our first real component!
// It takes a task object and displays it nicely

function TaskItem({ task, onToggleStatus, onDelete }) {
  // This function determines what color to use based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  // This function determines what to show for each status
  const getStatusDisplay = (status) => {
    switch (status) {
      case 'completed': return '✅ Completed';
      case 'in-progress': return '🔄 In Progress';
      case 'todo': return '📋 To Do';
      default: return status;
    }
  };

  return (
    <div className={`
      p-4 rounded-lg border-l-4 shadow-sm bg-white mb-3
      ${getPriorityColor(task.priority)}
      ${task.status === 'completed' ? 'opacity-75' : ''}
      hover:shadow-md transition-shadow duration-200
    `}>
      {/* Task header with title and priority */}
      <div className="flex justify-between items-start mb-2">
        <h3 className={`
          font-semibold text-lg text-gray-900
          ${task.status === 'completed' ? 'line-through text-gray-500' : ''}
        `}>
          {task.title}
        </h3>
        
        <span className={`
          px-2 py-1 text-xs font-medium rounded-full
          ${task.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
          ${task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
          ${task.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
        `}>
          {task.priority}
        </span>
      </div>

      {/* Task description */}
      <p className={`
        text-gray-600 mb-3
        ${task.status === 'completed' ? 'line-through' : ''}
      `}>
        {task.description}
      </p>

      {/* Status and actions */}
      <div className="flex justify-between items-center">
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${task.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
          ${task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : ''}
          ${task.status === 'todo' ? 'bg-blue-100 text-blue-800' : ''}
        `}>
          {getStatusDisplay(task.status)}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onToggleStatus(task.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                       transition-colors duration-200 text-sm"
          >
            {task.status === 'completed' ? 'Undo' : 'Complete'}
          </button>
          
          <button
            onClick={() => onDelete(task.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 
                       transition-colors duration-200 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Creation date */}
      <div className="mt-2 text-xs text-gray-500">
        Created: {task.createdAt.toLocaleDateString()}
      </div>
    </div>
  );
}

export default TaskItem;