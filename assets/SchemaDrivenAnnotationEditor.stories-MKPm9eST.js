import{jF as T}from"./iframe-DDhTpaiN.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CxdfHk1y.js";import"./index-r8ZA1smB.js";import"./useEntity-BnvvdKxg.js";import"./pickBy-CI2-0LWO.js";import"./isString-BU1whTrg.js";import"./_baseIteratee-S_bIqSpZ.js";import"./useQueries-CU3GYIqx.js";import"./useSuspenseQuery-B6kRqu6j.js";import"./useInfiniteQuery-WylDUJuR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-9BrXtJQN.js";import"./useSchema-DLBWo3n8.js";import"./index-CByaxp5a.js";import"./enums-DzYRf6zF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Cc-rW067.js";import"./uniq-1Rzl_xO6.js";import"./forEach-B8iwwgef.js";import"./Add-BwlUs3e7.js";import"./Grid-CE9U51DR.js";import"./ListItem-DvA1ZHL-.js";import"./listItemButtonClasses-vYX7_r_T.js";import"./ListItemIcon-B_uaTHOH.js";import"./MenuItem-XgALiosb.js";import"./ListItemText-DMhy8X6v.js";import"./ArrowUpward-7IwTChQm.js";import"./ContentCopy-8sBTX12T.js";import"./FormControlLabel-CaY2KlcA.js";import"./Checkbox-DvfxPkUW.js";import"./SwitchBase-D8330Uqr.js";import"./FormGroup-BFIthmeE.js";import"./RadioGroup-zK5i5hZ0.js";import"./Radio-DurrxbBG.js";import"./Slider-Dbhp_d2C.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-5860BvFb.js";import"./DialogBase-Ds-EIWQV.js";import"./Close-yIz_Rnht.js";import"./HelpPopover-DFH7dgbi.js";import"./MarkdownPopover-BfZR9eJo.js";import"./LightTooltip-B0ycAwvg.js";import"./MarkdownSynapse-F_8I-qdj.js";import"./SkeletonButton-B-QMOvKw.js";import"./SkeletonInlineBlock-CdyxEaU6.js";import"./SkeletonTable-ChlY7W2j.js";import"./SkeletonParagraph-Cj3UMufw.js";import"./JsonSchemaForm-C46C8G-1.js";import"./GridLegacy-DhWlB9WS.js";import"./HelpTwoTone-DacvyFrY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CxPjDlTW.js";import"./_createAggregator-BywQm9Th.js";import"./_baseMap-AibsRsd1.js";import"./DateTimePicker-HtMdyO_a.js";import"./useMobilePicker-CQFMmtBs.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-9YNk6DRD.js";import"./index-CbHlJG0N.js";import"./Chip-r9VwJov-.js";import"./Tabs-BWqPlSeF.js";import"./KeyboardArrowRight-CGpXLN2l.js";import"./Autocomplete-BtfjYdHh.js";import"./usePreviousProps-C40y_ik1.js";import"./use-deep-compare-effect.esm-DB6_UhnX.js";import"./TextWidget-BQnyKWJA.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
