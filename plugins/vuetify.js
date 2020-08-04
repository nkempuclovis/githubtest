// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//import '@mdi/font/css/materialdesignicons.css'
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify)

const opts = {}



export default ctx => {
    const vuetify = new Vuetify({
      theme: {
       // dark: false, // From 2.0 You have to select the theme dark or light here
        themes: {
            light: {
             // ...colors
             primary: colors.red.base
            },
            dark: {
              // colors
            }
          }
      }
    })
  
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
  }