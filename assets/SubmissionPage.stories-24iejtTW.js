import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-E5Ka0mIZ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BK_I04po.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-8NMrXKqx.js";import"./useAccessRequirements-1-Q1slqh.js";import"./index-Cv8vAGy5.js";import"./_baseOrderBy-Cnq4q8EF.js";import"./_baseIteratee-D6PNAt1_.js";import"./_baseMap-DSEb_IbP.js";import"./_baseEach-C0RJNqJx.js";import"./useInfiniteQuery-DcuDXesA.js";import"./groupBy-HsI6D_yx.js";import"./_createAggregator-Dp3u85SY.js";import"./DialogBase-JVTM_oQl.js";import"./Close-EPxz31Ms.js";import"./HelpPopover-CvoNF05b.js";import"./MarkdownPopover-DD6HYN95.js";import"./LightTooltip-B5aPrNqD.js";import"./MarkdownSynapse-BDwlDcaF.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonTable-Crx1Nozv.js";import"./SkeletonParagraph-9oETCVT4.js";import"./EntityLink-CAK_ZE9P.js";import"./useEntity-KCwb7Xcv.js";import"./pickBy-CA13yUMQ.js";import"./isString-BHWtDWMA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CrDwVx5c.js";import"./useGetEntityHeaders-Dl_M548F.js";import"./EntityIcon-uii8VAgq.js";import"./ErrorChip-DV_XRwDA.js";import"./Chip-Bk7-WqYd.js";import"./UserOrTeamBadge-BFXuWkxT.js";import"./UserBadge-BNHf5Pka.js";import"./useUserBundle-BGioipGE.js";import"./MenuItem-DBqDOy7_.js";import"./Card-zpRmv5OW.js";import"./TeamBadge-CtK7iXzO.js";import"./UnmanagedACTAccessRequirementItem-1-YTcI1o.js";import"./RequirementItem-BJUVmTLo.js";import"./LockTwoTone-ZPPc3MGe.js";import"./UserSearchBoxV2-CsXACod2.js";import"./useDebouncedEffect-BPPhYgpp.js";import"./use-deep-compare-effect.esm-C1Ytdmry.js";import"./uniq-C-hXHVR1.js";import"./without-DOzHNp1M.js";import"./Select-aab027f3.esm-v_oEtGqu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-aR7KKUU9.js";import"./SelfSignAccessRequirementItem-Ba62IrTj.js";import"./DataAccessRequestAccessorsFilesForm-CUhhpQ1f.js";import"./enums-D4jZWdEk.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CkftuIX3.js";import"./RadioGroup-DifdY4wf.js";import"./Radio-fOhKhVeM.js";import"./SwitchBase-CCwNSBco.js";import"./FormGroup-D1JCRekM.js";import"./FormControlLabel-CdVbVsO6.js";import"./UploadDocumentField-C4JypSci.js";import"./FileUpload-D6aeT041.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BARZPYc7.js";import"./GridLegacy-C9PCq83K.js";import"./ResearchProjectForm-C3Cc0TfI.js";import"./TextFieldWithWordLimit-B-bSZMoJ.js";import"./AuthenticatedRequirement-CsixOFPF.js";import"./CertificationRequirement-4DpkvWda.js";import"./TwoFactorAuthEnabledRequirement-B1tl_6Gn.js";import"./ValidationRequirement-BpRdS1YK.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DC1TBlrE.js";import"./RejectDataAccessRequestModal-C-_TK_N1.js";import"./CannedRejectionDialog-DUCM8h9h.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-ZdQ-24Ic.js";import"./Checkbox-CJ7-gE9x.js";import"./Grid-Dn4fGAyj.js";import"./upperFirst-C7riL_ep.js";import"./_stringToArray-BZgUWD-y.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
