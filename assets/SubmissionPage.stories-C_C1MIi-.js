import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CkqKht9A.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-zP0oFkCp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DEpD5e-E.js";import"./useAccessRequirements-BGecfaTc.js";import"./index-HFPXFcrl.js";import"./_baseOrderBy-D5qdCMjS.js";import"./_baseIteratee-DkkmHvlR.js";import"./_baseMap-CXPVSq4N.js";import"./_baseEach-BtLnyfgf.js";import"./useInfiniteQuery-BEEFWGUG.js";import"./groupBy-BTNHo95N.js";import"./_createAggregator-B_y8ozbl.js";import"./DialogBase-Djx01sCY.js";import"./Close-BgF6Uq-0.js";import"./HelpPopover-GKTPM2Ku.js";import"./MarkdownPopover-D9icFnvp.js";import"./LightTooltip-hsorPXi9.js";import"./MarkdownSynapse-tPNUlNWQ.js";import"./SkeletonButton-Di865Zvp.js";import"./SkeletonInlineBlock-Du1ZrXhF.js";import"./SkeletonTable-CWHVzuOA.js";import"./SkeletonParagraph-BjhKqE1J.js";import"./EntityLink-DzIyfNRI.js";import"./useEntity-Kb2CejYP.js";import"./pickBy-B2H4A_RN.js";import"./isString-CoHondZR.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CA0fBehT.js";import"./useGetEntityHeaders-C95EaXe8.js";import"./EntityIcon-DA-fPqBx.js";import"./ErrorChip-DTu8SpLu.js";import"./Chip-BmVL4eVd.js";import"./UserOrTeamBadge--_OWpZFM.js";import"./useUserGroupHeader-C0iuMqVQ.js";import"./TeamBadge-DM5rax7j.js";import"./UserBadge-BSfWwbq9.js";import"./useUserBundle-BsneMIeI.js";import"./MenuItem-Dmh5bflc.js";import"./Card-Z3IbB4xH.js";import"./UnmanagedACTAccessRequirementItem-CHeJ-1DJ.js";import"./RequirementItem-CL26rY-b.js";import"./LockTwoTone-PEqvLCRF.js";import"./ManagedACTAccessRequirementItemView-D1JDfy5l.js";import"./SelfSignAccessRequirementItem-Zrc-epoz.js";import"./DataAccessRequestAccessorsFilesForm-ehVVB8Tr.js";import"./enums-DYfcqidQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C0ZVZqvR.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-5YzFZKZP.js";import"./UserSearchBox-BVT0I0uL.js";import"./useDebouncedEffect-DUj_Oz7P.js";import"./Autocomplete-CVxL4Aj8.js";import"./usePreviousProps-Dg3neEkv.js";import"./RadioGroup-DaK169L6.js";import"./Radio-u6cZH-ni.js";import"./SwitchBase-DXM-qXId.js";import"./FormGroup-e71CAjjO.js";import"./FormControlLabel-SU0MesBd.js";import"./UploadDocumentField-B_huf10h.js";import"./FileUpload-CKENInc2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CkCGtFkh.js";import"./GridLegacy-C7cf5oof.js";import"./ResearchProjectForm-BT4_pjs9.js";import"./TextFieldWithWordLimit-M2sc92y5.js";import"./AuthenticatedRequirement-Drtb75Hy.js";import"./CertificationRequirement-DoKSo5RK.js";import"./TwoFactorAuthEnabledRequirement-BXAjkh6V.js";import"./ValidationRequirement-yCu_d8DA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-6pqfrkbf.js";import"./RejectDataAccessRequestModal-C4srp4pr.js";import"./CannedRejectionDialog-CJqF42Su.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Kok7E28Q.js";import"./Checkbox-D91AhJdm.js";import"./Grid-K4WyEUbB.js";import"./upperFirst-DYVd0Do9.js";import"./_stringToArray-Cwm0IDvY.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
