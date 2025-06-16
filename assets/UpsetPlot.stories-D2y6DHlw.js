import{U as L}from"./UpsetPlot-CVxKVhg6.js";import{f as u}from"./index-4xSsQ6Vd.js";import"./jsx-runtime-3f6CKeIF.js";import"./index-HP8SqD2K.js";import"./iframe-A6Im_5fY.js";import"./LargeButton-CeDnWQ59.js";import"./DefaultPropsProvider-sc08Vmw-.js";import"./createTheme-BFTLXKdS.js";import"./Button-Drfg9msN.js";import"./createSimplePaletteValueFilter-C9zAylia.js";import"./useTimeout-C5CJYgcw.js";import"./ButtonBase-IY5BB0lZ.js";import"./useForkRef-Dn650N5T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CHo5lmMq.js";import"./useFiles-hriiw4nD.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-Ceuy4-oX.js";import"./OrientationBanner-C8RlHAux.js";import"./index-CQhGJ0-g.js";import"./spreadSx-CwcO6WA9.js";import"./react-CJyvR9hS.js";import"./FullWidthAlert-BfzTfdZT.js";import"./Alert-CMYV8MEC.js";import"./useSlot-C0a2qSe8.js";import"./createSvgIcon-BKsi1Pri.js";import"./Close-C22AAyfL.js";import"./IconButton-DXZ3SooE.js";import"./Paper-Das1pTqY.js";import"./useTheme-BvSiOi-g.js";import"./useTheme-CZsUm9e8.js";import"./Stack-DnrBq6H8.js";import"./extendSxProp-zrENrKjp.js";import"./getThemeProps-BwuHKxRW.js";import"./Box-CptHO48m.js";import"./AlertTitle-DcxbgZSu.js";import"./Typography-Cb5qF7iG.js";import"./index-2Yi9WqYj.js";import"./ClickAwayListener-KxlpfaUF.js";import"./getReactElementRef-DcmQWZun.js";import"./index-DaeGJvZ4.js";import"./index-B6koSUCB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJUNktmc.js";import"./Tooltip-uLIIXX-Y.js";import"./index-Cog4_wuj.js";import"./useControlled-CnzJCrVb.js";import"./Popper-TpWUk-Ct.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CP1wMQ4l.js";import"./utils-Ct3imd5Z.js";import"./Link-BXdlCrAq.js";import"./Collapse-DSwc-iXw.js";import"./isNil-BQ10i-bW.js";import"./_Uint8Array-DkLkC21u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C7mb4Gwn.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DTGk3u1r.js";import"./_getTag-CVuvZ6wz.js";import"./tinycolor-Begke6kS.js";import"./Fade-CX7Rf_YJ.js";import"./inputBaseClasses-D2hdx5fk.js";import"./calculateFriendlyFileSize-CP1nYJS_.js";import"./CheckCircleTwoTone-CA9f6Zes.js";import"./InfoTwoTone-XB0kwG84.js";import"./useMutation-Bh1f1kof.js";import"./dayjs.min-aXMALWM4.js";import"./chunk-AYJ5UCUI-CrGbwdEq.js";import"./cloneDeep-CYSMkJC9.js";import"./_initCloneObject-V0hT8lNO.js";import"./Skeleton-CLp_S6QR.js";import"./merge-CukRjkgn.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Kq8vyPB8.js";import"./Backdrop-CumIINzU.js";import"./LinearProgress-C4Iad3Lb.js";import"./index-CFV9lilO.js";import"./index-odUZnPaY.js";import"./index-D5W3N6_I.js";import"./const-Doag8klc.js";import"./index-D_MrhIu5.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
