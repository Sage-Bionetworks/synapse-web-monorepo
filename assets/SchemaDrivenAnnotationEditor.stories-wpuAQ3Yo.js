import{jx as p}from"./iframe-BfDC4V0n.js";import{S as a}from"./SchemaDrivenAnnotationEditor-zMaIVAx5.js";import"./index-Chi_LkuB.js";import"./useEntity-_bJvplXg.js";import"./pickBy-Df5ApG1Q.js";import"./isString-BkXAEYmg.js";import"./_baseIteratee-CiW54l-R.js";import"./useInfiniteQuery-DM4nXvzm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCWWt0dC.js";import"./useSchema-BYmQaPV-.js";import"./index-aItMLcRp.js";import"./enums-CRnKuiid.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DqL3VxUs.js";import"./uniq-D_5SEMlC.js";import"./forEach-CWOCpBhE.js";import"./Add-CpvvinLw.js";import"./Grid-BDFn4F6-.js";import"./ListItem-B86ZXFdv.js";import"./listItemButtonClasses-CZDR-qIN.js";import"./ListItemIcon-6tDZtGTx.js";import"./MenuItem-Dqvfd__a.js";import"./ListItemText-DQUlLy7l.js";import"./ArrowUpward-Dp9mekGA.js";import"./ContentCopy-DYYktNia.js";import"./FormControlLabel-BC6aY042.js";import"./Checkbox-dwhzXcL9.js";import"./SwitchBase-D88Qn-kD.js";import"./FormGroup-8LTFzJiv.js";import"./RadioGroup-Dpxb9AAq.js";import"./Radio-BawotIu5.js";import"./Slider-B8MBi-zJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Btpz93A2.js";import"./DialogBase-yHroOJ8_.js";import"./Close-CgiQG4j8.js";import"./HelpPopover-Dg3wd6VC.js";import"./MarkdownPopover-Cd4Su9xF.js";import"./LightTooltip-B1uK46ji.js";import"./MarkdownSynapse-Doq5YFEA.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonTable-PdwLXVTh.js";import"./SkeletonParagraph-DUo_BCXn.js";import"./JsonSchemaForm-Dz61A0JQ.js";import"./GridLegacy-CIg7lBZd.js";import"./HelpTwoTone-BqDqD678.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BrfmtN5e.js";import"./_createAggregator-CTwYFbOW.js";import"./_baseMap-CVZ_hys5.js";import"./DateTimePicker-ERDG_9Ew.js";import"./useMobilePicker-CDm3878W.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C-mhbZbI.js";import"./index-D_SprHXq.js";import"./Chip-B3QjRI9f.js";import"./Tabs-5w4pTPRS.js";import"./KeyboardArrowRight-DV1d8Bwa.js";import"./Autocomplete-DfEJfxBg.js";import"./usePreviousProps-Dh34bYaX.js";import"./use-deep-compare-effect.esm-BZPKmMbb.js";import"./TextWidget-B4koAQJ_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
