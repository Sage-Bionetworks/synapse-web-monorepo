import{U as L}from"./UpsetPlot-uB47Tym1.js";import{f as u}from"./index-CCCul1FQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BuJaD0PB.js";import"./DefaultPropsProvider-DRRP-kkU.js";import"./createTheme-BCnyntTH.js";import"./index-DIPSma-8.js";import"./iframe-pWHG4-V3.js";import"./Button-C6SFKzVC.js";import"./createSimplePaletteValueFilter-CJ76haHv.js";import"./useTimeout-BUI4x_UF.js";import"./ButtonBase-8tnM0huU.js";import"./useForkRef-Dv2QyeiQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DV9Z8mDC.js";import"./useFiles-BClQzPd_.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-Crbzn_Ry.js";import"./OrientationBanner-C_2KtTva.js";import"./index-XveTqWY_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CjJLDf9z.js";import"./FullWidthAlert-DvmfQSAA.js";import"./Alert-BfqlhAYB.js";import"./useSlot-BVhmAZ83.js";import"./createSvgIcon-K8XbMlBz.js";import"./Close-BYbvh11N.js";import"./IconButton-hjV5rJrJ.js";import"./Paper-CWKIHkyO.js";import"./useTheme-DowF8vRz.js";import"./useTheme-Ca9VRux3.js";import"./Stack-Ct5i1zqe.js";import"./extendSxProp-BeCKLOzc.js";import"./getThemeProps-y-ympami.js";import"./Box-DSQr_iBE.js";import"./AlertTitle-CC_vgB7h.js";import"./Typography-CTgpIH-9.js";import"./index-CYzCfksS.js";import"./ClickAwayListener-Du3jAaWR.js";import"./getReactElementRef-CO4QYdXs.js";import"./index-v_FsnXN-.js";import"./index-BWgRnEhe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-KuP9oD.js";import"./Tooltip-Dsds8E7o.js";import"./index-tTnYKPjc.js";import"./useControlled-BgooqvV4.js";import"./Popper-DgwcAogc.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CUKGBENZ.js";import"./QueryClientProvider-Bbt4pomw.js";import"./Link-Cwbmr7vy.js";import"./Collapse-BsNO_Q98.js";import"./_baseUniq-_xM4gfSS.js";import"./_Uint8Array-Vsu_wDeX.js";import"./isArray-DqpAAoDI.js";import"./_getTag-Cg5v_2BY.js";import"./isEqual-DAP8G2kJ.js";import"./merge-zw24CFQr.js";import"./_initCloneObject-BWhrDYUc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-zTaIdEKH.js";import"./inputBaseClasses-CrrDRKY9.js";import"./calculateFriendlyFileSize-B9UWs5PM.js";import"./CheckCircleTwoTone-01_4eItM.js";import"./InfoTwoTone-j3edDpIk.js";import"./useMutation-BHgD24e-.js";import"./dayjs.min-BKB3tabp.js";import"./chunk-AYJ5UCUI-CR13MX7l.js";import"./cloneDeep-Edtnkvi7.js";import"./Skeleton-Cl33dgaN.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DIJoukOu.js";import"./Backdrop-CspO32Hj.js";import"./LinearProgress-DE2I2-m9.js";import"./index-DsXwgbGV.js";import"./index-CPRrCxQ3.js";import"./index-DubxfTOb.js";import"./const-BP60AzNb.js";import"./index-AR_l_YjB.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
