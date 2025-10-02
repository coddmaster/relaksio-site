import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Project site at https://coddmaster.github.io/relaksio-site

export default defineConfig({
base: '/',
plugins: [react()],
})