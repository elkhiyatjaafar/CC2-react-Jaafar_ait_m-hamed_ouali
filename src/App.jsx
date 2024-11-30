import React from "react";
import { EmpruntProvider } from "./context/EmpruntContext";
import ListLivre from "./components/ListLivre";
import LivresEmpruntes from "./components/LivresEmpruntes";

function App() {
  return (
    <EmpruntProvider>
      <div className="min-h-screen flex flex-col items-center py-10 bg-gray-100">
        <div className="w-full max-w-4xl bg-white p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Bibliothèque React
          </h1>
          <ListLivre />
          <div className="mt-8">
            <LivresEmpruntes />
          </div>
        </div>
      </div>
    </EmpruntProvider>
  );
}

export default App;
