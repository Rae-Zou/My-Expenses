import * as React from 'react';
import {getAllData, getData, getTotal} from "../database/Database";

var total_cost = 0;
  
const now = new Date();
const totalDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
var monthlyOccurances = {
                        1: [15],
                        2: [10, 20],
                        3: [7, 14, 21]
                        };

var monthDays = [...Array(totalDays).keys()].map(i => i + 1);

var costs = []

const recurringExpense = []
var alldata = getAllData();

for (const udata of alldata) {
    if (udata['recurring'] !=0){
        recurringExpense.push(udata);
    }
}

console.log(alldata);

const current_day = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
console.log("current_day type: " + typeof(current_day) + ", date: "+current_day);

for( const day of monthDays ){

    // console.log(day); // 0,1,2...
    for (const udata of alldata) {
        console.log("database date type: " + typeof(udata['date'])+ ", date: "+udata['date']);

        var date = udata['date'].substring(0, udata['date'].indexOf(' '));
        //console.log(date);
        if (udata['recurring'] == 0){
            if (monthlyOccurances[date] == day) {
                const c = Math.round(udata['price'])
                total_cost += Math.round(c);
                //costDict[udata['title']] += c;
            }
            }
            if (udata['recurring'] == 1){
                const c = Math.round(udata['price'])
                total_cost += Math.round(c);
                //costDict[udata['title']] += c;
            }
            if (udata['recurring'] == 2){
                const c = Math.round(udata['price'])
                total_cost += Math.round(c);
                //costDict[udata['title']] += c;
        }
    }
    costs.push(total_cost);
}


export const calForecastData = () =>{ return total_cost; }

export const calcosts = () =>{ return costs; }

export const calmonthDays = () =>{ return monthDays; }