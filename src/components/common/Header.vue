<template>
    <v-container>
        <v-toolbar flat class="mainHeader grey lighten-4">
            <v-toolbar-title>QRMenu</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text :to="{name: 'home'}">Home</v-btn>
                <v-btn text :to="{name: 'menus'}">Menus</v-btn>
<!--                <v-btn text :to="{name: 'categories'}">Categories</v-btn>-->
<!--                <v-btn text :to="{name: 'contacts'}">Contact Us</v-btn>-->
                <v-spacer></v-spacer>

<!--                <v-btn text color="grey darken-1" small v-if="loggedIn" @click="logout" rounded :to="{ name:'landing' }">-->
<!--                    <span>Sign Out</span>-->
<!--                    <v-icon right>mdi-exit-to-app</v-icon>-->
<!--                </v-btn>-->
            </v-toolbar-items>
            <v-toolbar-items>
                <v-btn flat color="grey lighten-3" class="primary" rounded :to="{ name:'login' }">Login</v-btn>
            </v-toolbar-items>
            <div class="hidden-sm-and-up grey lighten-4">
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                    </template>
                    <v-list class="responsiveMenu">
                        <v-list-item :to="{ name:'home' }">
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item :to="{ name:'menus' }">
                            <v-list-item-title>Menus</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
                {icon: 'folder', text: 'My Houses', route: '/houses'},
                {icon: 'supervisor_account', text: 'Tenants', route: '/tenants'},
                {icon: 'schedule', text: 'Expenses', route: '/expenses'},
            ]
        })
    };
</script>