# Website GitHub Pages

## Trạng thái

Bản website đã được chủ repo xem trước và đồng ý đăng ngày 08/10/2026. Nguồn xuất bản là nhánh `main`, thư mục `/docs`.

Địa chỉ website:

https://phanminhtuandalat.github.io/seo-blog-writer-skill/

## Website này làm gì?

Repo ban đầu chứa hướng dẫn skill ChatGPT, không có ứng dụng web. Thư mục `docs/` bổ sung trang giới thiệu tiếng Việt, quy trình, mẫu yêu cầu có nút sao chép, câu hỏi thường gặp và liên kết đến tài liệu gốc.

Trang là HTML/CSS/JavaScript tĩnh, không cần cài thư viện hoặc chạy bước build. Việc viết bài và tạo ảnh vẫn diễn ra trong ChatGPT; WordPress cần kết nối riêng khi sử dụng skill.

## Triển khai và kiểm tra

1. Kiểm tra repo gốc có thay đổi mới, rà soát và đưa các file đã duyệt lên nhánh `main`. Giữ nguyên nội dung skill hiện có.
2. Bật GitHub Pages bằng **Settings → Pages → Deploy from a branch → main → /docs**.
3. Chờ GitHub báo triển khai thành công. Kiểm tra trang, CSS, JavaScript, biểu tượng, ảnh chia sẻ và sitemap trên địa chỉ công khai qua HTTPS.
4. Mở lại trang ở máy tính và chế độ điện thoại. Kiểm tra metadata tại URL công khai và ảnh khi chia sẻ thực tế. Facebook/Zalo có thể lưu bản xem trước trong bộ nhớ đệm; chỉ xác nhận kết quả sau khi thử trên trang đã đăng.
5. Trả đường dẫn hoạt động cho chủ repo. Không coi địa chỉ dự kiến ở trên là trang đã đăng.

GitHub Pages chỉ xuất bản thư mục `docs/`. Báo cáo thử nghiệm và ảnh chụp nằm trong `output/`, được `.gitignore` loại khỏi việc đẩy lên repo.

Tài liệu GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Ảnh và thông tin chia sẻ

`docs/index.html` có tiêu đề, mô tả, canonical, Open Graph và Twitter Card. Ảnh `docs/assets/social-cover.png` dùng URL HTTPS tuyệt đối cho Facebook/Zalo và kích thước thực tế 1730 × 909. Ảnh tạo bằng công cụ imagegen tích hợp, đã kiểm tra chữ tiếng Việt và không có metadata EXIF.

Prompt tạo ảnh: ảnh bìa ngang cho SEO Blog Writer, nền giấy trắng, chữ đen, bút chì vàng và giấy viết; chữ chính xác “SEO Blog Writer”, “Viết blog SEO tiếng Việt”, “Từ khóa → Bài viết → Bộ ảnh”; bố cục có lề rộng, không người, địa chỉ web, watermark hoặc lời hứa thứ hạng.

Giữ nguyên biểu tượng bút chì của repo trong `docs/assets/icon.svg`. Toàn bộ tài nguyên giao diện được lưu trong `docs/`.
