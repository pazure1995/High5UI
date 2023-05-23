Vue.filter('kb', val => {
    return Math.floor(val/1024);  
  });
var fileUploaderComponent = Vue.component('fileuploader', {
    data() {
        return {
            files:[],
            singleFile: "",
            formSubmitted: false,
            uploadComplete: false
        }
    },
    props: {
        hidesubmit: String,
        default: false,
        processor: Object,
        showcancel: String
    },
    computed: {
        uploadDisabled() {
            return this.files.length === 0;
        }
    },
    created: function () {
        if(this.processor){
            this.callback = this.processor;
        }
    },
    destroyed: function(){},
    watch: {
        singleFile: function(val){
            console.log(val);
        }
    },
    methods: {
        cancel: function(){
            console.log('emit canceled');
            this.$emit('cancel', this);
        },
        openLocal: function(){
            this.$refs.singleupload.click();
            console.log('open local clicked');
        },
        addSingleFile: function(){
            var path = this.$refs.singleupload.value;
            var filename = path.replace(/^.*\\/, "");
            this.files.push({
                name: filename
            });

            console.log(filename);
        },
        addFile(e) {
            console.log(e);
            let droppedFiles = e.dataTransfer.files;
            if(!droppedFiles) return;

            ([...droppedFiles]).forEach(f => {
              this.files.push(f);
            });

            console.log(this.files);
        },
        removeFile(file){
            this.files = this.files.filter(f => {
              return f != file;
            });      
        },
        upload() {
            
            let formData = new FormData();
            this.files.forEach((f,x) => {
              formData.append('file'+(x+1), f);
            });

            this.formSubmitted = true;
            var app = this;
            setTimeout(function(){

                app.$emit('uploaded', app);
                app.formSubmitted = false;
                app.files = []
                app.uploadComplete = true;

                setTimeout(function(){
                    app.uploadComplete = false;
                },1000);

            },2000);

            
        }
    },
    template: `
        <div class="fileuploader" v-cloak @drop.prevent="addFile" @dragover.prevent>
            <div  v-on:click="openLocal" class="fileuploader-droparea">
                <div class="text-center">
                    <i class="icon fal fa-cloud-upload font-blue_primary"></i>
                    <p class="mb-0 mt-2">Click or Drag and Drop To Upload</p>
                </div>
            </div>
            <input 
            v-on:change="addSingleFile"
            ref="singleupload" 
            type="file" 
            class="fileuploader-single" 
            accept=".docx, .pdf">
            <ul class="fileuploader-list">
                <li v-for="file in files">
                    <div class="mr-1">{{ file.name }} ({{ file.size | kb }} kb)</div> 
                    <button @click="removeFile(file)" class="btn btn-text" title="Remove">
                        <i class="fas fa-fw fa-trash-alt"></i>
                    </button>
                </li>
            </ul>
            
            <div v-if="!hidesubmit" class="d-flex justify-content-between align-items-center">
                <div>
                    <button class="btn btn-secondary" v-if="showcancel"  @click="cancel">
                        Cancel
                    </button>
                    <button :disabled="uploadDisabled" @click="upload">
                        <span v-if="!formSubmitted">Upload</span>
                        <span v-else>Uploading <img width="20px" src="/images/button-loader2.gif"/></span>
                    </button>
                </div>
                <div v-if="uploadComplete" class="flex-grow-1 ml-2">
                    <div class="font-green">
                        Upload Complete!
                    </div>
                </div>
            </div>
        </div>
    `,
});