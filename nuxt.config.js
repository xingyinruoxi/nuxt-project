export default {
    mode: "universal",
    /*  router: {
                        extendRoues(routes, resolve) {
                            routes.push({
                                path: "/foo",
                                component: resolve(__dirname, "pages/othername.vue")
                                    // component: resolve(__dirname, "pages/othername.vue")
                            });
                        }
                    }, */
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: "/foo",
                component: resolve(__dirname, "pages/othername.vue")
            });
        }
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxt/typescript-build"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt",
        "@nuxtjs/axios"
    ],
    axios: {
        proxy: true
    },
    proxy: {
        "/api": "http://localhost:8080"
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};