"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "@/components/ui/title";

type colis = {
  colis: {
    id: number;
    weight: number;
    destination: string;
    address: string;
  };
  stock: {
    id: number;
    name: string;
  };
};

const DetailColisPage = ({
  params: { slug },
}: {
  params: { slug: number };
}) => {
  const [colis, setColis] = useState<colis>();
  const id = slug;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/colis/${id}`)
      .then((response) => {
        setColis(response.data);
      })
      .catch((error) => {
        console.error(`Erreur lors de la récupération des colis : ${error}`);
      });
  }, [id]);
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl m-4 p-4">
      <Title back>Detail du colis</Title>
      {colis && colis.colis != null ? (
        <>
          <hr />
          <div className="text-xl mt-4 mb-2">
            Adresse : {colis.colis.address}
          </div>
          <div className="text-xl mb-2">
            Adresse du destination : {colis.colis.destination}
          </div>
          <div className="text-xl mb-2">Poids : {colis.colis.weight}</div>
          <hr />
          {colis.stock != null ? (
            <div className="text-xl mb-2">Stock : {colis.stock.name}</div>
          ) : (
            <div className="text-xl mb-2">Pas de stock associé</div>
          )}
        </>
      ) : (
        <div className="text-xl mb-2">Chargement...</div>
      )}
    </div>
  );
};

export default DetailColisPage;
