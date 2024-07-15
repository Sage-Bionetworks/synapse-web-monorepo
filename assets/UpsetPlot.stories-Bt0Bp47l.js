import{U as d}from"./UpsetPlot-wBl1vgBx.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./lz-string-BoOPuQ6n.js";import"./SynapseClient-_diANZ_z.js";import"./OrientationBanner-BBh8JRgP.js";import"./FullWidthAlert-Q8yalkva.js";import"./Alert-C43IQeyU.js";import"./createTheme-CcAD2pPO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import"./index-GEGPABih.js";import"./styled-Sx1jgj-B.js";import"./mergeSlotProps-BW52tAYO.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-DSqIFKhr.js";import"./Paper-BCUpbPXs.js";import"./IconButton-DYXdVn2C.js";import"./ButtonBase-DE7aKxis.js";import"./TransitionGroupContext-DGN18uA0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./Stack-CqpovyXN.js";import"./Box--1V6nYGL.js";import"./AlertTitle-CYZGUJl4.js";import"./Typography-CxCAiHvb.js";import"./utils-DkbdKabZ.js";import"./index-D1_ZHIBm.js";import"./Grow-DK1F46qr.js";import"./ClickAwayListener-BnMSRy2k.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Drs5efNb.js";import"./index-DgT9Y5QJ.js";import"./Button-DBz2LXAC.js";import"./index-CIIvWsNs.js";import"./SynapseConstants-D_Oa3fs5.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-B6zWmPbt.js";import"./CheckCircleTwoTone-DPjbEwSO.js";import"./colorManipulator-BNChw7e0.js";import"./inputBaseClasses-DiZSv6oN.js";import"./Fade-BgJxt2ZN.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./getEndpoint-CjoHA800.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-kkaQjRHX.js";import"./_getTag-BQOryPI7.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";import"./SqlFunctions-CAS0Ifjx.js";import"./RegularExpressions-DYYoP8io.js";import"./react-sizeme-BO4Y9vmq.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BKn5Y0i1.js";import"./Backdrop-ym5Z3B7b.js";import"./LinearProgress-BB3Zulnk.js";import"./LargeButton-BqsMMrAH.js";const Ie={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: ([...sets.values()].map((v: any) => v.name) as string[])
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT files, assay FROM syn51581771',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: '# Files per data type',
    combinationName: '# Files',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const fe=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,fe as __namedExportsOrder,Ie as default};
