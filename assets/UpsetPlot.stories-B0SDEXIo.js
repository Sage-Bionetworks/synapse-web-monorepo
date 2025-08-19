import{U as L}from"./UpsetPlot-B7ehgo9O.js";import{f as u}from"./index-1OMBHnlb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BfJPIXgs.js";import"./DefaultPropsProvider-Brvdw7MK.js";import"./createTheme-B3a40uRt.js";import"./index-RQ0VRfBe.js";import"./iframe-BSwI0BuQ.js";import"./Button-DPlz7I9N.js";import"./createSimplePaletteValueFilter-DOADF6SA.js";import"./useTimeout-DdZabwmr.js";import"./ButtonBase-BswOUPWa.js";import"./useForkRef-iIcboBYr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7ys3hik.js";import"./useFiles-BKB5xZDa.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Km9a4VVT.js";import"./OrientationBanner-tOI4QWTZ.js";import"./index-wZT_5GMZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ds-lhlJ9.js";import"./FullWidthAlert-BZjYeA9K.js";import"./Alert-C6oiQz9e.js";import"./useSlot-B-ceud5V.js";import"./createSvgIcon-C8DENwZc.js";import"./Close-CciatGX4.js";import"./IconButton-BOPXpIMm.js";import"./Paper-BtspOLtq.js";import"./useTheme-shV1vWHw.js";import"./useTheme-DOWP3Og2.js";import"./Stack-BY-lMUSZ.js";import"./extendSxProp-DaREFPpk.js";import"./getThemeProps-DSldrJ4N.js";import"./Box-Dbh1vRpk.js";import"./AlertTitle-B1i8KogI.js";import"./Typography-BHJkApfL.js";import"./index-CeTarxud.js";import"./ClickAwayListener-CA-mVuPg.js";import"./getReactElementRef-DScjaHqm.js";import"./index-ByRN_LZE.js";import"./index-KthTLK7W.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DApu84Af.js";import"./Tooltip-BkpuHW2s.js";import"./index-CtQ2an3R.js";import"./useControlled-DeJIqeNy.js";import"./Popper-DQ4U8fRj.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-jjEIiNsZ.js";import"./QueryClientProvider-BOZbETI3.js";import"./Link-DmjQC7-j.js";import"./Collapse-CbAeCE0n.js";import"./_baseUniq-C2J42JgB.js";import"./_Uint8Array-DUEnRYfi.js";import"./isArray-TInT70Wl.js";import"./_getTag-zZpNkEfp.js";import"./isEqual--F9hXBUD.js";import"./merge-DzyF6tGw.js";import"./_initCloneObject-DmsaUw5q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CG1rLM0A.js";import"./inputBaseClasses-BKC7y2R3.js";import"./calculateFriendlyFileSize-Cg9csoK1.js";import"./CheckCircleTwoTone-C4Hqs1v7.js";import"./InfoTwoTone-Bp7rSt0F.js";import"./useMutation-CaKYWgPl.js";import"./dayjs.min-CcFmKoce.js";import"./chunk-AYJ5UCUI-BIm36Kjl.js";import"./cloneDeep-DMWpOHbG.js";import"./Skeleton-yyex56ve.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C0KJtviP.js";import"./Backdrop-Ct-69Nv1.js";import"./LinearProgress-BPIlnSrt.js";import"./index-Q2c8Lgz7.js";import"./index-CIk9hW9R.js";import"./index-Df31qrbp.js";import"./const-BP60AzNb.js";import"./index-VEab3pss.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
