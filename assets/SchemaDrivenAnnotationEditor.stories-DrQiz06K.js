import{ju as p}from"./iframe-C-OH83az.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BXEbDUGq.js";import"./index-Chi_LkuB.js";import"./useEntity-fShaTi_k.js";import"./pickBy-CEfTLQ1S.js";import"./isString-oB-rnqHa.js";import"./_baseIteratee-DlHj729f.js";import"./useInfiniteQuery-CzECAE9c.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DnBAK3_9.js";import"./useSchema-BUR5ehVm.js";import"./index-zhxEpT7k.js";import"./enums-D3n5ylxj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-SR-lNzpe.js";import"./uniq-pM_h4Q1i.js";import"./forEach-CWOCpBhE.js";import"./Add-CmIOlV40.js";import"./Grid-CRh4aExu.js";import"./ListItem-CVicDMcC.js";import"./listItemButtonClasses-By6B-hWh.js";import"./ListItemIcon-ENqKtcps.js";import"./MenuItem-CBuyGD8v.js";import"./ListItemText-Wm5DH3H5.js";import"./ArrowUpward-DFKzmzFU.js";import"./ContentCopy-BDyHFXLJ.js";import"./FormControlLabel-JLXtcHYX.js";import"./Checkbox-BrIrhk8o.js";import"./SwitchBase-BC0Db6kT.js";import"./FormGroup-MrfR9wEu.js";import"./RadioGroup-BMbKZhqY.js";import"./Radio-BC2slecU.js";import"./Slider-zzTBMJ7D.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dh8vuXen.js";import"./DialogBase-BmaLomxP.js";import"./Close-CkkNh_Xs.js";import"./HelpPopover-D09YDRBj.js";import"./MarkdownPopover-CwJ2NCps.js";import"./LightTooltip-Bdkire5h.js";import"./MarkdownSynapse-Fbj0BNYf.js";import"./SkeletonButton-C4_qqbr_.js";import"./SkeletonInlineBlock-Deti-BYJ.js";import"./SkeletonTable-BU7f8Esd.js";import"./SkeletonParagraph-W1N8UnVm.js";import"./JsonSchemaForm-lmbGvrfv.js";import"./GridLegacy-D4AGp_lv.js";import"./HelpTwoTone-DMblH9Mh.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BJzPBF-Q.js";import"./_createAggregator-DepyUcBC.js";import"./_baseMap-D15cFNFC.js";import"./DateTimePicker-CcdFfH9H.js";import"./useMobilePicker-9SEDdxFL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DAs_nL6j.js";import"./index-CqzNnuyO.js";import"./Chip-9GXO3NGV.js";import"./Tabs-BxgzbLAz.js";import"./KeyboardArrowRight-CTn-RKA2.js";import"./Autocomplete-B4Mqjprk.js";import"./usePreviousProps-BxOafh8P.js";import"./use-deep-compare-effect.esm-CWJ6NHzH.js";import"./TextWidget-DRVIBpRL.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
