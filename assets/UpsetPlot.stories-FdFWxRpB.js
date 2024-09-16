import{U as d}from"./UpsetPlot-Bz9eecxZ.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./SynapseClient-Cj-XHO4n.js";import"./OrientationBanner-BsmFKABX.js";import"./FullWidthAlert-DfzvViOl.js";import"./Alert-BjW6UdMW.js";import"./createTheme-CSXEdrm4.js";import"./index-GEGPABih.js";import"./styled-DhbZfYjm.js";import"./mergeSlotProps-BvStzxp7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-RFCzz5wB.js";import"./Paper-BNspCzZ8.js";import"./IconButton-dV1PosdL.js";import"./ButtonBase-B1PyklHR.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-B3TCA9BM.js";import"./Box-CSxp1att.js";import"./AlertTitle-CaC9w9kZ.js";import"./Typography-5kwXSe6k.js";import"./utils-BX4sETT_.js";import"./index-BlO3JfGB.js";import"./Grow-WB7TPAH6.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BUEOzDXu.js";import"./index-DnaZGQZH.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-PewxtVEx.js";import"./index-DfM7mfu0.js";import"./SynapseConstants-CnTS8uWh.js";import"./RegularExpressions-DlyA5nPV.js";import"./useQuery-ChYzlhEH.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-q2nFdSda.js";import"./CheckCircleTwoTone-DZeepUDu.js";import"./colorManipulator-CBwtHKAF.js";import"./inputBaseClasses-OXp8mACw.js";import"./Fade-BnvAYJFW.js";import"./dayjs.min-D1RcYm3-.js";import"./index-SDyqs4cU.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-Cn1DJ6En.js";import"./_getTag-CNUVqXoc.js";import"./_Map-BfIf8dAI.js";import"./isArray-ggc3KxVp.js";import"./isObject-C3e4t58V.js";import"./StringUtils-5IsdMFw2.js";import"./SqlFunctions-D3GfCIKQ.js";import"./react-sizeme-CSOwE_ZL.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DEKCJTB1.js";import"./Backdrop-C5PbY0-B.js";import"./LinearProgress-We-7bK11.js";import"./LargeButton-D0ufXxZ0.js";const Fe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ie=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,Ie as __namedExportsOrder,Fe as default};
