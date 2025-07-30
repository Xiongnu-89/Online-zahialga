<!DOCTYPE html>
<html lang="mn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mini Store</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f8f8f8;
      color: #333;
    }
    header, footer {
      background-color: #0077cc;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    nav a {
      margin: 0 10px;
      color: white;
      text-decoration: none;
    }
    section {
      padding: 2rem;
      max-width: 900px;
      margin: auto;
      background: white;
      margin-top: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .product {
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .faq h4 {
      cursor: pointer;
      color: #0077cc;
    }
    .faq p {
      display: none;
    }
    form input, form textarea {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
    form button {
      background-color: #0077cc;
      color: white;
      padding: 0.7rem;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Mini Store</h1>
    <nav>
      <a href="#products">Бараа</a>
      <a href="#order">Захиалга</a>
      <a href="#payment">Төлбөр</a>
      <a href="#delivery">Хүргэлт</a>
      <a href="#faq">Асуулт</a>
      <a href="#contact">Холбоо барих</a>
    </nav>
  </header>

  <section id="products">
    <h2>Бүтээгдэхүүн</h2>
    <div class="product">
      <h3>Жишээ Өсхөө </h3>
      <p>Үнэ: 99,000₮</p>
      <p>Дэлгэрэнгүй тайлбар...</p>
    </div>
    <div class="product">
      <h3>Жишээ Очироо </h3>
      <p>Үнэ: 99,000₮</p>
      <p>Дэлгэрэнгүй тайлбар...</p>
    </div>
  </section>

  <section id="order">
    <h2>Захиалга өгөх</h2>
    <form>
      <input type="text" placeholder="Таны нэр" required>
      <input type="tel" placeholder="Утасны дугаар" required>
      <textarea placeholder="Захиалах бараа, хэмжээ, тоо ширхэг"></textarea>
      <button type="submit">Захиалах</button>
    </form>
  </section>

  <section id="payment">
    <h2>Төлбөрийн заавар</h2>
    <p>QPay, SocialPay, эсвэл банкны шилжүүлгээр төлөх боломжтой.</p>
  </section>

  <section id="delivery">
    <h2>Хүргэлт</h2>
    <p>Улаанбаатар хотод 24-48 цагт, хөдөө орон нутаг руу 3-5 хоногт хүргэнэ.</p>
  </section>

  <section id="faq" class="faq">
    <h2>Асуулт хариулт</h2>
    <div>
      <h4 onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">Захиалга хэдийд баталгаажих вэ?</h4>
      <p>Захиалгын мэдээллийг илгээснээс хойш 1-2 цагт баталгаажна.</p>
    </div>
    <div>
      <h4 onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">Буцаалт хийх боломжтой юу?</h4>
      <p>Хүргэгдсэнээс хойш 48 цагийн дотор буцаах боломжтой.</p>
    </div>
  </section>

  <section id="contact">
    <h2>Холбоо барих</h2>
    <p>Утас: 99112233</p>
    <p>И-мэйл: shop@example.mn</p>
    <p>Facebook хуудас: @MiniStoreMN</p>
  </section>

  <footer>
    <p>&copy; 2025 Mini Store. Бүх эрх хуулиар хамгаалагдсан.</p>
  </footer>
</body>
</html>
