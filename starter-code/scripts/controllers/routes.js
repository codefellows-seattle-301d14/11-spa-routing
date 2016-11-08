/* DONE: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */

// DONE: What function do we call to activate page.js?
page('/', index);
page('/about', about);
page();

function index(){
  articleController.reveal();
}

function about(){
  aboutController.reveal();
}
