// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'https://cs490-sales.herokuapp.com/api/orders?start_date=2019-03-01&end_date=2019-03-31';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
        // alert('Woops, there was an error making the request.');
    };

    xhr.send();
}

makeCorsRequest();

var sales_data = [{"number":"R987654321","total":"3255.0","completed_at":"2019-03-22T00:31:51.522Z","email":"mary@examplecustomer.com","tax_subtotal":"0.0","shipment_subtotal":"5.0","items":[{"name":"Enduro 250","quantity":1,"item_subtotal":"3250.0"}]},{"number":"R123456789","total":"7600.0","completed_at":"2019-03-22T00:31:51.489Z","email":"mary@examplecustomer.com","tax_subtotal":"0.0","shipment_subtotal":"0.0","items":[{"name":"Enduro 550","quantity":1,"item_subtotal":"7600.0"}]}]

html = "";
for (let i = 0; i < sales_data.length; i++) {
    html += "<tr><td>" + sales_data[i]["number"] + "</td><td>" + sales_data[i]["items"].length + "</td>"

    var total_count = 0;
    html_lst = "<ul>";
    for (let j = 0; j < sales_data[i]["items"].length; j++) {
        total_count += sales_data[i]["items"][j]["quantity"];
        html_lst += "<li>" + sales_data[i]["items"][j]["name"] + "</li>"
    }
    html_lst += "</ul>";

    html += "<td>" + total_count + "</td><td>" + html_lst + "</td></tr>"
}

console.log(html);

document.getElementById("myTable").innerHTML = html;

