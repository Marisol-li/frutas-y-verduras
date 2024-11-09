const app = Vue.createApp({
    data() {
        return {
            newFruit: {
                name: '',
                quantity: 0,
                price: 0
            },
            fruits: []
        };
    },
    computed: {
        subtotal() {
            return this.fruits.reduce((sum, fruit) => sum + (fruit.quantity * fruit.price), 0);
        },
        iva() {
            return this.subtotal * 0.16; // 16% IVA
        },
        total() {
            return this.subtotal + this.iva;
        }
    },
    methods: {
        addFruit() {
            if (this.newFruit.name && this.newFruit.quantity > 0 && this.newFruit.price > 0) {
                this.fruits.push({ ...this.newFruit });
                this.newFruit.name = '';
                this.newFruit.quantity = 0;
                this.newFruit.price = 0;
            }
        },
        incrementQuantity(index) {
            this.fruits[index].quantity++;
        },
        decrementQuantity(index) {
            if (this.fruits[index].quantity > 0) {
                this.fruits[index].quantity--;
            }
        }
    }
});

app.mount('#app');
