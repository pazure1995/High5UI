let CandidateInterviewApp = new Vue({
    el: '#CandidateInterview', 
    data: {
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
    },
    created: function(){
    },
    methods: {
        onCollapsibleClick: function(val){
            if(this.collapsible[val]){
                this.collapsible[val] = false;
            }else{
                this.collapsible[val] = true;
            }
        }
    }
});
