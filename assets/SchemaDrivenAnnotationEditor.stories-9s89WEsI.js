import{jx as p}from"./iframe-DGtd-eZ6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cr1-reQW.js";import"./index-Chi_LkuB.js";import"./useEntity-CMENiSzy.js";import"./pickBy-CPD5pXPT.js";import"./isString-AovqDiFR.js";import"./_baseIteratee-BgTTVm_D.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dzzt5U3d.js";import"./useSchema-C8aCJaSX.js";import"./index-BuJxIwBn.js";import"./enums-DPzEGcHl.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach--0hMyPgP.js";import"./uniq-C_FJSP72.js";import"./forEach-CWOCpBhE.js";import"./Add-BV17rgcl.js";import"./Grid-CUXDyCY5.js";import"./ListItem-2DMmQ3OL.js";import"./listItemButtonClasses-CKLLnE8c.js";import"./ListItemIcon-D39IAL-B.js";import"./MenuItem-CRv6srlg.js";import"./ListItemText-DpkG2R9Q.js";import"./ArrowUpward-fh4sTaGi.js";import"./ContentCopy-8uG7Y-kT.js";import"./FormControlLabel-B15ZDtUx.js";import"./Checkbox-DApcw3ET.js";import"./SwitchBase-Dn46TZef.js";import"./FormGroup-DgGSOL0T.js";import"./RadioGroup-D01Aadpn.js";import"./Radio-BkF8Viur.js";import"./Slider-DE7fKJHB.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-GQl5NATU.js";import"./DialogBase-CMc4lLby.js";import"./Close-B_IJwyX4.js";import"./HelpPopover-Bexa4l-J.js";import"./MarkdownPopover-DFLb2Nun.js";import"./LightTooltip-DPmJZKdH.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./JsonSchemaForm-C90CC76J.js";import"./GridLegacy-Cnu1qcV6.js";import"./HelpTwoTone-DCwebk6F.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-34Fa4IAe.js";import"./_createAggregator-DtOCXncp.js";import"./_baseMap-Dxa9HPgV.js";import"./DateTimePicker-DA1IfJdL.js";import"./useMobilePicker-DgpE6v5X.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CzV_pMJJ.js";import"./index-DRd13Kob.js";import"./Chip-CNav__8J.js";import"./Tabs-esS9Hkhz.js";import"./KeyboardArrowRight-zBh3NRnm.js";import"./Autocomplete-CWTVtAoF.js";import"./usePreviousProps-Cnwayz7H.js";import"./use-deep-compare-effect.esm-B3mW5v7b.js";import"./TextWidget-B-QkCP9Y.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
