import{s as o,b as n,O as a,H as c}from"./iframe-DYswlUGP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-omf0uirc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DplbVuLW.js";import"./index-BMR4-6mU.js";import"./_baseOrderBy-eTLvEUfR.js";import"./_baseIteratee-DHYAHbZz.js";import"./_baseMap-DNdo1oCm.js";import"./_baseEach-COdfZHMJ.js";import"./useInfiniteQuery-C6sjWaRu.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-KKP10NQ5.js";import"./useEntity-DLAHgvkN.js";import"./pickBy-BkA3Lwh4.js";import"./isString-Ne5nseJa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gusvPwVq.js";import"./useGetEntityHeaders-C8uyC8d7.js";import"./EntityIcon-WoBiCjyX.js";import"./ErrorChip-iHtHel8d.js";import"./Chip-DAxgxn8_.js";import"./ListItem-Bu9ixGDT.js";import"./listItemButtonClasses-BIRVswYQ.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
