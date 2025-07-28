import{U as L}from"./UpsetPlot-D8ZPsCGS.js";import{f as u}from"./index-DHmyDj1j.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BQM2BSYc.js";import"./DefaultPropsProvider-B_VgrtAI.js";import"./createTheme-CL5O40df.js";import"./index-XG5sbf9b.js";import"./iframe-qFD8nqts.js";import"./Button-Cst65raA.js";import"./createSimplePaletteValueFilter-jaDrmtVN.js";import"./useTimeout-CEvFcyFR.js";import"./ButtonBase-D_f60ltm.js";import"./useForkRef-BkWb3Bhw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bw3WO2f6.js";import"./useFiles-z1MHZNSL.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CR9qI-xP.js";import"./OrientationBanner-B5R6fvdW.js";import"./index-_GFMmKr-.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLDuIjUE.js";import"./FullWidthAlert-DMECBCQO.js";import"./Alert-hxk4zjd6.js";import"./useSlot-ah-OQE7U.js";import"./createSvgIcon-BTGwyJ8U.js";import"./Close-DhExsJ9Z.js";import"./IconButton-CSSOBqV1.js";import"./Paper-5jXXj0om.js";import"./useTheme-DbYeEOwq.js";import"./useTheme-BUZNi25v.js";import"./Stack-ClO0FTtf.js";import"./extendSxProp-DJY5gp9P.js";import"./getThemeProps-Be0_lWbe.js";import"./Box-BHPAI8Dk.js";import"./AlertTitle-C6WYnRSa.js";import"./Typography-_79tBCH0.js";import"./index-CUTYAgAO.js";import"./ClickAwayListener-FcTr-ZLV.js";import"./getReactElementRef-D0GAhzXw.js";import"./index-DJ7DzT1r.js";import"./index-DZQvlNat.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B_NR2UdL.js";import"./Tooltip-Bfuq8wwc.js";import"./index-HJYw8IqF.js";import"./useControlled-Dyr3uPEA.js";import"./Popper-Dl3EBVlK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Cya6FnXy.js";import"./QueryClientProvider-C1g9-9dT.js";import"./Link-CtLuER11.js";import"./Collapse-C_stbWYW.js";import"./_baseUniq-DRQhLs9v.js";import"./_Uint8Array-BPmsGsiG.js";import"./isArray-CPa3KvEr.js";import"./_getTag-6HlkFh44.js";import"./isEqual-BXYcf22t.js";import"./merge-WJTUE9lW.js";import"./_initCloneObject-DgyEjv2T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaS-DLax.js";import"./inputBaseClasses-C0GfGsq3.js";import"./calculateFriendlyFileSize-DacKmnyz.js";import"./CheckCircleTwoTone-BMjik1gi.js";import"./InfoTwoTone-pzAvwEnn.js";import"./useMutation-AwpnfHof.js";import"./dayjs.min-CTeHcnz6.js";import"./chunk-AYJ5UCUI-GWcfwrLC.js";import"./cloneDeep-B6Q9TQz2.js";import"./Skeleton-DSZfLQvh.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BTpGn455.js";import"./Backdrop-BGCmm_19.js";import"./LinearProgress-D_fuzGRu.js";import"./index-By0tw-P7.js";import"./index-CguZVPcZ.js";import"./index-BiOhGYpg.js";import"./const-BP60AzNb.js";import"./index-DM_Loazl.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
