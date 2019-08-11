/**
* 查询
 */
 <template>
 <div class='input-container'>
 <input v-model='text'/>    
<div class='list' v-if='showList'>
    <div v-for='(item,index) in list' :key='index' class='option' @click='clickOption(item)'>
        <span>item.value</span>
    </div>
</div>
 </div>
 </template>
<script>
import {searchStock} from '../mock'
export default {
    name:'search-input',
    data() {
        return {
            list: [],
            text: '',
            showList: false,
            selectedItem: {}
            // isSelectChange: false,
        }
    },
    watch: {
        text(newText, oldText) {
            this.list = []
            this.showList = false
            this.selectedItem = {}
            if(newText.length===0) {
                return
            }
            console.log('Watch trigger:new and old',newText,oldText)
            // if(this.isSelectChange) {

            // } else {

            this.updateList()
            // }
        }
    },
    methods: {
        updateList() {
            // let current = 
            searchStock(this.text).then(
                (res) => {
                    console.log('Res list',res)
                    this.showList = true
                    this.list = res
                },
                (err) => {

                }
            )
        },
        // inputChange(e) {

        // },
        clickOption(item) {
            console.log('Select item',item)
            this.showList = false
            let node = document.querySelector('input')
            console.log(node)
            
            this.selectedItem = item
            this.$nextTick(() => {

            node.value = item.value
            })
        }
    }

}
</script> 
<style scoped>
input {
    width: 200px;
}
.list {
    max-height: 300px;
}
.option {
    width: 60px;
    border: 1px solid black;
	overflow: scroll;
}
</style>
