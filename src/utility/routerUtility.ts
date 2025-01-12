
import { useRouter } from 'vue-router'
const CHUNK_SIZE = 1024 * 1024 * 5;//5M
import { createChunk } from '@/utils/index'
const getRouter = () => {
    const router = useRouter()
    return router.options?.routes?.slice(2)
}

const cutFile = async (file: File) => {
        const result = [];
        const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
        for (let i = 0; i < chunkCount; i++) {
           const chunk = createChunk(file,i,CHUNK_SIZE);
            result.push(chunk);
        }
        return Promise.all(result);

}   

export { getRouter,cutFile }