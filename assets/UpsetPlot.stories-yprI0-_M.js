import{U as L}from"./UpsetPlot-iMxYpi3w.js";import{f as u}from"./index-D_IXxTy-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-b7h64BMI.js";import"./DefaultPropsProvider-BVuJ6NZ3.js";import"./createTheme-UnFwGf94.js";import"./index-BGezYTxZ.js";import"./iframe-B-2zDx2H.js";import"./Button-DW5TsUnn.js";import"./createSimplePaletteValueFilter-_8l7Ukzj.js";import"./useTimeout-CSdygWr5.js";import"./ButtonBase-OTZy9XRd.js";import"./useForkRef-DogPi97t.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DjMHo-jE.js";import"./useFiles-2I2Fw3AC.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-C5a1-Bbv.js";import"./OrientationBanner-Cc49ZOOw.js";import"./index-Br3sBrcJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BOMk47dA.js";import"./FullWidthAlert-BpR5S-5j.js";import"./Alert-BsV8gnep.js";import"./useSlot-37k7k0l7.js";import"./createSvgIcon-BRN6BuuI.js";import"./Close-BEIvBVp3.js";import"./IconButton-B3IjaecF.js";import"./Paper-BmvjKgaV.js";import"./useTheme-Bayk6vGN.js";import"./useTheme-Cz-eQcfl.js";import"./Stack-C_8pH08J.js";import"./extendSxProp-BjYa3ogt.js";import"./getThemeProps-DHsonTJv.js";import"./Box-B-MoQy_G.js";import"./AlertTitle-CZZ4Ztun.js";import"./Typography-CVEGnLAD.js";import"./index-siACmn_K.js";import"./ClickAwayListener-CAFxhAOq.js";import"./getReactElementRef-BJ1JrKvk.js";import"./index-D77oy7ww.js";import"./index-BoveFQlD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CReA6j2F.js";import"./Tooltip-DopGUg8J.js";import"./index-B5DCQxiA.js";import"./useControlled-Bae2hl1R.js";import"./Popper-DkEv5u0W.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-2UZU8E2g.js";import"./QueryClientProvider-xIaYfzD0.js";import"./Link-CsG24anU.js";import"./Collapse-C1ok1cmR.js";import"./_baseUniq-CYeDmsi6.js";import"./_Uint8Array-ClTzF4vT.js";import"./isArray-CALPxYtC.js";import"./_getTag-CCdegNGf.js";import"./isEqual-Bd0eeiCo.js";import"./merge-ByFc3pwa.js";import"./_initCloneObject-Vr_V56Xz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPowkdEu.js";import"./inputBaseClasses-D-YtLPUu.js";import"./calculateFriendlyFileSize-DES5VX1H.js";import"./CheckCircleTwoTone-BtOxk0u4.js";import"./InfoTwoTone-CtN2l-vk.js";import"./useMutation-mXy-AmvR.js";import"./dayjs.min-D5l8duxb.js";import"./chunk-AYJ5UCUI-udiJnvPu.js";import"./cloneDeep-Bg1OVVAX.js";import"./Skeleton-BPTrWMRq.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Xm33dOeP.js";import"./Backdrop-Dz6uaOoE.js";import"./LinearProgress-CjwQN0OA.js";import"./index-BdiIPzn6.js";import"./index-BAjB87Jb.js";import"./index-DMOB8tNE.js";import"./const-BP60AzNb.js";import"./index-BW5dS4tG.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
