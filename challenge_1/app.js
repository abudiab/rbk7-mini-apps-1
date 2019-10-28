// var r0c0 = $('#r0c0').text(); /*document.getElementById('r0c0');*/
// var r0c1 = $('#r0c1').text(); /*document.getElementById('r0c1');*/
// var r0c2 = $('#r0c2').text(); /*document.getElementById('r0c2');*/
// var r1c0 = $('#r1c0').text(); /*document.getElementById('r1c0');*/
// var r1c1 = $('#r1c1').text(); /*document.getElementById('r1c1');*/
// var r1c2 = $('#r1c2').text(); /*document.getElementById('r1c2');*/
// var r2c0 = $('#r2c0').text(); /*document.getElementById('r2c0');*/
// var r2c1 = $('#r2c1').text(); /*document.getElementById('r2c1');*/
// var r2c2 = $('#r2c2').text(); /*document.getElementById('r2c2');*/

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
        if(!$(event.target).text().length) {
            $(event.target).append('X');
            //switch player turn
            round++;
        }        
    } else {
        if(!$(event.target).text().length) {
            $(event.target).append('O')
            round++;
        }        
    }
    
    //check result
    if(winner() !== -1 && winner() !== '') {
        if(winner() === 'X') {
            play = false;
            alert('Winner is X');
        } else {
            play = false;
            alert('Winner is O')
        }
    } else if(winner() === -1) {
        play = false;
        alert('Tie');
    }
});    

//reset button
$('#btn').on("click", function(){
    play = true;
    $('.box').each(function(index){
        $(this).text('');
    });
});

var winner = function() {
    var r0c0 = $('#r0c0').text(); 
    var r0c1 = $('#r0c1').text(); 
    var r0c2 = $('#r0c2').text(); 
    var r1c0 = $('#r1c0').text(); 
    var r1c1 = $('#r1c1').text(); 
    var r1c2 = $('#r1c2').text(); 
    var r2c0 = $('#r2c0').text(); 
    var r2c1 = $('#r2c1').text(); 
    var r2c2 = $('#r2c2').text(); 

    //check the row values    
    if(r0c0 === r0c1 && r0c1 === r0c2) {
        return r0c2;
    } else if(r1c0 === r1c1 && r1c1 === r1c2) {
        return r1c2;
    } else if(r2c0 === r2c1 && r2c1 === r2c2) {
        return r2c2;
    }

    //check the columns
    else if(r0c0 === r1c0 && r1c0 === r2c0) {
        return r2c0;
    } else if(r0c1 === r1c1 && r1c1 === r2c1) {
        return r2c1;
    } else if(r0c2 === r1c2 && r1c2 === r2c2) {
        return r2c2;
    }

    //check the diagonals
    else if(r0c0 === r1c1 && r1c1 === r2c2) {
        return r2c2;
    } else if(r0c2 === r1c1 && r1c1 === r2c0) {
        return r2c0;
    }

    //no winner
    // else {
    //     return -1;
    // }
    return -1;
};

// var board = [
//     [r0c0, r0c1, r0c2],
//     [r1c0, r1c1, r1c2],
//     [r2c0, r2c1, r2c2]
// ]