import{jv as p}from"./iframe-B-ViuSv9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-aHaTZFSv.js";import"./index-Chi_LkuB.js";import"./useEntity-DsGEj5CP.js";import"./pickBy-DbnEGlxu.js";import"./isString-C3U7md_q.js";import"./_baseIteratee-BksGswVt.js";import"./useInfiniteQuery-vlKUWQr_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBJb4iNa.js";import"./useSchema-BgoHXTq1.js";import"./index-muxKuWXf.js";import"./enums-Z3fIkeML.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BEUDsluR.js";import"./uniq-CJHssgmn.js";import"./forEach-CWOCpBhE.js";import"./Add-B4AnVDHN.js";import"./Grid-BRugVb2B.js";import"./ListItem-BI8NMSIJ.js";import"./listItemButtonClasses-BPaLvI69.js";import"./ListItemIcon-8RjlUmMl.js";import"./MenuItem-C3GpEkFh.js";import"./ListItemText-DHS-ycB2.js";import"./ArrowUpward-DeJ3PTYq.js";import"./ContentCopy-COzLTsFE.js";import"./FormControlLabel-nmG9uE1s.js";import"./Checkbox-B_MkTQaX.js";import"./SwitchBase-___3iFys.js";import"./FormGroup-ql1c9NXN.js";import"./RadioGroup-CAQ0CvDT.js";import"./Radio-DL41VMP-.js";import"./Slider-B6VDpsWW.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BroakZuT.js";import"./DialogBase-DVpW1cR3.js";import"./Close-CO4GXUb5.js";import"./HelpPopover-DWyQ-DmO.js";import"./MarkdownPopover-DHhlk6vi.js";import"./LightTooltip-Ddo6Mib6.js";import"./MarkdownSynapse-B_4xbq9B.js";import"./SkeletonButton-CG2PHgPV.js";import"./SkeletonInlineBlock-ZpxNiyl4.js";import"./SkeletonTable-DOWE-xYa.js";import"./SkeletonParagraph-XlJifnft.js";import"./JsonSchemaForm-C9175ToB.js";import"./GridLegacy-Xv21uuQn.js";import"./HelpTwoTone-Cpzv8dJH.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cvdq3IXt.js";import"./_createAggregator-B-PJmUQN.js";import"./_baseMap-CAKhQWbA.js";import"./DateTimePicker-DGo5vxbU.js";import"./useMobilePicker-Miv3OITO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C2WWOWTP.js";import"./index-N4ikXHAo.js";import"./Chip-CMkns0F1.js";import"./Tabs-D_yb18sS.js";import"./KeyboardArrowRight-Cx-STtwE.js";import"./Autocomplete-DEXbFYCF.js";import"./usePreviousProps-DTP0SBZy.js";import"./use-deep-compare-effect.esm-DhtK1bWP.js";import"./TextWidget-n0_MBCio.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
