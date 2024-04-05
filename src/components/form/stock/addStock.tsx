"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  stock: number;
};
const AddStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const stock = {
      name: data.name,
      stock: parseInt(data.stock.toString()),
    };

    console.log(stock);
    axios
      .post("http://localhost:3000/addstock", stock)
      .then((res) => console.log(res.data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md m-auto py-10">
      <div className="mb-4">
        <Input type="text" placeholder="Name" {...register("name")} />
      </div>
      <div className="mb-4">
        <Input type="number" placeholder="stock" {...register("stock")} />
      </div>
      <div className="flex items-center m-auto justify-between">
        <Button type="submit" className="m-auto">
          Add Stock
        </Button>
      </div>
    </form>
  );
};
export default AddStock;
