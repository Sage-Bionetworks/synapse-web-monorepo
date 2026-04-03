import{s as o,b as n,O as a,H as c}from"./iframe-DvDPVyr3.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C97C-mUP.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DtrRejXJ.js";import"./index-Cd-T-abm.js";import"./_baseOrderBy-BfEs3q_n.js";import"./_baseIteratee-DZhuazRW.js";import"./_baseMap-DyGl9fGh.js";import"./_baseEach-DlWazupd.js";import"./useInfiniteQuery-DWj8q4Ou.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CjtLRFmJ.js";import"./useEntity-Bh24ZT11.js";import"./pickBy-kEll3AOM.js";import"./isString-C-LtdkHl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-sb2T9JNK.js";import"./useGetEntityHeaders-CPfyttCM.js";import"./EntityIcon-D-YTaS44.js";import"./ErrorChip-BcsWd7ui.js";import"./Chip-YSiJYC5a.js";import"./ListItem-h2kuWjMH.js";import"./listItemButtonClasses-Bw2THj84.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
