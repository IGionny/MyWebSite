import {defineConfig, loadEnv, ConfigEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {createHtmlPlugin} from "vite-plugin-html";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            vue(),
            tailwindcss(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        gacode: env.VITE_GA_CODE,
                    }
                }
            })],
    }
});
