import{jJ as T}from"./iframe-DPJy_hbO.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BkB-U5Fp.js";import"./index-r8ZA1smB.js";import"./useEntity-DmeNeo6M.js";import"./pickBy-DWE31R76.js";import"./isString-B3-bwh42.js";import"./_baseIteratee-CUWPyb2_.js";import"./useQueries-DHwQF6MX.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Ck5_XHem.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bni54fJC.js";import"./useSchema-DJ8cwnqY.js";import"./index-DtxkQHOF.js";import"./enums-BM97flU3.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BN_H56Qx.js";import"./uniq-CzAuHrIR.js";import"./forEach-B8iwwgef.js";import"./Grid-DHEcecnF.js";import"./ListItem-UX4kTohW.js";import"./listItemButtonClasses-B80RmdCM.js";import"./ListItemIcon-DjXZCCjs.js";import"./MenuItem-a8yMuuEa.js";import"./ListItemText-B3DGrpQS.js";import"./ArrowUpward-DqPClsa2.js";import"./ContentCopy-BTq7TRBK.js";import"./FormControlLabel-BVqkmc0u.js";import"./Checkbox-B7jSZbGO.js";import"./SwitchBase-BFeDIiA_.js";import"./FormGroup-CyEsBs8f.js";import"./RadioGroup-B9P263ns.js";import"./Radio-DKaYC8Ai.js";import"./Slider-UvGwwZcJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cd5b58FO.js";import"./DialogBase-CqMIgrN_.js";import"./Close-gQOAERxu.js";import"./HelpPopover-DNFxtXl2.js";import"./MarkdownPopover-DONhqIHX.js";import"./LightTooltip-De1krTsk.js";import"./MarkdownSynapse-Cs3_hKdV.js";import"./SkeletonButton-BJjSHTYC.js";import"./SkeletonInlineBlock-By7Wj90y.js";import"./SkeletonTable-BAFcpWV8.js";import"./SkeletonParagraph-Cdg0493c.js";import"./JsonSchemaForm-DOap1OSM.js";import"./GridLegacy-C23pP9Zg.js";import"./HelpTwoTone-BYJwJmoL.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-BPN4DEm8.js";import"./_createAggregator-BEhFxM2O.js";import"./_baseMap-BgvB1gfM.js";import"./DateTimePicker-DH9pUp-r.js";import"./useMobilePicker-CKSY2f2d.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DdcbmahI.js";import"./index-r9LWYNhy.js";import"./Chip-CxgDiEBm.js";import"./Tabs-CpJEkYaR.js";import"./KeyboardArrowRight-9q72MxmB.js";import"./Autocomplete-C__-0rGC.js";import"./usePreviousProps-DgPTI9Ko.js";import"./use-deep-compare-effect.esm-CSNvm7WG.js";import"./TextWidget-CiQ5jhJb.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
