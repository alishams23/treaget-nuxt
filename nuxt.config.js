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
        ['nuxt-twa-module', {
            /* module options */
            defaultUrl: 'https://treaget.com',
            hostName: 'treaget.com',
            sha256Fingerprints: ['45:B5:72:8F:DA:E2:E6:5B:E2:09:DB:D4:4B:22:EE:40:1E:A2:27:42:CC:9F:47:CB:42:B2:CE:88:1F:BF:EE:96'],
            applicationId: 'com.treaget.treaget',
            launcherName: 'treaget',
            versionCode: 1,
            versionName: '1.0.0',
            statusBarColor: '#FF4500',

            /* optional */
            /* overwrite default location for icon */
            iconPath: '/static/icon.png',
            /* Overwrite folder where to put .wellknown */
            distFolder: '.nuxt/dist/client',
        }],

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