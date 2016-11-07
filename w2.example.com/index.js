$.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'http://w1.example.com/index.php',
    xhrFields: {
        withCredentials: true
    }
}).done(function(json) {
    console.log(json);
});

