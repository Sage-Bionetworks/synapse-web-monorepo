import{o as e}from"./preload-helper-CsHsquCd.js";import{U as t,tn as n}from"./SynapseConstants-C6NyDJfS.js";import{Mn as r,On as i}from"./synapse-client-Bq-D85Gh.js";import{$ as a,H as o,Q as s,W as c,et as l,i as u,n as d,r as f,t as p}from"./iframe-C94RkGgs.js";import{m,p as h}from"./CardContainerLogic-Bi0nYtug.js";var g,_,v,y,b,x;e((()=>{c(),u(),d(),a(),r(),n(),m(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Explore/SearchQueryWrapperPlotNav`,component:h,parameters:{stack:`mock`,msw:{handlers:[o(i,{tableBundle:{columnModels:l.columnModels,maxRowsPerPage:25}}),...p(i),...f(i)]}},args:{searchIndexId:s,onQueryResultBundleChange:g()}},v={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{columnLinks:[]},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`]}},y={args:{name:`Search Results`,cardConfiguration:{type:t,genericCardSchema:{type:`Standard`,title:`name`,subTitle:`acronym`,secondaryLabels:[`category`,`collections`,`topic`,`isOpen`]}},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!0}},b={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{},availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!1,hideTopLevelControls:!1,hideQueryCount:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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