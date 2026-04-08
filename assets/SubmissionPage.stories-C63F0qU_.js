import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CtEx53-_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cs8qW3eG.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bw-iTav-.js";import"./useAccessRequirements--6VqrKGB.js";import"./index-rzZ2fsR5.js";import"./_baseOrderBy-BWOk7gZa.js";import"./_baseIteratee-DFplgjax.js";import"./_baseMap-CjZW9z3J.js";import"./_baseEach-HWQ9n9Hl.js";import"./useInfiniteQuery-Btk7RS4S.js";import"./groupBy-D9Sk8qsj.js";import"./_createAggregator-C-c6nyOe.js";import"./DialogBase-ChLejIKB.js";import"./Close-DYbs631P.js";import"./HelpPopover-DPQexwMD.js";import"./MarkdownPopover-D5Nx0R4H.js";import"./LightTooltip-Ceq6WBqp.js";import"./MarkdownSynapse-DIm3O9Y2.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonTable-DXr3KoSK.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./EntityLink-COPDboGC.js";import"./useEntity-CF7ht95y.js";import"./pickBy-dY2VI2H0.js";import"./isString-BOcPC5Uo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BMtGOipm.js";import"./useGetEntityHeaders-FzezufYb.js";import"./EntityIcon-Ccd0Toj5.js";import"./ErrorChip-BsjRhDud.js";import"./Chip-DZZXMgyG.js";import"./UserOrTeamBadge-2XRFTVu7.js";import"./UserBadge-DEyjEyEt.js";import"./useUserBundle-CU45jpjR.js";import"./MenuItem-FhFL09-C.js";import"./Card-CEnckPzK.js";import"./TeamBadge-0I4uK5gl.js";import"./UnmanagedACTAccessRequirementItem-DnNqioX2.js";import"./RequirementItem-D3MPNwjX.js";import"./LockTwoTone-CB34SugQ.js";import"./ManagedACTAccessRequirementItemView-Cvd1iimf.js";import"./SelfSignAccessRequirementItem-CsGlrl4h.js";import"./DataAccessRequestAccessorsFilesForm-BGZJzdT5.js";import"./enums-DmCcQw-A.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-kuerPv1f.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-C3iLV0sA.js";import"./UserSearchBox-CCxUf5Ve.js";import"./useDebouncedEffect-B_oSl5Sa.js";import"./Autocomplete-CgP-x_Uf.js";import"./usePreviousProps-BB8cbwq6.js";import"./RadioGroup-Dlh87QOv.js";import"./Radio-DBSQJCbQ.js";import"./SwitchBase-BK1TFQJS.js";import"./FormGroup-CW8hnT3G.js";import"./FormControlLabel-CkOhorz7.js";import"./UploadDocumentField-rQuBlIVy.js";import"./FileUpload-BEtqdvWO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BdaSigw4.js";import"./GridLegacy-IrN3TlmF.js";import"./ResearchProjectForm-BTt0RWAx.js";import"./TextFieldWithWordLimit-D4ba5zhU.js";import"./AuthenticatedRequirement-BqtUiFNr.js";import"./CertificationRequirement-D8nG3-gc.js";import"./TwoFactorAuthEnabledRequirement-Bhp4jcSv.js";import"./ValidationRequirement-CXyGlHkn.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DyQ7GshW.js";import"./RejectDataAccessRequestModal-ARSV3BnD.js";import"./CannedRejectionDialog-Chp1OzlT.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-D10OfoxA.js";import"./Checkbox-OtBfanQo.js";import"./Grid-Dx2Bd5oi.js";import"./upperFirst-DXve1lNB.js";import"./_stringToArray-C-GUunsV.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
