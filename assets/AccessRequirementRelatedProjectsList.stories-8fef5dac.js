import{A as j}from"./AccessRequirementRelatedProjectsList-e9eb159d.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-782e74fa.js";import{a1 as g}from"./SynapseClient-d7905674.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-1bd00e8c.js";import"./FullWidthAlert-a8fd2235.js";import"./Alert-a2690b50.js";import"./styled-2fcfc37a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-8a3e2935.js";import"./Paper-699baef2.js";import"./IconButton-64077c25.js";import"./ButtonBase-f4a900e8.js";import"./emotion-react.browser.esm-b6cea713.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-69986211.js";import"./extendSxProp-c283072b.js";import"./Box-2044d34a.js";import"./AlertTitle-a34c5fe9.js";import"./Typography-b1f79b20.js";import"./useTheme-76051239.js";import"./Grow-241280c4.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-bed83364.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-72ca093b.js";import"./Button-8ea9f590.js";import"./useAccessRequirements-8ae11138.js";import"./useMutation-caf08e9c.js";import"./useInfiniteQuery-8fa1c35b.js";import"./useMediaQuery-bbc50899.js";import"./sortBy-9432484f.js";import"./_baseIteratee-f4897559.js";import"./_getAllKeys-a7c6e1ea.js";import"./isArray-5e3f9107.js";import"./_Uint8Array-595ed3dd.js";import"./_Map-02912bad.js";import"./_baseTimes-8715be3e.js";import"./_getTag-6966e563.js";import"./_getMatchData-23cf8316.js";import"./_cacheHas-cc8fa475.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-a17404df.js";import"./_overRest-54674ae8.js";import"./_isIterateeCall-984cc862.js";import"./EntityLink-d677e788.js";import"./useEntity-87581b86.js";import"./isEqualWith-2aee5e03.js";import"./pick-f7c80597.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-8c467ff1.js";import"./_baseClone-c3e37260.js";import"./_initCloneObject-b3d76b79.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-9a905694.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./useGetEntityHeaders-93a0053c.js";import"./EntityIcon-6fe1067d.js";import"./index-bd88158d.js";import"./IconSvg-f8ded0ba.js";import"./ErrorOutlined-c656d1cd.js";import"./GetAppTwoTone-89480507.js";import"./InfoOutlined-64e960b4.js";import"./CheckCircleTwoTone-b021ad72.js";import"./ErrorChip-82c1f53a.js";import"./Chip-74479db8.js";import"./Avatar-cb65f89e.js";import"./Link-66bc2a10.js";import"./Skeleton-5f112c28.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-7dea6900.js";import"./ListItem-9a384fea.js";import"./listItemButtonClasses-e90d52e9.js";import"./isMuiElement-bce4c331.js";import"./util-c0197ce2.js";import"./index-4166e284.js";import"./SynapseConstants-8157454e.js";import"./InfoTwoTone-c9bbd609.js";import"./inputBaseClasses-7a80a621.js";import"./Fade-1b8e1369.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const nt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=AccessRequirementRelatedProjectsList.stories-8fef5dac.js.map
