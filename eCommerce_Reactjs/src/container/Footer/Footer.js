import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Hỗ trợ khách hàng</h4>
              <ul>
                <li><a href="#">Thẻ ưu đãi</a></li>
                <li><a href="#">Hướng dẫn mua hàng online</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Chính sách mua hàng</h4>
              <ul>
                <li><a href="#">Điều kiện giao dịch chung</a></li>
                <li><a href="#">Chính sách đổi trả</a></li>
                <li><a href="#">Chính sách thanh toán</a></li>
                <li><a href="#">Chính sách bảo mật thông tin</a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 single-footer-widget">
              <h4>Thông tin Moon-Shop</h4>
              <ul>
                <li><a href="#">Số 57-59 Khu công nghiệp FPT Phường Hòa Hải, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Email liên hệ</h4>
              <ul>
                <li><a href="#">Hỗ trợ khách hàng:</a></li>
                <a href="mailto:quanphi2k@gmail.com">quanphi2k2@gmail.com</a>
              </ul>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Bản quyền ©2024 Đồ án tốt nghiệp của VMQ <i className="fa fa-heart-o" aria-hidden="true" />  <a href="https://colorlib.com" target="_blank"></a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;