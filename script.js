//получение DOM элементов
const cardWrap = document.querySelector('.products');


//создание карточки товара
const createCard = (product) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
		<a class="product-card" href="#">
			<img src="assets/img/${product.name}/${product.images[0]}" alt="foto">
      <p class="product-card__name">${product.name}</p>
      <div class="product-card__price">
        <p class="product-card__price-new">${product.newprice}</p>
        <p class="product-card__price-old">${product.oldprice}</p>
      </div>
      <button class="product-card__btn">Кнопка</button>
		</a>
	`;
  cardWrap.append(card);
};



//запрос
fetch('db.json')
  .then(data => data.json())
  .then(response => response.product.forEach(item => createCard(item)));