import{jF as p}from"./iframe-OvMmZLQw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DCYv6gsF.js";import"./index-Chi_LkuB.js";import"./useEntity-BUtNU_xP.js";import"./pickBy-XDNnLnBh.js";import"./isString-BqeewCpc.js";import"./_baseIteratee-ByJHsXBB.js";import"./useQueries-Bl6uHz3x.js";import"./useSuspenseQuery-C4irymMN.js";import"./useInfiniteQuery-8PVcqDIl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uaGE46Td.js";import"./useSchema-1nb1irpK.js";import"./index-BG4kj9dc.js";import"./enums-C5DDkwu8.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B6VA7Zf5.js";import"./uniq-Ds8tYlxg.js";import"./forEach-CWOCpBhE.js";import"./Add-BS68skj5.js";import"./Grid-PPAzNItH.js";import"./ListItem-B--1rp9b.js";import"./listItemButtonClasses-C37E5EBE.js";import"./ListItemIcon-fuftM4Vm.js";import"./MenuItem-BWMN49kR.js";import"./ListItemText-DMuIrZbH.js";import"./ArrowUpward-C5HPDbAU.js";import"./ContentCopy-B3SkHd4K.js";import"./FormControlLabel-NCFeGzy8.js";import"./Checkbox-BpWdqwWg.js";import"./SwitchBase-DO28J9p4.js";import"./FormGroup-D9m0vmLR.js";import"./RadioGroup-C0kdX7Lg.js";import"./Radio-DmKUzAvc.js";import"./Slider-CuY6bM77.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CjxFskfc.js";import"./DialogBase-ibfiDrrj.js";import"./Close-C3EhJtlG.js";import"./HelpPopover-6zcoBJtq.js";import"./MarkdownPopover-DIqu7B8a.js";import"./LightTooltip-D4lO7JMJ.js";import"./MarkdownSynapse-C8qQ4WRw.js";import"./SkeletonButton-Cyy-yL2p.js";import"./SkeletonInlineBlock-DfEg9q_u.js";import"./SkeletonTable-BYbIFMu2.js";import"./SkeletonParagraph-DkLTjuRc.js";import"./JsonSchemaForm-znlB-SJ9.js";import"./GridLegacy-Bzg6Nwyv.js";import"./HelpTwoTone-Cos03zeW.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BTh1qMdC.js";import"./_createAggregator-AZMirhWv.js";import"./_baseMap-DqU8tWvx.js";import"./DateTimePicker-qWu3b_Sr.js";import"./useMobilePicker-6FKUijsf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DDefEbaw.js";import"./index--E8oFEpF.js";import"./Chip-mRnT2cVS.js";import"./Tabs-D36Dj0nR.js";import"./KeyboardArrowRight-DDhyuGzA.js";import"./Autocomplete-IIP1j7ep.js";import"./usePreviousProps-TDH1wi51.js";import"./use-deep-compare-effect.esm-CXpco7o1.js";import"./TextWidget-CejHESsh.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
