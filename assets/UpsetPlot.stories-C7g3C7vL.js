import{U as L}from"./UpsetPlot-CpRFnhqp.js";import{f as u}from"./index-DlJ3e6vo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CSf8dT6F.js";import"./DefaultPropsProvider-D0yRXNne.js";import"./createTheme-DJo9Xwcd.js";import"./index-BfVXz5Ag.js";import"./iframe-BPJnb6Jo.js";import"./Button-D2bAM9JV.js";import"./createSimplePaletteValueFilter-r-PmHHmL.js";import"./useTimeout-CsEW3D_k.js";import"./ButtonBase-Cv7odYKj.js";import"./useForkRef-Bpzs6qo7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIClC7Gy.js";import"./useFiles-FKGDO0i0.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-1tup86se.js";import"./OrientationBanner-wFOLRJbA.js";import"./index-Dm9xm2_f.js";import"./spreadSx-CwcO6WA9.js";import"./react-DPdF_HDn.js";import"./FullWidthAlert-D7gQIHFu.js";import"./Alert-60dOS0Xa.js";import"./useSlot-C80kZXPi.js";import"./createSvgIcon-Do0_SfU5.js";import"./Close-CPHWO9Va.js";import"./IconButton-DeQtcGLQ.js";import"./Paper-C20E8Cgc.js";import"./useTheme-C81SUhxs.js";import"./useTheme-B8fsbezS.js";import"./Stack-De9kMocI.js";import"./extendSxProp-CuFQzNrO.js";import"./getThemeProps-CtclWu-w.js";import"./Box-CS1Km4YM.js";import"./AlertTitle-CMg5aJHW.js";import"./Typography-D_5e3gyE.js";import"./index-DFR37g5z.js";import"./ClickAwayListener--cQ_J2-K.js";import"./getReactElementRef-B6TLCFd5.js";import"./index-Cea427Jc.js";import"./index-t2RIHcQ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C07EywNj.js";import"./Tooltip-D0rMrlze.js";import"./index-vHk_D0dD.js";import"./useControlled-CQJ1STOz.js";import"./Popper-Z30S9dVL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DELzMMV2.js";import"./QueryClientProvider-qgsuxj5j.js";import"./Link-Ce1G5oI1.js";import"./Collapse-DPxPsRRj.js";import"./_baseUniq-h81h2T5v.js";import"./_Uint8Array-DrmeFWPX.js";import"./isArray-BuXI0-0e.js";import"./_getTag-r_4sb1yJ.js";import"./isEqual-BIi-LOer.js";import"./merge-BeGPZ09a.js";import"./_initCloneObject-CmBTonNO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C4mFIZyt.js";import"./inputBaseClasses-Cr2M0koQ.js";import"./calculateFriendlyFileSize-Dm5rKT8Q.js";import"./CheckCircleTwoTone-Dwa6jGH6.js";import"./InfoTwoTone-BPDpi3Ad.js";import"./useMutation-BxjyqccJ.js";import"./dayjs.min-BFzgc83H.js";import"./chunk-AYJ5UCUI-B1XrWbGW.js";import"./cloneDeep-Mq5iqCKt.js";import"./Skeleton-nQxz36_4.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dx-kv04t.js";import"./Backdrop-DpN6JUaK.js";import"./LinearProgress-DOtVptRB.js";import"./index-CXm6V33r.js";import"./index-CkGB2gbQ.js";import"./index-BiXxemuj.js";import"./const-BP60AzNb.js";import"./index-DUl6pcOl.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
