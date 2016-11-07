$.ajax({
    method: 'POST',
    dataType: 'json',
    url: 'http://w1.example.com/index.php',
    contentType: 'application/json',
    xhrFields: {
        withCredentials: true
    }
}).done(function(json) {
    console.log(json);
});
