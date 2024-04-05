"use client"

import React, { useEffect , useState} from 'react';
import axios from 'axios';



const DetailColisPage = ( {params: { slug }} ) => {
    const [colis, setColis] = useState([]);
    const id = slug;
    useEffect(() => {
        axios.get(`http://localhost:3000/colis/${id}`)
          .then(response => {
            setColis(response.data);
          })
          .catch(error => {
            console.error(`Erreur lors de la récupération des colis : ${error}`);
          });
      }, [id]);
      console.log(colis);
    return (
       <div>

         <h1>Detail du colis</h1>

         {colis != null ? (
      <><div>{colis.address}</div><div>{colis.destination}</div><div>{colis.weight}</div></>
    ) : (
      <div>Chargement...</div>
    )}
       </div>
      
    );
    }

    export default DetailColisPage;