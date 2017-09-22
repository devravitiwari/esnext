

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


async function dramaticWelcome() {

    console.log('Hello');

    await delay(3e3); // Execution below continues when the promise resolves or rejects

    console.log('World!');
}



dramaticWelcome();
