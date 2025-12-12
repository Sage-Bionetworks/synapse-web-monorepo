import{jF as T}from"./iframe-nfXQhXwW.js";import{S as C}from"./SchemaDrivenAnnotationEditor-O41WLrUP.js";import"./index-r8ZA1smB.js";import"./useEntity-C4P8lokT.js";import"./pickBy-Bq1PCuc9.js";import"./isString-wB_IeEEX.js";import"./_baseIteratee-BFCeszVE.js";import"./useQueries-DKORIwHW.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./useInfiniteQuery-CeWkfcy6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C3g2lWih.js";import"./useSchema-omRECIY-.js";import"./index-Cu4sfuI_.js";import"./enums-S-Uyk76D.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-nvfsaZ4q.js";import"./uniq-B52MWZc7.js";import"./forEach-B8iwwgef.js";import"./Add-rXDWrd84.js";import"./Grid-Ch3n3ndf.js";import"./ListItem-B9SxYXlw.js";import"./listItemButtonClasses-DiML2J69.js";import"./ListItemIcon-Dx0qhbVb.js";import"./MenuItem-DVxEnVQ-.js";import"./ListItemText-D42sUrPn.js";import"./ArrowUpward-DbeYbT1Z.js";import"./ContentCopy-CyxBMm9h.js";import"./FormControlLabel--BxiVjeI.js";import"./Checkbox-BFYGnWq_.js";import"./SwitchBase-DY0aivKg.js";import"./FormGroup-Cf4sf557.js";import"./RadioGroup-DSjrmOkM.js";import"./Radio-CXrYbHND.js";import"./Slider-qLxlQBBY.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DBW_uYDn.js";import"./DialogBase-CcO5y5yt.js";import"./Close-BzkPRb9A.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";import"./JsonSchemaForm-BYW9-4jk.js";import"./GridLegacy-Bq8wt_Wj.js";import"./HelpTwoTone--Z14PeRP.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B6ZB0n8U.js";import"./_createAggregator-CH2p98nR.js";import"./_baseMap-B4olF_v4.js";import"./DateTimePicker-BK_T3Nod.js";import"./useMobilePicker-ZGuphTcC.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CF8a4Vw_.js";import"./index-BOrTr2xQ.js";import"./Chip-nV4_OO3k.js";import"./Tabs-DawZJb1z.js";import"./KeyboardArrowRight-ChDVcEt5.js";import"./Autocomplete-CcZsEbcv.js";import"./usePreviousProps-BpREd7Pb.js";import"./use-deep-compare-effect.esm-0VsloZOd.js";import"./TextWidget-CBze36j_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
