const CHUNK_SIZE = 1024 * 1024 * 5;//5M
const THEARD_COUNT = navigator.hardwareConcurrency || 4;//线程硬件并发数=cpu内核数
const cutFile = (file: File) => {
    return new Promise((resolve, reject) => {
        const result: any = [];
        const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
        const threadChunkCount = Math.ceil(chunkCount / THEARD_COUNT);
        let finishCount = 0;
        for (let i = 0; i < THEARD_COUNT; i++) {
            const start = i * threadChunkCount;
            const end = Math.min(start + threadChunkCount, chunkCount);
            const worker = new Worker(new URL('./workerFile.ts', import.meta.url), { type: 'module' });
            worker.postMessage({
                file,
                start,
                end,
                CHUNK_SIZE
            });
            worker.onmessage = (e) => {
                worker.terminate();
                result[i] = e.data;
                finishCount++;
                if (finishCount === THEARD_COUNT) {
                    console.log(result);
                    resolve(result.flat());
                }
            }
        }
    })

}
export { cutFile }