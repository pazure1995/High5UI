Vue.component('addsupplier', {
    data: function () {
      return {
        showAddSupplierForm: false,
        submittingAddSupplier: false,
        formComplete: false
      }
    },
    props: {
      btnstyle: {
        type: String,
        default: "btn-text"
      }
    },
    created: function(){},
    methods: {
        toggleAddSupplier: function(){
            var ComponentClass = Vue.extend(modalSupplierAddComponent);
            var modal = new ComponentClass();

            modal.title = "Update Supplier";
            modal.$mount();  
            modal.parent = this;
            document.body.appendChild(modal.$el); 
        }
    },
    template: `
    <div>
        <button 
        type="button" 
        v-bind:class="{ 'btn-gray': showAddSupplierForm === true && btnstyle === 'btn-text'}"
        v-on:click="toggleAddSupplier" 
        :class="btnstyle"
        class="btn btn-sm">
        <i class="far fa-fw mr-1 fa-user-plus"></i>
            Add Supplier
        </button>  
    </div>

    `
});