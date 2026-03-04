import{n as o,b as n,Q as a,H as c}from"./iframe-DlAeJyvm.js";import{A as m}from"./AccessRequirementRelatedProjectsList-5Q4T7T6f.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BSc0_wnd.js";import"./index-CRBkYYcS.js";import"./_baseOrderBy-DSro5dmW.js";import"./_baseIteratee-BeJgVukd.js";import"./_baseMap-CH41Ntgo.js";import"./_baseEach-B3PWukHy.js";import"./useInfiniteQuery-DNMsj4KR.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CNwmekk3.js";import"./useEntity-C7X-K5Kk.js";import"./pickBy-CQSawNAW.js";import"./isString-DGjPWBPW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8qC_DhMP.js";import"./useGetEntityHeaders-DH5dLeKz.js";import"./EntityIcon-BcpDN5oU.js";import"./ErrorChip-DHde-DIc.js";import"./Chip-CopACKXK.js";import"./ListItem-DwPba7y1.js";import"./listItemButtonClasses-D1HBp4ip.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
