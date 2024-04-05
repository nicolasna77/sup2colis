"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
   name: string,
    stock: number,
  }
const AddStock = () => {

    const { register, handleSubmit,  formState: { errors },  } = useForm<Inputs>();
   
   
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
           const stock =  {
        name: data.name,
        stock: parseInt(data.stock),
        
    };
    
    console.log(stock);
    axios.post('http://localhost:3000/addstock', stock)
      .then(res => console.log(res.data));

  };
  
 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            type="text"
            placeholder="Stock Name"
            {...register("name")}
        />
    
        <Input
            type="number"
            placeholder="Stock Price"
            {...register("stock")}
        />
    
        <Button type="submit">Add Stock</Button>
        </form>
    );

    };
    export default AddStock;


