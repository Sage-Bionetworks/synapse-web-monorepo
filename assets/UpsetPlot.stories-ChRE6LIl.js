import{U as L}from"./UpsetPlot-tOzSHAS-.js";import{f as u}from"./index-Cik_zMVr.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D_JFkj68.js";import"./DefaultPropsProvider-BVUiVDJJ.js";import"./createTheme-DWyGdLde.js";import"./index-CLCXOIcb.js";import"./iframe-t2wJdwGi.js";import"./Button-wLcILYxh.js";import"./createSimplePaletteValueFilter-Bu6Rmtji.js";import"./useTimeout-HoSzxHZJ.js";import"./ButtonBase-DRt0AA36.js";import"./useForkRef-C5Kxhg9M.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-fNOaoY57.js";import"./useFiles-iVsE9X0U.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-BAmU4k0g.js";import"./OrientationBanner-B6xN5fSu.js";import"./index-B5Mtlgxp.js";import"./spreadSx-CwcO6WA9.js";import"./react-BjskdS-M.js";import"./FullWidthAlert-Dp0jOaAM.js";import"./Alert-CozJnD--.js";import"./useSlot-8Tg8yxZz.js";import"./createSvgIcon-BCKLSsq2.js";import"./Close-LtSBt6wu.js";import"./IconButton-BfYR4OmI.js";import"./Paper-COBJrFNP.js";import"./useTheme-gTAEZSvX.js";import"./useTheme-KE0mEYul.js";import"./Stack-dOR7TZbk.js";import"./extendSxProp-uQt30Vh3.js";import"./getThemeProps-CevicY1j.js";import"./Box-B5UNecaX.js";import"./AlertTitle-C1Vcfseh.js";import"./Typography-Blc4WWJ7.js";import"./index-SzTH32SF.js";import"./ClickAwayListener-0MTpQFe5.js";import"./getReactElementRef-DkYC1Yp6.js";import"./index-CMtfxCZX.js";import"./index-BEXi3mBJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-4kvSm4pD.js";import"./Tooltip-Byzt_xyJ.js";import"./index-CGXlNM3G.js";import"./useControlled-IASeHKHZ.js";import"./Popper-B3d9BW8L.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CM4VhkzW.js";import"./QueryClientProvider-B-3FWRUH.js";import"./Link-D_PJAlIU.js";import"./Collapse-3PYCLEiX.js";import"./_baseUniq-CZpoU5rd.js";import"./_Uint8Array-ChkAt42x.js";import"./isArray-DwZDKjpx.js";import"./_getTag-BPYr6ToM.js";import"./isEqual-CBEqrATC.js";import"./merge-D_lQC9Yt.js";import"./_initCloneObject-Cm5ry7Op.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CtBIba13.js";import"./inputBaseClasses-jpAddTzP.js";import"./calculateFriendlyFileSize-Ca97T7pk.js";import"./CheckCircleTwoTone-C7LPXUoS.js";import"./InfoTwoTone-CRl0Z4Gv.js";import"./useMutation-C3utT0DK.js";import"./dayjs.min-C_DSNH2k.js";import"./chunk-AYJ5UCUI-CZZfxgfF.js";import"./cloneDeep-KwGSFuPV.js";import"./Skeleton-CN3n86wp.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-jSH06YNk.js";import"./Backdrop-Ccf2ayc2.js";import"./LinearProgress-DaGCoGu7.js";import"./index-CQSMFeIq.js";import"./index-Cy_dICA2.js";import"./index-G7H0ecx1.js";import"./const-BP60AzNb.js";import"./index-Coko8fi7.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
