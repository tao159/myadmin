const loadView = (view) => {
    return (resolve) => require([`@/views/eChart/${view}`], resolve);
  };

const charts=[{
    path:"/eCharts_1",
    name:"eCharts_1",
    component:loadView('eChart_1')
},{
    path:"/eCharts_2",
    name:"eCharts_2",
    component:loadView('eChart_2')
}]

export default charts