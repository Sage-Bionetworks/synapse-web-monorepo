import{P as y}from"./Plot-yPNqzsL3.js";import"./iframe-DzZkUbt0.js";import"./jsx-runtime-DNP5ZHPF.js";import"./index-C9LqO53Z.js";import"./index-B4XD6vgE.js";const f={distribution:[9631,5149,4106,4018,3768,1798,491,91,13,2],bins:[-.003,.3,.6,.8999999999999999,1.2,1.5,1.7999999999999998,2.1,2.4,2.6999999999999997,3]},e={geneticsscore:f},O={title:"Components/PlotlyPlot",component:y},r={displayModeBar:!1},h=[{x:[1,2,3,4,4,4,8,9,10],name:"",marker:{color:"rgba(229, 220, 247, 1)"},type:"box",boxmean:!1,orientation:"h",whiskerwidth:1,hoverinfo:"x"},{x:[2.3],y:[""],name:"",marker:{symbol:"line-ns",color:"rgba(166, 132, 238, 1)"},hovertemplate:"Score: %{x}"}],C={width:300,height:110,margin:{t:10},xaxis:{visible:!1}},P=e.geneticsscore.distribution.map((s,x)=>x===1?"rgba(166, 132, 238, 1)":"rgba(166, 132, 238, 0.25)"),B={type:"bar",marker:{color:P},width:.2},D=[{x:Object.values(e.geneticsscore.bins).map(s=>s.toFixed(2)),y:Object.values(e.geneticsscore.distribution),...B}],k={width:300,xaxis:{title:"Gene Score".toUpperCase(),titlefont:{size:12},tick0:0,dtick:.3},yaxis:{title:"Number of Genes".toUpperCase(),titlefont:{size:12}},plot_bgcolor:"rgba(236, 236, 236, 0.25)"},b={...k,annotations:[{x:.3,y:5149,text:"2.5",ax:0,ay:-10}]},o={args:{data:D,layout:b,config:r}},t={args:{data:h,layout:C,config:r,className:"chart-boxplot"}},a={args:{data:[],layout:b,config:r}};var n,c,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: geneticsscoreData,
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: boxPlotData,
    layout: boxPlotLayout,
    config: plotConfigs,
    className: 'chart-boxplot'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,d,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: [],
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["BarChart","BoxPlot","NoData"];export{o as BarChart,t as BoxPlot,a as NoData,_ as __namedExportsOrder,O as default};
