import{P as i}from"./Plot-D_lZVB0f.js";import"./index-Chi_LkuB.js";import"./iframe-Cb9YNozx.js";import"./index-Chjiymov.js";const l={distribution:[9631,5149,4106,4018,3768,1798,491,91,13,2],bins:[-.003,.3,.6,.8999999999999999,1.2,1.5,1.7999999999999998,2.1,2.4,2.6999999999999997,3]},e={geneticsscore:l},C={title:"Components/PlotlyPlot",component:i},r={displayModeBar:!1},p=[{x:[1,2,3,4,4,4,8,9,10],name:"",marker:{color:"rgba(229, 220, 247, 1)"},type:"box",boxmean:!1,orientation:"h",whiskerwidth:1,hoverinfo:"x"},{x:[2.3],y:[""],name:"",marker:{symbol:"line-ns",color:"rgba(166, 132, 238, 1)"},hovertemplate:"Score: %{x}"}],m={width:300,height:110,margin:{t:10},xaxis:{visible:!1}},g=e.geneticsscore.distribution.map((s,c)=>c===1?"rgba(166, 132, 238, 1)":"rgba(166, 132, 238, 0.25)"),d={type:"bar",marker:{color:g},width:.2},u=[{x:Object.values(e.geneticsscore.bins).map(s=>s.toFixed(2)),y:Object.values(e.geneticsscore.distribution),...d}],b={width:300,xaxis:{title:"Gene Score".toUpperCase(),titlefont:{size:12},tick0:0,dtick:.3},yaxis:{title:"Number of Genes".toUpperCase(),titlefont:{size:12}},plot_bgcolor:"rgba(236, 236, 236, 0.25)"},n={...b,annotations:[{x:.3,y:5149,text:"2.5",ax:0,ay:-10}]},o={args:{data:u,layout:n,config:r}},a={args:{data:p,layout:m,config:r,className:"chart-boxplot"}},t={args:{data:[],layout:n,config:r}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: geneticsscoreData,
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: boxPlotData,
    layout: boxPlotLayout,
    config: plotConfigs,
    className: 'chart-boxplot'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,...t.parameters?.docs?.source}}};const P=["BarChart","BoxPlot","NoData"];export{o as BarChart,a as BoxPlot,t as NoData,P as __namedExportsOrder,C as default};
