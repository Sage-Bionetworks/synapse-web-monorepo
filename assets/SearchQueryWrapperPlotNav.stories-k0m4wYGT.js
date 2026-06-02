import{n as e}from"./chunk-jRWAZmH_.js";import{F as t,G as n,Hg as r,K as i,L as a,P_ as o,i as s,n as c,og as l,q as u,r as d,rg as f,t as p}from"./iframe-BodYv8zs.js";import{f as m,p as h}from"./CardContainerLogic-DRMSPTOS.js";var g,_,v,y,b,x;e((()=>{a(),s(),c(),i(),l(),o(),h(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Explore/SearchQueryWrapperPlotNav`,component:m,parameters:{stack:`mock`,msw:{handlers:[t(f,{tableBundle:{columnModels:u.columnModels,maxRowsPerPage:25}}),...p(f),...d(f)]}},args:{searchIndexId:n,onQueryResultBundleChange:g()}},v={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{columnLinks:[]},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`]}},y={args:{name:`Search Results`,cardConfiguration:{type:r,genericCardSchema:{type:`Standard`,title:`name`,subTitle:`acronym`,secondaryLabels:[`category`,`collections`,`topic`,`isOpen`]}},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!0}},b={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{},availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!1,hideTopLevelControls:!1,hideQueryCount:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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