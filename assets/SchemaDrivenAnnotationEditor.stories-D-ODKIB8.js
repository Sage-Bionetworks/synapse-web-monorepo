import{jG as p}from"./iframe-Djf1Gvja.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BOI70cX2.js";import"./index-Chi_LkuB.js";import"./useEntity-CtpNy3rh.js";import"./pickBy-DzsFI0va.js";import"./isString-BpueyRwN.js";import"./_baseIteratee-_uY9ZW-D.js";import"./useQueries-9xKPn1nl.js";import"./useSuspenseQuery-DqFkurJD.js";import"./useInfiniteQuery-pHCKipg_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DnmLoZSA.js";import"./useSchema-CU8jzR_f.js";import"./index-szf060CD.js";import"./enums-Dwtdrxdy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BH2Ai-LR.js";import"./uniq-BuI1ZZDG.js";import"./forEach-CWOCpBhE.js";import"./Add-Cf9HWD6_.js";import"./Grid-9pegnziy.js";import"./ListItem-5Fa94UoR.js";import"./listItemButtonClasses-Bn69BPjL.js";import"./ListItemIcon-DOoW4mxF.js";import"./MenuItem-DLvW-sib.js";import"./ListItemText-DihQ2SFY.js";import"./ArrowUpward-T5iGsVZO.js";import"./ContentCopy-CWz8RlU2.js";import"./FormControlLabel-Y2KZ_0l1.js";import"./Checkbox-D2g6Xz4p.js";import"./SwitchBase-DchgHDNt.js";import"./FormGroup-e6niOxjk.js";import"./RadioGroup-CFol2uMW.js";import"./Radio-DEH2fDlR.js";import"./Slider-ClmzOajE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-COmnWvpz.js";import"./DialogBase-DFoHyZgy.js";import"./Close-Clk8l4Z7.js";import"./HelpPopover-COYTKA2i.js";import"./MarkdownPopover-15pHq4Q_.js";import"./LightTooltip-CCYEKJGf.js";import"./MarkdownSynapse-MozwM0EG.js";import"./SkeletonButton-D5sJL5B9.js";import"./SkeletonInlineBlock-CSkbk-eL.js";import"./SkeletonTable-CUnfVmXh.js";import"./SkeletonParagraph-nhe0tvw8.js";import"./JsonSchemaForm-Bjt8-Z_6.js";import"./GridLegacy-BdpjK-qp.js";import"./HelpTwoTone-C4jFjoYz.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B9Ymi_ws.js";import"./_createAggregator-CXWUGj5G.js";import"./_baseMap-Bzv9jpIq.js";import"./DateTimePicker-68Qb6ZvM.js";import"./useMobilePicker-D7Ztyosm.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-tEj0-sga.js";import"./index-CikzIJLj.js";import"./Chip-DiNFVAcb.js";import"./Tabs-iKW8uC8J.js";import"./KeyboardArrowRight-BVEWfW28.js";import"./Autocomplete-D0YQh8j1.js";import"./usePreviousProps-Das1MleJ.js";import"./use-deep-compare-effect.esm-BtBK50_F.js";import"./TextWidget-Cj2Vh58f.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
