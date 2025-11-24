import{jK as T}from"./iframe-BZSO1sBY.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BnRm1qPM.js";import"./index-r8ZA1smB.js";import"./useEntity-BIhNNgg6.js";import"./pickBy-CZHHWsXM.js";import"./isString-Cd6JsjoG.js";import"./_baseIteratee-iOdVGprh.js";import"./useQueries-BddsUBZl.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CnyKyV-h.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kuSnN0oc.js";import"./useSchema-8evU5ii0.js";import"./index-BgJ8OyAX.js";import"./enums-B4hE8wfM.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BxIYVEKh.js";import"./uniq-pBlyIzRr.js";import"./forEach-B8iwwgef.js";import"./Grid-3ve1GtRu.js";import"./ListItem-wPFAzGzW.js";import"./listItemButtonClasses-DowB6WhB.js";import"./ListItemIcon-BqNWynaU.js";import"./MenuItem-DMN5iUnx.js";import"./ListItemText-Dy8iYqkj.js";import"./ArrowUpward-BZHDXQ9Y.js";import"./ContentCopy-9naj4lHP.js";import"./FormControlLabel-DZaq9Cb-.js";import"./Checkbox-BXYGByWK.js";import"./SwitchBase-AgXctXHK.js";import"./FormGroup-pka7be3U.js";import"./RadioGroup-CCHi48de.js";import"./Radio-M61Dof9u.js";import"./Slider-9mtRwlBq.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-ZLfAJ6qd.js";import"./DialogBase-qU8qGhdb.js";import"./Close-B5HUTbow.js";import"./HelpPopover-D6vrmLVi.js";import"./MarkdownPopover-CI0_KxeK.js";import"./LightTooltip-8HRZpeXS.js";import"./MarkdownSynapse-xsdHjNvb.js";import"./SkeletonButton-CEYfXLSy.js";import"./SkeletonInlineBlock-BOHljZQL.js";import"./SkeletonTable-CscIywyr.js";import"./SkeletonParagraph-DUOYKhWf.js";import"./JsonSchemaForm-C2L2ryyg.js";import"./GridLegacy-Boi4LxFF.js";import"./HelpTwoTone-BB-wqdqT.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-xzRWrxcP.js";import"./_createAggregator-Ds9Ho_Qe.js";import"./_baseMap-CTsc-4-Q.js";import"./DateTimePicker-CkmNUFoI.js";import"./useMobilePicker-C31y3-Ga.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CSH_Oy_J.js";import"./index-CXinfiYW.js";import"./Chip-B1QmYW8E.js";import"./Tabs-B3VGeqLh.js";import"./KeyboardArrowRight-C7jFNwE9.js";import"./Autocomplete-BdfwzdS1.js";import"./usePreviousProps-UjL7IPyf.js";import"./use-deep-compare-effect.esm-Bc6PgY11.js";import"./TextWidget-Bzl4ENPm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
