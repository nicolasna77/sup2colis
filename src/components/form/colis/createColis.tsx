"use client"

import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../ui/select';
import { createKey } from 'next/dist/shared/lib/router/router';

type Stock = {
  id: number,
  name: string,
  stock: number,
}

const CreateColis = () => {
    const [address, setAddress] = useState('');
    const [weight, setWeight] = useState('');
    const [destination, setDestination] = useState('');
    const [stocks, setStocks] = useState<Stock[]>([]);



    useEffect(() => {
      axios.get('http://localhost:3000/Stocks')
        .then(response => {
          setStocks(response.data);
        })
        .catch(error => {
          console.error(`Erreur lors de la récupération des colis : ${error}`);
        });
    }, []);


console.log(stocks);
    const handleSubmit = (event:any) => {
        const colis =  {
            address: address,
            weight: parseInt(weight),
            destination : destination, 
        };
        
        console.log(colis);
        axios.post('http://localhost:3000/addColis', colis)
          .then(res => console.log(res.data));

      };


    return(

        <form onSubmit={handleSubmit} >
        <label>Adresse :
          <Input type="text" value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <label>Poids :
          <Input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
        </label>
        <label>Destination :
          <Input type="text" value={destination} onChange={e => setDestination(e.target.value)} />
        </label>


<Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="stock" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>votre stock:</SelectLabel>
        {stocks.map((stock) => (
          <SelectItem key={stock.id} value={stock.name}>{stock.name}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>


        
        <Button  type="submit" variant={"default"}>Enregistrer</Button>
      </form>


    )
}
export default CreateColis;