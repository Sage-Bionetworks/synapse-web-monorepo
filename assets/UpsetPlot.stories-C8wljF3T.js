import{U as L}from"./UpsetPlot-O4jlDR3d.js";import{f as u}from"./index-uNTiuXdo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BNMYrM6c.js";import"./DefaultPropsProvider-BYMwOOeu.js";import"./createTheme-DCfJyqXD.js";import"./index-BI5lQOsu.js";import"./iframe-Bh992iam.js";import"./Button-BFyoJlXb.js";import"./createSimplePaletteValueFilter-Bd9oOxX0.js";import"./useTimeout-Ca45XijG.js";import"./ButtonBase-DnUof1w4.js";import"./useForkRef-DAOZ23j2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DkDa1NGx.js";import"./useFiles-BI7PLl8w.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-Bh0ooQxO.js";import"./OrientationBanner-35DwZATM.js";import"./index-FM-5jib5.js";import"./spreadSx-CwcO6WA9.js";import"./react-OMVIaA_-.js";import"./FullWidthAlert-DYlV_lj8.js";import"./Alert-CSMrm0RL.js";import"./useSlot-F7y2gpDj.js";import"./createSvgIcon-SJuMpeuT.js";import"./Close-smqNtMz1.js";import"./IconButton-BCLck6uA.js";import"./Paper-GEfitkMs.js";import"./useTheme-oX98t7df.js";import"./useTheme-CCVugcwa.js";import"./Stack-GuEyk8LE.js";import"./extendSxProp-DJ2y7QTv.js";import"./getThemeProps-C1QTpv83.js";import"./Box-pSBGXNvB.js";import"./AlertTitle-VnVGY_MP.js";import"./Typography-Y4Fx5F_G.js";import"./index-C4bo6hUO.js";import"./ClickAwayListener-BBaWZo9D.js";import"./getReactElementRef-D9oPioMP.js";import"./index-CFUDUs03.js";import"./index-B26qpHd_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIJaZVy9.js";import"./Tooltip-BsozqXdX.js";import"./index-D2NSnX6k.js";import"./useControlled-DkznNG6r.js";import"./Popper-BxbtDxmn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-oeDnacJk.js";import"./QueryClientProvider-DcA49eyX.js";import"./Link-vLahYdB5.js";import"./Collapse-BKp_c0SL.js";import"./_baseUniq-BIfjH-XX.js";import"./_Uint8Array-BgUaH4Y0.js";import"./isArray-qN4X7jQ5.js";import"./_getTag-aJdxkrP6.js";import"./isEqual-D_Pln4BK.js";import"./merge-C8OUjJCU.js";import"./_initCloneObject-DRShmAf3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-xWe4npSh.js";import"./inputBaseClasses-D4AFzInG.js";import"./calculateFriendlyFileSize-ofeU2shc.js";import"./CheckCircleTwoTone-Cedrn3d2.js";import"./InfoTwoTone-DPXhSbpu.js";import"./useMutation-DutVxwog.js";import"./dayjs.min-BO-A9L92.js";import"./chunk-AYJ5UCUI-DnbrDPKC.js";import"./cloneDeep-BWho0j_J.js";import"./Skeleton-DnQq6Znq.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CUreOsba.js";import"./Backdrop-BYpgm1Gt.js";import"./LinearProgress-BjOUUv09.js";import"./index-Cwib04yC.js";import"./index-DHKom03y.js";import"./index-CYYb8GRu.js";import"./const-BP60AzNb.js";import"./index-Bc-36RaI.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
