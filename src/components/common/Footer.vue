<template>
    <v-container>
        <v-footer padless >
            <v-card flat class="text-center grey lighten-4">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text
                        class="pt-0"
                >cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                    {{ new Date().getFullYear() }} —
                    <strong>QRMenu Project</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            icons: [
                "fab fa-facebook",
                "fab fa-twitter",
                "fab fa-google-plus",
                "fab fa-linkedin",
                "fab fa-instagram"
            ]
        })
    };
</script>