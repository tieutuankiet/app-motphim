import './DefaultLayout.modules.scss'

import Header from './Header/Header'
import RightSidebar from './RightSidebar/RightSidebar'
import Footer from './Footer/Footer'
function DefaultLayout({children}) {
    return(
        <div className='wrapper'>
            <Header/>
            <div className='container'>
                <div className='content'>{children}</div>
                <RightSidebar/>
            </div>
            <Footer/>
        </div>
    )
}
export default DefaultLayout