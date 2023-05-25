import classNames from "classnames/bind";
import styles from './Top.modules.scss'
import { FaSearch,FaSignInAlt,FaUsers,FaBookmark } from 'react-icons/fa';
import logo from '../../../../../images/motchill.png'

const cx = classNames.bind(styles)
function Top(){
    return(
        <div className={cx('top-header')}>
        <div className={cx('logo','left')}>
            <a href="/" title="Home">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className={cx('right-header')}>
            <div className={cx('search','relative')}>
                <input type="text" placeholder="Search" />
                <button className={cx('btn-search')}>
                    <FaSearch></FaSearch>
                </button>
            </div>
            <div id="box-user" className={cx('action-user','right')}>
                <ul>
                    <li className={cx('sign-in','fa')}>
                        <button><FaSignInAlt ></FaSignInAlt></button>
                        <a href="home">Đăng nhập</a>
                    </li>
                    <li className={cx('register','fa')}>
                        <button><FaUsers ></FaUsers></button>
                        <a href="home">Đăng ký</a>
                    </li>
                    <li className={cx('bookmark','fa')}>
                        <button><FaBookmark></FaBookmark></button>
                        <a href="home">Bookmark</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Top