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
                    <ul className={cx('sub-menu','span')}>
                        <li className={cx('sub-menu-item')}>
                            <a title="Phim co trang - than thoai" href="">Co Trang - Than Thoai</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="Phim vo thuat - kiem hiep" href="">Vo Thuat - Kiem Hiep</a>
                        </li >
                        <li className={cx('sub-menu-item')}>
                            <a title="Phim phieu luu - hanh dong" href="">Phieu Luu - Hanh Dong</a>
                        </li >
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim tam li - tinh cam" href="">Tam Li - Tinh Cam</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim hoat hinh" href="">Hoat Hinh</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim khoa hoc - vien tuong" href="">Khoa Hoc - Vien Tuong</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim hinh su - chien tranh" href="">Hinh Su - Chien Tranh</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim tai lieu - kham pha" href="">Tai Lieu - Kham Pha</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim van hoa - tam linh" href="">Van Hoa - Tam Linh</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim hai huoc" href="">Hai Huoc</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim the thao - am nhac" href="">The Thao - Am Nhac</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim kinh di - ma" href="">Kinh Di - Ma</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim gia dinh - hoc duong" href="">Gia Dinh - Hoc Duong</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim tvshow" href="">TV Show</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim chieu rap" href="">Phim Chieu Rap</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim bi an - sieu nhien" href="">Bi An - Sieu Nhien</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim thuyet minh" href="">Thuyet Minh</a>
                        </li >
                        <li className={cx('sub-menu-item')}>                            
                            <a title="Phim long tieng" href="">Long Tieng</a>
                        </li>
                        <li className={cx('sub-menu-item')}>                           
                             <a title="Phim boylove" href="">Boy Love</a>
                        </li>
                    </ul>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/quocgia">Quoc Gia</a>
                    <ul className={cx('sub-menu','span-2')}>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim viet nam" href="">Viet Nam</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim trung quoc" href="">Trung Quoc</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim han quoc" href="">Han Quoc</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim thai lan" href="">Thai Lan</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim hong kong" href="">Hong Kong</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim au my" href="">Au My</a>
                        </li>  
                        <li className={cx('sub-menu-item')}>
                            <a title="phim dai loan" href="">Dai Loan</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim nhat ban" href="">Nhat Ban</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim an do" href="">An Do</a>
                        </li>
                        <li className={cx('sub-menu-item')}>
                            <a title="phim canada" href="">Canada</a>
                        </li>        
                        <li className={cx('sub-menu-item')}>
                            <a title="phim quoc gia khac" href="">Quoc Gia Khac</a>
                        </li>                    
                    </ul>
                </li>
                <li className={cx('menu-item')}>
                    <a href="/phimmoi">Phim Moi</a>
                    <ul className={cx('sub-menu')}> 
                        <li className={cx('sub-menu-item')} >
                            <a href="Phim 2023">Phim 2023</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2022">Phim 2022</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2021">Phim 2021</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2020">Phim 2020</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2019">Phim 2019</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2018">Phim 2018</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2017">Phim 2017</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2016">Phim 2016</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2015">Phim 2015</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2014">Phim 2014</a>
                        </li>
                        <li className={cx('sub-menu-item','span-3')} >
                            <a href="Phim 2013">Phim 2013</a>
                        </li>
                    </ul>
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