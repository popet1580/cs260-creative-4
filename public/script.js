var app = new Vue({
    el: '#app',
    data: {
        url: "http://projectdew.com:4200/",
        selection: '',
        numInput: 0,
        fact: 'aoeu',
    },
    created: function() {
        
    },
    methods: {
        changedSelection() {
            console.log("changed selection to: " + this.selection);
            this.loadJson();
        },
        async loadJson() {
            try {
                const response = await axios.get(this.url + "api?args=" + this.numInput + "/" + this.selection);
                this.fact = response.data.text;
            } catch (error) {
                console.log(error);
            }
        },
    }
});