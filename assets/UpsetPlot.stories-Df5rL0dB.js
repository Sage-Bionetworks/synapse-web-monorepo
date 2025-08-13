import{U as L}from"./UpsetPlot-Dy8k8xml.js";import{f as u}from"./index-CEkB4Y8M.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-GlmrsH7q.js";import"./DefaultPropsProvider-vF5CnCif.js";import"./createTheme-C_wRPl7y.js";import"./index-BXKz6aQc.js";import"./iframe-MMJy9CQd.js";import"./Button-DFPesTt6.js";import"./createSimplePaletteValueFilter-BRqATs5r.js";import"./useTimeout-BK6HSxCV.js";import"./ButtonBase-D6fT5JND.js";import"./useForkRef-CKBDIvfI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDNCmXiM.js";import"./useFiles-DbMxoHOY.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DUBmK1sl.js";import"./OrientationBanner-mREqntXU.js";import"./index-UtsK7tNU.js";import"./spreadSx-CwcO6WA9.js";import"./react-CCtG6Zbc.js";import"./FullWidthAlert-usx1AJOX.js";import"./Alert-CWHP2pB9.js";import"./useSlot-ExIhixvG.js";import"./createSvgIcon-CXVdsj8-.js";import"./Close-DmrlnO_8.js";import"./IconButton-hrPMD4_P.js";import"./Paper-MTbdUUir.js";import"./useTheme-BQVHpxoO.js";import"./useTheme-D5Wadm_k.js";import"./Stack-Cdp_GKVU.js";import"./extendSxProp-Ohl157Sw.js";import"./getThemeProps-3bpTcI1W.js";import"./Box-CIgf6-IL.js";import"./AlertTitle-BemNAMM0.js";import"./Typography-xiYCCLrN.js";import"./index-DPLtfnrZ.js";import"./ClickAwayListener-DU_4-MjF.js";import"./getReactElementRef-CJrJOS35.js";import"./index-DJp0rd-F.js";import"./index-7uKmVFf-.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ih-rarU-.js";import"./Tooltip-Cfxqtttq.js";import"./index-Bu3XuMqV.js";import"./useControlled-CBdhJZcP.js";import"./Popper-D9qy2WGi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DMCvaQaX.js";import"./QueryClientProvider-BsCDU4xM.js";import"./Link-qVspRApL.js";import"./Collapse-D3QTnWrZ.js";import"./_baseUniq-BMiY0grt.js";import"./_Uint8Array-D30nXqKn.js";import"./isArray-CpvOlceI.js";import"./_getTag-BuX4-b08.js";import"./isEqual-BebYc4Xr.js";import"./merge-CjdSI1l4.js";import"./_initCloneObject-DPCH_UNA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByP9BbwY.js";import"./inputBaseClasses-DHNJkdoH.js";import"./calculateFriendlyFileSize-BIPaggqz.js";import"./CheckCircleTwoTone-B64HwfWe.js";import"./InfoTwoTone-DPDPtONu.js";import"./useMutation-vjHCjOpM.js";import"./dayjs.min-Buk06FN_.js";import"./chunk-AYJ5UCUI-pSO0FO9S.js";import"./cloneDeep-Dr0xKFAf.js";import"./Skeleton-Dl2LBOvA.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-nELsnvWv.js";import"./Backdrop-CAByXnkD.js";import"./LinearProgress-KrRT_ZYk.js";import"./index-sVvhioSi.js";import"./index-5FlCwipP.js";import"./index-ZG4t6k63.js";import"./const-BP60AzNb.js";import"./index-rZBy7HCn.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
