const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false,
        basketProducts: [],
        imgCart: 'https://via.placeholder.com/250x150',
        imgProduct: 'https://via.placeholder.com/200x150'
    },
    methods: {
        filter(){
         const regexp = new RegExp(this.userSearch, 'i');
         this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            const find = this.basketProducts.find(products => product.id_product == products.id_product);
            if (find) {
                find.quantity++;
            } else {
                const basketItem = Object.assign({quantity: 1}, product);
                this.basketProducts.push(basketItem);
            }
        },
        outProduct(product) {
            const find = this.basketProducts.find(products => product.id_product == products.id_product);
            if (find.quantity>1) {
                find.quantity--;
            } else {
                this.basketProducts.splice(find, 1);
            }
        }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
});


