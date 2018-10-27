
var playerDiv = $("<div>");
var playerlDiv = $("<div>");
var player3Div = $("<div>");
var player4Div = $("<div>");
var i = 1;
var attackswitch = true;
var ObiH = 0;

$(document).ready(function () {



    //function that moves player and defender into correct places
    function pickPlayer() {


        $("#ObiWan").on("click", function () {

            console.log("This click is working.");
            if ($("#playerlocation").html() == "") {
                console.log("Entered ObiWan if");
                playerDiv.append($(this));
                $("#playerlocation").append(playerDiv);
                // playerDiv.addclass("inplay");
                $(".toptext").text("Select an Enemy to Attack:");
            }
            else {
                console.log("Entered ObiWan else");
                if ($("#enemylocation").html() == "") {
                    console.log("Entered ObiWan if2");
                    playerDiv.attr("class", "defending");
                    playerDiv.append($(this));
                    $("#enemylocation").append(playerDiv);
                    attackswitch = true;
                }
            }
        });

        $("#LukSky").on("click", function () {
            console.log("This click is working.");
            if ($("#playerlocation").html() == "") {
                console.log("Entered LukSky if");
                playerlDiv.append($(this));
                $("#playerlocation").append(playerlDiv);
                // playerlDiv.addclass("inplay");
                $(".toptext").text("Select an Enemy to Attack:");
            }
            else {
                console.log("Entered LukSky else");
                if ($("#enemylocation").html() == "") {
                    console.log("Entered LukSky if2");
                    playerlDiv.attr("class", "defending");
                    playerlDiv.append($(this));
                    $("#enemylocation").append(playerlDiv);
                    attackswitch = true;
                }
            }
        });

        $("#DarSid").on("click", function () {
            console.log("This click is working.");
            if ($("#playerlocation").html() == "") {
                console.log("Entered DarSid if");
                player3Div.append($(this));
                $("#playerlocation").append(player3Div);
                // player3Div.addclass("inplay");
                $(".toptext").text("Select an Enemy to Attack:");
            }
            else {
                console.log("Entered DarthSid else");
                if ($("#enemylocation").html() == "") {
                    console.log("Entered DarthSid if2");
                    player3Div.attr("class", "defending");
                    player3Div.append($(this));
                    $("#enemylocation").append(player3Div);
                    attackswitch = true;
                }
            }
        });

        $("#DarMau").on("click", function () {
            console.log("This click is working.");
            if ($("#playerlocation").html() == "") {
                console.log("Entered DarthMaul if");
                player4Div.append($(this));
                $("#playerlocation").append(player4Div);
                // player4Div.addclass("inplay");
                $(".toptext").text("Select an Enemy to Attack:");
            }
            else {
                console.log("Entered DarthMaul else");
                if ($("#enemylocation").html() == "") {
                    console.log("Entered DarthMaul if2");
                    player4Div.attr("class", "defending");
                    player4Div.append($(this));
                    $("#enemylocation").append(player4Div);
                    attackswitch = true;
                }
            }
        });

        resetfunc();
    };


    var Obi = {
        firstname: "Obiwan",
        lastname: "Kenobi",
        attackpwr: 6,
        health: 120,
        counter_attack: 25,
        obvsdm: function () {
            if (this.health>0){
            DarthM.health = (DarthM.health - (this.attackpwr * i));
            this.health = (this.health - DarthM.counter_attack);
            $(".gameAction").text("You attacked Darth Maul for  " + (this.attackpwr * i) + " damage." + " Darth Maul attacked you for " + DarthM.counter_attack + " damage.");
            $("#ObiHealth").text(this.health);
            $("#DMHealth").text(DarthM.health);
            checkdeath(this);
            checkdefeat(DarthM);};
        },
        obvsls: function () {
            if (this.health>0){
            Luke.health = (Luke.health - (this.attackpwr * i));
            this.health = (this.health - Luke.counter_attack);
            $(".gameAction").text("You attacked Luke Skywalker for  " + (this.attackpwr * i) + " damage." + " Luke Skywalker attacked you for " + Luke.counter_attack + " damage.");
            $("#ObiHealth").text(this.health);
            $("#LukeHealth").text(Luke.health);
            checkdeath(this);
            checkdefeat(Luke);};
        },
        obvsds: function () {
            if (this.health>0){
            DarthS.health = (DarthS.health - (this.attackpwr * i));
            this.health = (this.health - DarthS.counter_attack);
            $(".gameAction").text("You attacked Darth Sidious for  " + (this.attackpwr * i) + " damage." + " Darth Sidious attacked you for " + DarthS.counter_attack + " damage.");
            $("#ObiHealth").text(this.health);
            $("#DSHealth").text(DarthS.health);
            checkdeath(this);
            checkdefeat(DarthS);};
        },
    };

    var Luke = {
        firstname: "Luke",
        lastname: "Skywalker",
        attackpwr: 15,
        health: 100,
        counter_attack: 40,
        lsvsdm: function () {
            if (this.health>0){
            DarthM.health = (DarthM.health - (this.attackpwr * i));
            this.health = (this.health - DarthM.counter_attack);
            $(".gameAction").text("You attacked Darth Maul for  " + (this.attackpwr * i) + " damage." + " Darth Maul attacked you for " + DarthM.counter_attack + " damage.");
            $("#LukeHealth").text(this.health);
            $("#DMHealth").text(DarthM.health);
            checkdeath(this);
            checkdefeat(DarthM);};
        },
        lsvsob: function () {
            if (this.health>0){
            Obi.health = (Obi.health - (this.attackpwr * i));
            this.health = (this.health - Obi.counter_attack);
            $(".gameAction").text("You attacked Obiwan Kenobi for  " + (this.attackpwr * i) + " damage." + " Obiwan Kenobi attacked you for " + Obi.counter_attack + " damage.");
            $("#LukeHealth").text(this.health);
            $("#ObiHealth").text(Obi.health);
            checkdeath(this);
            checkdefeat(Obi);};
        },
        lsvsds: function () {
            if (this.health>0){
            DarthS.health = (DarthS.health - (this.attackpwr * i));
            this.health = (this.health - DarthS.counter_attack);
            $(".gameAction").text("You attacked Darth Sidious for  " + (this.attackpwr * i) + " damage." + " Darth Sidious attacked you for " + DarthS.counter_attack + " damage.");
            $("#LukeHealth").text(this.health);
            $("#DSHealth").text(DarthS.health);
            checkdeath(this);
            checkdefeat(DarthS);};
        },
    };

    var DarthS = {
        firstname: "Darth",
        lastname: "Sidious",
        attackpwr: 10,
        health: 150,
        counter_attack: 20,
        dsvsdm: function () {
            if (this.health>0){
            DarthM.health = (DarthM.health - (this.attackpwr * i));
            this.health = (this.health - DarthM.counter_attack);
            $(".gameAction").text("You attacked Darth Maul for  " + (this.attackpwr * i) + " damage." + " Darth Maul attacked you for " + DarthM.counter_attack + " damage.");
            $("#DSHealth").text(this.health);
            $("#DMHealth").text(DarthM.health);
            checkdeath(this);
            checkdefeat(DarthM);};
        },
        dsvsls: function () {
            if (this.health>0){
            Luke.health = (Luke.health - (this.attackpwr * i));
            this.health = (this.health - Luke.counter_attack);
            $(".gameAction").text("You attacked Luke Skywalker for  " + (this.attackpwr * i) + " damage." + " Luke Skywalker attacked you for " + Luke.counter_attack + " damage.");
            $("#DSHealth").text(this.health);
            $("#LukeHealth").text(Luke.health);
            checkdeath(this);
            checkdefeat(Luke);};
        },
        dsvsob: function () {
            if (this.health>0){
            Obi.health = (Obi.health - (this.attackpwr * i));
            this.health = (this.health - Obi.counter_attack);
            $(".gameAction").text("You attacked Obiwan Kenobi for  " + (this.attackpwr * i) + " damage." + " Obiwan Kenobi attacked you for " + Obi.counter_attack + " damage.");
            $("#DSHealth").text(this.health);
            $("#ObiHealth").text(Obi.health);
            checkdeath(this);
            checkdefeat(Obi);};
        },
    };

    var DarthM = {
        firstname: "Darth",
        lastname: "Maul",
        attackpwr: 13,
        health: 180,
        counter_attack: 15,
        dmvsob: function () {
            if (this.health>0){
            Obi.health = (Obi.health - (this.attackpwr * i));
            this.health = (this.health - Obi.counter_attack);
            $(".gameAction").text("You attacked Obiwan Kenobi for  " + (this.attackpwr * i) + " damage." + " Obiwan Kenobi attacked you for " + Obi.counter_attack + " damage.");
            $("#DMHealth").text(this.health);
            $("#ObiHealth").text(Obi.health);
            checkdeath(this);
            checkdefeat(Obi);};
        },
        dmvsls: function () {
            if (this.health>0){
            Luke.health = (Luke.health - (this.attackpwr * i));
            this.health = (this.health - Luke.counter_attack);
            $(".gameAction").text("You attacked Luke Skywalker for  " + (this.attackpwr * i) + " damage." + " Luke Skywalker attacked you for " + Luke.counter_attack + " damage.");
            $("#DMHealth").text(this.health);
            $("#LukeHealth").text(Luke.health);
            checkdeath(this);
            checkdefeat(Luke);};
        },
        dmvsds: function () {
            if (this.health>0){
            DarthS.health = (DarthS.health - (this.attackpwr * i));
            this.health = (this.health - DarthS.counter_attack);
            $(".gameAction").text("You attacked Darth Sidious for  " + (this.attackpwr * i) + " damage." + " Darth Sidious attacked you for " + DarthS.counter_attack + " damage.");
            $("#DMHealth").text(this.health);
            $("#DSHealth").text(DarthS.health);
            checkdeath(this);
            checkdefeat(DarthS);};
        }

    };
    $("#ObiHealth").text(Obi.health);
    $("#LukeHealth").text(Luke.health);
    $("#DSHealth").text(DarthS.health);
    $("#DMHealth").text(DarthM.health);
    // console.log(DarthS);
    // console.log(Luke);
    // console.log(Obi);
    // console.log(DarthM);

    function attack() {
        $("#attackb").on("click", function () {
            console.log("This attack button is working.");
            if (attackswitch) {
                if ($("#playerlocation").find(player4Div).length == 1 && $("#enemylocation").find(playerDiv).length == 1) {
                    console.log("entered DM vs Ob IF");
                    DarthM.dmvsob();
                    i++;
                }
                if ($("#playerlocation").find(player4Div).length == 1 && $("#enemylocation").find(playerlDiv).length == 1) {
                    console.log("entered DM vs DS IF");
                    DarthM.dmvsls();
                    i++;
                }
                if ($("#playerlocation").find(player4Div).length == 1 && $("#enemylocation").find(player3Div).length == 1) {
                    console.log("entered DM vs LS IF");
                    DarthM.dmvsds();
                    i++;
                }
                if ($("#playerlocation").find(playerDiv).length == 1 && $("#enemylocation").find(player4Div).length == 1) {
                    console.log("entered OW vs DM IF");
                    Obi.obvsdm();
                    i++;
                }
                if ($("#playerlocation").find(playerDiv).length == 1 && $("#enemylocation").find(playerlDiv).length == 1) {
                    console.log("entered OW vs LS IF");
                    Obi.obvsls();
                    i++;
                }
                if ($("#playerlocation").find(playerDiv).length == 1 && $("#enemylocation").find(player3Div).length == 1) {
                    console.log("entered OW vs DS IF");
                    Obi.obvsds();
                    i++;
                }
                if ($("#playerlocation").find(playerlDiv).length == 1 && $("#enemylocation").find(player4Div).length == 1) {
                    console.log("entered LS vs DM IF");
                    Luke.lsvsdm();
                    i++;
                }
                if ($("#playerlocation").find(playerlDiv).length == 1 && $("#enemylocation").find(playerDiv).length == 1) {
                    console.log("entered LS vs OW IF");
                    Luke.lsvsob();
                    i++;
                }
                if ($("#playerlocation").find(playerlDiv).length == 1 && $("#enemylocation").find(player3Div).length == 1) {
                    console.log("entered LS vs DS IF");
                    Luke.lsvsds();
                    i++;
                }
                if ($("#playerlocation").find(player3Div).length == 1 && $("#enemylocation").find(playerDiv).length == 1) {
                    console.log("entered DS vs OW IF");
                    DarthS.dsvsob();
                    i++;
                }
                if ($("#playerlocation").find(player3Div).length == 1 && $("#enemylocation").find(playerlDiv).length == 1) {
                    console.log("entered DS vs LS IF");
                    DarthS.dsvsls();
                    i++;
                }
                if ($("#playerlocation").find(player3Div).length == 1 && $("#enemylocation").find(player4Div).length == 1) {
                    console.log("entered DS vs DM IF");
                    DarthS.dsvsdm();
                    i++;
                }
            }
        })
    };
    attack();

    function checkdeath(fighter) {
        if (fighter.health < 1) {
            $(".gameAction").text("You have depleted health. You lose!");
            attackwitch = false;
        }
    };

    function checkdefeat(enemy) {
        if (enemy.health < 1) {
            $(".gameAction").text("You have defeated " + enemy.firstname + " " + enemy.lastname + "! ");
            attackswitch = false;
            disappear();
        }
    };

    function disappear() {
        if (Obi.health < 1 && $("#enemylocation").find(playerDiv).length == 1) {
            $(".ObiCont").append(playerDiv);
            $(".ObiCont").children().css("visibility", "hidden");
        }
        if (Luke.health < 1 && $("#enemylocation").find(playerlDiv).length == 1) {
            $(".LukSkyCont").append(playerlDiv);
            $(".LukSkyCont").children().css("visibility", "hidden");
        }
        if (DarthS.health < 1 && $("#enemylocation").find(player3Div).length == 1) {
            $(".DarSidCont").append(player3Div);
            $(".DarSidCont").children().css("visibility", "hidden");
        }
        if (DarthM.health < 1 && $("#enemylocation").find(player4Div).length == 1) {
            $(".DarMauCont").append(player4Div);
            $(".DarMauCont").children().css("visibility", "hidden");
        }
    };

function resetfunc () {
    $(".resetb").on("click", function () {
        location.reload();
    })};
    
    pickPlayer();
  


//     function updatehealth () {
//     console.log("This is inside the reset function" + ObiH);
// }
// console.log("This is outside the reset function" + ObiH);
});
