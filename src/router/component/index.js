const loadView = (view) => {
    return (resolve) => require([`@/views/component/${view}`], resolve);
  };

const components=[{
    path:"/components",
    name:"component",
    component:loadView('index')
},]

export default components