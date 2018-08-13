var React = require("react");
var ReactDOM = require("react-dom");

// object destructuring
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main = require("Main");



// load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
// require does not know how to load css. use css! loader
$(document).foundation();


// app css
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.querySelector("#app")
);



