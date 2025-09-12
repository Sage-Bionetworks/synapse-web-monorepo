import{U as L}from"./UpsetPlot-Ck-GZDVm.js";import{f as u}from"./index-xPpwwTRq.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C4q3Wz2w.js";import"./DefaultPropsProvider-E91GGLqj.js";import"./createTheme-B8QSyZvJ.js";import"./index-CfbPO5Pk.js";import"./iframe-B73v8h_Y.js";import"./Button-CaVEglZt.js";import"./createSimplePaletteValueFilter-DMZZiVpQ.js";import"./useTimeout-CngDlYNI.js";import"./ButtonBase-EQYK4HG0.js";import"./useForkRef-CNGHG2sd.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx-LJEp.js";import"./useFiles-Da5SPf30.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-BgpCwDFe.js";import"./OrientationBanner-BwAbfTIw.js";import"./index-Bi4am7_a.js";import"./spreadSx-CwcO6WA9.js";import"./react-Czvs3lpM.js";import"./FullWidthAlert-BxCHPgi_.js";import"./Alert-Cy2iyRT_.js";import"./useSlot-DbF0H-M6.js";import"./createSvgIcon-B4oujve6.js";import"./Close-DnuW4VP0.js";import"./IconButton-CNjLAA-N.js";import"./Paper-DWy9BGA0.js";import"./useTheme-5tq7elWw.js";import"./useTheme-kqh4Ll_I.js";import"./Stack-IvFAcYq_.js";import"./extendSxProp-BASXjWDU.js";import"./getThemeProps-CxBOemI1.js";import"./Box-C_8woQ6t.js";import"./AlertTitle-C2IYM2mb.js";import"./Typography-C496KcFS.js";import"./index-D_tds8oQ.js";import"./ClickAwayListener-bWEbtpgx.js";import"./getReactElementRef-DqYwo8-I.js";import"./index-C1mw4Gna.js";import"./index-9kSQh7S9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1A1uLTzL.js";import"./Tooltip-Buh_A6A3.js";import"./index-B8TmctUz.js";import"./useControlled-BTQkJmVV.js";import"./Popper-B67Zc9vL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-CT4vRpQZ.js";import"./QueryClientProvider-CSQ7Q6Lo.js";import"./Link-Dv4MSEKL.js";import"./Collapse-CL5HS0jI.js";import"./_baseUniq-C6brxGBX.js";import"./_Uint8Array-Q8PrWGYm.js";import"./isArray-B0jnOaQA.js";import"./_getTag-DMlxnM4P.js";import"./isEqual-B1KvTqBz.js";import"./merge-BUbT27GX.js";import"./_initCloneObject-BKnpaPkf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbU8Qxyz.js";import"./inputBaseClasses-Cb6yvEHg.js";import"./calculateFriendlyFileSize-CqNpoUvN.js";import"./CheckCircleTwoTone-BjY5vWtN.js";import"./InfoTwoTone-zu4DaVNs.js";import"./useMutation--SOUpC1Y.js";import"./dayjs.min-1XIHbNiY.js";import"./chunk-AYJ5UCUI-DgOYknd8.js";import"./cloneDeep-CfavtHgN.js";import"./Skeleton-DfHSJENk.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ds0Ndjy1.js";import"./Backdrop-v_o-1lmK.js";import"./LinearProgress-BmflieLR.js";import"./index-BlJSjPgP.js";import"./index-BYWbsAYf.js";import"./index-CjVwrYXp.js";import"./const-BP60AzNb.js";import"./index-BDVO8vvY.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
