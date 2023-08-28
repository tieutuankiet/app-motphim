import Header from '../components/Header/Header'
import RightSidebar from '../components/RightSidebar/RightSidebar'
import Footer from '../components/Footer/Footer'
import classNames from 'classnames/bind';
import styles from './DefaultLayout.modules.scss'

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return(
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
                <RightSidebar/>
            </div>
            <Footer/>
        </div>
    )
}
export default DefaultLayout