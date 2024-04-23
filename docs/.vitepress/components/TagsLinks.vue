<template lang="html">
    <div>
        <span v-for="tag in $frontmatter.tags" :key="tag"><a :href="`/tags.html#${tag}`" :class="`mytag tag-${tag}`">{{ tag }}</a></span>
    </div>
</template>

<script>
export default {

}
</script>
