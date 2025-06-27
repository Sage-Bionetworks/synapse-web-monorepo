import{U as L}from"./UpsetPlot-GvpZuoJA.js";import{f as u}from"./index-ByeA9YHd.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Acf0ZPpC.js";import"./DefaultPropsProvider-64Swdv2T.js";import"./createTheme-RhL5bwVE.js";import"./index-ByQ0enQ_.js";import"./iframe-qffJBPgR.js";import"./Button-De9dJMeU.js";import"./createSimplePaletteValueFilter-D0UDgssp.js";import"./useTimeout-Doxj9_dA.js";import"./ButtonBase-o7r7j6z6.js";import"./useForkRef-Ckn1HaZS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C_fK4DGM.js";import"./useFiles-8wN_2rUp.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BcZxOIBV.js";import"./OrientationBanner-Dc2tHOjk.js";import"./index-yH09oplz.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dgj0kz-P.js";import"./FullWidthAlert-D8ffswTQ.js";import"./Alert-Cf9K_aVL.js";import"./useSlot-DRWAAySF.js";import"./createSvgIcon-CvoIu9Sh.js";import"./Close-BV7syacj.js";import"./IconButton-C4K_i--W.js";import"./Paper-Bj08f0KH.js";import"./useTheme-YIUbe7eG.js";import"./useTheme-aRp2Pb7j.js";import"./Stack-4HJz7Trj.js";import"./extendSxProp-STyG-2xm.js";import"./getThemeProps-B2ultWce.js";import"./Box-T9uDT5Iy.js";import"./AlertTitle-Bafu7Id7.js";import"./Typography-CN7eQm76.js";import"./index-Dxr02uWA.js";import"./ClickAwayListener-BLydFwEl.js";import"./getReactElementRef-CYVllaoK.js";import"./index-C1Cv6qSE.js";import"./index-BVRNkw6h.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B8xivWT7.js";import"./Tooltip-CtnYvlL4.js";import"./index-YPTaOPvf.js";import"./useControlled-DI2UICES.js";import"./Popper-DaOitWJ-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DiVXZU56.js";import"./QueryClientProvider-C-tMRmtI.js";import"./Link-Cqdpa6Et.js";import"./Collapse-DStggPpR.js";import"./_baseUniq-DqZluO96.js";import"./_Uint8Array-COloI7fd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CutocSNB.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C0UugZrc.js";import"./isEqual-idVdvqox.js";import"./merge-Bg8Q1B44.js";import"./_initCloneObject-DABeNlt7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BKhuncpj.js";import"./inputBaseClasses-XuYOrCAZ.js";import"./calculateFriendlyFileSize-D-mSw0w0.js";import"./CheckCircleTwoTone-qxJWfbf1.js";import"./InfoTwoTone-BylvJCdW.js";import"./useMutation-BVVhdury.js";import"./dayjs.min-BlTyXE8F.js";import"./chunk-AYJ5UCUI-ZZaosZmT.js";import"./cloneDeep-DeelGcqm.js";import"./Skeleton-DRSaVcpI.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_MX3ZMT.js";import"./Backdrop-BE8C8oCU.js";import"./LinearProgress-BXKAxzDP.js";import"./index-Bxt12nyZ.js";import"./index-0NHiyFWp.js";import"./index-ClYrTo83.js";import"./const-BP60AzNb.js";import"./index-BeIAZcoY.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
