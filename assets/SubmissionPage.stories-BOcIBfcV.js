import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-D6eR7C50.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Ch1BhqtL.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-D9L0VwnG.js";import"./useAccessRequirements-gQcad0rg.js";import"./index-CabImiDI.js";import"./_baseOrderBy-BQEYYaRc.js";import"./_baseIteratee-Bwsp8yIO.js";import"./_baseMap-3-lUIYqN.js";import"./_baseEach-C_cqjCnk.js";import"./useQueries-CD6DplQM.js";import"./useInfiniteQuery-CffjsQaC.js";import"./groupBy-hJ3QlSp3.js";import"./_createAggregator-rT442lJB.js";import"./DialogBase-CGoUFCyI.js";import"./Close-B4yr33wu.js";import"./HelpPopover-BNtCkWxN.js";import"./MarkdownPopover-Bd8pVsTv.js";import"./LightTooltip-DyvHiMMn.js";import"./MarkdownSynapse-CDGiSRnF.js";import"./SkeletonButton-Btmr7__Y.js";import"./SkeletonInlineBlock-DkWMHFrC.js";import"./SkeletonTable-CT4J_TKG.js";import"./SkeletonParagraph-BWm0oiG8.js";import"./EntityLink-C2ot6Sel.js";import"./useEntity-DNufQQQW.js";import"./pickBy-x-ae5_pl.js";import"./isString-DZzqsFzJ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CHdBFY-B.js";import"./useGetEntityHeaders-JFLpFn8a.js";import"./EntityIcon-Mb6IP_Fm.js";import"./ErrorChip-WYQXKdvz.js";import"./Chip-Boc7yQYh.js";import"./UserOrTeamBadge-B6dGMwlt.js";import"./UserBadge-CblOoS-P.js";import"./MenuItem-UfkvjnI3.js";import"./Card-Bh-PD_aw.js";import"./TeamBadge-0GHngOF8.js";import"./UnmanagedACTAccessRequirementItem-BEn2XPu5.js";import"./RequirementItem-CsUZAvBr.js";import"./LockTwoTone-DfaNTCtA.js";import"./UserSearchBoxV2-B222O8iv.js";import"./useDebouncedEffect-jhVA5h32.js";import"./use-deep-compare-effect.esm-BZrDoxNT.js";import"./uniq--Rsa_ofS.js";import"./without-ptGzWfCl.js";import"./Select-aab027f3.esm-DOpeGcnQ.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-fEjqlo5m.js";import"./SelfSignAccessRequirementItem-CRXxaAQa.js";import"./DataAccessRequestAccessorsFilesForm-B7W_bU7I.js";import"./enums-BCf7Oar7.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-5qN4muQU.js";import"./RadioGroup-DAiYdEQJ.js";import"./Radio-6tuXV9rB.js";import"./SwitchBase-CYMouBrc.js";import"./FormGroup-ah1sm0cZ.js";import"./FormControlLabel-BRDNXXw1.js";import"./UploadDocumentField-BdQ8LWLM.js";import"./FileUpload-DrS_83x9.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DB7vcMZf.js";import"./GridLegacy-DpdR0vbs.js";import"./ResearchProjectForm-TrIvxJVT.js";import"./TextFieldWithWordLimit-CL5elJTf.js";import"./AuthenticatedRequirement-Bpa6mDVB.js";import"./CertificationRequirement-DqyhTb06.js";import"./TwoFactorAuthEnabledRequirement-M5TbqBCm.js";import"./ValidationRequirement-BpvZLyM5.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DE34bxGO.js";import"./RejectDataAccessRequestModal-BMoh5wLp.js";import"./CannedRejectionDialog-CljEq_mv.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-FZZd4L0v.js";import"./Checkbox-BLKUvkpE.js";import"./Grid-Bakrs6vU.js";import"./upperFirst-BEzp5CkS.js";import"./_stringToArray-CuHQPG7a.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
