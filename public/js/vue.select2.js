Vue.component("select2", {
    data: function () {
      return {
        masterOptions: [],
        tier: null
      }
    },
    created: function(){
        this.masterOptions = this.options;
        if(this.masterOptions.length){
          this.tier = this.masterOptions[0].tier;
        }
    },
    computed: {
        getDomId: function(){
          return "select2_"+this.tier
        }
    },
    props: ["options", "value","single","disabled"],
    template: `
      <select :disabled="disabled" :id="getDomId" :multiple="!single">
          <slot></slot>
      </select>`,
    mounted: function () {
      var vm = this;
       var s2 = $(this.$el)
        // init select2
        .select2({ data: this.masterOptions })
        .trigger("change")
        // emit event on change.
        .on("change", function (value) {
          
          this.masterOptions = $(this).select2('data');
          if(!vm.single){
            if(vm.$parent.updateSelect2){
              vm.$parent.updateSelect2(this.masterOptions,vm.tier);
            }
          }
          vm.$emit('select2', this.masterOptions)
        });
        
        if(!this.single){
          if(vm.$parent.registerSelect2){
            vm.$parent.registerSelect2(s2);
          }
        }
    },
    destroyed: function () {
      $(this.$el).off().select2("destroy");
    }
  });