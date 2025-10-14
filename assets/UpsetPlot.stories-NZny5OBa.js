import{U as L}from"./UpsetPlot-KHFE5tqi.js";import{f as u}from"./index-iPO0ByHx.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Boa59lHZ.js";import"./DefaultPropsProvider-D79KYO17.js";import"./createTheme-D6vtmGls.js";import"./index-DYU4zQP4.js";import"./iframe-Dzw5MRYT.js";import"./Button-BzugqlFq.js";import"./createSimplePaletteValueFilter-DiVtTFlb.js";import"./useTimeout-DSZInHOh.js";import"./ButtonBase-Cu3m8cFt.js";import"./useForkRef-B_b-SuM8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N97qRnH8.js";import"./useFiles-Cgzy-UOs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BDAc_b3v.js";import"./OrientationBanner-B-ePgMgA.js";import"./index-gmBK_iDy.js";import"./spreadSx-CwcO6WA9.js";import"./react-vlrGuRz8.js";import"./FullWidthAlert-DHE2a9_E.js";import"./Alert-DCImWyvQ.js";import"./useSlot-BgeUbv5P.js";import"./createSvgIcon-CJq3GPug.js";import"./Close-ENGBsyeS.js";import"./IconButton-Do5oKPlN.js";import"./Paper-BzOGyJwo.js";import"./useTheme-B6btaWkK.js";import"./useTheme-jKwAIb8E.js";import"./Stack-DTY49AsT.js";import"./useThemeProps-BwYz91DR.js";import"./getThemeProps-DTKeK2V7.js";import"./extendSxProp-jOxRgKts.js";import"./Box-39RMP0Tq.js";import"./AlertTitle-wUZCnToq.js";import"./Typography-D_DaiChI.js";import"./index-Dar7vQJe.js";import"./ClickAwayListener-BnxSEmfx.js";import"./getReactElementRef-ae5BIBIv.js";import"./index-DLMJWAwA.js";import"./index-Q7xPuOjn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DMQBUM0r.js";import"./Tooltip-B8bILZi4.js";import"./index-B6fN69mf.js";import"./useControlled-DdNq8r6Y.js";import"./Popper-tgLzwkuw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-E5rXX0Vh.js";import"./QueryClientProvider-CSdz-HYV.js";import"./Link-DK5p9S4e.js";import"./Collapse-Db_2nbsu.js";import"./_baseUniq-CBD_yH4a.js";import"./_Uint8Array-TncfCM6A.js";import"./isArray-C9PAhTKa.js";import"./_getTag-bNxNCrK-.js";import"./isEqual-DDB_N-aI.js";import"./noop-DX6rZLP_.js";import"./merge-DNRE-STY.js";import"./_initCloneObject-c2L5_zs5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Sl0_f7QX.js";import"./inputBaseClasses-snNCF3aG.js";import"./calculateFriendlyFileSize-DlLZ7LPJ.js";import"./CheckCircleTwoTone-OWQRjOdu.js";import"./InfoTwoTone-8gb8-LI8.js";import"./useMutation-LE6k3MXY.js";import"./dayjs.min-cfMBjx7E.js";import"./chunk-AYJ5UCUI-CRYqNbdW.js";import"./cloneDeep-BLVmDque.js";import"./Skeleton-yhG155b8.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-5dV0-KWf.js";import"./Backdrop-CIlG7ePs.js";import"./LinearProgress-CFkLgso2.js";import"./index-VpXSL9Yq.js";import"./index-BW4nvg8e.js";import"./index-i-adfK-w.js";import"./const-BP60AzNb.js";import"./index-C87De7eR.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
