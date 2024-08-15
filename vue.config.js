const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath: '/vue-deploy/',
  transpileDependencies: true
})

// import { defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins:  [
//     vue()
//   ]
// })