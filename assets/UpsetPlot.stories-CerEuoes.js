import{U as L}from"./UpsetPlot-l4Bq-YUS.js";import{f as u}from"./index-CQalFl6C.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CrBYn1OB.js";import"./DefaultPropsProvider-CX5IAnvY.js";import"./createTheme-BREx2ycU.js";import"./index-T3Ekci5F.js";import"./iframe-BRmCfrSH.js";import"./Button-wUlNA4eh.js";import"./createSimplePaletteValueFilter-FRuSWM5h.js";import"./useTimeout-DdbWpuJn.js";import"./ButtonBase-DwffoWQe.js";import"./useForkRef-DDl9gleu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClVna9-0.js";import"./useFiles-CwxvEgQc.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-vVsO59Ha.js";import"./OrientationBanner-B_J_bwDs.js";import"./index-B7gR80B6.js";import"./spreadSx-CwcO6WA9.js";import"./react-CnLrMEk_.js";import"./FullWidthAlert-eR_HT4PI.js";import"./Alert-Dj0vjMkf.js";import"./useSlot-BzWgIWOe.js";import"./createSvgIcon-CieythTx.js";import"./Close-Cqyflw8w.js";import"./IconButton-BwUndgtU.js";import"./Paper-BV_pZjF8.js";import"./useTheme-DMsHeVup.js";import"./useTheme-CX3kqFhT.js";import"./Stack-DyTHHcW6.js";import"./extendSxProp-DoET83MS.js";import"./getThemeProps-DYLxosxu.js";import"./Box-ChsFOQNH.js";import"./AlertTitle-DcEfJigg.js";import"./Typography-C1Pvtdxt.js";import"./index-BNpXIv6h.js";import"./ClickAwayListener-BhgKURRJ.js";import"./getReactElementRef-OtGns4Bk.js";import"./index-CNd3jG5r.js";import"./index-CawBriFs.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C9ssHFFN.js";import"./Tooltip-BBwryouL.js";import"./index-D171HpF6.js";import"./useControlled-CFSu4r3X.js";import"./Popper-ny7uQlkX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CTXt0L_P.js";import"./QueryClientProvider-CUniIWpF.js";import"./Link-Dry2tAGw.js";import"./Collapse-RvI5LdCX.js";import"./_baseUniq-M12b02au.js";import"./_Uint8Array-C48UOvul.js";import"./isArray-CbnDUNxj.js";import"./_getTag-Bn7Wript.js";import"./isEqual-C5IvVB7F.js";import"./merge-CQHxP4eV.js";import"./_initCloneObject-B3OWGSQP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CY_ivPaJ.js";import"./inputBaseClasses-NlXmQuAw.js";import"./calculateFriendlyFileSize-DBYvYRTA.js";import"./CheckCircleTwoTone-Dekm6AEb.js";import"./InfoTwoTone-DTPjvGeQ.js";import"./useMutation-B99jPK5W.js";import"./dayjs.min-DqgjXCuP.js";import"./chunk-AYJ5UCUI-BLo-f8sS.js";import"./cloneDeep-4H6nKNc_.js";import"./Skeleton-DxmjjPyf.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D_GMAQFo.js";import"./Backdrop-lcs0f8Lv.js";import"./LinearProgress-BsR8sbAa.js";import"./index-ChqY6YcJ.js";import"./index-DZkYoMgj.js";import"./index-mpt58WFl.js";import"./const-BP60AzNb.js";import"./index-0v8nM2Eb.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
