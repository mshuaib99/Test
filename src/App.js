import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Welcome to My React App</h1>
      <p className="text-lg">This site is deployed on GitHub Pages with a custom domain!</p>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Click Me ({count})
        </button>
      </div>
    </div>
  );
}