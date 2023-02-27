new Promise(resolve => {
    setTimeout(() => {
        console.log(3);
        resolve();
    }, 3000)
}) .then(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 3000);
    });
}) .then(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 3000);
    });
});