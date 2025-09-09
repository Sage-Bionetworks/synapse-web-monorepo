import{U as L}from"./UpsetPlot-C93NEDmu.js";import{f as u}from"./index-Blb5G9nf.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CNH-DKe1.js";import"./DefaultPropsProvider-BnDOUeJq.js";import"./createTheme-CgsFvkwA.js";import"./index-DJB1qF2z.js";import"./iframe-c5QjURjd.js";import"./Button-DWZzM1YQ.js";import"./createSimplePaletteValueFilter-DGGr4raR.js";import"./useTimeout-DgY8E2MB.js";import"./ButtonBase-R1zAEHht.js";import"./useForkRef-fM2IrCKB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF87QtHc.js";import"./useFiles-mkQvhsfp.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BE1dCm6q.js";import"./OrientationBanner-ByfGCVhh.js";import"./index-CuiiqCn7.js";import"./spreadSx-CwcO6WA9.js";import"./react-BBKcbch5.js";import"./FullWidthAlert-CAacvDiW.js";import"./Alert-D3J6MamD.js";import"./useSlot-BJ1CRAdA.js";import"./createSvgIcon-D0F9NJty.js";import"./Close-CD6hdFxs.js";import"./IconButton-D9Wo9i95.js";import"./Paper-f9F1rBkl.js";import"./useTheme-D2vwtQz8.js";import"./useTheme-DouzHGjt.js";import"./Stack-YMNswqAL.js";import"./extendSxProp-BTTcXXOw.js";import"./getThemeProps-CElrGHOX.js";import"./Box-B2zh_4B1.js";import"./AlertTitle-N6XY5bvj.js";import"./Typography-u2K4Np03.js";import"./index-KdogHW2F.js";import"./ClickAwayListener-DLQRhqqv.js";import"./getReactElementRef-hSa5zvl9.js";import"./index-DSCMbWyT.js";import"./index-VaRDmsAV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BuzsStj7.js";import"./Tooltip-DJ_zQ3Xt.js";import"./index-BFJo53wU.js";import"./useControlled-DM7TiFWR.js";import"./Popper-BpGY4_Yk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CuGZc_4o.js";import"./QueryClientProvider-BpXWIHcQ.js";import"./Link-B1acHzcw.js";import"./Collapse-DdpJ9wk5.js";import"./_baseUniq-B0jgxF2n.js";import"./_Uint8Array-CbO669vH.js";import"./isArray-BQlUsOuq.js";import"./_getTag-C3oiTjc9.js";import"./isEqual-CHbIB85-.js";import"./merge-Ovpzi0cD.js";import"./_initCloneObject-DpqlTgho.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-4pjdx6uQ.js";import"./inputBaseClasses-BU9UMIzD.js";import"./calculateFriendlyFileSize-p0rEqxiA.js";import"./CheckCircleTwoTone-C5JDYzCA.js";import"./InfoTwoTone-VMAFVZ4G.js";import"./useMutation-DGzs3t2j.js";import"./dayjs.min-DGLiMftP.js";import"./chunk-AYJ5UCUI-Dcahf3fb.js";import"./cloneDeep-DJFF_FoF.js";import"./Skeleton-BV5yBlWE.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-8nWdHYFo.js";import"./Backdrop-CLYwWN5c.js";import"./LinearProgress-BmsF2Bv6.js";import"./index-DwhuioOr.js";import"./index-D_UeTUQa.js";import"./index-Coov_Qsw.js";import"./const-BP60AzNb.js";import"./index-DZw__HYg.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
