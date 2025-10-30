import{U as L}from"./UpsetPlot-DqgeuObt.js";import{f as u}from"./index-CDzY7635.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C66tQwxf.js";import"./DefaultPropsProvider-_fK4D_BE.js";import"./createTheme-CxdfWgKh.js";import"./index-Jc_eG4r1.js";import"./iframe-CTmacDku.js";import"./Button-SLwSyWGH.js";import"./createSimplePaletteValueFilter-D4ybAlfP.js";import"./useTimeout-CYs9VsFc.js";import"./ButtonBase-VPtjm-X0.js";import"./useForkRef-B8PDOisR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_QldSXU.js";import"./useFiles-C5DfrOX2.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BtfgJM_H.js";import"./OrientationBanner-CESHpiba.js";import"./index-p1fR2xqG.js";import"./spreadSx-CwcO6WA9.js";import"./react-CIEhwhZI.js";import"./FullWidthAlert-Dm9STOpq.js";import"./Alert-EdsWXdCF.js";import"./useSlot-C5-wXulw.js";import"./createSvgIcon-BID9TOzH.js";import"./Close-_Bg-NS2F.js";import"./IconButton-B0gM3RNI.js";import"./Paper-BMdE1Mph.js";import"./useTheme-DsqwfTCV.js";import"./useTheme-CwxiJJWM.js";import"./Stack-Bsxn6uz-.js";import"./useThemeProps-DtLMzKZm.js";import"./getThemeProps-VmGcPAe8.js";import"./extendSxProp-CFAVQVV3.js";import"./Box-BopbBMQ6.js";import"./AlertTitle-CznnuSBX.js";import"./Typography-CRJ_ISqb.js";import"./index-kHHJ3bf5.js";import"./ClickAwayListener-DlNBvYZP.js";import"./getReactElementRef-Dz6-H50b.js";import"./index-LMTS2VXQ.js";import"./index-Dn-VaGZx.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxvOX0jG.js";import"./Tooltip-COCcWJnq.js";import"./index-D_qELEFq.js";import"./useControlled-DRzjUrHA.js";import"./Popper-GeS_izA2.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D2bOA0bn.js";import"./QueryClientProvider-DOeXm9PL.js";import"./Link-91nnDMEk.js";import"./Collapse-BbC5ixbW.js";import"./_baseUniq-C00xECjX.js";import"./_Uint8Array-z9m6gYPX.js";import"./isArray-CIWQgFvO.js";import"./_getTag-B7gq1p6y.js";import"./isEqual-BRSPUeiL.js";import"./noop-DX6rZLP_.js";import"./merge-Cqa8GyUa.js";import"./_initCloneObject-CGVsVo7k.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGoGkDAH.js";import"./inputBaseClasses-DDoXAkPR.js";import"./calculateFriendlyFileSize-CEfHY39V.js";import"./CheckCircleTwoTone-D9VSLiCt.js";import"./InfoTwoTone-C9wWK-2h.js";import"./useMutation-T2xtG7Fn.js";import"./dayjs.min-BjteLV8S.js";import"./chunk-AYJ5UCUI-Dqj8kGjG.js";import"./cloneDeep-HqG_US3S.js";import"./Skeleton-6dtuXFOP.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B6byFrtp.js";import"./Backdrop-Cbj8vDCz.js";import"./LinearProgress-CEOlB2oI.js";import"./index-BKuEZMOm.js";import"./index-5f6dy0aq.js";import"./index-DXj0MBWy.js";import"./const-BP60AzNb.js";import"./index-BLMtvulO.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
