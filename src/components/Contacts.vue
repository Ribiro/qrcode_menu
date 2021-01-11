<template>
    <v-row>

        <sidebar></sidebar>

        <v-col md="9" class="mt-3 mb-3">
            <v-row>
                <v-col v-for="product in menus" :key="product.item" lg="3" md="4" sm="6" class="mb-4">
                    <v-card class="h-100">
                        <a href="#"><v-img :src="product.image" alt=""/></a>
                        <v-card-title>
                            <a href="#">{{ product.item }}</a>
                        </v-card-title>
                        <v-card-subtitle>
                            <h3>${{ product.price }}</h3>
                        </v-card-subtitle>
                        <v-card-text>{{ product.quantity }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <!-- /.row -->

</template>

<script>
    import Sidebar from "../components/Sidebar";
    export default {
        data() {
            return {
                products: {},
                menus: [
                    {item: 'tea', quantity: 'a cup', price: 100, category: 'breakfast', image: '/img1.jpg'},
                    {item: 'milk', quantity: 'a cup', price: 100, category: 'breakfast', image: '/img2.jpg'},
                    {item: 'rice', quantity: 'a plate', price: 100, category: 'lunch', image: '/img3.jpg'},
                    {item: 'tusker', quantity: '500 ml', price: 380, category: 'beer', image: '/img4.jpg'},
                    {item: 'black&white', quantity: '750 ml', price: 1000, category: 'whiskey', image: '/img5.jpg'},
                    {item: 'chrome', quantity: '250 ml', price: 120, category: 'vodka', image: '/img6.jpg'},
                    {item: 'coffee', quantity: 'a cup', price: 100, category: 'breakfast', image: '/img7.jpg'},
                    {item: 'banana', quantity: 'one', price: 10, category: 'fruits', image: '/img8.jpg'},
                    {item: 'chips', quantity: 'a plate', price: 100, category: 'snack', image: '/img9.jpg'},
                    {item: 'cappucino', quantity: 'a cup', price: 100, category: 'breakfast', image: '/img10.jpg'},
                    {item: 'ugali', quantity: 'a plate', price: 100, category: 'lunch', image: '/img11.jpg'},
                ],
            }
        },
        // mounted() {
        //     axios.get('/api/products')
        //         .then(response => {
        //             this.products = response.data.data;
        //         });
        // },
        components: {
            'sidebar': Sidebar
        }
    }
</script>