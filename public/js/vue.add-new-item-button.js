if(document.getElementById("AddNewItemButton")){
    var newItemModal = new Vue({
        el: '#AddNewItemButton', 
        data: {},
        created: function(){
        },
        methods: {
            addNewCandidate: function(){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title="Add Candidate";
                modal.showAddCandidate = true;
                modal.hideCloseButton = true;
                modal.isLarge = true;
                modal.hideBody = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el); 
            }
        }
    });
}