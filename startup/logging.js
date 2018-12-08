module.exports = function () {
    process.on('uncaughtException', (ex) => {
        console.log(ex);
        process.exit(1);
    });

    // process.on('unhandledRejection', (ex) => {
    //     console.log('dinesh kumar we got unhandledRejection')
    //     console.log(ex);
    //     process.exit(1);
    // });
}