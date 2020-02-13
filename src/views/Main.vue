<template>
    <div>
        <div class="card mt-4 mb-4">
            <div class="card-body">
                <h2 class="text-center mb-2">Welcome to Vue ~ Trickas | {{ text }}</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3>About Me</h3>
                                <hr>
                                <p>Name: {{ name }}</p>
                                <p>Class: {{ classes }}</p>
                                <p>School: {{ school }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3>Another Link</h3>
                                <hr>
                                <router-link :to="{name: 'module'}" class="text-decoration-none">Module Link</router-link>
                                <br>
                                <a :href="'https://nanime.tv/'" class="text-decoration-none">Web Anime Link</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3>Github Repository ( {{gitLen}} )</h3>
                                <hr>
                                <ol>
                                    <li v-for="(g, index) in github" :key="index">
                                        {{ g.name }}
                                    </li>
                                    <div v-if="gitLen > 7">
                                        <a :href="gitlink" class="text-decoration-none" target="_blank">See  More</a>
                                    </div>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3>Test Vuex (2)</h3>
                                <hr>
                                Example 1
                                <div style="font-weight: bold;">{{ text1 }}</div>
                                Example 2
                                <div style="font-weight: bold;">{{ text2 }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
document.title = "Trickas - Main"

export default {
    name: "test1",
    data: () => {
        return {
            name: "Kevin Surya Augusto",
            classes: "XII RPL 2",
            school: "SMK Taruna Bhakti",
            gitlink: 'https://github.com/Trickascp',
            gitLen: 1,
            gitApi: 'https://api.github.com/users/trickascp/repos'
        }
    },
    mounted: function () {        
        this.$store.dispatch('test1/GET_DATA_GITHUB', this.gitApi)
        // this.$store.dispatch('test1/SET_NEW_TEXT')
        // this.$store.dispatch('test2/SET_NEW_TEXT1')
        // this.$store.dispatch('test2/SET_NEW_TEXT2')
    },
    computed: {
        text: function(){
            return this.$store.getters['test1/text']
        },
        github: function(){
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            var len = this.gitLen = this.$store.getters['test1/github'].length
            if(len > 7){
                return this.$store.getters['test1/github'].slice(0,7)
            }else{
                return this.$store.getters['test1/github']
            }
            
        },
        text1: function (){
            return this.$store.getters['test2/msg1']
        },
        text2: function (){
            return this.$store.getters['test2/msg2']
        }
    }
}
</script>