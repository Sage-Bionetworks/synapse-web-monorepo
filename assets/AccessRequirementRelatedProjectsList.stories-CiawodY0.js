import{s as o,b as n,O as a,H as c}from"./iframe-ggb9BT7g.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BHzoZCxp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DsK5rV9c.js";import"./index-BsBFOmKs.js";import"./_baseOrderBy-CfUmSi1e.js";import"./_baseIteratee-CI8yA5In.js";import"./_baseMap-Cn5NpepV.js";import"./_baseEach-CoSYQq5s.js";import"./useInfiniteQuery-Dmqb6E3U.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Baok0R8Q.js";import"./useEntity-BC65UzsD.js";import"./pickBy-D-qc39wb.js";import"./isString-Ca1WffPe.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-2ZWPNYoN.js";import"./useGetEntityHeaders-CByoqE-r.js";import"./EntityIcon-9fsO60EH.js";import"./ErrorChip-CowdkZyJ.js";import"./Chip-CisBGjg3.js";import"./ListItem-B0UpKkuu.js";import"./listItemButtonClasses-CeAtuF-Z.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
