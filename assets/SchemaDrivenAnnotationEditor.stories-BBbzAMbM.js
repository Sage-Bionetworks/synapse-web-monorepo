import{jw as p}from"./iframe-BbbR7k03.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B0rpb_1x.js";import"./index-Chi_LkuB.js";import"./useEntity-DvvGGmwB.js";import"./pickBy-C1d267ha.js";import"./isString-BpQ-XtW6.js";import"./_baseIteratee-Cbj7J9fj.js";import"./useInfiniteQuery-l0M08Fky.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4FdtzyH.js";import"./useSchema-BxLZvbae.js";import"./index-C7nB2YXS.js";import"./enums-CZNct3aD.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-GUUJEZ5y.js";import"./uniq-CjHNO-5Y.js";import"./forEach-UWyboym_.js";import"./Add-wPAupF2U.js";import"./Grid-Cywb-Hob.js";import"./ListItem-Bra8lU_M.js";import"./listItemButtonClasses-ByP_VaKk.js";import"./ListItemIcon-BgQ36W11.js";import"./MenuItem-DDa15_zq.js";import"./ListItemText-CKY3UehV.js";import"./ArrowUpward-KLmaC9PX.js";import"./ContentCopy-nCA6lzML.js";import"./FormControlLabel-UF_IHyRO.js";import"./Checkbox-UPXW_iIu.js";import"./SwitchBase-qa0TESIz.js";import"./FormGroup-DYIPiUgX.js";import"./RadioGroup-DntoE19j.js";import"./Radio-BafCVdpy.js";import"./Slider-hbnm9atl.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cco6Zt2n.js";import"./DialogBase-DG8acb1Q.js";import"./Close-BJFIRJbz.js";import"./HelpPopover-Fxn4OJ3p.js";import"./MarkdownPopover-DjDkPlLu.js";import"./LightTooltip-CglVqYUv.js";import"./MarkdownSynapse-ZvWb7i2I.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonTable-Dx60MFYV.js";import"./SkeletonParagraph-NMWzktwn.js";import"./JsonSchemaForm-9aCfDxGs.js";import"./GridLegacy-aolP__Er.js";import"./HelpTwoTone-DVPqo0gN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-zFhpBnJ4.js";import"./_createAggregator-BYjxnqXo.js";import"./_baseMap-DJBIFUcC.js";import"./DateTimePicker-DBlKdL2h.js";import"./useMobilePicker-xFsbUV3z.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Y7XAEVkA.js";import"./index-BW5_rLqK.js";import"./Chip-Diq7UYnO.js";import"./Tabs-Cc2RHwfw.js";import"./KeyboardArrowRight-9Pdv3nOO.js";import"./Autocomplete-BuSqBldn.js";import"./usePreviousProps-QHb4mi79.js";import"./use-deep-compare-effect.esm-fZ05nyGW.js";import"./TextWidget-DxxNG6Gd.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
