var manageEmployees = Vue.component('manage-employees', {
    data() {
        return {
            employees: [  
              {
                id: '1',
                firstName: 'Garrett',
                middleName: 'Flyod',
                lastName: 'Micheal',
                email: 'garrettM@hammockcreative.com',
                phone: '9876543210',
                designation: 'Mr',
                role: 'Hiring Manager',
              },
              {
                id: '2',
                firstName: 'Antony',
                middleName: 'Zeke',
                lastName: 'Caliber',
                email: 'antony@hammockcreative.com',
                phone: '9876543210',
                designation: 'Mr',
                role: 'Candidate',
              },
              {
                id: '3',
                firstName: 'Subu',
                middleName: 'Hunter',
                lastName: 'Srinivasan',
                email: 'subu@hammockcreative.com',
                phone: '9876543210',
                designation: 'Mr',
                role: 'Recruiter',
              },
              {
                id: '4',
                firstName: 'Naveen',
                middleName: 'Raj',
                lastName: 'Kumar',
                email: 'naveen@hammockcreative.com',
                phone: '9876543210',
                designation: 'Mr',
                role: 'Candidate',
              },
            ],
        };
    },
    created: function(){
        this.seed();
    },
    methods: {
        seed: function(){

            var firstName = [
                "John",
                "Jane",
                "Robert",
                "Bill",
                "Sarah",
                "Jennifer"
            ];

            var middleName = [
                "Sal",
                "Sane",
                "Jamie",
                "Jane",
                "Ace",
                "Marie"
            ];

            var lastName = [
                "Doe",
                "Doe",
                "Stone",
                "Thomas",
                "Daily",
                "Mackenzie"
            ];

            var role = [
                "Candidate",
                "Hiring Manager",
                "Recruiter"
            ];

    
            for(var i=0; i<60; i++){

                var isVisible = false;
                if(i < 10){
                    isVisible = true;
                }


                this.employees.push({
                    id: new Date().getTime() * (i+1),
                    firstName: firstName[Math.floor(Math.random() * 6) + 0],
                    middleName: middleName[Math.floor(Math.random() * 6) + 0],
                    lastName: lastName[Math.floor(Math.random() * 6) + 0],
                    phone: "9876543210",
                    designation: "Mr.",
                    role: role[Math.floor(Math.random() * 3) + 0],
                    email: "name@company.com",
                    isActive: true,
                    isVisible: isVisible
                });

            }
        },
        add: function(){
            var ComponentClass = Vue.extend(modalEmployeeComponent);
            var modal = new ComponentClass();

 

            modal.title = "Add Employee";

    
            modal.$mount();  
            modal.parent = this;
            document.body.appendChild(modal.$el); 
        },
        show: function(employee){
            var ComponentClass = Vue.extend(employeeFlyoutWidget);
            var flyout = new ComponentClass();
            
            flyout.$mount();
            flyout.employee = employee;
            flyout.employees = this.employees;
            document.body.appendChild(flyout.$el);
        },
        editItem: function(employee){
            console.log(employee);

            var ComponentClass = Vue.extend(modalEmployeeComponent);
            var modal = new ComponentClass();

            modal.title = "Update Employee";
            modal.$mount();  
            modal.employee = employee;
            modal.employees = this.employees;
            modal.employeeCopy = JSON.parse(JSON.stringify(employee));
            modal.parent = this;
            document.body.appendChild(modal.$el); 
        },
        deleteItem: function(employee){
            var ComponentClass = Vue.extend(modalEmployeeDeleteComponent);
            var modal = new ComponentClass();
            modal.$mount();
            modal.flyout = this.showFlyout;
            modal.employee = employee;
            modal.employees = this.employees;
            modal.parent = this;
            document.body.appendChild(modal.$el);
        }
    },
    template: `
    <div class="px-3">
        <div class=" mb-2">
            <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap-370">
                <h6 class="m-0 w-100-370 mb-point5-370">Employees</h6>
                <button type="button" v-on:click="add" class="btn btn-sm"><i class="fal fa-user-plus mr-2"></i>Add Employee</button>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <select class="form-select mb-2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div class="mb-2">
                <input type="text"  placeholder="Search Suppliers" class="form-control small font-14">
                </div>
                </div>
            </div>
        </div>

        <div class="pt-0 mb-3 table-cards-1024">
            <table class="table table-hoverable-cells">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                <tr v-if="employee.isVisible"  v-for="(employee, index) in employees" :key="index">
                    <td  v-on:click="show(employee)">
                        <span class="d-inline-1024 d-none font-bold">Name: </span>
                        <strong>{{employee.firstName}} {{employee.lastName}}</strong>
                    </td>
                    <td  v-on:click="show(employee)">
                    <span class="d-inline-1024 d-none font-bold">Email: </span>{{employee.email}}
                    </td>
                    <td  v-on:click="show(employee)"><span class="d-inline-1024 d-none font-bold">Role: </span>{{employee.role}}</td>
                    <td class="text-right no-hover">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="dropdown">
                                <button type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false" 
                                class="btn btn-icon dropdown-toggle">
                                    <i class="far fa-ellipsis-v"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button v-on:click="editItem(employee)" type="button" class="dropdown-item"><i class="fas fa-edit mr-2"></i> Edit</a></button> 
                                    <button v-on:click="deleteItem(employee)" type="button" class="dropdown-item"><i class="fa fa-trash mr-2" aria-hidden="true"></i> Delete</button>
                                </div>
                            </div>
                            
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <hr class="m-0"/>
            <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370 text-center-370">
                <div class="w-100-370 mb-point5-370">
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
    `,
});