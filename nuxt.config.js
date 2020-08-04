import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:'google-site-verification', content: 'iWjlqPN-pSD8IK4fTCw06h5wHRr9soXXk4BIBeKyJYI' },
     // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
     { hid: 'description', name: 'uihbtedu', content: 'Stem higher institute of health and business Douala Cameroon' }
   
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/favicons/favicon-16x16.png' },

      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" },

      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/kipso-icons/style.css" },
      { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/assets/css/vegas.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },

    ],

    script: [
      { src: "/assets/js/jquery.min.js", body: true },
      { src: "/assets/js/bootstrap.bundle.min.js", body: true },
      { src: "/assets/js/waypoints.min.js", body: true },
      { src: "/assets/js/owl.carousel.min.js", body: true },
      { src: "/assets/js/jquery.counterup.min.js", body: true },
      { src: "/assets/js/TweenMax.min.js", body: true },
      { src: "/assets/js/wow.js", body: true },
      { src: "/assets/js/jquery.magnific-popup.min.js", body: true },
      { src: "/assets/js/countdown.min.js", body: true },
      { src: "/assets/js/vegas.min.js", body: true },
      { src: "/assets/js/jquery.validate.min.js", body: true },
      { src: "/assets/js/jquery.ajaxchimp.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f16101',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

    {src: '~/plugins/full-calendar', ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

     // Simple usage
   

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    //'@nuxtjs/vuetify',
  ],
  /*
  ** Build configuration
  */
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
 vuetify: {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
},

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

   // Doc: https://github.com/nuxt-community/vuetify-module
  
}
