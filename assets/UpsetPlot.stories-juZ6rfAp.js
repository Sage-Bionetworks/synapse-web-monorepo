import{U as L}from"./UpsetPlot-D_vnYNX2.js";import{f as u}from"./index-BrGAkK4D.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-6urz5hIr.js";import"./DefaultPropsProvider-8bXZbYL1.js";import"./createTheme-BPIzYAQ4.js";import"./index-CjphnBVq.js";import"./iframe-lrU9LFdV.js";import"./Button-D4fZkcfM.js";import"./createSimplePaletteValueFilter-DHFVVwmG.js";import"./useTimeout-CpGExdCe.js";import"./ButtonBase-DopOzCsI.js";import"./useForkRef-BCxYFCZR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIOMIAjp.js";import"./useFiles-C0wpA-d_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-JBI0Es1I.js";import"./OrientationBanner-COPAbD7L.js";import"./index-CwE58A9m.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZcK9S5a.js";import"./FullWidthAlert-CbPGHvf_.js";import"./Alert-CIWmEJq-.js";import"./useSlot-CXduKSdS.js";import"./createSvgIcon-DvMnD2YN.js";import"./Close-rUHC_DQp.js";import"./IconButton-Bs0ai_J-.js";import"./Paper-C_uMHdL9.js";import"./useTheme-JbJccATr.js";import"./useTheme-B9jQ-kBM.js";import"./Stack-WJUHS1r0.js";import"./extendSxProp-BIlFRqHM.js";import"./getThemeProps-uQ8hgx0D.js";import"./Box-CE79B8x9.js";import"./AlertTitle-BH1lsmU_.js";import"./Typography-7Pmswjzs.js";import"./index-DszYsPoe.js";import"./ClickAwayListener-CrAE0rE1.js";import"./getReactElementRef-CLp1aBoV.js";import"./index-CrHb8yv-.js";import"./index-VcmQi6lf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-61qwQvNa.js";import"./Tooltip-TpIeJkLt.js";import"./index-DK18_Xx-.js";import"./useControlled-etNhPZko.js";import"./Popper-DYxd-Od2.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DkpmWgzX.js";import"./QueryClientProvider-AOo7dBFH.js";import"./Link-pWm405cE.js";import"./Collapse-BuHDYAZF.js";import"./_baseUniq-iWgxwqbF.js";import"./_Uint8Array-D2ZRe-Ez.js";import"./isArray-CDuSSvaA.js";import"./_getTag-CEAP-oYs.js";import"./isEqual--LWBi94p.js";import"./merge-CHhIB990.js";import"./_initCloneObject-DPVuJmCo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Qi7ViT4V.js";import"./inputBaseClasses-C9WzNq0T.js";import"./calculateFriendlyFileSize-BEXL1JFB.js";import"./CheckCircleTwoTone-C_snamD8.js";import"./InfoTwoTone-C2eBdVRG.js";import"./useMutation-CsZj5iug.js";import"./dayjs.min-DJQA-fAv.js";import"./chunk-AYJ5UCUI-Cw3dHB7K.js";import"./cloneDeep-DmQugvYe.js";import"./Skeleton-BueRTKgW.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CtVYgzBt.js";import"./Backdrop-BNiidbJI.js";import"./LinearProgress-JP6Ve5Yu.js";import"./index-DtInZe7N.js";import"./index-CA3ETC-Y.js";import"./index-D7IRi1ZR.js";import"./const-BP60AzNb.js";import"./index-C0aySBTO.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
