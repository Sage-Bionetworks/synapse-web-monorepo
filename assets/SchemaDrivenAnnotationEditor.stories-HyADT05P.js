import{jH as p}from"./iframe-IkK4rSOB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BdQfrIbX.js";import"./index-Chi_LkuB.js";import"./useEntity-DM9FwObl.js";import"./pickBy-wL58zYrZ.js";import"./isString-BnfrvFdp.js";import"./_baseIteratee-644iAwmQ.js";import"./useQueries-CdqItZda.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./useInfiniteQuery-CRXPq4a_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgG3FrAY.js";import"./useSchema-JBrKfhkx.js";import"./index-oM-_ULkR.js";import"./enums-DXAPFxTh.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Fi0_Zvy9.js";import"./uniq-BC73tWfP.js";import"./forEach-CWOCpBhE.js";import"./Add-Cc8-j-sG.js";import"./Grid-BYRQuG6t.js";import"./ListItem-DkSWpsM8.js";import"./listItemButtonClasses-Bb4lMPv1.js";import"./ListItemIcon-C3X9o4e7.js";import"./MenuItem-BoKeqqou.js";import"./ListItemText-Ie968Zjk.js";import"./ArrowUpward-DQecsv_k.js";import"./ContentCopy-Dy3HwVK_.js";import"./FormControlLabel-CRMi7S1V.js";import"./Checkbox-PFFjq1hC.js";import"./SwitchBase-BjEUr9ck.js";import"./FormGroup-CVr3Q5_2.js";import"./RadioGroup-ZZ6iUZin.js";import"./Radio-DodohJvN.js";import"./Slider-Bi3JBom-.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Qnuw1A6n.js";import"./DialogBase-DjKiii1p.js";import"./Close-DJYHgqb-.js";import"./HelpPopover-N2Q7oHWa.js";import"./MarkdownPopover-DcD4fm5a.js";import"./LightTooltip-3kR8WXpt.js";import"./MarkdownSynapse-DW-6eoVs.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonTable-CHtYHCYt.js";import"./SkeletonParagraph-Ckq6DzI_.js";import"./JsonSchemaForm-ClmVTsbJ.js";import"./GridLegacy-Dp0KKOYN.js";import"./HelpTwoTone-Dok0Lcj8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CqMLbGDj.js";import"./_createAggregator-DBPBqp6H.js";import"./_baseMap-BECXTj-9.js";import"./DateTimePicker-CpoA6ri5.js";import"./useMobilePicker-Crtjy2dl.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Ds6s2SVQ.js";import"./index-C-PIi4pT.js";import"./Chip-Bi8EBQgs.js";import"./Tabs-BepRYlM3.js";import"./KeyboardArrowRight-CpzkYzHs.js";import"./Autocomplete-BpOOLLG4.js";import"./usePreviousProps-CAZN6sHc.js";import"./use-deep-compare-effect.esm-HzytTlMi.js";import"./TextWidget-Bqc6VfzM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
