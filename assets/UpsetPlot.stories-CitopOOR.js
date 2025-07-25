import{U as L}from"./UpsetPlot-CSdPjoDF.js";import{f as u}from"./index-D9j90q4w.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DXb7W681.js";import"./DefaultPropsProvider-Kp6ysrGJ.js";import"./createTheme-9vZMWLEN.js";import"./index-ERVYNuyh.js";import"./iframe-DaTTE08J.js";import"./Button-C8jpcG3B.js";import"./createSimplePaletteValueFilter-CtWksluw.js";import"./useTimeout-BrV9PTVD.js";import"./ButtonBase-tOcRm7j0.js";import"./useForkRef-BHRbSyPv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CLoP28jC.js";import"./useFiles-DQOlJ2f-.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BxZHzYZ1.js";import"./OrientationBanner-BnczYPRW.js";import"./index-DKbB702X.js";import"./spreadSx-CwcO6WA9.js";import"./react-C_JnUbZh.js";import"./FullWidthAlert-C-Rtob1u.js";import"./Alert-CPJB_OGQ.js";import"./useSlot-Hm8GCRcL.js";import"./createSvgIcon-mPCKXbeo.js";import"./Close-CBFZ7DCS.js";import"./IconButton-CihR9uhl.js";import"./Paper-CLWPxyqR.js";import"./useTheme-JVvFOTrv.js";import"./useTheme-Dbz3Bw6A.js";import"./Stack-kfI8mFGf.js";import"./extendSxProp-C28vbsL2.js";import"./getThemeProps-BvKcUGiO.js";import"./Box-3B3pu-kl.js";import"./AlertTitle-kOa857Gs.js";import"./Typography-Dlkj5V0u.js";import"./index-C9tII_rG.js";import"./ClickAwayListener-C2503XdC.js";import"./getReactElementRef-BsAh3-iW.js";import"./index-BDvSc1Dx.js";import"./index-CsBenq-6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS5vzMfF.js";import"./Tooltip-QAGGRmhg.js";import"./index-BuMjaBWN.js";import"./useControlled-CNw5mVB9.js";import"./Popper-BoDQHXH-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Ch3-g7vA.js";import"./QueryClientProvider-BF4-YBEJ.js";import"./Link-IDAELXN9.js";import"./Collapse-Do_xM2nw.js";import"./_baseUniq-BTHbFh8p.js";import"./_Uint8Array-CNnKuEVW.js";import"./isArray-Cl4dg9cq.js";import"./_getTag-2eX_qQEa.js";import"./isEqual-Bx8BnLbu.js";import"./merge-DkIPueKU.js";import"./_initCloneObject-WZTc4sqW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Ds_I7p0S.js";import"./inputBaseClasses-D0uzAg7X.js";import"./calculateFriendlyFileSize-BIP9WyzF.js";import"./CheckCircleTwoTone-pUSz45z2.js";import"./InfoTwoTone-DQu90CoJ.js";import"./useMutation-CPJoLMXE.js";import"./dayjs.min-CJwCc7ER.js";import"./chunk-AYJ5UCUI-BRCzOR7H.js";import"./cloneDeep-9NRChthv.js";import"./Skeleton-Bb3K0L9j.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-GnWr-t6F.js";import"./Backdrop-D9DGwibX.js";import"./LinearProgress-BIiVyAtg.js";import"./index-DF-qzwg5.js";import"./index-DDTOQX9G.js";import"./index-653opMpI.js";import"./const-BP60AzNb.js";import"./index-Bq-3dPmw.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
