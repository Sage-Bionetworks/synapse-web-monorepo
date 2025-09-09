import{U as L}from"./UpsetPlot-CTcN2tcW.js";import{f as u}from"./index-DZkza8Ue.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DgZkmXdq.js";import"./DefaultPropsProvider-CcfTARJV.js";import"./createTheme-D7EPNL7b.js";import"./index-De1Zq6J_.js";import"./iframe-E8oGcv1j.js";import"./Button-D-bx5MZt.js";import"./createSimplePaletteValueFilter-BqHZsxiX.js";import"./useTimeout-Dv9ZmSsd.js";import"./ButtonBase-DX38kEaJ.js";import"./useForkRef-C6KDMbou.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6nvT1pK.js";import"./useFiles-CGW-jd1f.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BGT0B1ls.js";import"./OrientationBanner-BD5rKond.js";import"./index-CbaPxVoO.js";import"./spreadSx-CwcO6WA9.js";import"./react-u_1KPmwS.js";import"./FullWidthAlert-B3XOziTT.js";import"./Alert-aEGKfIxj.js";import"./useSlot-3tuE-c2M.js";import"./createSvgIcon-BFK5bQ8n.js";import"./Close-FdA3HKi-.js";import"./IconButton-BZ-jzTu8.js";import"./Paper-DtY-LtaX.js";import"./useTheme-xNbW70z-.js";import"./useTheme-BR8tto29.js";import"./Stack-BDxqZFkj.js";import"./extendSxProp-CRDkfaxY.js";import"./getThemeProps-CTXbjC0Y.js";import"./Box-CR3xkiF7.js";import"./AlertTitle-BUhA3yvl.js";import"./Typography-Dqy4KUKl.js";import"./index-vnh1qUaf.js";import"./ClickAwayListener-BFmT95cs.js";import"./getReactElementRef-z7kCRJG8.js";import"./index-DYa4EW63.js";import"./index-C8LquKll.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-eiV7889k.js";import"./Tooltip-DU9LrmZk.js";import"./index-E7O__Phm.js";import"./useControlled-DMRUVe0w.js";import"./Popper-CcioxHhD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DALRboo3.js";import"./QueryClientProvider-FUbP8408.js";import"./Link-DvLvJsbQ.js";import"./Collapse-CcwUCllw.js";import"./_baseUniq-CXI3CQZE.js";import"./_Uint8Array-Bpe28QCt.js";import"./isArray-DKCXyRjL.js";import"./_getTag-DSOAbaVw.js";import"./isEqual-Dg8dgpub.js";import"./merge-DckDRy64.js";import"./_initCloneObject-oQqNGLLJ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DY8MnK-W.js";import"./inputBaseClasses-BoUH4D83.js";import"./calculateFriendlyFileSize-DQKz6tFX.js";import"./CheckCircleTwoTone-D_cE2H8y.js";import"./InfoTwoTone-DH56TLJq.js";import"./useMutation-BX9VoBnj.js";import"./dayjs.min-D6shjXWv.js";import"./chunk-AYJ5UCUI-Qk_pfhhj.js";import"./cloneDeep-DuWLqYh-.js";import"./Skeleton-BAzE4-tl.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CWZqWQcA.js";import"./Backdrop-DMp4Gfye.js";import"./LinearProgress-CN5v7180.js";import"./index-CIywBigz.js";import"./index-CIynBSDY.js";import"./index-CT_t3Q6U.js";import"./const-BP60AzNb.js";import"./index-DqmKFzqA.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
