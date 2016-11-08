/* TODO:DONE Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */
page();
page('/', articleController.reveal);
page('/about',aboutController.reveal);


// TODO: DONE (See above) What function do we call to activate page.js?
