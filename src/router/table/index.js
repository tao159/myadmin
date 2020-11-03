const loadView = (view) => {
  return (resolve) => require([`@/views/table/${view}`], resolve);
};

const table = [{
  path: "table_1",
  name: "table_1",
  component: loadView("table_1"),
},
{
  path: "table_2",
  name: "table_2",
  component: loadView("table_2"),
}];

export default table;
