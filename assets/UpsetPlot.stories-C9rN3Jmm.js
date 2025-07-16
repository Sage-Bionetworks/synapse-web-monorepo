import{U as L}from"./UpsetPlot-VrfjwTj1.js";import{f as u}from"./index-3j4ysGVX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-MBdPOY60.js";import"./DefaultPropsProvider-CK6jGk8n.js";import"./createTheme-BM6fbPkX.js";import"./index-BEGWa4Ry.js";import"./iframe-DyziNYtI.js";import"./Button-Bm7TX8g7.js";import"./createSimplePaletteValueFilter-Cqt07efk.js";import"./useTimeout-C7hmtoO8.js";import"./ButtonBase-DPguynie.js";import"./useForkRef-rtjTJNVt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cx7QuPxc.js";import"./useFiles-aCWSWAso.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-jp9wKPpM.js";import"./OrientationBanner-C49NGLZB.js";import"./index-BU-W081Q.js";import"./spreadSx-CwcO6WA9.js";import"./react-BO9w5j8-.js";import"./FullWidthAlert-DPQosDtk.js";import"./Alert-BgSDO_88.js";import"./useSlot-D4d0cObk.js";import"./createSvgIcon-CLX4lN_X.js";import"./Close-DI4ggW3U.js";import"./IconButton-DI9Lqt7W.js";import"./Paper-DMerpT3E.js";import"./useTheme-BX3uBi8F.js";import"./useTheme-BtstI9CD.js";import"./Stack-B9UHdYg2.js";import"./extendSxProp-D5ioQJNi.js";import"./getThemeProps-DRRoKzoY.js";import"./Box-1I6cI6xH.js";import"./AlertTitle-BcvN8c9u.js";import"./Typography-CAQW-NY6.js";import"./index-DpaVPSjM.js";import"./ClickAwayListener-DnDphmHD.js";import"./getReactElementRef-CGMID2A4.js";import"./index-TnCwIfHJ.js";import"./index-BrKdSJVb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B0BswoU1.js";import"./Tooltip-CeUgYBIY.js";import"./index-DuvbZtD4.js";import"./useControlled-B4F25ITx.js";import"./Popper-DIUp_XDc.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CrfcJEr9.js";import"./QueryClientProvider-CjzIIn97.js";import"./Link-BPQKUItY.js";import"./Collapse-C8VtV78A.js";import"./_baseUniq-BZsY9y5z.js";import"./_Uint8Array-Di1ErWmf.js";import"./isArray-DY1dXgd_.js";import"./_getTag-b7Wmg8Vg.js";import"./isEqual-QY0Osar5.js";import"./merge-CM4560gQ.js";import"./_initCloneObject-D9hrF7uQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CL16HPzw.js";import"./inputBaseClasses-4fn_2VUd.js";import"./calculateFriendlyFileSize-NAMpL0_1.js";import"./CheckCircleTwoTone-BmF3aIaq.js";import"./InfoTwoTone-hEunn01X.js";import"./useMutation-D-mNA99o.js";import"./dayjs.min-IVvGcfpj.js";import"./chunk-AYJ5UCUI-Bxws8eAT.js";import"./cloneDeep-yvwKT0iA.js";import"./Skeleton-CcyMcWkv.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C1G91K9X.js";import"./Backdrop-CiNHDYV2.js";import"./LinearProgress-Dw-gjgoN.js";import"./index-C8obSSZ_.js";import"./index-B0ALUF6d.js";import"./index-BNCtyCrV.js";import"./const-BP60AzNb.js";import"./index-Bo4o6XMD.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
