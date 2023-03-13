export default {
    // Target: https://go.nuxtjs.dev/config-target
    // server: {
    //     host: '0' // default: localhost
    //   },
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'تریگت',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/icon.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap-grid.min.css", '~/assets/inside/WebFonts/css/fontiran.css', '~/assets/inside/css/inside.css', '~/assets/inside/css/all.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/masonary.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module'
        '@nuxtjs/pwa',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // ['nuxt-twa-module', {
        //     /* module options */
        //     defaultUrl: 'https://treaget.com',
        //     hostName: 'treaget.com',
        //     // sha256Fingerprints: ['/* your SHA-256 keys */'],
        //     applicationId: 'com.treaget.treagetlight',
        //     launcherName: 'treaget',
        //     versionCode: 1,
        //     versionName: '1.0',
        //     statusBarColor: 'white',

        //     /* optional */
        //     /* overwrite default location for icon */
        //     iconPath: '/static/icon.png',
        //     /* Overwrite folder where to put .wellknown */
        //     distFolder: '.nuxt/dist/client',
        // }],

        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // 'nuxt-i18n',
        '@nuxtjs/sitemap',
        
    ],
    messaging: {
        createServiceWorker: false,
        actions: [
          {
            action: 'randomName',
            url: 'treaget.com'
          }
        ],
        // fcmPublicVapidKey: '<publicVapidKey>' // OPTIONAL : Sets vapid key for FCM after initialization
    },
    sitemap: {
        hostname: 'https://treaget.com',
        gzip: true,
        exclude: [

            '/api/**',
            '/t/**'
        ],
        routes: [
            '/',
            '/t/explore',
            '/t/login',
            '/t/signUp',
            '/t/rules',
            '/t/contactUs',

        ]
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'fa',
            name: 'treaget',
            orientation: 'portrait',
            background_color: '#FFFFFF',
            theme_color: '#e03800',
            useWebmanifestExtension: false
        },

    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}