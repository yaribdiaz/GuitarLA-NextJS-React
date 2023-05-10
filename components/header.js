import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '@/styles/header.module.css'

export default function Header() {
    const router = useRouter() //Conocer info acerca del pathname, etc...
    //console.log(router.pathname)
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
                <Image src="/img/logo.svg" priority={true} width={300} height={40} alt="Imagen Logotipo"/>
            </Link>
            <nav className={"navegacion"}>
                <Link className={router.pathname === '/' ? styles.active : '' }  href={'/'}>Inicio</Link>
                <Link className={router.pathname === '/nosotros' ? styles.active : '' }  href={'/nosotros'}>Nosotros</Link>
                <Link className={router.pathname === '/tienda' ? styles.active : '' }  href={'/tienda'}>Tienda</Link>
                <Link className={router.pathname === '/blog' ? styles.active: '' }  href={'/blog'}>Blog</Link>
                <Link className={router.pathname === '/carrito' ? styles.active: '' }  href={'/carrito'}>
                    <Image src='/img/carrito.png' width={30} height={25} alt='Imagen Carrito'/>
                </Link>
            </nav>
        </div>
    </header>
  )
}
