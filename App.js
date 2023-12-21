//creating nested structure
/** <div id ="parent"><div id="child"><h1></h1><h2></h2></div><div id="child2"><h1></h1><h2></h2></div></div>  */

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", { id: "heading" }, "Hello world"),
		React.createElement("h2", { id: "heading 2" }, "Hello This is good"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", { id: "heading22" }, "New world"),
		React.createElement("h2", { id: "heading2222" }, "new This is good"),
	]),
]);

// document.body.append(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
