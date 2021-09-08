import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
          <title>Đặt lịch lấy mẫu tại nhà | Tiêm truyền tại nhà</title>
          <meta name="title" content="Đặt lịch Lấy mẫu tại nhà | Tiêm truyền tại nhà - MEDHANOI.VN" />
          <meta name="description" content="Đặt lịch lấy mẫu tại nhà, tiêm truyền tại nhà qua medhanoi.vn giúp bạn dễ dàng kiểm soát tình trạng bệnh, giảm thời gian đi lại, chờ đợi, trả kết quả kịp thời, chính xác" />
          <meta name="keywords" content="Đặt lịch lấy mẫu tại nhà , tiêm truyền tại nhà, lấy mẫu máu, giảm thời gian chờ, kết quả online, đặt lịch" />
      </Head>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/logomedhanoi.png" alt="medhanoi" width={165} height={54}/>
              </a>
            </Link>
          </div>
          <nav className="nav-main">
            <ul>
              <li>
                <Link href="/gioi-thieu">
                  <a>Giới thiệu</a>
                </Link>
              </li>
              <li>
                <a href="#">Lấy mẫu tại nhà</a>
              </li>
              <li>
                <a href="#">Đặt lịch tiêm truyền</a>
              </li>
              {/* <li>
                <a href="#">Tra cứu kết quả</a>
              </li> */}
              <li>
                <a href="#">Gói khám sức khỏe</a>
              </li>
            </ul>
          </nav>
          <div className="hotline">
            <a href="tel:02439030333">
              <img src="/hot_line.gif" alt="hot line" width={30} height={30} />
              <span>0243 9030 333</span>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section  className="section banner">
          <picture>
            <source media="(min-width:769px)" srcSet="/dat-lich-lay-mau-tai-nha.jpg" />
            <img className="img-fluid" src="/dat-lich-lay-mau-tai-nha-mobile.jpg" alt="dat-lich-lay-mau-tai-nha" />
          </picture>
        </section>
        <section className="section why">
          <h2 className="section-title">Tại sao nên chọn Medhanoi ?</h2>
          <div className="container">
            <div className="why-item">
              <div className="image">
                <img src="/benefit_image_1.png" className="img-fluid" alt="nhanh chong" width={147} height={147}/>
              </div>
              <div className="info">
                <h3>Nhanh chóng</h3>
                <p>Tiết kiệm thời gian, không chờ đợi kết quả, không cần nhịn ăn quá lâu vì đã có Điều dưỡng Medhanoi đến lấy mẫu xét nghiệm tại nhà giúp bạn.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="image">
                <img src="/benefit_image_2.png" className="img-fluid" alt="nhanh chong" width={147} height={147}/>
              </div>
              <div className="info">
                <h3>Kết quả chính xác</h3>
                <p>Kết quả xét nghiệm chính xác vì mẫu xét nghiệm được kiểm soát bởi những chuyên gia hàng đầu trong các bệnh viện lớn.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="image">
                <img src="/benefit_image_3.png" className="img-fluid" alt="nhanh chong" width={147} height={147}/>
              </div>
              <div className="info">
                <h3>Nhận kết quả Online</h3>
                <p>Không cần chờ đợi, không cần nhịn ăn, tiết kiệm thời gian, không chờ đợi kết quả khi đăng ký lấy mẫu tại Medhanoi.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="image">
                <img src="/benefit_image_4.png" className="img-fluid" alt="nhanh chong" width={147} height={147} />
              </div>
              <div className="info">
                <h3>Nhanh chóng</h3>
                <p>Tiết kiệm thời gian, không chờ đợi kết quả, không cần nhịn ăn quá lâu vì đã có Điều dưỡng Medhanoi đến lấy mẫu xét nghiệm tại nhà giúp bạn.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section steps">
          <h2 className="section-title">4 bước đơn giản để an tâm về sức khỏe của bạn</h2>
          <div className="container">
            <div className="steps-item">
              <div className="image">
                <img src="/processes_image_1.png" alt="nhanh chong" width={150} height={150}/>
                <img className="arrow" src="/arrow.png" alt="arrow" width={18} height={33}/>
              </div>
              <div className="info">
                <h3>Bước 1</h3>
                <p>Medhanoi tư vấn gói khám bệnh</p>
              </div>
            </div>
            <div className="steps-item">
              <div className="image">
                <img src="/processes_image_2.png" alt="nhanh chong" width={150} height={150}/>
                <img className="arrow" src="/arrow.png" alt="arrow" width={18} height={33}/>
              </div>
              <div className="info">
                <h3>Bước 2</h3>
                <p>Điều dưỡng đến tận nơi lấy mẫu xét nghiệm</p>
              </div>
            </div>
            <div className="steps-item">
              <div className="image">
                <img src="/processes_image_3.png" alt="nhanh chong" width={150} height={150}/>
                <img className="arrow" src="/arrow.png" alt="arrow" width={18} height={33}/>
              </div>
              <div className="info">
                <h3>Bước 3</h3>
                <p>Nhận kết quả trực tuyến sau 5 tiếng</p>
              </div>
            </div>
            <div className="steps-item">
              <div className="image">
                <img src="/processes_image_4.png" alt="nhanh chong" width={150} height={150} />
                {/* <img className="arrow" src="/arrow.png" alt="arrow" width={18} height={33}/> */}
              </div>
              <div className="info">
                <h3>Bước 4</h3>
                <p>Bác sĩ Medhanoi tư vấn kết quả qua điện thoại</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section list">
          <h2 className="section-title">Chi tiết dịch vụ xét nghiệm</h2>
          <div className="container">
            <div className="left">
              <div className="list-item first">
                  <div className="name">
                      Các loại xét nghiệm
                  </div>
                  <div className="description">
                      Ý nghĩa xét nghiệm
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Công thức máu
                  </div>
                  <div className="description">
                      Phát hiện thiếu máu, các bất thường về máu
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Nhóm máu ABO (GS + Rh)
                  </div>
                  <div className="description">
                      Xác định nhóm máu
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Đường huyết lúc đói
                  </div>
                  <div className="description">
                      Tầm soát bệnh đái tháo đường
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Cholesterol
                  </div>
                  <div className="description">
                      Định lượng mỡ, đánh giá cơ tim mạch
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      HDL
                  </div>
                  <div className="description">
                      Định lượng mỡ có lợi divong cơ thể
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      LDL
                  </div>
                  <div className="description">
                      Định lượng mỡ có hại divong cơ thể
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                    Triglycerid
                  </div>
                  <div className="description">
                    Định lưỡng mỡ gây xơ vữa động mạch
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Chức năng thận (Creatinin, Urea)
                  </div>
                  <div className="description">
                      Đánh giá chức năng bài tiết của thận
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Chức năng gan (SGOT,SGPT)
                  </div>
                  <div className="description">
                      Đánh giá tình divạng của gan
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Men gan mạn tính - GGT
                  </div>
                  <div className="description">
                      Đánh giá tình divạng men gan
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Tổng phân tích nước tiểu
                  </div>
                  <div className="description">
                      Tầm soát bệnh lý về tiết niệu
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      Acid Uric
                  </div>
                  <div className="description">
                      Tầm soát bệnh Gout
                  </div>
              </div>
              <div className="list-item">
                  <div className="name">
                      HBsAg hoặc Anti Hbs
                  </div>
                  <div className="description">
                      Viêm gan Siêu Vi B hoặc kháng thể viêm gan B
                  </div>
              </div>
            </div>
            <div className="right">
              <img src="/registry_image_1.png" alt="dang ky" />
              <div className="registry">
                <a href="tel:02439030333">
                  <span>Đăng ký ngay</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section utility">
          <div className="container">
            <div className="left">
              <div className="title">
                <h2>Bạn hạnh phúc bên <span>gia đình khoẻ mạnh</span></h2>
                <p>Hạn chế hành trình tìm bác sĩ, bệnh viện/phòng khám và giảm thiểu hàng giờ chờ lượt khám.</p>
                <ul>
                  <li><p>Tư vấn, tra cứu trực tuyến.</p></li>
                  <li><p>Đặt lịch khám từ xa.</p></li>
                  <li><p>Tuỳ chọn đơn vị (nơi khám) uy tín.</p></li>
                  <li><p>Dịch vụ chăm sóc tại nhà.</p></li>
                </ul>
                <div className="registry">
                  <a href="tel:02439030333">
                    <span>Đăng ký lấy mẫu tại nhà</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="/healthy_family_image_1.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
