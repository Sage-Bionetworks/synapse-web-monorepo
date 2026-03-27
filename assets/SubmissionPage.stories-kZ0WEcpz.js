import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-C0AexDGo.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-RCVL9nXY.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-YnJLo8Im.js";import"./useAccessRequirements-gm9L2nUe.js";import"./index-BLmC8C9J.js";import"./_baseOrderBy-CQnT6_z2.js";import"./_baseIteratee-Cumo85pk.js";import"./_baseMap-DuuksuE2.js";import"./_baseEach-BYTNHSI6.js";import"./useInfiniteQuery-B2H1bPeH.js";import"./groupBy-5y3ZbfdA.js";import"./_createAggregator-BSTGRsRl.js";import"./DialogBase-DEQixVmG.js";import"./Close-BSsXOVcm.js";import"./HelpPopover-CVzUoBki.js";import"./MarkdownPopover-DABKYL5O.js";import"./LightTooltip-D8PwR5sb.js";import"./MarkdownSynapse-BQk4puC1.js";import"./SkeletonButton-BkD5G1Zw.js";import"./SkeletonInlineBlock-BJifXgdu.js";import"./SkeletonTable-ButMnzRS.js";import"./SkeletonParagraph-BSPRuMA0.js";import"./EntityLink-BLP0ZZDN.js";import"./useEntity-0eq8IzEx.js";import"./pickBy-BKiqvuJk.js";import"./isString-CEp7wxdK.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C-QbFGo_.js";import"./useGetEntityHeaders-CsH2S6ZZ.js";import"./EntityIcon-C-B7zRkw.js";import"./ErrorChip-g9xrxoGJ.js";import"./Chip-7BiG69Cu.js";import"./UserOrTeamBadge-BTO2J4xE.js";import"./UserBadge-KYcTRXZe.js";import"./useUserBundle-BrZlfjEn.js";import"./MenuItem-CS8tSfW4.js";import"./Card-CavtJPUI.js";import"./TeamBadge-Ccbng3VO.js";import"./UnmanagedACTAccessRequirementItem-CSyL7Sto.js";import"./RequirementItem-BqUiurYl.js";import"./LockTwoTone-aMox0kDy.js";import"./UserSearchBoxV2-BntAbD93.js";import"./useDebouncedEffect-CORDx2To.js";import"./use-deep-compare-effect.esm-DvTX_KHd.js";import"./uniq-ZZe97vhK.js";import"./without-C21aeYpK.js";import"./Select-aab027f3.esm-C9aQwyIJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Zflxmwzk.js";import"./SelfSignAccessRequirementItem-CMjRsT0K.js";import"./DataAccessRequestAccessorsFilesForm-szc-D5Zf.js";import"./enums-Cm5_FEh0.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BhWmyiyz.js";import"./RadioGroup-COY7vPKR.js";import"./Radio-BWHwd3Go.js";import"./SwitchBase-BMyeD8S1.js";import"./FormGroup-vwjDuQmv.js";import"./FormControlLabel-BzeqMExL.js";import"./UploadDocumentField-SNg9ZwhX.js";import"./FileUpload-D7CeDAzd.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B1CmCkRi.js";import"./GridLegacy-Bq04Khpx.js";import"./ResearchProjectForm-Ds-PHQld.js";import"./TextFieldWithWordLimit-BA03uaXx.js";import"./AuthenticatedRequirement-C-fYiFj7.js";import"./CertificationRequirement-CtNuTTm7.js";import"./TwoFactorAuthEnabledRequirement-QPO1c4Nz.js";import"./ValidationRequirement-D1TB4-ZS.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-a63-Hy7Q.js";import"./RejectDataAccessRequestModal-C9m0RQ0v.js";import"./CannedRejectionDialog-oSN0dKGj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Tlg0AvaS.js";import"./Checkbox-B3_Pm9Q5.js";import"./Grid-BoLhaorR.js";import"./upperFirst-DX7MWV4n.js";import"./_stringToArray-DigW8jJB.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
