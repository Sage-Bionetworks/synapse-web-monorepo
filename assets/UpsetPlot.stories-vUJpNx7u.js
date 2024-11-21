import{U as d}from"./UpsetPlot-B1sXHaAU.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./lz-string-D345GCHL.js";import"./useFiles-cx7pZlDv.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-BX0HvA84.js";import"./FullWidthAlert-DhexvuWd.js";import"./Alert-D00uobdd.js";import"./createTheme-CWLQ-DuD.js";import"./index-GEGPABih.js";import"./styled-BNZh1-oq.js";import"./mergeSlotProps-CZobtCgD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-BhV3a4Zr.js";import"./Paper-CK0RlmZk.js";import"./IconButton-DDEa3AGu.js";import"./ButtonBase-CE85FUiZ.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-Dwyinhto.js";import"./Box-D4TeY3X6.js";import"./AlertTitle-CVJKKi4h.js";import"./Typography-CaL9sKMg.js";import"./utils-DoOf4pPF.js";import"./index-zcEXKDIA.js";import"./Grow-Bq_CDIHS.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CQm22TSO.js";import"./index-fnC48NPc.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-CnDFdqMc.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-D-PFMQZz.js";import"./RegularExpressions-CmcMRs19.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Dmc1pswj.js";import"./CheckCircleTwoTone-JZD1d26p.js";import"./calculateFriendlyFileSize-BVprIR7U.js";import"./Skeleton-D27KV3ni.js";import"./inputBaseClasses-u371dScS.js";import"./Fade-n8rayaob.js";import"./Link-B86BngSw.js";import"./cloneDeep-aDrSbqZk.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DvLBLCla.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BnNaO_kX.js";import"./react-sizeme-Vw-aaS2E.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-DPVCHW1G.js";import"./Backdrop-CzbJFw0E.js";import"./LinearProgress-3w3Lw59m.js";import"./LargeButton--QV9Hvz8.js";const Ie={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT files, assay FROM syn51581771",rgbIndex:0,maxBarCount:20,setName:"# Files per data type",combinationName:"# Files",onClick:(o,s)=>{console.log("onClick() has been called with this selection and event",o,s)}}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
