import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-HaQTQwuz.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cm5-Y_P7.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-VK03LEwb.js";import"./useAccessRequirements-XdwbVJy7.js";import"./index-2-kVSTun.js";import"./_baseOrderBy-Dkf75jER.js";import"./_baseIteratee-DKLhN1qh.js";import"./_baseMap-CH7s2_hf.js";import"./_baseEach-CBBwMrU5.js";import"./useInfiniteQuery-CVhxs5X4.js";import"./groupBy-gO-WqUNt.js";import"./_createAggregator-CPC-g0R_.js";import"./DialogBase-BGWg1_MF.js";import"./Close-CLcgasCJ.js";import"./HelpPopover-BdYbfqqB.js";import"./MarkdownPopover-BuTTNvu2.js";import"./LightTooltip-CXV6Zg8J.js";import"./MarkdownSynapse-_sUPNSUy.js";import"./SkeletonButton-C1NUZf-j.js";import"./SkeletonInlineBlock-CG5Fd-uS.js";import"./SkeletonTable-D-YEDgDk.js";import"./SkeletonParagraph-BNWGzJpn.js";import"./EntityLink-CHLp2FjP.js";import"./useEntity-ByrB7KpH.js";import"./pickBy-L5QMPLXV.js";import"./isString-rtaSDnNo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DITbluvm.js";import"./useGetEntityHeaders-D_ZH0E7L.js";import"./EntityIcon-BXYO9uQX.js";import"./ErrorChip-B5PXJSYh.js";import"./Chip-DJaXVpz2.js";import"./UserOrTeamBadge--xGTAPl_.js";import"./UserBadge-Bttymvw9.js";import"./useUserBundle-BnHzx4-z.js";import"./MenuItem-B4mCMP0L.js";import"./Card-CkmLhGx3.js";import"./TeamBadge-CnzgEQdI.js";import"./UnmanagedACTAccessRequirementItem-Rb5DJm7d.js";import"./RequirementItem-M_sJDLFw.js";import"./LockTwoTone-CobH5TGp.js";import"./UserSearchBoxV2-VqQIC3hj.js";import"./useDebouncedEffect-OT2D1-O8.js";import"./use-deep-compare-effect.esm-_U7z7y2a.js";import"./uniq-DuWc8qRl.js";import"./without-BSYbk_Sh.js";import"./Select-aab027f3.esm-COK-aNf9.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-mZ4WM36N.js";import"./SelfSignAccessRequirementItem-1FBDdcAC.js";import"./DataAccessRequestAccessorsFilesForm-B5_fA0N_.js";import"./enums-BuvKA102.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BWe2kWsj.js";import"./RadioGroup-DUxic5wS.js";import"./Radio-CK1vJ4lJ.js";import"./SwitchBase-DNv6rmKB.js";import"./FormGroup-Du1OjfKR.js";import"./FormControlLabel-CJMxTvsN.js";import"./UploadDocumentField-CcC5URyX.js";import"./FileUpload-PnJVBNEF.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BrZV2BhX.js";import"./GridLegacy-DUB5nkC0.js";import"./ResearchProjectForm-Bk8dfZi2.js";import"./TextFieldWithWordLimit-DxitoI-f.js";import"./AuthenticatedRequirement-DYffD-v0.js";import"./CertificationRequirement-UgIT1Avq.js";import"./TwoFactorAuthEnabledRequirement-CnHfJF5F.js";import"./ValidationRequirement-DDdA2S_b.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-LzM6v7QB.js";import"./RejectDataAccessRequestModal-D8yxChZn.js";import"./CannedRejectionDialog-p-ja3g65.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CtUPDTih.js";import"./Checkbox-AXkPgLsp.js";import"./Grid-vjmvCGFI.js";import"./upperFirst-CBWbN8n8.js";import"./_stringToArray-eATFg12b.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
