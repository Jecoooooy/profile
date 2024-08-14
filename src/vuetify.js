
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const lightTheme = {
    dark: false,
    colors: {
        primary: "#212121",
        secondary: "#607D8B",
        surface:'#ECEFF1',
        third:"#CFD8DC",
        fourth:"#92aed9",
        accent: "#FFB74D",
        error: "#B71C1C",
        info: "#FFECB3",
        success: "#C8E6C9",
        warning: "#FFC107",
        background:"#ECEFF1",
        subcolor:"#78909C",

    },
};
const darkTheme = {
    dark: true,
    colors: {
        primary: "#212121",
        secondary: "#607D8B",
        accent: "#FFB74D",
        error: "#B71C1C",
        info: "#FFECB3",
        success: "#C8E6C9",
        warning: "#FFC107",
        background:"#ECEFF1",
        surface:'#B0BEC5',
        subcolor:"#78909C",

    },
};


const vuetify = createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: "lightTheme",
        themes: {
            lightTheme,
            darkTheme
        },
    },
    icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi,
    },
    },
    defaults: {
        global: {
            ripple: true,
        },
        VDialog: {
        transition:'fab-transition'
        },
        VCard: {
        transition:'fab-transition'
        },
    },
})

export default vuetify