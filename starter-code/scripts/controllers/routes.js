/* TODO: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */



// DONE ! TODO: What function do we call to activate page.js?
    page('/', articleController.reveal());
    page('/about', aboutController.reveal());
    page();
