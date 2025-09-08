import{U as L}from"./UpsetPlot-B_9CAbTh.js";import{f as u}from"./index-D1-fc4OP.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CR7BJMCU.js";import"./DefaultPropsProvider-CYw3Fks0.js";import"./createTheme-BnKHTdnQ.js";import"./index-BvkzVhja.js";import"./iframe-D86gUYfY.js";import"./Button-CFj-G6sD.js";import"./createSimplePaletteValueFilter-BID9b8gQ.js";import"./useTimeout-BhJcJhho.js";import"./ButtonBase-C-uVUtTT.js";import"./useForkRef-D6RYFZJE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D9VUIaZV.js";import"./useFiles-DOT7Kf5e.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BFsckqND.js";import"./OrientationBanner-vm3Uug8o.js";import"./index-CBcMDjG5.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7GgqiOd.js";import"./FullWidthAlert-DG03OKrG.js";import"./Alert-WcAu8OxA.js";import"./useSlot-CpbBpyfC.js";import"./createSvgIcon-TqGA5GS4.js";import"./Close-CTF45zn1.js";import"./IconButton-xQjHQzJV.js";import"./Paper-DZq6vmXR.js";import"./useTheme-CNZLKbAz.js";import"./useTheme-DOHmBU_Q.js";import"./Stack-C-KnMMTe.js";import"./extendSxProp-PG9lN2V8.js";import"./getThemeProps-aAOWIBG1.js";import"./Box-Ch_qkwG8.js";import"./AlertTitle-Vpnt_q-u.js";import"./Typography-ClJ7qrfT.js";import"./index-BpWTALmT.js";import"./ClickAwayListener-D2ZJQO-q.js";import"./getReactElementRef-CSwoQRSl.js";import"./index-D1ZhQdri.js";import"./index-nooAMcKr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1U6ARRbe.js";import"./Tooltip-DlgKzRYd.js";import"./index-Djkai_n6.js";import"./useControlled-BqXuHVop.js";import"./Popper-BOpwvkY8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-B5WZxfnm.js";import"./QueryClientProvider-Bw-sUfxd.js";import"./Link-BoxUl1rG.js";import"./Collapse-DgVb8QQQ.js";import"./_baseUniq-2UaCu3Jw.js";import"./_Uint8Array-6IB5bB9B.js";import"./isArray-BWfjxlvB.js";import"./_getTag-ZEhjLntR.js";import"./isEqual-h7ZjSABb.js";import"./merge-B5rBlFmL.js";import"./_initCloneObject-vgZXLCqG.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5Eu1XIh.js";import"./inputBaseClasses-DrFRH_VH.js";import"./calculateFriendlyFileSize-LIZWMyaA.js";import"./CheckCircleTwoTone-Dg7Y-mS9.js";import"./InfoTwoTone-CT5xw0TJ.js";import"./useMutation-BOFn0MGu.js";import"./dayjs.min-zWOubbPA.js";import"./chunk-AYJ5UCUI-nqgqpkF9.js";import"./cloneDeep-De6cZq_K.js";import"./Skeleton-Cz56GLNo.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-oYAnbkFo.js";import"./Backdrop-DVvVC-LE.js";import"./LinearProgress-CWK_oOku.js";import"./index-CoBQ_xdB.js";import"./index-CmL4p-q0.js";import"./index-Ch_GTeML.js";import"./const-BP60AzNb.js";import"./index-opwlJYSV.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
