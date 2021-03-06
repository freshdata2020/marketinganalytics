console.log( 'JS file loaded!'); //Testing to see if js file is loaded
//Creating Game to Become Familiar with Regression Analysis
var res = [1000, .75, 0.001]; //Regression output results array
//Setting up input data
var imp = math.matrix([40052,34539,12417,52990,33716,27080,40384,37228,17656,30246,13090,47398,11119,11291,
  25404,35704,18925,70576,13683,36884,10902,13266,13319,26495,91004
]);
var int = math.matrix([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]);
var adx = math.matrix([40,20,10,50,30,20,40,30,10,20,30,50,20,10,20,40,30,50,20,40,20,10,30,10,10
]);
var col = math.matrix([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0
]);
//https://online.stat.psu.edu/stat462/node/132/     (x'x)-1*x'y
var x=math.matrix([int,adx,col]); 



var beta1 = math.multiply(math.inv(math.multiply(x,math.transpose(x))),math.multiply(x,math.transpose(imp)))
//beta1=math.round(beta1[1]);


beta1 = beta1.map(function(each_element){
  return Number(each_element.toFixed(2));
});
console.log(beta1);
var c=document.getElementById("regcanvas");
//var ctx = c.getContext("2d");

$(document).ready(function(){

  $('#run-regression').on('click', function(){
    var beta = math.multiply(math.inv(math.multiply(x,math.transpose(x))),math.multiply(x,math.transpose(imp)))
    beta = beta.map(function(each_element){
      return Number(each_element.toFixed(0));
      
    });
    document.getElementById('reg-results').innerHTML = beta;
    //ctx.fillText("toString(beta)",90,90);
  });

});


//col.splice(2,1) removes the 3rd item from the col array.
