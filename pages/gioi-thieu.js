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
          <meta name="google-site-verification" content="0yL0RXmnWn_uYidWFL1h2h7fcog-XbZeaIjT0AmPD8I" />
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
              <span>024.5678.5656</span>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="section team">
          <h2 className="section-title">Giới thiệu</h2>
          <div className="container">
            <div className="left">
              <img src="/ts1.png" alt="" />
              <h2>PGS.TS Nguyễn Nghiêm Luật</h2>
              <p>Chuyên khoa : Xét nghiệm</p>
              <h3>Trình độ: Phó giáo sư, tiến sĩ</h3>
              <h3>Chức vụ: Giám đốc chuyên môn tại Bệnh viện Đa khoa MEDLATEC</h3>
              <h3>Quá trình học tập và công tác</h3>
              <p>PGS. TS Nguyễn Nghiêm Luật sinh ngày 14/10/1945, quê ở Lạng Sơn. Từ những năm 1970, sau khi tốt nghiệp, thầy đã là giảng viên bộ môn Hóa Sinh trường Đại học Y Hà Nội và không ngừng học hỏi, tìm tòi nghiên cứu khoa học và tiếp tục học lên cao với những công trình nghiên cứu mang tính ứng dụng và thực tiễn cao trong y học và cuộc sống.</p>
              <p>Từ tháng 10/1982 - 9/1983, PGS.TS Nguyễn Nghiêm Luật là Nghiên cứu sinh, Khoa Tiếng Anh, Trường Đại học Ngoại ngữ Hà Nội.</p>
              <p>Từ tháng 10/1983 - 5/1988 là Nghiên cứu sinh, Trường Đại học Y Szemmelweis, Budapest, Hungary.</p>
              <p>Bằng kinh nghiệm và năng lực của mình, năm 1999, PGS. TS Nguyễn Nghiêm Luật được tín nhiệm chức Phó Trưởng bộ môn Hóa Sinh trường Đại học Y Hà Nội.</p>
              <p>PGS.TS Nguyễn Nghiêm Luật còn là chủ biên của hai cuốn sách (Thực tập Hóa Sinh, Nhà xuất bản Y học, 2003 và Hóa Sinh Y học, Nhà xuất bản Y học, 2007) và tham gia biên soạn 7 cuốn sách Hóa sinh và Chuyên đề Hóa sinh. Những công trình nghiên cứu khoa học và những cuốn sách về Hóa sinh học của thầy là những tài liệu quý và hữu ích cho nhiều thế hệ sinh viên Y trong toàn quốc.</p>
              <p>Một trong những công trình của thầy được ứng dụng nhiều nhất là “Nghiên cứu phát hiện biến đổi gen trong ung thư đại trực tràng” (Đề tài Cấp Bộ Y tế 2006 - 2009). Công trình của PGS.TS Nguyễn Nghiêm Luật đã giúp phát hiện sớm ung thư đại trực tràng ở những bệnh nhân và những người thân trong gia đình mang các đột biến trên gen APC để có biện pháp điều trị sớm ngay cả khi bệnh chưa xuất hiện, giúp họ tránh được nguy cơ tử vong.</p>
              <h3>Danh hiệu, giải thưởng</h3>
              <ul>
                <li>Nhiều năm là Chiến sĩ Thi đua cấp Trường và Cấp Bộ Y tế</li>
                <li>Danh hiệu Nhà giáo Ưu tú (2000)</li>
                <li>2 Bằng Lao động Sáng tạo (2000, 2002)</li>
                <li>Huy chương Vì Sự nghiệp Giáo dục (2004)</li>
                <li>Huy chương Vì Sức khỏe Nhân dân (2004)</li>
              </ul>
            </div>
            <div className="right">
            <img src="/ts2.jpg" alt="" />
              <h2>TTND.GS.AHLĐ Nguyễn Anh Trí</h2>
              <p>Chuyên khoa : Huyết học - Truyền máu</p>
              <h3>Trình độ: Giáo sư</h3>
              <h3>Chức vụ: Chủ tịch Hội đồng cố vấn, Bệnh viện Đa khoa MEDLATEC</h3>
              <h3>Quá trình học tập và công tác</h3>
              <p>Năm 1982: Tốt nghiệp Đại học Y Hà Nội (1976-1982)</p>
              <p>Năm 1985: Tốt nghiệp Bác sĩ nội trú bệnh viện ngành Huyết học - Truyền máu khóa 9 (1982-1985) Đại học Y Hà Nội.</p>
              <p>Năm 1985: Tốt nghiệp Bác sĩ nội trú bệnh viện ngành Huyết học - Truyền máu khóa 9 (1982-1985) Đại học Y Hà Nội.</p>
              <p>Năm 1993 - 1994: Thực tập về chuyên đề Medical technology/Clinical test technology (Công nghệ y tế) tại Nhật Bản.</p>
              <p>Năm 1996: Tham gia khóa tập huấn về An toàn Truyền máu lần thứ 2 tại Tokyo, Nhật Bản (11-1996).</p>
              <p>Năm 1998: Tốt nghiệp bác sĩ chuyên khoa 2.</p>
              <p>Năm 2001: Tham gia khóa tập huấn về Chăm sóc và Quản lý sức khỏe người có tuổi tại Hoa Kỳ.</p>
              <p>Năm 2002: Được Nhà nước Việt Nam phong chức danh Phó Giáo sư.</p>
              <p>Năm 2011: Được Nhà nước Việt Nam phong chức danh Giáo sư.</p>
              <h3>Danh hiệu, giải thưởng</h3>
              <ul>
                <li>Công bố trên 250 công trình nghiên cứu khoa học các cấp trong và ngoài nước.</li>
                <li>18 cuốn sách viết về lĩnh vực Huyết học truyền máu.</li>
                <li>8 bài báo quốc tế và 170 bài báo đăng trong các tạp chí khoa học trong nước.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
