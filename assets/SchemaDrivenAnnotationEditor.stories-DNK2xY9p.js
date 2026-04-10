import{jw as p}from"./iframe-FsOg9uwU.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DOuCzxGw.js";import"./index-Chi_LkuB.js";import"./useEntity-BtyQdG2W.js";import"./pickBy-DfOY2WJ2.js";import"./isString-DXW-YMkO.js";import"./_baseIteratee-CPfpbnLi.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-rDeNbqp3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DVlwq94Z.js";import"./useSchema-BhSqSX2T.js";import"./index-CUK1McDH.js";import"./enums-DdayMK3i.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BFISFCE3.js";import"./uniq-BxdC6SRl.js";import"./forEach-UWyboym_.js";import"./Add-xeozRSCx.js";import"./Grid-DTBMwOCR.js";import"./ListItem-BbIUcrJF.js";import"./listItemButtonClasses-DlXbiyd-.js";import"./ListItemIcon-DEMfvOWs.js";import"./MenuItem-Cj71RViP.js";import"./ListItemText-CgSDjl2v.js";import"./ArrowUpward-DyrcYEg2.js";import"./ContentCopy-UaWUDpt7.js";import"./FormControlLabel-CVGFhKb1.js";import"./Checkbox-oTkKgI0N.js";import"./SwitchBase-B6R5JrIN.js";import"./FormGroup-Bzuvt0IB.js";import"./RadioGroup-CrPFWw5I.js";import"./Radio-N5aEXju5.js";import"./Slider-DClMrynC.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CGiwaw_9.js";import"./DialogBase-D5H1TxpQ.js";import"./Close-wJLSQlcF.js";import"./HelpPopover-CsCYRymI.js";import"./MarkdownPopover-B4rff8pl.js";import"./LightTooltip-BHJ8VyPd.js";import"./MarkdownSynapse-B-j5Jwdf.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonTable-D70G5IuO.js";import"./SkeletonParagraph-CbUekLjy.js";import"./JsonSchemaForm-CsQ35vMO.js";import"./GridLegacy-BzgKFUAC.js";import"./HelpTwoTone-T7L5qLE2.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-yJbQ32hD.js";import"./_createAggregator-CXn2awTZ.js";import"./_baseMap-CKj7t-u-.js";import"./DateTimePicker-D9EW9OWz.js";import"./useMobilePicker-DSpmUJQv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-COJ17Eit.js";import"./index-BE4_cl56.js";import"./Chip-CwjHvWgT.js";import"./Tabs-BleNELhm.js";import"./KeyboardArrowRight-BelLxV6k.js";import"./Autocomplete-BJva2ObM.js";import"./usePreviousProps-ryOaqf0v.js";import"./use-deep-compare-effect.esm-DaBL7wcG.js";import"./TextWidget-Dq7kpojz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
