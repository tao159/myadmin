const loadView = (view) => {
    return (resolve) => require([`@/views/tree/${view}`], resolve);
  };

  const tree=[{
    path:"/tree_1",
    name:"tree_1",
    component:loadView("tree_1")
},{
    path:"/tree_2",
    name:"tree_2",
    component:loadView("tree_2")
}]

export default tree