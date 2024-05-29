import Header from './components/elements/Header/Header'
import SecondHeader from './components/elements/SecondHeader/SecondHeader'

import './App.css'
import HorizontalScroll from './components/elements/Scroll/HorizontalScroll'


function App() {
  

  return (
    <div className='background-all'>
    <div className='Application'>
     <Header/>
     
    </div>
    <div className='second-header'>
      <SecondHeader/>
      <HorizontalScroll/>
    </div>
    </div>
  )
}

export default App
