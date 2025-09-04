import{U as L}from"./UpsetPlot-Bryv1eOg.js";import{f as u}from"./index-C8YpMCds.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BmWARU75.js";import"./DefaultPropsProvider-NLw5xhj0.js";import"./createTheme-B_Ol_SGM.js";import"./index-DqdBbDO8.js";import"./iframe-Bscbx4yJ.js";import"./Button-eHv0vqs7.js";import"./createSimplePaletteValueFilter-IPuPUECy.js";import"./useTimeout-d-KGj_IM.js";import"./ButtonBase-DOP0xNZr.js";import"./useForkRef-DOKoFcdj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ueQLis1i.js";import"./useFiles-B1qLIkzS.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BY0D-OP_.js";import"./OrientationBanner-Cng4AXI7.js";import"./index-C-tNTDG3.js";import"./spreadSx-CwcO6WA9.js";import"./react-CurQ8RHm.js";import"./FullWidthAlert-CO4KYYf2.js";import"./Alert-BHPQbSFU.js";import"./useSlot-BXDp-GLk.js";import"./createSvgIcon-DDgh6Xid.js";import"./Close-CZRhNBSW.js";import"./IconButton-CUYRsHcj.js";import"./Paper-U0cK4HBP.js";import"./useTheme-CYJMJKLP.js";import"./useTheme-C7guiOJZ.js";import"./Stack-kCm0vDNS.js";import"./extendSxProp-BKGAgVYg.js";import"./getThemeProps-DV1Unc6F.js";import"./Box-BM9usSYA.js";import"./AlertTitle-DnXLKxO4.js";import"./Typography-BCZ0WOI8.js";import"./index-OhczQznD.js";import"./ClickAwayListener-DmRnLi5_.js";import"./getReactElementRef-BxWWKsOF.js";import"./index-i7tYzgne.js";import"./index-CQyiV8a0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CM_jMmlK.js";import"./Tooltip-BJ3NsGkm.js";import"./index-B8FA-M0N.js";import"./useControlled-BhMBs8Uu.js";import"./Popper-GFYTG-1I.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-QtQ0oXLq.js";import"./QueryClientProvider-Dh2enzOq.js";import"./Link-DOHlnlBk.js";import"./Collapse-BHNRRWil.js";import"./_baseUniq-BIbvDF98.js";import"./_Uint8Array-BH4_uO8n.js";import"./isArray-CsrBVXxZ.js";import"./_getTag-zxu8Qdc7.js";import"./isEqual-FLq9Pc_X.js";import"./merge-Dwa05pYk.js";import"./_initCloneObject-ntAgbFOg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D-6_yJFg.js";import"./inputBaseClasses-DDS4gDmL.js";import"./calculateFriendlyFileSize-IUUKm2Ca.js";import"./CheckCircleTwoTone-BXAr9Xv6.js";import"./InfoTwoTone-Cj21ugug.js";import"./useMutation-5Y6tQ73r.js";import"./dayjs.min-Mo35SBAh.js";import"./chunk-AYJ5UCUI-CYhRgAbg.js";import"./cloneDeep-BpXQur1c.js";import"./Skeleton-DBOrl0In.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bs2cNx3w.js";import"./Backdrop-B9-oQ_j8.js";import"./LinearProgress-w0ynozIH.js";import"./index--bmuvqrL.js";import"./index-Sv91Bx5e.js";import"./index-D2IeR3mQ.js";import"./const-BP60AzNb.js";import"./index-CkxUHBP_.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
