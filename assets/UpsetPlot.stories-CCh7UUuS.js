import{U as L}from"./UpsetPlot-D_DUcuQu.js";import{f as u}from"./index-D0IQIjYr.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B2Qr85zo.js";import"./DefaultPropsProvider-BaeKOKQ6.js";import"./createTheme-C9Yd5-wm.js";import"./index-C0YALZQz.js";import"./iframe-C4ix3hWR.js";import"./Button-CKtQREg-.js";import"./createSimplePaletteValueFilter-Dhw4lf7H.js";import"./useTimeout-CAkteiZD.js";import"./ButtonBase-DH9Ov36O.js";import"./useForkRef-BIB30eql.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-2GLfT7Hs.js";import"./useFiles-Ef0oneNy.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BB0gB5B7.js";import"./OrientationBanner-DqcE34N4.js";import"./index-DZPFWSyF.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3CXrV37.js";import"./FullWidthAlert-rW1wVqb8.js";import"./Alert-Bb7a67Ce.js";import"./useSlot-dvUBOlYM.js";import"./createSvgIcon-Dvlo-p3N.js";import"./Close-CM6q2e7n.js";import"./IconButton-BV4SsEJa.js";import"./Paper-DcnJEfW5.js";import"./useTheme-7IS2TKwD.js";import"./useTheme-BMHAz49G.js";import"./Stack-CKeJ5axq.js";import"./extendSxProp-Bm1yDns3.js";import"./getThemeProps-DNL-t9j-.js";import"./Box-ChNzIem_.js";import"./AlertTitle-CvlcKp51.js";import"./Typography-Dkw7b_5d.js";import"./index-D96GLD0m.js";import"./ClickAwayListener-CSXPHlBT.js";import"./getReactElementRef-CDLdFmX1.js";import"./index-HfouNIaw.js";import"./index-BAarkWvg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CvjOcJ_V.js";import"./Tooltip-BMzFZUM0.js";import"./index-Ck0HNX7_.js";import"./useControlled-CsPICl5Q.js";import"./Popper-ySgvMYOx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CiMHuQSW.js";import"./QueryClientProvider-P2ZJzewi.js";import"./Link-CUpi234w.js";import"./Collapse-BUARP0av.js";import"./_baseUniq-DoCrQ_-f.js";import"./_Uint8Array-sWmVj1m7.js";import"./isArray-ytjrkkJI.js";import"./_getTag-CFeNUIWp.js";import"./isEqual-CYc3xBpk.js";import"./merge-Czk3qD9O.js";import"./_initCloneObject-bRjdrz6V.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWId73Dt.js";import"./inputBaseClasses-rBiWWOSB.js";import"./calculateFriendlyFileSize-Daa-sKbB.js";import"./CheckCircleTwoTone-CZzNVvfI.js";import"./InfoTwoTone-BJRcyr42.js";import"./useMutation-2tBDrWOY.js";import"./dayjs.min-D6d06RXv.js";import"./chunk-AYJ5UCUI-C8yCxPut.js";import"./cloneDeep-D50FkvFh.js";import"./Skeleton-C3PZrg9q.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CadQ7IKA.js";import"./Backdrop-b9ToPcV-.js";import"./LinearProgress-D9AX1YUx.js";import"./index-CVsYIhKM.js";import"./index-C8d1xODX.js";import"./index-Cl7wACzJ.js";import"./const-BP60AzNb.js";import"./index-CkFZtW_O.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
