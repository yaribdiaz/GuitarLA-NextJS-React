import Layout from "@/components/layout"
import Image from "next/image"
import styles from "@/styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {
  console.log(post[0].attributes.titulo)
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes

  return (
    <Layout
      title={titulo}
      description="GuitarLA - Blog de música, venta de guitarras y más."
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.url} alt="Imagen de Post" width={1000} height={600}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
         </article>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const {data: post} = await respuesta.json()

  return{
    props:{
      post
    }
  }
}