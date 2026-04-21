import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-B_8Pbtyy.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DBOmWslr.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BhZnI4KN.js";import"./useAccessRequirements-BEEQuE0q.js";import"./index-C8E9GuLP.js";import"./_baseOrderBy-Bv67Ui5n.js";import"./_baseIteratee-DMyCki3z.js";import"./_baseMap-CVbt9Ewa.js";import"./_baseEach-23nGJqXf.js";import"./useInfiniteQuery-EmhrFgDQ.js";import"./groupBy-Dp1rQtCZ.js";import"./_createAggregator-DVL2uQhn.js";import"./DialogBase-BsBgus9N.js";import"./Close-DmraeU9A.js";import"./HelpPopover-DFhkNVag.js";import"./MarkdownPopover-CqCpxQwy.js";import"./LightTooltip-DL-di1QQ.js";import"./MarkdownSynapse-HYoIGTcS.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonTable-DZYgPiW7.js";import"./SkeletonParagraph-CanILnI9.js";import"./EntityLink-BWnFGmAh.js";import"./useEntity-gwfQDJ2O.js";import"./pickBy-D6O8tNUX.js";import"./isString-CBVhzxBm.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kdbYsuxm.js";import"./useGetEntityHeaders-DBu-xIoJ.js";import"./EntityIcon-DJe0wlL7.js";import"./ErrorChip-8pqT0t6o.js";import"./Chip-CrOe6yxn.js";import"./UserOrTeamBadge-ZWxcaZuh.js";import"./UserBadge-C_HLmkM9.js";import"./useUserBundle-AYZLZe6H.js";import"./MenuItem-B5j_dwt3.js";import"./Card-TCSc9gJb.js";import"./TeamBadge-nlQ59IUz.js";import"./UnmanagedACTAccessRequirementItem-D1hdsWyh.js";import"./RequirementItem-Cm8BvpJp.js";import"./CheckTwoTone-D_vvAbxx.js";import"./ManagedACTAccessRequirementItemView-B6mNwq27.js";import"./SelfSignAccessRequirementItem-DOwkiGrY.js";import"./DataAccessRequestAccessorsFilesForm-DCjHHof3.js";import"./enums-B8Z4mPPd.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DBkdfYrk.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CA5Fw2rs.js";import"./UserSearchBox-CVyzpmCf.js";import"./useDebouncedEffect-DWn1Wu-d.js";import"./Autocomplete-BwejXa9T.js";import"./usePreviousProps-Bh7W6lyD.js";import"./RadioGroup-DRRY0zGy.js";import"./Radio-B3nv9QSc.js";import"./SwitchBase-CoXKjNiI.js";import"./FormGroup-DDlgUjrx.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./UploadDocumentField-DsSF-2Ez.js";import"./FileUpload-D9mHpRbY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Zb8NgFXD.js";import"./GridLegacy-BAuhXIPQ.js";import"./ResearchProjectForm-fNeRLXeB.js";import"./TextFieldWithWordLimit-BgakGGD2.js";import"./AuthenticatedRequirement-CoU1FUq3.js";import"./CertificationRequirement-DQNr66gs.js";import"./TwoFactorAuthEnabledRequirement-Di0jO4uD.js";import"./ValidationRequirement-DJpMGXmN.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BQsj_d88.js";import"./RejectDataAccessRequestModal-DOK9Pl5w.js";import"./CannedRejectionDialog-C4_OFO1G.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cj7M6sK5.js";import"./Checkbox-DCx96Ow5.js";import"./Grid-DGMh7hSD.js";import"./upperFirst-DsXGzMK8.js";import"./_stringToArray-av9-1pDP.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
