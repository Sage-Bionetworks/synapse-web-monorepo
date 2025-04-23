import{U as d}from"./UpsetPlot-D-1BWJcR.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./LargeButton-CRRvih9s.js";import"./styled-_IoEwjFQ.js";import"./createTheme-BmUnpyjI.js";import"./index-GEGPABih.js";import"./Button-BkKUhIiJ.js";import"./ButtonBase-QEdCuq5m.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useForkRef-BDoLG09A.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./useFiles-aNFAyqK4.js";import"./VerificationSubmission-CWAFIXEx.js";import"./SynapseConstants-Dk0Mz-dJ.js";import"./OrientationBanner-BOCf4qOE.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-B_rXn9qX.js";import"./Alert-u0n1NA7e.js";import"./mergeSlotProps-D1c34xqb.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Cg71VSX1.js";import"./Close-DdzXEaRM.js";import"./Paper-sJzUMfPp.js";import"./IconButton-CxrGCLVD.js";import"./Stack-D4Hv4xSj.js";import"./Box-Tu95KWeq.js";import"./AlertTitle-CgrA6e5t.js";import"./Typography-DUswyeAh.js";import"./useTheme-CxBmLnxz.js";import"./Grow-BJQmYc4X.js";import"./index-BIzb42Jq.js";import"./utils-Kl3ltpPj.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CbFhYBpv.js";import"./index-BByOA_q1.js";import"./Popper-BYhjzrIk.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DBSsSsIU.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-B7fmYX5S.js";import"./CheckCircleTwoTone-S1ZFwL3C.js";import"./calculateFriendlyFileSize-1hZ7TxWp.js";import"./Skeleton-DiWSb2YA.js";import"./inputBaseClasses-Bc0CX7u-.js";import"./Fade-DL1c9j4A.js";import"./utils-DPkdG3Lw.js";import"./mutation-SJTTtyND.js";import"./useQuery-DFbKL1Tm.js";import"./Link-D-YR7sBc.js";import"./Collapse-z9mI71qO.js";import"./isNil-CFgMzoGa.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-C6FuPAdF.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./SqlFunctions-q4HiBnvv.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-DXya-_sQ.js";import"./Backdrop-D4Q5evrC.js";import"./LinearProgress-CXkh74S9.js";const Ut={title:"Home Page/UpsetPlot",component:d},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},e={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(o,i)=>{console.log("onClick() has been called with this selection and event",o,i)}}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: (selection, event) => {
      console.log('onClick() has been called with this selection and event', selection, event);
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ht=["Demo","ElitePortalDemo"];export{t as Demo,e as ElitePortalDemo,ht as __namedExportsOrder,Ut as default};
