import{U as L}from"./UpsetPlot-Q-LSvVL3.js";import{f as u}from"./index-y8-4-prg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DqniFfFh.js";import"./DefaultPropsProvider-C5HBAaLd.js";import"./createTheme-C4Li-FeX.js";import"./index-DfH0xLBM.js";import"./iframe-BBbPPlq-.js";import"./Button-CzBwcvk-.js";import"./createSimplePaletteValueFilter-CewVvtaD.js";import"./useTimeout-ByqevPT1.js";import"./ButtonBase-BXFH7Ps4.js";import"./useForkRef-C38TISwS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C03GnYa5.js";import"./useFiles--CcWu9gA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-ghF4YRrd.js";import"./OrientationBanner-DU98_TTV.js";import"./index-Dxjk3aKI.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpIdD-62.js";import"./FullWidthAlert-BQJVxlFp.js";import"./Alert-RljSBmGs.js";import"./useSlot-ij2OcnyH.js";import"./createSvgIcon-DgQOn1iH.js";import"./Close-BvUVUi_-.js";import"./IconButton-Bl0V3heo.js";import"./Paper-BguwlWAj.js";import"./useTheme-uHI12HV_.js";import"./useTheme-59sMrz1c.js";import"./Stack-B39t_pfr.js";import"./extendSxProp-5e-7qZGm.js";import"./getThemeProps-Cs-uvllJ.js";import"./Box-DatqpWAL.js";import"./AlertTitle-RGiJ7hWV.js";import"./Typography-BsfUTGyU.js";import"./index-CIGP8gNZ.js";import"./ClickAwayListener-DAStxRA2.js";import"./getReactElementRef-C8IOmuiS.js";import"./index-C8f7utTL.js";import"./index-CRBvO-yL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BgfT-li0.js";import"./Tooltip-BSuMYYSh.js";import"./index-CYsbSnLz.js";import"./useControlled-BITnwwUY.js";import"./Popper-BGskr9VS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-Cf8hH_U4.js";import"./QueryClientProvider-BZgP8lHY.js";import"./Link-Cm8C0lxO.js";import"./Collapse-CDaWcrSI.js";import"./_baseUniq-DBAE-w05.js";import"./_Uint8Array-CwRGWxQt.js";import"./isArray-CGdtKNqT.js";import"./_getTag-BhZRMS_V.js";import"./isEqual-N_Vc746J.js";import"./merge-BKp98YdC.js";import"./_initCloneObject-DRIcQyEX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-0QiC2KlA.js";import"./inputBaseClasses-mE9zzfPQ.js";import"./calculateFriendlyFileSize-CoY_9rm3.js";import"./CheckCircleTwoTone-Cw0D955-.js";import"./InfoTwoTone-DDsNRkE8.js";import"./useMutation-DsxIvPaF.js";import"./dayjs.min-C2tPzWeM.js";import"./chunk-AYJ5UCUI-RArPt-D8.js";import"./cloneDeep-Slp46nnr.js";import"./Skeleton-C7wJ6onP.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DAcgp9oN.js";import"./Backdrop-D39jx8Ga.js";import"./LinearProgress-Cnbx1riw.js";import"./index-DVTZ7QFI.js";import"./index--Y-RgzFB.js";import"./index-NJ9Z07p7.js";import"./const-BP60AzNb.js";import"./index-pH2i_WJU.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
