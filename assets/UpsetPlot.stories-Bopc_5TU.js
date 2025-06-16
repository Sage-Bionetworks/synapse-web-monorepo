import{U as L}from"./UpsetPlot-C9FcT__4.js";import{f as u}from"./index-BsmNrgEj.js";import"./jsx-runtime-DQEYdBb3.js";import"./index-DWZM0_w3.js";import"./iframe-Gx0jSAw5.js";import"./LargeButton-B3EQxJBw.js";import"./DefaultPropsProvider-CF060mLI.js";import"./createTheme-DtOSi2tZ.js";import"./Button-Bklupcvm.js";import"./createSimplePaletteValueFilter-BuHQ5R2p.js";import"./useTimeout-BiY6JhS_.js";import"./ButtonBase-BzsNmAHZ.js";import"./useForkRef-3ym5lFLv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrsH4xiw.js";import"./useFiles-BWpRkhnZ.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-COcOAKQY.js";import"./OrientationBanner-B3ywq8lb.js";import"./index-BlM2rqmt.js";import"./spreadSx-CwcO6WA9.js";import"./react-CarGcQz_.js";import"./FullWidthAlert-Ct3PcMEr.js";import"./Alert-BIPgr0if.js";import"./useSlot-CVbeuDxa.js";import"./createSvgIcon-UR96_bXv.js";import"./Close-D_H3PDWe.js";import"./IconButton-QfBz_EiL.js";import"./Paper-BTr-CyUQ.js";import"./useTheme-BeKQBGRR.js";import"./useTheme-ChZrpKzo.js";import"./Stack-BWStZG0K.js";import"./extendSxProp-csQIeBdp.js";import"./getThemeProps-we43ckN-.js";import"./Box-_1PWeWAi.js";import"./AlertTitle-t6WMskQA.js";import"./Typography-DtNs9amV.js";import"./index-DlqKWLRY.js";import"./ClickAwayListener-FSg82355.js";import"./getReactElementRef-Dtg5gyOd.js";import"./index-CtA8BiWO.js";import"./index-DP8ZPViD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzCNl_3W.js";import"./Tooltip-CsHsQ8O5.js";import"./index-BEbGkY8S.js";import"./useControlled-DSIjpQ6d.js";import"./Popper-CGurLlDU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CyqHYKuc.js";import"./utils-CRaMwBIr.js";import"./Link-B1WGxhTG.js";import"./Collapse-Bj4R418S.js";import"./isNil-BrInCnCi.js";import"./_Uint8Array-CU-q7TZ2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D_CIa4ZZ.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DLukTG_g.js";import"./_getTag-BetraSlE.js";import"./tinycolor-Begke6kS.js";import"./Fade-CxCnD1rR.js";import"./inputBaseClasses-BRbfrEAv.js";import"./calculateFriendlyFileSize-CAbNmrzH.js";import"./CheckCircleTwoTone-CjFpiqDG.js";import"./InfoTwoTone-C2NuPfqD.js";import"./useMutation-s1IWLVz3.js";import"./dayjs.min-Hf7Y_s8_.js";import"./chunk-AYJ5UCUI-DUhxUc2H.js";import"./cloneDeep-Bn-9DqjF.js";import"./_initCloneObject-p9hszxaJ.js";import"./Skeleton-DcWkbupA.js";import"./merge-3eSuGG9N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-FyXPvHyR.js";import"./Backdrop-38BX7AC0.js";import"./LinearProgress-DCv2o5Yg.js";import"./index-CSRpc3sE.js";import"./index-Z5Rgq2Gm.js";import"./index-fd9lLx-z.js";import"./const-Doag8klc.js";import"./index-CGc0ElRy.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
