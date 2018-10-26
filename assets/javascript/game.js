
var playerDiv = $("<div>");
var playerlDiv = $("<div>");
var player3Div = $("<div>");
var player4Div = $("<div>");
var i = 1;
var attackswitch = true;

pickPlayer();
//function that moves player and defender into correct places
function pickPlayer () {

// if (attackswitch)  {  
$("#ObiWan").on("click", function(){
    
    console.log("This click is working.");
    if ($("#playerlocation").html()=="") {
        console.log("Entered ObiWan if");
     playerDiv.append($(this));
     $("#playerlocation").append(playerDiv);
     playerDiv.addclass("inplay");
    $(".toptext").text("Select an Enemy to Attack:");
    }
    else {
        console.log("Entered ObiWan else");
        if ($("#enemylocation").html()==""){
            console.log("Entered ObiWan if2");
            playerDiv.attr("class", "defending");
            playerDiv.append($(this));
            $("#enemylocation").append(playerDiv);
            
           }
    }
});

$("#LukSky").on("click", function(){ 
    console.log("This click is working.");
    if ($("#playerlocation").html()==""){ 
        console.log("Entered LukSky if");
      playerlDiv.append($(this));
      playerlDiv.addclass("inplay");
      $("#playerlocation").append(playerlDiv);
    $(".toptext").text("Select an Enemy to Attack:");
    }
    else {
        console.log("Entered LukSky else");
       if ($("#enemylocation").html()==""){
        console.log("Entered LukSky if2");
        playerlDiv.attr("class", "defending");
        playerlDiv.append($(this));
        $("#enemylocation").append(playerlDiv);
       
       }
    }
});

$("#DarSid").on("click", function(){
    console.log("This click is working.");
    if ($("#playerlocation").html()==""){
        console.log("Entered DarSid if");
    player3Div.append($(this));
    $("#playerlocation").append(player3Div);
    player3Div.addclass("inplay");
    $(".toptext").text("Select an Enemy to Attack:");
    }
    else {
        console.log("Entered DarthSid else");
        if ($("#enemylocation").html()==""){
            console.log("Entered DarthSid if2");
            player3Div.attr("class", "defending");
            player3Div.append($(this));
            $("#enemylocation").append(player3Div);
           }
    }
});

$("#DarMau").on("click", function(){
    console.log("This click is working.");
    if ($("#playerlocation").html()=="") {
        console.log("Entered DarthMaul if");
    player4Div.append($(this));
    $("#playerlocation").append(player4Div);
    // player4Div.addclass("inplay");
    $(".toptext").text("Select an Enemy to Attack:");
    }
    else {
        console.log("Entered DarthMaul else");
        if ($("#enemylocation").html()==""){
            console.log("Entered DarthMaul if2");
            player4Div.attr("class", "defending");
            player4Div.append($(this));
            $("#enemylocation").append(player4Div);
           }
    }
});
    };


var Obi = {
    firstname: "Obiwan",
    lastname: "Kenobi",
    attackpwr: 6,
    health: 120,
    obvsdm: function() {
        DarthM.health = (DarthM.health - (13*i));
        this.health = (this.health - 10);
        console.log(Obi.health);
        console.log(this.health);
    }
};

var Luke = {
    firstname: "Luke",
    lastname: "Skywalker",
    attackpwr: 15,
    health: 100
};

var DarthS = {
    firstname: "Darth",
    lastname: "Sidious",
    attackpwr: 10,
    health: 150
};

var DarthM = {
    firstname: "Darth",
    lastname: "Maul",
    attackpwr: 13,
    health: 180,
    dmvsob: function() {
        Obi.health = (Obi.health - (13*i));
        this.health = (this.health - 6);
        $(".gameAction").text(Obi.health);
        console.log(this.health);
        checkdeath (this);
        checkdefeat (Obi);
    },
    dmvsls: function() {
        Luke.health = (Luke.health - (13*i));
        this.health = (this.health - 15);
        console.log(Obi.health);
        console.log(this.health);
        checkdeath (this);
        checkdefeat(Luke);
    },
    dmvsds: function() {
        DarthS.health = (DarthS.health - (13*i));
        this.health = (this.health - 10);
        $(".gameAction").text(DarthS.health);
        console.log(this.health);
        checkdeath (this);
        checkdefeat(DarthS);
    }
    
};

console.log(DarthS);
console.log(Luke);
console.log(Obi);
console.log(DarthM);

function attack (){
    $("#attackb").on("click", function(){
       console.log("This attack button is working.");
       if (attackswitch){
       if ($("#playerlocation").find(player4Div).length == 1 && $("#enemylocation").find(playerDiv).length == 1){ 
        console.log("entered DM vs Ob IF");
        DarthM.dmvsob();
        i++;
    }}})};
attack();

function checkdeath (fighter) {
    if (fighter.health<1){
        $(".gameAction").text("You have depleted health. You lose!");
        attackwitch = false;
    }};

    function checkdefeat (enemy) {
        if (enemy.health<1){
            $(".gameAction").text("You have defeated " + enemy.firstname + " " + enemy.lastname + "! ");
            $("#ObiContainer").append(playerDiv);
            $("#ObiContainer").children().css("visibility", "hidden");
            
            attackswitch = false;
        }
    };
    checkdefeat(Obi);

    