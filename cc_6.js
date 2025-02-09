//Task 1 - Business Profit Calculation
// Creates the Function with the parameters(costPrice,selling, and unitsold )
function calculateProfit(costPrice,selling,unitsSold){
    //calculates the total profit
    return (selling -costPrice)*  unitsSold
};

console.log(`**Task 1**\nTotal Profit:${calculateProfit(20,30,100)}\nTotal Profit: ${calculateProfit(50,70,200)}\n`);


//Task 2 - Sales Tax Computation
function calculateSalesTax(amount,taxRate){
    // calculates the sales tax of the given amount 
    salesTax = amount *taxRate
    return salesTax
};

console.log(`**Task 2**\nSales Tax: ${calculateSalesTax(100,.07)}\nSales Tax: ${calculateSalesTax(500,.1)}\n`);


//Task 3 - Employee Bonus Calculation
let calculateBonus = (salary,performanceRating) => 
    //expression determines  if plan is Excellent, good, or average and generates the cost
    performanceRating === "Excellent" ? (salary *.20):  // option returned if rating is Excellent
    performanceRating === "Good" ? (salary *.10):// option returned if rating is good
    performanceRating === "Average" ? (salary *.05): // option returned if rating is Average
    0;// ensures default is 0

console.log(`**Task 3**\nBonus: ${calculateBonus(5000, "Excellent")}\nBonus: ${calculateBonus(7000,"Good")}\n`);


//Task 4 - Subscription Pricing Model
let calculateSubscriptionCost = (plan,months,discount=0) => // creates an arrow function
    // ternary expression determines  if plan is Excellent, good, or average and generates the cost
    plan === "Basic" ? (months*10 - discount) :  // basic plan calculation
    plan === "Premium" ? (months*20 - discount) : // premium plan calculation
    plan === "Enterprise" ? (months*50 - discount):    // enterprise plan calculation       
    0; // ensures default to 0
    
console.log(`**Task 4**\nTotal Cost: ${calculateSubscriptionCost("Basic",6,10)}\nTotal Cost: ${calculateSubscriptionCost("Premium",12,0)}\n`);
