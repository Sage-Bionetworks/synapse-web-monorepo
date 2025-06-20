import{U as L}from"./UpsetPlot-nhL5eiXP.js";import{f as u}from"./index-BljAOv6M.js";import"./jsx-runtime-DUbQcIgO.js";import"./index-B1sUgM2J.js";import"./iframe-dGFA8UIy.js";import"./LargeButton-B46xyzBX.js";import"./DefaultPropsProvider-BrAb0sW2.js";import"./createTheme-CbdxX3QN.js";import"./Button-DioZ-o3T.js";import"./createSimplePaletteValueFilter-8fXUNCBa.js";import"./useTimeout-D1uU2Bb0.js";import"./ButtonBase-BKIhN0Vh.js";import"./useForkRef-CnLDrOyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-JrvCA3jz.js";import"./useFiles-xiUh4o3E.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-zKEftURI.js";import"./OrientationBanner-7TN_R8dT.js";import"./index-PftVGDny.js";import"./spreadSx-CwcO6WA9.js";import"./react-KSrgTsq2.js";import"./FullWidthAlert-DiZQ4jCk.js";import"./Alert-EcA43haq.js";import"./useSlot-Dv0O6bnn.js";import"./createSvgIcon-Qj3ohLcW.js";import"./Close-BpwDqNlL.js";import"./IconButton-831dzvVo.js";import"./Paper-BJEASiZs.js";import"./useTheme-D4vJ6lFU.js";import"./useTheme-CYmQzm27.js";import"./Stack-ClyyUoGo.js";import"./extendSxProp-BkqfAiBc.js";import"./getThemeProps-DbHHmb1Z.js";import"./Box-BNlGut7z.js";import"./AlertTitle-B-GX0pjb.js";import"./Typography-B87fyUCj.js";import"./index-Beh3Q5fM.js";import"./ClickAwayListener-CGuHEFs2.js";import"./getReactElementRef-DP2o8Wpm.js";import"./index-DwIqEwoa.js";import"./index-y7JM538r.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C678UZKi.js";import"./Tooltip-BIsLwZxW.js";import"./index-C0EE35bT.js";import"./useControlled-DHjsMso_.js";import"./Popper-yUKCVzzk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-yyyaqI58.js";import"./utils-CJWO1gyf.js";import"./Link-yD6_0rZx.js";import"./Collapse-CUGmH55i.js";import"./_baseUniq-DkWECIsI.js";import"./_Uint8Array-BJmeHegI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C3Psf34C.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bs4mI711.js";import"./isEqual-D2CUmD58.js";import"./merge-BbKV8VaS.js";import"./_initCloneObject-B5vP6wGH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CoH4fGzH.js";import"./inputBaseClasses-DEZCj5F2.js";import"./calculateFriendlyFileSize-NGJJU6sW.js";import"./CheckCircleTwoTone-fiSB1R-m.js";import"./InfoTwoTone-DXuW0Jea.js";import"./useMutation-CRNj1Qza.js";import"./dayjs.min-Cy_ds5x9.js";import"./chunk-AYJ5UCUI-CuAphczh.js";import"./cloneDeep-CC5vE4bk.js";import"./Skeleton-DGlErbKj.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CtmaMftF.js";import"./Backdrop-ySEuiw0r.js";import"./LinearProgress-QJyvo3Kg.js";import"./index-BA7A4pJp.js";import"./index-DaKAfCcs.js";import"./index-Cwur04MQ.js";import"./const-Doag8klc.js";import"./index-ny-Hw14f.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
