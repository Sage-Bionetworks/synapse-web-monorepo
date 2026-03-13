import{n as o,b as n,Q as a,H as c}from"./iframe-DYqeQvAZ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CzlxRoxU.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CIXmzSk2.js";import"./index-DB86q32y.js";import"./_baseOrderBy-CWcFLVxH.js";import"./_baseIteratee-CwqQCSfn.js";import"./_baseMap-BWiulIsu.js";import"./_baseEach-_LxsRH98.js";import"./useInfiniteQuery-SfBiKEGU.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DpYdgWA_.js";import"./useEntity-mBsxuZXx.js";import"./pickBy-CTOx6nSH.js";import"./isString-DVM9QblG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5yDxhUe.js";import"./useGetEntityHeaders-CYLK0AHl.js";import"./EntityIcon-D2tETkMG.js";import"./ErrorChip-CPXC4jK9.js";import"./Chip-40aQ4DbO.js";import"./ListItem-CtB1jOmf.js";import"./listItemButtonClasses-shpiQeB_.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
