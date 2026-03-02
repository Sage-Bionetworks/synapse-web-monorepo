import{ju as p}from"./iframe-B6BHQgsg.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BNAuVyEU.js";import"./index-Chi_LkuB.js";import"./useEntity-8ALxvOwi.js";import"./pickBy-CNV786-2.js";import"./isString-BsOWPOLC.js";import"./_baseIteratee-r37fl1Sw.js";import"./useInfiniteQuery-CyIpqaj4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HHNwJCD1.js";import"./useSchema-CLgvbG4b.js";import"./index-BU0r5HPd.js";import"./enums-DhHlTnpF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-KeeyuKdO.js";import"./uniq-R2X1Zhhg.js";import"./forEach-CWOCpBhE.js";import"./Add-E7CmjKZ-.js";import"./Grid-CBovW_JL.js";import"./ListItem-BkRG3o36.js";import"./listItemButtonClasses-CIxdJEM0.js";import"./ListItemIcon-KwOjPyGJ.js";import"./MenuItem-CURmej8f.js";import"./ListItemText-DzJkr736.js";import"./ArrowUpward-Dk9exFse.js";import"./ContentCopy-CwYTfrP3.js";import"./FormControlLabel-DXtGcBFr.js";import"./Checkbox-CJaBoFnV.js";import"./SwitchBase-BuMteYEy.js";import"./FormGroup-DWLrxt5u.js";import"./RadioGroup-DiEBItHg.js";import"./Radio-QXXmNzfS.js";import"./Slider-Bsd9dbRF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bb8wqThd.js";import"./DialogBase-C3nXM1hL.js";import"./Close-DhlrG9rp.js";import"./HelpPopover-Duf7eahg.js";import"./MarkdownPopover-DB1525ks.js";import"./LightTooltip-npEhufm2.js";import"./MarkdownSynapse-CYzlYABb.js";import"./SkeletonButton-DHh5ZoUY.js";import"./SkeletonInlineBlock-C-VRD2YJ.js";import"./SkeletonTable-DrzWDZqG.js";import"./SkeletonParagraph-KorLLKG4.js";import"./JsonSchemaForm-qK_56Acm.js";import"./GridLegacy-CEXYyPnP.js";import"./HelpTwoTone-d6SLlvZ0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B_W_VdqH.js";import"./_createAggregator-BvMEImlo.js";import"./_baseMap-d8vVMiiI.js";import"./DateTimePicker-BtlevbRk.js";import"./useMobilePicker-CV0ta142.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-pz7XBaTL.js";import"./index-BrxEKyeI.js";import"./Chip-DtPmiV3b.js";import"./Tabs-hHaTjQ2a.js";import"./KeyboardArrowRight-oCFJ4Onv.js";import"./Autocomplete-B3xDpPiS.js";import"./usePreviousProps-P_gqLLxQ.js";import"./use-deep-compare-effect.esm-BbOZBEsl.js";import"./TextWidget-0-Uwg1rV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
