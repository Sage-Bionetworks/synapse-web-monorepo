import{U as L}from"./UpsetPlot-B5MHHVgc.js";import{f as u}from"./index-DpBZfuVe.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B-zQp66N.js";import"./DefaultPropsProvider-Le_Qtgl5.js";import"./createTheme-cPwV87XV.js";import"./index-B_MBuESX.js";import"./iframe-DTzVO3E0.js";import"./Button-CQNncsmG.js";import"./createSimplePaletteValueFilter-DKCtxExo.js";import"./useTimeout-B9lAiuJj.js";import"./ButtonBase-BOfe2YeE.js";import"./useForkRef-DmVCh7BX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-TnmE2Gjl.js";import"./useFiles-Ct8_vfg_.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-D02poIxn.js";import"./OrientationBanner-8dxpFSGF.js";import"./index-BMcX8guG.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVVq801I.js";import"./FullWidthAlert-DZnHLtXj.js";import"./Alert-D8RmKWMH.js";import"./useSlot-BFhp29pE.js";import"./createSvgIcon-gtrcrQsr.js";import"./Close-DzAUUUKb.js";import"./IconButton-BTvxuh8j.js";import"./Paper-DdmZXCKA.js";import"./useTheme-C15ihBa6.js";import"./useTheme-D3k6CfVy.js";import"./Stack-CC6q0G0O.js";import"./extendSxProp-Bqx6A1Vk.js";import"./getThemeProps-akle9_rg.js";import"./Box-wHNIJtBr.js";import"./AlertTitle-DHKPTzag.js";import"./Typography-D7li2wjp.js";import"./index-38b-zSqt.js";import"./ClickAwayListener-BhdzrT8s.js";import"./getReactElementRef-BZxyEit6.js";import"./index-B3f7xuDx.js";import"./index-DarjTX3K.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DS2ARWWQ.js";import"./Tooltip-CsOwgxhh.js";import"./index-BSvLcxsL.js";import"./useControlled-CKz5Eg6L.js";import"./Popper-B8JnDrpX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D6JGZGwF.js";import"./QueryClientProvider-B3Pa2a4T.js";import"./Link-CjowCLw6.js";import"./Collapse-BO8S6Cg-.js";import"./_baseUniq-Cjyl1iP4.js";import"./_Uint8Array-BJ1AoE8R.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bt4UmfJk.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CjB7XFbx.js";import"./isEqual-BNk9uLic.js";import"./merge-DsvdXHA5.js";import"./_initCloneObject-C56K81oH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFC2hxCS.js";import"./inputBaseClasses-BOsEEz2q.js";import"./calculateFriendlyFileSize-eWc8C6fj.js";import"./CheckCircleTwoTone-mBvHCTxv.js";import"./InfoTwoTone-BOIM7qS5.js";import"./useMutation-CwPeYIxF.js";import"./dayjs.min-C6R6WyUS.js";import"./chunk-AYJ5UCUI-B_FJVpwI.js";import"./cloneDeep-D_RINFFR.js";import"./Skeleton-D-EvYe3s.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-g35PZTj8.js";import"./Backdrop-DrPnrKR_.js";import"./LinearProgress-BEQlvGyr.js";import"./index-Bp4rATYO.js";import"./index-qfZpe12g.js";import"./index-BMtV3qoY.js";import"./const-BP60AzNb.js";import"./index-ou2X9sj7.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
