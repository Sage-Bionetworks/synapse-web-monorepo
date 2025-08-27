import{U as L}from"./UpsetPlot-CERMi-tB.js";import{f as u}from"./index-BLPjhyd9.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-WsHNjyhc.js";import"./DefaultPropsProvider-rerTD_WB.js";import"./createTheme-BIkK4vAx.js";import"./index-BWYAF8lU.js";import"./iframe-yyANH0os.js";import"./Button-ChvyBgQs.js";import"./createSimplePaletteValueFilter-Db0Nak9e.js";import"./useTimeout-Cj7Ad7uF.js";import"./ButtonBase-k3fET7tS.js";import"./useForkRef-3RAnBlw2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CF22j_wE.js";import"./useFiles-CUiolQtu.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-vhsZtUjo.js";import"./OrientationBanner-BFdTeK-_.js";import"./index-C1J3TF4n.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8Qeut8Q.js";import"./FullWidthAlert-BEZ4ORhM.js";import"./Alert-23XrgefS.js";import"./useSlot-9cyZ6jgL.js";import"./createSvgIcon-Dp5pXPxK.js";import"./Close-D46JNv69.js";import"./IconButton-BYc-lBIW.js";import"./Paper-Cl3IGk_S.js";import"./useTheme-Bdzv-Cyq.js";import"./useTheme-BvqfD93n.js";import"./Stack-Dp6jq4N4.js";import"./extendSxProp-CAI-rqjs.js";import"./getThemeProps-BBH5x4Xu.js";import"./Box-DVmmo7o0.js";import"./AlertTitle-C4APA_m_.js";import"./Typography-fee9a3WB.js";import"./index-DJ3RBYQ3.js";import"./ClickAwayListener-DEOiO8wg.js";import"./getReactElementRef-Dhk2uDEE.js";import"./index-CYb0fCN1.js";import"./index-qGeDa7OH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-99E260oC.js";import"./Tooltip-D11GPAI5.js";import"./index-CpgqNKCb.js";import"./useControlled-BhJABjDl.js";import"./Popper-Dd9ZCGgG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-kP5bDzxo.js";import"./QueryClientProvider-BNTU3bEl.js";import"./Link-BHnRdTee.js";import"./Collapse-6d7tJFAU.js";import"./_baseUniq-5PKrMJpi.js";import"./_Uint8Array-DM_d1Jz_.js";import"./isArray-DMpRDESY.js";import"./_getTag-DFeirRww.js";import"./isEqual-CPSyp1EL.js";import"./merge-CZZIB5B1.js";import"./_initCloneObject-Dn7RHs7d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-LPHQT0EL.js";import"./inputBaseClasses-DVJUYt1O.js";import"./calculateFriendlyFileSize-CXbkyRqM.js";import"./CheckCircleTwoTone-BgnJHJ-3.js";import"./InfoTwoTone-Br0yDVnb.js";import"./useMutation-BlaYELbj.js";import"./dayjs.min-CYOliFU3.js";import"./chunk-AYJ5UCUI-VuZVNL9M.js";import"./cloneDeep-FAtHP8s_.js";import"./Skeleton-QExJC7b2.js";import"./SqlFunctions-FlDJijt2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ci7tyOM0.js";import"./Backdrop-B9jabrCr.js";import"./LinearProgress-DAj30t0Z.js";import"./index-HZXtARc_.js";import"./index-CWwgawCT.js";import"./index-DHBmBNuW.js";import"./const-BP60AzNb.js";import"./index-CVptsO1f.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
