var sortComponent = Vue.component('avataredit', {
    data() {
        return {}
    },
    methods: {},
    template: `
    <button v-on:click="$refs.avatarFile.click()" type="button" class="btn btn-text-accent avatar avatar-lg avatar-bordered avatar-edit">
        <img src="https://uifaces.co/our-content/donated/t33XAm04.jpg">
        <span class="edit-icon">
            <i class="fad fa-pencil-alt"></i>
        </span>
        <input ref="avatarFile" type="file" />​
    </button>
    `,
});