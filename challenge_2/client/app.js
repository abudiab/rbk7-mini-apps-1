//need post request
// need get request
//on submit click get the data and save it in a variable 
//create a post request after ur process the data

//on convert click receive from server and show the data after processes
//create a get request to the server
$('#submit').on('click', function() {

    var jsonData = $('#txtarea').val();
    console.log(jsonData);

    var csvData;

    $.ajax({
        url: '/upload_json',
        type: 'POST',
        data: {jsonData: jsonData},
        success: function() {
            console.log('sent from client');
        },
        error: function(err) {
            console.log('error not sent from client', err);
        }
        
    });

    $.ajax({
        url: '/upload_json',
        type: 'GET',
        data: { order: '-createdAt' }, //change this/ maybe put it in sucess?
        success: function(result) {
            console.log('received to client', result);
            $('#txtarea2').val(result); //fix me
        },
        
        error: function(err) {
            console.log('error not received to client', err);
        }
        
    });

});




      
        
  
    
    
    
  
