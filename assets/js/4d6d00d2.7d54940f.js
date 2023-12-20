"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2614],{2798:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(5893),s=a(1151);const o={slug:"codecatalyst-with-lambda",title:"CodeCatalyst\ub85c \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",authors:["eunho"],tags:["serverless","aws","cloud-native-develop","CodeCatalyst"]},l=void 0,i={permalink:"/publication/blog/codecatalyst-with-lambda",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-04-codecatalyst/index.md",source:"@site/blog/2023-12-04-codecatalyst/index.md",title:"CodeCatalyst\ub85c \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",description:"Amazon CodeCatalyst\ub294  AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 CDE (Cloud Development Environments) \uc11c\ube44\uc2a4\ub2e4.",date:"2023-12-04T00:00:00.000Z",formattedDate:"December 4, 2023",tags:[{label:"serverless",permalink:"/publication/blog/tags/serverless"},{label:"aws",permalink:"/publication/blog/tags/aws"},{label:"cloud-native-develop",permalink:"/publication/blog/tags/cloud-native-develop"},{label:"CodeCatalyst",permalink:"/publication/blog/tags/code-catalyst"}],readingTime:3.75,hasTruncateMarker:!1,authors:[{name:"Eunho",title:"Software Engineer @ Intellectus",url:"https://www.linkedin.com/in/eunho/",imageURL:"https://media.licdn.com/dms/image/C5603AQHOMis43w0DAg/profile-displayphoto-shrink_800_800/0/1516981037640?e=1708560000&v=beta&t=ElMa_AwBQlIENJNWQpFo-UWEYR54DkOLQ3eEFv_RfZc",key:"eunho"}],frontMatter:{slug:"codecatalyst-with-lambda",title:"CodeCatalyst\ub85c \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",authors:["eunho"],tags:["serverless","aws","cloud-native-develop","CodeCatalyst"]},unlisted:!1,prevItem:{title:"Serverless",permalink:"/publication/blog/dev-with-serverless"},nextItem:{title:"\ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9",permalink:"/publication/blog/txt-index-with-vector-embeddings"}},r={authorsImageUrls:[void 0]},c=[{value:"Devfile: \uac1c\ubc1c\ud658\uacbd \uae30\ubcf8 \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \ubc0f \uc758\uc874\uc131 \ud328\ud0a4\uc9c0 \uc124\uce58",id:"devfile-\uac1c\ubc1c\ud658\uacbd-\uae30\ubcf8-\ucee8\ud14c\uc774\ub108-\uc774\ubbf8\uc9c0-\ubc0f-\uc758\uc874\uc131-\ud328\ud0a4\uc9c0-\uc124\uce58",level:2},{value:"codecatalyst/workflows: CI/CD \ubc30\ud3ec \uc790\ub465\ud654 \uad6c\uc131",id:"codecatalystworkflows-cicd-\ubc30\ud3ec-\uc790\ub465\ud654-\uad6c\uc131",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ko/codecatalyst/",children:"Amazon CodeCatalyst"}),"\ub294  AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 CDE (Cloud Development Environments) \uc11c\ube44\uc2a4\ub2e4.\nCodeCatalyst\ub294 \ud504\ub85c\uc81d\ud2b8\uac00 AWS\uc758 \uc11c\ube44\uc2a4\ub97c \ud65c\uc6a9\ud574\uc11c \uc124\uacc4 \ub410\uc744 \ub54c \uc88b\uc740 \uc120\ud0dd\uc774\ub2e4. \uc811\uadfc \uad8c\ud55c \uc2dc\uc2a4\ud15c\uc778 AWS IAM \ud639\uc740 VPC \uc640 \uac19\uc740 \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd \uad6c\uc131\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc2e4\uc81c \uc0ac\ub840\ub97c \ud1b5\ud574\uc11c Amazon CodeCatalyst\ub97c \uc774\uc6a9\ud574\uc11c Serverless \uac1c\ubc1c\ud658\uacbd\uc744 \uad6c\ucd95\ud558\ub294 \uac83\uc744 \ub2e8\uacc4\uc801\uc73c\ub85c \uc54c\uc544\ubcf8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Devfile: \uac1c\ubc1c\ud658\uacbd \uae30\ubcf8 \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \ubc0f \uc758\uc874\uc131 \ud328\ud0a4\uc9c0 \uc124\uce58"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"codecatalyst/workflows: CI/CD \ubc30\ud3ec \uc790\ub465\ud654 \uad6c\uc131"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"devfile-\uac1c\ubc1c\ud658\uacbd-\uae30\ubcf8-\ucee8\ud14c\uc774\ub108-\uc774\ubbf8\uc9c0-\ubc0f-\uc758\uc874\uc131-\ud328\ud0a4\uc9c0-\uc124\uce58",children:"Devfile: \uac1c\ubc1c\ud658\uacbd \uae30\ubcf8 \ucee8\ud14c\uc774\ub108 \uc774\ubbf8\uc9c0 \ubc0f \uc758\uc874\uc131 \ud328\ud0a4\uc9c0 \uc124\uce58"}),"\n",(0,t.jsxs)(n.p,{children:["CodeCatayst\uc5d0\uc11c \uc2e4\uc9c8\uc801\uc778 \uac1c\ubc1c\uc744 \uc704\ud55c \ucef4\ud4e8\ud305 \uc778\uc2a4\ud134\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc740 Dev Environment \uc774\ub2e4. \uc5ec\uae30\uc11c\ub294 Github\uc5d0 \uc0dd\uc131\ub41c \ucf54\ub4dc \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c Clone \ud574\uc11c \uac1c\ubc1c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud55c\ub2e4. \uc774 \ub54c \uc0ac\uc6a9\ud558\ub294 \ucee8\ud14c\uc774\ub108 \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0\ub97c ",(0,t.jsx)(n.a,{href:"https://devfile.io/docs/2.0.0/what-is-a-devfile",children:"Devfile"}),"\ub97c \uc774\uc6a9\ud574\uc11c \uc124\uc815 \ud560 \uc218 \uc788\ub2e4.  \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 devfile.yaml \uc774 \ucd5c\uc0c1\uc704 \ub514\ub809\ud1a0\ub9ac(/)\uc5d0 \uc0dd\uc131\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74 CodeCatayst\uc758 \uae30\ubcf8 \uc124\uc815 \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba70, \ucee8\ud14c\uc774\ub108\uc5d0 \ubbf8\ub9ac \uc124\uce58\ub41c \uc8fc\uc694 \ud328\ud0a4\uc9c0\uc758 \uc815\ubcf4\ub294 ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-1.0",children:"AWS \ubb38\uc11c"}),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'schemaVersion: 2.0.0\nmetadata:\n  name: aws-universal\n  version: 1.0.1\n  displayName: AWS Universal\n  description: Stack with AWS Universal Tooling\n  tags: ["aws", "al2"]\n  projectType: "aws"\ncomponents:\n  - name: aws-runtime\n    container:\n      image: public.ecr.aws/aws-mde/universal-image:latest\n      mountSources: true\n      volumeMounts:\n        - name: docker-store\n          path: /var/lib/docker\n  - name: docker-store\n    volume:\n      size: 16Gi\n'})}),"\n",(0,t.jsx)(n.p,{children:"\ubcf8 \uc0ac\ub840\uc5d0\uc11c\ub294 nodejs \uc758 \ubc84\uc804\uc774 18 \uc774\uc0c1 \ud544\uc694\ud588\uae30 \ub54c\ubb38\uc5d0, devfile.yaml \uc744 \uc218\uc815\ud574\uc11c \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc758 \ub8e8\ud2b8 \uc704\uce58\uc5d0 \ucd94\uac00\ud588\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'schemaVersion: 2.0.0\nmetadata:\n  name: aws-universal\n  version: 1.0.1\n  displayName: AWS Universal\n  description: Stack with AWS Universal Tooling\n  tags: ["aws", "al2"]\n  projectType: "aws"\ncomponents:\n  - name: aws-runtime\n    container:\n      image: public.ecr.aws/aws-mde/universal-image:3.0\n      mountSources: true\n      volumeMounts:\n        - name: docker-store\n          path: /var/lib/docker\n  - name: docker-store\n    volume:\n      size: 16Gi\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["*\ucee8\ud14c\uc774\ub108 \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0\uc758 \ubc84\uc804\uc774 latest \uc778 \uacbd\uc6b0  ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-1.0",children:"Universal image 1.0 runtime versions"}),"\uc744 \ucc38\uc870 \ud558\uba70, \uc704\uc5d0\uc11c \uc218\uc815\ub41c \uac83\uacfc \uac19\uc774 \ud2b9\uc815 \ubc84\uc804(",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-3.0",children:"3.0"}),")\uc744 \uba85\uc2dc\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"codecatalystworkflows-cicd-\ubc30\ud3ec-\uc790\ub465\ud654-\uad6c\uc131",children:"codecatalyst/workflows: CI/CD \ubc30\ud3ec \uc790\ub465\ud654 \uad6c\uc131"}),"\n",(0,t.jsxs)(n.p,{children:["\ubcc0\uacbd \uc0ac\ud56d\uc5d0 \ub300\ud55c \ud1b5\ud569\uacfc \ubc30\ud3ec\ub294 \ud300\uc758 \ud611\uc5c5 \ubc29\uc2dd\uc5d0 \ub9de\ucd94\uc5b4 \uacb0\uc815\ud574\uc57c \ud55c\ub2e4. \uc5ec\uae30\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c main \ube0c\ub79c\uce58\uc5d0 \ucee4\ubc0b\uc774 \ubc1c\uc0dd\ud558\uba74 \uc790\ub3d9\uc801\uc73c\ub85c \ud2b9\uc815 AWS \uacc4\uc815 \ub0b4\uc5d0 \uac1c\ubc1c \ud658\uacbd\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\uc744 \uc608\ub85c \uc124\uba85\ud55c\ub2e4. workflows\ub294 yaml \ud30c\uc77c \ud615\ud0dc\ub85c \ud504\ub85c\uc81d\ud2b8\uc758 \ud574\ub2f9 \uacbd\ub85c\uc5d0 ",(0,t.jsx)(n.code,{children:".codecatalyst/workflows/"})," \uc704\uce58 \uc2dc\ud0a8\ub2e4. \uc608\uc81c \uc5d0\uc11c\ub294 \uac04\ub2e8\ud558\uac8c ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-add-trigger.html",children:"Triggers"})," \uc640 ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-actions.html",children:"Actions"})," \ub450 \uc18d\uc131\uc744 \uc774\uc6a9\ud574\uc11c \uba54\uc778 \ube0c\ub79c\uce58\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ubc1c\uc0dd \ud588\uc744 \ub54c, \uc9c0\uc815\ub41c \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0\uc5d0\uc11c \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\ub294 worklow\uc774\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'Name: onPushToMainRunDeployment\nSchemaVersion: "1.0"\nTriggers:\n  - Type: PUSH\n    Branches:\n      - main\nActions:\n  LambdaFunctionDeployment:\n    Environment:\n      Name: environemt-name\n      Connections: \n       - Name: connection-name\n         Role: role-name\n    Identifier: aws/build@v1\n    Compute:\n      Type: EC2\n    Inputs:\n      Sources:\n        - WorkflowSource\n    Configuration:\n      Container:\n        Registry: ECR\n        Image: public.ecr.aws/aws-mde/universal-image:3.0\n      Steps:\n        - Run: aws sts get-caller-identity\n        - Run: yarn\n        - Run: yarn run sls:deploy\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var t=a(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);