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


// Task 5 - Currency Conversion
let convertCurrency = (amount,ExchangeRate) =>  amount * ExchangeRate; // creates an arrow function that exchanges currency
console.log(`**Task 5**\nCurrency conversion: $${convertCurrency(100,1.1)}\nCurrency Conversion: $${convertCurrency(250,.85)}\n`);


//Task 6 - Higher-Order Function for Bulk Orders
let orders = [200,600,1200,450,800]; // creates an array with values
function applyBulkDiscount(orders, discountFunction){  // creates a function 
    // returns a new array using the .map method and the discount function code 
    return orders.map(discountFunction);
};
console.log(`**Task 6**\nUpdated Orders: ${applyBulkDiscount(orders,amount => amount > 500 ? amount*.9 :amount)}\n`);


//Task 7- Business Expense Tracker
function createExpenseTracker(){
    // retaurns expenseTracker
    let sum = 0;
    return expenseTracker = (expense) =>{ // the tracker function that is returned by createExpenseTracker
        sum += expense
        return console.log(`Total Expenses: ${sum}`);  // returns the tracked total to console.log
    };
};
let tracker =  createExpenseTracker() // renames function to tracker
console.log(`**Task 7**`); // for clarity in the console.log
tracker(200); // calls function 
tracker(150); // calls function


//Task 8 - Employee Promotion Evaluation
let  calculateYearsToPromotion = (employeeLevel) => {
    if(employeeLevel >= 10){  //  returns 0 if employee level reaches 10 t0 stop further calls
        return 0;
    }
    return calculateYearsToPromotion(employeeLevel +1) +2; // returns employee level +1 if the employee level is less than 10. each call adds + 2 years
};
console.log('\n** Task 8 **'); // for readability in the console.log
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}\nYears to Level 10: ${calculateYearsToPromotion(5)}`); 

