// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
      modules: [
        '@nuxtjs/tailwindcss'
    ],
    app:{
        head:{
          link:[
            {
              rel: 'stylesheet',
              href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
            }

          ]
        }      
    }
})
