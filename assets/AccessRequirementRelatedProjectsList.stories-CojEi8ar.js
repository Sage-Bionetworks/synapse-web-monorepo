import{s as o,b as n,O as a,H as c}from"./iframe-C5G3mSsR.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C-YsiQ5Q.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DUGTLQvp.js";import"./index-ZLaaxmrv.js";import"./_baseOrderBy-DzTN0t1b.js";import"./_baseIteratee-BJFOXZpA.js";import"./_baseMap-KZgyx6ES.js";import"./_baseEach-xqhXeHjp.js";import"./useInfiniteQuery-DjR-9fP5.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BsDdUXcb.js";import"./useEntity-CcWu8fd8.js";import"./pickBy-B33oLEkQ.js";import"./isString-Du3YB3Zp.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bf--ncRy.js";import"./useGetEntityHeaders-BsuVYC_p.js";import"./EntityIcon-AQQENdO-.js";import"./ErrorChip-Bjr3rX-g.js";import"./Chip-j4Xp3f_v.js";import"./ListItem-zssqoqTW.js";import"./listItemButtonClasses-DGdGuUll.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
