import Typography from '@mui/material/Typography'
import Image from 'next/image';
import Navbar from "../../components/Navbar";
import style from './info.module.scss'

let product={id:2,name:"pizza2",image:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",description:"pizza2sdaa"}
let {name,description,image} = product;
export default function id() {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.image}>
                    <Image src={image} alt="Comida" width={300} height={220}/>
                </div>
                <div className={style.textContainer}>
                    <Typography variant="h2">{name}</Typography>
                    <Typography variant="h8">{description}</Typography>
                </div>
            </div>
        </>
    )
  }
  
  
  