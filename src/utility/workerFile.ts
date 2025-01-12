import { createChunk } from '@/utils/index'
onmessage = async (e) => {
    const { file, start, end, CHUNK_SIZE } = e.data;
    const result = [];
    for (let i = start; i < end; i++) {
        const chunk = createChunk(file, i, CHUNK_SIZE);
        result.push(chunk);
    }
    const chunks = await Promise.all(result);
    postMessage(chunks);
}
