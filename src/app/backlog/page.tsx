"use client";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { use, useEffect, useState } from "react";

type stock = {
  id: number;
  name: string;
  stock: number;
};
const StockPage = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/stocks")
      .then((response) => {
        setStock(response.data);
      })
      .catch((error) => {
        console.error(`Erreur lors de la récupération des colis : ${error}`);
      });
  }, []);

  return (
    <main className="">
      <div className="flex justify-between py-4">
        <div>
          {" "}
          <Title>Liste des Stockages</Title>
        </div>
        <div>
          <Link href={"/backlog/add"}>
            <Button>Ajouter un stockage</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        {stock.map((stock: stock, index) => (
          <div key={index} className="border  border-gray-300 rounded-lg p-4 ">
            <div className="flex justify-between">
              <div>
                <h2 className="mb-2">name: {stock.name}</h2>
              </div>
              <div>
                <p className="mb-2 bg-green-100 p-1.5 rounded-lg">
                  stock: {stock.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default StockPage;
