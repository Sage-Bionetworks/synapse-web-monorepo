import{U as L}from"./UpsetPlot-n0PRlW6a.js";import{f as u}from"./index-Dqigpp3j.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BOjT9WIH.js";import"./DefaultPropsProvider-DyqqgsE6.js";import"./createTheme-D72DCvX0.js";import"./index-tft_hvVL.js";import"./iframe-ByVz3vGl.js";import"./Button-8LCSo_0G.js";import"./createSimplePaletteValueFilter-bok6wC5d.js";import"./useTimeout-BXN-MwvH.js";import"./ButtonBase-CnGL_3Pl.js";import"./useForkRef-DXSW3ZwB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D8GHvaNd.js";import"./useFiles-Ytdky5Hv.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BvrGj6lw.js";import"./OrientationBanner-sM82NAko.js";import"./index-PKk5EXBg.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWc7b2d6.js";import"./FullWidthAlert-7J30yBJW.js";import"./Alert-hmr7wfmU.js";import"./useSlot-DTowZYmK.js";import"./createSvgIcon-f38UBJLB.js";import"./Close-D1h61jvu.js";import"./IconButton-Fk4Arnlo.js";import"./Paper-CSaS_LtD.js";import"./useTheme-DBbQI9Bm.js";import"./useTheme-C_FKhabr.js";import"./Stack-TVTnDTYt.js";import"./extendSxProp-Hv4lV8Tg.js";import"./getThemeProps-CkAWUzzO.js";import"./Box-DjbpKZYa.js";import"./AlertTitle-Cvh62KZ2.js";import"./Typography-JdajvCPL.js";import"./index-BJQxZ24D.js";import"./ClickAwayListener-BMiVrY6o.js";import"./getReactElementRef-ClsoyndM.js";import"./index-DccWBQxT.js";import"./index-Bz9la_Ps.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BdvToMBL.js";import"./Tooltip-gnrqUofF.js";import"./index-D_FH4jRZ.js";import"./useControlled-C38J99Bx.js";import"./Popper-DdzpQDYq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CFSsiuvI.js";import"./QueryClientProvider-C_eZcWnv.js";import"./Link-DiZXY41K.js";import"./Collapse-D_i_VT8D.js";import"./_baseUniq-r7kFe03V.js";import"./_Uint8Array-DrM4e6d9.js";import"./isArray-Dtug4Rbz.js";import"./_getTag-DRAoyJQF.js";import"./isEqual-q--4FWoE.js";import"./merge-BsrvAOvL.js";import"./_initCloneObject-DywWhWXb.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeOmrxWv.js";import"./inputBaseClasses-BsQd-fon.js";import"./calculateFriendlyFileSize-t35g4o3Y.js";import"./CheckCircleTwoTone-D4mD-KKk.js";import"./InfoTwoTone-C665QxZD.js";import"./useMutation-kQiGHfGp.js";import"./dayjs.min-BQ8GbnsT.js";import"./chunk-AYJ5UCUI-LyUcZO-_.js";import"./cloneDeep-C3HSA2al.js";import"./Skeleton-CpyiCVdu.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C5eILzYJ.js";import"./Backdrop-BJUJlSpk.js";import"./LinearProgress-Btch1yNj.js";import"./index-DZVGOqJF.js";import"./index-2rAn9i-Z.js";import"./index-CNvvoQpc.js";import"./const-BP60AzNb.js";import"./index-gDjowQHm.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
