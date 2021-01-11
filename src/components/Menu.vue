<template>
<!--    <div id="menu">-->
        <v-row >
            <v-col md="3">
                <h2 class="my-4">Shop Name</h2>
                <div class="text-center">
                    <v-dialog
                            v-model="dialog"
                            max-width="500px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    small
                            >
                                New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.name"
                                                    label="Dessert name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.calories"
                                                    label="Calories"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.fat"
                                                    label="Fat (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.carbs"
                                                    label="Carbs (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.protein"
                                                    label="Protein (g)"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
                <v-card>
                    <v-list dense>
                        <v-list-item link href="#">
                            <v-list-item-content>
                                <v-list-item-title>Category 1</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="#">
                            <v-list-item-content>
                                <v-list-item-title>Category 2</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="#">
                            <v-list-item-content>
                                <v-list-item-title>Category 3</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item><v-list-item link href="#">
                        <v-list-item-content>
                            <v-list-item-title>Category 3</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item><v-list-item link href="#">
                        <v-list-item-content>
                            <v-list-item-title>Category 3</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item><v-list-item link href="#">
                        <v-list-item-content>
                            <v-list-item-title>Category 3</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item><v-list-item link href="#">
                        <v-list-item-content>
                            <v-list-item-title>Category 3</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item><v-list-item link href="#">
                        <v-list-item-content>
                            <v-list-item-title>Category 3</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <v-col md="9" class="mt-3 mb-3">
                <v-row>
                    <v-col v-for="menu in menus" :key="menu.item" lg="3" md="4" sm="6" class="mb-4">
                        <v-card class="h-100">
                            <v-img
                                    class="white--text align-end"
                                    height="200"
                                    :src="menu.image"
                            >
                            </v-img>
                            <v-card-title class="black--text font-weight-bold text-uppercase">
                                <v-row>
                                    <v-col>
                                        <h6 class="font-weight-medium">{{ menu.item }}</h6>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col>
                                        <v-menu offset-y>
                                            <template v-slot:activator="{ on }">
                                                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                                            </template>
                                            <v-list class="responsiveMenu">
                                                <v-list-item>
                                                    <v-list-item-title>Add Image</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>Update Menu</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item >
                                                    <v-list-item-title>Update Image</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>Delete Image</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </v-card-title>
                            <v-card-subtitle class="pb-0 font-italic font-weight-medium text-lowercase">{{ menu.category }}</v-card-subtitle>
                            <v-card-text class="text--primary" style="background-color: aqua">
                                <v-row>
                                    <v-col>
                                        {{ menu.quantity }}
                                    </v-col>
                                    <v-col>
                                        <h3 class="font-weight-medium">Ksh. {{ menu.price }}</h3>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions style="background-color: aqua">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

</template>

<script>
    export default {
        name: "Menu",
        data(){
            return {
                dialog: false,
                dialogDelete: false,
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0,
                    protein: 0,
                },
                defaultItem: {
                    name: '',
                    protein: 0,
                },
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
                messages: [
                    {
                        from: 'You',
                        message: `Sure, I'll see you later.`,
                        time: '10:42am',
                        color: 'deep-purple lighten-1',
                    },
                    {
                        from: 'John Doe',
                        message: 'Yeah, sure. Does 1:00pm work?',
                        time: '10:37am',
                        color: 'green',
                    },
                    {
                        from: 'You',
                        message: 'Did you still want to grab lunch today?',
                        time: '9:47am',
                        color: 'deep-purple lighten-1',
                    },
                ],
            }
        },

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                ]
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },

            deleteItemConfirm () {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },

            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            closeDelete () {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },

    }
</script>

<style scoped>

</style>