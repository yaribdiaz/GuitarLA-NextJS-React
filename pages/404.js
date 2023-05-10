import Link from 'next/link'
import Layout from "@/components/layout"

export default function Pagina404() {
  return (
    <Layout
        title="Página no encontrada"
    >
        <p className="error">Página No Encontrada</p>
        <Link href='/' className='error-enlace'>Volver a Inicio</Link>
    </Layout>
  )
}
