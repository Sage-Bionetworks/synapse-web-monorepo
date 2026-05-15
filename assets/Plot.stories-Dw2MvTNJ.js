import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./Plot-CfNvj-5J.js";var r,i,a,o,s,c,l=e((()=>{r={distribution:[12184,5175,4148,3481,2151,1175,570,153,21,9],bins:[-.007165802586,.7165802586,1.4331605172,2.1497407758,2.8663210344,3.582901293,4.2994815516,5.0160618102,5.7326420688,6.449222327399999,7.165802586],min:0,max:7.165802586,mean:1.3710040086127533,first_quartile:.26267472635,third_quartile:2.20063426655},i={distribution:[9631,5149,4106,4018,3768,1798,491,91,13,2],bins:[-.003,.3,.6,.8999999999999999,1.2,1.5,1.7999999999999998,2.1,2.4,2.6999999999999997,3],min:0,max:3,mean:.7160479295046273,first_quartile:.2261353865,third_quartile:1.1538092195},a={distribution:[20368,2068,1304,1206,1084,887,758,553,447,392],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.3498614540466405,first_quartile:0,third_quartile:.6516586135},o={distribution:[20945,1587,1236,1236,820,812,812,811,418,390],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.2970251075102351,first_quartile:0,third_quartile:.365292307692308},s={distribution:[28809,130,90,38,0,0,0,0,0,0],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.010936342473337463,first_quartile:0,third_quartile:0},c={logsdon:r,geneticsscore:i,omicsscore:a,literaturescore:o,flyneuropathscore:s}})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),t(),u={title:`Components/PlotlyPlot`,component:n},d={displayModeBar:!1},f=[{x:[1,2,3,4,4,4,8,9,10],name:``,marker:{color:`rgba(229, 220, 247, 1)`},type:`box`,boxmean:!1,orientation:`h`,whiskerwidth:1,hoverinfo:`x`},{x:[2.3],y:[``],name:``,marker:{symbol:`line-ns`,color:`rgba(166, 132, 238, 1)`},hovertemplate:`Score: %{x}`}],p={width:300,height:110,margin:{t:10},xaxis:{visible:!1}},m={type:`bar`,marker:{color:c.geneticsscore.distribution.map((e,t)=>t===1?`rgba(166, 132, 238, 1)`:`rgba(166, 132, 238, 0.25)`)},width:.2},h=[{x:Object.values(c.geneticsscore.bins).map(e=>e.toFixed(2)),y:Object.values(c.geneticsscore.distribution),...m}],g={width:300,xaxis:{title:`GENE SCORE`,titlefont:{size:12},tick0:0,dtick:.3},yaxis:{title:`NUMBER OF GENES`,titlefont:{size:12}},plot_bgcolor:`rgba(236, 236, 236, 0.25)`,annotations:[{x:.3,y:5149,text:`2.5`,ax:0,ay:-10}]},_={args:{data:h,layout:g,config:d}},v={args:{data:f,layout:p,config:d,className:`chart-boxplot`}},y={args:{data:[],layout:g,config:d}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: geneticsscoreData,
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: boxPlotData,
    layout: boxPlotLayout,
    config: plotConfigs,
    className: 'chart-boxplot'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    layout: specialBarLayout,
    config: plotConfigs
  }
}`,...y.parameters?.docs?.source}}},b=[`BarChart`,`BoxPlot`,`NoData`]}))();export{_ as BarChart,v as BoxPlot,y as NoData,b as __namedExportsOrder,u as default};