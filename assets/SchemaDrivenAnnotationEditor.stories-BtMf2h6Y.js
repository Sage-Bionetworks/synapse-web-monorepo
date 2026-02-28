import{ju as p}from"./iframe-HaQTQwuz.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DNRa8do7.js";import"./index-Chi_LkuB.js";import"./useEntity-ByrB7KpH.js";import"./pickBy-L5QMPLXV.js";import"./isString-rtaSDnNo.js";import"./_baseIteratee-DKLhN1qh.js";import"./useInfiniteQuery-CVhxs5X4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DITbluvm.js";import"./useSchema-2AiArZF7.js";import"./index-CTBnB8QJ.js";import"./enums-BuvKA102.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CBBwMrU5.js";import"./uniq-DuWc8qRl.js";import"./forEach-CWOCpBhE.js";import"./Add-tMJQXaPb.js";import"./Grid-vjmvCGFI.js";import"./ListItem-BiDYJe52.js";import"./listItemButtonClasses-CR3w9tUA.js";import"./ListItemIcon-DFhjFNa8.js";import"./MenuItem-B4mCMP0L.js";import"./ListItemText-B2W75qpr.js";import"./ArrowUpward-oOhPMnaU.js";import"./ContentCopy-BJZGW3Z8.js";import"./FormControlLabel-CJMxTvsN.js";import"./Checkbox-AXkPgLsp.js";import"./SwitchBase-DNv6rmKB.js";import"./FormGroup-Du1OjfKR.js";import"./RadioGroup-DUxic5wS.js";import"./Radio-CK1vJ4lJ.js";import"./Slider-zpzMVxu7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CtUPDTih.js";import"./DialogBase-BGWg1_MF.js";import"./Close-CLcgasCJ.js";import"./HelpPopover-BdYbfqqB.js";import"./MarkdownPopover-BuTTNvu2.js";import"./LightTooltip-CXV6Zg8J.js";import"./MarkdownSynapse-_sUPNSUy.js";import"./SkeletonButton-C1NUZf-j.js";import"./SkeletonInlineBlock-CG5Fd-uS.js";import"./SkeletonTable-D-YEDgDk.js";import"./SkeletonParagraph-BNWGzJpn.js";import"./JsonSchemaForm-DcR2vnBx.js";import"./GridLegacy-DUB5nkC0.js";import"./HelpTwoTone-Baz3YR1K.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-gO-WqUNt.js";import"./_createAggregator-CPC-g0R_.js";import"./_baseMap-CH7s2_hf.js";import"./DateTimePicker-Cz2QfkmI.js";import"./useMobilePicker-CaC355Q7.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C72gD0Z_.js";import"./index-2-kVSTun.js";import"./Chip-DJaXVpz2.js";import"./Tabs-euW1gxHk.js";import"./KeyboardArrowRight-DS82lZaV.js";import"./Autocomplete-B4NDdXCI.js";import"./usePreviousProps-DiIVA5xM.js";import"./use-deep-compare-effect.esm-_U7z7y2a.js";import"./TextWidget-Rs8wGJ63.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
