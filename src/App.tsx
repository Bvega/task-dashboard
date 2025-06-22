function App() {
  // Create a sample task as a plain JavaScript object
  const sampleTask = {
    id: "1",
    title: "Learn TypeScript",
    description: "Understanding types and interfaces",
    status: "in-progress",
    priority: "high",
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: new Date("2024-12-31")
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Task Management Dashboard
        </h1>
        
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="font-semibold text-lg">{sampleTask.title}</h2>
          <p className="text-gray-600">{sampleTask.description}</p>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
              {sampleTask.status}
            </span>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
              {sampleTask.priority}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Created: {sampleTask.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;