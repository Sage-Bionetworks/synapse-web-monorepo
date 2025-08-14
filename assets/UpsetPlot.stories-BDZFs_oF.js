import{U as L}from"./UpsetPlot-CZLMMHF6.js";import{f as u}from"./index-Cbe_3MXu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CvAJqFfl.js";import"./DefaultPropsProvider-5Up6I45h.js";import"./createTheme-DUuZ4m0z.js";import"./index-CGgyZU_0.js";import"./iframe-CCXccXds.js";import"./Button-C0Nq20QI.js";import"./createSimplePaletteValueFilter-BZ-L_Jj5.js";import"./useTimeout-DdiylZf3.js";import"./ButtonBase-CM83hPGr.js";import"./useForkRef-DlbJAM4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjRT_mg3.js";import"./useFiles-DU1Ca-_P.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DEJlw4mo.js";import"./OrientationBanner-DzQXenpJ.js";import"./index-CvgTVjO6.js";import"./spreadSx-CwcO6WA9.js";import"./react-CpI2RwIo.js";import"./FullWidthAlert-BpIfGsWz.js";import"./Alert-nYZipnOq.js";import"./useSlot-5LEOfRuN.js";import"./createSvgIcon-D97lkMSQ.js";import"./Close-DzaxAuVx.js";import"./IconButton-CJaSZh4u.js";import"./Paper-BM-tMMK1.js";import"./useTheme-DK_RMngr.js";import"./useTheme-CiWR55g1.js";import"./Stack-CkblJmrf.js";import"./extendSxProp-CUYWBp11.js";import"./getThemeProps-BSNr66vY.js";import"./Box-BsuZ6C8s.js";import"./AlertTitle-Bxrqc5yE.js";import"./Typography-kOOYf-Kl.js";import"./index-D6lIKvPO.js";import"./ClickAwayListener-OOoRoFHH.js";import"./getReactElementRef-Dx_crL1u.js";import"./index-DHitPVAn.js";import"./index-CwBx0_o5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-By88UYB6.js";import"./Tooltip-dgVzK9DS.js";import"./index-B6JVTg8R.js";import"./useControlled-DpFNXsAN.js";import"./Popper-DnYwqT0E.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DQxusNcL.js";import"./QueryClientProvider-BE6FMEZ7.js";import"./Link-D2bE_4v-.js";import"./Collapse-AFy-hdtE.js";import"./_baseUniq-BJC9OAaN.js";import"./_Uint8Array-DiWqlVCe.js";import"./isArray-D5aGXKVb.js";import"./_getTag-CrDNXku_.js";import"./isEqual-DzAD8Via.js";import"./merge-DvAwwU1t.js";import"./_initCloneObject-D-wpJOrp.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-XtNM26yZ.js";import"./inputBaseClasses-fWowbO6t.js";import"./calculateFriendlyFileSize-a0Vpzw6I.js";import"./CheckCircleTwoTone-DA7xpcMw.js";import"./InfoTwoTone-BXa-vZ7M.js";import"./useMutation-BpxcV4LA.js";import"./dayjs.min-CBqNYA7K.js";import"./chunk-AYJ5UCUI-GzZUB2J_.js";import"./cloneDeep-De-M-jex.js";import"./Skeleton-BAJIOENu.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CZK8OB3q.js";import"./Backdrop-sA_RkVXk.js";import"./LinearProgress-B8hUczeM.js";import"./index-BeUUSUXd.js";import"./index-BYrs-eaa.js";import"./index-B5ZO_UtS.js";import"./const-BP60AzNb.js";import"./index-CQi8unK5.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
