import {db} from '../firebase'

export const getAllData = () =>{
    
    let array = [];
  
    db.ref('users/').on('value', function (snapshot) {
  
      snapshot.forEach(function (childSnapshot) {
        let children = childSnapshot.val();
        array.push({
          id: children.key,
          name: children.Name,
          category: children.category,
          price: children.price,
          date: children.date,
          recurring: children.recurring
        });
      });
      
      console.log(array)
      

    });

    return array;
  }

  export const getDataOnDate = (date) =>{

    let array = [];

    db.ref('users/').on('value', function (snapshot) {
  
      snapshot.forEach(function (childSnapshot) {
        let children = childSnapshot.val();
        if(children.date == date){
          array.push({
            id: children.key,
            name: children.Name,
            categroy: children.category,
            price: children.price,
            date: children.date,
            recurring: children.recurring
          });
        }    
      });
      
    });

    return array;
  }

  export const getData = (category) =>{

    let array = [];
  
    db.ref('users/').on('value', function (snapshot) {
  
      snapshot.forEach(function (childSnapshot) {
        let children = childSnapshot.val();
        if(children.category == category){
          array.push({
            id: children.key,
            name: children.Name,
            categroy: children.category,
            price: children.price,
            date: children.date,
            recurring: children.recurring
          });
        }    
      });
      
    });
    //console.log(array);
    return array;
  }

  export const getTotal = (category) =>{
    var catdata = getData(category);
    var total = 0;
    for(const r of catdata) {
        total += parseInt(r['price']);
        //console.log(total);
    }
    return total;
  }

  export function addNewData(name, category, price, date, recurring) {
    db.ref('users/').push().set({
      Name: name,
      category: category,
      price: price,
      date: date,
      recurring: recurring
    }, function (error) {
      if (error) {
        // The write failed...
        alert('Error!')
      } else {
        // Data saved successfully!
        alert('Item added successfully to database!')
      }
    });
}