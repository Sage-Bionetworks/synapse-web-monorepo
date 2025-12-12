import{d as i,e as o,f as a,m as c,h as p,i as g,k as R,l as x,n as _,b as e,H as y,S as E,o as s,p as u,q as n,s as C,t as q,u as Y,A as b,v as f,w as t}from"./iframe-nfXQhXwW.js";import{A as z}from"./AccessRequirementList-BSyl_np2.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-qLmWXZdY.js";import"./index-BOrTr2xQ.js";import"./_baseOrderBy-Itnes96W.js";import"./_baseIteratee-BFCeszVE.js";import"./_baseMap-B4olF_v4.js";import"./_baseEach-nvfsaZ4q.js";import"./useQueries-DKORIwHW.js";import"./useInfiniteQuery-CeWkfcy6.js";import"./groupBy-B6ZB0n8U.js";import"./_createAggregator-CH2p98nR.js";import"./DialogBase-CcO5y5yt.js";import"./Close-BzkPRb9A.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";import"./EntityLink-CKxxSP9Q.js";import"./useEntity-C4P8lokT.js";import"./pickBy-Bq1PCuc9.js";import"./isString-wB_IeEEX.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C3g2lWih.js";import"./useGetEntityHeaders-DA2DMQ1e.js";import"./EntityIcon-Dl52JvwX.js";import"./ErrorChip-DlyCdSC6.js";import"./Chip-nV4_OO3k.js";import"./UserOrTeamBadge-CF5f-0H8.js";import"./UserBadge-DrEl5_5I.js";import"./useUserBundle-Dx3pUDh4.js";import"./MenuItem-DVxEnVQ-.js";import"./Card-CH2nRDyh.js";import"./TeamBadge-DIH9ZRhN.js";import"./UnmanagedACTAccessRequirementItem-DQ-nJYDe.js";import"./RequirementItem-B7g8MD3x.js";import"./LockTwoTone-B9Bc3G4E.js";import"./UserSearchBoxV2-DXJNVpZn.js";import"./useDebouncedEffect-vRAUfjeb.js";import"./use-deep-compare-effect.esm-0VsloZOd.js";import"./uniq-B52MWZc7.js";import"./without-1n6JGdX7.js";import"./Select-aab027f3.esm-xNkwYAYN.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BZxTCZAG.js";import"./SelfSignAccessRequirementItem-Bdr0TiUR.js";import"./DataAccessRequestAccessorsFilesForm-D_GVWEi5.js";import"./enums-S-Uyk76D.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CP0eLHn0.js";import"./RadioGroup-DSjrmOkM.js";import"./Radio-CXrYbHND.js";import"./SwitchBase-DY0aivKg.js";import"./FormGroup-Cf4sf557.js";import"./FormControlLabel--BxiVjeI.js";import"./UploadDocumentField-CXU9-mpl.js";import"./FileUpload-DZJu-Pid.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B-u1xv3I.js";import"./GridLegacy-Bq8wt_Wj.js";import"./ResearchProjectForm-CqvDJmYK.js";import"./TextFieldWithWordLimit-Cg9KEpT7.js";import"./AuthenticatedRequirement-BDK1s9jE.js";import"./CertificationRequirement-DjhU3J2L.js";import"./TwoFactorAuthEnabledRequirement-BgwBqaRY.js";import"./ValidationRequirement-BEfigD3O.js";const Ot={title:"Governance/Data Access Request Flow/AccessRequirementList",component:z,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function d(r){return[_.get(`${e}/auth/v1/2fa`,()=>{const J={status:r?"ENABLED":"DISABLED"};return y.json(J,{status:200})})]}const A={args:{entityId:c.id,renderAsModal:!0},parameters:{msw:{handlers:[...i(e),...d(!1),...o(e),...a(e,void 0,[])]}}},S={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}]),...R(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},Q=[...Y,{...u,id:21},{...C,id:22},{...n,id:23},{...q,id:24}],m={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,Q),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:"21",concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},{accessRequirementId:"22",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"23",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"24",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),...x(e),_.post(`${e}${b}`,()=>{const r={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},O={parameters:{msw:{handlers:[...i(e),p(e,!0,!1),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},l={parameters:{msw:{handlers:[...i(e),p(e,!1,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},I={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,[u]),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),...R(e),...x(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}};var M,k,P;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...(P=(k=A.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,T,H;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...(H=(T=S.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var v,B,h,K,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, expandedMockAccessRequirements), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: '21',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '22',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '23',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '24',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockACTAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...(h=(B=m.parameters)==null?void 0:B.docs)==null?void 0:h.source},description:{story:"Verify ARs are grouped by type, and sorted by completion status",...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var D,G,U;O.parameters={...O.parameters,docs:{...(D=O.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...(U=(G=O.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,F,j;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...(j=(F=l.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var $,W,L;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [mockManagedACTAccessRequirement]), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.REJECTED,
          rejectedReason: "Thank you for requesting access, but you were rejected. Here's why:\\n * You did not meet the requirements.\\n * Another reason: you did not meet the requirements.\\nFeel free to apply again."
        }
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...(L=(W=I.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const lt=["NoRequirements","HasMetRequirements","HasUnmetRequirementsOfEveryType","NotValidated","NotCertified","RejectedRequirement"];export{S as HasMetRequirements,m as HasUnmetRequirementsOfEveryType,A as NoRequirements,l as NotCertified,O as NotValidated,I as RejectedRequirement,lt as __namedExportsOrder,Ot as default};
