(this.webpackJsonpcb_skydiving=this.webpackJsonpcb_skydiving||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),r=a.n(i),o=(a(25),a(4)),c=(a.p,a(14),a(20)),l=a(0),u=function(e){var t,a=e.numberOfImages,i=e.imageFolder,r=e.cycle,u=s.a.useState(1),d=Object(o.a)(u,2),m=d[0],p=d[1];t=m!=a?m+1:1;return Object(n.useEffect)((function(){var e=setInterval((function(){console.log(m+" sur "+a),p(m==a?1:m+1)}),r);return function(){return clearInterval(e)}}),[m]),Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)("img",{src:"images/"+i+"/"+m+".png",alt:i,className:"background-carousel__image background-carousel__image--current"}),Object(l.jsx)("img",{src:"images/"+i+"/"+t+".png",alt:i,className:"background-carousel__image background-carousel__image--next"})]},Object(c.a)())},d=a(2),m=function(e){e.title,e.catchPhrase;return Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)("a",{href:e.anchor,className:"title-card__title ",children:e.title}),Object(l.jsx)("div",{className:"title-card__catchphrase",children:e.catchPhrase})]})},p=(a(17),a(32),a.p+"static/media/logo.566db1a9.jpg"),h=(a(33),a(34),a(19)),g={language:[{value:"FR"}]};var f=Object(h.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"language/ChangeValue":return{language:[{value:t.payload}]};case"faq/ExpandMinimize":return{currentFaqElement:[{value:t.payload}]};default:return e}}));console.log("Initial state: ",f.getState());var j=f;var b=function(){var e=Object(d.b)();return Object(d.c)((function(e){return e.language})),Object(l.jsxs)("div",{className:"language-selector__icons",children:[Object(l.jsx)("img",{src:"images/FR.png",alt:"Parachutisme",className:"",onClick:function(){e({type:"language/ChangeValue",payload:"FR"}),console.log(j.getState())}}),Object(l.jsx)("img",{src:"images/EN.png",alt:"",className:"",onClick:function(){e({type:"language/ChangeValue",payload:"EN"}),console.log(j.getState())}})]})},v="fas fa-user-md",x="fas fa-tshirt",O="fas fa-weight",y="fas fa-child",_="fas fa-cocktail",N="fas fa-joint",w="fas fa-user-check",q="fas fa-phone",I="fas fa-at",k="far fa-id-card",C=[{language:"FR",title:"Wingman Skydiving",subtitle:"\xc9cole de parachutisme"},{language:"EN",title:"Wingman Skydiving",subtitle:"French Skydiving School"}],E=[{language:"FR",title:"Acheter maintenant",subtitle:"Paiement s\xe9curis\xe9 par carte bancaire"},{language:"EN",title:"Buy Now!",subtitle:"Secure Payment by Credit/Debit Card"}],S=[{language:"FR",title:"Saut d\xe9couverte en Tandem"},{language:"EN",title:"Tandem Jump"}],T=[{language:"FR",title:"Formations PAC"},{language:"EN",title:"Solo Freefall training"}],A=[{language:"FR",text1:["15 minutes d'avion, 2500 m\xe8tres de chute libre \xe0 200 Km/h et 5 minutes de vol, suspendu sous le parachute.","L\u2019exp\xe9rience est exceptionnelle par son intensit\xe9. Impossible \xe0 imaginer. ","Il faut le vivre, tout simplement. Pour comprendre ce qui pousse des milliers de parachutistes \xe0 remonter, encore et encore, l\xe0 haut. "],text2:["Le saut en tandem est le moyen le plus simple et le plus rapide de go\xfbter aux joies de la chute libre","Il est accessible au plus grand nombre, \xe0 partir de 15 ans et sans limite d'\xe2ge tant que les conditions m\xe9dicales sont respect\xe9es","Il requiert une formation minimale, et repose principalement sur la comp\xe9tence du moniteur."],text3:["Ainsi, vous pourrez, sans arri\xe8re pens\xe9es, vous concentrer sur la vue et les sensations uniques procur\xe9es par l'exp\xe9rience.","On vous promet un peu de peur, beaucoup d'excitation, et une GROSSE dose d'adr\xe9naline","Et qui sait, peut-\xeatre que vous aussi, vous attraperez le virus!"]},{language:"EN",text1:["Jumping from a plane, hey? What a STUPID idea! I mean, the damn thing's flying perfectly after all.","I cannot blame you for thinking that way. What I can do however, is change your mind about it! ","Trust me, I know what I'm talking about. You don't know it yet, but you WILL love it. Probably even ask for more!"],text2:["The plan is like this: after a rather quick briefing, we'll board a plane and start climbing to 14 000 feet.","Just enjoy the 15 minutes flight while I hook us up and check the gear.","When the door opens, we'll extract ourselves from this noisy tin can and freefall for about 50 seconds at 120mph towards our good old planet earth"],text3:["I'll open the chute around 5000 feet, so we can enjoy a 5 minutes ride under the canopy","We might do a few radical turns if you want some more action, or just enjoy a quiet ride with a stunning view","It's your jump. Your call. And it's going to be great! "]}],F=[{language:"FR",text1:["Vous avez fait un saut en tandem, vous en voulez encore, et vous souhaitez apprendre \xe0 sauter seul? ","C'est possible, et c'est m\xeame beaucoup plus rapide qu'on ne pourrait le croire!","C'est l'objectif de la PAC (Progression accompagn\xe9e en chute), m\xe9thode fran\xe7aise de formation au parachutisme sportif"],text2:["Cette m\xe9thode permet d'acqu\xe9rir en quelques jours les comp\xe9tences requises pour atteindre l'autonomie en chute et sous voile","Bas\xe9e sur un minimum de 6 sauts accompagn\xe9s par deux, puis un moniteur, elle est la premi\xe8re \xe9tape de votre longue carri\xe8re de parachutiste","Elle commence par une solide formation au sol sur l'utilisation du mat\xe9riel, la navigation sous voile, et la gestion des incidents potentiels","Au fil des sauts, vous apprendrez \xe0 chuter, g\xe9rer votre stabilit\xe9, \xe0 vous remettre face au sol en toute situation pour ouvrir le parachute"],text3:["Il n'est pas n\xe9cessaire d'\xeatre un grand sportif pour pratiquer le parachutisme, n\xe9anmoins une bonne conditions physique et mentale sont requises.","Je ne commercialise pas cette prestation directement, mais je peux vous orienter vers une structure adapt\xe9e, et, sur certaines d'entre elles, assurer personnellement votre formation et votre encadrement","N'h\xe9sitez pas \xe0 me contacter pour plus de renseignements sur la faisabilit\xe9!"]},{language:"EN",text1:["So now that you got a taste of the sky, you would like to learn how to fly on your own?","It is actually easier and quicker than you might think!","It is the purpose of the PAC, a freefall training that you can complete in just a few days!"],text2:["You'll learn all you need to be able to jump by yourself, freefall and canopy wise.","This will be the first step of you skydiving carreer","It consists in a series of at least 6 jumps with certified instructors where you'll learn, step by step, how to control your freefall and navigate under canopy","This might be one of the most intense experience of your life!"],text3:["Of course, you'll have to be in decent physical and mental condition, but you don't have to be a great athlete to learn how to skydive!","I DO NOT sell this service directly. However, I can advise you on the choice of an adequate structure, and, and some of them, train and supervise you myself.","If you're interested, give me a call so we can talk a little and see what can be done!"]}],P=[{language:"FR",items:[{icon:v,text:"Certificat M\xe9dical OBLIGATOIRE"},{icon:x,text:"Tenue de sport exig\xe9e."},{icon:O,text:"Poids maximum 90 kilos"},{icon:y,text:"Age Minimum 15 ans"},{icon:_,text:"Pas d'alcool"},{icon:N,text:"Pas de drogue"}]},{language:"EN",items:[{icon:v,text:"Medical certificate MANDATORY"},{icon:x,text:"Sports outfit required"},{icon:O,text:"Maximum weight 90KG"},{icon:y,text:"Minimum age 15 years"},{icon:_,text:"No alcohol"},{icon:N,text:"No drugs"}]}],L=[{language:"FR",title:"Saut en Tandem \xe0 4000m"},{language:"EN",title:"Tandem Jump @ 14 000 ft"}],R=[{language:"FR",title:"La video de votre saut!"},{language:"EN",title:"Video footage of your jump!"}],z=[{language:"FR",title:"Formation Pac 6 sauts + 4 sauts solo"},{language:"EN",title:"PAC freefall training 6 jumps + 4 solo jumps"}],B=[{language:"FR",title:"Saut d'initiation"},{language:"EN",title:"First Jump (Ground training + one jump with 2 instructors)"}],J=[{language:"FR",title:"Tarif des prestations"},{language:"EN",title:"Rates (no hidden fees)"}],M=[{language:"FR",title:"Sauts en Tandem",catchPhrase:"D\xe9couvrez la chute libre avec un saut \xe0 4000m!"},{language:"EN",title:"Tandem Skydives",catchPhrase:"Dive the sky paired with a certified instructor!"}],Y=[{language:"FR",title:"Formations PAC",catchPhrase:"Apprenez \xe0 sauter seul en quelques jours!"},{language:"EN",title:"Solo Freefall training",catchPhrase:"Learn to fly on your own and earn your wings"}],D=[{language:"FR",title:["A propos de moi"],texts:["Je m'appelle Cl\xe9ment Benezech.","J'ai d\xe9couvert le parachutisme \xe0 l'occasion d'un saut en Tandem il y a de cela 10 ans, et je n'ai pas cess\xe9 de sauter depuis!","Apr\xe8s quelques ann\xe9es de pratique loisir, j'ai d\xe9cid\xe9 d'op\xe9rer un virage professionnel radical!","Aujourd'hui Moniteur PAC et Tandem dipl\xf4m\xe9 d'\xe9tat, avec pr\xe8s de 3000 sauts \xe0 mon actif, je me propose de partager avec vous ma passion pour la chute libre"]},{language:"EN",title:["About me"],texts:["Hey there! My name is Cl\xe9ment Benezech, i'm a 36 years skydiving enthousiast","10 years ago, after a Tandem Jump, I became obsessed with this sport and started jumping on my own. I never stopped since then","After a few years, I decided I wanted turn my life around and become a professionnal skydiver","I'm now a certified instructor (Tandem & Solo Freefall Training) with nearly 3000 jumps, and would love to give you a taste of the sky!"]}],V=[{language:"FR",formTitle:"Une question? Ecrivez moi!",name:"Votre nom:",phone:"Num\xe9ro de t\xe9l\xe9phone",email:"Votre email",about:"Pac ou Tandem?",message:"Votre message",pacLabel:"Formation PAC",tandemLabel:"Saut en Tandem"},{language:"EN",formTitle:"Message me, i'm friendly :)",name:"Your Name",phone:"Your phone number",email:"Email Adress",about:"Tandem or Solo?",message:"Your message:",pacLabel:"Solo Freefall Training",tandemLabel:"Tandem Jump"}],W=[{language:"EN",name:"Please enter your name",email:"You must enter a valid email adress",phone:"Phone number must a least 10 digits",message:"If you don't type a message, what's the point?"},{language:"FR",name:"Entrez votre nom s'il vous plait",email:"Le format de l'email est invalide",phone:"Le num\xe9ro de t\xe9l\xe9phone doit comporter 10 chiffres",message:"Et le message alors?"}],G=[{language:"FR",questions:[{id:1,title:"Quelles sont les contre indications?",paragraphs:["Le saut en Tandem est accessible au plus grand nombre, mais certaines raisons m\xe9dicales peuvent emp\xeacher sa r\xe9alisation. Il est impossible de les lister ici de mani\xe8re exhaustive, et il vous appartient de consulter votre m\xe9decin traitant ou le sp\xe9cialiste qui vous suit en cas d'affections chroniques ou aigu\xebs particuli\xe8res. Ils vous connaissent bien et seront \xe0 m\xeame de vous donner un avis \xe9clair\xe9.","On peut citer ici par exemple: les sensibilit\xe9s au niveau ORL (Sinus/tympans fragiles), les probl\xe8mes cardiaques, les faiblesses au niveau cervical, et d'autres pathologies comme l'\xe9pilepsie par exemple, qui pourraient compromettre la s\xe9curit\xe9 du saut","Soyez honn\xeate avec votre m\xe9decin et votre moniteur, car la s\xe9curit\xe9 de tous en d\xe9pend. Il vaut mieux repousser un saut, voire l'annuler, que de prendre des risques inconsid\xe9r\xe9s."]},{id:2,title:"Mais si j'ai le vertige?",paragraphs:["Cette question revient souvent, mais il faut bien distinguer le vertige et la peur du vide!","Sans trop rentrer dans des d\xe9tails que je ne ma\xeetrise pas moi m\xeame, le vertige est li\xe9 \xe0 un dysfonctionnement de l'oreille interne, et ne se manifeste que lorsque le corps est situ\xe9 sur un point fixe, en contact avec 'la terre'. Il n'est donc absolument pas une contre indication \xe0 la pratique du parachutisme!","Quant \xe0 la peur du vide, bien entendu, \xe0 un certain degr\xe9 elle peut s'av\xe9rer invalidante. N\xe9anmoins, il est normal de resentir une certaine appr\xe9hension \xe0 se jeter d'un avion \xe0 4000m du sol. C'est aussi ce qui participe \xe0 l'intensit\xe9 de l'exp\xe9rience. A vous de voir si vous voulez laisser vos peurs vous diriger, ou si vous voulez prendre le taureau par les cornes! :)"]},{id:3,title:"Comment bien me pr\xe9parer pour mon saut?",paragraphs:["Avant, un saut, il est n\xe9cessaire de respecter quelques r\xe8gles simples: s'alimenter normalement (ne pas sauter le repas!), s'hydrater, et ne pas consommer d'alcool ou autres substances psychotropes!","Apr\xe8s une plong\xe9e sous marine, il vous sera impossible de sauter avant une p\xe9riode de 48h, compte tenu des risques d'embolie gazeuse.","Attention \xe0 prendre une tenue ad\xe9quate, en fonction de la saison, il peut \xeatre possible de sauter en short/T-shirt, mais au printemps et en automne, le pull ne sera pas de trop (comptez environ 20 degr\xe9s de moins \xe0 4000m par rapport \xe0 la temp\xe9rature au sol). Des chaussures de sport et un jogging constituent la tenue id\xe9ale. En tout \xe9tat de causes, pas de pantalon trop serr\xe9 qui limiterait vos mouvements, pr\xe9voyez large!"]},{id:4,title:"Combien de temps faut il pr\xe9voir?",paragraphs:["Il faut bloquer une demi journ\xe9e. Je r\xe9p\xe8te, il faut bloquer une demi journ\xe9e! :)","'Hey mais \xe7a fait vachement long non, pour un truc qui dure 50 secondes?' Bah oui Jamie, c'est vachement long, parce qu'il faut faire les papiers, le briefing, et que la m\xe9t\xe9o \xe9tant loin d'\xeatre une science exacte, parfois on doit attendre que les conditions soient bonnes pour ne pas se mettre en danger!","Tu vois Jamie, le parachutisme, c'est pas de la p\xe9tanque. Apr\xe8s franchement tu peux prendre ta triplette, le parking du centre constitue un terrain de boules relativement d\xe9cent."]},{id:5,title:"Hey mais... c'est super cher non?",paragraphs:["Oui bon, on ne va pas se mentir, un saut en tandem, c'est pas cadeau.","Rien de nouveau sous le soleil, dans l'a\xe9ronautique, tout est cher. L'avions dont nous allons sauter coute un million cinq cent mille euro \xe0 l'achat, les maintenances r\xe9guli\xe8res sont tr\xe8s on\xe9reuses. Les dipl\xf4mes et les formations pour obtenir les qualifications de moniteurs coutent au bas mot plusieurs milliers d'euro, et un parachute tandem, entre 12 000 et 15 000 euro. ","Donc si on ajoute \xe0 cela que le moniteur doit lui aussi manger et payer son loyer, effectivement, il faut sortir un petit billet. Mais je vous invite \xe0 comparer avec les tarifs du march\xe9 (Pour des sauts \xe0 4000, forc\xe9ment, 3000 c'est moins cher), et vous verrez que c'est tout \xe0 fait raisonnable. Extr\xeame certes, mais raisonnable :p"]}]},{language:"EN",questions:[{id:1,title:"What are the contraindications?",paragraphs:["Even if tandem jumps are accessible to most people, there are some potential medical contraindications. I could not list all of them here, so you'll need to consult a physician to get checked and make sure it is safe for you to jump. If you have any specific condition, please consult the specialist that is following you, or your family doctor.","Among other contraindications, history of cardiac problems, problems with tympans and sinuses should be discussed, along with cervical weaknesses, and other conditions like epilepsia, which could compromise the safety of the jump","Be honnest and thorough when you get your medical exam: the point is not just to get a certificate, its about garanteeing your safety... and your instructor's too!"]},{id:2,title:"What if I have vertigo?",paragraphs:["There are actually two different things we need to define here: vertigo and fear of falling down!","Vertigo, as you probably know if you have it, is a medical condition related to the inner ear, affecting equilibrium. The good news is that you have to be on a fixed point, with a direct link to the ground, to actually experience it, so for skydiving, it is not an issue at all!","As for fear of falling down, well, we're all subject to it, to some extent. So now the question is: do you want to face your fears, or let them control you?"]},{id:3,title:"How to be well prepared for my jump?",paragraphs:["Before your jump, just eat as usual, hydrate yourself, do not skip meal! Alcohol and drugs are strictly forbidden as they could compromise the safety of the jump.","If you're into that, you need to wait 48 hours after your last scuba dive, because of the gas embolism hazard.","Take adequate clothing, in the summer you could jump in shorts and T-shirts, spring and fall might require long sleaves, even a thick sweat shirt. Ideally, wear sweat pants and sneakers. Avoid skinny jeans as they could be impede your ability to perform the landing procedure."]},{id:4,title:"How much time will it require?",paragraphs:["Half a day. I repeat, half a day!","You might think it's CRAAAZYYY long for 50 seconds of freefall, but there will be papers to be made, a briefing to be had, and also weather conditions will sometimes force us to wait for a while so we can safely jump and land!","This is no ordinary experience, and your patience will be rewarded with a firework of adrenaline. Or else you could go to the movies, and the show will start at a fixed hour"]},{id:5,title:"But dude... why is that so expensive?",paragraphs:["Good point. Jumping from planes ain't cheap","When it comes down to planes and air travel matters, everything is way more expensive compared to 'ground stuff. The plane is worth about one and a half million euros, requires costly maintenance on a regular basis, kerozene ain't cheap either, getting to the level of qualification required to make you jump safely (And legally) costs several tens of thousand euros, and finally, a full tandem parachute system costs around 12 000 - 15 000 euros!","So yeah, if you add to this the fact that I am human, need some food intake and my rent paid, the cost adds up pretty fast. However, for a 14 000ft jump in France, the price is quite reasonable. Check for yourself ;)"]}]}],H=[{language:"FR",text:["Les sauts en Tandem se d\xe9roulent dans le sud du Lot, \xe0 1/4 d'heure de Cahors, et \xe0 environ une heure de Toulouse","Vous profiterez d'une vue panoramique sur la vall\xe9e du Lot et le parc naturel r\xe9gional des causses du Quercy","A couper le souffle!"]},{language:"EN",text:["Tandems Jumps take place in the Natural Regional Park of the Causses du Quercy, 1 hour drive from toulouse, and 15 minutes from Cahors.","Come and enjoy a stunning view of the 'Vall\xe9e du lot' landscapes and the city of Cahors","Breathtaking!"]}];var Q=function(){var e=Object(d.c)((function(e){return e.language})),t=C.findIndex((function(t){return t.language===e[0].value}));return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("img",{src:p,alt:"Parachutisme",className:"banner__logo"}),Object(l.jsxs)("div",{className:"banner__title__container",children:[Object(l.jsx)("h1",{className:"banner__title",children:C[t].title}),Object(l.jsx)("h2",{className:"banner__subtitle",children:C[t].subtitle})]})]})},Z=(a(15),a(35),a(36),function(e){var t=e.textContent.map((function(e){return Object(l.jsx)("p",{children:e})}));return Object(l.jsx)("div",{children:t})}),K=a(3),U=a.n(K),$=a(9),X=a.n($),ee=function(e){e.textContent.map((function(e){return Object(l.jsx)("p",{children:e})}));return console.log(e.textContent),Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)(X.a,{children:Object(l.jsx)("img",{className:"photo-card__image",src:e.src})}),Object(l.jsx)(U.a,{up:!0,children:Object(l.jsx)("div",{className:"photo-card__text",children:Object(l.jsx)(Z,{textContent:e.textContent})})})]})},te=(a(38),function(e){return Object(l.jsxs)("div",{className:"price-card",children:[Object(l.jsx)("div",{className:"price-card__icon",children:Object(l.jsx)("i",{className:e.icon})}),Object(l.jsx)("div",{className:"price-card__product-name",children:e.productName}),Object(l.jsx)("div",{className:"price-card__price",children:e.price})]})}),ae=(a(16),function(e){var t=e.elements.map((function(e){return Object(l.jsxs)("div",{className:"section-details__element",children:[Object(l.jsx)("i",{className:e.icon}),Object(l.jsx)("p",{children:e.text})]})}));return Object(l.jsx)("div",{className:"section-details",children:t})}),ne=a(12),se=a.n(ne),ie=(a(39),function(e){var t=e.elements.map((function(e){var t="faqContent"+e.id;return Object(l.jsxs)("div",{id:"test",className:"faq__element",children:[Object(l.jsxs)("div",{className:"faq__element__title-container",onClick:function(){var e;e=t,"faq__element__content--visible"==document.getElementById(e).className?document.getElementById(e).setAttribute("class","faq__element__content"):document.getElementById(e).setAttribute("class","faq__element__content--visible")},children:[Object(l.jsx)("i",{className:"fas fa-chevron-down"}),Object(l.jsx)("p",{className:"faq__element__title",children:e.title})]}),Object(l.jsx)(U.a,{left:!0,children:Object(l.jsx)("div",{id:t,className:"faq__element__content",children:Object(l.jsx)(Z,{textContent:e.paragraphs})})})]})}));return Object(l.jsx)("div",{className:"faq",children:t})});a(40);var re=function(){var e=Object(d.c)((function(e){return e.language})),t=E.findIndex((function(t){return t.language===e[0].value}));return Object(l.jsxs)("div",{className:"buy-now",children:[Object(l.jsxs)("div",{className:"buy-now__button-container",children:[Object(l.jsx)("h2",{className:"buy-now__secure",children:E[t].subtitle}),Object(l.jsxs)("a",{href:"https://buy.stripe.com/fZe8x6cRKfGj5OMbII",children:[Object(l.jsx)("div",{className:"buy-now__buy",children:E[t].title}),Object(l.jsx)("img",{src:"/images/visa.png"}),Object(l.jsx)("img",{src:"/images/mastercard.png"})]})]}),Object(l.jsx)("i",{class:"fas fa-lock"})]})},oe=function(){var e=Object(d.c)((function(e){return e.language})),t=S.findIndex((function(t){return t.language===e[0].value})),a=A.findIndex((function(t){return t.language===e[0].value})),n=P.findIndex((function(t){return t.language===e[0].value})),s=L.findIndex((function(t){return t.language===e[0].value})),i=R.findIndex((function(t){return t.language===e[0].value})),r=J.findIndex((function(t){return t.language===e[0].value})),o=G.findIndex((function(t){return t.language===e[0].value}));return Object(l.jsxs)("div",{id:"tandemContent",className:"generic-main-content",children:[Object(l.jsx)("div",{className:"generic-main-content__title",children:S[t].title}),Object(l.jsx)(ee,{className:"photo-card",src:"images/tandem/9.png",textContent:A[a].text1,direction:"left"}),Object(l.jsx)(ee,{className:"photo-card",src:"images/tandem/4.png",textContent:A[a].text2,direction:"left"}),Object(l.jsx)(ee,{className:"photo-card",src:"images/tandem/5.png",textContent:A[a].text3,direction:"left"}),Object(l.jsx)(ae,{elements:P[n].items}),Object(l.jsx)(se.a,{children:Object(l.jsx)("div",{className:"generic-main-content__title generic-main-content__title--pricing",children:J[r].title})}),Object(l.jsx)(te,{icon:"fas fa-parachute-box",productName:L[s].title,price:245}),Object(l.jsx)(te,{icon:"fas fa-video",productName:R[i].title,price:80}),Object(l.jsx)(re,{}),Object(l.jsx)("div",{className:"generic-main-content__title",children:"F.A.Q"}),Object(l.jsx)(ie,{elements:G[o].questions})]})},ce=function(){var e=Object(d.c)((function(e){return e.language})),t=T.findIndex((function(t){return t.language===e[0].value})),a=F.findIndex((function(t){return t.language===e[0].value}));z.findIndex((function(t){return t.language===e[0].value})),B.findIndex((function(t){return t.language===e[0].value})),J.findIndex((function(t){return t.language===e[0].value}));return Object(l.jsxs)("div",{id:"pacContent",className:"generic-main-content",children:[Object(l.jsx)("div",{className:"generic-main-content__title",children:T[t].title}),Object(l.jsx)(ee,{className:"photo-card",src:"images/pac/6.png",textContent:F[a].text1}),Object(l.jsx)(ee,{className:"photo-card",src:"images/pac/7.png",textContent:F[a].text2}),Object(l.jsx)(ee,{className:"photo-card",src:"images/pac/9.png",textContent:F[a].text3})]})},le=(a(41),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__informations-container",children:[Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:I}),Object(l.jsx)("p",{children:"wingman.parachutisme@gmail.com"})]}),Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:q}),Object(l.jsx)("p",{children:"+33 (0) 6 37 86 41 06"})]}),Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:"fab fa-facebook"}),Object(l.jsx)("a",{href:"https://www.facebook.com/WingmanSkydiving",children:"Wingman Skydiving"})]})]}),Object(l.jsxs)("div",{className:"footer__informations-container",children:[Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:w}),Object(l.jsx)("p",{children:"SIRET: 81511335200034"})]}),Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:k}),Object(l.jsx)("p",{children:"BPJEPS TANDEM BP013171005"})]}),Object(l.jsxs)("div",{className:"footer__information-container",children:[Object(l.jsx)("i",{className:k}),Object(l.jsx)("p",{children:"BPJEPS PAC    BP40132110301"})]})]}),Object(l.jsxs)("div",{className:"footer__informations-container",children:[Object(l.jsx)("img",{src:"images/ffp.png"}),Object(l.jsx)("a",{href:"https://www.ffp.asso.fr/",children:"Federation Fran\xe7aise de parachutisme"})]}),Object(l.jsxs)("div",{className:"footer__information-container footer__information-container--full-width",children:[Object(l.jsx)("p",{children:"Made with ReactJS using Redux"}),Object(l.jsx)("img",{src:"images/react.png"}),Object(l.jsx)("img",{src:"images/redux.png"}),Object(l.jsx)("p",{children:"Design and code by Clement Benezech - Copyright 2021"})]})]})}),ue=(a(42),function(e){e.textContent.map((function(e){return Object(l.jsx)("p",{children:e})}));return console.log(e.textContent),Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)("div",{className:"who-we-are__title",children:e.title}),Object(l.jsxs)("div",{className:"who-we-are__images-container",children:[Object(l.jsx)(U.a,{left:!0,children:Object(l.jsx)("img",{className:"who-we-are__image",src:e.src[0]})}),Object(l.jsx)(U.a,{left:!0,children:Object(l.jsx)("img",{className:"who-we-are__image",src:e.src[1]})}),Object(l.jsx)(U.a,{left:!0,children:Object(l.jsx)("img",{className:"who-we-are__image",src:e.src[2]})})]}),Object(l.jsx)(U.a,{right:!0,children:Object(l.jsx)("div",{className:"who-we-are__text",children:Object(l.jsx)(Z,{textContent:e.textContent})})})]})}),de=(a(43),a(44),a(45),a(18)),me=function(e){var t=s.a.useState(""),a=Object(o.a)(t,2),n=a[0],i=a[1],r=s.a.useState(""),c=Object(o.a)(r,2),u=c[0],d=c[1],m=s.a.useState(""),p=Object(o.a)(m,2),h=p[0],g=p[1],f=s.a.useState(""),j=Object(o.a)(f,2),b=(j[0],j[1],s.a.useState("")),v=Object(o.a)(b,2),x=v[0],O=v[1],y=s.a.useState(!1),_=Object(o.a)(y,2),N=_[0],k=_[1],C=s.a.useState(!1),E=Object(o.a)(C,2),S=E[0],T=E[1],A=s.a.useState(!1),F=Object(o.a)(A,2),P=F[0],L=F[1],R=s.a.useState(!1),z=Object(o.a)(R,2),B=z[0],J=z[1],M=function(e){return!!e.target.value},Y=function(e){return!!e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")},D=function(e){return!(!e.target.value.match("[0-9]")||e.target.value.length<10)},V=function(e){var t=e+"__error";document.getElementById(t).setAttribute("class","contact-form__error")},W=function(e){var t=e+"__error";document.getElementById(t).setAttribute("class","contact-form__error--hidden")};return Object(l.jsxs)("div",{className:"contact-form",children:[Object(l.jsxs)("form",{id:"contact-form",className:"contact-form__form",onSubmit:function(e){if(e.preventDefault(),S||V("fullName"),B||V("phone"),P||V("email"),N||V("message"),N&&S&&B&&P){var t={from_name:n,phone:u,email:h,message:x};Object(de.a)("service_bmejdlf","template_wingman",t,"user_2PG1FSb9G7YhLAcqKf0zL"),document.getElementById("contact-form").className="contact-form__form--hidden",document.getElementById("sent-message").className="contact-form__sent-message--visible"}},children:[Object(l.jsx)("div",{className:"contact-form__title",children:e.formTitle}),Object(l.jsxs)("div",{className:"contact-form__field-container",children:[Object(l.jsx)("i",{className:w}),Object(l.jsx)("div",{children:e.nameLabel}),Object(l.jsx)("input",{name:"fullName",type:"text",value:n,onChange:function(e){i(e.target.value),T(M(e)),1==M(e)?W(e.target.name):V(e.target.name)}}),Object(l.jsx)("div",{id:"fullName__error",className:"contact-form__error--hidden",children:e.nameError})]}),Object(l.jsxs)("div",{className:"contact-form__field-container",children:[Object(l.jsx)("i",{className:q}),Object(l.jsx)("div",{children:e.phoneLabel}),Object(l.jsx)("input",{name:"phone",type:"text",value:u,onChange:function(e){d(e.target.value),J(D(e)),1==D(e)?W(e.target.name):V(e.target.name)}}),Object(l.jsx)("div",{id:"phone__error",className:"contact-form__error--hidden",children:e.phoneError})]}),Object(l.jsxs)("div",{className:"contact-form__field-container",children:[Object(l.jsx)("i",{className:I}),Object(l.jsx)("div",{children:e.emailLabel}),Object(l.jsx)("input",{name:"email",type:"text",value:h,onChange:function(e){g(e.target.value),L(Y(e)),1==Y(e)?W(e.target.name):V(e.target.name)}}),Object(l.jsx)("div",{id:"email__error",className:"contact-form__error--hidden",children:e.emailError})]}),Object(l.jsxs)("div",{className:"contact-form__field-container",children:[Object(l.jsx)("i",{className:"far fa-question-circle"}),Object(l.jsx)("div",{children:e.productLabel}),Object(l.jsxs)("div",{className:"contact-form__radio-container",children:[Object(l.jsx)("input",{id:"radioTandem",type:"radio",name:"contact",value:"tandem"}),Object(l.jsx)("label",{htmlFor:"radioTandem",children:e.tandemLabel}),Object(l.jsx)("input",{id:"radioPac",type:"radio",name:"contact",value:"pac"}),Object(l.jsx)("label",{htmlFor:"radioPac",children:e.pacLabel})]})]}),Object(l.jsxs)("div",{className:"contact-form__field-container",children:[Object(l.jsx)("i",{className:"fas fa-envelope-open-text"}),Object(l.jsx)("div",{children:e.messageLabel}),Object(l.jsx)("textarea",{name:"message",rows:"5",value:x,onChange:function(e){O(e.target.value),k(M(e)),1==M(e)?W(e.target.name):V(e.target.name)}}),Object(l.jsx)("div",{id:"message__error",className:"contact-form__error--hidden",children:e.messageError})]}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("i",{className:"fas fa-paper-plane"})})]}),Object(l.jsx)(U.a,{children:Object(l.jsxs)("div",{id:"sent-message",className:"contact-form__sent-message",children:[Object(l.jsx)("i",{class:"far fa-check-circle"}),Object(l.jsx)("p",{children:"Votre message a bien \xe9t\xe9 envoy\xe9 :)"})]})})]})},pe=(a(46),function(e){e.textContent.map((function(e){return Object(l.jsx)("p",{children:e})}));return console.log(e.textContent),Object(l.jsxs)("div",{className:e.className,children:[Object(l.jsx)("i",{className:"fas fa-map-marked-alt"}),Object(l.jsx)(X.a,{children:Object(l.jsx)("img",{className:"location_image",src:e.src})}),Object(l.jsx)(U.a,{up:!0,children:Object(l.jsx)("div",{className:"location__text",children:Object(l.jsx)(Z,{textContent:e.textContent})})})]})}),he=(a(47),function(){return Object(l.jsx)("div",{className:"fluent",children:"Fluent English spoken :)"})});var ge=function(){var e=Object(d.c)((function(e){return e.language})),t=D.findIndex((function(t){return t.language===e[0].value})),a=M.findIndex((function(t){return t.language===e[0].value})),n=Y.findIndex((function(t){return t.language===e[0].value})),s=V.findIndex((function(t){return t.language===e[0].value})),i=W.findIndex((function(t){return t.language===e[0].value})),r=H.findIndex((function(t){return t.language===e[0].value}));return Object(l.jsxs)("fragment",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(Q,{}),Object(l.jsx)("div",{className:"carousel",children:Object(l.jsx)(u,{numberOfImages:"9",imageFolder:"home",cycle:"5000",className:"background-carousel background-carousel--full-width"})}),Object(l.jsx)(he,{}),Object(l.jsx)("div",{children:Object(l.jsx)(m,{anchor:"#tandemContent",title:M[a].title,catchPhrase:M[a].catchPhrase,className:"title-card title-card--enter-left"})}),Object(l.jsx)("div",{children:Object(l.jsx)(m,{anchor:"#pacContent",title:Y[n].title,catchPhrase:Y[n].catchPhrase,className:"title-card title-card--enter-right"})}),Object(l.jsx)(oe,{}),Object(l.jsx)(pe,{src:"images/location.png",className:"location",textContent:H[r].text,direction:"left"}),Object(l.jsx)(ce,{}),Object(l.jsx)("div",{children:Object(l.jsx)(ue,{className:"who-we-are",src:["images/me2.jpg","images/me.jpg","images/me3.jpg"],title:D[t].title,textContent:D[t].texts,direction:"left"})}),Object(l.jsx)(me,{formTitle:V[s].formTitle,nameLabel:V[s].name,phoneLabel:V[s].phone,emailLabel:V[s].email,productLabel:V[s].about,messageLabel:V[s].message,pacLabel:V[s].pacLabel,tandemLabel:V[s].tandemLabel,nameError:W[i].name,emailError:W[i].email,phoneError:W[i].phone,messageError:W[i].message}),Object(l.jsx)(le,{})]})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d.a,{store:j,children:Object(l.jsx)(ge,{})})}),document.getElementById("root")),fe()}],[[48,1,2]]]);
//# sourceMappingURL=main.0c633f8b.chunk.js.map