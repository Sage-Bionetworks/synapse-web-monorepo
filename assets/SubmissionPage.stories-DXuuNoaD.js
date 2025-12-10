import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-DDhTpaiN.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D7ndtixz.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CFO9XnQ7.js";import"./useAccessRequirements-sF7fsUeM.js";import"./index-CbHlJG0N.js";import"./_baseOrderBy-43vKHSJN.js";import"./_baseIteratee-S_bIqSpZ.js";import"./_baseMap-AibsRsd1.js";import"./_baseEach-Cc-rW067.js";import"./useQueries-CU3GYIqx.js";import"./useInfiniteQuery-WylDUJuR.js";import"./groupBy-CxPjDlTW.js";import"./_createAggregator-BywQm9Th.js";import"./DialogBase-Ds-EIWQV.js";import"./Close-yIz_Rnht.js";import"./HelpPopover-DFH7dgbi.js";import"./MarkdownPopover-BfZR9eJo.js";import"./LightTooltip-B0ycAwvg.js";import"./MarkdownSynapse-F_8I-qdj.js";import"./SkeletonButton-B-QMOvKw.js";import"./SkeletonInlineBlock-CdyxEaU6.js";import"./SkeletonTable-ChlY7W2j.js";import"./SkeletonParagraph-Cj3UMufw.js";import"./EntityLink-BsMX3C7o.js";import"./useEntity-BnvvdKxg.js";import"./pickBy-CI2-0LWO.js";import"./isString-BU1whTrg.js";import"./useSuspenseQuery-B6kRqu6j.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-9BrXtJQN.js";import"./useGetEntityHeaders-DzfIaMnr.js";import"./EntityIcon-5emiQAAE.js";import"./ErrorChip-B3cjb9Vk.js";import"./Chip-r9VwJov-.js";import"./UserOrTeamBadge-DVVYcUli.js";import"./UserBadge-1GmJuGEP.js";import"./useUserBundle-JI9M20M0.js";import"./MenuItem-XgALiosb.js";import"./Card-3X1jzd0p.js";import"./TeamBadge-DsfWRL7s.js";import"./UnmanagedACTAccessRequirementItem-hhenUyQt.js";import"./RequirementItem-BSAV8VGT.js";import"./LockTwoTone-Do5WBuhe.js";import"./UserSearchBoxV2-CYYvEmz0.js";import"./useDebouncedEffect-BRDMJwJK.js";import"./use-deep-compare-effect.esm-DB6_UhnX.js";import"./uniq-1Rzl_xO6.js";import"./without-yW0TvHHh.js";import"./Select-aab027f3.esm-DKL7Ov-k.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DZq7F8Ez.js";import"./SelfSignAccessRequirementItem-CR6_jE2g.js";import"./DataAccessRequestAccessorsFilesForm-D3qV3qok.js";import"./enums-DzYRf6zF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-mIQKzTmU.js";import"./RadioGroup-zK5i5hZ0.js";import"./Radio-DurrxbBG.js";import"./SwitchBase-D8330Uqr.js";import"./FormGroup-BFIthmeE.js";import"./FormControlLabel-CaY2KlcA.js";import"./UploadDocumentField-BZ7r_2Kb.js";import"./FileUpload-BhP84GgI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DtCxEOCT.js";import"./GridLegacy-DhWlB9WS.js";import"./ResearchProjectForm-xDsyCReq.js";import"./TextFieldWithWordLimit-BnqR4dfY.js";import"./AuthenticatedRequirement-qHTaca5s.js";import"./CertificationRequirement-Cde1clhM.js";import"./TwoFactorAuthEnabledRequirement-m7FWAIeu.js";import"./ValidationRequirement-CU6u3gyG.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D0_Dpx_W.js";import"./RejectDataAccessRequestModal-VknnvNaI.js";import"./CannedRejectionDialog-BBQrzD0Q.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-5860BvFb.js";import"./Checkbox-DvfxPkUW.js";import"./Grid-CE9U51DR.js";import"./upperFirst-BG3iaGJX.js";import"./_stringToArray-DKegWlKk.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
