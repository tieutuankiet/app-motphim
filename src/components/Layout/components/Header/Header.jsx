import classNames from "classnames/bind";
import styles from './Header.modules.scss';
import Navbar from "./Navbar/Navbar";
import Top from "./Top/Top";

const cx = classNames.bind(styles)
function Header(){
    return(
        <header className={cx('header')}>
            <div className={cx('container-header')}>
                <Top/>
                <Navbar/>
            </div>
        </header>
    )
}
export default Header