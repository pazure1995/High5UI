Vue.component('vuetagsinput', {
    data: function () {
      return {
          tag: '',
          tags: [],
      }
    },
    props: {
      placeholder: {
        type: String,
        default: "Type Skill Name and Hit Enter"
      },
      tagslist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created: function(){
      if(this.tagslist.length){
        this.tags = this.tagslist;
      }
    },
    template: '<div><vue-tags-input v-model="tag" :placeholder="placeholder" :tags="tags" @tags-changed="newTags => tags = newTags" /></div>'
  });
  Vue.component('vueemailsinput', {
    data: function () {
      return {
          tag: '',
          tags: [],
          placeholder: "Type Email and Hit Enter"
      }
    },
    template: '<div><vue-tags-input v-model="tag" :placeholder="placeholder" :tags="tags" @tags-changed="newTags => tags = newTags" /></div>'
  });