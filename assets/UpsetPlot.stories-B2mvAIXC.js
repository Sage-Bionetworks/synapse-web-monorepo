import{U as d}from"./UpsetPlot-PO62QN-R.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./LargeButton-BqIaw-qM.js";import"./styled-GqwmQbHR.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./Button-JnyLG7Y6.js";import"./ButtonBase-CWW9SwzN.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useForkRef-CEBgoE3Z.js";import"./useIsFocusVisible-ByxglBfx.js";import"./useFiles-C24UySqX.js";import"./VerificationSubmission-CtqFoX_D.js";import"./SynapseConstants-CMdv2tqR.js";import"./OrientationBanner-N5yxtprX.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-CTZAZdOF.js";import"./Alert-NNHAfyKq.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-IuIKk-AJ.js";import"./Paper-Dap2c6xL.js";import"./IconButton-BUqwv789.js";import"./Stack-CMgji9n-.js";import"./Box-sTghsUmj.js";import"./AlertTitle-CogUI_yl.js";import"./Typography-u5-eOh5K.js";import"./useTheme-C2nLQS7p.js";import"./Grow-DdGCipi8.js";import"./index-BIzb42Jq.js";import"./utils-BUDe8ykH.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BN1O7Byi.js";import"./index-pKvUPVqT.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./StringUtils-BUxkeJpG.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cctz1ZmX.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./calculateFriendlyFileSize-BBeMI-i_.js";import"./Skeleton-h9JRD3HJ.js";import"./inputBaseClasses-CTPjn8Z_.js";import"./Fade-C_8BNI_I.js";import"./utils-Bx1BRerw.js";import"./useQuery-BiN9FESP.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./Link-kli9SxON.js";import"./Collapse-Cd9-krBm.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./SqlFunctions-BME-TI9h.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-z8hUqGES.js";import"./Backdrop-BwhHnj0X.js";import"./LinearProgress-KBp2Y_fD.js";const Oe={title:"Home Page/UpsetPlot",component:d},e={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},t={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(o,i)=>{console.log("onClick() has been called with this selection and event",o,i)}}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ke=["Demo","ElitePortalDemo"];export{e as Demo,t as ElitePortalDemo,ke as __namedExportsOrder,Oe as default};
