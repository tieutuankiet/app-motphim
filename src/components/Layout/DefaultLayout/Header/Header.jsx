import classNames from "classnames/bind";
import styles from './Header.modules.scss';
import logo from '../../../../images/motchill.png'
const cx = classNames.bind(styles)
function Header(){
    return(
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('top-header')}>
                    <div className={cx('logo','left')}>
                        <a href="/" title="Home">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className={cx('right-header')}>
                        <div className={cx('search','relative')}>
                            <form id="form-search" method="GET" action="javascript:do_search();">
                                <input type="text" id="keyword" autoComplete="off" placeholder="Ten Phim" />
                            </form>
                        </div>
                        <div id="box-user" className={cx('action-user','right')}>
                            <ul>
                                <li>
                                    <a onclick="alert('Chức năng này đang cập nhật');return false;">Đăng nhập</a>
                                </li>
                                <li>
                                    <a onclick="alert('Chức năng này đang cập nhật');return false;">Đăng ký</a>
                                </li>
                                <li>
                                    <a onclick="alert('Chức năng này đang cập nhật');return false;">Bookmark</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header