import{jF as T}from"./iframe-DxLAvgox.js";import{S as C}from"./SchemaDrivenAnnotationEditor-7a0oj9CH.js";import"./index-r8ZA1smB.js";import"./useEntity-redXV7b-.js";import"./pickBy-CTBQqIfN.js";import"./isString-C65hQeKh.js";import"./_baseIteratee-BpeW87oO.js";import"./useQueries-CejlDFtq.js";import"./useSuspenseQuery-Bz18OTgk.js";import"./useInfiniteQuery-5-3iz-fe.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-yLb9qLzi.js";import"./useSchema-74sUqJxv.js";import"./index-C89ouIFD.js";import"./enums-lzaYbJwY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BMFyANHr.js";import"./uniq-L0rriJhe.js";import"./forEach-B8iwwgef.js";import"./Add-BmrJdkzc.js";import"./Grid-CotEr8D_.js";import"./ListItem-CF6JdeO0.js";import"./listItemButtonClasses-B7cg0K7t.js";import"./ListItemIcon-DXXa_CGK.js";import"./MenuItem-CDsrTtNF.js";import"./ListItemText-BdHLF4JM.js";import"./ArrowUpward-BZ3-6_Wf.js";import"./ContentCopy-CxhAkA4V.js";import"./FormControlLabel-D_hqiJfc.js";import"./Checkbox-DuOsObKJ.js";import"./SwitchBase-Y2WpZncG.js";import"./FormGroup-DHdpGp9k.js";import"./RadioGroup-DissSubT.js";import"./Radio-BGZ9PCO8.js";import"./Slider-DEkXy4av.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DiSSyxsu.js";import"./DialogBase-BvJ5UgLC.js";import"./Close-DWl4F5t6.js";import"./HelpPopover-DnbDN1Hz.js";import"./MarkdownPopover-D3aqrJqn.js";import"./LightTooltip-Bm_Du9SN.js";import"./MarkdownSynapse-B2SR9_8j.js";import"./SkeletonButton-BslgCCKq.js";import"./SkeletonInlineBlock-DbpHeMSy.js";import"./SkeletonTable-DodbVua_.js";import"./SkeletonParagraph-9LEWhVxx.js";import"./JsonSchemaForm-B2FuUV2v.js";import"./GridLegacy-BG-Yt_Jw.js";import"./HelpTwoTone-Cx4DkOhX.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dl114Url.js";import"./_createAggregator-B9mA1vcD.js";import"./_baseMap-DCpRc4dc.js";import"./DateTimePicker-C5Iq6ue5.js";import"./useMobilePicker-B98hA_V-.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-C87492MK.js";import"./index-S82T9GXF.js";import"./Chip-BbRs-Tuc.js";import"./Tabs-owlij0TE.js";import"./KeyboardArrowRight-C0dn7GRf.js";import"./Autocomplete-CPUs2oo1.js";import"./usePreviousProps-DEWyDXrk.js";import"./use-deep-compare-effect.esm-DnHLtynv.js";import"./TextWidget-CDMvsKhj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
