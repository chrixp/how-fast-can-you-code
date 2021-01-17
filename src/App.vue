<template>
  <div class="container"> 
    <img class="logo" src="./assets/logo.png" alt="How Fast Can You Code?" />
    <p>You can start testing around by typing Javascript in the first box so that it's similiar to the second box. Once you ready, click start timer. You will have 60 seconds to test your speed. The timer will start when you finish typing the first box.</p>
    <button @click="startCoding()" v-if="!coding" >Start timer</button>
    <h3 v-if="coding">Time: {{time}} seconds</h3>
    <h3 v-if="coding">Speed: {{ wps }} letters per seconds</h3>
    <div class="coding-zone">
        <prism-editor
            class="my-editor" 
            v-model="typedCode"
            :highlight="dynamicHighlighter" 
            line-numbers />
        <br />
        <prism-editor 
            class="my-editor read-only" 
            v-model="generatedCode"
            :readonly="true"
            :highlight="basicHighlighter" 
            line-numbers />
    </div>
    <div class="modal" v-if="finished">
        <h1>Your Final Speed: {{wps}} letters per seconds</h1>
        <button @click="finished = false">x</button>
    </div>

  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; 
import { highlight, languages } from 'prismjs/components/prism-core';
import { getRandomArrayElement } from './utils/random'
import randomJSCode from './database/javascript.js'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const startingTime = 60
const startingCode = "console.log(\"Hello World\")"
export default {
  name: 'App',
  components: {
      PrismEditor
  },
  data: () => ({
    coding: false,
    firstRound: true,
    finished: false,
    wordsTyped: 0,
    wps: 0,
    instruction: '',
    time: 0,
    generatedCode: startingCode,
    typedCode: ''
  }),
  methods: {
        startTimer () {
            const timeInterval = setInterval(() => {
                this.time -= 1;
                if(this.time === 0) {
                    this.coding = false
                    this.finished = true
                    clearInterval(timeInterval);
                } else {
                    this.wps = (this.wordsTyped + this.codeSimilarity.length) / (startingTime - this.time)
                }
            }, 1000)
        },
        newRound() {
            if(this.firstRound) {
                this.firstRound = false
                this.startTimer()
            } else {
                this.wordsTyped += this.generatedCode.length
            }
        },
        startCoding () {
            this.wps = 0;
            this.coding = true;
            this.firstRound = true;
            this.typedCode = '';
            this.generatedCode = startingCode
            this.time = startingTime
        },
        basicHighlighter (code) {
            return highlight(code, languages.javascript);
        },
        dynamicHighlighter () {
            const highlightedSimilarity = this.basicHighlighter(this.codeSimilarity)
            const highlightedDifference = this.codeDifference.length !== 0 ? `<span class="wrong-code">${this.codeDifference}</span>` : ''
            const highlighted = highlightedSimilarity + highlightedDifference
            return highlighted
        },
        generateCode () {
            this.typedCode = ''
            this.generatedCode = getRandomArrayElement(randomJSCode)

        },
  },
  computed: {
    firstDifferenceIndex () {   
        for(var i = 0; i < this.generatedCode.length; i++) {
            if(this.typedCode[i] !== this.generatedCode[i]) {
                return i;
            }
        }

        
        if(this.coding) {
            this.newRound()
        }
        this.generateCode()
        
        return this.generatedCode.length
    },
    codeDifference () {
        if(this.firstDifferenceIndex === this.generatedCode.length) {
            return "";
        } else {
            return this.typedCode.slice(this.firstDifferenceIndex, this.typedCode.length);
        }
    },
    codeSimilarity () { 
        if(this.firstDifferenceIndex === 0) {
            return ''
        } else {
            return this.typedCode.slice(0, this.firstDifferenceIndex)
        }
    },
   },
}
</script>

<style lang="less">
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > button {
        color: red;
        width: 30px;
        height: 30px;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    }
}
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
.logo {
    object-fit: contain;
    max-width: 80%;
}
.code-button {
    width: 350px;
    padding: 8px;
    margin: 12px;
    font-size: 25px;
}

.code-button:hover {
    cursor: pointer;
}

.container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    padding: 2em;
    box-sizing: border-box;
}
.coding-zone {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.my-editor {
/* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;
    width: 80%;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    margin: 20px;
    min-height: 100px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
</style>
