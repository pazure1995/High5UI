var candidateJobFlyoutComponent = Vue.component('profile-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            item: {},
            parent: {},
            isApproved: false,
            isPending: false,
            isRejected: false,
            isIntakeForm: false,
            showApproveReject: false,
            collapsible: {
                rejectionmsg: false,
                reviewer: false,
                stats: false,
                skills: false,
                description: false,
                education: false,
                certifications: false,
                industries: false,
                workHours: false,
                overtime: false,
                travel: false,
                drugTest: false,
                backgroundCheck: false,
                securityClearance: false,
                disqualifiedCandidates: true,
            },
            educations: ["High School Degree","Bachelors In Software Related Degrees"],
            certifications: ["Java Masters Course","Toast Masters","PMP"],
            industries: ["Aviation","Big Data"],
            workHours: "Flexible",
            overtime: false,
            travel: "15%",
            drugTest: true,
            backgroundCheck: true,
            secruityClearance: "confidential",
            skills: ["Java","Apache Tomcat","Hibernate","Spring MVC","Cassandra","Jenkins"],
            description: "<p>Doozer Software has been providing custom software development, database/BI consulting, and IT staffing services to companies for the past 23 years. Our IT staffing division is currently assisting one of our customers in a search for a Java Developer. These positions are 70-80% backend development and 20-30% front end development. The Java Developers will assist the team in the development and maintenance of line-of-business software applications and will work closely with Software Engineers and Architects in the development of system components. This is a full time position that comes with a suite of benefits. **This position will work remotely but in the future this position will require you to work onsite in Birmingham, Alabama or in Jacksonville, Florida. There is no sponsorship available for this position.</p><p><b>Position Responsibilities: </b></p><ul><li>Gathers and documents, understands and articulates functional, non-functional and business requirements that are already defined.</li><li>Assists with and demonstrated a growing proficiency in the design and development of simple software applications, model data relationships. Learns and uses software applications and infrastructure architecture.</li><li>Uses programming &amp; technical skills in various languages and products currently used by the company as specified for the position to develop of update programs.</li><li>Will work in the following environment: Java, Spring, Spring Boot, Hibernate, Restful APIs, SQL.</li><li>Will integrate with SOAP/Restful services</li></ul><ul><li>Learns to write unit tests and performs integration testing to ensure high application quality to meet business requirements.</li></ul><ul><li>Develops an understanding of various deployment methods, tools and writes scripts and/or procedures to ensure efficient processes.</li><li>Becomes familiar with systems, databases and networking. Develops an understanding of the interoperability of IT assets with custom software development.</li></ul><p><b>Position Qualifications: </b></p><ul><li>5+ years of experience in a position performing software development.</li></ul><ul><li>Java, Spring Boot experience required.</li><li>Experience with AngularJS / Angular is a plus.</li></ul><ul><li>Must have the ability to learn Object Oriented Concepts and the concepts of a Software Development Life Cycle.</li><li>Understands the process of new application development and has the ability to apply these concepts with minimal mentoring and supervision.</li></ul><ul><li>Must have the ability to learn to provide support &amp; maintenance for simple to complex software applications.</li></ul><p>Job Type: Full-time</p><p>Pay: $85,000.00 - $125,000.00 per year</p><p>Benefits:</p><ul><li>401(k)</li><li>401(k) matching</li><li>Disability insurance</li><li>Health insurance</li><li>Life insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Monday to Friday</li></ul><p>Experience:</p><ul><li>JavaScript OR Angular: 3 years (Required)</li><li>java: 3 years (Required)</li><li>Spring MVC or Spring Boot: 2 years (Preferred)</li></ul><p>Work authorization:</p><ul><li>United States (Required)</li></ul><p>Work Location:</p><ul><li>Multiple locations</li></ul><p>Visa Sponsorship Potentially Available:</p><ul><li>No: Not providing sponsorship for this job</li></ul><p>Company's website:</p><ul><li>www.doozer.com</li></ul><p>Work Remotely:</p><ul><li>Temporarily due to COVID-19</li></ul><p>COVID-19 Precaution(s):</p><ul><li>Remote interview process</li></ul>",
            statusMsg: ""
        }
    },
    mounted: function(){
        this.initTooltips();
        this.statusMsg = this.item.statusMsg;
    },
    updated: function(){
        this.initTooltips();
    },
    created: function () {
        document.querySelectorAll('.view-panel').forEach(e => e.remove());
        this.show();
    },
    destroyed: function(){
        el = this.$el;
        el.parentNode.removeChild(el);
    },
    methods: {
        initTooltips: function(){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                var placement = tooltipTriggerEl.dataset.bsPlacement;
                return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
            });
            console.log(tooltipList);
        },
        show: function(){
            this.showFlyout = true;
        },
        close: function(){
            this.showFlyout = false;
        },
        onCollapsibleClick: function(val){
            if(this.collapsible[val]){
                this.collapsible[val] = false;
            }else{
                this.collapsible[val] = true;
            }
        },
        email: function(){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title="Share via Email";
            modal.showEmailForm = true;
            modal.hideCloseButton = true;
            modal.hideBody= true;
            modal.isMedium = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);  
        },
        publicShareLink: function(){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title="Public Share Link";
            modal.showPublicShareLink = true;
            modal.hideCloseButton = true;
            modal.isMedium = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);  
        },
        favorite: function(e){
            this.statusMsg = "Job Favorited on 8/1/2021 @12:30pm";
            this.parent.favorite(this.item);
        },
        discard: function(){
            var app = this;
            var item = this.item;
            item.rejecting = true;


            setTimeout(() => {
                item.rejecting = false
                item.rejected = true;
                item.statusMsg="RTR request rejected on "+new Date(Date.now()).toDateString()
                item.showStatusProgress = true;
                
                setTimeout(() => {
                        item.startStatusProgress = true;
                        app.statusMsg="Job Discarded on 8/1/2021 @4:30pm"
                        app.parent.discard(item);
                        app.close();           
                }, 100);
            }, 2000);
        }
    },
    template: `
    <div class="view-panel" v-bind:class="{ show: showFlyout}">
        <div class="view-panel-header">
            <div class="p-relative">
                <div class="px-3 py-2 d-flex">
                    <button
                    v-on:click="close"
                    type="button" class="btn btn-icon">
                        <i class="fal fa-times" aria-hidden="true"></i>
                    </button>
                    <div  class="px-1 py-2text-center font-regular p-relative ml-auto">
                        <small> {{statusMsg}}</small>
                    </div>
                </div>
            </div>
            <div class="px-3 mb-3">
                <div class="d-flex align-items-start flex-wrap-reverse">
                    <div class="d-flex">    
                        <div class="ml-3">
                            <h5 class="mr-2 mb-1">{{title}}</h5>
                            <div class="mb-2">
                                <span class="mr-2">Full Time / Jacksonville FL.</span>
                            </div>
                            <div>
                                <span class="tag tag-coral font-bold " v-if="item.status === 'rtr'">Right to Represent</span>
                                <span class="tag tag-orange1 font-bold " v-if="item.status === 'hot'"><i class="fad fa-flame mr-1"></i>Hot</span>
                                <span class="tag tag-purple1 font-bold " v-if="item.status === 'favorited'"><i class="fad fa-heart mr-1"></i>Favorited</span>
                                <span class="tag tag-green1 font-bold " v-if="item.status === 'applied'">Applied</span>
                                <span class="tag tag-coral font-bold " v-if="item.status === 'matched'"><img width="16px" src="/images/high5-mark-circle-dark.svg"><span class="mx-2">Matched</span></span>
                            </div>
                            <div v-if="isIntakeForm">
                                <span v-if="isApproved" class="tag tag-green1">Approved</span>
                                <span v-if="isRejected" class="tag tag-red1">Rejected</span>
                                <span v-if="isPending" class="tag tag-orange1">Pending</span>
                            </div>
                        </div>                    
                    </div>
                    <div v-if="isIntakeForm === true && isApproved === false && showApproveReject === false" class="ml-auto d-flex align-items-center">
                        <div>
                            <div class="btn-group btn-group-sm btn-split">
                                <button type="button" class="btn btn-sm">Edit</button>
                                <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button type="button" class="dropdown-item">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="isIntakeForm === true && showApproveReject === true" class="ml-auto d-flex align-items-center">
                        <div v-if="!item.submitting">
                            <button type="button" v-on:click="submit(item)" class="btn btn-sm btn-primary me-1">Approve</button>
                            <button type="button" v-on:click="submit(item,true)" class="btn btn-sm btn-danger">Reject</button>
                        </div>
                        <button v-if="item.submitting === true && item.submitted === false" type="button" disabled class="btn btn-square">
                            <img style="width: 20px;" src="/images/button-loader-white.gif"/>
                        </button>
                        <span v-if="item.submitted" v-html="item.status">{{item.status}}</span>
                    </div>


                    <div v-if="!isIntakeForm"   class="ml-auto d-flex align-items-center">
                        <div class="dropdown">
                            <button 
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Share"
                            class="btn btn-square btn-gray dropdown-toggle mr-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-share-alt fa-fw"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="requestMoreMenu">
                            <button type="button" v-on:click="email" class="dropdown-item"><i class="fal fa-envelope mr-3"></i>Email</button>
                            <button type="button" v-on:click="publicShareLink" class="dropdown-item"><i class="fal fa-link mr-3"></i>Public Share Link</button>
                            </div>
                        </div>
                        <div  v-if="item.showStatusProgress === false && item.status !== 'rtr' && item.status !== 'applied'">
                            <button 
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Favorite"
                            v-if="item.status !== 'favorited' && item.rejecting === false && item.approving === false && item.rejected === false && item.approved === false"
                            v-on:click="favorite($event)" type="button" 
                            class="btn btn-square btn-gray">
                                <span v-if="item.approving === false && item.approved === false">
                                    <i  class="fas fa-heart"></i>
                                </span>
                            
                                <img v-if="item.approving" style="width: 18px; height: 18px;" src="/images/button-loader-white.gif"/>
                                <i v-if="item.approved" class="fas fa-check-circle fa-fw font-18 mt-1"></i>
                            </button>
                            <button 
                            v-if="item.rejecting === false && item.rejected === false"
                            :disabled="item.approving === true || item.approved === true"
                            v-on:click.stop.prevent="parent.apply(item)" type="button" 
                            class="btn btn-sm btn-blue-disabled ml-2 mr-1">
                                <span v-if="item.approving === false && item.approved === false">
                                    Apply
                                </span>
                            
                                <img v-if="item.approving" style="width: 18px; height: 18px;" src="/images/button-loader-white.gif"/>
                                <i v-if="item.approved" class="fas fa-check-circle fa-fw font-18 mt-1"></i>
                            </button>
                            <button 
                                v-if="item.approving === false && item.approved === false"
                                v-bind:class="{'bg-blue5': item.rejecting === true || item.rejected === true}"
                                v-on:click="discard(item)" 
                                :disabled="item.rejecting === true || item.rejected === true"
                                type="button" 
                                class="btn btn-secondary btn-sm btn-blue-disabled"
                            >
                                <span v-if="item.rejecting === false && item.rejected === false">
                                    Discard
                                </span>
                                <img v-if="item.rejecting" style="width: 18px; height: 18px;" src="/images/button-loader-white.gif"/>
                                <i v-if="item.rejected" class="fas fa-check-circle fa-fw font-18 mt-1 font-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-panel-body">
            <div v-if="isIntakeForm">
                <div class="mb-2">
                    <button
                    v-on:click="onCollapsibleClick('reviewer')"
                    type="button" class="btn btn-collapsible">
                        <i v-if="!collapsible.reviewer" class="fal fa-angle-down fa-fw"></i>
                        <i v-else class="fal fa-angle-up fa-fw"></i>
                        <span><small>Reviewer</small></span>
                    </button>
                </div>
                <div v-bind:class="{'d-none': collapsible.reviewer}"  class="mb-4 ml-4">
                    <div class="d-flex mb-2 pl-1">
                        <div>
                            <i class="fad fa-fw fa-user"></i>
                        </div>
                        <div class="ml-2">
                            <p class="mb-0">John Doe / js@company.com / Hiring Manager</p>
                            <p class="mb-0"><small>Approver</small></p>
                        </div>                                   
                    </div>           
                </div>
                <div v-if="isRejected">
                    <div class="mb-2">
                        <button
                        v-on:click="onCollapsibleClick('rejectionmsg')"
                        type="button" class="btn btn-collapsible">
                            <i v-if="!collapsible.rejectionmsg" class="fal fa-angle-down fa-fw"></i>
                            <i v-else class="fal fa-angle-up fa-fw"></i>
                            <span><small>Reason For Rejection</small></span>
                        </button>
                    </div>
                    <div v-bind:class="{'d-none': collapsible.rejectionmsg}"  class="mb-4 ml-4">
                        <div class="d-flex mb-2 pl-1">
                            <div>
                                <i class="fad fa-fw fa-sticky-note"></i>
                            </div>
                            <div class="ml-2">
                                <p class="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            
                            </div>                                   
                        </div>           
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <button
                v-on:click="onCollapsibleClick('stats')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.stats" class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>General</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.stats}"  class="mb-4 ml-4">

                <div
                v-if="item.status === 'rtr'"
                class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-user"></i>
                    </div>
                    <div class="ml-2">
                        <p class=" mb-0">John Smith @TekSystems</p>
                        <p class="mb-0"><small>Represented By</small></p>
                    </div>                                   
                </div>             
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-piggy-bank"></i>
                    </div>
                    <div class="ml-2">
                        <p class=" mb-0">Full Time</p>
                        <p class="mb-0"><small>Job Type</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-calendar-day"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">11/01/2021</p>
                        <p class="mb-0"><small>Target Start</small></p>
                    </div>                                   
                </div>

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-map-marked-alt"></i>
                    </div>
                    <div class="ml-2">
                        <p class=" mb-0">Jacksoville Fl.</p>
                        <p class="mb-0"><small>Location</small></p>
                    </div>                                   
                </div>

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-piggy-bank"></i>
                    </div>
                    <div class="ml-2">
                        <p class=" mb-0">$80K - $90K</p>
                        <p class="mb-0"><small>Maximum Annual Salary</small></p>
                    </div>                                   
                </div>

            </div>


            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('skills')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.skills"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Required Skills</small></span>
                </button>
            </div>
            <div v-bind:class="{'d-none': collapsible.skills}"  class="mb-4 ml-4 pl-1">
                <span class="tag tag-blue3 mb-1 mr-1" v-for="(skill, i) in skills">{{ skill }}</span>
            </div>

            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('description')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.description"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Description</small></span>
                </button>
            </div>
            
            <div v-bind:class="{'d-none': collapsible.description}" class="list-style-regular ml-4 pl-1 collapsible-overflow" v-html="description"></div>   

            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('education')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.education"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Education</small></span>
                </button>
            </div>   
            <div v-bind:class="{'d-none': collapsible.education}"  class="mb-3 ml-4">
                <span class="tag tag-blue3 mb-1 mr-1" v-for="(text, i) in educations">{{ text }}</span>
            </div>
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('certifications')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.certifications"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Certifications</small></span>
                </button>
            </div>    
            <div v-bind:class="{'d-none': collapsible.certifications}"  class="mb-3 ml-4">
                <span class="tag tag-blue3 mb-1 mr-1" v-for="(text, i) in certifications">{{ text }}</span>
            </div>  
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('industries')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.industries"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Industries</small></span>
                </button>
            </div>     
            <div v-bind:class="{'d-none': collapsible.industries}"  class="mb-3 ml-4">
                <span class="tag tag-blue3 mb-1 mr-1" v-for="(text, i) in industries">{{ text }}</span>
            </div>    
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('workHours')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.workHours"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Work Hours</small></span>
                </button>
            </div> 
            <div v-bind:class="{'d-none': collapsible.workHours}"  class="mb-3 ml-4">
                <p>{{workHours}}</p>
            </div>     
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('travel')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.travel"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Travel</small></span>
                </button>
            </div>  
            <div v-bind:class="{'d-none': collapsible.travel}"  class="mb-3 ml-4">
                <p>{{travel}}</p>
            </div>    
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('drugTest')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.drugTest"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Drug Test</small></span>
                </button>
            </div>  
            <div v-bind:class="{'d-none': collapsible.drugTest}"  class="mb-3 ml-4">
                <span v-if="drugTest" class="tag tag-green2" ><i class="far fa-check mr-2"></i>Yes</span>
                <span v-else >No</span>
            </div>        
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('backgroundCheck')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.backgroundCheck"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Background Check</small></span>
                </button>
            </div>  
            <div v-bind:class="{'d-none': collapsible.backgroundCheck}"  class="mb-3 ml-4">
                <span v-if="drugTest" class="tag tag-green2" ><i class="far fa-check mr-2"></i>Yes</span>
                <span v-else >No</span>
            </div>    
            <div class="mb-2">
                <button 
                v-on:click="onCollapsibleClick('securityClearance')"
                type="button" class="btn btn-collapsible">
                    <i  v-if="!collapsible.securityClearance"  class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>Security Clearance Level</small></span>
                </button>
            </div> 
            <div v-bind:class="{'d-none': collapsible.securityClearance}"  class="mb-3 ml-4">
                <p>{{secruityClearance}}</p>
            </div> 

        </div>
    </div>
`
});