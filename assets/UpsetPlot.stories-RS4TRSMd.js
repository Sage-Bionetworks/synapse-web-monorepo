import{U as L}from"./UpsetPlot-BxXUkDDD.js";import{f as u}from"./index-CyIGd8mw.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DwOeTGlU.js";import"./DefaultPropsProvider-CtKJNfPj.js";import"./createTheme-DetxTjb2.js";import"./index-9TTcYVc_.js";import"./iframe-Czx5Dmi0.js";import"./Button-DkW-IEcU.js";import"./createSimplePaletteValueFilter-CXnjF6Zs.js";import"./useTimeout-DYRa_dr8.js";import"./ButtonBase-BWgIRray.js";import"./useForkRef-C7pV92fh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIiahqiB.js";import"./useFiles-WZRtSsNc.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-BLM21pa-.js";import"./OrientationBanner-ElxnVDle.js";import"./index-7bLOgSTC.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlmncmcU.js";import"./FullWidthAlert-CsPgeHuk.js";import"./Alert-mrkBi6in.js";import"./useSlot-Tf7QcJnO.js";import"./createSvgIcon-C0ZSoRRV.js";import"./Close-NwpORwlT.js";import"./IconButton-BZkY5H-N.js";import"./Paper-CbcZq6PP.js";import"./useTheme-DZOGkB3v.js";import"./useTheme-DM1dQSDI.js";import"./Stack-2ox-Ad0l.js";import"./extendSxProp-Dj0Tb7v9.js";import"./getThemeProps-CdZnDORy.js";import"./Box-Dy5ekAQq.js";import"./AlertTitle-B5c08fVM.js";import"./Typography-C1hk1xps.js";import"./index-BMbKnGiz.js";import"./ClickAwayListener-Cmw51NWg.js";import"./getReactElementRef-BVzUeeGA.js";import"./index-Bn2Fmzct.js";import"./index-ZL7ET78i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-seWSR3vl.js";import"./Tooltip-5yyA0MtP.js";import"./index-DmTgUWkb.js";import"./useControlled-B5jxCiTd.js";import"./Popper-OxILuenQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-GFI84f-6.js";import"./QueryClientProvider-CybjnCa8.js";import"./Link-5MArhe6M.js";import"./Collapse-_N5J_E3C.js";import"./_baseUniq-CzQc4vO5.js";import"./_Uint8Array-CZXWf0wa.js";import"./isArray-wv-qry3w.js";import"./_getTag-B1_q1IMX.js";import"./isEqual-BeKpR506.js";import"./merge-BkX_m9ug.js";import"./_initCloneObject-BZbm0-zy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DV6rNrzp.js";import"./inputBaseClasses-D2LWFDZ3.js";import"./calculateFriendlyFileSize-CA8SV0xk.js";import"./CheckCircleTwoTone-B4xc24bl.js";import"./InfoTwoTone-D7N4NCht.js";import"./useMutation-CtBwPbJh.js";import"./dayjs.min-D2apGn21.js";import"./chunk-AYJ5UCUI-CYDaopvs.js";import"./cloneDeep-CgZcCEDV.js";import"./Skeleton-KYXzY8Ax.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-e_-CDvco.js";import"./Backdrop-xzuURvHD.js";import"./LinearProgress-BhLZH7-y.js";import"./index-BdrGYhkv.js";import"./index-B-syo78L.js";import"./index-C2OxP7vA.js";import"./const-BP60AzNb.js";import"./index-CITWbcL1.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
