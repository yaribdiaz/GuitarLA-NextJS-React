import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/guitarras.module.css"

export default function Guitarra({guitarra}) {
  const { nombre, descripcion, precio, imagen, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen de Guitarra ${nombre}`}/>
      {/* Al poner imagenes de un dominio externo a Next, poner de qué dominio en en next.config.js */}
    
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}
