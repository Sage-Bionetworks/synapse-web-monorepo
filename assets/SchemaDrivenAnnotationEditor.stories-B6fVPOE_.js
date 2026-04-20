import{jx as p}from"./iframe-DI_DW6I7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DYr84UMR.js";import"./index-Chi_LkuB.js";import"./useEntity-6wYGzW2q.js";import"./pickBy-CjS8Fah4.js";import"./isString-DV1AhwPZ.js";import"./_baseIteratee-Knl8sh69.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CYDJs5Ir.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FFO2dtCF.js";import"./useSchema-D1etHlFn.js";import"./index-DEvRDi0Z.js";import"./enums-BVT63rrr.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bgov8v5P.js";import"./uniq-5UxHrZnC.js";import"./forEach-UWyboym_.js";import"./Add-Dn0N_uBs.js";import"./Grid-DYavEcIp.js";import"./ListItem-yVlfX776.js";import"./listItemButtonClasses-DFNZ8DDl.js";import"./ListItemIcon-C21FKUd-.js";import"./MenuItem-D7FiHfrS.js";import"./ListItemText-VGtPmPjG.js";import"./ArrowUpward-Ki2KzZ0e.js";import"./ContentCopy-BwhIc3h9.js";import"./FormControlLabel-DJ3CxxVI.js";import"./Checkbox-CN4UXvGM.js";import"./SwitchBase-CgMZiCSG.js";import"./FormGroup-BXw1bb14.js";import"./RadioGroup-CMfF6N69.js";import"./Radio-lTxFkRWZ.js";import"./Slider-BPYp8yQE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BT2-p3SP.js";import"./DialogBase-vDTKWkBt.js";import"./Close-BlF01rCL.js";import"./HelpPopover-D9eTDHf2.js";import"./MarkdownPopover-3GY4ND-o.js";import"./LightTooltip-BJTLvyTt.js";import"./MarkdownSynapse-CFMaEATT.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonTable-B1K8a5wm.js";import"./SkeletonParagraph-iVrUoPVl.js";import"./JsonSchemaForm-BJOB4w8U.js";import"./GridLegacy-CWdyMSKH.js";import"./HelpTwoTone-gMP0DY0p.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-prypc2IO.js";import"./_createAggregator-CQ3ILDc-.js";import"./_baseMap-j0m5X6QJ.js";import"./DateTimePicker-DwiAc7Jq.js";import"./useMobilePicker-BnaTVZgt.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B4rL165R.js";import"./index-CEkoI5OI.js";import"./Chip-BtT8gxc3.js";import"./Tabs-C0rZU0UV.js";import"./KeyboardArrowRight-B-ZY7jdf.js";import"./Autocomplete-wzFdhmOr.js";import"./usePreviousProps-CRw8wBaq.js";import"./use-deep-compare-effect.esm-D3T0rMG0.js";import"./TextWidget-e6YZR_DS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
