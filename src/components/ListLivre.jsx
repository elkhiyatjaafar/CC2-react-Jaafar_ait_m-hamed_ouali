import React, { useState, useEffect } from "react";
import { fetchLivres } from "../services/api";
import { useEmprunt } from "../context/EmpruntContext";
import Message from "./Message";

const ListLivre = () => {
  const [livres, setLivres] = useState([]);
  const { empruntLivre, message, setMessage, loading, setLoading } = useEmprunt();

  useEffect(() => {
    const getLivres = async () => {
      setLoading(true);
      try {
        const data = await fetchLivres();
        setLivres(data);
      } catch (error) {
        setMessage("Erreur lors du chargement des livres");
      } finally {
        setLoading(false);
      }
    };
    getLivres();
  }, [setMessage, setLoading]);

  const handleEmprunt = (livre) => {
    empruntLivre(livre);
    setLivres((prevLivres) =>
      prevLivres.map((l) =>
        l.id === livre.id ? { ...l, disponible: false } : l
      )
    );
  };

  if (loading) return <div className="text-center py-4">Chargement...</div>;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Liste des Livres</h2>
      {message && <Message text={message} />}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Titre</th>
            <th className="border px-4 py-2 text-left">Auteur</th>
            <th className="border px-4 py-2 text-left">Disponibilité</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre) => (
            <tr key={livre.id}>
              <td className="border px-4 py-2">{livre.titre}</td>
              <td className="border px-4 py-2">{livre.auteur}</td>
              <td className="border px-4 py-2">
                {livre.disponible ? "Disponible" : "Emprunté"}
              </td>
              <td className="border px-4 py-2">
                {livre.disponible && (
                  <button
                    onClick={() => handleEmprunt(livre)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Emprunter
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListLivre;
