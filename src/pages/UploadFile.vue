<template>
    <div>
        <input type="file" @change="uploadFile($event)"></input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cutFile } from '@/utility/fileCut'
// import { cutFile } from '@/utility/routerUtility'
const uploadFile = async (e: Event) => {
    const file = e?.target?.files[0];
    console.time('cutFile')
    const chunks = await cutFile(file);
    console.timeEnd('cutFile')
    console.log(chunks,'chunks=========')
}
</script>