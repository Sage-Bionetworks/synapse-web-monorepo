import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-CrIG5yS4.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CxZJ1DNm.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-vDRJDpjN.js";import"./useAccessRequirements-DNIKTqab.js";import"./index-CkF7h5xt.js";import"./_baseOrderBy-DvHCJEb1.js";import"./_baseIteratee-DOoR1yLg.js";import"./_baseMap-BR9_rnnd.js";import"./_baseEach-Bk7xNbyo.js";import"./useQueries-P_upU759.js";import"./useInfiniteQuery-C039Rys8.js";import"./groupBy-DUwWdP3O.js";import"./_createAggregator-BA0dCpMD.js";import"./DialogBase-CybwzTY6.js";import"./Close-5QnQ5lpW.js";import"./HelpPopover-C0SNysP_.js";import"./MarkdownPopover-oRHyMW2V.js";import"./LightTooltip-BhZaRT-T.js";import"./MarkdownSynapse-Cuq8Dn9Z.js";import"./SkeletonButton-C2iZcuLE.js";import"./SkeletonInlineBlock-DCJOzeCR.js";import"./SkeletonTable-CZxqZr7Y.js";import"./SkeletonParagraph-BI2gfc3a.js";import"./EntityLink-Dp6qKhmI.js";import"./useEntity-BnhSZW_7.js";import"./pickBy-Byj-lR1O.js";import"./isString-CsS5YLlt.js";import"./useSuspenseQuery-BDF5CGHD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czd_RrTj.js";import"./useGetEntityHeaders-B3bOfKZM.js";import"./EntityIcon-CSNxvLuv.js";import"./ErrorChip-DFBak9wm.js";import"./Chip-Cq9C0rq5.js";import"./UserOrTeamBadge-Bf2EkKM2.js";import"./UserBadge-BoI25jFW.js";import"./useUserBundle-WiP6qAW2.js";import"./MenuItem-DGqfgEGw.js";import"./Card-B7wB9TR3.js";import"./TeamBadge-CfeETvxl.js";import"./UnmanagedACTAccessRequirementItem-DOcJnr6P.js";import"./RequirementItem-DKhuGz-n.js";import"./LockTwoTone-DA5SoG5S.js";import"./UserSearchBoxV2-C3L_ugnV.js";import"./useDebouncedEffect-f-l14_cw.js";import"./use-deep-compare-effect.esm-C8hIuBLn.js";import"./uniq-Bx-nHlpT.js";import"./without-DPEgN0zp.js";import"./Select-aab027f3.esm-u03cN62F.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-COGZBdEu.js";import"./SelfSignAccessRequirementItem-BK-oQOSo.js";import"./DataAccessRequestAccessorsFilesForm-1S5rECLo.js";import"./enums-D8NNpohX.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-6EzGXDq8.js";import"./RadioGroup-BMCGwiH4.js";import"./Radio-Byzaf_13.js";import"./SwitchBase-B6cqD099.js";import"./FormGroup-Ba8YtojE.js";import"./FormControlLabel-BsHUDHzb.js";import"./UploadDocumentField-BgpnOb-L.js";import"./FileUpload-CLb5FWfn.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B0h-AhKn.js";import"./GridLegacy-CAx-cJ0N.js";import"./ResearchProjectForm-Pj8nHWHJ.js";import"./TextFieldWithWordLimit-CI3aUX7z.js";import"./AuthenticatedRequirement-D31tDWQj.js";import"./CertificationRequirement-CycjhEEz.js";import"./TwoFactorAuthEnabledRequirement-D5Y_nQeK.js";import"./ValidationRequirement-Co4n28IE.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-qNTtzGRS.js";import"./RejectDataAccessRequestModal-BWRExAKU.js";import"./CannedRejectionDialog-D58cfuSF.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-yahK5x44.js";import"./Checkbox-BbzG_W6j.js";import"./Grid-4tN69aUJ.js";import"./upperFirst-5vNBWzuS.js";import"./_stringToArray-NyHj1PB5.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
