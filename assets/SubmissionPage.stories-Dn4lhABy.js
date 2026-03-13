import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-SpTPUL8m.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BMTaOBYu.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-FyqIdMx0.js";import"./useAccessRequirements-DSZI34h1.js";import"./index-BPOVYvhU.js";import"./_baseOrderBy-lQS-Mv4J.js";import"./_baseIteratee-CaM8Iugn.js";import"./_baseMap-BruZldJj.js";import"./_baseEach-Dahxdq_T.js";import"./useInfiniteQuery-BpbmMIh3.js";import"./groupBy-DByvYmsn.js";import"./_createAggregator-DscQkVaH.js";import"./DialogBase-BJEwHP0p.js";import"./Close-CXggAjW9.js";import"./HelpPopover-BfVFLmxW.js";import"./MarkdownPopover-DmG1p_lZ.js";import"./LightTooltip-thM4wO9l.js";import"./MarkdownSynapse-D10-Vf-V.js";import"./SkeletonButton-BZ4aKRQm.js";import"./SkeletonInlineBlock-QplUKVpF.js";import"./SkeletonTable-BuAR6CBE.js";import"./SkeletonParagraph-CB5oiNEg.js";import"./EntityLink-XkjY8iAP.js";import"./useEntity-wFGgMglJ.js";import"./pickBy-lVBueDr9.js";import"./isString-CRjJcNPG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtG5jObx.js";import"./useGetEntityHeaders-CzKOxL5U.js";import"./EntityIcon-CIsQEd2k.js";import"./ErrorChip-Cd2oyG5k.js";import"./Chip-BbzLJe0J.js";import"./UserOrTeamBadge-BeQg6j1V.js";import"./UserBadge-WsW3e6pV.js";import"./useUserBundle-CMEzZcsf.js";import"./MenuItem-DMW1-yIZ.js";import"./Card-DnzMTA9B.js";import"./TeamBadge-DGAs2FEA.js";import"./UnmanagedACTAccessRequirementItem-BMjD1lZA.js";import"./RequirementItem-BWj6jVXE.js";import"./LockTwoTone-C6VImtNw.js";import"./UserSearchBoxV2-CGs7qNay.js";import"./useDebouncedEffect-Ce8QLVvt.js";import"./use-deep-compare-effect.esm-DwJuLYjs.js";import"./uniq-DWZFezQD.js";import"./without-BY-TcUMx.js";import"./Select-aab027f3.esm-qdn_iXa6.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CYL9MUM-.js";import"./SelfSignAccessRequirementItem-B6ukcXq4.js";import"./DataAccessRequestAccessorsFilesForm-D0Vco3hM.js";import"./enums-eDdn3xOo.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CRHUC28V.js";import"./RadioGroup-Bjuhxd8P.js";import"./Radio-CKRg1lRQ.js";import"./SwitchBase-BbkaKoSO.js";import"./FormGroup-BRBfqQ_H.js";import"./FormControlLabel-DqLQJsL_.js";import"./UploadDocumentField-DcEbZV3i.js";import"./FileUpload-DmIenjvS.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CkHkc1gi.js";import"./GridLegacy-GuhPfNSH.js";import"./ResearchProjectForm-CKqgEVs9.js";import"./TextFieldWithWordLimit-BeuXjb5p.js";import"./AuthenticatedRequirement-BBKWRTHk.js";import"./CertificationRequirement-C6n5G9ZL.js";import"./TwoFactorAuthEnabledRequirement-BF3Rf3Ks.js";import"./ValidationRequirement-CXbg8PIt.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BQWOYLzU.js";import"./RejectDataAccessRequestModal-Cwi3ROcM.js";import"./CannedRejectionDialog-DYGdy4ZR.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dh3Su1ip.js";import"./Checkbox-BJ4YMl8f.js";import"./Grid-BjgyTgS9.js";import"./upperFirst-CjX_vy75.js";import"./_stringToArray-RgUygvco.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
