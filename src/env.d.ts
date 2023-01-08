//see: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
    readonly VITE_GA_CODE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}