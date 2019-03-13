import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOsVPpyccgyWelkSnrieyNvik6GggoUi4",
    authDomain: "expensify-593bf.firebaseapp.com",
    databaseURL: "https://expensify-593bf.firebaseio.com",
    projectId: "expensify-593bf",
    storageBucket: "expensify-593bf.appspot.com",
    messagingSenderId: "809735488178"
};

firebase.initializeApp(config);

const database = firebase.database();

const getExpenses = (snapshot) => {
    const expenses = [];
    snapshot.forEach((child) => {
        expenses.push({
            id: child.key,
            ...child.val()
        });
    });
    console.log(expenses);
};

database.ref('expenses').on('value', getExpenses);
database.ref('expenses').on('child_removed', getExpenses);
database.ref('expenses').on('child_changed', getExpenses);
database.ref('expenses').on('child_added', getExpenses);

/*database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 125000,
    createdAt: 0
});

database.ref().once('value').then((snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is ${data.job.title} at ${data.job.company}`);
}).catch(err => {
    console.log(err);
});

database.ref().on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is ${data.job.title} at ${data.job.company}`);
});*/