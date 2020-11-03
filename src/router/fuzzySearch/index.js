const loadView = (view) => {
    return (resolve) => require([`@/views/fuzzySearch/${view}`], resolve);
  };

const fuzzySearch=[{
    path:"/fuzzySearch_1",
    name:"fuzzySearch_1",
    component:loadView("fuzzySearch_1")
}]

export default fuzzySearch