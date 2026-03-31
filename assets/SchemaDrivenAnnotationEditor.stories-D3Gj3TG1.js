import{jx as p}from"./iframe-Du6HmmeA.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BVVDCUL4.js";import"./index-Chi_LkuB.js";import"./useEntity-wRD2FBZ2.js";import"./pickBy-cEEp_iLx.js";import"./isString-Co2d92W-.js";import"./_baseIteratee-BjGF9gaT.js";import"./useInfiniteQuery-C6JA7Ilj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BLpky4Yt.js";import"./useSchema-G9yMd0Ji.js";import"./index-B4Lbmt4G.js";import"./enums-B9RbixW4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BFnmKIH3.js";import"./uniq-D6BLVwq-.js";import"./forEach-CWOCpBhE.js";import"./Add-DipgMiiV.js";import"./Grid-DJP8P6kx.js";import"./ListItem-dLoTxdvw.js";import"./listItemButtonClasses-D181yDZA.js";import"./ListItemIcon-Jd4MTD0z.js";import"./MenuItem-CKx8ssIT.js";import"./ListItemText-Ck2GrRFI.js";import"./ArrowUpward-CO3GNmg9.js";import"./ContentCopy-7kpYhWEU.js";import"./FormControlLabel-M309XaQU.js";import"./Checkbox-DZjIxL5f.js";import"./SwitchBase-oOV7dY8w.js";import"./FormGroup-z1W3hApr.js";import"./RadioGroup-CMtwxzI1.js";import"./Radio-wWz2YYwh.js";import"./Slider-C2JAm5ak.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C8KHwV0t.js";import"./DialogBase-Bo2YvE_C.js";import"./Close-Cg0hP_SZ.js";import"./HelpPopover-DpT2pzHF.js";import"./MarkdownPopover-QWNYSrbD.js";import"./LightTooltip-zyXlWYi4.js";import"./MarkdownSynapse-BKsKuzoi.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonTable-DFkOLILK.js";import"./SkeletonParagraph-xJMe6-dP.js";import"./JsonSchemaForm-CC3BdCJK.js";import"./GridLegacy-B6az0f8w.js";import"./HelpTwoTone-Cjphnle_.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D2uLOuNP.js";import"./_createAggregator-C59YaSZc.js";import"./_baseMap-D7z7svm5.js";import"./DateTimePicker-CPMgWtaZ.js";import"./useMobilePicker-ChsU1gnC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DZ6ZGb5c.js";import"./index-IUqGcT1d.js";import"./Chip-CcMLA9LH.js";import"./Tabs-C3p_uPou.js";import"./KeyboardArrowRight-DA86Cq-g.js";import"./Autocomplete-BlrjFx2A.js";import"./usePreviousProps-DXsH9NBJ.js";import"./use-deep-compare-effect.esm-Kl208o3Z.js";import"./TextWidget-DzFV49tY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
