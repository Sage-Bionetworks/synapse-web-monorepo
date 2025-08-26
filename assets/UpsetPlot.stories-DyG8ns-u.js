import{U as L}from"./UpsetPlot-BPc4_5oA.js";import{f as u}from"./index-DyFYZ7Et.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CK4efmnw.js";import"./DefaultPropsProvider-DpCpUutu.js";import"./createTheme-B3oloupt.js";import"./index-Cwo7W8Q3.js";import"./iframe-BtEoy5Pi.js";import"./Button-CEhhBQoQ.js";import"./createSimplePaletteValueFilter-BdVFfA6R.js";import"./useTimeout-CubXWxzm.js";import"./ButtonBase-zX45zIy8.js";import"./useForkRef-Bpui_Rog.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DpVN9MSn.js";import"./useFiles-CiH3RjAX.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-Dgm-hl2F.js";import"./OrientationBanner-C5RkxOxO.js";import"./index-CYkyUI0D.js";import"./spreadSx-CwcO6WA9.js";import"./react-DINmqar4.js";import"./FullWidthAlert-VQ26Wohr.js";import"./Alert-CgZUdEqv.js";import"./useSlot-mvKG6Wgh.js";import"./createSvgIcon-rlX8m3bd.js";import"./Close-COYMWJeW.js";import"./IconButton-Dtr_Byk4.js";import"./Paper-CFj-iwzR.js";import"./useTheme-BplOPChe.js";import"./useTheme-QJ-q2rrh.js";import"./Stack-DxloL_Pr.js";import"./extendSxProp-CnnbPdZl.js";import"./getThemeProps-Cq16S1xU.js";import"./Box-DidoKigV.js";import"./AlertTitle-DUAUDP9r.js";import"./Typography-iLYEzmu9.js";import"./index-BmkogvA6.js";import"./ClickAwayListener-KmNvIbDM.js";import"./getReactElementRef-ButuhwgZ.js";import"./index-v-nvGdj1.js";import"./index-BN3chRwR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dl0KNxbG.js";import"./Tooltip-CKZvCezQ.js";import"./index-Bd9SP0or.js";import"./useControlled-z9k1lOAa.js";import"./Popper-DcSxBs27.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-BCuPd4te.js";import"./QueryClientProvider-Di2vdjqh.js";import"./Link--7vwFeSR.js";import"./Collapse-Cw63Bxtw.js";import"./_baseUniq-lS6Hau16.js";import"./_Uint8Array-CmcRwmUk.js";import"./isArray-CnKdinKf.js";import"./_getTag-azHmxwvU.js";import"./isEqual-BDen11ft.js";import"./merge-Bz19LOV8.js";import"./_initCloneObject-BMJ-50ps.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9sFZx16.js";import"./inputBaseClasses-CQzdIqXJ.js";import"./calculateFriendlyFileSize-CgweHd8h.js";import"./CheckCircleTwoTone-DqiaR3hR.js";import"./InfoTwoTone-sx2IvFci.js";import"./useMutation-7jNvOIUs.js";import"./dayjs.min-C4CfR9Mw.js";import"./chunk-AYJ5UCUI-DAxvSOK2.js";import"./cloneDeep-h4gs_ZpB.js";import"./Skeleton-CCoTHJKu.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C4VXWt8R.js";import"./Backdrop-CVWLzBCE.js";import"./LinearProgress-D-GP8HJP.js";import"./index-BaPuKZaf.js";import"./index-CcfkGDVY.js";import"./index-DCdtkjB5.js";import"./const-BP60AzNb.js";import"./index-CEAi8m3v.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
