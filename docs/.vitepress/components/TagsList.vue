<template lang="html">
    AAA<pre>{{ pageData }}</pre>BBB
</template>
  
<script>
import { useData } from 'vitepress'

export default {
    data() {
        return {
            pageData: useData()
        }
    }
}

</script>