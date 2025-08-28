import{U as L}from"./UpsetPlot-DbrhWsGT.js";import{f as u}from"./index-BEUfASdo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BfFITXKF.js";import"./DefaultPropsProvider-DA7gNYCg.js";import"./createTheme-Do2aQZve.js";import"./index-yCXaIsJ4.js";import"./iframe-Dgw0ddSq.js";import"./Button-Bdu-kUqw.js";import"./createSimplePaletteValueFilter-BHnhbDkS.js";import"./useTimeout-Da7I_d7d.js";import"./ButtonBase-BGA1bzPt.js";import"./useForkRef-Bn9qWfWW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVLjCIit.js";import"./useFiles-BPERm-cu.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-D00XTuqK.js";import"./OrientationBanner-DwasDZmJ.js";import"./index-BCRFxw-n.js";import"./spreadSx-CwcO6WA9.js";import"./react-D3jiIDv1.js";import"./FullWidthAlert-BIBV4Cq8.js";import"./Alert-DTtaGRoB.js";import"./useSlot-DEVxrYXR.js";import"./createSvgIcon-DdAS40k4.js";import"./Close-BBLxdgjF.js";import"./IconButton-CblLNGjE.js";import"./Paper-DMmdFBKL.js";import"./useTheme-Cp6Z_OGT.js";import"./useTheme-C0QTeBxb.js";import"./Stack-7VNSqroz.js";import"./extendSxProp-B1V_wo3n.js";import"./getThemeProps-D7cW0aau.js";import"./Box-CRuUmbYm.js";import"./AlertTitle-BTKxYoJ7.js";import"./Typography-CmGZeFeL.js";import"./index-DwjXVB4n.js";import"./ClickAwayListener-DRFmCXUS.js";import"./getReactElementRef-CXJuXcK9.js";import"./index-DmP6khY1.js";import"./index-CQ8BoWaF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-r6SG4a-A.js";import"./Tooltip-BrgXw1Ls.js";import"./index-jmgeEAfX.js";import"./useControlled-vLN5jkuc.js";import"./Popper-CZtBRXx-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-C9SHkG8T.js";import"./QueryClientProvider-S4LJ2qFq.js";import"./Link-B9YecAyg.js";import"./Collapse-BSRMULAt.js";import"./_baseUniq-UUyCIDNM.js";import"./_Uint8Array-D7urBA5u.js";import"./isArray-DAFWMPVS.js";import"./_getTag-D8Au6Ygl.js";import"./isEqual-BrcUvxQT.js";import"./merge-C0TzSy4i.js";import"./_initCloneObject-vSuvn-Og.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-tsytefLF.js";import"./inputBaseClasses-CgrUI19Y.js";import"./calculateFriendlyFileSize-CjVI3fw6.js";import"./CheckCircleTwoTone-B-HOVuQz.js";import"./InfoTwoTone-2u3rIjXL.js";import"./useMutation-DLlWKSte.js";import"./dayjs.min-CALBWj5h.js";import"./chunk-AYJ5UCUI-BfnxM5bb.js";import"./cloneDeep-v_2cqpzj.js";import"./Skeleton-C6DJCA98.js";import"./SqlFunctions-FlDJijt2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DEHSFaXh.js";import"./Backdrop-BDNhuUAO.js";import"./LinearProgress-CyrbicDK.js";import"./index-C05c7_oa.js";import"./index-BgzxZvE7.js";import"./index-CdZBPT7S.js";import"./const-BP60AzNb.js";import"./index-B9k5wGaA.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
