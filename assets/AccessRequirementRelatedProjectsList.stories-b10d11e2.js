import{A as j}from"./AccessRequirementRelatedProjectsList-98a47dec.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-9210e01a.js";import{c as g}from"./SynapseClient-7700f4cc.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-c0eacdfc.js";import"./FullWidthAlert-77167a31.js";import"./Alert-f631f725.js";import"./styled-87b6157a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-397996e3.js";import"./Paper-625f2e68.js";import"./IconButton-30f6f351.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-eb200119.js";import"./extendSxProp-c4113ea3.js";import"./Box-737945d6.js";import"./AlertTitle-38884730.js";import"./Typography-62cfc992.js";import"./useTheme-58bb7d64.js";import"./Grow-08403985.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-830530e5.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-e8bd1358.js";import"./Button-a2b8b546.js";import"./useAccessRequirements-49589542.js";import"./useMutation-2249482e.js";import"./useInfiniteQuery-7e752e07.js";import"./useMediaQuery-51d2162c.js";import"./sortBy-b8b8cfbe.js";import"./_baseIteratee-19775889.js";import"./_getAllKeys-fa8e70cf.js";import"./isArray-5e3f9107.js";import"./_Uint8Array-595ed3dd.js";import"./_Map-02912bad.js";import"./_baseTimes-8715be3e.js";import"./_getTag-dcd38d76.js";import"./_getMatchData-2b75febc.js";import"./_cacheHas-cc8fa475.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-a17404df.js";import"./_overRest-54674ae8.js";import"./_isIterateeCall-984cc862.js";import"./EntityLink-9ac6c0eb.js";import"./useEntity-16b7414f.js";import"./isEqualWith-7a8dbfc5.js";import"./pick-89ddd0c3.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-8c467ff1.js";import"./_baseClone-9db79a00.js";import"./_initCloneObject-b3d76b79.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-9a905694.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./useGetEntityHeaders-dfa410e8.js";import"./EntityIcon-c1e35d78.js";import"./index-3a31b023.js";import"./IconSvg-b2c8dc9b.js";import"./ErrorOutlined-20d019ce.js";import"./GetAppTwoTone-ce03f56d.js";import"./InfoOutlined-e67f3aa8.js";import"./CheckCircleTwoTone-8a62494f.js";import"./ErrorChip-e25e1296.js";import"./Chip-99c1f106.js";import"./Avatar-ae1c3f3d.js";import"./Link-adab3de3.js";import"./Skeleton-b82f86a8.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-507b8078.js";import"./ListItem-6176667b.js";import"./listItemButtonClasses-fde885f4.js";import"./isMuiElement-bce4c331.js";import"./util-1969ce74.js";import"./index-17a77bb8.js";import"./SynapseConstants-c93e8ee4.js";import"./InfoTwoTone-bbc735a3.js";import"./inputBaseClasses-888452c9.js";import"./Fade-3c4a970e.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const nt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const ct=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,ct as __namedExportsOrder,nt as default};
