import{n as o,b as n,Q as a,H as c}from"./iframe-CtRRQlop.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BQ3C0nff.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cvhlmdj9.js";import"./index-6GE_fzjW.js";import"./_baseOrderBy-Bk1bsJnk.js";import"./_baseIteratee-BXQ1WM-F.js";import"./_baseMap-DwbT6tLf.js";import"./_baseEach-Hh6WIfXN.js";import"./useInfiniteQuery-SCJRjalP.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dqtgnd_E.js";import"./useEntity-C0Rb3tjf.js";import"./pickBy-B3ZzJcC6.js";import"./isString-D6wtVnUR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXwnc_71.js";import"./useGetEntityHeaders-BBjIXhBH.js";import"./EntityIcon-CtcPTnL_.js";import"./ErrorChip-s8Vhv6m4.js";import"./Chip-CNSuJPte.js";import"./ListItem-CmuDM2-g.js";import"./listItemButtonClasses-Od4d1K6B.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
