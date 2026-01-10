import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-_xC4R-9l.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CARWMFEV.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-LuEF_1oC.js";import"./useAccessRequirements--8vwZ0GX.js";import"./index-CUKFaSIZ.js";import"./_baseOrderBy-DlaZ_3zZ.js";import"./_baseIteratee-qDJ48MbJ.js";import"./_baseMap-BwHlx4Pm.js";import"./_baseEach-BQPGiiEy.js";import"./useQueries-1X25ETRf.js";import"./useInfiniteQuery-_AZmyoIA.js";import"./groupBy-C9dxSi_y.js";import"./_createAggregator-BuUHNBCB.js";import"./DialogBase-Dp6M9JD0.js";import"./Close-BfP40Jkn.js";import"./HelpPopover-1mww7JNK.js";import"./MarkdownPopover-C9UGNyb0.js";import"./LightTooltip-C7ewj1jU.js";import"./MarkdownSynapse-Ct3w_uzW.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonTable-8K81cLuT.js";import"./SkeletonParagraph-BJTsWPfq.js";import"./EntityLink-B2AHB6yY.js";import"./useEntity-CkbUyaNW.js";import"./pickBy-Da3KKOg8.js";import"./isString-CEuCb2E6.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4ZZO_R4.js";import"./useGetEntityHeaders-BkCSwjCX.js";import"./EntityIcon-CWYcSe2S.js";import"./ErrorChip-Ds3v4a9w.js";import"./Chip-m593CfK4.js";import"./UserOrTeamBadge-BlH4nkjS.js";import"./UserBadge-D50lroBs.js";import"./useUserBundle-rH4zVLMU.js";import"./MenuItem-DRoOm8dg.js";import"./Card-Dc_-EwgO.js";import"./TeamBadge-CUaQHUss.js";import"./UnmanagedACTAccessRequirementItem-LcJLQ9-t.js";import"./RequirementItem-D4R_x7UQ.js";import"./LockTwoTone-DEhe39qP.js";import"./UserSearchBoxV2-DlKv38uV.js";import"./useDebouncedEffect-CqFDVG9-.js";import"./use-deep-compare-effect.esm-DFXjhKOc.js";import"./uniq-CkffBx9u.js";import"./without-CElzWP5e.js";import"./Select-aab027f3.esm-BZ8jb27s.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BAgwVvQ3.js";import"./SelfSignAccessRequirementItem-BrD9UBFG.js";import"./DataAccessRequestAccessorsFilesForm-CGAygPDm.js";import"./enums-CX4W2WkL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission--aGrWb7s.js";import"./RadioGroup-Cr5EaPni.js";import"./Radio-B2BFOAsU.js";import"./SwitchBase-CbqU8wJI.js";import"./FormGroup-DmhIZoIR.js";import"./FormControlLabel-p0SPpstb.js";import"./UploadDocumentField-BTB-NlhO.js";import"./FileUpload-DBlQoV8P.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Gsix0IYH.js";import"./GridLegacy-BtNSoadh.js";import"./ResearchProjectForm-DmrSf00D.js";import"./TextFieldWithWordLimit-D0DrJ81A.js";import"./AuthenticatedRequirement-B-fF1ww-.js";import"./CertificationRequirement-B5aLy_bX.js";import"./TwoFactorAuthEnabledRequirement-DlUnym00.js";import"./ValidationRequirement-BNTKibtz.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BMO3HEa-.js";import"./RejectDataAccessRequestModal-D8MFpct-.js";import"./CannedRejectionDialog-ga6l57tW.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CL4wb7EO.js";import"./Checkbox-CVG3iDMB.js";import"./Grid-DCv41BH4.js";import"./upperFirst-BnJuTmkn.js";import"./_stringToArray-C6qNY92J.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
