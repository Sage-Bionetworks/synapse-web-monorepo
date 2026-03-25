import{jx as p}from"./iframe-BnwOOxVB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DjeMcEMS.js";import"./index-Chi_LkuB.js";import"./useEntity-UkRqMMHl.js";import"./pickBy-Bjj4ZDBL.js";import"./isString-okp__rGt.js";import"./_baseIteratee-B9myDPIW.js";import"./useInfiniteQuery-1s6_iIB7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DuqX2qT_.js";import"./useSchema-DLe1OGJ4.js";import"./index-C9hR9HmW.js";import"./enums-DGvLMIIN.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D1jaI2sf.js";import"./uniq-D2uxdsYI.js";import"./forEach-CWOCpBhE.js";import"./Add-DurICYQp.js";import"./Grid-Dn3yFbHq.js";import"./ListItem-DFximy5l.js";import"./listItemButtonClasses-DGgrJKdk.js";import"./ListItemIcon-DQHjfxvq.js";import"./MenuItem-DUMDRQOA.js";import"./ListItemText-D2PESgOh.js";import"./ArrowUpward-CgcWHRo-.js";import"./ContentCopy-Ba5Gm9w1.js";import"./FormControlLabel-D9xAaYtM.js";import"./Checkbox-Pl8JmO1l.js";import"./SwitchBase-D_8PvPPY.js";import"./FormGroup-BEFnzhFq.js";import"./RadioGroup-DsPF9R7X.js";import"./Radio-BHVGZsLz.js";import"./Slider-JSG-FkNG.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BdmzWONJ.js";import"./DialogBase-Dbn_HhWz.js";import"./Close-DsW9lEMH.js";import"./HelpPopover-f6Y-8lBt.js";import"./MarkdownPopover-dEsnVknt.js";import"./LightTooltip-BKLx-2zI.js";import"./MarkdownSynapse-CudWy8rb.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./SkeletonParagraph-Bx2C1bW5.js";import"./JsonSchemaForm-BLGeHCE6.js";import"./GridLegacy-NyhYAy9U.js";import"./HelpTwoTone-C4pwNEE3.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DJwySWhB.js";import"./_createAggregator-B1rZ7wFB.js";import"./_baseMap-Bsco3WZ-.js";import"./DateTimePicker-BiQiYB0r.js";import"./useMobilePicker-CwcAg0PT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-QFRMT8fg.js";import"./index-BWFWUV0I.js";import"./Chip-B5d3JXK1.js";import"./Tabs-Cdts2Tcp.js";import"./KeyboardArrowRight-sMosABA9.js";import"./Autocomplete-DWoy-XMB.js";import"./usePreviousProps-CVmwG49s.js";import"./use-deep-compare-effect.esm-EqALDLgs.js";import"./TextWidget-D98uP2Rb.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
