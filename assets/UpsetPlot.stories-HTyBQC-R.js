import{U as L}from"./UpsetPlot-wpBR1CZB.js";import{f as u}from"./index-BLrjQ4eX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-iWg4-82R.js";import"./DefaultPropsProvider-BZ593aJ2.js";import"./createTheme-f-wPrVvU.js";import"./index-CHRY80Wk.js";import"./iframe-CROfmG2r.js";import"./Button-bfdx_ZwC.js";import"./createSimplePaletteValueFilter-CJWgStPp.js";import"./useTimeout-CjdkA4mY.js";import"./ButtonBase-CtR-QrJJ.js";import"./useForkRef-D5oOxVAR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSlw_2l-.js";import"./useFiles-DBJXDwof.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Bbk9d4oX.js";import"./OrientationBanner-Dz6hdISR.js";import"./index-BSmYBrAM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSMTXBLF.js";import"./FullWidthAlert-C4LbhNS1.js";import"./Alert-D195tW_E.js";import"./useSlot-D9mysiKz.js";import"./createSvgIcon-BzDBPHl6.js";import"./Close-BcZzt1yo.js";import"./IconButton-CRPhTWfq.js";import"./Paper-rZJCvNdw.js";import"./useTheme-CO6sJo1b.js";import"./useTheme-BhtrbXDK.js";import"./Stack-Dz6FNCh8.js";import"./extendSxProp-BQG31UNs.js";import"./getThemeProps-BP49VJRc.js";import"./Box-Cnq3UVt_.js";import"./AlertTitle-CPkoSTIL.js";import"./Typography-BLqAVBqX.js";import"./index-Djpketd-.js";import"./ClickAwayListener-euUktDpk.js";import"./getReactElementRef-DYMZr397.js";import"./index-B2W7djG6.js";import"./index-DAn3TN-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-PfMUypAK.js";import"./Tooltip-B_sSJT2h.js";import"./index-LOyePG7w.js";import"./useControlled-CLCsFO06.js";import"./Popper-DE2guRwR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-C_3ZuEwo.js";import"./QueryClientProvider-BCjXIc_t.js";import"./Link-BwEOvYlx.js";import"./Collapse-CHkYBJLt.js";import"./_baseUniq-DuUElwjR.js";import"./_Uint8Array-BxwMKCNr.js";import"./isArray-CPhGnzFe.js";import"./_getTag-CGgG71W-.js";import"./isEqual-BoYtKexc.js";import"./merge-f7jIc8iq.js";import"./_initCloneObject-DRjI7vWd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B5UxiS9r.js";import"./inputBaseClasses-DXOcE_b_.js";import"./calculateFriendlyFileSize-Ccl7c3cP.js";import"./CheckCircleTwoTone-BF_yKUh0.js";import"./InfoTwoTone-BCoc74i4.js";import"./useMutation-DpBMagcy.js";import"./dayjs.min-Ddj_UNiI.js";import"./chunk-AYJ5UCUI-B-J7afgE.js";import"./cloneDeep-CVhe5dWx.js";import"./Skeleton-CAGLPHTV.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DCb-VFmv.js";import"./Backdrop-CSXs5JWi.js";import"./LinearProgress-a74zodNP.js";import"./index-DY4Ci-q4.js";import"./index-IkLeZ9g3.js";import"./index-DpFKMD9D.js";import"./const-BP60AzNb.js";import"./index-Cw-X_xLv.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
