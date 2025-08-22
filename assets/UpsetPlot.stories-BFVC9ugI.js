import{U as L}from"./UpsetPlot-CZK4yEx-.js";import{f as u}from"./index-DD7-GqNQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CUN3FOcq.js";import"./DefaultPropsProvider-BIDG4pXJ.js";import"./createTheme-_ssnMRbb.js";import"./index-C2ak8tr3.js";import"./iframe-CW0KqQYK.js";import"./Button-C39K_1ZT.js";import"./createSimplePaletteValueFilter-pNOTYgat.js";import"./useTimeout-BN7atgB-.js";import"./ButtonBase-M_04j4ij.js";import"./useForkRef-Z2Y-bELM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRVjoqMe.js";import"./useFiles-TGgtgjjh.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DY-ZWqWj.js";import"./OrientationBanner-BsAJ1VN4.js";import"./index-BetcpSp7.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWzGHFet.js";import"./FullWidthAlert-7WvPAou7.js";import"./Alert-DWShSNdB.js";import"./useSlot-Bq9ivddw.js";import"./createSvgIcon-92Jf5xwN.js";import"./Close-DLwY134N.js";import"./IconButton-B9fz6SQx.js";import"./Paper-Clly3oeS.js";import"./useTheme-BXUR3X8S.js";import"./useTheme-Dvg9yXlH.js";import"./Stack-C33LiS6n.js";import"./extendSxProp-PxJDRmPe.js";import"./getThemeProps-a4OQxquJ.js";import"./Box-DGTuWuks.js";import"./AlertTitle-CaSguqi-.js";import"./Typography-Dr6RcEbm.js";import"./index-k4a5S4FR.js";import"./ClickAwayListener-B1FHi0S5.js";import"./getReactElementRef--S2HWxD2.js";import"./index-CXQgeh8z.js";import"./index-DmlIIaFZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-YOgbFIOO.js";import"./Tooltip-BUwtrCCn.js";import"./index-4rl2JyrX.js";import"./useControlled-Dzw8XpFp.js";import"./Popper-CABWN7Vx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-D9KpUuvt.js";import"./QueryClientProvider-KOQjDy8j.js";import"./Link-66_rdqR4.js";import"./Collapse-Bd_gpmMp.js";import"./_baseUniq-CBgq_U0E.js";import"./_Uint8Array-C19SRruE.js";import"./isArray-DSS-_0au.js";import"./_getTag-DP8JEJLB.js";import"./isEqual-C2gIUU53.js";import"./merge-CYEF_ov9.js";import"./_initCloneObject-135bbAWh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D8locTG6.js";import"./inputBaseClasses-B7yIT1JM.js";import"./calculateFriendlyFileSize-I824E2ls.js";import"./CheckCircleTwoTone-BkKhg0mn.js";import"./InfoTwoTone-CRTl7KBx.js";import"./useMutation-DtwODZ-2.js";import"./dayjs.min-DNsScdeF.js";import"./chunk-AYJ5UCUI-C_JKew03.js";import"./cloneDeep-B_89qCS8.js";import"./Skeleton-BGjKXeYz.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BP-UaHFj.js";import"./Backdrop-DyBj0hU7.js";import"./LinearProgress-f_Sb076D.js";import"./index-Cdkw7oSt.js";import"./index-CZmlr6M9.js";import"./index-DCRvIEUW.js";import"./const-BP60AzNb.js";import"./index-BFfnaKCt.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
