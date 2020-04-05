export default {
    mode: "universal",
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: "/foo",
                component: resolve(__dirname, "pages/othername.vue"),
            });
        },
        // middleware: ["auth"],
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
                content: process.env.npm_package_description || "",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["element-ui/lib/theme-chalk/index.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "@/plugins/element-ui",
        "@/plugins/api-inject",
        "@/plugins/interceptor",
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxt/typescript-build"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "@nuxtjs/axios",
        "cookie-universal-nuxt",
    ],
    axios: {
        proxy: true,
    },
    proxy: {
        "/api": "http://localhost:8080",
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};