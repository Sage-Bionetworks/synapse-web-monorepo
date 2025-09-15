import{U as L}from"./UpsetPlot-B5JS0Ela.js";import{f as u}from"./index-DzNNRIWS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DeR5TOPt.js";import"./DefaultPropsProvider-DhKH4jS5.js";import"./createTheme-r53sen1H.js";import"./index-BFe7OOCO.js";import"./iframe-Bha8qMdA.js";import"./Button-C0QtNNNQ.js";import"./createSimplePaletteValueFilter-BKD40Yni.js";import"./useTimeout-BjZ1pB1q.js";import"./ButtonBase-BTDiO5jL.js";import"./useForkRef-C3S72d_h.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tBTi4oIf.js";import"./useFiles-Bdk-rDlY.js";import"./VerificationSubmission-CTjJb3hu.js";import"./SynapseConstants-CPxMpVHW.js";import"./OrientationBanner-C06D94Hm.js";import"./index-B3ZoRi4-.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4DcjIMi.js";import"./FullWidthAlert-DrhjjluB.js";import"./Alert-CS4qrGXV.js";import"./useSlot-BjGwbouw.js";import"./createSvgIcon-BlYLmz2K.js";import"./Close-BIGKj7ED.js";import"./IconButton-RLYr2FEe.js";import"./Paper-cGemMgWu.js";import"./useTheme-dw00mKTl.js";import"./useTheme-BVgbn6l0.js";import"./Stack-CZIpFnrG.js";import"./extendSxProp-BYVH58vt.js";import"./getThemeProps-ugVUIFn4.js";import"./Box-CteZFSuz.js";import"./AlertTitle-tYv3ugNo.js";import"./Typography-BvT1XRjO.js";import"./index-DYSwa5Xm.js";import"./ClickAwayListener-DFw4-2za.js";import"./getReactElementRef-CrfOFAx4.js";import"./index-Bl_SermX.js";import"./index-CR-e9Su5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DuTgCd74.js";import"./Tooltip-Dx6Egvgv.js";import"./index-CMkzAbFp.js";import"./useControlled-D0iW-7vO.js";import"./Popper-BO3NETWT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B8-nnzJN.js";import"./useQuery-CHHYNMj4.js";import"./QueryClientProvider-DRK6s_Dv.js";import"./Link-DY_VTRxM.js";import"./Collapse-DKZz63NR.js";import"./_baseUniq-DXFjNF0a.js";import"./_Uint8Array-BmRAF-l6.js";import"./isArray-Bq1Bv-Mm.js";import"./_getTag-Dw30EhU3.js";import"./isEqual-BRRciehP.js";import"./merge-c-k0AbhX.js";import"./_initCloneObject-NVlBGhuH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Xf5NEG7w.js";import"./inputBaseClasses-BxOJtLF2.js";import"./calculateFriendlyFileSize-DI3CDhm2.js";import"./CheckCircleTwoTone-CZ1rOWLg.js";import"./InfoTwoTone-DAGfyDTy.js";import"./useMutation-Bbj9coTz.js";import"./dayjs.min-I_SVux8b.js";import"./chunk-AYJ5UCUI-D1KYLbuL.js";import"./cloneDeep-CBO0jsPD.js";import"./Skeleton-E--vr7y2.js";import"./SqlFunctions-B8XmRaKt.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cra6AsMz.js";import"./Backdrop-Bi1domck.js";import"./LinearProgress-Bx8wxTYh.js";import"./index-vQlLjtfg.js";import"./index-D5zGwSlh.js";import"./index-CmreEc8V.js";import"./const-BP60AzNb.js";import"./index-CCGfyjw4.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
