import{U as L}from"./UpsetPlot-CwyB14JC.js";import{f as u}from"./index-DnItX6xA.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BPQums2a.js";import"./DefaultPropsProvider-5BuMuhNk.js";import"./createTheme-Barucc3o.js";import"./index-DiBgT_g4.js";import"./iframe-uFLftcIy.js";import"./Button-CmYxHs1i.js";import"./createSimplePaletteValueFilter-Dxo_mhWY.js";import"./useTimeout-Cg8KvPgb.js";import"./ButtonBase-CtFWPYLG.js";import"./useForkRef-D3B4tP8D.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BbzGW1mt.js";import"./useFiles-D6LCpGCY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CYqjdTgk.js";import"./OrientationBanner-C9Jr3Oy3.js";import"./index-BoYeThVs.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiKiA-Iy.js";import"./FullWidthAlert-gNyb5TrV.js";import"./Alert-DHjgiXNM.js";import"./useSlot-BnoEaNVP.js";import"./createSvgIcon-DiCPcpir.js";import"./Close-0lTZq7IP.js";import"./IconButton-D3dEJ89e.js";import"./Paper-DdBQwrgv.js";import"./useTheme-Dk4dRd2j.js";import"./useTheme-BxqvYw5-.js";import"./Stack-YRUIF5uW.js";import"./useThemeProps-D_Baxmlh.js";import"./getThemeProps-Di5KybE1.js";import"./extendSxProp-B2jc7Sfx.js";import"./Box-B47wL6Kg.js";import"./AlertTitle-DfF1mpAn.js";import"./Typography-0IkQ6ATH.js";import"./index-B74TbmPh.js";import"./ClickAwayListener-luk8cFos.js";import"./getReactElementRef-DE7AlBDu.js";import"./index-BVru8Zw3.js";import"./index-CMfiAwEf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7s8RAlS.js";import"./Tooltip-DMolmanq.js";import"./index-aEYNMko0.js";import"./useControlled-CqW2zA2Q.js";import"./Popper-JK9tjrQY.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Bc5xDMAa.js";import"./QueryClientProvider-D9x5ThDG.js";import"./Link-Cch9Vp4a.js";import"./Collapse-BjlYt1Tn.js";import"./_baseUniq-D003bh-f.js";import"./_Uint8Array-BhbFImZZ.js";import"./isArray-BITIQEug.js";import"./_getTag-bbVfyQ26.js";import"./isEqual-_y4wzV7I.js";import"./noop-DX6rZLP_.js";import"./merge--RN6qcSW.js";import"./_initCloneObject-CNpKwYnX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CySYR3x4.js";import"./inputBaseClasses-DM-InByo.js";import"./calculateFriendlyFileSize-BRfNISFB.js";import"./CheckCircleTwoTone-Cijhq7EN.js";import"./InfoTwoTone-DQS0zO3D.js";import"./useMutation-CKcr9VY9.js";import"./dayjs.min-CgJX-n-a.js";import"./chunk-AYJ5UCUI-C-W-DLcN.js";import"./cloneDeep-DG3WHv99.js";import"./Skeleton-CN97u2Kc.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BCdGsqjQ.js";import"./Backdrop-DPRmvrcJ.js";import"./LinearProgress-BOIvfn_z.js";import"./index-BUkoqGH5.js";import"./index-BFCqK1DB.js";import"./index-BBZS6gZ8.js";import"./const-BP60AzNb.js";import"./index-C5rGvfIl.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
