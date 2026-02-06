import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-CL1UF9wq.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B6qh6OZZ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-fuLcCzCD.js";import"./useAccessRequirements-h24F7TBD.js";import"./index-D_p7qk7E.js";import"./_baseOrderBy-BNZ_rKpc.js";import"./_baseIteratee-DMV55V0L.js";import"./_baseMap-OqYiEbFz.js";import"./_baseEach-Bcjl1bpK.js";import"./useQueries-NvxyI8_9.js";import"./useInfiniteQuery-DWi368jF.js";import"./groupBy-B-yZMmX9.js";import"./_createAggregator-BqE9c8uK.js";import"./DialogBase-D_WMzDU9.js";import"./Close-BWRQhN2m.js";import"./HelpPopover-jj4j5zDP.js";import"./MarkdownPopover-BLBfaCop.js";import"./LightTooltip-DY-wPTTk.js";import"./MarkdownSynapse-CdtBHZEE.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonTable-DMqnct0i.js";import"./SkeletonParagraph-D55VBz6b.js";import"./EntityLink-CwwiTXLB.js";import"./useEntity-D195lckg.js";import"./pickBy-Dh62N0PQ.js";import"./isString-Bk_2wf3u.js";import"./useSuspenseQuery-LePCNQBH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BEcFfxs5.js";import"./useGetEntityHeaders-CyRN7NGS.js";import"./EntityIcon-Cx60DiI_.js";import"./ErrorChip-CzlSJgzl.js";import"./Chip-DXWiT4yo.js";import"./UserOrTeamBadge-Cz4F3ETX.js";import"./UserBadge-CnO0Rkgm.js";import"./useUserBundle-BcHOhtU-.js";import"./MenuItem-LKo31BtE.js";import"./Card-B9BQCfND.js";import"./TeamBadge-QzNTY3sF.js";import"./UnmanagedACTAccessRequirementItem-Bnck3ko3.js";import"./RequirementItem-CZmrqvf3.js";import"./LockTwoTone-BlZpEYXc.js";import"./UserSearchBoxV2-BaM_QAoS.js";import"./useDebouncedEffect-wae5cBnA.js";import"./use-deep-compare-effect.esm-BsYNt22s.js";import"./uniq-BczlDYoN.js";import"./without-BjgmvzHg.js";import"./Select-aab027f3.esm-ClNr34_w.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CejwbGfE.js";import"./SelfSignAccessRequirementItem-daInFlLQ.js";import"./DataAccessRequestAccessorsFilesForm-jekk8wwp.js";import"./enums-C46JrnLF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BLRR7TJ8.js";import"./RadioGroup-04Bd-wn_.js";import"./Radio-C7rC3Lmu.js";import"./SwitchBase-CZN2jDS4.js";import"./FormGroup-D8Ocobxf.js";import"./FormControlLabel-CYpBZGqx.js";import"./UploadDocumentField-zOnAa3Ri.js";import"./FileUpload-DJoGNx63.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BBLhaWEG.js";import"./GridLegacy-CcNSqfTl.js";import"./ResearchProjectForm-B8M5gAS3.js";import"./TextFieldWithWordLimit-D2jMp7fX.js";import"./AuthenticatedRequirement-ty5M9ltR.js";import"./CertificationRequirement-CdpdfSMT.js";import"./TwoFactorAuthEnabledRequirement-NZhzYAEu.js";import"./ValidationRequirement-DcSJ94gj.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CrJW1erk.js";import"./RejectDataAccessRequestModal-Csgq6PXT.js";import"./CannedRejectionDialog-C-nw9Mtf.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BgArY7GH.js";import"./Checkbox-D2ule7FR.js";import"./Grid-BA52H04o.js";import"./upperFirst-cu3C1wgQ.js";import"./_stringToArray-uahiwV50.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
