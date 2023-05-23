Vue.component('supplier-review', {
    data: function () {
      return {
		  masterList: {
			  headers: [],
			  rows: []
		  }
      }
    },
    props: {
      list: {
          type: Object,
          default: function () {
              return {}
          }
      }
    },
	mounted: function(){
		console.log(this.list);
        if(this.list){
            this.masterList.headers = this.list.headers;
			this.masterList.rows = this.list.list;
        }
	},
    created: function(){},
    methods: {
        submit: function(item,isReject){
            var app = this;
            item.submitting = true;
            setTimeout(() => {
                item.submitted = true;
                if(!isReject){
                    item.status = '<span class="text-success"><i class="far fa-check mr-1"></i>Approved</span>';
                }else{
                    item.status = '<span class="text-danger"><i class="far fa-check mr-1"></i>Rejected</span>';
                }
                setTimeout(() => {
                    let list = app.masterList.rows.filter(function (e) {
                        return e.id != item.id;
                    });

                    app.masterList.rows = list;
                    
                }, 1000);
            }, 2000);
        },
		interview: function(item){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();



            modal.title = "Schedule Supplier Interview";
            modal.icon = `<div class="text-center"></div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+item.company+`</h6>
                <p>`+item.location+` / `+item.contactName+` / `+item.contactEmail+`</p>
            </div>`;
            modal.candidate = item;
            modal.showSupplierInterviewForm = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;

            modal.$mount();  
            document.body.appendChild(modal.$el);			
		},
		viewScheduledInterviews: function(item){

			var ComponentClass = Vue.extend(modalComponent);
			var modal = new ComponentClass();

			item.name = item.company;

			modal.title = "Scheduled Interviews";
			modal.showSupplierScheduledInterviews = true;
			modal.isMedium = true;
			modal.hideBody = true;
			modal.hideCloseButton = true;
			modal.candidate = item;
	
			modal.$mount();  
			document.body.appendChild(modal.$el); 
		}
    },
    template: `
<div class="px-3">
    <div class="mb-2">
		<div class="d-flex align-items-center">
			<div class="mr-3">	
				<select class="form-select font-14">
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
					<option value="all">All</option>
				</select>
			</div>
			<div>
				<input type="text" placeholder="Search Suppliers" class="form-control font-14" />
			</div>
		</div>
    </div>

    <div class="pt-0 mb-3 table-cards-1024">
        <table class="table">
			<thead>
                <tr>
                    <th scope="col" v-for="(item,index) in masterList.headers">{{item}}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in masterList.rows" :key="index">
                    <td class="d-flex-1024">
                        <span class="d-none d-flex-1024 font-bold me-1">Company: </span>
                        <div><strong>{{item.company}}</strong></div>
						<div>{{item.location}}</div>

                    </td>
                    <td class="d-flex-1024">
                        <span class="d-none d-flex-1024 font-bold me-1">Point of Contact: </span>
                        <div>{{item.contactName}}</div>
						<div>{{item.contactEmail}}</div>
                    </td>
					<td>
						<span class="d-none d-flex-1024 font-bold me-1">Type: </span>
                        {{item.type}}			
					</td>
                    <td class="d-flex-1024">
                        <span class="d-none d-flex-1024 font-bold me-1">Added On: </span>
                        {{item.addedOn}}
                    </td>
					<td>
					<span class="d-none d-flex-1024 font-bold me-1">Scheduled Interviews: </span>
						<button v-if="item.hasScheduledInterviews" type="button"
							v-on:click="viewScheduledInterviews(item)"
							data-bs-toggle="tooltip" data-bs-placement="top" title="Scheduled Interviews"  class="btn btn-square btn-gray">
								<i class="fas fa-user-clock"></i>
						</button>  
					</td>
					<td>
						<div class="d-flex align-items-center justify-content-xl-end justify-content-start">
                            <div v-if="!item.submitting">
                                <button type="button" v-on:click="submit(item)" class="btn btn-sm btn-primary">Approve</button>
                                <button type="button" v-on:click="submit(item,true)" class="btn btn-sm btn-danger">Reject</button>
								<button :disabled="item.type==='Corporation'" v-on:click="interview(item)" type="button" class="btn btn-sm btn-secondary">Interview</button>
                            </div>
                            <button v-if="item.submitting === true && item.submitted === false" type="button" disabled class="btn btn-square">
                                <img style="width: 20px;" src="/images/button-loader-white.gif"/>
                            </button>
                            <span v-if="item.submitted" v-html="item.status">{{item.status}}</span>
                        </div>
					</td>
                </tr>
            </tbody>
        </table>
        <hr class="m-0" />
        <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370">
            <div class="text-center-370 w-100-370 mb-point5-370">
                Showing 10 of 60
            </div>
            <div class="ml-auto mx-auto-370 d-flex align-items-center">
                <button type="button" disabled="disabled" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-left" aria-hidden="true"></i></button> <button type="button" disabled="disabled" class="btn btn-text px-2">1</button>
                <button type="button" class="btn btn-text px-2">2</button> <button type="button" class="btn btn-text px-2">3</button> <button type="button" class="btn btn-text px-2">4</button>
                <button type="button" class="btn btn-text px-2">...</button> <button type="button" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-right" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</div>

    `
});