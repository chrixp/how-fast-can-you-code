<template>
  <div class="hello">
     <prism-editor 
        v-bind:class="{ 'read-only': readOnly }"
        :input="updateCode(code)"
        :readonly="readOnly"
        class="my-editor" 
        v-model="code"
        :highlight="highlighter" 
        line-numbers></prism-editor>
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; 
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

export default {
    name: 'CodeEditor',
    components: {
        PrismEditor,
    },
    props: {
        starterCode: String,
        codeDifference: String,
        codeSimilarity: String,
        readOnly: Boolean,
    },
    data: () => ({
        code: ''
    }),
    mounted() {
        this.code = this.starterCode
    },
    methods: {
        highlighter (code) {
            if(this.readOnly || this.codeDifference.length === 0) {
                return highlight(code, languages.js);
            } else {
                const highlightedSimilarity = highlight(this.codeSimilarity, languages.js)
                const highlightedDifference = `<span class="wrong-code">${this.codeDifference}</span>`
                const highlighted = highlightedSimilarity + highlightedDifference
                return highlighted
            }
        },
        updateCode (code) {
            this.$emit('codeChange', code)
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.wrong-code {
    color: white;
    background-color: red;
}
.read-only {
    textarea, pre {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}
.my-editor {
/* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
</style>
