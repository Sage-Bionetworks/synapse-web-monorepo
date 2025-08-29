import{U as L}from"./UpsetPlot-UiM6htOA.js";import{f as u}from"./index-c0hg9t6X.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DJlg7QRA.js";import"./DefaultPropsProvider-BHDhaDyJ.js";import"./createTheme-CQKuB-_w.js";import"./index-DrlcO71a.js";import"./iframe-BS54MGHI.js";import"./Button-B3gyn6j9.js";import"./createSimplePaletteValueFilter--mtY5h6t.js";import"./useTimeout-BEy-pgWT.js";import"./ButtonBase-B3T3xak3.js";import"./useForkRef-B8jEnRHG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-m8ZQtMFl.js";import"./useFiles-LypvG-sj.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CScskaqw.js";import"./OrientationBanner-BMZuIlKD.js";import"./index-B4Tfv9JA.js";import"./spreadSx-CwcO6WA9.js";import"./react-yogpPmFf.js";import"./FullWidthAlert-CH-cCpej.js";import"./Alert-CekN_gAj.js";import"./useSlot-C0OwMX66.js";import"./createSvgIcon-BE2wnaae.js";import"./Close-CitnM-9o.js";import"./IconButton-Cy1b-xZD.js";import"./Paper-B8xuQxDa.js";import"./useTheme-BZDRc6_Y.js";import"./useTheme-CC_pEuHP.js";import"./Stack-B9Gh8FGk.js";import"./extendSxProp-X6PGK1e5.js";import"./getThemeProps-DOng6F_8.js";import"./Box-CBr-jezS.js";import"./AlertTitle-Bpgzqi1b.js";import"./Typography-z3tfaaqZ.js";import"./index-Cxa_fUkM.js";import"./ClickAwayListener-CL0a72jO.js";import"./getReactElementRef-DIEgKyGp.js";import"./index-CqbrU4vx.js";import"./index-D1_q4pmj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-nNbLLGck.js";import"./Tooltip-CV3o7Hpq.js";import"./index-DsI7_zIK.js";import"./useControlled-CH2X2Kjk.js";import"./Popper-DlOgYa4m.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BivmK9vh.js";import"./QueryClientProvider-CmwllrS-.js";import"./Link-BPw2xZaR.js";import"./Collapse-uBNTtc7v.js";import"./_baseUniq-CCe_IvzI.js";import"./_Uint8Array-2kJvgqyS.js";import"./isArray-ChU27Tqx.js";import"./_getTag-Dw9hviqI.js";import"./isEqual-DNLmBAqh.js";import"./merge-BalVbPlS.js";import"./_initCloneObject-Cw-AraIh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1PMJSO0.js";import"./inputBaseClasses-Csi6HknA.js";import"./calculateFriendlyFileSize-cjExqW_T.js";import"./CheckCircleTwoTone-CElUS0wl.js";import"./InfoTwoTone-C66I5sSc.js";import"./useMutation-tX66Xwvj.js";import"./dayjs.min-DB2WO_9H.js";import"./chunk-AYJ5UCUI-BaGfju-u.js";import"./cloneDeep-ab1FlSuT.js";import"./Skeleton-C8MjlDZQ.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CFb8wC6d.js";import"./Backdrop-D6E87tF5.js";import"./LinearProgress-C7AKtVRx.js";import"./index-CUlDmk4K.js";import"./index-DdgXg21X.js";import"./index-D7xGM6Js.js";import"./const-BP60AzNb.js";import"./index-zaw3fdes.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
