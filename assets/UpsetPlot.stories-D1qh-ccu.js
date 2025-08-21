import{U as L}from"./UpsetPlot-B-Ir7Oho.js";import{f as u}from"./index-Ct-MLvxS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C5_97mXk.js";import"./DefaultPropsProvider-CW_d9y1r.js";import"./createTheme-BhLxYWDv.js";import"./index-BdGF2rr0.js";import"./iframe-BtSuadMq.js";import"./Button-DbkFyoji.js";import"./createSimplePaletteValueFilter-DvZMp9k3.js";import"./useTimeout-B3axDpsT.js";import"./ButtonBase-CiPIqPeV.js";import"./useForkRef-c3fsIK01.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D16bZLFK.js";import"./useFiles-BnoFzpt4.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DPvalGLs.js";import"./OrientationBanner-C7ftuDQm.js";import"./index-DEFrzoIy.js";import"./spreadSx-CwcO6WA9.js";import"./react-CgQuzE1J.js";import"./FullWidthAlert-B4ZLM8Gj.js";import"./Alert-DVIMJ7t6.js";import"./useSlot-CLmM1ySd.js";import"./createSvgIcon-CNA5GupY.js";import"./Close-BqICSnwE.js";import"./IconButton-0tJmEnKE.js";import"./Paper-dGOVAE2x.js";import"./useTheme-D5PcCuLz.js";import"./useTheme-DJxYLxbi.js";import"./Stack-DqfSH6uT.js";import"./extendSxProp-B8f7Jal8.js";import"./getThemeProps-BNF_Detn.js";import"./Box-DQQsEHOw.js";import"./AlertTitle-D-C2TxNL.js";import"./Typography-BFscDXWb.js";import"./index-BBmHR9wv.js";import"./ClickAwayListener-BeugXztG.js";import"./getReactElementRef-B59-QI-D.js";import"./index-D0tL_4sL.js";import"./index-CpyyZXCv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dfd02UMc.js";import"./Tooltip-BOEbCo2w.js";import"./index-gxypWGmb.js";import"./useControlled-DgCAYik9.js";import"./Popper-CQSYYlgn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BkSrP9R6.js";import"./QueryClientProvider-D_2ZGqWx.js";import"./Link-BiA7uAW3.js";import"./Collapse-_aAhN6kX.js";import"./_baseUniq-DI-cYlCV.js";import"./_Uint8Array-Bz4l-uF1.js";import"./isArray-mIVUFf7F.js";import"./_getTag-Ddq65MkA.js";import"./isEqual-COHyrlY7.js";import"./merge-BOgL1RL6.js";import"./_initCloneObject-BZ4G4vY1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lNgin7Fd.js";import"./inputBaseClasses-CDyVQ-wz.js";import"./calculateFriendlyFileSize-Dqg8rbmn.js";import"./CheckCircleTwoTone-DzbjFgl1.js";import"./InfoTwoTone-DfYCi1PO.js";import"./useMutation-DyV4iMHP.js";import"./dayjs.min-BwJHFbPi.js";import"./chunk-AYJ5UCUI-DFOvz3iG.js";import"./cloneDeep-Dhdm-tyr.js";import"./Skeleton-CcjK8js-.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-COMlsjp0.js";import"./Backdrop-p7TNxCEJ.js";import"./LinearProgress-CmEoTX5s.js";import"./index-t6pUya1K.js";import"./index-_iXWvcX8.js";import"./index-CPkYZhwy.js";import"./const-BP60AzNb.js";import"./index-fnRmiWIS.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
