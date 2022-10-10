Vue.component ('cart', {
	props: ['basketProducts', 'img'],
	template: `
	<div class="cart-block">
        <div v-for="product of basketProducts">
            <img :src="imgCatalog" alt="Some img">
	        <div class="desc">
	            <h3>{{product.product_name}}</h3>
	            <p>{{product.price}} $</p>
	            <p> Добавлено {{product.quantity}} шт.</p>
	            <p>Общая стоимость {{product.price * product.quantity}}</p>
	            <button class="buy-btn" @click="outProduct(product)">Удалить из корзины</button>
	        </div>
	    </div>
    </div>
	`
});