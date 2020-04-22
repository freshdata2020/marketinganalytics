//console.log( 'JS file loaded!'); //Testing to see if js file is loaded
$(document).ready(function(){

});

//Creating Game to Become Familiar with Regression Analysis
var res = [1000, .75, 0.001]; //Regression output results array
//Setting up input data
var imp = [40052,34539,12417,52990,33716,27080,40384,37228,17656,30246,13090,47398,11119,11291,
  25404,35704,18925,70576,13683,36884,10902,13266,13319,26495,91004
];
var adx = [40,20,10,50,30,20,40,30,10,20,30,50,20,10,20,40,30,50,20,40,20,10,30,10,10
];
var col = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0
];
//col.splice(2,1) removes the 3rd item from the col array.
function nameW() {
                
    v=['a','e','i','o','u','y','au','ia','io','oo','oa','oy'];
    f=['B','C','D','F','G','H','J','K','L','M','N','P','Qu','R','S','T','V','W','X','Z','Bl','Br','Cl','Ch','Cr','Dr','Fr','Fl','Gr','Gl','Pr','Pl','Sc','Sh','Sk','Sl','Sm','Sn','Sp','St','Sw','Tr','Th','Wr'];
    c=['b','c','d','f','g','h','j','k','l','m','n','p','qu','r','s','t','v','w','x','z','bl','br','cl','ch','cr','dr','fr','fl','gr','gl','pr','pl','sc','sh','sk','sl','sm','sn','sp','st','sw','tr','th','wr'];
    l=['b','ck','d','f','g','h','j','l','m','n','p','r','s','t','v','x','z','ch','sh','sk','st','th','nd','ws','rt'];

    s=Math.round(Math.random()*2);
    e=Math.round(Math.random()*1);

    name1=f[Math.round(Math.random()*43)];
    name1=name1 + v[Math.round(Math.random()*11)];
    for(j=1;j<=s;j++){
      name1=name1 + c[Math.round(Math.random()*43)];
      name1=name1 + v[Math.round(Math.random()*11)];
    };
    if(e==1){name1=name1 + l[Math.round(Math.random()*24)]};
    document.getElementById("name01").innerHTML = name1;
};