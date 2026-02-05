import{jH as p}from"./iframe-CmoSAPSB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cw1HGgFl.js";import"./index-Chi_LkuB.js";import"./useEntity-BU_W9GNB.js";import"./pickBy-Ce-CCuqq.js";import"./isString-DEA74dYv.js";import"./_baseIteratee-DrVRnZ10.js";import"./useQueries-BicLalCF.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./useInfiniteQuery-apdbL5yC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B66UalsI.js";import"./useSchema-CfohbZqQ.js";import"./index-BY_qND_U.js";import"./enums-BCyiCR2Q.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BEIVkryU.js";import"./uniq-CmBLLPZA.js";import"./forEach-CWOCpBhE.js";import"./Add-CfKj3SoO.js";import"./Grid-Dz0d_gTv.js";import"./ListItem-fgZATpRf.js";import"./listItemButtonClasses-C6QQJw1t.js";import"./ListItemIcon-jz6-w2GN.js";import"./MenuItem-Dt0yDuqb.js";import"./ListItemText-dtPQ_vnV.js";import"./ArrowUpward-CpEWGX5F.js";import"./ContentCopy-Cp5SpJ3c.js";import"./FormControlLabel-DiAADwWJ.js";import"./Checkbox-CDdvC1LR.js";import"./SwitchBase-DXooODN3.js";import"./FormGroup-VQhHrQUC.js";import"./RadioGroup-harxg6PL.js";import"./Radio-BP6PUGhg.js";import"./Slider-CYNbgwha.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DzbbPL6e.js";import"./DialogBase-Bqr0n33q.js";import"./Close-yUN2-UGG.js";import"./HelpPopover-Cvjj8rL7.js";import"./MarkdownPopover-B6HZYL0b.js";import"./LightTooltip-8uaDTCAj.js";import"./MarkdownSynapse-vijXPkmg.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonTable-BfBRnH8d.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./JsonSchemaForm-BeCxZhBB.js";import"./GridLegacy-9khPJdp1.js";import"./HelpTwoTone-66b1xBO4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BWUTMmHN.js";import"./_createAggregator-BRsT8zaT.js";import"./_baseMap-Bv-goPXo.js";import"./DateTimePicker-BniHNTAa.js";import"./useMobilePicker-CjNRgOW0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CA2rN1qy.js";import"./index-C2zeCRkX.js";import"./Chip-B9lbWoVh.js";import"./Tabs-CJXJkO5I.js";import"./KeyboardArrowRight-1LBGFWP6.js";import"./Autocomplete-D-xg3sFR.js";import"./usePreviousProps-BNvj5C1X.js";import"./use-deep-compare-effect.esm-DN6zG_QJ.js";import"./TextWidget-DHx9YMHQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
