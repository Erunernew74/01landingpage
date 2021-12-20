import '../styles/globals.css'
import { Layouts } from './components/Layouts'
import Nav from './components/Nav'
import '../styles/Navbar.css'
import '../styles/About.css'
import '../styles/Feauters.css'
import '../styles/NotFound.css'
import '../styles/Newsletter.css'





function MyApp({ Component, pageProps }) {
  return(
      <Layouts>        
        <Component {...pageProps} />
      </Layouts>
  )
  

   
}

export default MyApp
