import{U as L}from"./UpsetPlot-CaGTEymg.js";import{f as u}from"./index-D9wHzrxo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cw4PhM9O.js";import"./DefaultPropsProvider-D7UrraQT.js";import"./createTheme-CmQ7L9FI.js";import"./index-Dv-Auh_6.js";import"./iframe-C98LgnIh.js";import"./Button-HugWKABJ.js";import"./createSimplePaletteValueFilter-MBB8wY7q.js";import"./useTimeout-CrbDv4W6.js";import"./ButtonBase-A9zHO6bs.js";import"./useForkRef-aUOfydcE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rsYMJ3_V.js";import"./useFiles-GM08LsrG.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CQGbYJZY.js";import"./OrientationBanner-D9LH13fs.js";import"./index-CJBSyepz.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYEz1WY0.js";import"./FullWidthAlert-BQo4TeQt.js";import"./Alert-f48QNb2h.js";import"./useSlot-D-57qVPr.js";import"./createSvgIcon-BLEghBNK.js";import"./Close-BYXn6ehd.js";import"./IconButton-CFgYDnd0.js";import"./Paper-Dt5MOLDV.js";import"./useTheme-BRwJ2BiM.js";import"./useTheme-B0hF4srd.js";import"./Stack-BrVSW58k.js";import"./extendSxProp-DgwqkoGF.js";import"./getThemeProps-CzMOA3dK.js";import"./Box-CuUhZXQS.js";import"./AlertTitle-DjtviQhk.js";import"./Typography-CVtis2FJ.js";import"./index-CCjom-eT.js";import"./ClickAwayListener-BscEfLN0.js";import"./getReactElementRef-DaUzJele.js";import"./index-0Ntr3xje.js";import"./index-DH8ZwtL1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BI3-bs-0.js";import"./Tooltip-BRjr85jo.js";import"./index-DQyNv6H4.js";import"./useControlled-BPUCCY57.js";import"./Popper-CXdg4K-k.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BnV8m8MS.js";import"./QueryClientProvider-C8vVXgYp.js";import"./Link-CrDU1RWE.js";import"./Collapse-B_GDzTTw.js";import"./_baseUniq-CqX7G2j0.js";import"./_Uint8Array-B1GgWYrH.js";import"./isArray-CjLdZUWa.js";import"./_getTag-o-5Eopw1.js";import"./isEqual-nclDIja9.js";import"./merge-BX7tbRVV.js";import"./_initCloneObject-iMbuWMMe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0IATwVZ.js";import"./inputBaseClasses-CROUrq90.js";import"./calculateFriendlyFileSize-0imf3u_G.js";import"./CheckCircleTwoTone--JEdlD7D.js";import"./InfoTwoTone-BVVUUJao.js";import"./useMutation-DuSiyCX7.js";import"./dayjs.min-Bo9-7NDX.js";import"./chunk-AYJ5UCUI-FxR7alk-.js";import"./cloneDeep-B_QLLDkA.js";import"./Skeleton-C2rRnGCD.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BKfRCv9s.js";import"./Backdrop-oFsh0_7M.js";import"./LinearProgress-Cdkw4tNz.js";import"./index-CC0VupcC.js";import"./index-N_lpzlPp.js";import"./index-BnayQ7dC.js";import"./const-BP60AzNb.js";import"./index-n6kGNMo-.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
