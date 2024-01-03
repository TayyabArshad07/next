import Header from './components/H/Header'
import Sidebar from './components/S/Sidebar'
import Contactus from './components/C/Contactus'

export default function Home() {
  return (
    <div className='grid w-full'>
      <Header />
      <Sidebar />
      <Contactus />
    </div>
  )
}
