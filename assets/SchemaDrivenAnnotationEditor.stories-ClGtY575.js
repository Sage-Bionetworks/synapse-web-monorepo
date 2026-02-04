import{jH as p}from"./iframe-PYPp7xnK.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ChZOMzV8.js";import"./index-Chi_LkuB.js";import"./useEntity-DjbIpPgI.js";import"./pickBy-DX0aEh93.js";import"./isString-17Is4p-i.js";import"./_baseIteratee-BZFVvPTZ.js";import"./useQueries-Be8MxYe3.js";import"./useSuspenseQuery-DpR9wtQx.js";import"./useInfiniteQuery-BNv7EGxj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-iIAWiZii.js";import"./useSchema-DYcW2U2N.js";import"./index-BEt1hUkG.js";import"./enums-B5aqgI9R.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ClcsA4o0.js";import"./uniq-DMKjuRDc.js";import"./forEach-CWOCpBhE.js";import"./Add-LvgM9Cbh.js";import"./Grid-v4mjr64H.js";import"./ListItem-CRuVS9h5.js";import"./listItemButtonClasses-wHWe-ALw.js";import"./ListItemIcon-p_i7SgMH.js";import"./MenuItem-h2F7yZes.js";import"./ListItemText-CF7H4bpz.js";import"./ArrowUpward-Br6NSl2F.js";import"./ContentCopy-DXpisSGq.js";import"./FormControlLabel-BFgRNFSG.js";import"./Checkbox-Ds0rvTa4.js";import"./SwitchBase-BFhf4PEE.js";import"./FormGroup-DonTTMcO.js";import"./RadioGroup-DtGieEoE.js";import"./Radio-Bi5gBi0N.js";import"./Slider-Cx5s39TF.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-2zXE13iH.js";import"./DialogBase-d_CECZtd.js";import"./Close-NsSVTbKR.js";import"./HelpPopover-CRuNxnYI.js";import"./MarkdownPopover-CTfESMzb.js";import"./LightTooltip-DTNQsZN6.js";import"./MarkdownSynapse-nwSv3Tm6.js";import"./SkeletonButton-CWan3o9p.js";import"./SkeletonInlineBlock-CdKZUiWg.js";import"./SkeletonTable-CVr3KqkK.js";import"./SkeletonParagraph-DNnDNfQN.js";import"./JsonSchemaForm-BkqhohBP.js";import"./GridLegacy-knY4Yqxc.js";import"./HelpTwoTone-B2R4oTR6.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C12Wap_i.js";import"./_createAggregator-CyHyL8R5.js";import"./_baseMap-D_SXijK0.js";import"./DateTimePicker-CTTjmbNy.js";import"./useMobilePicker-DYnder3M.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BaTsBSFG.js";import"./index-1SI29lko.js";import"./Chip-BkoJj4oN.js";import"./Tabs-Dr4951SE.js";import"./KeyboardArrowRight-Bn8-GVTG.js";import"./Autocomplete-DYgBv8V7.js";import"./usePreviousProps-D2OTVzb_.js";import"./use-deep-compare-effect.esm-BUizEgvt.js";import"./TextWidget-BA9soVJ1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
