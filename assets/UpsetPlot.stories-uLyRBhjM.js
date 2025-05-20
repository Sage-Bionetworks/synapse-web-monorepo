import{U as L}from"./UpsetPlot-DdbvS8L1.js";import{f as u}from"./index-C4Ifcoda.js";import"./jsx-runtime-DxZczy0O.js";import"./index-S5J7S5hv.js";import"./iframe-D3F2GMA7.js";import"./LargeButton-D1tf19az.js";import"./DefaultPropsProvider-CA0JTeAn.js";import"./createTheme-DxPmDsXe.js";import"./Button-BVtDS0Z4.js";import"./ButtonBase-CjjADlAH.js";import"./useTimeout-95Uu6vA_.js";import"./TransitionGroupContext-BEFHcCZ7.js";import"./useForkRef-C3ujZQD1.js";import"./useIsFocusVisible-ji6_XkFI.js";import"./useEventCallback-DPi-ZLqb.js";import"./useFiles-C10gkL60.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DVJ44WEh.js";import"./OrientationBanner-CiSCQ_7F.js";import"./index-DFiExYtk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeNnC5eF.js";import"./FullWidthAlert-so-_t30t.js";import"./Alert-CqpKQP2G.js";import"./resolveComponentProps-CaeHLUnl.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DQggPujc.js";import"./Close-DxYTa1FQ.js";import"./IconButton-DR6tIRVX.js";import"./Paper-BK4Bj4O7.js";import"./Stack-DWwTHUXD.js";import"./getThemeProps-V1ucmu3E.js";import"./useTheme-XnoFM_Wx.js";import"./Box-BVA_w1QW.js";import"./AlertTitle-45qqL5YG.js";import"./Typography-v0POtSOq.js";import"./useTheme-CJBEKZ9c.js";import"./Grow-DmDJqap6.js";import"./index-DUffBxe0.js";import"./utils-BOKoqyc0.js";import"./ClickAwayListener-BEJzrLjm.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CozM-hK3.js";import"./index-41pZ6gO6.js";import"./useControlled-1wnSshbR.js";import"./useId-BwAKmsvV.js";import"./Popper-CjgMXnFP.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CAfiiP8Y.js";import"./utils-2N3F0i7m.js";import"./Link-1GOzsUPc.js";import"./Collapse-BlrqS6Dh.js";import"./isNil-CsjaTIlp.js";import"./_Uint8Array-B9EMhkHn.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DxYlDsig.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Br_DSe-0.js";import"./_getTag-165XvxeE.js";import"./tinycolor-Begke6kS.js";import"./Fade-DSiiFgFh.js";import"./Skeleton-Btxwmn1A.js";import"./inputBaseClasses-CdbVFe9I.js";import"./calculateFriendlyFileSize-CtJxsaxb.js";import"./CheckCircleTwoTone-BQIZghha.js";import"./InfoTwoTone-CYOxB8wk.js";import"./mutation-BPJK6jID.js";import"./dayjs.min-qDEsEwdo.js";import"./chunk-AYJ5UCUI-DO6vE-8k.js";import"./cloneDeep-B7okS4l1.js";import"./_initCloneObject-CvHG9Ysp.js";import"./isEqual-CUPX6WUC.js";import"./merge-CL0PpV51.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-DSjfUuw1.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-uSJUQr-B.js";import"./Backdrop-Cyp-1omj.js";import"./LinearProgress-kb_P_lK0.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
