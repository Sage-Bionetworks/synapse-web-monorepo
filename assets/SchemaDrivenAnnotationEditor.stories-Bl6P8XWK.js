import{jx as p}from"./iframe-CIPlMaLT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BugY1Uqc.js";import"./index-Chi_LkuB.js";import"./useEntity-BsGg4v5z.js";import"./pickBy-BD90Ah8Q.js";import"./isString-DIwi0Tbr.js";import"./_baseIteratee-B2ldj8aD.js";import"./useInfiniteQuery-CTnmUoN7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-bMyYjk_6.js";import"./useSchema-DpcbW7l2.js";import"./index-CXmq-tYd.js";import"./enums-CYRlK8wR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CqCzLPLD.js";import"./uniq-DZ5zy0KT.js";import"./forEach-CWOCpBhE.js";import"./Add-DOH9UYnE.js";import"./Grid-DMW95j0d.js";import"./ListItem-Wmzual6U.js";import"./listItemButtonClasses-CZQkbgT_.js";import"./ListItemIcon-Cfe6zs89.js";import"./MenuItem-D7kngZjY.js";import"./ListItemText-CVK2wc1-.js";import"./ArrowUpward-Bhq3ADCU.js";import"./ContentCopy-riqe5041.js";import"./FormControlLabel-_mvSb2kF.js";import"./Checkbox-DQIchTi2.js";import"./SwitchBase-CIwH6QQ1.js";import"./FormGroup-y5xmpbm6.js";import"./RadioGroup-ChTf-MD5.js";import"./Radio-Dl42cFR1.js";import"./Slider-ByFo0PEt.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-fVjFifBD.js";import"./DialogBase-LmDxIN7q.js";import"./Close-BmqKwCBp.js";import"./HelpPopover-BQ8z_T0o.js";import"./MarkdownPopover-DNuS7K0n.js";import"./LightTooltip-DW0Ye48E.js";import"./MarkdownSynapse-DBktvvdU.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonTable-CWf8URW0.js";import"./SkeletonParagraph--qeTTP7n.js";import"./JsonSchemaForm-Dl1xB-JL.js";import"./GridLegacy-BqmeWvaJ.js";import"./HelpTwoTone-fT_9nWzV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DIpA143F.js";import"./_createAggregator-CrcwlJ6P.js";import"./_baseMap-CdpLgayS.js";import"./DateTimePicker-D4SKQOui.js";import"./useMobilePicker-6Esk_bHx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Be9iSZX5.js";import"./index-Bv4HrMwv.js";import"./Chip-CesnYDs9.js";import"./Tabs-Dww5dP_8.js";import"./KeyboardArrowRight-BD4Aiv6p.js";import"./Autocomplete-BWGo87U_.js";import"./usePreviousProps-BFzefhYa.js";import"./use-deep-compare-effect.esm-CII-ykOk.js";import"./TextWidget-DQYHz8DU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
