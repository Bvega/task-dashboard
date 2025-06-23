interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

interface TaskItemProps {
  task: Task;
  onToggleStatus: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

function TaskItem({ task, onToggleStatus, onDelete }: TaskItemProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-300';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'todo': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'todo': return 'To Do';
      default: return status;
    }
  };

  // Check if task is completed for styling
  const isCompleted = task.status === 'completed';

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${getPriorityColor(task.priority)} 
                     transition-all duration-300 hover:shadow-lg ${isCompleted ? 'opacity-80' : ''}`}>
      {/* Header with title and priority */}
      <div className="flex justify-between items-start mb-3">
        <h3 className={`text-xl font-semibold text-gray-800 ${isCompleted ? 'line-through' : ''}`}>
          {task.title}
        </h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityBadgeColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <p className={`text-gray-600 mb-4 ${isCompleted ? 'line-through opacity-70' : ''}`}>
        {task.description}
      </p>

      {/* Status and Date */}
      <div className="flex justify-between items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
          {isCompleted ? '✅' : '📋'} {getStatusDisplay(task.status)}
        </span>
        <span className="text-sm text-gray-500">
          Created: {formatDate(task.createdAt)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onToggleStatus(task.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            task.status === 'completed'
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {task.status === 'completed' ? 'Undo' : 'Complete'}
        </button>
        
        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium 
                     transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;