import React from "react";
import { useEmprunt } from "../context/EmpruntContext";

const LivresEmpruntes = ({ livres, setLivres }) => {
  const { emprunts, returnLivre } = useEmprunt();

  const handleReturn = (livre) => {
    returnLivre(livre.id);

    // Mettre à jour localement l'état pour rendre le livre disponible
    setLivres((prevLivres) =>
      prevLivres.map((l) =>
        l.id === livre.id ? { ...l, disponible: true } : l
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Livres Empruntés</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Titre</th>
            <th className="border px-4 py-2 text-left">Auteur</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {emprunts.map((livre) => (
            <tr key={livre.id}>
              <td className="border px-4 py-2">{livre.titre}</td>
              <td className="border px-4 py-2">{livre.auteur}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleReturn(livre)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Rendre
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivresEmpruntes;
