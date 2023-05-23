var interviewFlyoutComponent = Vue.component('profile-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            item: {},
            parent: {},
            collapsible: {
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
                interviewdetails: false
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
            description: "<p>Doozer Software has been providing custom software development, database/BI consulting, and IT staffing services to companies for the past 23 years. Our IT staffing division is currently assisting one of our customers in a search for a Java Developer. These positions are 70-80% backend development and 20-30% front end development. The Java Developers will assist the team in the development and maintenance of line-of-business software applications and will work closely with Software Engineers and Architects in the development of system components. This is a full time position that comes with a suite of benefits. **This position will work remotely but in the future this position will require you to work onsite in Birmingham, Alabama or in Jacksonville, Florida. There is no sponsorship available for this position.</p><p><b>Position Responsibilities: </b></p><ul><li>Gathers and documents, understands and articulates functional, non-functional and business requirements that are already defined.</li><li>Assists with and demonstrated a growing proficiency in the design and development of simple software applications, model data relationships. Learns and uses software applications and infrastructure architecture.</li><li>Uses programming &amp; technical skills in various languages and products currently used by the company as specified for the position to develop of update programs.</li><li>Will work in the following environment: Java, Spring, Spring Boot, Hibernate, Restful APIs, SQL.</li><li>Will integrate with SOAP/Restful services</li></ul><ul><li>Learns to write unit tests and performs integration testing to ensure high application quality to meet business requirements.</li></ul><ul><li>Develops an understanding of various deployment methods, tools and writes scripts and/or procedures to ensure efficient processes.</li><li>Becomes familiar with systems, databases and networking. Develops an understanding of the interoperability of IT assets with custom software development.</li></ul><p><b>Position Qualifications: </b></p><ul><li>5+ years of experience in a position performing software development.</li></ul><ul><li>Java, Spring Boot experience required.</li><li>Experience with AngularJS / Angular is a plus.</li></ul><ul><li>Must have the ability to learn Object Oriented Concepts and the concepts of a Software Development Life Cycle.</li><li>Understands the process of new application development and has the ability to apply these concepts with minimal mentoring and supervision.</li></ul><ul><li>Must have the ability to learn to provide support &amp; maintenance for simple to complex software applications.</li></ul><p>Job Type: Full-time</p><p>Pay: $85,000.00 - $125,000.00 per year</p><p>Benefits:</p><ul><li>401(k)</li><li>401(k) matching</li><li>Disability insurance</li><li>Health insurance</li><li>Life insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Monday to Friday</li></ul><p>Experience:</p><ul><li>JavaScript OR Angular: 3 years (Required)</li><li>java: 3 years (Required)</li><li>Spring MVC or Spring Boot: 2 years (Preferred)</li></ul><p>Work authorization:</p><ul><li>United States (Required)</li></ul><p>Work Location:</p><ul><li>Multiple locations</li></ul><p>Visa Sponsorship Potentially Available:</p><ul><li>No: Not providing sponsorship for this job</li></ul><p>Company's website:</p><ul><li>www.doozer.com</li></ul><p>Work Remotely:</p><ul><li>Temporarily due to COVID-19</li></ul><p>COVID-19 Precaution(s):</p><ul><li>Remote interview process</li></ul>"
        }
    },
    watch: {
        item: function(val){
            console.log("item changed");
            console.log(val);
        } 
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
        show: function(){
            this.showFlyout = true;
        },
        close: function(){
            this.showFlyout = false;
        },
        submit: function(){

            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();
            
            this.candidate.jobTitle = this.request.jobTitle;

            var candidate = this.candidate;
            candidate.request = this.request;

            candidate.jobTitle = this.jobTitle;

            candidate.candidateName = this.candidate.name;
            candidate.isFromSubmitScreen = true;


            var avatar = "";
            if(candidate.avatar.imgPath){
                avatar = "<img class='avatar avatar-lg' src='"+candidate.avatar.imgPath+"'/>"
            }else{
                avatar = "<span class='avatar avatar-lg "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>"
            }

            modal.title = "Submit Talent";
            modal.icon = `<div class="text-center">`+avatar+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+candidate.candidateName+`</h6>
                <h6><small>For: `+this.request.jobTitle+`</small></h6>
                <p>`+candidate.location+` / Full Time</p>
            </div>`;


            candidate.jobTitle = this.request.jobTitle;

            modal.showSourceTalent = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.candidate = candidate;

    
            modal.$mount();  
            document.body.appendChild(modal.$el);           
        },
        onCollapsibleClick: function(val){
            if(this.collapsible[val]){
                this.collapsible[val] = false;
            }else{
                this.collapsible[val] = true;
            }
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
                    <div v-if="item.showStatusProgress" class="px-1 py-2text-center font-regular p-relative ml-auto w-50">
                        <small> {{item.statusMsg}}</small>
                    </div>
                </div>
            </div>
            <div class="px-3 mb-3">
                <div class="d-flex align-items-start flex-wrap-reverse">
                    <div class="d-flex ">    
                        <div class="ml-3">
                            <h5 class="mr-2 mb-1">{{item.title}}</h5>
                            <div class="mb-2">
                                <span class="mr-2">Full Time / Jacksonville FL.</span>
                            </div>
                            <div>
                                <span class="tag tag-orange1"><strong>Job Interview</strong></span>
                            </div>
                        </div>                    
                    </div>
                    <div v-if="!item.showStatusProgress" class="ml-auto d-flex align-items-center">
                        <div>
                            <button 
                            v-if="item.rejecting === false && item.rejected === false" 
                            type="button" 
                            v-on:click.stop.prevent="parent.scheduleInterview(item)" 
                            class="btn btn-sm mr-1">Schedule</button>
                            <button 
                                v-bind:class="{'bg-blue5': item.rejecting === true || item.rejected === true}"
                                v-on:click.stop.prevent="parent.rejectInterview(item)" 
                                :disabled="item.rejecting === true || item.rejected === true"
                                type="button" 
                                class="btn btn-secondary btn-sm btn-blue-disabled">
                                <span v-if="item.rejecting === false && item.rejected === false">
                                    Reject
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
            <div v-if="item.statusMsg.length">
                <label class="pt-0">Add To</label>
                <div class="mt-2 mb-3 d-flex justify-content-between">
                    <a href="#" target="_blank" class="btn btn-sm btn-secondary w-100">
                        Google Calendar
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" class="btn btn-sm btn-secondary w-100">
                        Outlook Calendar (.ics)
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" target="_blank" class="btn btn-sm btn-secondary w-100">
                        Yahoo Calendar
                    </a>
                </div>

            
                <div class="mb-2">
                    <button
                    v-on:click="onCollapsibleClick('interviewdetails')"
                    type="button" class="btn btn-collapsible">
                        <i v-if="!collapsible.interviewdetails" class="fal fa-angle-down fa-fw"></i>
                        <i v-else class="fal fa-angle-up fa-fw"></i>
                        <span><small>Interview Details</small></span>
                    </button>
                </div>

                <div v-bind:class="{'d-none': collapsible.interviewdetails}"  class="mb-4 ml-4">

                    <div class="d-flex mb-2 pl-1">
                        <div>
                            <i class="fad fa-fw fa-alarm-clock"></i>
                        </div>
                        <div class="ml-2">
                            <p class=" mb-0">Time</p>
                            <p class="mb-0"><small>August 1st 2021 @ 2:00pm</small></p>
                        </div>                               
                    </div>  
                    
                    <div class="d-flex mb-2 pl-1">
                        <div>
                            <i class="fad fa-fw fa-map"></i>
                        </div>
                        <div class="ml-2">
                            <p class=" mb-0">Location</p>
                            <p class="mb-0"><small>1450 Duval St. Jacksonville FL. 32323</small></p>
                        </div>                                           
                    </div> 
                
                    <div class="d-flex mb-2 pl-1">
                        <div>
                            <i class="fad fa-fw fa-feather"></i>
                        </div>
                        <div class="ml-2">
                            <p class=" mb-0">Instructions</p>
                            <p class="mb-0"><small>Please be ready to present on your portolio of work</small></p>
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
                    <span><small>Job Details</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.stats}"  class="mb-4 ml-4">

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fad fa-fw fa-user"></i>
                    </div>
                    <div class="ml-2">
                        <p class=" mb-0">Chuck Young @eTeam</p>
                        <p class="mb-0"><small>Requested By</small></p>
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