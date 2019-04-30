<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ count }}</p>
        <p>{{ countSum }}</p>
        <el-button type="warning" size="small" @click="adadAsync(100)">点击</el-button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mpaActions, mapActions} from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['name','count']),
        ...mapGetters(['countSum']),
        ...{

        }
    },
    methods: {
        ...mapMutations({
            // add: 'adad'
        }),
        // ...mapActions(['adadAsync'])
        adadAsync() {
            this.$store.dispatch('adadAsync')
        }
     }
}
</script>

<style>

</style>

