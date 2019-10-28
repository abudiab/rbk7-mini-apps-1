// var r0c0 = $('#r0c0')[0]; /*document.getElementById('r0c0');*/
// var r0c1 = $('#r0c1')[0]; /*document.getElementById('r0c1');*/
// var r0c2 = $('#r0c2')[0]; /*document.getElementById('r0c2');*/
// var r1c0 = $('#r1c0')[0]; /*document.getElementById('r1c0');*/
// var r1c1 = $('#r1c1')[0]; /*document.getElementById('r1c1');*/
// var r1c2 = $('#r1c2')[0]; /*document.getElementById('r1c2');*/
// var r2c0 = $('#r2c0')[0]; /*document.getElementById('r2c0');*/
// var r2c1 = $('#r2c1')[0]; /*document.getElementById('r2c1');*/
// var r2c2 = $('#r2c2')[0]; /*document.getElementById('r2c2');*/

// var board = [
//     [r0c0, r0c1, r0c2],
//     [r1c0, r1c1, r1c2],
//     [r2c0, r2c1, r2c2]
// ]

console.log('Welcome to Tic Tac Toe')

var round = 1;
var play = true;
// var used = 0;

$(document).ready(function(){ 
    // wait for the document to load before executing
});

$('.box').on("click", function(event){
    console.log("You clicked on: ", event.target.id);
    //check who's turn and if can play
    if(round % 2 && play) {
        //check if square is empty
        if(!$(event.target).text().trim().length) {
            $(event.target).append('X');
            //switch player turn
            round++;
        }        
    } else {
        if(!$(event.target).text().trim().length) {
            $(event.target).append('O')
            round++;
        }        
    }    
});    

var winner = function() {
    
}

