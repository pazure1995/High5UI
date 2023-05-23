Vue.component('inlinetagsinput', {
    data: function () {
      return {
          tag: '',
          tags: [],
          displayList: [],
          hasExtra: false,
          extra: 0,
          showEdit: false,
          showExtra: false
      }
    },
    props: {
      placeholder: {
        type: String,
        default: "Type Skill Name and Hit Enter"
      },
      truncate: {
          type: Number,
          default: 2
      },
      tagsprop: {
          type: Array,
          default: function () {
            return []
          }
      },
      emptystate: {
          type: String,
          default: "No Tags Found"
      }
    },
    watch: {
        tags: function (val) {
          this.updateDisplay();
        },
    },
    created: function(){
        if(this.tagsprop.length){
            this.tags = this.tagsprop;
        }

    },
    methods: {
        updateDisplay: function(){
            this.displayList = [];
            for(var i =0; i<this.tags.length; i++){
                if( i <= (this.truncate - 1)){
                    this.displayList.push(this.tags[i]);
                }
                if(i > (this.truncate - 1) && this.showExtra === true){
                    this.displayList.push(this.tags[i]);
                }
            }
            if(this.tags.length > this.truncate){
                this.hasExtra = true;
                this.extra = this.tags.length - this.truncate;
            }else{
                this.hasExtra = false;
                this.extra = 0;
            }
        },
        toggleExtra: function(){
            if(this.showExtra){
                this.showExtra = false;
                this.updateDisplay();
            }else{
                this.showExtra = true;
                this.updateDisplay();
            }
        },
        toggleEditState: function(el){
            if(!el.target.classList.contains('no-change')){
                if(this.showEdit){
                    this.showEdit = false;
                }else{
                    this.showEdit = true;
                }
            }
        }
    },
    template: `
        <div class="form-inline-edit">
            <div v-on:click="toggleEditState" class="toggle" v-if="!showEdit">
                <div class="d-flex flex-wrap align-items-center justify-content-end" v-if="displayList.length">
                    <div v-for="(item, index) in displayList" class="tag tag-blue3 my-1 ml-1">
                        {{item.text}}   
                    </div>
                    <button 
                    v-if="hasExtra" 
                    v-on:click="toggleExtra"
                    type="button" 
                    class='btn btn-text ml-1 my-1 no-change'>
                        <span class="tag tag-blue1 no-change">
                            <span v-if="showExtra" class="no-change">Show Less</span>
                            <span v-else class="no-change">{{extra}}+</span>
                        </span>
                    </button>
                </div>
                <div v-else v-html="emptystate"></div>
            </div>
            <div v-if="showEdit">
                <div><vue-tags-input v-model="tag" :placeholder="placeholder" :tags="tags" @tags-changed="newTags => tags = newTags" /></div>
                <div class="p-2 bg-gray3">
                    <button v-on:click="toggleEditState" type="button" class="btn btn-sm btn-primary">
                        <i class="fal fa-fw fa-check mr-1"></i>
                        Done
                    </button>
                </div>
            </div>
        </div>
    `
  });