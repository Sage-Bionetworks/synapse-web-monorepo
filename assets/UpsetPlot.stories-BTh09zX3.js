import{U as L}from"./UpsetPlot-CYdXSEYc.js";import{f as u}from"./index-BYFYbG7D.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CyAKNVbN.js";import"./DefaultPropsProvider-ConE9Vnz.js";import"./createTheme-DW7Vrlzw.js";import"./index-Bx6rHiCc.js";import"./iframe-CmlFyz22.js";import"./Button-WSwqzpWb.js";import"./createSimplePaletteValueFilter-B4ekfyK6.js";import"./useTimeout-CVQUoJUi.js";import"./ButtonBase-DdvhFXiU.js";import"./useForkRef-Cvl4b66U.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuBYbEIJ.js";import"./useFiles-CBJ856AZ.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-ikhpTMSi.js";import"./OrientationBanner-Bevn196W.js";import"./index-CKUFoVF8.js";import"./spreadSx-CwcO6WA9.js";import"./react-BegF-bgY.js";import"./FullWidthAlert-BcJLpMsp.js";import"./Alert-BwcDOzUk.js";import"./useSlot-BSVMef9l.js";import"./createSvgIcon-Dp5r_z1b.js";import"./Close-D_HVX8Of.js";import"./IconButton-Dugf8IuD.js";import"./Paper-BOku699h.js";import"./useTheme-Z9lGwbET.js";import"./useTheme-C309Wcvj.js";import"./Stack-BjnY0P-K.js";import"./extendSxProp-D0JP_WBX.js";import"./getThemeProps-BXfajUm-.js";import"./Box-DvJ0ErCQ.js";import"./AlertTitle-B7zYsG91.js";import"./Typography-C6mIpVDc.js";import"./index-BK-imeYc.js";import"./ClickAwayListener-muvdENkP.js";import"./getReactElementRef-BKX2ZP_E.js";import"./index-DmUisdaW.js";import"./index-CqNaTZ9O.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-p1Rl7bOw.js";import"./Tooltip-DAC7ZfT2.js";import"./index-Cnxet5a5.js";import"./useControlled-DMcYHGA2.js";import"./Popper-DZo1fAVo.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DQjr7ojL.js";import"./QueryClientProvider-BsTfFufl.js";import"./Link-BHuJNOVj.js";import"./Collapse-YIUEr55v.js";import"./_baseUniq-BFKSe-s-.js";import"./_Uint8Array-eEAzFJ_P.js";import"./isArray-Cf6JBw9S.js";import"./_getTag-CWmy7owM.js";import"./isEqual-BCIIkq8x.js";import"./merge-DVgg1N05.js";import"./_initCloneObject-b_ydy7AP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-hyn8D1TG.js";import"./inputBaseClasses-Diynf-VS.js";import"./calculateFriendlyFileSize-Ydbps-9H.js";import"./CheckCircleTwoTone-CVHWRI0h.js";import"./InfoTwoTone-B5e9fPYt.js";import"./useMutation-BqdsOGtV.js";import"./dayjs.min-BisTLcGd.js";import"./chunk-AYJ5UCUI-B4H_lHh-.js";import"./cloneDeep-T5a5yhy5.js";import"./Skeleton-BBd8yoFk.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-bo_J_cds.js";import"./Backdrop-doXuoSyd.js";import"./LinearProgress-HkbW5Nae.js";import"./index-Bm3AXbKc.js";import"./index-Bvht7Frd.js";import"./index-B95IiYhG.js";import"./const-BP60AzNb.js";import"./index-Dw_JSvdh.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
