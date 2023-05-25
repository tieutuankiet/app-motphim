import classNames from "classnames/bind";
import styles from './Navbar.modules.scss';

const cx = classNames.bind(styles)
function Navbar(){
    return(
        <nav className={cx('main-menu')}>
            <ul className={cx('menu')}>
                <li className={cx('menu-item')}>
                    <a href="/">Trang Chu</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/theloai">The Loai</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/quocgia">Quoc Gia</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimmoi">Phim Moi</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimbo">Phim Bo</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimle">Phim Le</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimthuyetminh">Phim Thuyet Minh</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimchieurap">Phim Chieu Rap</a>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/tvshow">TV Show</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;