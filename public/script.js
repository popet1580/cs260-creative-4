var app = new Vue({
    el: '#app',
    data: {
        url: "http://projectdew.com:4200/",
        selection: "",
        numInput: 0,
        fact: '',
        isRandom: false,
        errorMessage: '',
        days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        day: '',
        month: '',
    },
    created: function() {

    },
    methods: {

        async submitRequest() {
            let isDate = (this.selection === 'date');
            this.fact = '';
            if(this.selection === "")
                this.errorMessage = "Please select a category above";
            else if((this.day === '' || this.month === '') && isDate && !this.isRandom)
                this.errorMessage = "Please enter a date above"
            else if(this.numInput === '' && !isDate && !this.isRandom)
                this.errorMessage = "Please enter a number above";
            else {
                this.errorMessage = '';
                try {
                    console.log("submitting request...");
                    const response = await axios.get(this.url + "api?args=" + (this.isRandom ? "random" : ( isDate ? this.month + "/" + this.day : this.numInput) ) + "/" + this.selection);
                    console.log(response);
                    this.fact = response.data.text;
                } catch (error) {
                    this.errorMessage = "Make sure to enter a valid " + ( isDate ? "date" : "number" );
                    console.log(error);
                }
            }
        },
    }
});