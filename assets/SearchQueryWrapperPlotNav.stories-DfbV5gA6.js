import{n as e}from"./chunk-jRWAZmH_.js";import{F as t,G as n,K as r,L as i,N_ as a,Vg as o,ag as s,i as c,n as l,ng as u,q as d,r as f,t as p}from"./iframe-CEwhhiec.js";import{f as m,p as h}from"./CardContainerLogic-DedL9cbR.js";var g,_,v,y,b,x;e((()=>{i(),c(),l(),r(),s(),a(),h(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Explore/SearchQueryWrapperPlotNav`,component:m,parameters:{stack:`mock`,msw:{handlers:[t(u,{tableBundle:{columnModels:d.columnModels,maxRowsPerPage:25}}),...p(u),...f(u)]}},args:{searchIndexId:n,onQueryResultBundleChange:g()}},v={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{columnLinks:[]},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`]}},y={args:{name:`Search Results`,cardConfiguration:{type:o,genericCardSchema:{type:`Standard`,title:`name`,subTitle:`acronym`,secondaryLabels:[`category`,`collections`,`topic`,`isOpen`]}},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!0}},b={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{},availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!1,hideTopLevelControls:!1,hideQueryCount:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {
      columnLinks: []
    },
    facetsToPlot: ['category', 'collections', 'topic'],
    availableFacets: ['category', 'collections', 'topic', 'dataTypes', 'isOpen', 'mature', 'registration']
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Search Results',
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: 'Standard',
        title: 'name',
        subTitle: 'acronym',
        secondaryLabels: ['category', 'collections', 'topic', 'isOpen']
      }
    },
    facetsToPlot: ['category', 'collections', 'topic'],
    availableFacets: ['category', 'collections', 'topic', 'dataTypes', 'isOpen', 'mature', 'registration'],
    defaultShowPlots: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {},
    availableFacets: ['category', 'collections', 'topic', 'dataTypes', 'isOpen', 'mature', 'registration'],
    defaultShowPlots: false,
    hideTopLevelControls: false,
    hideQueryCount: false
  }
}`,...b.parameters?.docs?.source}}},x=[`TableView`,`CardView`,`TableWithFacetsOnly`]}))();export{y as CardView,v as TableView,b as TableWithFacetsOnly,x as __namedExportsOrder,_ as default};