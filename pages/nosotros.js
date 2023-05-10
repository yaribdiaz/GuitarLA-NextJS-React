import Image from "next/image"
import Layout from "@/components/layout"
import styles from "@/styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
     title={"Nosotros"}
     description="Acerca de Nosotros, tienda de música "
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={700} alt="Imagen - Acerca de nosotros" />
          <div>
            <p>
              Phasellus sed ultrices elit, rhoncus bibendum sem. Duis eu iaculis enim, vel venenatis mauris. Mauris porttitor eros a felis euismod, id lobortis dui facilisis. Vestibulum a rhoncus sem, non molestie tellus. Morbi et urna nibh. Nulla quis euismod ipsum. Ut a mauris placerat ligula rutrum eleifend. Nam accumsan varius dictum.
            </p>
          </div>


        </div>
      </main>
    </Layout>
  )
}
