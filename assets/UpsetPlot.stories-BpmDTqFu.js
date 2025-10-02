import{U as L}from"./UpsetPlot-Bsz5jdOG.js";import{f as u}from"./index-D4rMhYHS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-SNbyPtlk.js";import"./DefaultPropsProvider-BXNHIkBI.js";import"./createTheme-ktoUkPej.js";import"./index-BtWix9sQ.js";import"./iframe-Cv08yFa4.js";import"./Button-CQOwTSmt.js";import"./createSimplePaletteValueFilter-CnmFT5tX.js";import"./useTimeout--jObxLEa.js";import"./ButtonBase-CgmUOH-l.js";import"./useForkRef-BuSSinlC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-E03wEDwK.js";import"./useFiles-CBpHv58P.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BB8wbkbM.js";import"./OrientationBanner-Du3f-tR9.js";import"./index-Fm8jQeAM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlbjaeUH.js";import"./FullWidthAlert-BnEnBl4x.js";import"./Alert-DVtdStBt.js";import"./useSlot-DKWeBjnc.js";import"./createSvgIcon-HzOZLsjw.js";import"./Close-BVcsR9b3.js";import"./IconButton-CZsUpVAN.js";import"./Paper-Cw0PaRlC.js";import"./useTheme-D-5USdIe.js";import"./useTheme-CuAibK35.js";import"./Stack-BeDeiKwc.js";import"./extendSxProp-UwSZzXSO.js";import"./getThemeProps-BWNd5nOj.js";import"./Box-DuA_Yce2.js";import"./AlertTitle-Dv_TOEDI.js";import"./Typography-B226LmTj.js";import"./index-DEPF9eb4.js";import"./ClickAwayListener-BNCBCfT8.js";import"./getReactElementRef-Da_aLcHY.js";import"./index-B2f0J6Vc.js";import"./index-CzUAW5xC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYCPiNwF.js";import"./Tooltip-DmIpRQZQ.js";import"./index-cY0kajKP.js";import"./useControlled-Ce6JMIHi.js";import"./Popper-0EWmF52X.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-D-yII9Pz.js";import"./QueryClientProvider-DDjkFc3A.js";import"./Link-CzF4559g.js";import"./Collapse-Bz60PVFd.js";import"./_baseUniq-j_CNo3xg.js";import"./_Uint8Array-DlN12aa0.js";import"./isArray-B3BvSCZr.js";import"./_getTag-BkVkr5Zs.js";import"./isEqual-B2VBGXuO.js";import"./merge-Cvx1cDVZ.js";import"./_initCloneObject-M-LN7Wl9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-gDQRZwXb.js";import"./inputBaseClasses-CJII4L4B.js";import"./calculateFriendlyFileSize-Auh6VuaX.js";import"./CheckCircleTwoTone-juGziiOy.js";import"./InfoTwoTone-CHYqAfpV.js";import"./useMutation-onc65qmw.js";import"./dayjs.min-DmHnQHi3.js";import"./chunk-AYJ5UCUI-d_EWPP8k.js";import"./cloneDeep-mpSPLoHa.js";import"./Skeleton-BB8Tg6m6.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFbYGMOF.js";import"./Backdrop-CLmihgfm.js";import"./LinearProgress-A_d9EDE1.js";import"./index-C-yORfCq.js";import"./index-AOGlYj-m.js";import"./index-CsFBYVXQ.js";import"./const-BP60AzNb.js";import"./index-D14aeKYX.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
