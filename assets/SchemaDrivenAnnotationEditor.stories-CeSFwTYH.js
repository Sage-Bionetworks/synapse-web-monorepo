import{jw as p}from"./iframe-FEhVLLlO.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DUaDUMSo.js";import"./index-Chi_LkuB.js";import"./useEntity-REhwfYE-.js";import"./pickBy-Be7w8Qan.js";import"./isString-4XSt_YuW.js";import"./_baseIteratee-mWx-HW66.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BAQMxQ9Q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Kr-j5CL1.js";import"./useSchema-uLl0yAWp.js";import"./index-BskpNk4e.js";import"./enums-Nj3HgrV_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CSLszIvx.js";import"./uniq-C0iyJqNT.js";import"./forEach-UWyboym_.js";import"./Add-FC1Pu8-s.js";import"./Grid-CwZcqGSX.js";import"./ListItem-C1hAmWYY.js";import"./listItemButtonClasses-BCDQHrTJ.js";import"./ListItemIcon-DaYQhqjr.js";import"./MenuItem-CP-QVevM.js";import"./ListItemText-DuPiurnv.js";import"./ArrowUpward-hJNty7tV.js";import"./ContentCopy-nurU5e-i.js";import"./FormControlLabel-C3drqlKP.js";import"./Checkbox-BfiTC_Z_.js";import"./SwitchBase-DxajR-py.js";import"./FormGroup-Be0kAhVI.js";import"./RadioGroup-saKN9NVz.js";import"./Radio-DXNKLg_5.js";import"./Slider-J-VNdIT0.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CG4E-k04.js";import"./DialogBase-CoYwCscs.js";import"./Close-DZo8bFox.js";import"./HelpPopover-D3iP0jDl.js";import"./MarkdownPopover-DPlLoOvl.js";import"./LightTooltip-CY2wMOzf.js";import"./MarkdownSynapse-FlaLI_XD.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonTable-B83fe7X5.js";import"./SkeletonParagraph-u_Ry22JM.js";import"./JsonSchemaForm-BXfSvuK2.js";import"./GridLegacy-CvjuTRMJ.js";import"./HelpTwoTone-B_qn_8Kp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dde7ektX.js";import"./_createAggregator-D91VG2ou.js";import"./_baseMap-rV8-36rj.js";import"./DateTimePicker-BJsIHnWK.js";import"./useMobilePicker-KtXJxBBd.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DOCOIJ2z.js";import"./index-D-512QAu.js";import"./Chip-CX6tLmAn.js";import"./Tabs-CQVNd5M-.js";import"./KeyboardArrowRight-CsXfcHuL.js";import"./Autocomplete-BXXvM_Tf.js";import"./usePreviousProps-CfQV1P60.js";import"./use-deep-compare-effect.esm-Bmuzb0G3.js";import"./TextWidget-DprVQCS3.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
