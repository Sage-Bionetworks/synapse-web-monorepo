import{U as L}from"./UpsetPlot-DYAyVdP6.js";import{f as u}from"./index-B3UfrPAa.js";import"./jsx-runtime-BGAr_H6J.js";import"./index-CBNOfi9b.js";import"./iframe-Bz49s2ek.js";import"./LargeButton-BKvMfNMc.js";import"./DefaultPropsProvider-C6M_N1al.js";import"./createTheme-BS2Hxz2C.js";import"./Button-CD9r6Dww.js";import"./ButtonBase-MOgQUm9a.js";import"./useTimeout-DSVaU9sB.js";import"./TransitionGroupContext-8dlZc-k1.js";import"./useForkRef-iaYYc9cH.js";import"./useIsFocusVisible-5-ZlgN9V.js";import"./useEventCallback-viMIHUvK.js";import"./useFiles-CUgp-bJ5.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-BEbm2BNF.js";import"./OrientationBanner-CwmgbjT1.js";import"./index-DACJwC5s.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlXBSA_S.js";import"./FullWidthAlert-CZGhZILF.js";import"./Alert-BCPuGqa7.js";import"./resolveComponentProps-CIYnEhb-.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BH1qGqe_.js";import"./Close-8S-yuGkV.js";import"./IconButton-BHS8NsAP.js";import"./Paper-WIHJYIv3.js";import"./Stack-C_q3MTiC.js";import"./getThemeProps-pJg6N0Fu.js";import"./useTheme-DV8_YPZg.js";import"./Box-Ci6k8vkL.js";import"./AlertTitle-C5rWDhGv.js";import"./Typography-DukInDzv.js";import"./useTheme-CRJ8F4UU.js";import"./Grow-BQyhnjKi.js";import"./index-842qkzaE.js";import"./utils-DswcbYna.js";import"./ClickAwayListener-DtNMOS5b.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-8CUwFe3k.js";import"./index-CfXlikfe.js";import"./useControlled-Dm9u6Igu.js";import"./useId-CtRXL8u3.js";import"./Popper-BqzUuKEl.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-T8y6ai37.js";import"./utils-DNqFuDFi.js";import"./Link-DtnlThUQ.js";import"./Collapse-BgbjfOQO.js";import"./isNil-DtAF69a6.js";import"./_Uint8Array-BMQd7pdf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CM6iWqWY.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-UKYRkdWd.js";import"./_getTag-CICsfDiG.js";import"./tinycolor-Begke6kS.js";import"./Fade-C7Q7hfy9.js";import"./Skeleton-6KImEvG6.js";import"./inputBaseClasses-C-bNqgbr.js";import"./calculateFriendlyFileSize-Cdyr_EDz.js";import"./CheckCircleTwoTone-1HEsco6v.js";import"./InfoTwoTone-Dm-TNOU9.js";import"./mutation-CVy7um_a.js";import"./dayjs.min-CfPuZ0Gd.js";import"./chunk-AYJ5UCUI-BqUDfuKM.js";import"./cloneDeep-CpnMvqCH.js";import"./_initCloneObject-D_6r56Q0.js";import"./isEqual-Dsql6eRH.js";import"./merge-BMUIzKJf.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-CICUgZul.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-lKW3tOog.js";import"./Backdrop-D0-rmjlZ.js";import"./LinearProgress-BHyDPdh9.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
