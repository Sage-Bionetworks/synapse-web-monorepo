import{U as d}from"./UpsetPlot-t319q60j.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./lz-string-BoOPuQ6n.js";import"./SynapseClient-DAC8MycB.js";import"./OrientationBanner-DV6G-OQI.js";import"./FullWidthAlert-C1X-IDYx.js";import"./Alert-C2wXqEQ3.js";import"./createTheme-Dtzk88yv.js";import"./index-GEGPABih.js";import"./styled-BEXTB4Ho.js";import"./mergeSlotProps-Dv5GaMzt.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-eMxRw33w.js";import"./Paper-B2c6t1gu.js";import"./IconButton-cf2NThiY.js";import"./ButtonBase-CI9J1-uo.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Stack-DkXTQwBs.js";import"./Box-BlHPf8tq.js";import"./AlertTitle-CmC2H_AO.js";import"./Typography-qpntpuFp.js";import"./utils-C59yjAo_.js";import"./index-B6qzg4VC.js";import"./Grow-CspkvTld.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BZeYxe44.js";import"./index-Cvyar9fI.js";import"./Button-jcEr4EiK.js";import"./index-CIIvWsNs.js";import"./SynapseConstants-Q-I_oMBe.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CxHU0jl8.js";import"./CheckCircleTwoTone-BB9W7Hyp.js";import"./colorManipulator-D5JWZs3m.js";import"./inputBaseClasses-DcVJRUx_.js";import"./Fade-DX0GMli6.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./getEndpoint-CjoHA800.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-DhsldE67.js";import"./_getTag-eW65qzo1.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";import"./SqlFunctions-CAS0Ifjx.js";import"./RegularExpressions-DYYoP8io.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-xLLag3Pv.js";import"./Backdrop-BL2E68hn.js";import"./LinearProgress-DcPPEqIt.js";import"./LargeButton-dh1AbEzB.js";const be={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const p={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(p)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,n,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const xe=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,xe as __namedExportsOrder,be as default};
