const submit = document.getElementById('submitButton');
const input = document.getElementById('userInput');
const error = document.getElementById('error');

// check if input is a valid ip address 
// onSubmit call API and get info to populate fields 

const api_key = "at_A2hg6w4veqrY2FddQRLU4aaREDvfm";
let ip = "8.8.8.8";

submit.addEventListener("click", (e) => {
    e.preventDefault();
    // Request API 
    $.get({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: ip},
        success: function(data) {
            $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
        }
    }).fail(function (){
        // invalid IP address case 
        console.log("error");
        error.innerText = "Error: Please enter a valid IP address";
    })
})


