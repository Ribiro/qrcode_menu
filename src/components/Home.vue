<template>
    <div id="home">
        <v-container class="pa-4 container--fluid grid-list-md">
            <v-layout wrap>
                <v-flex xs12>
                    <h1 class="display-1 mb-1">Dashboard</h1>
                </v-flex>
                <v-flex md6>
                    <v-card height='100%'>
                        <v-card-title style="background-color: aqua" class="darken-4 font-weight-light font-italic text-center text-uppercase">
                            <span><v-icon>mdi-barcode-scan</v-icon></span>
                            <v-spacer></v-spacer>
                            <span>QRCode</span>
                        </v-card-title>
                        <v-card-text class="display-1 mb-2 font-weight-light font-italic text-center text-h6">
                            <v-expansion-panels>
                                <v-expansion-panel
                                >
                                    <v-expansion-panel-header>
                                        Image
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-img
                                                class="white--text align-end"
                                                src="/qr.png"
                                        >
                                        </v-img>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-card-text>
                        <v-card-actions class="grey lighten-3">
                            <v-btn text class="grey lighten-3 blue--text" :to="{name: 'menus'}">
                                <span><v-icon>mdi-download</v-icon></span>
                                <v-spacer></v-spacer>
                                Download
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-layout wrap>
                        <v-flex xs6>
                            <v-card height="100%" class="text-xs-center">
                                <v-card-title style="background-color: aqua" class="font-weight-light font-italic">
                                    <span><v-icon>mdi-book-check</v-icon></span>
                                    <v-spacer></v-spacer>
                                    <span>menu items</span>
                                </v-card-title>
                                <v-card-text class="display-1 mb-2 font-weight-light font-italic text-center text-h6">26</v-card-text>
                                <v-card-actions class="grey lighten-3">
                                    <v-btn text class="grey lighten-3 blue--text" :to="{name: 'menus'}">Go to Menus</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                        <v-flex xs6>
                            <v-card height="100%" class="text-xs-center">
                                <v-card-title style="background-color: aqua" class="font-weight-light font-italic">
                                    <span><v-icon>mdi-account-circle</v-icon></span>
                                    <v-spacer></v-spacer>
                                    <span>profile</span>
                                </v-card-title>
                                <v-card-text class="display-1 mb-2 font-weight-light font-italic text-center font-weight-thin text-h6">Restaurant Name</v-card-text>
                                <v-card-actions class="grey lighten-3">
                                    <v-btn text class="grey lighten-3 blue--text" :to="{name: 'profile'}">
                                        <span><v-icon>mdi-pencil</v-icon></span>
                                        <v-spacer></v-spacer>
                                        Edit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12>
                    <v-data-table
                            :headers="headers"
                            :items="desserts"
                            sort-by="calories"
                            class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar
                                    flat
                            >
                                <v-toolbar-title>My CATEGORIES</v-toolbar-title>
                                <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
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
                                            New Category
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
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                    small
                                    @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:no-data>
                            <v-btn
                                    color="primary"
                                    @click="initialize"
                            >
                                Reset
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
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
        }),

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