import * as React from 'react';
import {getAllData, getData, getTotal} from "../database/Database";


export const calForecastData = () =>{
    
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


    for( const day of monthDays ){
        // console.log(day); // 0,1,2...
        for (const udata of alldata) {
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
    console.log('total_cost: '+total_cost);

    return total_cost;
  }