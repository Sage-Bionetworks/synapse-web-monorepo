import{o as e}from"./preload-helper-CsHsquCd.js";import{$t as t,H as n}from"./SynapseConstants-neVNjr8v.js";import{An as r,En as i}from"./synapse-client-C_QK7pog.js";import{J as a,L as o,Y as s,i as c,n as l,q as u,r as d,t as f,z as p}from"./iframe-Bo9vZUB2.js";import{m,p as h}from"./CardContainerLogic-C46uV-1G.js";var g,_,v,y,b,x;e((()=>{p(),c(),l(),a(),r(),t(),m(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Explore/SearchQueryWrapperPlotNav`,component:h,parameters:{stack:`mock`,msw:{handlers:[o(i,{tableBundle:{columnModels:s.columnModels,maxRowsPerPage:25}}),...f(i),...d(i)]}},args:{searchIndexId:u,onQueryResultBundleChange:g()}},v={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{columnLinks:[]},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`]}},y={args:{name:`Search Results`,cardConfiguration:{type:n,genericCardSchema:{type:`Standard`,title:`name`,subTitle:`acronym`,secondaryLabels:[`category`,`collections`,`topic`,`isOpen`]}},facetsToPlot:[`category`,`collections`,`topic`],availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!0}},b={args:{name:`Search Results`,unitDescription:`result`,tableConfiguration:{},availableFacets:[`category`,`collections`,`topic`,`dataTypes`,`isOpen`,`mature`,`registration`],defaultShowPlots:!1,hideTopLevelControls:!1,hideQueryCount:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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