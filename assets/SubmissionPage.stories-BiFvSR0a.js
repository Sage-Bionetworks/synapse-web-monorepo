import{g as I,k as S,n as t,a2 as O,an as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,k6 as A}from"./iframe-BDc0Xlhy.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BcljZYPq.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B8MJSjMB.js";import"./useAccessRequirements-Dflf79p8.js";import"./index-C41l0OuT.js";import"./_baseOrderBy-B8qDrLNJ.js";import"./_baseIteratee-CJS0VTxt.js";import"./_baseMap-CAw--vsR.js";import"./_baseEach-Lkq8QNxf.js";import"./useQueries-D1wUNo_x.js";import"./useInfiniteQuery-CsjtSfjB.js";import"./groupBy-CUWVOhLH.js";import"./_createAggregator-g1y94DAA.js";import"./DialogBase-B1eCoCTw.js";import"./Close-CUTSnCxN.js";import"./HelpPopover-B3UcgT8N.js";import"./MarkdownPopover-BGH4CVk-.js";import"./LightTooltip-DBJFfDVa.js";import"./MarkdownSynapse-GiDTGx5a.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonTable-DvNgt2M0.js";import"./SkeletonParagraph-BrPTge09.js";import"./EntityLink-Bjr2qmsS.js";import"./useEntity-BYd3D3ad.js";import"./pickBy-JkhkWReG.js";import"./isString-CG7XuiJe.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C928kgNG.js";import"./useGetEntityHeaders-lpxCWaG1.js";import"./EntityIcon-CXId3Fxa.js";import"./ErrorChip-JRWUBDCy.js";import"./Chip-BVXU1kgT.js";import"./UserOrTeamBadge-BqIWhxBx.js";import"./UserBadge-DJ1RxlFI.js";import"./MenuItem-CGmsTxjm.js";import"./Card-Cd1qTK2e.js";import"./TeamBadge-BSGmQsKz.js";import"./UnmanagedACTAccessRequirementItem-JsnVHIMO.js";import"./RequirementItem-XZYCXB8p.js";import"./LockTwoTone-Vu_uwx3C.js";import"./UserSearchBoxV2-B-GLFMI0.js";import"./useDebouncedEffect-CnkYQ3kG.js";import"./use-deep-compare-effect.esm-DHzSo00o.js";import"./uniq-B8EPpNaJ.js";import"./without-DKR0wDNr.js";import"./Select-aab027f3.esm-LYXm8y3H.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-B_EMO__c.js";import"./SelfSignAccessRequirementItem-B4RSg8E8.js";import"./DataAccessRequestAccessorsFilesForm-BJ67nyDW.js";import"./enums-DlJWIkFQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-4-JJrwYi.js";import"./RadioGroup-DohUy2LD.js";import"./Radio-DA5AYJ9b.js";import"./SwitchBase-DmlvyMWs.js";import"./FormGroup-CJnNStMK.js";import"./FormControlLabel-B4mFleYZ.js";import"./UploadDocumentField-Cf5MFskq.js";import"./FileUpload-DEBr7KAo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D1boRA-u.js";import"./GridLegacy-BFLBbxNn.js";import"./ResearchProjectForm-DMrKRoQ0.js";import"./TextFieldWithWordLimit-CrR3U0Ff.js";import"./AuthenticatedRequirement-BjYn6ff_.js";import"./CertificationRequirement-DLW8oW88.js";import"./TwoFactorAuthEnabledRequirement-CLZsfSJk.js";import"./ValidationRequirement-qKGVGeEh.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DT0w0cuk.js";import"./RejectDataAccessRequestModal-CnuB5uxW.js";import"./CannedRejectionDialog-CxeYpch0.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-VnZWqUcw.js";import"./Checkbox-CqOtMQXw.js";import"./Grid-DJrpU52t.js";import"./upperFirst-BSdBirsw.js";import"./_stringToArray-D3dWSk5n.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
