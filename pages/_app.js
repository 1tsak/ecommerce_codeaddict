import '../styles/globals.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function MyApp({ Component, pageProps }) {
  <NavBar/>
  return <>
  <NavBar />
  <Component {...pageProps} />
  <Footer/>
</>
}

export default MyApp