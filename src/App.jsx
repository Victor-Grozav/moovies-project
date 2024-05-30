import Header from './components/elements/Header/Header'
import PageBody from './components/elements/Page-Body/PageBody.jsx'

import './App.css'
import HorizontalScroll from './components/elements/Scroll/HorizontalScroll'
import Footer from './components/elements/Footer/Footer.jsx'

function App() {
  

  return (
    <div className='background-all'>
    <div className='Application'>
     <Header/>
     
    </div>
    <div className='second-header'>
      
      <HorizontalScroll/>
      <PageBody/>
      <Footer/>
    </div>
    
    </div>
  )
}

export default App
