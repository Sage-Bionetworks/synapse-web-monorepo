import{A as j}from"./AccessRequirementRelatedProjectsList-DyRJ5DE7.js";import{M as P,b as I}from"./SynapseClient-CZkcD3lR.js";import{l as g}from"./index-CEoZaRdy.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./RegularExpressions-RV1YxBM7.js";import"./index-Cf31rgEj.js";import"./OrientationBanner-BKoSQ39U.js";import"./FullWidthAlert-CpohRhD9.js";import"./Alert-DevAguyB.js";import"./createTheme-CFwAOJQC.js";import"./index-GEGPABih.js";import"./styled-uoyYAB-L.js";import"./mergeSlotProps-bXd1ns9H.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon--fcRVpp9.js";import"./Paper-C3XTRciO.js";import"./IconButton-rjGZl5Ij.js";import"./ButtonBase-CwAnxZmp.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BCUKu9qx.js";import"./Box-tOdEuW_y.js";import"./AlertTitle-F01TNSvq.js";import"./Typography-Ctk8_6Bo.js";import"./utils-Cz4ynwjU.js";import"./index-BlO3JfGB.js";import"./Grow-Dczl5MLz.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cr4lETRB.js";import"./index-_EfqdWAV.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-BkvFhVsL.js";import"./useAccessRequirements-BRqpQL7C.js";import"./useQueries-BH1IVTfH.js";import"./useMutation-BNmtMIak.js";import"./useInfiniteQuery-DKviEAGD.js";import"./QueryFilterUtils-BlIuvEYZ.js";import"./SynapseConstants-aOjNjjyw.js";import"./isEqual-Bkm1oEwb.js";import"./_Uint8Array-kXJ5rGjS.js";import"./_baseTimes-DoMoQz2v.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./_cacheHas-CXp-3pXr.js";import"./_setToArray-CSiN_fit.js";import"./_getAllKeys-Cw7eda3L.js";import"./_getTag-DcaPZuA9.js";import"./isNumber-BM-UBS4N.js";import"./useMediaQuery-VdIRneg0.js";import"./sortBy-MPY7ArS-.js";import"./_baseFlatten-XQKgTEWx.js";import"./isSymbol-BzKS7Qf1.js";import"./toString-CYyvKWOl.js";import"./_baseIteratee-DGAmanGO.js";import"./_getMatchData-3umSXv4T.js";import"./identity-DKeuBCMA.js";import"./_baseFor-CpEDs2Sd.js";import"./_baseRest-DLYcpUSj.js";import"./_overRest-DUrPJxXC.js";import"./_defineProperty-Df4ZcNZr.js";import"./_isIterateeCall-DQ3bmrSf.js";import"./EntityLink-DqZHxT_X.js";import"./useEntity-CC_p7SZP.js";import"./isEqualWith-AanFWuNF.js";import"./pick-EGAXSWU4.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./toInteger-CoOs-5Xi.js";import"./_baseClone-sujSclwc.js";import"./_initCloneObject-CwIS7fS2.js";import"./omit-BQiEGLwx.js";import"./_baseSlice-F8doVSIJ.js";import"./isPlainObject-B3AKd_5V.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useGetEntityHeaders-DMaK4KXo.js";import"./EntityIcon-CsMCmHTX.js";import"./IconSvg-NbK5fVNG.js";import"./LayersTwoTone-qdhO3ukl.js";import"./ErrorOutlined-DAkp6HYW.js";import"./GetAppTwoTone-B51KgJ2m.js";import"./InfoOutlined-CJa7jzxx.js";import"./CheckCircleTwoTone-nCTn5zJK.js";import"./ErrorChip-t_FMNYxo.js";import"./Chip-GmMGoNZd.js";import"./Avatar-UFmbcw9U.js";import"./Link-ceK_fu-q.js";import"./Skeleton-D3uxr_0h.js";import"./colorManipulator-CSxSE2hh.js";import"./pluralize-D3rOHoU0.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./List-DCKeaqo7.js";import"./ListItem-CRhDLg2K.js";import"./listItemButtonClasses-Ibz6wQu0.js";import"./isMuiElement-yx-QWTmT.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C882d77b.js";import"./inputBaseClasses-CcXvGEyU.js";import"./Fade-BXejYtqq.js";import"./dayjs.min-D1RcYm3-.js";import"./index-SDyqs4cU.js";import"./tiny-invariant-CopsF_GD.js";import"./StringUtils-CSiMSLSM.js";import"./util-Ct2ns1Jn.js";import"./index-C2pXwPwl.js";const At={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[g.rest.post(`${P}${I}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const qt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,qt as __namedExportsOrder,At as default};
