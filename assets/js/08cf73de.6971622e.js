"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[329],{4414:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"txt-index-with-vector-embeddings","metadata":{"permalink":"/publication/blog/txt-index-with-vector-embeddings","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-03-semactic_search/index.md","source":"@site/blog/2023-11-03-semactic_search/index.md","title":"\ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9","description":"\ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9","date":"2023-11-03T00:00:00.000Z","formattedDate":"November 3, 2023","tags":[{"label":"serverless","permalink":"/publication/blog/tags/serverless"},{"label":"aws","permalink":"/publication/blog/tags/aws"},{"label":"cloud-computing","permalink":"/publication/blog/tags/cloud-computing"}],"readingTime":14.26,"hasTruncateMarker":false,"authors":[{"name":"bogyung","title":"Data Engineer @ Intellectus","url":"https://www.linkedin.com/in/%EB%B3%B4%EA%B2%BD-%EC%B0%A8-793a641a8/","imageURL":"https://media.licdn.com/dms/image/D5603AQEyt90WM99ZLA/profile-displayphoto-shrink_800_800/0/1675046826293?e=1704326400&v=beta&t=tO9vUSQj7EVIM66rKtTEgBb-yuBlGxBWkc8o4gsr_S0","key":"bogyung"},{"name":"Eunho","title":"Software Engineer @ Intellectus","url":"https://www.linkedin.com/in/eunho/","imageURL":"https://media.licdn.com/dms/image/C5603AQHOMis43w0DAg/profile-displayphoto-shrink_800_800/0/1516981036906?e=1702512000&v=beta&t=Pbv2yix0CjSUMkBIfZ0hnLtDclSkutuebkLm9L8hbZw","key":"eunho"}],"frontMatter":{"slug":"txt-index-with-vector-embeddings","title":"\ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9","authors":["bogyung","eunho"],"tags":["serverless","aws","cloud-computing"]},"nextItem":{"title":"Serverless","permalink":"/publication/blog/dev-with-serverless"}},"content":"## \ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9\\n> \ubca1\ud130 \uc778\ub371\uc2a4\uc640 \uc720\uc0ac\ub3c4\ub97c \uc774\uc6a9\ud574\uc11c \uc774\ubaa8\uc9c0(Emoji) \uc2dc\ub9e8\ud2f1 \uac80\uc0c9 \uae30\ub2a5 \uad6c\ud604\ud558\uae30\\n\\n\uc774 \uae00\uc5d0\uc11c\ub294 \ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130\uc758 \uc0c9\uc778(Index) \ubc29\uc2dd\uacfc \ud65c\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uae30\uc220\uc801\uc73c\ub85c \uc124\uba85\ud569\ub2c8\ub2e4. \uac1c\ubcc4\uc801\uc778 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\uc758 \uc0c9\uc778 \ubc29\ubc95\uc778 n-gram\uc758 \uad6c\uccb4\uc801\uc778 \uc791\ub3d9 \ubc29\uc2dd\uc744 \uc2ec\ub3c4 \uc788\uac8c \uc124\uba85\ud558\uac70\ub098, \uc790\uc5f0\uc5b4 \ucc98\ub9ac(NLP)\uc5d0 \ub300\ud574 \uad6c\ud604(implementation) \uad00\uc810\uc758 \uc0c1\uc138\ud55c \uc124\uba85\uc740 \uc774\uc57c\uae30\ud558\ub824\uace0 \ud558\ub294 \ud575\uc2ec \uc8fc\uc81c\uac00 \uc544\ub2d9\ub2c8\ub2e4.\\n\\n\ub54c\ubb38\uc5d0, \uc790\uc5f0\uc5b4 \uac80\uc0c9 \uc2dc\uc2a4\ud15c\uc744 \uc804\ubc18\uc801\uc73c\ub85c \uc774\ud574\ub97c \ubaa9\uc801\uc73c\ub85c \ud558\uac70\ub098, \ubca1\ud130 \uc720\uc0ac\ub3c4(Vector Similarity)\ub97c \uc774\uc6a9\ud55c \uc2dc\ub9e8\ud2f1 \uac80\uc0c9(Semantic Search)\uc5d0  \uad00\uc2ec\uc774 \uc788\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4 \ubd84\ub4e4\uc774 \uc77d\uc5b4\ubcf4\uc2dc\uace0 \uc758\uacac\uc744 \ub098\ub204\uc5b4 \ubcf4\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n\ub370\uc774\ud130 \uad00\ub9ac\ub97c \uc704\ud55c \uc2dc\uc2a4\ud15c\uc758 \uacf5\ud1b5\uc801\uc778 \uc694\uad6c\uc0ac\ud56d \uc911 \ud558\ub098\ub294 \uac80\uc0c9 \uae30\ub2a5\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9\uc790\ub294 \ud2b9\ubcc4\ud55c \uc2dc\uc2a4\ud15c\uc774 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc790\uc5f0\uc5b4\ub85c \uc791\uc131\ud55c \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uace0 \uc801\uc808\ud55c \uacb0\uacfc\uac00 \uc81c\uacf5\ub420 \uac83\uc73c\ub85c \uae30\ub300\ud569\ub2c8\ub2e4. \uae30\uc220\uc801\uc73c\ub85c \uc774\ub7ec\ud55c \uac15\ub825\ud55c \uc131\ub2a5\uc758 \uac80\uc0c9 \uc131\ub2a5\uc5d0 \ubd80\ud569\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uae30\ub2a5\uc744 \uc9c1\uc811 \uad6c\ud604\ud558\ub294 \uac83\uc740 \uc26c\uc6b4 \uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4.\\n\\n### \ud0a4\uc6cc\ub4dc\ub85c \uc774\ubaa8\uc9c0 \uac80\uc0c9\ud558\uae30\\n\\n\uba54\uc2e0\uc800\ub098 \uc774\uba54\uc77c\uc744 \uc791\uc131\ud560 \ub54c \uc774\ubaa8\uc9c0(emoji)\uc758 \ud65c\uc6a9 \ube48\ub3c4\ub294 \uc810\uc810 \ub298\uc5b4\ub098\ub294 \ub4ef \ubcf4\uc785\ub2c8\ub2e4. \uacbd\ud5d8\uc801\uc73c\ub85c\ub3c4 \uc2e4\uc6a9\uc801\uc73c\ub85c \uba54\uc2dc\uc9c0\uc758 \ub0b4\uc6a9\uc744 \uac04\uacb0\ud558\uac8c \uc720\uc9c0 \ud558\uba74\uc11c\ub3c4 \ub258\uc559\uc2a4\ub97c \ud568\uaed8 \uc804\ub2ec\ud558\uae30 \uc704\ud574\uc11c \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ub3c4\uad6c \uc911 \ud558\ub098\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \uc0c1\ud669\uc5d0 \ub9de\ub294 \uc801\uc808\ud55c \uc774\ubaa8\uc9c0\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc740 \uc5ec\uac04 \uc26c\uc6b4 \uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4.  Window\uc5d0\uc11c \uae30\ubcf8\uc801\uc778 \uc774\ubaa8\uc9c0 \uac80\uc0c9\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\uc9c0\ub9cc \ud574\ub2f9 \uac80\uc0c9 \uc2dc\uc2a4\ud15c\uc744 \uc774\uc6a9\ud574 \uc6d0\ud558\ub294 \uc774\ubaa8\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc788\ub294 \ud655\ub960\uc774 \uc0c1\ub300\uc801\uc73c\ub85c \ub0ae\uae30 \ub54c\ubb38\uc5d0 \uc8fc\ub85c \uc0ac\uc6a9\ud588\ub358 \uac83\ub4e4\ub9cc \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n> emoji-windows-app.png\\n\\n\uc774\ub7ec\ud55c \uc774\ubaa8\uc9c0 \uac80\uc0c9\uc774 \uc9c1\uad00\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c8 \uc218 \uc788\ub294 \uc88b\uc740 \uc0ac\ub840\ub85c \uc0dd\uac01\ub418\uc5b4 \uc774\ubc88 \uac80\uc0c9 \uae30\ub2a5 \uad6c\ud604\uc758 \uc0ac\uc6a9 \ub370\uc774\ud130\ub85c \uc124\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4. \\n\\n### \uae30\ubcf8\uc801\uc778 Synthetic Search (Keyword Search)\\n\\n\uac80\uc0c9 \uc2dc\uc2a4\ud15c \uc911 \uac00\uc7a5 \uace0\uc804\uc801\uc778 \ubc29\ubc95\uc778 \uc785\ub825\ub41c \ub2e8\uc5b4\uac00 \ud3ec\ud568\ub41c \uacb0\uacfc\ub97c \ubaa8\ub450 \ubcf4\uc5ec\uc8fc\ub294 \uac83\uc744 Synthetic Search, Keyword Search\ub77c \ubd80\ub974\uace0, \ub300\ud45c\uc801\uc778 \ubc29\ubc95\uc73c\ub85c\ub294 N-Gram\uc774 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n> synthetic-search-bread.png\\n> synthetic-search-cak.png\\n\\nn-gram\uc5d0\uc11c n\uc740 \uc22b\uc790\ub97c \uc758\ubbf8\ud558\uba70 \ubb38\uc790\uc5f4\uc5d0\uc11c n\uac1c\uc758 \uc5f0\uc18d\uc801\uc778 \uc694\uc18c\ub97c \uc798\ub77c\uc11c Index\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4(\uadf8\ub798\uc11c n\uc744 n-gram token size \ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4).  \uc608\ub97c\ub4e4\uc5b4 \u201cDATA\u201d\ub97c n=2\uc778 Bi-gram\uc73c\ub85c \uc801\uc6a9\ud558\uba74, \uc778\ub371\uc2a4\ub294 \u201cDA\u201d, \u201cAT\u201d, \u201cTA\u201d\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \\n\\n> ngram-example.png\\n> ngram-mysql.png\\n\\n\ud55c\uae00\ub85c \uc801\uc6a9\ud558\uba74 \u201c\ub370\uc774\ud130\u201d \uc5d0\uc11c \u201c\ub370\uc774\u201d, \u201c\uc774\ud130\u201d \ub77c\ub294 \uc778\ub371\uc2a4\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \\n\\n\uc774\ub807\uac8c n-gram\uc744 \uc0ac\uc6a9\ud55c full-text search\ub97c \ud558\uac8c \ub418\uba74, \uc804\ubb38\uc5d0\uc11c \ubd80\ubd84\uc801\uc73c\ub85c \uc778\ub371\uc2a4\ub97c \uac00\uc9c0\uac8c \ub418\uc5b4 \uac80\uc0c9\uc758 \uc815\ud655\ub3c4\uac00 \uc0c1\uc2b9\ud558\uac8c \ub429\ub2c8\ub2e4. \u201c\uc544\uba54\ub9ac\uce74\ub178\u201d\ub97c \uac80\uc0c9\ud558\uae30 \uc704\ud574\uc11c \u201c\uc544\uba54\u201d\ub77c\uace0\ub9cc \ub123\uc5b4\ub3c4 \u201c\uc544\uba54\ub9ac\uce74\ub178\u201d\uac00 \ub098\uc624\ub2c8\uae4c\uc694(\ubb3c\ub860 \u201c\uc544\uba54\u201d\uac00 \ud3ec\ud568\ub41c \u201c\uc544\uba54\ub9ac\uce74\u201d \uac19\uc740 \ub2e4\ub978 \ub2e8\uc5b4\ub4e4\ub3c4 \ub098\uc635\ub2c8\ub2e4). \uc774\ub97c \uc815\ub82c\ud558\ub294 \ubc29\ubc95\uc740 \uad00\ub828\uc131 \uc810\uc218, \uac80\uc0c9 \uc635\uc158\uc5d0 \ub530\ub77c\uc11c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ud2b9\ud788 \ud55c\uad6d\uc5b4, \uc911\uad6d\uc5b4, \uc77c\ubcf8\uc5b4\uc758 \uacbd\uc6b0 \ub2e8\uc5b4+\ub2e8\uc5b4 \uc870\ud569\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ubb38\uc790\ub97c \ub9cc\ub4e4 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 n-gram\uc744 \uc0ac\uc6a9\ud558\uba74 \uac80\uc0c9\uc758 \uc815\ud655\ub3c4\uac00 \ub354\uc6b1 \uc62c\ub77c\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \\n\\n\ud558\uc9c0\ub9cc n-gram\uc774 \ubb34\uc870\uac74 \uc88b\uc740 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uac80\uc0c9 \uacb0\uacfc\uc5d0\uc11c \ub204\ub77d\uc774 \ubc1c\uc0dd\ud560 \ud655\ub960\uc774 \uc801\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc, \uc778\ub371\uc2a4\uac00 \ub298\uc5b4\ub0a8\uc5d0 \ub530\ub77c DB \uc6a9\ub7c9\uc774 \uc99d\uac00\ud55c\ub2e4\ub294 \ub2e8\uc810 \ub610\ud55c \uac00\uc9c0\uace0 \uc788\uae30\uc5d0 \uc0c1\ud669\uc5d0 \ub9de\ucdb0 \uc801\uc808\ud55c token size(=n) \uc124\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\\n\\n### \ud55c\uac78\uc74c \ub098\uc544\uac04 Semantic Search\\n\\n\uadf8\ub807\ub2e4\uba74 \ubaa8\ub4e0 \uac80\uc0c9 \uc2dc\uc2a4\ud15c\uc744 \ud655\uc2e4\ud55c n-gram\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud560\uae4c\uc694? \uc0ac\ub791\uc744 \uc785\ub825\ud588\uc744 \ub54c, \ud558\ud2b8\uac00 \ub098\uc624\uace0 \uc5f0\uc778\uc758 \ubaa8\uc2b5\uc774 \ub098\uc628\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694? \u2018\uc774\ub7f0 \uac83\ub3c4 \ub098\uc624\ub124?\u2019 \ud558\uba74\uc11c \uc720\uc800\uc758 \uac80\uc0c9 \ub9cc\uc871\ub3c4\uac00 \uc62c\ub77c\uac00\uc9c0 \uc54a\uc744\uae4c\uc694? \ub610 \ucf00\uc774\ud06c\ub97c \uc785\ub825\ud588\uc744 \ub54c, \ucd1b\ubd88, \ud48d\uc120 \uac19\uc740 \uc774\ubaa8\uc9c0\ub4e4\uc774 \uac19\uc774 \ub098\uc628\ub2e4\uba74\uc694?\\n\\n\uc774\ub807\uac8c \ud14d\uc2a4\ud2b8 \uc790\uccb4\uac00 \uc544\ub2cc, \uadf8 \uac80\uc0c9\uc5b4\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \uc758\ubbf8\uc5d0 \uae30\ubc18\ud574\uc11c \uac80\uc0c9 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uac83\uc774 \ubc14\ub85c **Semantic Search** \uc785\ub2c8\ub2e4. 0\uacfc 1\ubc16\uc5d0 \ubaa8\ub974\ub294 \ucef4\ud4e8\ud130\uac00 \uc5b4\ub5bb\uac8c \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\ub294 \ub2e8\uc5b4\uc758 \uc758\ubbf8\ub97c \uc774\ud574\ud558\uace0 \uad00\ub828 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc904 \uc218 \uc788\ub294 \uac78\uae4c\uc694? \\n\\n\uadf8\uac74 \ubc14\ub85c **\ub370\uc774\ud130\uc758 Vector\ud654**\uc640 **\uc720\uc0ac\ub3c4 \uac80\uc0c9(Similarity Search)**\uc5d0 \ub2ec\ub824\uc788\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \ub2e4\ucc28\uc6d0\uc758 \uacf5\uac04 \uc18d \ubca1\ud130\ub85c \ud45c\ud604\ud558\uace0 \ud574\ub2f9 \ubca1\ud130\uc640 \uc720\uc0ac\ud55c \ubca1\ud130\ub97c \ucc3e\uc74c\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ub370\uc774\ud130 \uac80\uc0c9\uc744 \uc9c4\ud589\ud558\uba70, \uc774\ub294 \uace7 \uc0ac\uc6a9\uc790\uc758 \uac80\uc0c9 \ub9cc\uc871\ub3c4\ub97c \ub192\uc5ec\uc90d\ub2c8\ub2e4. \uc720\uc0ac\ud55c \ubca1\ud130\ub294 \ub2e4\ucc28\uc6d0\uc758 \uacf5\uac04\uc5d0\uc11c \uc720\uc0ac\ud55c \uc704\uce58\uc5d0 \uc874\uc7ac\ud558\uae30\uc5d0 \ub2e4\ub978 \ub9d0\ub85c \u2018\ucd5c\uc778\uc811 \uc774\uc6c3 \uac80\uc0c9(Nearest Neighbor Search)\u2019\uc774\ub77c\uace0\ub3c4 \ud569\ub2c8\ub2e4. \uc774\ub7f0 \ubc29\ubc95\uc740 \ubb38\uc11c \uac80\uc0c9\ubfd0\ub9cc \uc544\ub2c8\ub77c \ucd94\ucc9c\uc2dc\uc2a4\ud15c, \uba38\uc2e0\ub7ec\ub2dd, \ucef4\ud4e8\ud130\ube44\uc804 \ub4f1 \ub2e4\uc591\ud55c \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.  \\n\\n\uc55e\uc11c n-gram\uc774 \ub2e8\uc5b4\ub97c n\uac1c\uc758 \uc5f0\uc18d\ub41c \ub2e8\uc5b4\ub85c \ucabc\uac1c\uc11c \uc778\ub371\uc2a4\ub85c \uc124\uc815\ud574 \uac80\uc0c9\ud588\ub2e4\uba74, Semantic Search\ub294 \ub370\uc774\ud130\ub97c \ub2e4\ucc28\uc6d0\uc758 Vector\ub85c \ub9cc\ub4e0 Vetor\uac12([12.23, 456.789, \u2026])\uc744 \uc778\ub371\uc2a4\ub85c \uc124\uc815\ud574 \uac80\uc0c9\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.\\n\\n> synthetic-vs-semantic.png\\n\\n### Word to Vector\\n\\n\ub2e8\uc5b4\ub97c \ubca1\ud130\ub85c \uc218\uce58\ud654\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694? \ub370\uc774\ud130 \ubca1\ud130\ud654 \uc911 \ud14d\uc2a4\ud2b8\ub370\uc774\ud130\uc778 \ub2e8\uc5b4\ub97c \uace0\uc815\ub41c \uc0ac\uc774\uc988\uc758 \ubca1\ud130\ub85c \ubcc0\ud658\ud558\ub294 \u2018\ub2e8\uc5b4 \uc784\ubca0\ub529(Word Embedding)\u2019 \ubc29\ubc95\uacfc \uadf8\ub97c \ud1b5\ud574 \uc720\uc0ac\ub3c4\ub97c \uce21\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n> word-tokenization.png\\n\\n1. **\ubb38\uc7a5\uc218\uc9d1**\\n\\n: \uc6d0\ud558\ub294 \ub300\uc0c1\uc5d0\uc11c \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \uc774\ub294 \uc790\uc5f0\uc5b4 \ucc98\ub9ac\ub97c \uc704\ud55c \uccab\ubc88\uc9f8 \ub2e8\uacc4\ub85c \ud2b9\uc815 \ubaa9\uc801\uc744 \uac00\uc9c4 \ud14d\uc2a4\ud2b8\ub4e4\uc744 \ubaa8\uc74d\ub2c8\ub2e4. \ub300\ubd80\ubd84 \uc6f9\ud06c\ub864\ub9c1\uc774\ub098 ebook \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\ub294 \ubca1\ud130\ud654\uc758 \uc2dc\uc791\uc810\uc73c\ub85c \uc591\uc9c8\uc758 \ub370\uc774\ud130\ub97c \ubaa8\uc73c\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc88b\uc740 \uc7ac\ub8cc\ub85c \uc694\ub9ac\ud574\uc57c \ub9db\uc788\ub294 \uc74c\uc2dd\uc774 \ub098\uc624\ub294 \uac83 \ucc98\ub7fc Input \ub370\uc774\ud130\uac00 \uc88b\uc544\uc57c Output \ub610\ud55c \uc88b\uc740 \uacb0\uacfc\uac00 \ub098\uc624\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub807\uac8c \uc790\uc5f0\uc5b8\uc5b4 \uc5f0\uad6c\ub97c \uc704\ud574 \ud2b9\uc815\ud55c \ubaa9\uc801\uc744 \uac00\uc9c0\uace0 \uc5b8\uc5b4\uc758 \ud45c\ubcf8\uc744 \ucd94\ucd9c\ud55c \uac83\uc744 \ucf54\ud37c\uc2a4(Corpus)\ub77c\uace0 \ud569\ub2c8\ub2e4. \\n\\n2. **\ud14d\uc2a4\ud2b8 \uc804\ucc98\ub9ac \ubc0f \ud1a0\ud070\ud654(Tokenization) **\\n\\n: \uc218\uc9d1\ud55c \ud14d\uc2a4\ud2b8\uc5d0\uc11c \ubd88\ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc81c\uac70\ud558\uac70\ub098 \ubc14\uafd4\uc8fc\ub294 \uc804\ucc98\ub9ac\ub97c \uac70\uce69\ub2c8\ub2e4. \uc774\ub54c, \ud06c\ub864\ub9c1\ud560 \ub54c \ub178\uc774\uc988\ub85c \ub4e4\uc5b4\uc624\ub294 html \ud0dc\uadf8 \ub0b4\uc6a9(br, a,\u2026)\uc744 \uc0ad\uc81c\ud558\uac70\ub098, \ub300\ubb38\uc790\ub97c \uc18c\ubb38\uc790\ub85c \ud1b5\ud569\ud558\uac70\ub098 \ud2b9\uc218\ubb38\uc790\ub4e4\uc744 \uc81c\uac70\ud558\ub294 \ub4f1\uc758 \uacfc\uc815\uc774 \ub4e4\uc5b4\uac11\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc758\ubbf8\uc788\ub294 \ub2e8\uc5b4(Token)\ub97c \uae30\uc900\uc73c\ub85c \uc790\ub974\ub294 \uc791\uc5c5(Word Tokenization)\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc73c\ub85c\ub294  I love data \u2192 i, love, data \ucc98\ub7fc \uad6c\ubd84 \uae30\ud638/\ub744\uc5b4\uc4f0\uae30 \uae30\uc900\uc73c\ub85c \ub098\ub204\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub2e8\uc5b4 \ud1a0\ud070\ud654\ub97c \uc9c4\ud589\ud560 \ub54c\uc5d4 \uace0\ub824\ud574\uc57c\ud560 \uc0ac\ud56d\uc774 \ub9ce\uc73c\ubbc0\ub85c \uc0c1\ud669\uc5d0 \ub9de\ucdb0 \uc804\ucc98\ub9ac \ubc0f \ud1a0\ud070\ud654\ub97c \uc9c4\ud589\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4 \ud55c\uad6d\uc5b4\ub294 \ub744\uc5b4\uc4f0\uae30 \uae30\uc900\uc73c\ub85c \ud558\uba74 \u2018\ub370\uc774\ud130\uac00 \uc88b\uc544\u2019 \u2192 \u2018\ub370\uc774\ud130\uac00\u2019, \u2018\uc88b\uc544\u2019 \ucc98\ub7fc \uc2e4\uc9c8\uc801 \uc758\ubbf8\uc778 \u2018\ub370\uc774\ud130\u2019\uc640 \uc811\ubbf8\uc0ac \u2018-\uac00\u2019\uac00 \ud568\uaed8 \uc4f0\uc774\ub294 \uad50\ucc29\uc5b4\uc774\uae30 \ub54c\ubb38\uc5d0 \ud615\ud0dc\uc18c \ubd84\uc11d\uc744 \ud1b5\ud55c \ud1a0\ud070\ud654\uac00 \ub354 \uc720\ub9ac\ud569\ub2c8\ub2e4. \\n\\n3. **\ub2e8\uc5b4 \uc784\ubca0\ub529(Word Embedding) **\\n\\n: \ubaa8\ub4e0 \ud14d\uc2a4\ud2b8\ub97c \ud1a0\ud070\ud654 \ud55c \ud6c4, \uac01 \ub2e8\uc5b4\ub97c \uace0\uc815\ub41c \ud06c\uae30\uc758 \uc2e4\uc218 \ubca1\ud130\ub85c \ubcc0\uacbd\ud558\ub294 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \uc8fc\ub85c Word2Vec\uc774\ub098\xa0GloVe\xa0FastText \uac19\uc740 \ub2e8\uc5b4 \uc784\ubca0\ub529 \uae30\ubc95\uc744 \uc0ac\uc6a9\ud558\uba70 \ub2e8\uc5b4\ub97c \ubca1\ud130\ub85c \ubcc0\ud615\ud558\uc5ec \\n\uc740 \ub2e8\uc5b4 \ub610\ub294 \ubb38\uc11c\ub97c \ubca1\ud130\ub85c \ubcc0\ud658\ud558\uc5ec \uc758\ubbf8\ub860\uc801 \ub73b(semantic meaning)\uc5d0 \ub530\ub77c \uc720\uc0ac\ud55c \ubb38\uc11c \ub610\ub294 \ub2e8\uc5b4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n4. **\uc720\uc0ac\ub3c4 \uad6c\ud558\uae30 **\\n\\n: \uc774\uc81c \ubaa8\ub4e0 \ub2e8\uc5b4(\ud639\uc740 \ubb38\uc7a5)\uc740 \uc77c\uc815 \ucc28\uc6d0\uc744 \uac00\uc9c4 \ubca1\ud130\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc774\uc81c \ubca1\ud130\ub4e4 \uac04\uc758 \uc720\uc0ac\ub3c4\ub97c \uad6c\ud568\uc73c\ub85c \ube44\uc2b7\ud55c \uc758\ubbf8\ub97c \uac00\uc9c4 \ub2e8\uc5b4\uc778\uc9c0 \ud655\uc778\ud558\ub294 \uc21c\uc11c\ub9cc \ub0a8\uc558\uc2b5\ub2c8\ub2e4. \\n\uc774\ub7f0 \ubca1\ud130\uac04 \uc720\uc0ac\ub3c4\ub97c \uad6c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \ubc29\ubc95\uc740 \uc8fc\ub85c \ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4(Cosine\xa0similarity), \uc720\ud074\ub9ac\ub514\uc548 \uac70\ub9ac(Euclidean distance), \uc790\uce74\ub4dc \uc720\uc0ac\ub3c4(Jaccard similarity) 3\uac00\uc9c0\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uac01\uac01\uc758 \ubc29\ubc95\uc5d0\ub300\ud574 \uac04\ub2e8\ud788 \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n - *\ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4(Cosine\xa0similarity) : *\\n\\n\ub450 \ubca1\ud130\uc0ac\uc774\uc758 \ub0b4\uac01\ub97c \uce21\uc815\ud558\uc5ec \uc720\uc0ac\ub3c4\ub97c \uce21\uc815\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ubc31\ud130\uc758 \ubc29\ud5a5\uc774 \ube44\uc2b7\ud560 \uc218\ub85d(cos\u03b8= 1) \ub450 \ubca1\ud130\ub294 \uc720\uc0ac\ud558\ub2e4\uace0 \ud560 \uc218 \uc788\uc73c\uba70, \ubc18\ub300\ub85c \uc9c1\uac01(cos\u03b8= 0)\uc744 \uc774\ub8f0 \ub54c\uc5d0 \ub450 \ubca1\ud130\ub294 \uc720\uc0ac\uc131\uc774 \uc5c6\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. Cos\u03b8\uc758 \uac12\uc740 -1~1\uc0ac\uc758 \uac12\uc744 \uac16\uc9c0\ub9cc \uc790\uc5f0\uc5b4 \ucc98\ub9ac\uc758 \uacbd\uc6b0A, B \ud53c\uccd0 \ubca1\ud130 \ud589\ub82c\uc740 \ubcf4\ud1b5 \ub2e8\uc5b4 \ube48\ub3c4(tf-idf\xa0\uac00\uc911\uce58)\ub85c \uce21\uc815\ub418\uc5b4 \uc74c\uc218\uac12\uc774 \uc5c6\uc73c\ubbc0\ub85c \ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4\ub294 0~1 \uc0ac\uc774\uc758 \uac12\uc744 \uac16\uac8c \ub429\ub2c8\ub2e4. \\n\uadf8\ub9ac\uace0 \uc790\uc5f0\uc5b4\ub294 \uace0\ucc28\uc6d0\uc758 \ubca1\ud130\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\ub294\ub370, \ucf54\uc0ac\uc778 \uc720\uc0ac\ub3c4\uc758 \uacbd\uc6b0 \ubca1\ud130 \ucc28\uc6d0\uc218\uc758 \uc601\ud5a5\uc744 \ub35c \ubc1b\uace0, \ub2e8\uc5b4\uc758 \ub2e4\uc591\uc131\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ub2e8\uc5b4 \ud76c\uc18c\uc131(sparsity)\uc758 \ubb38\uc81c\uc5d0\ub3c4 \ubbfc\uac10\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc790\uc5f0\uc5b4 \ubd80\ubd84\uc5d0\uc11c \uc720\uc0ac\ub3c4\ub97c \uce21\uc815\ud560 \ub54c Cos\uc720\uc0ac\ub3c4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n> cos-similarity.png\\n\\n> vector-space-example.png\\n\\n- *\uc720\ud074\ub9ac\ub514\uc548 \uac70\ub9ac(Euclidean distance) :* \\n\\n\ub450 \ubca1\ud130\uac04\uc758 \uc9c1\uc120 \uac70\ub9ac\ub97c \uacc4\uc0b0\ud558\uc5ec \uc720\uc0ac\uc131\uc744 \ud3c9\uac00\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ub450 \ubca1\ud130\uac04\uc758 \uac70\ub9ac\uac00 \uc791\uc744 \uc218\ub85d \ub354 \uc720\uc0ac\ud558\ub2e4\uace0 \ud3c9\uac00 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub2e4\ucc28\uc6d0\uc758 \uacf5\uac04\uc5d0\uc11c \uac70\ub9ac\ub97c \uce21\uc815\ud558\uac8c \ub418\uba74 \uac01 \ub370\uc774\ud130\ub4e4\uc758 \uc720\uc0ac\ub3c4\uac00 \ubcf4\uc874\ub418\uc9c0 \ubabb\ud55c\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ubcf4\uc644\ud558\uae30 \uc704\ud574\uc11c \ucc28\uc6d0\uc744 \ucd95\uc18c\uc2dc\ud0a4\ub294 \ubc29\ubc95\ub3c4 \uc788\uc73c\ub098 \ub9ce\uc740 \uc5f0\uc0b0\uc744 \ud544\uc694\ub85c \ud569\ub2c8\ub2e4."},{"id":"dev-with-serverless","metadata":{"permalink":"/publication/blog/dev-with-serverless","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-03-serverless/index.md","source":"@site/blog/2023-11-03-serverless/index.md","title":"Serverless","description":"Serverless \ubc29\uc2dd\uc774 \ucd94\uad6c\ud558\ub294 \uc131\uacfc\ub294 \uc0c1\ub2f9\ud788 \uc774\uc0c1 \uc801\uc774\ub2e4. \uc720\uc9c0\ubcf4\uc218\uc640 \ubcc0\uacbd\uad00\ub9ac\ub97c \uc27d\uac8c \ub9cc\ub4e4\uace0, \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c\uc758 \uc790\uc6d0 \uad00\ub9ac\ub97c \ud6a8\uc728\uc131\uc744 \ub192\uc778\ub2e4. \uc774 \uc131\uacfc\ub97c \ucde8\ud558\uae30 \uc704\ud574\uc11c\ub294 \ubcc0\ud654\ub97c \uc218\uc6a9\ud574\uc57c \ud55c\ub2e4.","date":"2023-11-03T00:00:00.000Z","formattedDate":"November 3, 2023","tags":[{"label":"serverless","permalink":"/publication/blog/tags/serverless"},{"label":"aws","permalink":"/publication/blog/tags/aws"},{"label":"cloud-computing","permalink":"/publication/blog/tags/cloud-computing"}],"readingTime":11.985,"hasTruncateMarker":false,"authors":[{"name":"Eunho","title":"Software Engineer @ Intellectus","url":"https://www.linkedin.com/in/eunho/","imageURL":"https://media.licdn.com/dms/image/C5603AQHOMis43w0DAg/profile-displayphoto-shrink_800_800/0/1516981036906?e=1702512000&v=beta&t=Pbv2yix0CjSUMkBIfZ0hnLtDclSkutuebkLm9L8hbZw","key":"eunho"}],"frontMatter":{"slug":"dev-with-serverless","title":"Serverless","authors":["eunho"],"tags":["serverless","aws","cloud-computing"]},"prevItem":{"title":"\ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130 \uc778\ub371\uc2a4 \ubc29\uc2dd\uacfc \ud65c\uc6a9","permalink":"/publication/blog/txt-index-with-vector-embeddings"}},"content":"Serverless \ubc29\uc2dd\uc774 \ucd94\uad6c\ud558\ub294 \uc131\uacfc\ub294 \uc0c1\ub2f9\ud788 \uc774\uc0c1 \uc801\uc774\ub2e4. \uc720\uc9c0\ubcf4\uc218\uc640 \ubcc0\uacbd\uad00\ub9ac\ub97c \uc27d\uac8c \ub9cc\ub4e4\uace0, \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c\uc758 \uc790\uc6d0 \uad00\ub9ac\ub97c \ud6a8\uc728\uc131\uc744 \ub192\uc778\ub2e4. \uc774 \uc131\uacfc\ub97c \ucde8\ud558\uae30 \uc704\ud574\uc11c\ub294 \ubcc0\ud654\ub97c \uc218\uc6a9\ud574\uc57c \ud55c\ub2e4.\\n\uacbd\ud5d8\uc5d0 \ube44\ucd94\uc5b4 \ubd24\uc744 \ub54c, \ud300 \ub2e8\uc704\ub85c \uc6c0\uc9c1\uc774\uace0 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \ubcc0\ud654\uc758 \uc815\ub3c4\uc5d0 \ube44\ub840\ud558\uc5ec \uc800\ud56d\uc774 \ubc1c\uc0dd\ud55c\ub2e4. \\nServerless \ubc29\uc2dd\uc774 \uc81c\uacf5\ud558\ub294 \uad6c\uc870\uc801\uc778 \uc7a5\uc810\uc744 \uc628\uc804\ud788 \ucde8\ud558\uba74\uc11c, \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud658\uacbd\uc5d0 \ub9de\uac8c \ucd5c\uc801\ud654 \ud558\ub294 \uc77c\uc740 \uae30\uc874\uc5d0 \ub3d9\uc791\ud558\uace0 \uc788\ub294 \uc5c5\ubb34 \ud504\ub85c\uc138\uc2a4\uc758 \uc131\uc219\ub3c4\uac00 \ub192\uc744\uc218\ub85d \ud070 \uc800\ud56d\uc774 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4.\\n\\n\uc774 \uae00\uc740 \uac1c\ubcc4 \uc5d4\uc9c0\ub2c8\uc5b4\uc758 \uc0dd\uc0b0\uc131\uc744 \ub118\uc5b4\uc11c \ud504\ub85c\uc81d\ud2b8 \ud639\uc740 \ud300\uc758 \uc0dd\uc0b0\uc131\uacfc \uc131\uacfc\uc5d0 \ub300\ud574 \uace0\ubbfc\ud558\uace0 \uc788\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4\ub4e4\uacfc \ub098\ub204\uace0 \uc2f6\uc740 \uc774\uc57c\uae30\uc774\ub2e4.\\n\\n\ucf54\ub4dc \uc791\uc131\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud234\uc774\ub098 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4, \ud639\uc740 \uc0c8\ub85c\uc6b4 \uac1c\ubc1c \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ub3c4\uc785\uc740 Serverless \ubc29\uc2dd\uc744 \uc628\uc804\ud788 \uc801\uc6a9\ud558\ub294 \uac83\uc5d0 \ube44\ud558\uba74 \ub2e8\uc21c\ud55c \ubcc0\ud654\ub77c \ud560 \uc815\ub3c4\ub2e4.\\n\uc774 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c \ub2e4\uc74c\uc758 \uc8fc\uc81c\uc5d0 \ub300\ud574\uc11c \uc0dd\uac01\uc744 \ub098\ub220 \ubcf4\uace0\uc790 \ud55c\ub2e4:\\n- **\uc65c Serverless \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?**\\n- **\ubc14\uafd4\uc57c \ud558\ub294 \uac83\ub4e4**\\n-  **\uc8fc\uc5b4\uc9c4 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\uae30 \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc804\ub7b5\uacfc \uae30\uc220\uc801\uc778 \uad6c\ud604 \uc0ac\ub840**\\n\\n## \uc65c Serverless \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?\\n\\n\uc65c \ud574\uc57c \ud558\ub294\uc9c0  \ub530\ub77c\uc11c \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uac00\uac00 \uacb0\uc815\ub41c\ub2e4.\\n\\n\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5c5\uacc4\uc5d0\uc11c \'No Silver Bullet\'[^1]\uc740 \ub110\ub9ac \uc54c\ub824\uc9c4 \uba85\uc81c\uc774\ub2e4. \ud2b9\uc815 \uad00\uc810\uc5d0\uc11c \uc6b0\uc6d4\ud560 \uc218 \uc788\ub294 \uc5b4\ub5a4 \uc120\ud0dd\ub3c4 \ub2e4\ub978 \uad00\uc810\uacfc \uc0c1\ucda9(trade-off) \ub418\ub294 \uacbd\uc6b0\ub294 \ub9e4\uc6b0 \ud754\ud558\ub2e4.\\n\ubb34\uc5c7\ubcf4\ub2e4\ub3c4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc740 \uc21c\uc218 \ucc3d\uc791\ubb3c\uc774 \uc544\ub2c8\ub77c \ube44\uc988\ub2c8\uc2a4\ub97c \uc9c0\uc6d0\ud558\uace0 \ud601\uc2e0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd \ubcc0\ud654\uc5d0 \ub530\ub77c \uc801\uc751\ud574\uc57c \ud558\ub294 \uac83\uc740 \ud544\uc5f0\uc801\uc774\ub2e4.\\n\uc774\ub7ec\ud55c \ud2b9\uc131\uc5d0 \ube44\ucd94\uc5b4 Serverless \ubc29\uc2dd\uc758 \ub3c4\uc785\uc758 \uc774\uc720\ub294 \ub2e8\uc21c\ud558\uace0 \uc9c1\uad00\uc801\uc774\ub2e4. \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc758 \uc6c0\uc9c1\uc784\uc744 \uc790\ub3d9\ucc28\uc640 \ube44\uad50\ud558\uba74 \uc774 \uc0dd\ud0dc\uacc4\ub294 \ud56d\uc0c1 accelerator-pedal\uc744 \ud798\uaecf \ubc1f\uace0 \uc788\ub2e4.\\n\ub2e8\uc21c\ud788 \ud2b9\uc815 \ubc29\ud5a5\uc73c\ub85c \uc6c0\uc9c1\uc774\uace0 \uc788\ub294\uac83\uc774 \uc544\ub2c8\ub77c \ud56d\uc0c1 \uac00\uc18d\uc744 \ud558\uace0 \uc788\ub294 \uac83\uc774\ub2e4. \uc5ed\uc0ac\uc801\uc73c\ub85c \uc774 \uc704\ud0dc\ub85c\uc6cc \ubcf4\uc774\ub294 \uc9c8\uc8fc\ub97c \uc9c0\uc18d\ud558\ub294 \ubc29\ubc95\uc740 \uac10\uc18d \uc7a5\uce58((brake))\ub97c \ubc1c\uc804\uc2dc\ud0a4\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ub354 \ub2e8\ub2e8\ud55c \uc100\uc2dc(chassis)\uc640 \uc2a4\ud14c\ube4c\ub77c\uc774\uc800(stabilizer)\ub97c \ubcf4\uc644\ud558\uba74\uc11c \ub3d9\uc2dc\uc5d0 \ub354 \ube60\ub978 \uac00\uc18d \uc7a5\uce58\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc774\ub2e4. Serverless \ubc29\uc2dd\uc740 \uc0c8\ub85c\uc6b4 \uac00\uc18d \uc7a5\uce58\uc774\ub2e4.\\n\\n\uc0b0\uc5c5 \ud604\uc7a5\uc5d0\uc11c\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud574\uc11c \ube44\uc988\ub2c8\uc2a4 \uae30\ud68c\ub97c \ud655\uc7a5\ud558\uace0 \uc2e4\ud589\uc744 \uac00\uc18d\ud654 \ud558\uace0\uc788\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\uc758 \uad6c\ud604\uacfc \uc720\uc9c0\ubcf4\uc218\ub3c4 \uc774\ub7ec\ud55c \uc18d\ub3c4\uc5d0 \ubc1c\uc744 \ub9de\ucdb0\uc57c \ud55c\ub2e4. \uc774 \ubcc0\ud654\ub294 \uc774\ubbf8 \uc815\ub9bd\ub41c \uae30\uc220 \ubd84\uc57c\uc758 \uc5f0\uc18d\uc801\uc778 \ubc1c\uc804\uc73c\ub85c\ub294 \uc124\uba85\ud558\uae30 \ud798\ub4e4\ub2e4. \uc774 \ubcc0\ud654\uc758 \uc18d\ub3c4\ub294 \uad6c\uc870\uc801\uc778 \uc9c4\ud654\uc5d0\uc11c \ube44\ub86f\ub41c \uac83\uc774\ub2e4.\\n\\n\uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uae30\ucd08\ub85c \uc778\ud130\ub137\uc744 \ud1b5\ud574 \uc5f0\uacb0\ub41c \ub514\uc9c0\ud138 \uc138\uacc4\ub294 \ube44\uc988\ub2c8\uc2a4\uc758 \ud55c \uad00\uc810\uc5d0\uc11c \ubcf4\uba74 \uc77c\uc885\uc758 \uc2e4\ud5d8\uc2e4\uc774\ub2e4. \uc704\ud5d8(risk)\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uad00\ub9ac \ud558\uba74\uc11c \uad6c\uc0c1\ud558\uace0 \uc788\ub294 \ube44\uc988\ub2c8\uc2a4\ub97c \uc2e4\uc99d\ud558\uace0 \ub3d9\uc791\uc2dc\ucf1c\ubcfc \uc218 \uc788\ub294 \uae30\ud68c\ub2e4. \uc2dc\uc7a5 \uacbd\uc7c1 \uad6c\ub3c4 \uc18d\uc5d0\uc11c \uc774 \uc2e4\ud5d8\uc744 \uc5bc\ub9c8\ub098 \ud6a8\uc728\uc801\uc73c\ub85c \uc2e4\ud589\ud558\uace0 \ud6a8\uacfc\ub97c \uadf9\ub300\ud654 \ud558\ub290\ub0d0 \ud558\ub294 \uac83\uc774 \ube44\uc988\ub2c8\uc2a4\uc758 \uacbd\uc7c1\ub825\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4. \uac1c\ubcc4 \uc2e4\ud5d8\ub4e4\uc740 \uc2dc\uc2a4\ud15c\ud654 \ub418\uba74\uc11c \uccb4\uacc4\uc801\uc73c\ub85c \uc870\uc9c1\ub418\uc5b4 \uac1c\ubcc4 \uc2e4\ud5d8\uc758 \uc0dd\uba85 \uc8fc\uae30\ub294 \ub354 \ube68\ub77c\uc9c0\uace0, \ub370\uc774\ud130\ub85c \ud655\uc778\ub41c \uae30\ud68c\ub4e4\uc740 \ube44\uc988\ub2c8\uc2a4 \uac00\uce58\ub85c \ubcc0\ud658\ub41c\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c, \uc989 \uad6c\ud604 \uad00\uc810\uc5d0\uc11c\ub294 \uc2e4\uc9c8\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\ub2ec\ub420 \uc218 \uc788\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\ub4e4\uc774 \uc774\ub7ec\ud55c \ud504\ub85c\uc138\uc2a4\uc5d0 \ub9de\ucdb0 \uacf5\uae09\ub3fc\uc57c \ud55c\ub2e4. \ube68\ub9ac \ub9cc\ub4e4\uc5b4\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uacf5\uac1c \ud574\uc57c \ud558\ub294 \uac83\uc774\ub2e4.\\n\\n\uc77c\uc815 \uc218\uc900 \uc774\uc0c1 \ud488\uc9c8\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c\ud558\ub294 \uc5ed\ub7c9\uc740 \uac1c\ubcc4 \uc5d4\uc9c0\ub2c8\uc5b4\uc758 \uc5ed\ub7c9\uacfc \ubc00\uc811\ud55c \uad00\ub828\uc131\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \ud558\uc9c0\ub9cc \ud504\ub85c\uc81d\ud2b8\uc758 \uaddc\ubaa8\uac00 \uc77c\uc815 \uc218\uc900 \uc774\uc0c1 \ucee4\uc9c0\uba74 \uac1c\uc778\uc758 \uc5ed\ub7c9\uc73c\ub85c\ub294 \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub294 \uc704\ud5d8 \uc694\uc18c\ub4e4\uc774 \uc0dd\uae34\ub2e4. \uadf8 \uc911 \ud55c\uac00\uc9c0\uac00 \uc81c\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \ubcc0\uacbd\uc744 \uad00\ub9ac\ud558\ub294 \ubd80\ubd84\uc774\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ubcf8\uc9c8\uc801\uc778 \uc18d\uc131\uc5d0 \uc758\ud574 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \uc9c0\uc18d\uc801\uc73c\ub85c \ubcc0\uacbd\ub41c\ub2e4. \uc774 \uc18d\uc131\uc740 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc758 \ubcc0\ud654\ub97c \uc218\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ucd08\uac00 \ub418\uae30\ub3c4 \ud55c\ub2e4. \ubb38\uc81c\ub294 \uc774 \ubcc0\uacbd\uc774 \ub3d9\uc791\ud558\uace0 \uc788\ub294 \uc81c\ud488\uacfc \uc9c0\uc6d0\ud558\uace0 \uc788\ub294 \ube44\uc988\ub2c8\uc2a4 \uc131\uacfc\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uc704\ud5d8 \uc694\uc18c\ub77c\ub294 \uac83\uc774\ub2e4. \uac1c\ubc1c \uacfc\uc815\uc5d0\uc11c \ubc1c\uacac\ub418\uc9c0 \ubabb\ud55c \ud504\ub85c\uadf8\ub7a8 \uc624\ub958\ub098 \uae30\ub300\ud558\uc9c0 \uc54a\uc740 \ubd80\uc791\uc6a9(side effects)\uacfc \uac19\uc740 \ud604\uc0c1\uc744 \uac1c\ubcc4 \uc5d4\uc9c0\ub2c8\uc5b4\uc758 \uc5ed\ub7c9 \ub9cc\uc73c\ub85c \ud1b5\uc81c \ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud55c \uc77c\uc774\ub2e4. \\n\\n## \ubc14\uafd4\uc57c \ud558\ub294 \uac83\ub4e4\\n\\n- \uac1c\ubc1c \uc791\uc5c5\uacfc \ubcc0\uacbd \ubc0f \ubc30\ud3ec \ud504\ub85c\uc138\uc2a4\uc758 \ud1b5\ud569\\n\\n## \uc8fc\uc5b4\uc9c4 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\uae30 \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc804\ub7b5\uacfc \uae30\uc220\uc801\uc778 \uad6c\ud604 \uc0ac\ub840\\n\\nPoC \uc218\ud589\uc744 \ud1b5\ud574 \ubcf8\uaca9\uc801\uc778 \uad6c\ud604 \ub2e8\uacc4\uc5d0 \uc9c4\uc785\ud558\uae30 \uc804\uc5d0 \uc5ec\ub7ec\uac00\uc9c0 \uac00\uc124\uc744 \uac80\uc99d\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uac00 \ud544\uc694\ud588\uace0, MVP \uad6c\ud604\uc744 \ud1b5\ud574 \ub0b4\ubd80 \uc774\ud574\ub2f9\uc0ac\uc790\ub098 \ub610\ub294 \ubd88\ud2b9\uc815 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub3c4 \uc6b0\ub9ac \uc544\uc774\ub514\uc5b4\ub97c \ub178\ucd9c\uc2dc\ucf1c \ud53c\ub4dc\ubc31\uc744 \uc218\uc9d1\ud574\uc57c \ud558\ub294 \uc77c\uc774 \ub9ce\uc558\ub2e4. \uc694\uc57d\ud558\uc790\uba74 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc774\uc5b4\uc57c \ud588\ub2e4. \ud55c\uac00\uc9c0 \uac15\uc870\ud558\uace0 \uc2f6\uc740 \uac83\uc740 \uad6c\ud604\ud558\ub294 \uac83 \uc790\uccb4\uac00 \ubaa9\uc801\uc774 \uc544\ub2c8\ub77c \uad6c\ud604\uccb4\ub97c \ud1b5\ud574\uc11c \uc544\uc774\ub514\uc5b4\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \ud655\ubcf4\ud558\ub294 \uac83\uc774 \uc9c4\uc9dc \ubaa9\uc801\uc774\ub77c\ub294 \uac83\uc774\ub2e4.\\n\\n\uc774\ub7ec\ud55c \uc791\uc5c5\uc758 \ubc18\ubcf5\uc740 \uc0dd\uac01\ubcf4\ub2e4 \uc720\ucf8c\ud558\uc9c0 \uc54a\ub2e4. \ub2e8\uc21c\ud55c \uae30\ub2a5\uc774 \uc544\ub2c8\ub77c \uc544\uc8fc \uc881\uc740 \ubc94\uc704 \uc77c\uc9c0\ub77c\ub3c4 \ube44\uc988\ub2c8\uc2a4 \uc2dc\ub098\ub9ac\uc624\ub97c \uc2e4\ud589\uc2dc\ucf1c\uc57c \ud588\ub2e4. \uc720\uc758\ubbf8\ud55c \ub370\uc774\ud130\ub97c \ud655\ubcf4\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc2dc\uc7a5\uc5d0\uc11c\uc758 \ube44\uad50 \uc6b0\uc704\ub97c \uc8fc\uc7a5\ud560 \uc218 \uc788\uc744 \uc815\ub3c4\ub294 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc77c\ubc18 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc77c\uc815 \uc2dc\uac04 \uba38\ubb3c\uba74\uc11c \uc368\ubcfc \uc218 \uc788\uc744 \uc815\ub3c4\ub294 \ub3fc\uc57c \ud588\ub2e4. \ud2b8\ub798\ud53d\uc774 \uc5b4\ub290\uc815\ub3c4 \ubc1c\uc0dd\ud574\uc57c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ud574\uc11d\uc774 \uac00\uce58\uac00 \uc788\uac8c \ub418\ub294 \uacbd\uc6b0\ub4e4\ub3c4 \uc788\uae30\uc5d0 \ud2b9\uc815 \ubaa9\uc801\uc758 \ub9c8\ucf00\ud305\uc774\ub098 \ud64d\ubcf4 \uac19\uc740 \ud65c\ub3d9\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc2dc\uc2a4\ud15c\uc774 \uc9c0\uc18d\uc801\uc73c\ub85c \uc6b4\uc601\ub3fc\uc57c \ud588\ub2e4. \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4\ub97c \uc804\ub7b5\uc801\uc73c\ub85c \ud65c\uc6a9 \ud588\uace0 \uac00\uc6a9\uc131\uc774\ub098 \uc131\ub2a5\uc5d0 \ub300\ud55c \uace0\ub824\ub97c \ucd5c\uc18c\ud654 \ud588\uc9c0\ub9cc \ube44\uc6a9\uc740 \ubb34\uc2dc\ud560 \uc218 \uc788\ub294 \uc218\uc900\uc774 \uc544\ub2c8\uc5c8\ub2e4.\\n\uc774\ubbf8 \uc54c\ub824\uc9c4 \ub9ce\uc740 \uc131\uacf5 \uc0ac\ub840\uc5d0\uc11c \ubbfc\ucca9\ud558\uac8c \ube44\uc988\ub2c8\uc2a4\ub97c \uc11c\ud3ec\ud2b8\ud558\ub294 \uc2dc\uc2a4\ud15c\uc744 \uc5b4\ub5bb\uac8c \uac1c\ubc1c\ud558\uba74 \uc88b\uc740\uc9c0\uc5d0 \ub300\ud574\uc11c \uc774\uc57c\uae30\ud558\uace0 \uc788\uc9c0\ub9cc, \uc798 \uc0dd\uac01\ud574 \ubcf4\uba74 \uadf8\ub7f0 \uc774\uc57c\uae30\ub4e4\uc740 \uc131\uacf5\ud588\uae30 \ub54c\ubb38\uc5d0 \uc131\ub9bd\ub418\ub294 \ub17c\ub9ac \uc778 \uacbd\uc6b0\uac00 \ub9ce\ub2e4. \ud604\uc2e4\uc740 \uc544\uc774\ub514\uc5b4\ub97c \uc544\ubb34\ub9ac \uc798 \uad6c\ud604\ud574\uc11c \uce58\uc5f4\ud55c \ub17c\uc758 \ub05d\uc5d0 \uacb0\uc815\ud55c \uc6b0\ub9ac \ube0c\ub79c\ub4dc\uc758 \ub3c4\uba54\uc778\uc5d0 \uc5f0\uacb0\uc2dc\ucf1c \uacf5\uac1c\ud574\ub3c4 \uc544\ubb34\uc77c\ub3c4 \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774\ub2e4. \ud300 \ub0b4\ubd80\uc758 \uc5ec\ub7ec \uac00\uc124\uc744 \uc99d\uba85\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8\uc6a9 \ud2b8\ub798\ud53d\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \ub610 \ub2e4\ub978 \uac1c\ubc1c\uc744 \ud558\uac70\ub098, \uacc4\uc18d \uc3df\uc544\uc838 \ub098\uc624\ub294 \uc5ec\ub7ec \uac1c\ubc1c \ubc0f \uc6b4\uc601 \ub3c4\uad6c\ub4e4\uc744 \ucc3e\uc544\ubcf4\uba74\uc11c \uc5b4\ub5bb\uac8c \uc801\uc6a9\uc2dc\ucf1c\uc57c \ud560\uc9c0\ub97c \uace0\ubbfc\ud558\uba74\uc11c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud574\uc57c \ud55c\ub2e4.\\n\uadf8\ub798\uc11c \ud544\uc694\ud55c \uac83\uc740 \uc2dc\uac04\uc774\ub2e4. \ud544\uc694\ud55c \uad6c\ud604\uccb4\ub97c \ub354 \ube68\ub9ac \ub9cc\ub4e4\uc5b4\ub0b4\uace0, \ub610 \ud544\uc694\ud55c \ubb34\uc5b8\uac00\ub97c \ud574\uc57c \ud560 \uc2dc\uac04 \ub3d9\uc548 \ubc1c\uc0dd\ud558\ub294 \ube44\uc6a9\uc744 \uc904\uc774\uba74 \ubb34\uc5b8\uac00\ub97c \ud560 \uc218 \uc788\ub294 \uc2dc\uac04\uc774 \uc0dd\uae34\ub2e4.\\n\\n\uc774 \ubb38\uc81c\uc5d0 \ub300\ud55c \ub300\uc548\uc73c\ub85c \uc0dd\uac01\ud55c \uac83\uc774 PoC \ud639\uc740 MVP \uad6c\ud604\uc5d0\ub294 \uc0ac\uc6a9\ub7c9 \uae30\ubc18 \uacfc\uae08 \uc815\ucc45 \uc11c\ube44\uc2a4\ub97c \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\ub294 \uac83\uc774\uc5c8\uace0, \uadf8 \uc911 \ud558\ub098\uac00 Serverless \ub77c\ub294 \ud0a4\uc6cc\ub4dc\uc774\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub807\uac8c \uad6c\ud604 \ud574 \ub193\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc804\uae4c\uc9c0 \uacc4\uc18d \uc720\uc9c0\ud560 \uc218 \uc788\ub2e4\uba74 \ud544\uc694\ud55c \uae30\ub2a5\ub4e4\uc744 Microservice \ub85c \uc798 \uc124\uacc4\ud574\uc11c \uc7ac\uc0ac\uc6a9 \ud558\ub294 \uac83\uc774\ub2e4. \uc11c\ubc84\ub97c \uacc4\uc18d \uc720\uc9c0\ud560 \uc218 \uc5c6\ub294 \ud658\uacbd\uc5d0\uc11c\ub294 \uc18c\uc2a4\ucf54\ub4dc \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0\uc11c \ub2e4\uc2dc \ud574\ub2f9 \ubd80\ubd84\uc744 \ubcf5\uc0ac\ud558\uac70\ub098 \ud328\ud0a4\uc9c0\ub97c \ubd88\ub7ec\uc654\uc5b4\uc57c \ud588\uc9c0\ub9cc Serverless \uc11c\ube44\uc2a4\uc5d0 \ubc30\ud3ec\ub41c Microservice \ub97c \ud638\ucd9c\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubc14\ub00c\ub294 \uac83\uc774\ub2e4.\\n\\n[^1]: Frederick P. Brooks Jr., [No Silver Bullet - Essence and Accident in Software Engineering](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)"}]}')}}]);