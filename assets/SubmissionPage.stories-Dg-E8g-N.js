import{g as u,a as e,q as d,u as t,kq as i,kr as c,H as s,ks as R,l as m,kt as E,ku as _,a1 as I,dO as S,k9 as O}from"./iframe-DWQ8siyH.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BMzfnSuu.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cwdkvf4x.js";import"./useAccessRequirements-BQ0XOVXE.js";import"./index-Dx8jX-FA.js";import"./_baseOrderBy-BsRgUF4a.js";import"./_baseIteratee-BRGnOUnX.js";import"./_baseMap-D4OvXgY2.js";import"./_baseEach-C_WN81a2.js";import"./useInfiniteQuery-BisHU3cB.js";import"./groupBy-tNsZpNlI.js";import"./_createAggregator-DXbxkcdz.js";import"./DialogBase-CQETkKuv.js";import"./Close-DMjBYuim.js";import"./HelpPopover-BNtY5zzD.js";import"./MarkdownPopover-Bj7uEVPu.js";import"./LightTooltip-BRCcdYv9.js";import"./MarkdownSynapse-BZXBdfm0.js";import"./SkeletonButton-Drh7CQoD.js";import"./SkeletonInlineBlock-U2SdkY6_.js";import"./SkeletonTable-pyMLa-VH.js";import"./SkeletonParagraph-BzFwIbvm.js";import"./EntityLink-BFurk0aK.js";import"./useEntity-CemX_yFc.js";import"./pickBy-Bzj7YESH.js";import"./isString-BC34wddM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BG8Jg50Y.js";import"./useGetEntityHeaders-BoYrYPUt.js";import"./EntityIcon-BsuWTDsC.js";import"./ErrorChip-DAtznEkn.js";import"./Chip--ZUBGmuC.js";import"./UserOrTeamBadge-C8ghOn9w.js";import"./UserBadge-DnxnUVWx.js";import"./useUserBundle-C6KLzzS2.js";import"./MenuItem-B0BEM2XP.js";import"./Card-WCaqP096.js";import"./TeamBadge-CiS2rmfU.js";import"./UnmanagedACTAccessRequirementItem-DTeZN6iI.js";import"./RequirementItem-CmlHNfCg.js";import"./LockTwoTone-DHGZ51Jg.js";import"./UserSearchBoxV2-BWyENg9-.js";import"./useDebouncedEffect-C55SJiWe.js";import"./use-deep-compare-effect.esm-CQ4cJG4K.js";import"./uniq-CholbGe1.js";import"./without-B5WEBOHu.js";import"./Select-aab027f3.esm-C-z2SwsW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-MY9VtIXx.js";import"./SelfSignAccessRequirementItem-D6ecfZvn.js";import"./DataAccessRequestAccessorsFilesForm-DZg0RW_8.js";import"./enums-D4H15Glw.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-zzjWeqSa.js";import"./RadioGroup-CcWgzkjC.js";import"./Radio-Bia9D3vJ.js";import"./SwitchBase-CaB4uxt0.js";import"./FormGroup-8g6PCwz0.js";import"./FormControlLabel-BVEDJFnl.js";import"./UploadDocumentField-Bsk-wC-H.js";import"./FileUpload-Ch2CJsze.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CLqvm39r.js";import"./GridLegacy-ZcQ8R6mC.js";import"./ResearchProjectForm-BJFcQQNQ.js";import"./TextFieldWithWordLimit-aeshqwW8.js";import"./AuthenticatedRequirement-CRUhY29y.js";import"./CertificationRequirement-Dp-cs7mO.js";import"./TwoFactorAuthEnabledRequirement-DIA-76o7.js";import"./ValidationRequirement-CovE2Vfm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-uxfvMThX.js";import"./RejectDataAccessRequestModal-v4puI1Hr.js";import"./CannedRejectionDialog-CO2BQGX0.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CP1Ez-p2.js";import"./Checkbox-DB5drz-0.js";import"./Grid-CHqLmyHD.js";import"./upperFirst-BeZfMxpW.js";import"./_stringToArray--7DxExgH.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
