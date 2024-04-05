"use client"
import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {

  const [colis, setColis] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/colis')
      .then(response => {
        setColis(response.data);
      })
      .catch(error => {
        console.error(`Erreur lors de la récupération des colis : ${error}`);
      });
  }, []);

  
  console.log(colis);

  return (
    <main className="">
<div className='flex justify-between '>
        <div> <h1>Liste des colis</h1></div>
<div>
<Link href={"/colis/add"}>
<Button>Ajouter un colis</Button>
</Link>

</div>
</div>


<div className="grid grid-cols-4">
   {colis.map((colis, index) => (

     <div key={index} className="border border-gray-300 rounded-lg p-4 m-4">
           <Link href={`/colis/${colis.id}`}>
         <h2 className="mb-2">address: {colis.address}</h2>
         <p className="mb-2">poids: {colis.weight}</p>
         <p className="mb-2">destination: {colis.destination}</p>
    </Link>
       </div>
      ))}


</div>



    </main>
  );
}
