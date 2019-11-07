var app = new Vue({
    el: '#app',
    data: {
        url: "http://projectdew.com:4200/",
        selection: "",
        numInput: 0,
        fact: '',
        isRandom: false,
        errorMessage: '',
    },
    created: function() {

    },
    methods: {

        async submitRequest() {
            this.fact = '';
            if(this.selection === "") {
                this.errorMessage = "Please select a category above";
            }
            else if(this.numInput === '' && !this.isRandom) {
                this.errorMessage = "Please enter a number above";
            }
            else {
                this.errorMessage = '';
                try {
                    console.log("submitting request...");
                    const response = await axios.get(this.url + "api?args=" + (this.isRandom ? "random" : this.numInput ) + "/" + this.selection);
                    console.log(response);
                    this.fact = response.data.text;
                } catch (error) {
                    this.errorMessage = "Make sure to enter a valid number";
                    console.log(error);
                }
            }
        },
    }
});