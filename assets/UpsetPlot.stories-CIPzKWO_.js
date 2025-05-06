import{U as d}from"./UpsetPlot-CPqYDpF-.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./LargeButton-ByCRszdk.js";import"./styled-BMGIoXl7.js";import"./createTheme-BoQYKx5k.js";import"./index-GEGPABih.js";import"./Button-CgNBwHku.js";import"./ButtonBase-CTLL4EY5.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useForkRef-BDoLG09A.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./useFiles-Cul21QaF.js";import"./VerificationSubmission-CX6Xq4We.js";import"./SynapseConstants-Ch8mxy-k.js";import"./OrientationBanner-6c7QOLx_.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbO-K0JG.js";import"./FullWidthAlert-CgFm9dfg.js";import"./Alert-BoiUXBFA.js";import"./mergeSlotProps-D_dLvIWz.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DrH8-ApS.js";import"./Close-N0BBw2gu.js";import"./Paper-B6Fumrsg.js";import"./IconButton-QXhlbi2Z.js";import"./Stack-BcBUfnl7.js";import"./Box-T6r2Z_yt.js";import"./AlertTitle-DrSQ0G21.js";import"./Typography-D3xYwoES.js";import"./useTheme-B4ZZkoF-.js";import"./Grow-BcJKh-mH.js";import"./index-BIzb42Jq.js";import"./utils-D16j0ClI.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CIKCv17A.js";import"./index-DRltcjjn.js";import"./Popper-YUaVwGty.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DrtZBNIY.js";import"./useQuery-DFbKL1Tm.js";import"./utils-DPkdG3Lw.js";import"./Link-C37sfSRl.js";import"./Collapse-BRq1pUbz.js";import"./isNil-CXnMBT_8.js";import"./_Uint8Array-BO3mj8J_.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DEUJ7S9e.js";import"./_getTag-DiBG4-8j.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cn0cOZ_j.js";import"./CheckCircleTwoTone-BxJ-qX7O.js";import"./calculateFriendlyFileSize-C4KOtplu.js";import"./Skeleton-DwKQ5_E5.js";import"./inputBaseClasses-B4urITub.js";import"./Fade-TcPvrVoT.js";import"./mutation-SJTTtyND.js";import"./dayjs.min-d18Up55D.js";import"./chunk-AYJ5UCUI-Ck5uCIR5.js";import"./cloneDeep-BRq0JbUP.js";import"./_initCloneObject-CAXIH7ge.js";import"./isEqual-X7sPOZRU.js";import"./merge-DlorMX21.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BfgxHr4o.js";import"./react-sizeme-C2W2PgBQ.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDFyM1wL.js";import"./Backdrop-hdxvmsxB.js";import"./LinearProgress-D0wd9w7m.js";const Ht={title:"Home Page/UpsetPlot",component:d},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:e=>{const l={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...e.sets.values()].map(u=>u.name)}]},c=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(l)}`;console.log(c)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:20,setName:"Set size",combinationName:"Intersection size",onClick:(e,i)=>{console.log("onClick() has been called with this selection and event",e,i)}}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const wt=["Demo","ElitePortalDemo"];export{t as Demo,o as ElitePortalDemo,wt as __namedExportsOrder,Ht as default};
