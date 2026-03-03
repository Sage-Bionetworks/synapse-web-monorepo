import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-CR9Kppk9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DGZSzesE.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BjCEE7aF.js";import"./useAccessRequirements-BwTB5lmZ.js";import"./index-CTj_7GLi.js";import"./_baseOrderBy-BYfxWAAx.js";import"./_baseIteratee-DMXgAEIk.js";import"./_baseMap-BF4oj2Kl.js";import"./_baseEach-mi46k9dW.js";import"./useInfiniteQuery-CfvRCTip.js";import"./groupBy-CVnsVeDd.js";import"./_createAggregator-BvNfnNZC.js";import"./DialogBase-DXW71yq5.js";import"./Close-4K7Ixs7T.js";import"./HelpPopover-DZ345V92.js";import"./MarkdownPopover-olh3PRGS.js";import"./LightTooltip-z2lc9QXh.js";import"./MarkdownSynapse-C76XvQvw.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonTable-DJdtHoqT.js";import"./SkeletonParagraph-DAQxrYxE.js";import"./EntityLink-DlK4yqUG.js";import"./useEntity-B9CBydGO.js";import"./pickBy-CKX9T9Zm.js";import"./isString-d8Zj9Cvt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BH6Cb_YX.js";import"./useGetEntityHeaders-tU3Ddv74.js";import"./EntityIcon-BSbauZWO.js";import"./ErrorChip-AC9_1Wjy.js";import"./Chip-B6UQirNv.js";import"./UserOrTeamBadge-Bj4ioeqn.js";import"./UserBadge-CJm2e0vF.js";import"./useUserBundle-BZz123Kg.js";import"./MenuItem-CatSzqG9.js";import"./Card-NdZ0o22H.js";import"./TeamBadge-Wj2QxLQh.js";import"./UnmanagedACTAccessRequirementItem-BFsHppiH.js";import"./RequirementItem-DOifkfv5.js";import"./LockTwoTone-Dsnae97u.js";import"./UserSearchBoxV2-CTZsjJc3.js";import"./useDebouncedEffect-B4osGQWy.js";import"./use-deep-compare-effect.esm-DxKcMd8s.js";import"./uniq-Bmsqcuv3.js";import"./without-BJBdBmJs.js";import"./Select-aab027f3.esm-D1BoHFrG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CX18p6iy.js";import"./SelfSignAccessRequirementItem-DxdsJufW.js";import"./DataAccessRequestAccessorsFilesForm-Bs9B0hxJ.js";import"./enums-BXE4QEWQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C74XK6io.js";import"./RadioGroup-I8PLTBDT.js";import"./Radio-C3MmNDfe.js";import"./SwitchBase-CsuXxPzE.js";import"./FormGroup-NUnFvp6L.js";import"./FormControlLabel-BQUL44l6.js";import"./UploadDocumentField-amtUsSbV.js";import"./FileUpload-DhvyVMn8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CqFMdpgI.js";import"./GridLegacy-DWXUChHI.js";import"./ResearchProjectForm-DVzSZwAo.js";import"./TextFieldWithWordLimit-CRd1voCL.js";import"./AuthenticatedRequirement-B989NTT8.js";import"./CertificationRequirement-Bjym38bm.js";import"./TwoFactorAuthEnabledRequirement-Dklq6upF.js";import"./ValidationRequirement-BpAt1pVU.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-sKsc2u2_.js";import"./RejectDataAccessRequestModal-CPJ9WgAW.js";import"./CannedRejectionDialog-D3FzI-YJ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BXteRzfy.js";import"./Checkbox-wG1Izzux.js";import"./Grid-Dh0yaqaz.js";import"./upperFirst-BLd1ikYZ.js";import"./_stringToArray-BEAGm0ly.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
