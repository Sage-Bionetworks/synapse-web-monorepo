import{jJ as T}from"./iframe-BywOI08r.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DPKV0Wgb.js";import"./index-r8ZA1smB.js";import"./useEntity-DQW8NLUe.js";import"./pickBy-BwWClnLo.js";import"./isString-CskpBJHJ.js";import"./_baseIteratee-CG7m2_nN.js";import"./useQueries-BxDWj3rf.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Dss3vF7E.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DUEyhzBc.js";import"./useSchema-BuFuxuoy.js";import"./index-D1lAcln7.js";import"./enums-DyIzaQA_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DCgtmAmK.js";import"./uniq-s8JIJxjh.js";import"./forEach-B8iwwgef.js";import"./Grid-DzEpKiGD.js";import"./ListItem-BAfipCQx.js";import"./listItemButtonClasses-BbQi-Mjl.js";import"./ListItemIcon-DtaG0m1p.js";import"./MenuItem-CEHSf-MP.js";import"./ListItemText-BURvEkEZ.js";import"./ArrowUpward-BJG6NUem.js";import"./ContentCopy-CaMDopRp.js";import"./FormControlLabel-Dk794jSl.js";import"./Checkbox-C1Xiwym6.js";import"./SwitchBase-Cso67LU1.js";import"./FormGroup-B2u8ghP9.js";import"./RadioGroup-C6TBM8Qd.js";import"./Radio-CjgtPQOe.js";import"./Slider-BcgNuGpx.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CHRrIZxL.js";import"./DialogBase-CbJF6I2m.js";import"./Close-BG6jx9bS.js";import"./HelpPopover-X0uCoa3H.js";import"./MarkdownPopover-BG7aRo-S.js";import"./LightTooltip-DDHrckEI.js";import"./MarkdownSynapse-cRxt--Kk.js";import"./SkeletonButton-DzQUVwf8.js";import"./SkeletonInlineBlock-rzWwNvZc.js";import"./SkeletonTable-BGMevUuy.js";import"./SkeletonParagraph-CUhIHN6z.js";import"./JsonSchemaForm-D_aB4bP6.js";import"./GridLegacy-jihbntMO.js";import"./HelpTwoTone-zprQOQB_.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-BtwKUqwh.js";import"./_createAggregator-DiD02I22.js";import"./_baseMap-B6BQt2tR.js";import"./DateTimePicker-CW6JZn6N.js";import"./useMobilePicker-BXBznf5K.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Dy42ErK9.js";import"./index-QM9LZyQP.js";import"./Chip-COCF_Cxb.js";import"./Tabs-hA2YeNMd.js";import"./KeyboardArrowRight-aVbE3UHp.js";import"./Autocomplete-D_bP6dX_.js";import"./usePreviousProps-es-uMYAu.js";import"./use-deep-compare-effect.esm-DK5vUDP0.js";import"./TextWidget-B-C5B5NF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
