//Task 1 - Business Profit Calculation
// Creates the Function with the parameters(costPrice,selling, and unitsold )
function calculateProfit(costPrice,selling,unitsSold){
    //calculates the total profit
    return (selling -costPrice)*  unitsSold
};

console.log(`**Task 1**\nTotal Profit:${calculateProfit(20,30,100)}\nTotal Profit: ${calculateProfit(50,70,200)}\n`);
