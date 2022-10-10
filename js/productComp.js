Vue.component ('catalog', {
	props: ['products', 'img'],
	template: `
	<div class="products">
        <catalogItem v-for="product of products"
        :key="product.id_product" 
        :product="product"
        :img="img">
        </catalogItem>
    </div>
	`
});

Vue.component ('catalogItem', {
	props: ['product', 'img'],
	template: `
			<div class="product-item" >
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}} $</p>
                    <button class="buy-btn" @click="addProduct(product)">Купить</button>
                </div>
            </div>`,
});