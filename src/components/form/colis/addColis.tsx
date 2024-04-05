"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { use, useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useForm, SubmitHandler } from "react-hook-form";

type colis = {
  weight: string;
  destination: string;
  stockId: string;
  address: string;
};

type stock = {
  id: number;
  name: string;
};

const AddColis = () => {
  const [stocks, setStocks] = useState<stock[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<colis>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/Stocks")
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error(`Erreur lors de la récupération des colis : ${error}`);
      });
  }, []);

  const onSubmit: SubmitHandler<colis> = (data) => {
    const colis = {
      address: data.address,
      weight: parseInt(data.weight),
      destination: data.destination,
      stockId: data.stockId,
    };

    axios
      .post("http://localhost:3000/addColis", colis)
      .then((res) => console.log(res.data));
  };

  const selectIdStock = useRef(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md m-auto py-10 ">
      <div className="mb-4">
        <label>
          Adresse :
          <Input type="text" {...register("address")} />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Poids :
          <Input type="text" {...register("weight")} />
        </label>
      </div>
      <div className="mb-4">
        <label>
          Destination :
          <Input type="text" {...register("destination")} />
        </label>
      </div>
      <div className="mb-4">
        <Select {...register("stockId")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="stock" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Votre stock:</SelectLabel>
              {stocks.map((stock: stock) => (
                <SelectItem key={stock.id} value={stock.id.toString()}>
                  {stock.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center m-auto justify-between">
        <Button type="submit" variant={"default"} className="m-auto">
          Enregistrer
        </Button>
      </div>
    </form>
  );
};
export default AddColis;
