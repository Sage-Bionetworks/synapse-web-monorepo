import{jJ as T}from"./iframe-DIMEjUPI.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BOn1VW-1.js";import"./index-r8ZA1smB.js";import"./useEntity-CDH3pPe1.js";import"./pickBy-D8cD4TAQ.js";import"./isString-DzUUUYLw.js";import"./_baseIteratee-CwMjI5sT.js";import"./useQueries-CAMB7h7q.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B3QbwDE7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B8ecWp2m.js";import"./useSchema-Conu_JrU.js";import"./index-CH-EkZ5H.js";import"./enums-CpA7hB8P.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-afQoECL1.js";import"./uniq-DbRT9xcm.js";import"./forEach-B8iwwgef.js";import"./Grid-yk5XGKmz.js";import"./ListItem-DPKTacnA.js";import"./listItemButtonClasses-y5Z8JbLJ.js";import"./ListItemIcon-BDI8QStl.js";import"./MenuItem-BkjCu_eC.js";import"./ListItemText-Dc9-oqid.js";import"./ArrowUpward-55UD9hb6.js";import"./ContentCopy-D4prdoFf.js";import"./FormControlLabel-t4K93ayt.js";import"./Checkbox-B0OQN17i.js";import"./SwitchBase-mG08y7Oi.js";import"./FormGroup-CGmVYGMI.js";import"./RadioGroup-D3Y7MYWk.js";import"./Radio-DScwGnb9.js";import"./Slider-8HhGvr-y.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B1FlComz.js";import"./DialogBase-BDHvanOc.js";import"./Close-C8OV6fZk.js";import"./HelpPopover-CaBwlcgk.js";import"./MarkdownPopover-DzSTgYwR.js";import"./LightTooltip-Cm8af4zC.js";import"./MarkdownSynapse-Bhx1KV-s.js";import"./SkeletonButton-ojrK8vH7.js";import"./SkeletonInlineBlock-Dg59gf8O.js";import"./SkeletonTable-DUsfALmI.js";import"./SkeletonParagraph-DE5PaDJj.js";import"./JsonSchemaForm-JlWGfss3.js";import"./GridLegacy-OkOHVOcv.js";import"./HelpTwoTone-CC9xaBdF.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DrHpfxCi.js";import"./_createAggregator-CxeIRbVI.js";import"./_baseMap-PuS_nOj-.js";import"./DateTimePicker-DiG4jUx5.js";import"./useMobilePicker-DF1cfeaU.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CkQHZRPZ.js";import"./index-DFMTwDmD.js";import"./Chip-ZO2rUNAI.js";import"./Tabs-52T-Y3XL.js";import"./KeyboardArrowRight-CB1qb9_e.js";import"./Autocomplete-DhkJUBdd.js";import"./usePreviousProps-8ZeCNWQS.js";import"./use-deep-compare-effect.esm-CscDK2fK.js";import"./TextWidget-D-GzSTwS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
