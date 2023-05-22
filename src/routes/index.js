import Home from "../pages/Home/Home";
import PhimBo from "../pages/PhimBo/PhimBo";
import PhimChieuRap from "../pages/PhimChieuRap/PhimChieuRap";
import PhimLe from "../pages/PhimLe/PhimLe";
import PhimMoi from "../pages/PhimMoi/PhimMoi";
import PhimThuyetMinh from "../pages/PhimThuyetMinh/PhimThuyetMinh";
import TVShow from "../pages/TVShow/TVShow";
import QuocGia from "../pages/QuocGia/QuocGia";
import TheLoai from "../pages/TheLoai/TheLoai";

const publicRouter = [
    {path:'/',component: Home},
    {path:'/phimbo',component: PhimBo},
    {path:'/phimchieurap',component: PhimChieuRap},
    {path:'/phimle',component: PhimLe},
    {path:'/phimmoi',component: PhimMoi},
    {path:'/phimthuyetminh',component: PhimThuyetMinh},
    {path:'/tvshow',component: TVShow},
    {path:'/quocgia',component: QuocGia},
    {path:'/theloai',component: TheLoai},
]
export {publicRouter};