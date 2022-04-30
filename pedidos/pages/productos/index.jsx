import Navbar from "../../components/Navbar";
import Typography from '@mui/material/Typography'
import style from './productos.module.scss'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Link from "next/link";


let data={hamburguesas:{id:1,nameCategory:"Hamburguesas",imageCategory:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",products:[{id:1,name:"big",image:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",description:"hambur copada"},{id:2,name:"hambur2",image:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",description:"2 copada"}]},pizzas:{id:2,nameCategory:"Pizzas",imageCategory:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",products:[{id:1,name:"pizza1",image:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",description:"pizza 1 descripcion"},{id:2,name:"pizza2",image:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",description:"pizza2sdaa"}]}};




export default function Productos() {
  let [product,setProduct] = useState("all");

  const readData=(id)=>{
    let res=[];
    for (const comida in data) {
      !id?
        res.push(
          <div className={style.cardProduct} onClick={()=>setProduct(data[comida].id)} key={uuidv4()}>
            <Image src={data[comida].imageCategory} alt="Comida" width={75} height={60} />
            <Typography variant="h6">
                {data[comida].nameCategory}
            </Typography>
          </div>
        )
      :
      (id==="all"||id===data[comida].id)&&
      data[comida].products.map(({id,name,image,description})=>{
        res.push(
          <div key={uuidv4()}>
            <Link href={`/productos/${id}`}>
              <a>
                <Image src={image} alt="Vercel Logo" width={75} height={60} />
                <Typography variant="h6">
                  {name}
                </Typography>
              </a>
            </Link>
          </div>
        )
      })
    }
    return res;
  }
  return (
    <>
      <Navbar />
      <div className={style.containerProducts}>
            <div className={style.text}>
              {readData()}
            </div>
            <div className={style.text}>
              <Typography sx={{mb:"15px"}} variant="h3">Nuestros productos</Typography>
              <div className={style.containerList}>
                {readData(product)}
              </div>
            </div>
      </div>
    </>
  )
}


