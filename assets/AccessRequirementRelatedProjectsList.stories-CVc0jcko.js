import{n as o,b as n,Q as a,H as c}from"./iframe-CvDTy6mw.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C-fmMn6B.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CwI97v5c.js";import"./index-CEVa6roL.js";import"./_baseOrderBy-K23GPo6d.js";import"./_baseIteratee-UbmsfpzB.js";import"./_baseMap-Dx7SZYqg.js";import"./_baseEach-BIPt8TRr.js";import"./useInfiniteQuery-BDzyB6fR.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Ddl8OzAj.js";import"./useEntity-Dns-01NA.js";import"./pickBy-C4S4wLYu.js";import"./isString-Dr9O550V.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BpXjLlzv.js";import"./useGetEntityHeaders-CJ6ylh6V.js";import"./EntityIcon-O9Couk0G.js";import"./ErrorChip-B6cw-qH_.js";import"./Chip-DmppX2NC.js";import"./ListItem-DoXG3GUM.js";import"./listItemButtonClasses-DMs0uJ6l.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
