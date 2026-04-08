import{jw as p}from"./iframe-D5wXuBlT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BjL4P5Qr.js";import"./index-Chi_LkuB.js";import"./useEntity-BdvQIkUL.js";import"./pickBy-D7qYwTGf.js";import"./isString-D-Nxf4BT.js";import"./_baseIteratee-B9EFKTSA.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CIna-n7q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CdJPZ98R.js";import"./useSchema-DZqHxGuE.js";import"./index-B0blyH6p.js";import"./enums-BU0wSR1S.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DHRpkkAi.js";import"./uniq-PhoYpX-3.js";import"./forEach-UWyboym_.js";import"./Add-DaNSqy8S.js";import"./Grid-DWXQACcQ.js";import"./ListItem-B4U0zoJ2.js";import"./listItemButtonClasses-eFpAcuWL.js";import"./ListItemIcon-CARCVnCt.js";import"./MenuItem-Cg9aYM9o.js";import"./ListItemText-BbUy_TkQ.js";import"./ArrowUpward-CRtenyFX.js";import"./ContentCopy-XWSeWJEc.js";import"./FormControlLabel-DdIGgxtb.js";import"./Checkbox-etgoUHJj.js";import"./SwitchBase-CF4iIkRZ.js";import"./FormGroup-Cz-izA0X.js";import"./RadioGroup-BQVSxRN2.js";import"./Radio-DQnBLPnH.js";import"./Slider-xYGa4AbI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DkVuItCQ.js";import"./DialogBase-B7NPj_K8.js";import"./Close-B44_taEp.js";import"./HelpPopover-B270wGmb.js";import"./MarkdownPopover-D357WAt_.js";import"./LightTooltip-Bqvn3Vpy.js";import"./MarkdownSynapse-DIWDvDqy.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonTable-DQgfKfH3.js";import"./SkeletonParagraph-CICWHgmn.js";import"./JsonSchemaForm-Ba5zZgoC.js";import"./GridLegacy-BUhNhc-e.js";import"./HelpTwoTone-DDitr0v1.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-34QwQkF-.js";import"./_createAggregator-DrmoKbfG.js";import"./_baseMap-BIuedYiU.js";import"./DateTimePicker-BBC7johy.js";import"./useMobilePicker-B8mZT-oJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-4H-w-rZR.js";import"./index-2JT8eoUE.js";import"./Chip-CY4F66V8.js";import"./Tabs-DM85ZW3i.js";import"./KeyboardArrowRight-Di2ZZHeY.js";import"./Autocomplete-DyJ_IcZa.js";import"./usePreviousProps-BROXTcjk.js";import"./use-deep-compare-effect.esm-DenAeTcD.js";import"./TextWidget-COo8Y7Ij.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
