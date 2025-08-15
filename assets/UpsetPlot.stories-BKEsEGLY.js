import{U as L}from"./UpsetPlot-DY6t33xn.js";import{f as u}from"./index-BT0Hd89_.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CU6vkYgU.js";import"./DefaultPropsProvider-B4sMSs5c.js";import"./createTheme-BimHb0uq.js";import"./index-BrHPMy4K.js";import"./iframe-qrHI0h7x.js";import"./Button-hgfOZiyo.js";import"./createSimplePaletteValueFilter-DtA1pzc_.js";import"./useTimeout-DvUZi0R7.js";import"./ButtonBase-DbOfy-z6.js";import"./useForkRef-DPev0BVR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-qScjADK-.js";import"./useFiles-BEpxB6wu.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BZvqbuoI.js";import"./OrientationBanner-B37kz2yW.js";import"./index-BH0fVqdH.js";import"./spreadSx-CwcO6WA9.js";import"./react-C72zAT-6.js";import"./FullWidthAlert-BE613Qbw.js";import"./Alert-1njaMFSc.js";import"./useSlot-DQts-esW.js";import"./createSvgIcon-DuozVLQO.js";import"./Close-CWGJC7jb.js";import"./IconButton-U1OcyH7k.js";import"./Paper-DbuMeV7N.js";import"./useTheme-BxS3S2OH.js";import"./useTheme-C7_v5rs1.js";import"./Stack-Cdib1l_P.js";import"./extendSxProp-Dxh_u9LX.js";import"./getThemeProps-Cshv05Q5.js";import"./Box--Gvn6t5i.js";import"./AlertTitle-CNf8Z2JO.js";import"./Typography-C4cWgMpl.js";import"./index-3sAcmN1l.js";import"./ClickAwayListener-WtnAjSsu.js";import"./getReactElementRef-CpNJ5z4l.js";import"./index-Cy7CbgXS.js";import"./index-Ckhh3aWL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bz3F_Qo2.js";import"./Tooltip-Dpzta8iD.js";import"./index-CUEjAwPx.js";import"./useControlled-CPhxYaZP.js";import"./Popper-D002JOTh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BP6M6Cd4.js";import"./QueryClientProvider-D06onMpx.js";import"./Link-CvxDprLk.js";import"./Collapse-Cj8gEvHg.js";import"./_baseUniq-BWVA3qID.js";import"./_Uint8Array-C3Qj-RGn.js";import"./isArray-DaAhqe6C.js";import"./_getTag-C9KNG0BL.js";import"./isEqual-f_9b43M7.js";import"./merge-CA9OcUH8.js";import"./_initCloneObject-BBLX1zeK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DuX_F-VJ.js";import"./inputBaseClasses-CsFwKpFX.js";import"./calculateFriendlyFileSize-SOAJozYQ.js";import"./CheckCircleTwoTone-BqOhFIZl.js";import"./InfoTwoTone-ClrjaOuk.js";import"./useMutation-BSC2zSvv.js";import"./dayjs.min-_IVa7_Ho.js";import"./chunk-AYJ5UCUI-Z0yw1ngK.js";import"./cloneDeep-B4VfFNAV.js";import"./Skeleton-C1ctsk_q.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CGbMyKnz.js";import"./Backdrop-B4p7SEa5.js";import"./LinearProgress-DueqCsHC.js";import"./index-DFt0er0F.js";import"./index-DQ6XlCJe.js";import"./index-DGcNeuFP.js";import"./const-BP60AzNb.js";import"./index-2QW2KrAs.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
