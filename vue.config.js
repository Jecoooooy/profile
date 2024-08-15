const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<profile>/' // Replace with your repository name
    : '/'
  // transpileDependencies: true
})

// import { defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins:  [
//     vue()
//   ]
// })