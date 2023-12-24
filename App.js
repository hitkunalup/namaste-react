//creating nested structure
/** <div id ="parent"><div id="child"><h1></h1><h2></h2></div><div id="child2"><h1></h1><h2></h2></div></div>  */
import React from 'react';
import ReactDOM from 'react-dom/client';


const parent = React.createElement("div", { id: "parent", key: "parent" }, [
	React.createElement("div", { id: "child", key: "child" }, [
		React.createElement("h1", { id: "heading", key: "heading" }, "Hello world"),
		React.createElement("h2", { id: "heading 2", key: "heading2" }, "Hello This is goosssssd"),
	]),
	React.createElement("div", { id: "child2", key: "child2" }, [
		React.createElement("h1", { id: "heading22", key: "heading3" }, "New world"),
		React.createElement("h2", { id: "heading2222", key: "heading4" }, "new This is good"),
	]),
]);

// document.body.append(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
