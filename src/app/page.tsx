"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

type colis = {
  id: number;
  weight: number;
  destination: string;
  address: string;
};

export default function Home() {
  const [colis, setColis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/colis")
      .then((response) => {
        setColis(response.data);
      })
      .catch((error) => {
        console.error(`Erreur lors de la récupération des colis : ${error}`);
      });
  }, []);

  console.log(colis);

  return (
    <main className="">
      <div className="flex justify-between ">
        <div>
          <Title>Liste des Colis</Title>
        </div>
        <div>
          <Link href={"/colis/add"}>
            <Button>Ajouter un colis</Button>
          </Link>
        </div>
      </div>

      <div className="grid py-4 grid-cols-2 md:grid-cols-4 gap-4">
        {colis.map((colis: colis, index) => (
          <div key={index} className="border  border-gray-300 rounded-lg p-4 ">
            <Link href={`/colis/${colis.id}`}>
              <h1 className="text-xl mb-2">Colis n°{colis.id}</h1>
              <hr />
              <div className="py-4">
                <p className="mb-2">Adresse de livraison: {colis.address}</p>
                <p className="mb-2">poids: {colis.weight}</p>
                <p className="mb-2">
                  Adresse de destination: {colis.destination}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
