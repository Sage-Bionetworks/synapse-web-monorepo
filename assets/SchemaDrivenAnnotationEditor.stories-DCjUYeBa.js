import{jH as p}from"./iframe-C9XoSndX.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bqn0Kw1j.js";import"./index-Chi_LkuB.js";import"./useEntity-CJTXN1lX.js";import"./pickBy-DVlhEcQI.js";import"./isString-CcEUl8_F.js";import"./_baseIteratee-3cGLS7pB.js";import"./useQueries-BPbcnnWt.js";import"./useSuspenseQuery-OCydU3mN.js";import"./useInfiniteQuery-Jo0FHawD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DG7pZlew.js";import"./useSchema-BSZx3nIs.js";import"./index-B-KzzVLu.js";import"./enums-2yF0aGM-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DBoYfXEk.js";import"./uniq-D45FdU2B.js";import"./forEach-CWOCpBhE.js";import"./Add-BkHq8ao4.js";import"./Grid-BwPq8zDR.js";import"./ListItem-xnPVm_RY.js";import"./listItemButtonClasses-ocFg7dLL.js";import"./ListItemIcon-B6HEbbDq.js";import"./MenuItem-BtlH2e7k.js";import"./ListItemText-CYbPqA4Z.js";import"./ArrowUpward-lnsXNlKX.js";import"./ContentCopy-CYc92dVB.js";import"./FormControlLabel-w7ae_cxd.js";import"./Checkbox-CnF1x21G.js";import"./SwitchBase-C3mSrvvZ.js";import"./FormGroup-CqxTMmdq.js";import"./RadioGroup-u6523OPu.js";import"./Radio-Csx1D2kB.js";import"./Slider-CVIGrJkR.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Br1NI2DF.js";import"./DialogBase-Cj-WAIZM.js";import"./Close-DQGHtad4.js";import"./HelpPopover-IrQkWv7k.js";import"./MarkdownPopover-B2ZwGiYT.js";import"./LightTooltip-BoJkh92j.js";import"./MarkdownSynapse-BVsgkF4B.js";import"./SkeletonButton-CuEV4gB3.js";import"./SkeletonInlineBlock-By8cLyCE.js";import"./SkeletonTable-Dor9v2L-.js";import"./SkeletonParagraph-CP_Py8Yj.js";import"./JsonSchemaForm-DW3HO98o.js";import"./GridLegacy-C49hToGl.js";import"./HelpTwoTone-DqxYgSfu.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-9u-nfPqd.js";import"./_createAggregator-W9IoBlim.js";import"./_baseMap-EIGS4Zuu.js";import"./DateTimePicker-BoQw-wrQ.js";import"./useMobilePicker-ZDV2EGm2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DLR1O-kH.js";import"./index-CkRaXIId.js";import"./Chip-DUl13jbe.js";import"./Tabs-Bp9ny5AV.js";import"./KeyboardArrowRight-C-zsTcT5.js";import"./Autocomplete-BfKBAbhM.js";import"./usePreviousProps-CFS6ggRs.js";import"./use-deep-compare-effect.esm-DidBFxLr.js";import"./TextWidget-CAEC1sGn.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
