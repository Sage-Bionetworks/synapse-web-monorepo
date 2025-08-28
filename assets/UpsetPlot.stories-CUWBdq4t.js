import{U as L}from"./UpsetPlot-DfgnLKGu.js";import{f as u}from"./index-M0oDKklb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CuMKJols.js";import"./DefaultPropsProvider-Cl_kOTzU.js";import"./createTheme-BUGEXAZ7.js";import"./index-COPlMTLH.js";import"./iframe-Dh7vrRpU.js";import"./Button-seLAaY-z.js";import"./createSimplePaletteValueFilter-D0Hq8-6_.js";import"./useTimeout-CASSdLe8.js";import"./ButtonBase-D1oJct8N.js";import"./useForkRef-BBYXNeWj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLO471x8.js";import"./useFiles-SRraC90P.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-PNfEX-Ee.js";import"./OrientationBanner-C1RDTEFe.js";import"./index-BfGz0-rx.js";import"./spreadSx-CwcO6WA9.js";import"./react-Br1418uu.js";import"./FullWidthAlert-BdEFBuz2.js";import"./Alert-D_I4Da61.js";import"./useSlot-BkLAJCAz.js";import"./createSvgIcon-GUC6M7fo.js";import"./Close-B2th-w95.js";import"./IconButton-Dny5oSWg.js";import"./Paper-DRCE2cQE.js";import"./useTheme-KKgiytaP.js";import"./useTheme-Cyhg0lMD.js";import"./Stack-DTGKt6ID.js";import"./extendSxProp-Buq774I8.js";import"./getThemeProps-BH8LJhew.js";import"./Box-D-uimvGt.js";import"./AlertTitle-CHYbqgd8.js";import"./Typography-CmH3M1Ds.js";import"./index-BeT-zJSF.js";import"./ClickAwayListener-Dkyb_H4E.js";import"./getReactElementRef-CDtIlStC.js";import"./index-GNIoEsQh.js";import"./index-C9kE7G9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BX6s5DFQ.js";import"./Tooltip-Dsx7YQ3j.js";import"./index-Jg77emZI.js";import"./useControlled-DMsQxF37.js";import"./Popper-CJ3GQeEU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C0_YrBpr.js";import"./QueryClientProvider--HygutHk.js";import"./Link-1iYcYmRG.js";import"./Collapse-BCkD2TRw.js";import"./_baseUniq-B0CxpJpC.js";import"./_Uint8Array-IVjl8hkw.js";import"./isArray-C_29kE4-.js";import"./_getTag-D-CvqH-C.js";import"./isEqual-CcVe2o0k.js";import"./merge-Bjs4ZByV.js";import"./_initCloneObject-BfmCOVO5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6BTbwAew.js";import"./inputBaseClasses-DNxBSNA3.js";import"./calculateFriendlyFileSize-Dio-ngoW.js";import"./CheckCircleTwoTone-lIj_wBp0.js";import"./InfoTwoTone-Bz5QJbm9.js";import"./useMutation-BvwePRm3.js";import"./dayjs.min-DhbqjnF4.js";import"./chunk-AYJ5UCUI-BD7rHHbc.js";import"./cloneDeep-C5RiGzwl.js";import"./Skeleton-Cv60quvj.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BAqlv06H.js";import"./Backdrop-Bk-jIFck.js";import"./LinearProgress-BFC4PNS4.js";import"./index-DpdTkFhb.js";import"./index-BVatbsWy.js";import"./index-4fF_K145.js";import"./const-BP60AzNb.js";import"./index-BO9UT_wH.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
