Vue.component ('cart', {
	props: ['basketProducts', 'img'],
	template: `
	<div class="cart-block">
        <cartProduct
        v-for="product of basketProducts"
        :product="product"
        :img="img"></cartProduct>
    </div>
	`
});

Vue.component ('cartProduct', {
	props: ['product', 'img'],
	template: `
        <div>
            <img :src="img" alt="Some img">
	        <div class="desc">
	            <h3>{{product.product_name}}</h3>
	            <p>{{product.price}} $</p>
	            <p> Добавлено {{product.quantity}} шт.</p>
	            <p>Общая стоимость {{product.price * product.quantity}}</p>
	            <button class="buy-btn" @click="$parent.$emit('out-product', product)">Удалить из корзины</button>
	        </div>
	    </div>
	`
});

