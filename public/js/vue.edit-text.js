Vue.component('inlinetextinput', {
    data: function () {
      return {
        showEdit: false,
        value: "",
        displayValueArray: [],
        valuearray: []
      }
    },
    props: {
      placeholder: {
        type: String,
        default: "Type and Hit Enter"
      },
      valueprop: {
        type: String,
        default: ""
      },
      valuearrayprop: {
          type: Array,
          default() {
            return []
        }
      },
      emptystate: {
          type: String,
          default: "No Text Found"
      },
      leftaligned: {
        type: Boolean,
        default: false
      },
      isplaintext: {
        type: Boolean,
        default: false
      },
      showediticon: {
        type: Boolean,
        default: false
      },
      isrichtextarea: {
          type: Boolean,
          default: false
      },
      type: {
        type: String,
        default: "text"
      },
      unit: {
        type: String,
        default: ""
      },
      preunit: {
        type: String,
        default: ""
      }
    },
    created: function(){
        if(this.valueprop){
            this.value = this.valueprop;
        }
        if(this.valuearrayprop){
            if(this.type === 'select-single'){
                this.valuearray = this.valuearrayprop;
                for(var i=0; i<this.valuearray.length; i++){
                    if(this.valuearray[i].selected){
                        this.value = this.valuearray[i].id;
                    }
                }
            }
            if(this.type === 'select-multiple'){
                this.valuearray = this.valuearrayprop;
                for(var i=0; i<this.valuearray.length; i++){
                    if(this.valuearray[i].selected){
                        this.displayValueArray.push(this.valuearray[i]);
                    }
                }         
            }
        }
    },
    methods: {
        toggleEditState: function(el){
            if(!el.target.classList.contains('no-change')){
                if(this.showEdit){
                    this.showEdit = false;
                }else{
                    this.showEdit = true;
                }
            }
        },
        processSelect2: function(list){
            this.displayValueArray = list;
        }
    },
    template: `
        <div class="form-inline-edit">
            <div 
            v-on:click="toggleEditState"
            v-bind:class="{ 'justify-content-start': leftaligned, 'p-relative': showediticon }"
            class="toggle" 
            v-if="!showEdit">
                <i v-if="showediticon"  class="fas fa-pencil p-absolute-top-right"></i>
                <div v-if="type !== 'select-multiple'">
                    <div v-if="value.length"
                    v-bind:class="{'pr-3': showediticon }">
                        <div v-if="isplaintext" class='foo'><span v-if="preunit.length">{{preunit}}</span>{{value}} <span v-if="unit.length">/{{unit}}</span></div>
                        <span v-else class="tag tag-blue3"><span v-if="preunit.length">/{{preunit}}</span>{{value}}  <span v-if="unit.length">/{{unit}}</span></span>
                    </div>
                    <div v-else v-html="emptystate"></div>
                </div>
                <div v-else>
                    <div v-if="displayValueArray.length">
                        <span v-for="item in displayValueArray"  class="tag tag-blue3 mr-1">{{item.text}}</span>
                    </div>
                    <div v-else v-html="emptystate"></div>
                </div>
            </div>
            <div v-if="showEdit">
                <div>
                    <input
                    v-if="type === 'text' && isrichtextarea === false"
                    class="form-control" 
                    :placeholder="placeholder" 
                    v-model="value" 
                    type="text"/>

                    <div v-if="type === 'select-single' && isrichtextarea === false">
                        <select class="form-control" v-model="value">
                            <option v-for="option in valuearray" :selected="option.selected" v-bind:value="option.id">{{option.text}}</option>
                        </select>
                    </div>

                    <div v-if="type === 'select-multiple' && isrichtextarea === false">
                        <select2 @select2="processSelect2" placeholder="None Selected"  :options="valuearray">
                            <option disabled value="0">Select one</option>
                        </select2> 
                    </div>

                    <div v-if="isrichtextarea"
                    class="form-floating">
                        <div class="form-floating form-wyziwig">
                            <div class="wyziwig">
                                <div class="wyziwig-menu">
                                    <button type="button" class="btn btn-icon"><i aria-hidden="true" class="fad fa-bold"></i></button> <button type="button" class="btn btn-icon"><i aria-hidden="true" class="fad fa-italic"></i></button>
                                    <button type="button" class="btn btn-icon"><i aria-hidden="true" class="fad fa-list-ul"></i></button> <button type="button" class="btn btn-icon"><i aria-hidden="true" class="fad fa-list-ol"></i></button>
                                </div>
                            </div>
                            <textarea v-model="value" rows="6" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
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