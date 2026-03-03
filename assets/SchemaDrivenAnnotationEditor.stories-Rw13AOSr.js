import{ju as p}from"./iframe-Caumy8OG.js";import{S as a}from"./SchemaDrivenAnnotationEditor-hBXUJOJR.js";import"./index-Chi_LkuB.js";import"./useEntity-NcbfSa9c.js";import"./pickBy-GnA78qLv.js";import"./isString-3W3sh8x8.js";import"./_baseIteratee-DzjmW7wv.js";import"./useInfiniteQuery-BettF6mH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DTuMLcTt.js";import"./useSchema-D26PHBhJ.js";import"./index-BrnpQjTw.js";import"./enums-CFANHKcv.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BhkAZ48F.js";import"./uniq-8GX06W3w.js";import"./forEach-CWOCpBhE.js";import"./Add-BMzVZveC.js";import"./Grid-DbgtV8Vv.js";import"./ListItem-B4ThZBzu.js";import"./listItemButtonClasses-CqspFtzF.js";import"./ListItemIcon-De3Xnndm.js";import"./MenuItem-C3S0i9k3.js";import"./ListItemText-CBW5-DDo.js";import"./ArrowUpward-DoLIPrxL.js";import"./ContentCopy-n3y6o0ef.js";import"./FormControlLabel-D5JHQXeU.js";import"./Checkbox-MkkB8eUh.js";import"./SwitchBase-C6I4ypvl.js";import"./FormGroup-Bmj3lUVr.js";import"./RadioGroup-CxSN7KIq.js";import"./Radio-n7RIZkyD.js";import"./Slider-B7XPskbY.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-IHEJhKNR.js";import"./DialogBase-BwhcKSSX.js";import"./Close-DQtVppmx.js";import"./HelpPopover-DLbRiMnr.js";import"./MarkdownPopover-Ed--YpdW.js";import"./LightTooltip-VmaxT5-P.js";import"./MarkdownSynapse-BvD7qHpg.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonTable-Cy3CPYvw.js";import"./SkeletonParagraph-tEoCsyXm.js";import"./JsonSchemaForm-JMVx1KPR.js";import"./GridLegacy-Dlso49CB.js";import"./HelpTwoTone-DoJ2qeTY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DnM09qAE.js";import"./_createAggregator-CCuFcwHp.js";import"./_baseMap-B8jvX8FY.js";import"./DateTimePicker-H5OUCwVG.js";import"./useMobilePicker-CG58mjtj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CWfCSpbP.js";import"./index-CS5uaYEv.js";import"./Chip-BD4K8GZ0.js";import"./Tabs-Da5YVltS.js";import"./KeyboardArrowRight-DIUWHSw_.js";import"./Autocomplete-B__Pd15L.js";import"./usePreviousProps-Bu7ZPua7.js";import"./use-deep-compare-effect.esm-w94gK5Iv.js";import"./TextWidget-DeAqeVWp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
