import{jF as T}from"./iframe-CQ5-qSaZ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Bt-RrXvb.js";import"./index-r8ZA1smB.js";import"./useEntity-BsUfOOVp.js";import"./pickBy-16oidJkG.js";import"./isString-C9y1aqR9.js";import"./_baseIteratee-Dj3IYEgL.js";import"./useQueries-D_Kjb9rp.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./useInfiniteQuery-CRASm_E1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgFzjrxA.js";import"./useSchema-a5IyN_o1.js";import"./index-BsswoSrQ.js";import"./enums-CG_L6Do3.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BprtyPd6.js";import"./uniq-Urbe3M_O.js";import"./forEach-B8iwwgef.js";import"./Add-Xur9oi8N.js";import"./Grid-Cae-tzkS.js";import"./ListItem-Ll8eJkm3.js";import"./listItemButtonClasses-BKccAi9X.js";import"./ListItemIcon-CYhGpTbw.js";import"./MenuItem-C2vxNPoL.js";import"./ListItemText-B11Yu4qS.js";import"./ArrowUpward-DCfNobOC.js";import"./ContentCopy-JAFC8tZW.js";import"./FormControlLabel-NHrBcrxm.js";import"./Checkbox-d-GkNVqV.js";import"./SwitchBase-DktDedBf.js";import"./FormGroup-YCQTeXJ2.js";import"./RadioGroup-ZhDU67KA.js";import"./Radio-CKKaLWY5.js";import"./Slider-CnPCWAWz.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BEtNAcjp.js";import"./DialogBase-CfmFQsU6.js";import"./Close-C9wv_I6B.js";import"./HelpPopover-B2AzDKTB.js";import"./MarkdownPopover-CO3_N7sV.js";import"./LightTooltip-68JRYdNY.js";import"./MarkdownSynapse-BZ3RNnEb.js";import"./SkeletonButton-c9WGL7V6.js";import"./SkeletonInlineBlock-DeFYqaGd.js";import"./SkeletonTable-BtsmZ8DU.js";import"./SkeletonParagraph-BA_ojVwN.js";import"./JsonSchemaForm-CZFNe761.js";import"./GridLegacy-CAThD2gd.js";import"./HelpTwoTone-DnDQHddo.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-nx2i21xg.js";import"./_createAggregator-7VGAlyU-.js";import"./_baseMap-BEQgNlee.js";import"./DateTimePicker-pvNMkRTv.js";import"./useMobilePicker-lTuSS1xw.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BsIm8kGA.js";import"./index-CMGxuthB.js";import"./Chip-CIMnCwMP.js";import"./Tabs-C60Lnwmn.js";import"./KeyboardArrowRight-zkLx16_4.js";import"./Autocomplete-BlfXrTES.js";import"./usePreviousProps-B4JLME3J.js";import"./use-deep-compare-effect.esm-Mlqb8z9B.js";import"./TextWidget-jAlCgs8r.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
