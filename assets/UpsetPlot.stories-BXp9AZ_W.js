import{U as L}from"./UpsetPlot-BPh8ochC.js";import{f as u}from"./index-DEubhYfq.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DGgSH7Ah.js";import"./DefaultPropsProvider-C0MHQuNJ.js";import"./createTheme-ZS9J3-x4.js";import"./index-BO2jx3fA.js";import"./iframe-CMsX0Oka.js";import"./Button-DAcq9_ut.js";import"./createSimplePaletteValueFilter-CHeJzd4k.js";import"./useTimeout--pwFdnEc.js";import"./ButtonBase-C5kwased.js";import"./useForkRef-C9RBuidL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N9LIirTi.js";import"./useFiles-DpBz1drY.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-vnB_HOZG.js";import"./OrientationBanner-sCFG9l64.js";import"./index-CCWJyL-a.js";import"./spreadSx-CwcO6WA9.js";import"./react-u2dYu96Q.js";import"./FullWidthAlert-B611txsw.js";import"./Alert-CvfxxPZQ.js";import"./useSlot-CE8vY1FE.js";import"./createSvgIcon-VZpkVwoM.js";import"./Close-Bf_4vcco.js";import"./IconButton-DEarKBZE.js";import"./Paper-BMRqfWZY.js";import"./useTheme-DntSS-nU.js";import"./useTheme-CiXWVsbt.js";import"./Stack-BYRbdvAb.js";import"./extendSxProp-DuJfRwpZ.js";import"./getThemeProps-DTRjvb2Z.js";import"./Box-BezVuSzo.js";import"./AlertTitle-BfTTJ_di.js";import"./Typography-Y67zn1Pq.js";import"./index-D4Z-obyz.js";import"./ClickAwayListener-CRR3Owmd.js";import"./getReactElementRef-6FS4DLqJ.js";import"./index-hadyzqeZ.js";import"./index-B3VrTmIJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CB6hmzG5.js";import"./Tooltip-B5x4vZvl.js";import"./index-BjbFLSec.js";import"./useControlled-BYef6mrc.js";import"./Popper-DCGmpkTH.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-CWngti3E.js";import"./QueryClientProvider-I7KmusgC.js";import"./Link-BXGMA5HG.js";import"./Collapse-CuIUJv_4.js";import"./_baseUniq-CP0o8ne-.js";import"./_Uint8Array-CtWZVNIN.js";import"./isArray-Dy8AbNFY.js";import"./_getTag-DuJ7DDp8.js";import"./isEqual-CAyciZWq.js";import"./merge-BM5nIJiA.js";import"./_initCloneObject-DiIfsv6A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-NrLV8S1Z.js";import"./inputBaseClasses-CJlZY6KW.js";import"./calculateFriendlyFileSize-jiJD9GoL.js";import"./CheckCircleTwoTone-DQFwaHUN.js";import"./InfoTwoTone-zfNNXw23.js";import"./useMutation-ncIAEF0o.js";import"./dayjs.min-CuWcNf58.js";import"./chunk-AYJ5UCUI-0Rlz8zG8.js";import"./cloneDeep-CxL4ZTRa.js";import"./Skeleton-CH7Sx92t.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bi-NDKxC.js";import"./Backdrop-aLhuga2f.js";import"./LinearProgress-D0Aoskmq.js";import"./index-D8u1_QZV.js";import"./index-Bi5y1mEc.js";import"./index-CErxIIHi.js";import"./const-BP60AzNb.js";import"./index-Blzv_Pse.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
