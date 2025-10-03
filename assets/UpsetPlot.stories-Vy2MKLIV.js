import{U as L}from"./UpsetPlot-CqGo2Kez.js";import{f as u}from"./index-lDub37SW.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bs1MsFYG.js";import"./DefaultPropsProvider-tscWNgRV.js";import"./createTheme-DSMh9aMK.js";import"./index-DEXVlyEC.js";import"./iframe-CTaKRDzK.js";import"./Button-DWmqEVyK.js";import"./createSimplePaletteValueFilter-z7ViS40H.js";import"./useTimeout-Bcmt8HaF.js";import"./ButtonBase-CtgJMkFI.js";import"./useForkRef-Bpi5glj8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BXvEMjjW.js";import"./useFiles-I_Ljsvpl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DXlbb83s.js";import"./OrientationBanner-DIMiS6-X.js";import"./index-ChlY0ty7.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Ag4Khl.js";import"./FullWidthAlert-BQi4k6sm.js";import"./Alert-oJFeNTPf.js";import"./useSlot-5fSGsjd4.js";import"./createSvgIcon-IuSm3jpw.js";import"./Close-BYMa4NgR.js";import"./IconButton-B7n5ygWB.js";import"./Paper-BJO20Q9K.js";import"./useTheme-nF84TQI6.js";import"./useTheme-pMmDZBIO.js";import"./Stack-EBx-64RF.js";import"./useThemeProps-CwzyAdAY.js";import"./getThemeProps-BLGqyFKd.js";import"./extendSxProp-DysauLlL.js";import"./Box-B7xLSVbU.js";import"./AlertTitle-DohnoRzz.js";import"./Typography-BV8NZaJG.js";import"./index-C2jv3Yen.js";import"./ClickAwayListener-DUKbMkLR.js";import"./getReactElementRef-C_fwGmzx.js";import"./index-CwKkrkMc.js";import"./index-Dv8O9azN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dvv4NuhG.js";import"./Tooltip-CivR37xg.js";import"./index-C1fK7QTW.js";import"./useControlled-Cy9MDY45.js";import"./Popper-DCuGWZxy.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lmzAG6mX.js";import"./QueryClientProvider-5d7cgiKu.js";import"./Link-Bcp540VX.js";import"./Collapse-DbB5zYpu.js";import"./_baseUniq-D6itCMNh.js";import"./_Uint8Array-CFylZ-gm.js";import"./isArray-gvpvXSFg.js";import"./_getTag-H4oDIWkK.js";import"./isEqual-hwpo_E0H.js";import"./noop-DX6rZLP_.js";import"./merge-Ckv_4s3g.js";import"./_initCloneObject-oqJaqUxv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgqBXsZL.js";import"./inputBaseClasses-R5GcZRQ_.js";import"./calculateFriendlyFileSize-4KlCbfW-.js";import"./CheckCircleTwoTone-BPpE4vcS.js";import"./InfoTwoTone-C2z4ZzAx.js";import"./useMutation-DVVhu_SN.js";import"./dayjs.min-d6L6EHLF.js";import"./chunk-AYJ5UCUI-UVlhN5ws.js";import"./cloneDeep-Co63vGR4.js";import"./Skeleton-B3iwvpLy.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CisaBWXR.js";import"./Backdrop-dBbh7sfo.js";import"./LinearProgress-DX_5dvVv.js";import"./index-C-AlHt5Z.js";import"./index-CRLuFPot.js";import"./index-DLHGmC4Y.js";import"./const-BP60AzNb.js";import"./index-D7dXryyz.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
