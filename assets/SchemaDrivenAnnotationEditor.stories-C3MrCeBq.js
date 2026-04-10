import{jw as p}from"./iframe-90f2SQV6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B3iFVTae.js";import"./index-Chi_LkuB.js";import"./useEntity-DdAkX9nj.js";import"./pickBy-BoCYbEVx.js";import"./isString-mpfQo2G8.js";import"./_baseIteratee-DS7Uv7Qg.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B6I0bq03.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXT05GtQ.js";import"./useSchema-BrwthDhB.js";import"./index-CxLXuGOQ.js";import"./enums-DBdphs4q.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-iJRgvUTF.js";import"./uniq-Dr5SjQm9.js";import"./forEach-UWyboym_.js";import"./Add-DXaaC_Ke.js";import"./Grid-BHxxwVIG.js";import"./ListItem-eNi2DDpy.js";import"./listItemButtonClasses-oeVRGQYM.js";import"./ListItemIcon-D_okXNkh.js";import"./MenuItem-BuPaY9i0.js";import"./ListItemText-zXm1X607.js";import"./ArrowUpward-DoSxNhPf.js";import"./ContentCopy-dryV1Tzc.js";import"./FormControlLabel-DglLXMgl.js";import"./Checkbox-CF10eWfP.js";import"./SwitchBase-BM0I7EUL.js";import"./FormGroup-BmEhWMxq.js";import"./RadioGroup-DtutK2iG.js";import"./Radio-D_kSUUOa.js";import"./Slider-DUrIG275.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DhI1owhm.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonTable-CUhBOjKD.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./JsonSchemaForm-DdmjiacO.js";import"./GridLegacy-D3qaUHGq.js";import"./HelpTwoTone-ChMB9fIN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BEtSS8-l.js";import"./_createAggregator-SyA7j7fr.js";import"./_baseMap-BCtJ1V6g.js";import"./DateTimePicker-vyrhh8GU.js";import"./useMobilePicker-DNPJ2dYs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-By0Yayj0.js";import"./index-DBtU2uN0.js";import"./Chip-DkWyanB2.js";import"./Tabs-DN_J4POC.js";import"./KeyboardArrowRight-DlH1NBWt.js";import"./Autocomplete-D1cVZgEB.js";import"./usePreviousProps-BMS-JDpN.js";import"./use-deep-compare-effect.esm-BIqY3Cs8.js";import"./TextWidget-BRElECPG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
