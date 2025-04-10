import{U as d}from"./UpsetPlot-BOXQV-Pg.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./LargeButton-DyC3Jxfs.js";import"./styled-GqwmQbHR.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./Button-mTo7xxsU.js";import"./ButtonBase-BN-dALdo.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useForkRef-BDoLG09A.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./useFiles-CuNzHLyH.js";import"./VerificationSubmission-D0JvCzU5.js";import"./SynapseConstants-WPaa3dXz.js";import"./OrientationBanner-C-7EA0fi.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BW-IV7Y-.js";import"./Alert-By3H5ehm.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-IuIKk-AJ.js";import"./Paper-Dap2c6xL.js";import"./IconButton-xnDYVMXw.js";import"./Stack-CMgji9n-.js";import"./Box-sTghsUmj.js";import"./AlertTitle-C14X1--E.js";import"./Typography-u5-eOh5K.js";import"./useTheme-C2nLQS7p.js";import"./Grow-BjId_ape.js";import"./index-BIzb42Jq.js";import"./utils-nOa-7XVu.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DghXNkD2.js";import"./index-pKvUPVqT.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./StringUtils-Cm4tp8FJ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cctz1ZmX.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./calculateFriendlyFileSize-BBeMI-i_.js";import"./Skeleton-h9JRD3HJ.js";import"./inputBaseClasses-CTPjn8Z_.js";import"./Fade-Cxdmh2eZ.js";import"./utils-Bx1BRerw.js";import"./useQuery-BiN9FESP.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./Link-CWXcK22Y.js";import"./Collapse-CmkIepef.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./SqlFunctions-h3Ewpz2N.js";import"./react-sizeme-C2W2PgBQ.js";import"./colorPalette-BSrfa2_g.js";import"./LoadingScreen-BJ8_eQQV.js";import"./Backdrop-80n8Lf7R.js";import"./LinearProgress-KBp2Y_fD.js";const qt={title:"Home Page/UpsetPlot",component:d},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:o=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...o.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},e={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(o,i)=>{console.log("onClick() has been called with this selection and event",o,i)}}};var s,r,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Rt=["Demo","ElitePortalDemo"];export{t as Demo,e as ElitePortalDemo,Rt as __namedExportsOrder,qt as default};
