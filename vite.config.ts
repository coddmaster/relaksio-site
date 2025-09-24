import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Project site at https://coddmaster.github.io/relaksio-site
export default defineConfig({
plugins: [react()],
base: '/relaksio-site/',
})