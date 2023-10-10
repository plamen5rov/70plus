function diceGameSimulation(num) {
    let resultArr = [];
    for (let i = 1; i <= num; i++) {
        let dice1 = Math.round(Math.random() * 5 + 1);
        let dice2 = Math.round(Math.random() * 5 + 1);
        let sum = dice1 + dice2;

        switch (sum) {
            case 2:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'lose'
                    }
                );
                break;
            case 3:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'lose'
                    }
                );
                break;
            case 7:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'win'
                    }
                );
                break;
            case 11:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'win'
                    }
                );
                break;
            case 12:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'lose'
                    }
                );
                break;
            default:
                resultArr.push(
                    {
                        dice1: dice1,
                        dice2: dice2,
                        sum: sum,
                        result: 'roll again'
                    }
                );
                break;

        }
    }

    return resultArr;
}

module.exports = diceGameSimulation;
