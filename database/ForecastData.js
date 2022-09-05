import {getAllData} from "../database/Database";

var total_cost = 0;
var costs = [];
const now = new Date();
const totalDays = new Date(now.getFullYear(), Number(now.getMonth())+1, 0).getDate();
const current_day = new Date(now.getFullYear(), Number(now.getMonth())+1, 0);
const recurringExpense = []
var monthDays = [...Array(totalDays).keys()].map(i => i + 1);
var alldata = getAllData();
var costDict = {"Rent" : 0, "Food" : 0,"Power" : 0,"Transport" : 0,"Other" : 0};

for (const udata of alldata) {
    if (udata['recurring'] !=0){
        recurringExpense.push(udata);
    }
}

for( const day of monthDays ){
    const plot_Date = new Date(current_day.getFullYear(), current_day.getMonth(), day)
    for (const udata of alldata) {
        const t_date = new Date(udata['date']);
        if (udata['recurring'] == 0){
            if ( t_date == plot_Date) {
                const c = Math.round(udata['price'])
                total_cost += Math.round(c);
                costDict[udata['category']] += c;
            }
        } else{
            var t_recurring = 7;
            if (udata['recurring'] == 2){
                t_recurring = 14;
            }
            const diffTime = Math.abs(plot_Date - t_date);
            const day_diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if (day_diff >= 0 && (day_diff)%t_recurring == 0){
                const c = Math.round(udata['price'])
                total_cost += Math.round(c);
                costDict[udata['category']] += c;
            }
        }
    }
    costs.push(total_cost);
}


export const calForecastData = () =>{ return total_cost; }

export const calcosts = () =>{ return costs; }

export const calmonthDays = () =>{ return monthDays; }

export const calcostDict = () =>{ return costDict; }