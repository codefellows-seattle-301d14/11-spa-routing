/* DONE: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */

// DONE: What function do we call to activate page.js?
page();
page('/', index);
page('/about', about);

function index(){
  articleControle.reveal();
}

function about(){
  aboutController.reveal();
}
