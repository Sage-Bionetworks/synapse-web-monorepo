import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-BhrR5Sll.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DypYzUTq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-JacjVgP4.js";import"./useAccessRequirements-iVIEM_r3.js";import"./index-CPX53gcL.js";import"./_baseOrderBy-BTMBj8Ip.js";import"./_baseIteratee-BvC8fp-4.js";import"./_baseMap-BS7AJXJp.js";import"./_baseEach-BandNteZ.js";import"./useQueries-DqSPqXIA.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./groupBy-DNKraTIH.js";import"./_createAggregator-CcoI5Jl7.js";import"./DialogBase-BYIqUMiE.js";import"./Close-8bb5EJ6t.js";import"./HelpPopover-lG-0-_4j.js";import"./MarkdownPopover-Dra-bAXM.js";import"./LightTooltip-CtyC1diu.js";import"./MarkdownSynapse-gk6o-aVH.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonTable-bVZR_JBz.js";import"./SkeletonParagraph-BvDfq1qX.js";import"./EntityLink-SMq9YFQf.js";import"./useEntity-Dq9EUdRo.js";import"./pickBy-CCz-VO2T.js";import"./isString-ChPx5Gz6.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DoH_2kpH.js";import"./useGetEntityHeaders-C1mvfARP.js";import"./EntityIcon-C4dnsPV8.js";import"./ErrorChip-Ca4CaPsk.js";import"./Chip-BT3G1XLE.js";import"./UserOrTeamBadge-CsisTzN0.js";import"./UserBadge-B_-Td5kg.js";import"./useUserBundle-hOPzwbRd.js";import"./MenuItem-BJbLDGlr.js";import"./Card-D2q1-b23.js";import"./TeamBadge-NgGjmUWT.js";import"./UnmanagedACTAccessRequirementItem-2RFPYPzP.js";import"./RequirementItem-DoBzwNYz.js";import"./LockTwoTone-Yzab-ZIU.js";import"./UserSearchBoxV2-DX0czZ-C.js";import"./useDebouncedEffect-BTOvpNyz.js";import"./use-deep-compare-effect.esm-CGRSmNRA.js";import"./uniq-CQgVzW-H.js";import"./without-qQ8_IAI5.js";import"./Select-aab027f3.esm-BZsNg5Uj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CpbUj4k5.js";import"./SelfSignAccessRequirementItem-C30cMhIn.js";import"./DataAccessRequestAccessorsFilesForm-CiATO5aN.js";import"./enums-NfKBr0mO.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CDomkyR3.js";import"./RadioGroup-ln7L0SAh.js";import"./Radio-BsM5thS8.js";import"./SwitchBase-CdXIgPgp.js";import"./FormGroup-CWz-ppbD.js";import"./FormControlLabel-e808tZ2M.js";import"./UploadDocumentField-TtA44a5m.js";import"./FileUpload-COvJGwtS.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CuNicDdX.js";import"./GridLegacy-DWUuI_Fy.js";import"./ResearchProjectForm-CREoYPdh.js";import"./TextFieldWithWordLimit-CyagnBaX.js";import"./AuthenticatedRequirement-CeDRcRBC.js";import"./CertificationRequirement-BsQ1vWGQ.js";import"./TwoFactorAuthEnabledRequirement-CMkmrKHA.js";import"./ValidationRequirement-Lu5kDCbu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BfTH0AdI.js";import"./RejectDataAccessRequestModal-BVLqEawW.js";import"./CannedRejectionDialog--sIzAoWb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B44tNgOv.js";import"./Checkbox-DkVVye31.js";import"./Grid-Dfl2LtvY.js";import"./upperFirst-sqCnQJs6.js";import"./_stringToArray-DjJ-qVbx.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
