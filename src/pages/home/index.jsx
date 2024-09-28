import React from "react";
import Header from "../../components/header";
import "./home.scss";

// Nội dung của trang Home
export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="homepage">
        {/* Giới thiệu dịch vụ */}

        <section id="introduction" className="section introduction">
          <h1>Giới thiệu về dịch vụ</h1>
          <p>
            Chúng tôi tự hào cung cấp dịch vụ vận chuyển cá koi an toàn, chất
            lượng với nhiều năm kinh nghiệm trong ngành. Đội ngũ chuyên gia của
            chúng tôi luôn cam kết đảm bảo rằng cá koi của bạn được vận chuyển
            trong điều kiện tốt nhất, từ khâu đóng gói, xử lý cho đến quá trình
            vận chuyển. Mỗi lô hàng đều được theo dõi chặt chẽ để đảm bảo cá koi
            đến tay khách hàng trong tình trạng khỏe mạnh, không gặp bất kỳ rủi
            ro nào. Với công nghệ tiên tiến và các biện pháp bảo vệ chuyên
            nghiệp, chúng tôi mang lại sự an tâm tuyệt đối cho khách hàng trong
            mọi chuyến vận chuyển.
          </p>
          <img
            src="https://bizweb.dktcdn.net/100/004/358/files/ho-ca-koi-5.jpg?v=1629106778743"
            alt="Giới thiệu dịch vụ"
          />
        </section>

        {/* Quy trình vận chuyển */}
        <section id="process" className="section process">
          <h2>Quy trình vận chuyển</h2>
          <p>
            Quy trình vận chuyển của chúng tôi được thiết kế cẩn thận nhằm đảm
            bảo an toàn cho từng con cá koi. Đầu tiên, cá sẽ được đóng gói trong
            thùng chứa đặc biệt, giúp duy trì nước và không khí, đồng thời lót
            bằng vật liệu mềm mại để giảm thiểu sự căng thẳng. Trong quá trình
            vận chuyển, đội ngũ nhân viên của chúng tôi sử dụng các phương tiện
            hiện đại với hệ thống điều hòa để giữ nhiệt độ và độ ẩm lý tưởng cho
            cá. Mỗi chuyến đi đều được theo dõi liên tục qua hệ thống GPS, cho
            phép chúng tôi cập nhật tình trạng và vị trí của lô hàng, đảm bảo
            rằng cá koi đến tay khách hàng an toàn và đúng thời gian. Với quy
            trình chuyên nghiệp này, chúng tôi cam kết mang lại sự hài lòng và
            an tâm tuyệt đối cho khách hàng.
          </p>
          <img
            src="https://res.cloudinary.com/dnmppwbo6/image/upload/v1727508267/Screenshot_2024-09-28_141830_h6qnjw.png"
            alt="Quy trình vận chuyển"
          />
        </section>

        {/* Bảng giá */}
        <section id="pricing" className="section pricing">
          <h2>Bảng giá</h2>
          <p style={{ textAlign: "center" }}>
            Bảng giá dịch vụ vận chuyển cá koi phụ thuộc vào khoảng cách vận
            chuyển và kích thước của lô hàng.
          </p>
          <img src="https://example.com/image-pricing.jpg" alt="Bảng giá" />
        </section>

        {/* Chính sách */}
        <section id="policy" className="section policy">
          <h2>Chính sách</h2>
          <p>
            Chúng tôi cung cấp các chính sách bảo hành rõ ràng nhằm đảm bảo cá
            koi đến nơi an toàn và đúng lịch trình. Đội ngũ của chúng tôi cam
            kết chăm sóc từng con cá từ khâu đóng gói cho đến khi giao hàng.
            Trong trường hợp có sự cố xảy ra, chúng tôi sẽ xử lý kịp thời và có
            chính sách hoàn tiền hoặc hỗ trợ thay thế. Chúng tôi hiểu giá trị
            của từng con cá koi và cam kết mang lại sự hài lòng cho khách hàng.
            Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng giải đáp thắc
            mắc và cung cấp thông tin trong suốt quá trình vận chuyển, giúp bạn
            yên tâm khi gửi gắm những chú cá của mình cho chúng tôi.
          </p>
          <img
            src="https://ninhbinhcar.com/wp-content/uploads/2023/04/delivery.webp"
            alt="Chính sách"
          />
        </section>

        {/* Blog chia sẻ */}
        <section id="blog" className="section blog">
          <h2>Blog chia sẻ</h2>
          <p style={{ textAlign: "center" }}>
            Xem các bài viết chia sẻ kinh nghiệm chăm sóc và vận chuyển cá koi,
            cùng những mẹo hay từ các chuyên gia.
          </p>

          <div style={{ margin: "20px 0" }}>
            <h3 style={{ textAlign: "center" }}>Chia sẻ về Chăm sóc Cá Koi</h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <img src="https://koiservice.vn/wp-content/uploads/2023/04/image16-1661495517-88-width2048height1365-1.jpg" />
              <li>
                <strong>Chọn Hồ Nuôi Thích Hợp:</strong> Koi cần không gian rộng
                rãi và nước sạch. Hồ nuôi cần có độ sâu ít nhất 1 mét để đảm bảo
                nhiệt độ ổn định và an toàn cho cá.
              </li>
              <li>
                <strong>Quản lý Nhiệt Độ:</strong> Nhiệt độ lý tưởng cho cá koi
                thường từ 18-24°C. Cần sử dụng hệ thống sưởi ấm trong mùa đông
                và hệ thống làm mát vào mùa hè để duy trì nhiệt độ ổn định.
              </li>
              <li>
                <strong>Chất lượng Nước:</strong> Nước trong hồ cần được kiểm
                tra thường xuyên để đảm bảo không có chất độc hại như amoniac và
                nitrat. Sử dụng bộ kiểm tra nước để theo dõi các chỉ số pH, độ
                kiềm và các yếu tố khác.
              </li>
              <li>
                <strong>Chế độ Ăn Uống:</strong> Koi ăn một chế độ ăn cân bằng
                với thức ăn dành riêng cho cá koi. Không cho cá ăn quá nhiều
                trong một lần và chỉ cho ăn khi nước ở nhiệt độ trên 10°C.
              </li>
              <li>
                <strong>Chăm Sóc Sức Khỏe:</strong> Kiểm tra thường xuyên để
                phát hiện sớm các triệu chứng bệnh như bơi lội bất thường, mất
                màu sắc hoặc dấu hiệu nhiễm ký sinh trùng. Nếu phát hiện bệnh,
                cần nhanh chóng tư vấn chuyên gia hoặc sử dụng thuốc điều trị
                phù hợp.
              </li>
            </ul>
          </div>

          <div style={{ margin: "20px 0" }}>
            <h3 style={{ textAlign: "center" }}>
              Chia sẻ về Vận Chuyển Cá Koi
              <img src="https://vn1.vdrive.vn/koixinh.com/2022/12/van-chuyen-ca-Koi-6-768x432.png" />
            </h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <strong>Chuẩn Bị Trước Khi Vận Chuyển:</strong> Trước khi vận
                chuyển, cần cho cá nhịn ăn ít nhất 24 giờ để giảm thiểu rủi ro
                khi di chuyển.
              </li>
              <li>
                <strong>Đóng Gói Đúng Cách:</strong> Sử dụng thùng chứa có hệ
                thống cấp oxy và giữ nước sạch. Có thể lót bằng các vật liệu mềm
                mại để bảo vệ cá trong quá trình vận chuyển.
              </li>
              <li>
                <strong>Theo Dõi Trong Quá Trình Vận Chuyển:</strong> Sử dụng
                phương tiện vận chuyển có điều hòa để duy trì nhiệt độ và độ ẩm
                lý tưởng cho cá koi trong suốt hành trình.
              </li>
              <li>
                <strong>Cung Cấp Thông Tin cho Khách Hàng:</strong> Trong quá
                trình vận chuyển, hãy cung cấp thông tin đầy đủ cho khách hàng
                về tình trạng của cá, bao gồm vị trí hiện tại và thời gian ước
                tính đến nơi.
              </li>
              <li>
                <strong>Kiểm Tra Sau Khi Vận Chuyển:</strong> Sau khi đến nơi,
                hãy kiểm tra tình trạng của cá ngay lập tức và đảm bảo chúng
                được đặt vào môi trường sống mới một cách nhanh chóng và an
                toàn.
              </li>
            </ul>
          </div>

          <h3 style={{ textAlign: "center" }}>Kết luận</h3>
          <p style={{ textAlign: "center" }}>
            <img
              src="https://fountain.vn/wp-content/uploads/sites/3/2019/11/koi-feeding.jpg"
              alt=""
            />
            Cá koi là loài cá đẹp và cần được chăm sóc kỹ lưỡng. Việc nắm vững
            các kiến thức về chăm sóc và vận chuyển sẽ giúp bạn đảm bảo cá koi
            của mình luôn khỏe mạnh và phát triển tốt. Hãy theo dõi blog của
            chúng tôi để cập nhật thêm nhiều bài viết bổ ích và kinh nghiệm từ
            các chuyên gia trong ngành!
          </p>
        </section>

        {/* Tin tức */}
        <section id="news" className="section news">
          <h2>Tin tức</h2>
          <p style={{ textAlign: "center" }}>
            Cập nhật tin tức mới nhất về thị trường cá koi, xu hướng nuôi cá và
            các dịch vụ liên quan.
          </p>
          <img
            src="https://res.cloudinary.com/dnmppwbo6/image/upload/v1727523877/Screenshot_2024-09-28_184357_aaqaex.png"
            alt="Tin tức"
          />

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              href="https://vnexpress.net/tag/ca-koi-422834"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff6600",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Đọc thêm tin tức tại đây
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq">
          <h2>Câu Hỏi Thường Gặp (FAQ)</h2>

          <div className="faq-item">
            <h3>Cá koi có thể chịu được quá trình vận chuyển dài không?</h3>
            <p>
              Có, cá koi có thể chịu được quá trình vận chuyển dài nếu được đóng
              gói và vận chuyển đúng cách. Chúng tôi sử dụng thùng chứa đặc
              biệt, có hệ thống điều hòa không khí để duy trì nhiệt độ và điều
              kiện lý tưởng cho cá trong suốt quá trình vận chuyển.
            </p>
          </div>

          <div className="faq-item">
            <h3>Cần chuẩn bị gì trước khi vận chuyển cá koi?</h3>
            <p>
              Trước khi vận chuyển, cá koi nên được nhịn ăn khoảng 24-48 giờ để
              đảm bảo không có chất thải trong nước, giúp hạn chế ô nhiễm nước
              trong quá trình di chuyển. Cá cũng nên được kiểm tra sức khỏe
              trước khi vận chuyển.
            </p>
          </div>

          <div className="faq-item">
            <h3>Thời gian vận chuyển cá koi thường kéo dài bao lâu?</h3>
            <p>
              Thời gian vận chuyển phụ thuộc vào khoảng cách và điều kiện giao
              thông, nhưng thông thường từ vài giờ đến tối đa 24 giờ. Trong các
              trường hợp cần vận chuyển quốc tế, thời gian có thể kéo dài hơn và
              sẽ cần sử dụng các biện pháp bảo vệ đặc biệt.
            </p>
          </div>

          <div className="faq-item">
            <h3>Tôi nên làm gì khi cá koi đến nơi?</h3>
            <p>
              Khi cá koi đến nơi, bạn nên thả túi cá vào bể trong khoảng 15-30
              phút để nhiệt độ của túi và bể dần dần bằng nhau. Sau đó, mở túi
              và từ từ thả cá vào bể, tránh đổ hết nước trong túi vào bể để ngăn
              chất bẩn theo cá.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              Cá koi cần điều kiện chăm sóc như thế nào sau khi vận chuyển?
            </h3>
            <p>
              Sau khi vận chuyển, cá koi cần được theo dõi cẩn thận trong vài
              ngày đầu. Đảm bảo rằng nước trong bể luôn sạch sẽ và có đủ oxy.
              Nếu có dấu hiệu căng thẳng hoặc bệnh tật, cần cách ly và điều trị
              kịp thời.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              Vận chuyển trong mùa đông hay mùa hè có ảnh hưởng đến cá koi
              không?
            </h3>
            <p>
              Nhiệt độ khắc nghiệt trong mùa đông và mùa hè có thể ảnh hưởng đến
              cá koi. Tuy nhiên, chúng tôi sử dụng các biện pháp bảo vệ như
              thùng chứa cách nhiệt và hệ thống điều hòa để duy trì điều kiện lý
              tưởng cho cá trong mọi điều kiện thời tiết.
            </p>
          </div>
        </section>
        {/* Liên hệ và Hỗ trợ Khách hàng */}
        <section id="contact-support" className="section contact-support">
          <h2>Liên hệ và Hỗ trợ Khách hàng</h2>
          <a
            href="http://zaloapp.com/qr/p/1406hcu7el167"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button" // Có thể thêm class ở đây
          >
            <img
              src="https://st.quantrimang.com/photos/image/2019/06/04/Zalo-dang-ky-tai-khoan-PC-200-size-80x80-znd.jpg"
              alt="Zalo"
              className="zalo-icon"
            />
            Liên hệ ngay để tư vấn miễn phí
          </a>

          <div className="contact-info">
            <p>
              <strong>Số điện thoại:</strong> 0123 456 789
            </p>
            <p>
              <strong>Email:</strong> support@koi-transport.com
            </p>
            <p>
              <strong>Địa chỉ:</strong> 123 Đường Cá Koi, Quận Cá Koi, TP. Hồ
              Chí Minh
            </p>
          </div>
          {/* Chat trực tuyến hoặc hỗ trợ nhanh có thể được tích hợp ở đây */}
        </section>

        {/* Footer (Chân trang) */}
        <footer id="footer" className="footer">
          <h2>Thông tin liên hệ</h2>
          <div className="footer-contact-info">
            <p>
              <strong>Địa chỉ công ty:</strong> 123 Đường Cá Koi, Quận Cá Koi,
              TP. Hồ Chí Minh
            </p>
            <p>
              <strong>Email:</strong> contact@koi-transport.com
            </p>
            <p>
              <strong>Số điện thoại:</strong> 0123 456 789
            </p>
          </div>
          <div className="footer-social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="footer-policy">
            <a href="/terms">Điều khoản sử dụng</a> |
            <a href="/privacy-policy">Chính sách bảo mật</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
