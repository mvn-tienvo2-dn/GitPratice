import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App row">
     <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2 "></div>
     <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3 pr-0 " >
      <div className="name">
        <p>Võ Đình Tiến</p>
      </div>
      <div className="profile blue">
        <div className="col-sm-5 col-xs-5 col-md-5 col-lg-5 pr-0 pl-0 avatar ">
          <img className="img" src="./17IT105.jpg" alt="logo"></img>
        </div>
        <div className="col-sm-12 infor">
          <p className="header"><i class="fas fa-bullseye icon-rotate"></i>Thông tin cá nhân</p>
          <p className="content"><span className="fas fa-map-marker-alt icon"></span>TDP 13,EaHleo,Eadrang,ĐắkLắk</p>
          <p className="content"><span className="fas fa-phone icon"></span>0349853906</p>
          <p className="content"><span className="far fa-envelope icon"></span>vdtien.17it2@vku.udn.vn</p>
          <p className="content"><span className="fas fa-calendar icon"></span>05-03-1999</p>

        </div>
        <div className="col-sm-12 skill">
        <p className="header"><i class="fas fa-bullseye icon-rotate"></i>Kỹ năng</p>
        <p className="content">Làm việc nhóm<span className="progress"><span className="progress-bar"></span></span></p>
        <p className="content">Giao tiếp tiếng Anh<span className="progress"><span className="progress-bar"></span></span></p>

        </div>
      </div>
     </div>

     <div className="col-sm-5 ml-2 pr-0 content-job">
       <div className="col-sm-12 header-job ">
       <div className="header-right blue">
       Thực tập sinh PHP
       </div>

      </div>
        <div className="col-sm-12 pr-0 note">
        <p className="header-blue"><i class="fas fa-bullseye icon-rotate"></i>Mục tiêu nghề nghiệp <hr></hr></p>
        <p><i className="far fa-star icon"></i>Áp dụng những kiến thức đã học ở trường và tự học để xây dựng website trong một môi trường
        năng động, chuyên nghiệp, sáng tạo , cởi mở .Từ đó hoàn thiệu bản thân. </p>
        </div>
        <div className="col-sm-12 pr-0 note">
        <p className="header-blue"><i class="fas fa-bullseye icon-rotate"></i>Kinh nghiệm làm việc <hr></hr></p>
        <p><i className="far fa-star icon"></i>Xây dựng website bán đồ điện với framework laravel 5. </p>
        <p><i className="far fa-star icon"></i>Xây dựng website tìm việc làm với PHP&Mysql ,HTML. </p>
        <p><i className="far fa-star icon"></i>Xây dựng website bán pizza với PHP&Mysql,HTML. </p>
        </div>
        <div className="col-sm-12 pr-0 note">
        <p className="header-blue"><i class="fas fa-bullseye icon-rotate"></i>Học vấn <hr></hr></p>
        <p><i className="far fa-star icon"></i>Đại Học Công Nghệ Thông Tin và Truyền Thông Việt-Hàn. </p>
        <p><i className="far fa-star icon"></i>Sinh viên năm cuối.</p>
        <p><i className="far fa-star icon"></i>Ngành Công Nghệ Thông Tin.</p>
        <p><i className="far fa-star icon"></i>Trình độ : Kỹ Sư.</p>
        </div>
        <div className="col-sm-12 pr-0 note">
        <p className="header-blue"><i class="fas fa-bullseye icon-rotate"></i>Hoạt động <hr></hr></p>
        <p><i className="far fa-star icon"></i>Tham gia tình nguyện,các hoạt động thể dục thể thao, giải trí. </p>
        </div>
        <div className="col-sm-12 pr-0 note">
        <p className="header-blue"><i class="fas fa-bullseye icon-rotate"></i>Kiến thức <hr></hr></p>
        <p><i className="far fa-star icon"></i>Hiểu biết OOP,ReactJS,AI,CSS,HTML,BOOTSTRAP 3... </p>
        </div>
      </div>
      <div className="col-md-2 ml-0"></div>

    </div>
  );
}

export default App;
