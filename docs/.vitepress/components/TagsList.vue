<template lang="html">
    <div v-for="tag of tags">
        <h2 :id="tag.key" :class="`mytag tag-${tag.key}`">{{ tag.key }}</h2>
        <ul>
            <li v-for="post of tag.posts">
                <a :href="post.url">{{ post.urlname }}</a>
                &nbsp;
                <span v-for="tag in post.tags" :key="tag"><a :href="`/tags.html#${tag}`" :class="`mytag mytag-link tag-${tag}`">{{ tag }}</a></span>
                <br>
                <span class="title">{{ post.title || '' }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { data as posts } from './posts.data'

let log_ = '...'
const log = (s) => {
    log_ += "\n" + s
}

function getTags(posts) {

    let tags = {}
    for (let post of posts) {
        if (post.tags) {
            for (let tag of post.tags) {
                if (!(tag in tags)) {
                    tags[tag] = []
                }
                tags[tag].push(post)
            }
        }
    }

    const tagsSorted: any = [];
    const keysSorted = Object.keys(tags).sort();
    for (let key of keysSorted) {
        const item = {
            key,
            posts: tags[key]
        };
        tagsSorted.push(item);
    }

    // return tags
    return tagsSorted;
}

const tags = getTags(posts);

</script>