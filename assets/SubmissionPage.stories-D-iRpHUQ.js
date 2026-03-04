import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-BoxuKy9E.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CxjvP93v.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DXXvM-AB.js";import"./useAccessRequirements-DTI3EWsr.js";import"./index-Log0dJvg.js";import"./_baseOrderBy-a7LEQnpv.js";import"./_baseIteratee-DjnxVzYp.js";import"./_baseMap-n6KAJL3v.js";import"./_baseEach-D_05QTIw.js";import"./useInfiniteQuery-BcQtjXyf.js";import"./groupBy-DTc3ytOl.js";import"./_createAggregator-BxawsJms.js";import"./DialogBase-D71Bzuhw.js";import"./Close-D2FDtn_Z.js";import"./HelpPopover-D7Iu88Kq.js";import"./MarkdownPopover-4O8M2I8a.js";import"./LightTooltip-DwenlRx7.js";import"./MarkdownSynapse-CBVUbKcu.js";import"./SkeletonButton-BIE6flyK.js";import"./SkeletonInlineBlock-BI06okMA.js";import"./SkeletonTable-BDD50YXU.js";import"./SkeletonParagraph-Cla7VaV-.js";import"./EntityLink-BrZLz9ty.js";import"./useEntity-DZwAKLC3.js";import"./pickBy-CU-qiH3K.js";import"./isString-cGe6Knce.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BedGSkPc.js";import"./useGetEntityHeaders-BLM6vhhZ.js";import"./EntityIcon-RuyaSbD0.js";import"./ErrorChip-DzaP61YR.js";import"./Chip-BVijHoac.js";import"./UserOrTeamBadge-C1irOvZi.js";import"./UserBadge-BiME232n.js";import"./useUserBundle-xbyPhtej.js";import"./MenuItem-BGU-QKhy.js";import"./Card-BkInqMDB.js";import"./TeamBadge-CO1y4b8W.js";import"./UnmanagedACTAccessRequirementItem-sDzFT2Zh.js";import"./RequirementItem-BMXqR-44.js";import"./LockTwoTone-CJHnzd5X.js";import"./UserSearchBoxV2-BNYueu9x.js";import"./useDebouncedEffect-Di3GQSjY.js";import"./use-deep-compare-effect.esm-BUxnnlx1.js";import"./uniq-8qCqnpBT.js";import"./without-BZtIYbuf.js";import"./Select-aab027f3.esm-DMjouvR_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CZukPvFe.js";import"./SelfSignAccessRequirementItem-B-vL6TMF.js";import"./DataAccessRequestAccessorsFilesForm-CkktvOWK.js";import"./enums-BPAcbw6K.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DJc-6noa.js";import"./RadioGroup-DGG00gjv.js";import"./Radio-DjmiLLEp.js";import"./SwitchBase-DQ2FRVZS.js";import"./FormGroup-BxKkDOAB.js";import"./FormControlLabel-Ba5VS2KY.js";import"./UploadDocumentField-sZFLBBUu.js";import"./FileUpload-Cgol-lgY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-2xcGNgFD.js";import"./GridLegacy-CSFRqASR.js";import"./ResearchProjectForm-BOvY8ANR.js";import"./TextFieldWithWordLimit-DZo2ri6G.js";import"./AuthenticatedRequirement-KYpaomL4.js";import"./CertificationRequirement-DEJsh0_X.js";import"./TwoFactorAuthEnabledRequirement-C9ZlwDLm.js";import"./ValidationRequirement-BMzRf--M.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DhTcKp3H.js";import"./RejectDataAccessRequestModal-Bwvqex7m.js";import"./CannedRejectionDialog-DuDAjeGl.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CIPv0_VW.js";import"./Checkbox-Crz05bF2.js";import"./Grid-gldVkERl.js";import"./upperFirst-BMbhzeKs.js";import"./_stringToArray-Ca1PdXp3.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
