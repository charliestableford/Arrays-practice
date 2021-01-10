    // const favouriteFood = ['burritos', 'coffee', 'ramen', 'pho', 'indian curry', 'thai curry'];
        // //sprea operator spreads array into elements.
        // // console.log(...favouriteFood);
        // const findFood = favouriteFood.includes('burritos');
        // // will return a true or false and is case sensitive
        // // console.log(findFood);

        // //replaces conventional for loop and allows you to modify one item
        // for(const item of favouriteFood){
        //     // console.log(item);
        // }

        // const mappedFood = favouriteFood.map((item) => item);
        // // console.log(mappedFood);

        // const expenses = [20, 34, 56, 10, 12];
        // const total = expenses.reduce((first, last)=> first + last);
        // // console.log(total);

        // const budgies = [
        //     {
        //     'cheese': .50, 
        //     'burrito': 12.00, 
        //     'cabbage': 1.00, 
        //     'sour cream': 3.00, 
        //     'black beans': 2.00
        //     }, 
        // ];

        // // console.log(...budgies);

        // const burrito = budgies[0].burrito;
        // // console.log((budgies[0].cheese) + (budgies[0].burrito));

        // const mapping = budgies.map((item) => item);
        // // console.log(...mapping);
        // // const including = mapping.includes('black beans');
        // // console.log(including);

        // const takeOut = [];
        // takeOut.push();
        // // console.log();

        // const iceCream = [
        //     {'vanilla': 1.50},
        //     {'chocolate': 2.50}, 
        //     {'raspberry': .75}
        // ];

        // const loop = iceCream[0].vanilla;
        // // console.log(loop);

        // for(const item of iceCream){
        //     // console.log(item);  
        //     // console.log(takeOut.push(item));
        // }

        // console.log(...takeOut);

        // const vanillaIncludes = iceCream.includes('vanilla');
        // // console.log(vanillaIncludes);

        const groceryStore = [
            {
                id: 1,
                name: 'pineapple',
                cost: 3.00,
                qty: 10
            }, 
            {
                id: 2,
                name: 'apples',
                cost: 1.50,
                qty: 10
            }, 
            {
                id: 3,
                name: 'avocado',
                cost: 4.50,
                qty: 10
            }
        ];

        //let instead of const
        let cart = [];

        const addToCart = (id) => {
            // now this item is going the exact same thing as making a new object so it is referencing the object that you already have. 
            // .find will only give you the first thingg that it finds that it matches. 
            // if you are ever in a situation where you want to get all the apples you would use .filter. 
            const item = groceryStore.find(groceryStoreItem => groceryStoreItem.id === id);
            // let item = {
            //     id: id,
            //     name: name,
            //     cost: cost, 
            //     qty: qty
            // }
            cart.push(item);
            let outOfStock = (cart.qty === groceryStore.qty) ? "Out of Stock" : "In Stock";
            console.log(outOfStock); 
            return cart;
            };

        // const updateCart = () => cart.map((item) => item);
        const subtractCart = (id) => {
            // if I have this outside of the function do I have to have it everytime?
            const item = groceryStore.find(groceryStoreItem => groceryStoreItem.id === id);


            // let item = {
            //     id: id,
            //     name: name,
            //     cost: cost, 
            //     qty: qty
            // }
            console.log(cart.findIndex(x=> x.id === id));
            item.qty--;
        };

        // for each item in the cart
        // loop over it
        // accumilate the current total as a variable called 'a'
        // add b.cost to that total
        // we use reduce the most when there are side effects. 
        // chose reduce for discounts - buy one get one free. When you have complicated control flow. 

        const cartTotal = () => cart.reduce((a, b)=> ({cost: a.cost + b.cost})); 
        // this could be accomplistd with 

        const cartTotal = ()=> {
            let total = 0;

            cart.map(cartItem=> (total - total + cartItem.cost));
            return {cost: total}
        }


        const clearCart = () => cart = []; 
        const discountItem = (id, name, cost, qty, discount) => {
            // let item = {
            //     id: id,
            //     name: name,
            //     cost: cost, 
            //     qty: qty
            // };
            let variable = item.cost - (item.cost * discount);
            cart.push(item);
        };

        // passing in an array of objects, if you wanted to do ids that would work to
        const applytwoForOne = (items) => {
            // two ways you could do this. 
            // if one item = pay full price
            // if two items pay for one
            // if 3 items pay for two
            // if 4 items pay for 2

            // modjulo
            if(items.length % 2 === 0){
                // this will only run if you have an even number of things. 
                // if the things evenly divides by two then totalPrice = item.cost/2
                totalPrice = item.cost/2;
            }
        };

        const discountCart = (discount, cartTotal) => {
            // console.log(cartTotal);
            let newTotal = cartTotal - (cartTotal * discount);
            return newTotal;
            console.log(newTotal);
        };
        


/*
    feedback: 
    - likes that strucutes data first. 
    - prices are in whole numbers. 
    - price - as cents as opposed to dollar and cents. 
    - like that the add and subtract functions are separate. 
    - an alternative is a redicer - that would allow you to scale even more options as you go. 

    - cartTotal doesn't need a reducer. You could use map 
    - reducer is the most powerful funciton in js - 
    // you can change cartt to const and everything will still work. 
    // two options - make cart an array of id's ad cross rteference betweeen grocery store inventories
    - 

*/