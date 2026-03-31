import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DGtd-eZ6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BMdqjO9V.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ZO6jC2y1.js";import"./useAccessRequirements-Bq3pO1EH.js";import"./index-DRd13Kob.js";import"./_baseOrderBy-DTcwwgEX.js";import"./_baseIteratee-BgTTVm_D.js";import"./_baseMap-Dxa9HPgV.js";import"./_baseEach--0hMyPgP.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./groupBy-34Fa4IAe.js";import"./_createAggregator-DtOCXncp.js";import"./DialogBase-CMc4lLby.js";import"./Close-B_IJwyX4.js";import"./HelpPopover-Bexa4l-J.js";import"./MarkdownPopover-DFLb2Nun.js";import"./LightTooltip-DPmJZKdH.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./EntityLink-jpj9dWFR.js";import"./useEntity-CMENiSzy.js";import"./pickBy-CPD5pXPT.js";import"./isString-AovqDiFR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dzzt5U3d.js";import"./useGetEntityHeaders-DK-RsXTp.js";import"./EntityIcon-DGG0bt2n.js";import"./ErrorChip-CpHcjGQ_.js";import"./Chip-CNav__8J.js";import"./UserOrTeamBadge-C_Em0EsJ.js";import"./UserBadge-C0S6rE_-.js";import"./useUserBundle-17T_kydg.js";import"./MenuItem-CRv6srlg.js";import"./Card-DHfeIgmt.js";import"./TeamBadge-wmwHy1Ot.js";import"./UnmanagedACTAccessRequirementItem-BgslPDFe.js";import"./RequirementItem-Ba_kXJab.js";import"./LockTwoTone-BzwGyDaX.js";import"./UserSearchBoxV2-CIdja0_5.js";import"./useDebouncedEffect-C8q7VQIr.js";import"./use-deep-compare-effect.esm-B3mW5v7b.js";import"./uniq-C_FJSP72.js";import"./without-5J-PU-jN.js";import"./Select-aab027f3.esm-zSKB6C7Z.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-y97aQDMa.js";import"./SelfSignAccessRequirementItem-wfOM7mXX.js";import"./DataAccessRequestAccessorsFilesForm-BxEwxefh.js";import"./enums-DPzEGcHl.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DUfPCbVV.js";import"./RadioGroup-D01Aadpn.js";import"./Radio-BkF8Viur.js";import"./SwitchBase-Dn46TZef.js";import"./FormGroup-DgGSOL0T.js";import"./FormControlLabel-B15ZDtUx.js";import"./UploadDocumentField-Cg_hGZqy.js";import"./FileUpload-DmsFdKHg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DXRhGsC0.js";import"./GridLegacy-Cnu1qcV6.js";import"./ResearchProjectForm-Cd-XSh4h.js";import"./TextFieldWithWordLimit-NYnA-kGU.js";import"./AuthenticatedRequirement-D0EIbbs0.js";import"./CertificationRequirement-DkpfZD7x.js";import"./TwoFactorAuthEnabledRequirement-BVuJwiKe.js";import"./ValidationRequirement-n_kuwTQL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CEFpt6Ir.js";import"./RejectDataAccessRequestModal-C4kTTLtu.js";import"./CannedRejectionDialog-BdA6btpC.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-GQl5NATU.js";import"./Checkbox-DApcw3ET.js";import"./Grid-CUXDyCY5.js";import"./upperFirst-CCWQVBmH.js";import"./_stringToArray-Cg6pNURo.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
