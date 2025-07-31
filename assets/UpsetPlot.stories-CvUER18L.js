import{U as L}from"./UpsetPlot-D17jme1D.js";import{f as u}from"./index-C_ZJq6cH.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DtfqMv9I.js";import"./DefaultPropsProvider-DWBDe1UB.js";import"./createTheme-D-2HkHFH.js";import"./index-i-LsgLSA.js";import"./iframe-GbghtqWq.js";import"./Button-CgyCstS0.js";import"./createSimplePaletteValueFilter-D9pZOYY9.js";import"./useTimeout-DVbcAnZQ.js";import"./ButtonBase-CZ5UGkYU.js";import"./useForkRef-FPH0YGQ2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C8ylk68i.js";import"./useFiles-Cv-n4XdS.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DWZtEJYD.js";import"./OrientationBanner-PRKENNck.js";import"./index-DLnwU0P8.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQ2GqOiU.js";import"./FullWidthAlert-CZ6uLaom.js";import"./Alert-BrZbLQm1.js";import"./useSlot-BGDSQ0fp.js";import"./createSvgIcon-CuLc2rjK.js";import"./Close-V1m8iud7.js";import"./IconButton-B84Nw0Nn.js";import"./Paper-DhD70JZd.js";import"./useTheme-GE2G-L2h.js";import"./useTheme-DSK3UIHS.js";import"./Stack--hoKvcLE.js";import"./extendSxProp-qcmHDY2j.js";import"./getThemeProps-BCcD_5VN.js";import"./Box-CXOEPfLM.js";import"./AlertTitle-BwlAqIBe.js";import"./Typography-J1V_cCp0.js";import"./index-B0vabjm1.js";import"./ClickAwayListener-BfigbZYF.js";import"./getReactElementRef-HfQqw9gT.js";import"./index-DdPFGp_D.js";import"./index-CWoMMRo_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DTKKxo97.js";import"./Tooltip-Do35XN0Z.js";import"./index-aH-ETJ6w.js";import"./useControlled-PLZvCxRY.js";import"./Popper-DrH6hsAF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DNW8nDMg.js";import"./QueryClientProvider-BtJasJ_4.js";import"./Link-6WbTuaOI.js";import"./Collapse-DL75-Ea6.js";import"./_baseUniq-D9fuWjAg.js";import"./_Uint8Array-DsugQWhS.js";import"./isArray-BBhiBobp.js";import"./_getTag-BRSENsW_.js";import"./isEqual-Db-5Z8rj.js";import"./merge-BrXdDQKY.js";import"./_initCloneObject-BklmEMA7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbfEBBHW.js";import"./inputBaseClasses-CurYI-Ex.js";import"./calculateFriendlyFileSize-DbXrz5U1.js";import"./CheckCircleTwoTone-CA9T2YPG.js";import"./InfoTwoTone-AfB5dL-U.js";import"./useMutation-B9F8EaIl.js";import"./dayjs.min-DUqdv7S6.js";import"./chunk-AYJ5UCUI-D3kxV_4N.js";import"./cloneDeep-DoETX66B.js";import"./Skeleton-C3z_WkLS.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BmThGkwk.js";import"./Backdrop-BClwGJFZ.js";import"./LinearProgress-DbckJvZq.js";import"./index-D7CSNy4Z.js";import"./index-xgR_jWsy.js";import"./index-CgPPjKH0.js";import"./const-BP60AzNb.js";import"./index-B6WCXqYY.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
