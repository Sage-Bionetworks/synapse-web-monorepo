import{n as o,b as n,Q as a,H as c}from"./iframe-CZFJJ8mF.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BHlRaBMw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cj1szXFO.js";import"./index-DHCSsY1o.js";import"./_baseOrderBy-DJNOF7pH.js";import"./_baseIteratee-rX9r8SJC.js";import"./_baseMap-CqAkTHGS.js";import"./_baseEach-m_YP-tTO.js";import"./useInfiniteQuery-kARObAi9.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-yskpU4wn.js";import"./useEntity-adVF4VGo.js";import"./pickBy-CgyhEFoJ.js";import"./isString-C9vid2vV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CoaMPWn6.js";import"./useGetEntityHeaders-BOKMnKdX.js";import"./EntityIcon-I87dLNKF.js";import"./ErrorChip-CVR39Zqg.js";import"./Chip-BSOTX2SF.js";import"./ListItem-DQvd6W6q.js";import"./listItemButtonClasses-B4WhvPvv.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
