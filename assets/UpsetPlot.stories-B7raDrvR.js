import{U as L}from"./UpsetPlot-hf1mofQm.js";import{f as u}from"./index-57NIH3R7.js";import"./jsx-runtime-C5NxHwQJ.js";import"./index-BUyK93rt.js";import"./iframe-DoZ_YKgg.js";import"./LargeButton-B8M0orOD.js";import"./DefaultPropsProvider-hOkQc_mp.js";import"./createTheme-BstmEjP7.js";import"./Button-DTYZ_D3f.js";import"./ButtonBase-DctD_-B6.js";import"./useTimeout-BNReSQPt.js";import"./TransitionGroupContext-7a61cq35.js";import"./useForkRef-Smo6uH9y.js";import"./useIsFocusVisible-Dstz45Fm.js";import"./useEventCallback-BLz-FZAQ.js";import"./useFiles-D-tEf01x.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-C_bGYTo-.js";import"./OrientationBanner-Zj6GYtpt.js";import"./index-BVwZc75m.js";import"./spreadSx-CwcO6WA9.js";import"./react-CACuwhgC.js";import"./FullWidthAlert-BLDoSU5L.js";import"./Alert-5tSKDGIe.js";import"./resolveComponentProps-DH6tbKzS.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D1O3_eeJ.js";import"./Close-Dt1xiFQr.js";import"./IconButton-BqTcpupZ.js";import"./Paper-EWl2C2Zt.js";import"./Stack-_cgazAZA.js";import"./getThemeProps-C7PoPghj.js";import"./useTheme-DK5UNgIg.js";import"./Box-C7L6jE12.js";import"./AlertTitle-CcHfDa-c.js";import"./Typography-DIK0enh5.js";import"./useTheme--0iZh6DT.js";import"./Grow-zr8OcKR_.js";import"./index-CC0zv1VF.js";import"./utils-Br22oxv3.js";import"./ClickAwayListener-D7jkdGQl.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AnolE66l.js";import"./index-BqVfUhDp.js";import"./useControlled-D2kQt8S5.js";import"./useId-v1fSL2EP.js";import"./Popper-BDuOEhJZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B6tctlGJ.js";import"./utils-7QzzGIiA.js";import"./Link-DXfrR-Pc.js";import"./Collapse-DPQM8v_6.js";import"./isNil-BApmFmY-.js";import"./_Uint8Array-wiAQVV7X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DDkRrBm5.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-4d5Gfa3E.js";import"./_getTag-DLjbrX0g.js";import"./tinycolor-Begke6kS.js";import"./Fade-BqacDeSR.js";import"./Skeleton-Dw41BVrt.js";import"./inputBaseClasses-CKfM9y8S.js";import"./calculateFriendlyFileSize-CPwr_L4J.js";import"./CheckCircleTwoTone-B7PYorgw.js";import"./InfoTwoTone-CeEpykZw.js";import"./useMutation-BCa3Utcu.js";import"./isEqual-Wn9P4mtf.js";import"./dayjs.min-BLC6IB2g.js";import"./chunk-AYJ5UCUI-DNC6mvIs.js";import"./cloneDeep-Da0gCOXW.js";import"./_initCloneObject-DiKtCs9l.js";import"./merge-BLrCfc5g.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CbqzHziF.js";import"./Backdrop-CvTAHWnw.js";import"./LinearProgress-BKhw-0yl.js";import"./index-C1RKvPW5.js";import"./index-CqJAndru.js";import"./const-Doag8klc.js";import"./index-BkmG-L3v.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
