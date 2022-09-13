var dolphinsSc1 = 44;
var dolphinsSc2 = 23;
var dolphinsSc3 = 71;
var koalasSc1 = 65;
var koalasSc2 = 54;
var koalasSc3 = 49;

var dolphinsSc1Round2 = 85;
var dolphinsSc2Round2 = 54;
var dolphinsSc3Round2 = 41;
var koalasSc1Round2 = 23;
var koalasSc2Round2 = 34;
var koalasSc3Round2 = 27;


var calcAvarage = (score1,score2,score3) => (score1 + score2 + score3)/3;


function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    }
    else if (avgKoalas >= avgDolphins * 2){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }
    else{
        return "No team Wins!";
    }
}


var dolphinsAvg = calcAvarage(dolphinsSc1,dolphinsSc2,dolphinsSc3);
console.log(`Team Dolphins avarage score is ${dolphinsAvg}`);

var koalasAvg = calcAvarage(koalasSc1,koalasSc2,koalasSc3);
console.log(`Team Koalas avarage score is ${koalasAvg}`);

var winner = checkWinner(dolphinsAvg,koalasAvg);
console.log(winner);

console.log("\n", "Round 2", "\n");


var dolphinsAvgRound2 = calcAvarage(dolphinsSc1Round2,dolphinsSc2Round2,dolphinsSc3Round2);
console.log(`Team Dolphins avarage score is ${dolphinsAvgRound2}`);

var koalasAvgRound2 = calcAvarage(koalasSc1Round2,koalasSc2Round2,koalasSc3Round2);
console.log(`Team Koalas avarage score is ${koalasAvgRound2}`);

var winnerRound2 = checkWinner(dolphinsAvgRound2,koalasAvgRound2);
console.log(winnerRound2);


