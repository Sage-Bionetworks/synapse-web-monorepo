import{U as L}from"./UpsetPlot-8HhGQE5H.js";import{f as u}from"./index-CYaz-T4g.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-pNzTn-oH.js";import"./DefaultPropsProvider-DurKmMsP.js";import"./createTheme-DekxhsWr.js";import"./index-CmvBv4Ni.js";import"./iframe-n5mwkj0K.js";import"./Button-CI5AcPJ7.js";import"./createSimplePaletteValueFilter-BqCAAfVF.js";import"./useTimeout-CcoqqpEg.js";import"./ButtonBase-XDzeNizs.js";import"./useForkRef-BCeimwSg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGQJ8oah.js";import"./useFiles-BlF8TPl5.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-CPmaicpC.js";import"./OrientationBanner-CJ1ESR_n.js";import"./index-DiXyMZPQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cs0n9kFQ.js";import"./FullWidthAlert-B8v9piRr.js";import"./Alert-xAoisqCg.js";import"./useSlot-BA0kN4AN.js";import"./createSvgIcon-DgFDwm57.js";import"./Close-BIhyvXJQ.js";import"./IconButton-i3mZ6Ezw.js";import"./Paper-84Q1WhB6.js";import"./useTheme-BvD-CNZH.js";import"./useTheme-DS1z3Y1X.js";import"./Stack-CBcPcYcV.js";import"./extendSxProp-Dh-qlJOe.js";import"./getThemeProps-jaih5qkn.js";import"./Box-BhLrdYXi.js";import"./AlertTitle-ByGWvG3o.js";import"./Typography-CLeqY5_n.js";import"./index-C7caafkY.js";import"./ClickAwayListener-CBV7B09E.js";import"./getReactElementRef-C0n-5JA5.js";import"./index-C3w_Pjwj.js";import"./index-nIDE90q0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY_78XwL.js";import"./Tooltip-BvV6KBuI.js";import"./index-tHFahJkl.js";import"./useControlled-CyRm7kwD.js";import"./Popper-BGRgwHFZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-BWXoVlNJ.js";import"./QueryClientProvider-Bs1L9MD9.js";import"./Link-CTR14mAv.js";import"./Collapse-aOJwFLzA.js";import"./_baseUniq-CKpk02ye.js";import"./_Uint8Array-CyN-wuBs.js";import"./isArray-BkbdtJTH.js";import"./_getTag-CltEB6Q0.js";import"./isEqual-PuORISZF.js";import"./merge-CKiJq7bQ.js";import"./_initCloneObject-CazOt6n1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtxUg5az.js";import"./inputBaseClasses-Dwl_TlYP.js";import"./calculateFriendlyFileSize-Du7Eq0-o.js";import"./CheckCircleTwoTone-7SP1PUwv.js";import"./InfoTwoTone-B8ckXdFt.js";import"./useMutation-DImeJWvL.js";import"./dayjs.min-BYlmw0LD.js";import"./chunk-AYJ5UCUI-CG-M0tOp.js";import"./cloneDeep-v-ROnd35.js";import"./Skeleton-DMznnk0J.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DJAqUJkz.js";import"./Backdrop-M1zxiyim.js";import"./LinearProgress-BwML7CTO.js";import"./index-dFjyNRP5.js";import"./index-B5yN-Wwa.js";import"./index-CzCzrtgj.js";import"./const-BP60AzNb.js";import"./index-Bui-FPGv.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
