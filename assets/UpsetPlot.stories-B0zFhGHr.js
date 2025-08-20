import{U as L}from"./UpsetPlot-BlRN7HQy.js";import{f as u}from"./index-BZAm3D5L.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DpBDL5OP.js";import"./DefaultPropsProvider-DtDVHnHW.js";import"./createTheme-xVdgCG2Z.js";import"./index-1NdgpKeG.js";import"./iframe-BVCs4XIv.js";import"./Button-DBL5mfsL.js";import"./createSimplePaletteValueFilter-B-K6kzC2.js";import"./useTimeout--1Vup-x4.js";import"./ButtonBase-CvfaG9fg.js";import"./useForkRef-CwsXTZjB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-dOwNu9AC.js";import"./useFiles-DHhpU89b.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CB8Sz7dU.js";import"./OrientationBanner-hTrQankP.js";import"./index-D0vu6z4F.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bh3dHSQv.js";import"./FullWidthAlert-9D0dStMg.js";import"./Alert-DsiUbUNV.js";import"./useSlot-19A78PIb.js";import"./createSvgIcon-CoM42d11.js";import"./Close-ra3sU-bD.js";import"./IconButton-Jqcl1FCR.js";import"./Paper-D7ecR47B.js";import"./useTheme-Cqv6EVU7.js";import"./useTheme-xJG0eZgW.js";import"./Stack-xSrw6zja.js";import"./extendSxProp-IK5aZbjn.js";import"./getThemeProps-BxhnPNvq.js";import"./Box-fCUvLKal.js";import"./AlertTitle-BjKOMb4O.js";import"./Typography-Bfwzdonu.js";import"./index-Cw5x1M4E.js";import"./ClickAwayListener-DKhLIoVT.js";import"./getReactElementRef-IrCKeVVF.js";import"./index-Cv_k6Nmf.js";import"./index-D9_WP2Ac.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B-J8hTfc.js";import"./Tooltip-Baq19PiH.js";import"./index-f4EwjVcV.js";import"./useControlled-B_AhfMUd.js";import"./Popper-Bly56UTy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C5B8DZnM.js";import"./QueryClientProvider-BAH_7CkU.js";import"./Link-BkHcEeBu.js";import"./Collapse-DTAoykKm.js";import"./_baseUniq-_pOsj4Ic.js";import"./_Uint8Array-BWdg-OfF.js";import"./isArray-l4NiJBp5.js";import"./_getTag-CR8oz2FK.js";import"./isEqual-C5c0kD5A.js";import"./merge-CNgcJE1c.js";import"./_initCloneObject-D4cgbryH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BmnT4nNM.js";import"./inputBaseClasses-C7EIIvr1.js";import"./calculateFriendlyFileSize-D8GRXzjx.js";import"./CheckCircleTwoTone-RZp-vcbP.js";import"./InfoTwoTone-DSSjfjZh.js";import"./useMutation-D0aueLVp.js";import"./dayjs.min-D5j6ikUT.js";import"./chunk-AYJ5UCUI-CRjBeq-S.js";import"./cloneDeep-CCE_bhld.js";import"./Skeleton-Cy5on4Og.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CNBczSYR.js";import"./Backdrop-CbLtnP_R.js";import"./LinearProgress-B6BiDBwW.js";import"./index-B2vbeqTI.js";import"./index-CBZ6FHdV.js";import"./index-C68Jfggf.js";import"./const-BP60AzNb.js";import"./index-D6yaGzKd.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
