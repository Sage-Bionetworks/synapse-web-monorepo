import{n as o,b as n,Q as a,H as c}from"./iframe-DRnLZq4W.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BiKzcqNZ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DBlX9XRA.js";import"./index-C6Fl73J9.js";import"./_baseOrderBy-DKzGPwCj.js";import"./_baseIteratee-CGgYpGW3.js";import"./_baseMap-UYxvI7CQ.js";import"./_baseEach-ZawQhoV0.js";import"./useInfiniteQuery-CEfwzGx4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BMKaqRtH.js";import"./useEntity-BoL3AsOb.js";import"./pickBy-DgdC9X2n.js";import"./isString-jqYJCv8E.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CqorM4vH.js";import"./useGetEntityHeaders-vGt_QlwA.js";import"./EntityIcon-0UKWIh-l.js";import"./ErrorChip-Lgancyet.js";import"./Chip-X2PFaiz1.js";import"./ListItem-CTleHzKz.js";import"./listItemButtonClasses-B9Hm_ZqE.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
