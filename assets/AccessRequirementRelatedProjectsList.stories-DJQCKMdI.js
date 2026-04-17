import{s as o,b as n,O as a,H as c}from"./iframe-DjCs0N9T.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C6av5uQQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-rMfVBDt3.js";import"./index-Cwlx-Oul.js";import"./_baseOrderBy-DVAlmebq.js";import"./_baseIteratee-BxSzENNZ.js";import"./_baseMap-BXvVAQO1.js";import"./_baseEach-DCQjENFm.js";import"./useInfiniteQuery-D7nav_iQ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CUk4YEfy.js";import"./useEntity-Db4mV1RE.js";import"./pickBy-CmgfTtCR.js";import"./isString-yYV1C6Tz.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ca0eF1An.js";import"./useGetEntityHeaders-Xa1G1qyy.js";import"./EntityIcon-CpJ2pASY.js";import"./ErrorChip-CTWOprUW.js";import"./Chip-DtYkZqnx.js";import"./ListItem-D6drZVGT.js";import"./listItemButtonClasses-BUKlHMDZ.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
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
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
