# Trang Web Cá Nhân

Đây là một trang web cá nhân với thiết kế sạch sẽ và hiện đại, được tạo ra dựa trên mẫu thiết kế bạn cung cấp.

## Cấu Trúc File

```
├── index.html          # File HTML chính
├── styles.css          # File CSS cho styling
├── script.js           # File JavaScript cho tương tác
├── README.md           # File hướng dẫn này
└── profile-image.jpg   # Ảnh cá nhân của bạn (cần thêm)
```

## Cách Sử Dụng

### 1. Tùy Chỉnh Thông Tin Cá Nhân

Mở file `index.html` và thay đổi các thông tin sau:

```html
<!-- Thay đổi tên và chức danh -->
<h1 class="name">Tên Của Bạn</h1>
<p class="title">Chức danh công việc</p>

<!-- Thay đổi nội dung giới thiệu -->
<h2 class="about-name">Tên Của Bạn</h2>
<h3 class="about-heading">Một Chút Về Tôi</h3>
<p class="about-text">
    Tôi là một chuyên gia làm việc trong lĩnh vực [lĩnh vực của bạn]. 
    Tôi quan tâm đến [sở thích nghiên cứu của bạn], [lĩnh vực chuyên môn], 
    và [các hoạt động khác]. Tôi đam mê [mô tả đam mê của bạn] và 
    luôn tìm kiếm những cơ hội mới để phát triển bản thân.
</p>
```

### 2. Thêm Ảnh Cá Nhân

1. Đặt ảnh của bạn vào thư mục với tên `profile-image.jpg`
2. Hoặc thay đổi đường dẫn ảnh trong file `index.html`:
   ```html
   <img src="đường-dẫn-đến-ảnh-của-bạn.jpg" alt="Ảnh cá nhân" id="profile-img">
   ```

### 3. Tùy Chỉnh Màu Sắc

Mở file `styles.css` và thay đổi các màu sắc:

```css
/* Màu chấm tròn ở header */
.dot {
    background-color: #4a90e2; /* Thay đổi màu này */
}

/* Màu các nút navigation */
.resume-btn {
    background-color: #90EE90; /* Màu xanh lá */
}
.research-btn {
    background-color: #FFB347; /* Màu cam */
}
.outreach-btn {
    background-color: #87CEEB; /* Màu xanh dương */
}
.personal-btn {
    background-color: #D3D3D3; /* Màu xám */
}
```

### 4. Thêm Nội Dung Cho Các Trang

Hiện tại các liên kết navigation chỉ là placeholder. Bạn có thể:

1. Tạo các file HTML riêng cho từng trang (resume.html, research.html, etc.)
2. Hoặc thêm nội dung vào cùng file `index.html` với các section có id tương ứng

## Tính Năng

- ✅ Thiết kế responsive (tương thích mobile)
- ✅ Hiệu ứng hover cho ảnh và nút
- ✅ Smooth scrolling cho navigation
- ✅ Font chữ hiện đại (Inter)
- ✅ Màu sắc hài hòa
- ✅ Layout sạch sẽ, chuyên nghiệp

## Cách Chạy

1. Mở file `index.html` trong trình duyệt web
2. Hoặc sử dụng local server:
   ```bash
   # Nếu có Python
   python -m http.server 8000
   
   # Nếu có Node.js
   npx serve .
   ```

## Tùy Chỉnh Nâng Cao

### Thêm Animation

Bạn có thể thêm animation vào file `styles.css`:

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.about-section {
    animation: fadeIn 1s ease-out;
}
```

### Thêm Dark Mode

Thêm CSS cho dark mode:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    .header, .bottom-nav {
        background-color: #2d2d2d;
    }
}
```

## Hỗ Trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi, hãy liên hệ hoặc tạo issue trong repository này.

---

**Lưu ý**: Đây là template cơ bản, bạn có thể tùy chỉnh thêm theo ý muốn để phù hợp với phong cách cá nhân của mình. 