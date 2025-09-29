import{U as L}from"./UpsetPlot-Dn20hkPX.js";import{f as u}from"./index-DB4JPLOD.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-x7ZkZMA8.js";import"./DefaultPropsProvider-Cc2WXfIy.js";import"./createTheme-CZav1_Gb.js";import"./index-BloLEAy1.js";import"./iframe-CKfgUuPM.js";import"./Button-CMHi5O9T.js";import"./createSimplePaletteValueFilter-eby9pYbG.js";import"./useTimeout-sp5LbUOC.js";import"./ButtonBase-i9yFzP5m.js";import"./useForkRef-Cb6JBq-d.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BDbmFF2h.js";import"./useFiles-DM8ODnE1.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BhK8041S.js";import"./OrientationBanner-CZLIqqQW.js";import"./index-CXGD1nhD.js";import"./spreadSx-CwcO6WA9.js";import"./react-BruRYVnC.js";import"./FullWidthAlert-PH21VpMl.js";import"./Alert-CVuydjvy.js";import"./useSlot-7ZCLd36S.js";import"./createSvgIcon-pEoAHn1W.js";import"./Close-vzj9hjx-.js";import"./IconButton-DcP9VhRe.js";import"./Paper-CIe6YCK_.js";import"./useTheme-BB7mkDQM.js";import"./useTheme-sze_bRIR.js";import"./Stack-S_1S8qQR.js";import"./extendSxProp-C1UJW0LD.js";import"./getThemeProps-y8DddFS4.js";import"./Box-B2NAFohM.js";import"./AlertTitle-J1r0sIO1.js";import"./Typography-DAbfgqiK.js";import"./index-BU6WjtVn.js";import"./ClickAwayListener-xpLIiVXr.js";import"./getReactElementRef-91ouRfnc.js";import"./index-CVk8f9Z0.js";import"./index-KlmJpNBV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Btkl0dwb.js";import"./Tooltip-LLJF2Sui.js";import"./index-CaphlovL.js";import"./useControlled-eGHYQS1z.js";import"./Popper-CCeV26oI.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-A2nSLqYV.js";import"./QueryClientProvider-B-jv1tS7.js";import"./Link-t6I2sdQ7.js";import"./Collapse-DN8doD0U.js";import"./_baseUniq-BVIKsDod.js";import"./_Uint8Array-DaYXT6X2.js";import"./isArray-C0axBQbV.js";import"./_getTag-BL3im_fO.js";import"./isEqual-BS3sRW2T.js";import"./merge-B5cZnhNH.js";import"./_initCloneObject-IUGla6cP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOoRDzga.js";import"./inputBaseClasses-XK2vZhF1.js";import"./calculateFriendlyFileSize-Cm0JtIBR.js";import"./CheckCircleTwoTone-DrxZDCjx.js";import"./InfoTwoTone-DirFePmA.js";import"./useMutation-imcDv-vJ.js";import"./dayjs.min-BQ6mRLia.js";import"./chunk-AYJ5UCUI-CjQA8okQ.js";import"./cloneDeep-CaO4d-Vx.js";import"./Skeleton-DJX65kDG.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DhhR39Bw.js";import"./Backdrop-HeEcc-yi.js";import"./LinearProgress-BHY4yjRF.js";import"./index-DRJ-vl8l.js";import"./index-DiRatanG.js";import"./index-IbuJvLhV.js";import"./const-BP60AzNb.js";import"./index-DlWLY23A.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
