import{jw as p}from"./iframe-DcOQ9qHF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CvXVls1O.js";import"./index-Chi_LkuB.js";import"./useEntity-x2jk6rCv.js";import"./pickBy-CbWc_Uxm.js";import"./isString-Dt1pMH2y.js";import"./_baseIteratee-DnNaE3ya.js";import"./useInfiniteQuery-ghiUseCs.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DYOIW0i4.js";import"./useSchema-VaY29R7Z.js";import"./index-BS-tkuok.js";import"./enums-BvzndmxE.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DqnZX-4V.js";import"./uniq-DjG3y0IY.js";import"./forEach-UWyboym_.js";import"./Add-DApIxzDs.js";import"./Grid-Bit-u0O5.js";import"./ListItem-BXiXSFOh.js";import"./listItemButtonClasses-CUva6xBS.js";import"./ListItemIcon-BxPeD8SS.js";import"./MenuItem-BnSVsxfU.js";import"./ListItemText-DwgcbAU9.js";import"./ArrowUpward-C1GGrAS_.js";import"./ContentCopy-CajnQMHa.js";import"./FormControlLabel-CEo4Kpwe.js";import"./Checkbox-D3mQlatZ.js";import"./SwitchBase-DOuuVSF8.js";import"./FormGroup-DR3TWoKS.js";import"./RadioGroup-kApbVHdF.js";import"./Radio-CJDjA01Q.js";import"./Slider-DLjVl4_W.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B_tmHsMz.js";import"./DialogBase-BnHGavw5.js";import"./Close-HL96waRb.js";import"./HelpPopover-R08_rMc3.js";import"./MarkdownPopover-9ynAjK7o.js";import"./LightTooltip-BcNiBJVl.js";import"./MarkdownSynapse-D3IIkX0j.js";import"./SkeletonButton-BlWvLvXj.js";import"./SkeletonInlineBlock-YBvARA_9.js";import"./SkeletonTable-DMmO1dBv.js";import"./SkeletonParagraph-agQpiA4S.js";import"./JsonSchemaForm-DvkXp3Qv.js";import"./GridLegacy-CmG0AGJ4.js";import"./HelpTwoTone-DFq6XwOO.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-yXNOyykq.js";import"./_createAggregator-CP_i8rgb.js";import"./_baseMap-vH1D4gpk.js";import"./DateTimePicker-DU3D5rca.js";import"./useMobilePicker-CfD7Dkxt.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DsV06X9z.js";import"./index-Qd4VnuKv.js";import"./Chip-CelqGmC0.js";import"./Tabs-BP7fyM64.js";import"./KeyboardArrowRight-B9ocL33x.js";import"./Autocomplete-DXi90Z3V.js";import"./usePreviousProps-BCJjj9Wa.js";import"./use-deep-compare-effect.esm-El_CVw37.js";import"./TextWidget-CS78z5aF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
