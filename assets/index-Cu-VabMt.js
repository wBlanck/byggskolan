const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./byggritningvy-CR86jMS5.js","./mobelvy-CNN0cMm8.js","./mobelvy-XokutZt9.css","./vy-D47s3Omy.js","./vy-BJFX4rgN.css","./byggritning-BVLMkHQu.css","./byggval-Bw1tOnrL.js","./main--vxiGOK0.js","./main-B-06BU6z.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`BYGGSKOLAN-FACIT
id: tak72-takstolar-1
---FRÅGOR---
1. Vindsuget lyfter pannor och läkt, via råspont till takstolen, genom förankringen till hammarband och vägg. Saknas förankringen lyfter hela taket eller stolarna glider från hammarbandet.
2. Vinkelbeslag 90x90x65 med 6 Ankarspik 4,0x40, ett på hammarbandets ovansida mot stolens sida (övningsvärde). Det tar lyft från vindsuget och skjuvning i sidled. Antal och typ styrs av konstruktören.
3. 2 Trådspik 3,1x90 i varje korsning (övningsvärde). Längsstaget håller stolarnas avstånd, men en rektangel kan ändå tryckas snett. Diagonalen låser den till trianglar och för vindlasten till stödet.
4. Efter råsponten går de inte att rätta utan att riva, och felet syns i pannorna. Stag och förankring bestäms av konstruktören och takstolsleverantören. Står det på ritningen gäller det, inte praxis.
5. Takets lutning och takstolarnas dimension, snölast, tillåten egenlast för den nya pannan, stagningsritning och förankring. För en ny panna också vikten per m². En tyngre panna kan kräva förstärkning.
6. Bonus: √(4800² + 3400²) ≈ 5882 mm.
---LÖSNING---
Stol 3 flyttas 100 åt vänster till c/c 1200, stol 4 sänks 20 så att den ligger i linje med snöret. Längsstaget håller avståndet och diagonalen stabiliserar. Beslaget tar lyft och skjuvning. c/c, stag och antal spik är övningsvärden. Ritad utvikt.
---MODELL---
del ft3 | Takstol 45x170 | box 2400..2445, 0..4000, 0..170
del ft4 | Takstol 45x170 | box 3600..3645, 0..4000, 0..170
del fl1 | Regel 45x70 | box 0..4845, 2000..2070, -45..0
del fd1 | Regel 45x70 | från 22.5,300,170 till 4822.5,3700,170 | flatt
del fv1 | Vinkelbeslag 90x90x65 | vid 1245,340,0 | x +x | z +z | y +y
`,t=`BYGGSKOLAN-ÖVNING
id: tak72-takstolar-1
titel: Tak 7.2 N2 – nakna takstolar: kontroll, stag, förankring
typ: bygg
område: Tak
källa: Träguiden, AMA Hus och takstolsleverantörens anvisning. Konstruktörens ritning gäller före allt annat. c/c, stag och antal spik här är övningsvärden.
origo: Vänstra takstolens vänstra sida, takfoten (x 0, y 0, z 0)
---UPPGIFT---
Takstolarna står uppe och ingen läkt eller råspont är på. Nu är det din sista chans att rätta dem. Takfallet är utvikt: röd längs [hammarbandet](h1), grön uppför fallet längs [överramarna](t1,t2,t3,t4,t5).

**Kontroll:** c/c styr allt som kommer sedan, och överramarna måste ligga i rät linje, annars syns det i plåten eller pannorna. **Stagning:** en enskild takstol kan välta som en dominobricka. Längsstag håller dem på plats, och diagonalstag gör taket stabilt. **Förankring:** vindsug försöker lyfta taket, så takstolen ska sitta fast i hammarbandet.

**Ritningens värden (övningsvärden):**
- c/c 1200
- Längsstag: Regel 45x70 flatt under överramarna, 2000 upp från takfoten
- Diagonalstag: Regel 45x70 flatt ovanpå överramarna, från 300 upp vid vänstra stolen till 3700 upp vid högra stolen
- Förankring: Vinkelbeslag 90x90x65 med 6 Ankarspik 4,0x40
---STEG---
1. Mät c/c 1200 längs hammarbandet från [vänstra takstolen](t1). En stol står fel. Flytta den till rätt c/c.
   koll t3 | Takstol 45x170 | box 2400..2445, 0..4000, 0..170 | fel Mät c/c från vänstra takstolen
2. Sträck ett snöre över överramarna på [de två yttre stolarna](t1,t5). En stol sticker upp över snöret. Sänk den så att överramen ligger mot snöret.
   koll t4 | Takstol 45x170 | box 3600..3645, 0..4000, 0..170 | fel Överramen ska ligga i linje med de andra
3. Sätt längsstaget, Regel 45x70 flatt, under överramarna från [vänstra stolen](t1) till [högra stolen](t5), med nedre kanten 2000 upp från takfoten.
   koll l1 | Regel 45x70 | box 0..4845, 2000..2070, -45..0 | fel Mät 2000 upp från takfoten till stagets nedre kant
4. Sätt diagonalstaget, Regel 45x70 flatt, ovanpå överramarna från 300 upp vid vänstra stolen till 3700 upp vid högra stolen. Markera två Trådspik 3,1x90 där det korsar [mittenstolen](scen Fog B – stag).
   koll d1 | Regel 45x70 | från 22.5,300,170 till 4822.5,3700,170 | flatt
   koll fästdon | Trådspik 3,1x90 | 2 st | box 2400..2445, 1950..2050, 205..225
   fog: B
5. Sätt vinkelbeslaget (90x90x65) i [fog A](scen Fog A – förankring), på hammarbandets ovansida mot [andra stolens](t2) högra sida, 40 från hammarbandets nedre kant. Markera de sex Ankarspik 4,0x40.
   koll v1 | Vinkelbeslag 90x90x65 | vid 1245,340,0 | x +x | z +z | y +y
   koll fästdon | Ankarspik 4,0x40 | 6 st | box 1245..1335, 340..405, 0..90
   fog: A
---FRÅGOR---
1. Hur går vindsuget från pannorna ner till väggen? Vad händer om förankringen saknas?
2. [Fog A](scen Fog A – förankring): Fästdon → Antal/placering → Varför (lyft eller skjuvning?)
3. [Fog B](scen Fog B – stag): Fästdon → Antal/placering → Varför (vad gör diagonalstaget som längsstaget inte gör?)
4. Varför rättar du c/c och rätlinje innan råsponten kommer på, och vem bestämmer stagning och förankring?
5. Du ska byta papp och pannor på ett hus med äldre takstolar och lägga en tyngre eller lättare ny panna. Vilka värden letar du upp i anvisningen och på ritningen innan du börjar?
6. *(bonus)* Hur långt är diagonalstaget? Räkna i Bygget → Geometri.
---LEDTRÅDAR---
1. Fog A | Knuff: vilken kraft kommer uppifrån vid storm, trots att taket väger så mycket?
2. Fog A | Mer: beslaget håller samman två riktningar, takstolen och hammarbandet.
3. Fog B | Knuff: vad händer med en rektangel av stolar om du trycker på gaveln?
4. Fog B | Mer: en diagonal gör om rektangeln till trianglar.
5. Rätlinje | Knuff: vad gör snöret synligt som ögat missar?
---PEKARE---
hammarbandets ovansida | linje 0,300,0 till 4845,300,0
---FOGAR---
fog A | Takstol mot hammarband | scen Fog A – förankring
pil A | från 1222,-300,250 till 1222,-300,750 | lyft | Vindsug lyfter takstolen
pil A | från 700,-300,250 till 1100,-300,250 | skjuv | Vinden trycker takstolen i sidled
utan A | delar t2 | flytta 0,0,300 | Utan förankring lyfter vindsuget takstolen från hammarbandet.
fog B | Stag mot takstol | scen Fog B – stag
pil B | från -600,2000,250 till -100,2000,250 | skjuv | Vind mot gaveln
utan B | delar t1,t2,t3,t4,t5 | flytta 400,0,0 | Utan stag faller takstolarna som dominobrickor när vinden tar i gaveln.
---MODELL---
del h1 | Regel 45x145 | box 0..4845, 300..445, -45..0
del t1 | Takstol 45x170 | box 0..45, 0..4000, 0..170
del t2 | Takstol 45x170 | box 1200..1245, 0..4000, 0..170
del t3 | Takstol 45x170 | box 2500..2545, 0..4000, 0..170
del t4 | Takstol 45x170 | box 3600..3645, 0..4000, 20..190
del t5 | Takstol 45x170 | box 4800..4845, 0..4000, 0..170
---SCENER---
scen Översikt | öga 2400,-3500,4500 | mål 2400,2000,0
scen Fog A – förankring | öga 1900,-600,700 | mål 1290,370,40
scen Fog B – stag | öga 2800,1200,1200 | mål 2422,2000,190
---SLUT---
`,n=`BYGGSKOLAN-FACIT
id: tak74-raspont-1
---FRÅGOR---
1. En fri skarv saknar upplag, så den sviktar under last. Pappen kan spricka och läkten får ojämnt stöd, vilket syns i taket.
2. 1 Trådspik 2,8x75 per bräda och takstol, alltså 6 per lucka och stol (tillverkarens anvisning, 6 brädor är övningsvärde). Spiken tar lyft från vindsug och skjuvning längs takfallet, och varje bräda i luckan hålls fast för sig.
3. 2 Trådspik 2,8x75 per bräda i varje luckände, alltså 12 per lucka i skarven (tillverkarens anvisning). Stolen är 45 bred, så 22,5 räcker till båda luckorna. Nära änden kan brädan spricka, så spika med avstånd till ändträt eller förborra.
4. Förskjutna skarvar sprider svagheten så att taket blir styvt. Fjädern uppåt gör att noten täcker fogen så att vatten inte samlas i den.
5. Råspontens eller luckans dimension och takstolsavstånd (luckan klarar högst c/c 1200), utsprång, panntyp och vikt, och om anvisningen kräver visst underlag eller läktavstånd för en ny panna. Tillverkarens anvisning gäller före allmänna råd.
6. Bonus: 4000 / 540 ≈ 7,4, alltså 8 rader där den översta kapas på längden. 8 × 2 = 16 luckor, plus spill.
---LÖSNING---
Rad 1 skarvar på mittenstolen, rad 2 på andra och fjärde stolen, så skarvarna är förskjutna. Rad 2:s två ytterbitar, 1522,5 vardera, kan kapas ur samma lucka. Båda raderna sticker ut 300 på varje sida, och skarvarna ligger mitt på stolen. Utsprång och antal brädor i luckan är övningsvärden.
---MODELL---
del fb1 | Råspontlucka 23x540 | box -300..2422.5, 0..540, 0..23
del fb2 | Råspontlucka 23x540 | box 2422.5..5145, 0..540, 0..23
del fb3 | Råspontlucka 23x540 | box -300..1222.5, 540..1080, 0..23
del fb4 | Råspontlucka 23x540 | box 1222.5..3622.5, 540..1080, 0..23
del fb5 | Råspontlucka 23x540 | box 3622.5..5145, 540..1080, 0..23
`,r=`BYGGSKOLAN-ÖVNING
id: tak74-raspont-1
titel: Tak 7.4 N2 – råspontluckor: läggning, skarv, utsprång
typ: bygg
område: Tak
källa: AMA Hus, Träguiden och tillverkarens anvisning för råspontluckor (Vida, SCA). Utsprång och antal brädor i luckan är övningsvärden. Konstruktörens ritning gäller före allt annat.
origo: Vänstra takstolens vänstra sida vid takfoten, takstolens överkant (x 0, y 0, z 0)
---UPPGIFT---
Takstolarna är kontrollerade och nu ska råsponten på, som färdiga luckor. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet längs [takstolarna](t1,t2,t3,t4,t5).

**Principen:** råsponten bär pappen och ger taket styvhet. Varje lucka ska bära på minst två takstolar, och en skarv hänger aldrig fritt, utan görs mitt på en takstol. Skarvarna i två rader bredvid varandra får inte ligga på samma stol, annars blir det en svag linje i taket.

**Mått:**
- Råspontlucka 23x540, 3600 lång. Luckan är 6 brädor (övningsvärde).
- Takstolar c/c 1200, högst 1200 för luckan (tillverkarens anvisning)
- Gavelutsprång: 300 förbi de yttre takstolarna (övningsvärde)
- Skarv mitt på takstolen, så att luckan får 22,5 mm upplag
- Spik: 1 Trådspik 2,8x75 per bräda och takstol, 2 per bräda vid skarv (tillverkarens anvisning)

Börja vid takfoten. Kapa med **Kapa** och mät in med **Mät ut**.
---STEG---
1. Lägg första råspontluckan (23x540) längs [takfoten](takfot), från 300 utanför [vänstra stolen](t1) till mitten på [mittenstolen](t3).
   koll b1 | Råspontlucka 23x540 | box -300..2422.5, 0..540, 0..23 | fel Kolla utsprånget och att änden slutar mitt på stolen
2. Lägg andra luckan i samma rad, från skarven till 300 utanför [högra stolen](t5).
   koll b2 | Råspontlucka 23x540 | box 2422.5..5145, 0..540, 0..23
3. Lägg rad 2 tätt ovanför, i tre luckor från 300 utanför vänstra stolen till 300 utanför högra. Skarvarna ska ligga mitt på [andra stolen](t2) och [fjärde stolen](t4), inte på samma stol som i rad 1.
   koll b3 | Råspontlucka 23x540 | box -300..1222.5, 540..1080, 0..23 | fel Skarven ska ligga mitt på andra stolen
   koll b4 | Råspontlucka 23x540 | box 1222.5..3622.5, 540..1080, 0..23
   koll b5 | Råspontlucka 23x540 | box 3622.5..5145, 540..1080, 0..23
4. Markera sex Trådspik 2,8x75 i [fog A](scen Fog A – lucka mot takstol), en per bräda där första luckan korsar [andra stolen](t2).
   koll fästdon | Trådspik 2,8x75 | 6 st | box 1200..1245, 0..540, 13..33
   fog: A
5. Markera tolv Trådspik 2,8x75 i första luckans ände i skarven i rad 1, två per bräda, [fog B](scen Fog B – skarv).
   koll fästdon | Trådspik 2,8x75 | 12 st | box 2400..2422.5, 0..540, 13..33
   fog: B
---FRÅGOR---
1. Varför får skarven inte hänga fritt mellan två takstolar? Vad händer med pappen och läkten där?
2. [Fog A](scen Fog A – lucka mot takstol): Fästdon → Antal/placering → Varför (vilka krafter tar spiken?)
3. [Fog B](scen Fog B – skarv): Fästdon → Antal/placering → Varför (varför just 22,5 mm upplag, och vad är risken när brädan spikas nära änden?)
4. Varför förskjuts skarvarna mellan raderna? Och varför läggs råsponten med fjädern uppåt?
5. Du ska lägga ett nytt tak med en ny panna. Vilka värden letar du upp i anvisningen och på ritningen innan råsponten beställs?
6. *(bonus)* Takfallet är 4000 långt och varje rad tar två luckor. Hur många rader blir det, och hur många luckor går åt? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: vilka laster kommer på luckan, nedåt och uppåt?
2. Fog A | Mer: varje bräda i luckan kan röra sig för sig. Vad gör en spik per bräda?
3. Fog B | Knuff: hur brett är takstolens överkant, och hur mycket ska delas på två luckor?
4. Fog B | Mer: spika snett eller förborra om änden spricker.
5. Spont | Knuff: åt vilket håll rinner vatten som kommit igenom?
6. Rad 2 | Knuff: rad 2 behöver tre bitar. Kan två av dem kapas ur samma lucka?
---PEKARE---
takfot | linje 0,0,-85 till 4845,0,-85
---FOGAR---
fog A | Lucka mot takstol | scen Fog A – lucka mot takstol
utan A | delar e1 | flytta 0,0,250 | Utan spik lyfter vindsuget luckan från takstolen.
fog B | Skarv | scen Fog B – skarv
utan B | delar e1 | flytta 0,-150,-200 | En skarv utan upplag sviktar under lasten, och pappen och läkten följer med.
---MODELL---
del t1 | Takstol 45x170 | box 0..45, 0..4000, -170..0
del t2 | Takstol 45x170 | box 1200..1245, 0..4000, -170..0
del t3 | Takstol 45x170 | box 2400..2445, 0..4000, -170..0
del t4 | Takstol 45x170 | box 3600..3645, 0..4000, -170..0
del t5 | Takstol 45x170 | box 4800..4845, 0..4000, -170..0
del e1 | Råspontlucka 23x540 | box 6300..7500, 0..540, 0..23 | exempel
del e2 | Takstol 45x170 | box 6600..6645, -200..800, -170..0 | exempel
---SCENER---
scen Översikt | öga 2400,-3000,5000 | mål 2400,2000,0
scen Fog A – lucka mot takstol | öga 1700,-700,700 | mål 1222,270,23
scen Fog B – skarv | öga 2900,-700,800 | mål 2422,270,23
---SLUT---
`,i=`BYGGSKOLAN-FACIT
id: tak76-vindskivor-1
---FRÅGOR---
1. Vinden ska inte kunna blåsa in under pannorna vid gaveln. Skivan måste täcka hela pannans profil, med 10 till godo.
2. Trallskruv 4,2x55 c/c 500, från ovansidan genom råsponten i regeln. Den tar drag från vindskivans tyngd och vindsug, och håller råspontens kant styv.
3. Trådspik 3,1x90 c/c 500 in i regeln (övningsvärde för fästdonet). Vinden trycker och suger, så infästningen tar drag och skjuvning. Fästs den svagt kan den släppa och vinden kommer in.
4. Förskjutna skarvar gör att ingen genomgående svag linje uppstår och att vatten inte går rakt igenom. Fogen görs med akrylfog och bättring. Vid lasyr eller slam spikas skarven i stället, utan fog.
5. Pannans höjd över takytan, och därmed vindskivans höjd, hur pannan ska sluta vid gaveln, och om tillverkaren kräver gavelbeslag eller gavelpanna för en ny panna.
6. Bonus: 4 fall × 5,4 m × 2 lager = 43,2 m, plus spill.
---LÖSNING---
Regeln sitter under råsponten. Undre skivan är skarvad vid 4190 och den övre vid 3590, alltså 600 förskjutet. Överkant blir 130 + 10 över takytan. Pannhöjden är ett övningsvärde.
---MODELL---
del fa1 | Regel 45x45 | box 0..45, 0..5400, -45..0
del fa2 | Trekantslist | box 50..95, 0..2400, 21..51
del fu1 | Vindskiva 22x145 | box -22..0, -10..4190, -45..100
del fu2 | Vindskiva 22x145 | box -22..0, 4190..5400, -45..100
del fo1 | Vindskiva 22x145 | box -44..-22, -10..3590, 16..161
del fo2 | Vindskiva 22x145 | box -44..-22, 3590..5400, 16..161
`,a=`BYGGSKOLAN-ÖVNING
id: tak76-vindskivor-1
titel: Tak 7.6 N2 – vindskivor: regel, trekantslist, undre och övre
typ: bygg
område: Tak
källa: DM Tak (vindskivor), Träguiden och AMA Hus. Pannhöjden 130 är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Gavelkanten vid takfoten, råspontens underkant (x 0, y 0, z 0)
---UPPGIFT---
Gavelns kant är klar för vindskivor. Takfallet är utvikt: grön längs [gavelkanten](gavelkant) från [takfoten](takfot) till [nocken](nock), och blå upp från råsponten. Skivorna ritas lodrätt utanför kanten. [Råsponten](r1) och [pappen](p1) ligger klara.

**Regel:** håller råspontens kant styv och ger vindskivan något att sitta i. **Trekantslist:** pappen viks upp över listen, så att vatten vid gaveln leds bort från kanten. **Undre vindskiva:** täcker regel och råspont. **Övre vindskiva:** ska gå över pannans högsta punkt, så att vinden inte kommer in under pannorna.

**Mått (DM Tak, pannhöjden är övningsvärde):**
- Regel 45x45 under råsponten, kant i kant med gaveln
- Trekantslist 50 in från gavelkanten
- Undre vindskiva: nederkant 45 under råsponten, minst 10 förbi takfoten, skarvbit minst 1 m
- Övre vindskiva: pannans högsta punkt +10. Övningspannan går 130 över takytan. Skarven minst 500 från den undre skarven.
- Trallskruv 4,2x55 c/c 500 i regeln, Trådspik 3,1x90 c/c 500 i vindskivan

Tillverkarens pannmått gäller före videon.
---STEG---
1. Skruva en Regel 45x45 under [råsponten](r1) längs [gavelkanten](gavelkant), kant i kant med gaveln, från takfoten till nocken. Markera tre Trallskruv 4,2x55 från råspontens ovansida, c/c 500 med första skruven 250 från takfoten.
   koll a1 | Regel 45x45 | box 0..45, 0..5400, -45..0
   koll fästdon | Trallskruv 4,2x55 | 3 st | box 0..45, 200..1300, 10..30
   fog: A
2. Lägg en trekantslist, 2400 lång, på pappen från [takfoten](takfot) och uppåt, 50 in från gavelkanten.
   koll a2 | Trekantslist | box 50..95, 0..2400, 21..51 | fel Mät 50 in från gavelkanten
3. Sätt den undre vindskivan (22x145) utanpå regeln, med nederkanten 45 under råsponten och 10 förbi takfoten. Första biten är 4200, sedan en skarvbit upp till [nocken](nock).
   koll u1 | Vindskiva 22x145 | box -22..0, -10..4190, -45..100 | fel Kolla 10 förbi takfoten
   koll u2 | Vindskiva 22x145 | box -22..0, 4190..5400, -45..100
4. Sätt den övre vindskivan (22x145) utanpå den undre, med samma start 10 förbi takfoten och överkanten 10 över pannans högsta punkt. Första biten är 3600, sedan en skarvbit upp till [nocken](nock). Markera tre Trådspik 3,1x90 i den undre vindskivan, mitt på regeln, c/c 500 med första spiken 250 från takfoten.
   koll o1 | Vindskiva 22x145 | box -44..-22, -10..3590, 16..161 | fel Överkanten ska gå 10 över pannans högsta punkt
   koll o2 | Vindskiva 22x145 | box -44..-22, 3590..5400, 16..161
   koll fästdon | Trådspik 3,1x90 | 3 st | box -32..-12, 200..1300, -45..-15
   fog: B
---FRÅGOR---
1. Varför ska den övre vindskivan gå över pannans högsta punkt, och inte bara upp till pannans undersida?
2. [Fog A](scen Fog A – regel): Fästdon → Antal/placering → Varför (vilken kraft tar skruven?)
3. [Fog B](scen Fog B – vindskiva): Fästdon → Antal/placering → Varför (vad vill vinden göra med en lös vindskiva?)
4. Varför ligger skarvarna i undre och övre vindskivan förskjutna? Och vad gör du med vindskivans ändar vid fog och bättring?
5. Du ska lägga en ny panna med annan höjd. Vilka värden letar du upp i anvisningen innan du kapar vindskivorna?
6. *(bonus)* Takfallet är 5400 långt och taket har två gavlar med två fall var. Hur många meter vindskiva går åt med båda lagren? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: vad hänger på regeln när vindskivan sitter där?
2. Fog A | Mer: skruven går ner genom råsponten. Vad vill vinden göra med kanten?
3. Fog B | Knuff: vinden vid gaveln kan trycka och suga. Vad händer med en bräda som bara sitter i överkant?
4. Fog B | Mer: fästdonet drar in skivan mot regeln.
5. Höjd | Knuff: mät från takytan till pannans högsta punkt. Var i anvisningen står det?
---PEKARE---
gavelkant | linje 0,0,20 till 0,5400,20
takfot | linje 0,0,20 till 2000,0,20
nock | linje 0,5400,20 till 2000,5400,20
---FOGAR---
fog A | Regel under råspont | scen Fog A – regel
pil A | från 2400,1000,-400 till 2400,1000,-100 | tryck | Vindskivans tyngd drar i regeln
utan A | delar e1 | flytta 0,0,-250 | Utan skruv släpper regeln från råsponten, och vindskivan följer med.
fog B | Vindskiva mot regel | scen Fog B – vindskiva
pil B | från -700,800,0 till -250,800,0 | skjuv | Vinden trycker mot gaveln
pil B | från -300,1600,0 till -700,1600,0 | drag | Vindsug drar ut skivan
utan B | delar e2 | flytta -300,0,0 | Utan infästning släpper vindskivan från regeln, och vinden tar sig in under pannorna.
---MODELL---
del r1 | Råspont 20x95 | box 0..95, 0..5400, 0..20
del p1 | Underlagspapp | box 0..2000, 0..5400, 20..21
del e1 | Regel 45x45 | box 2400..2445, 400..1600, -45..0 | exempel
del e2 | Vindskiva 22x145 | box 2378..2400, 400..1600, -45..100 | exempel
---SCENER---
scen Översikt | öga -3000,-2000,2500 | mål 0,2700,50
scen Fog A – regel | öga -600,-500,-700 | mål 22,700,-20
scen Fog B – vindskiva | öga -1000,300,300 | mål -22,700,40
scen Sektion vid gaveln | öga 1500,-1500,60 | mål 0,1000,60 | snitt y 1000
---SLUT---
`,o=`BYGGSKOLAN-FACIT
id: tak76-nockplanka-1
---FRÅGOR---
1. Höjden beror på pannans form, läktläget och lutningen. Provpannan visar vad som faktiskt gäller. Nockpannan ska vila på pannorna, inte på plankan.
2. 2 Träskruv 6,0x100 snett per takstol. En sned skruv får längre väg i stolen och tar lyft och sidkraft bättre än en rak.
3. 4 Träskruv 6,0x100 i skarven, skarvbiten över minst två stolar. Skarven får då stöd på båda sidor och plankan blir sammanhängande i längdled.
4. För högt: nockpannan vilar på plankan och vippar, och tätningen mot pannorna blir dålig. För lågt: nockbandet får inget stöd och nockpannan kan sjunka.
5. Nockpannans mått och överlapp, nockplankans höjd eller läge, om nockband krävs, hur nockpannorna fästs och hur nocken ventileras för en ny panna.
6. Bonus: 6000 × sin 27° ≈ 2724 mm.
---LÖSNING---
Nockpannans underkant ligger på 101, så plankans överkant ska ligga på 91. Salan är 45 hög och plankan 45, så plankan ligger från 46 till 91. Skarven ligger på tredje stolen och skarvbiten under går från andra till fjärde stolen. Måtten är övningsvärden.
---MODELL---
del fa1 | Betongpanna | box 1500..1800, 1040..1460, 51..101
del fa2 | Nockpanna | box 1500..1920, 1375..1625, 101..151
del fs1 | Regel 45x45 | box 500..545, 1450..1550, 1..46
del fs2 | Regel 45x45 | box 1000..1045, 1450..1550, 1..46
del fp1 | Regel 45x145 | box 0..2400, 1427.5..1572.5, 46..91
del fp2 | Regel 45x145 | box 2400..4845, 1427.5..1572.5, 46..91
del fp3 | Regel 45x145 | box 1245..3645, 1427.5..1572.5, 1..46
`,s=`BYGGSKOLAN-ÖVNING
id: tak76-nockplanka-1
titel: Tak 7.6 N2 – nockplanka: höjd med provpanna
typ: bygg
område: Tak
källa: DM Tak (nockplanka). Pannmått och höjdmått är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Vänstra takstolen, takfallets nedre kant i bilden (x 0, y 0, z 0)
---UPPGIFT---
Nockplankan ska upp. Ritningen visar översta delen av fallet, utvikt, med [nocken](nock) på mitten. Takstolarna, pappen, ströläkten och [översta bärläkten](b1) är klara.

**Principen:** nockplankans höjd får du inte ur en tabell. Du lägger en provpanna och en nockpanna och läser av höjden. Står plankan för högt ligger nockpannan på plankan och inte på pannorna. Står den för lågt får nockbandet inget stöd.

**Övningsvärden:**
- Provpannan ligger på översta bärläkten, nedre delen hänger ner längs fallet.
- Nockpannans underkant vilar på provpannans överkant, mitt över nocken.
- Plankans överkant ska ligga 10 under nockpannans underkant.
- Sala (block) Regel 45x45 under plankan, c/c 500 från vänstra stolen.
- Plankan är Regel 45x145 och ligger flatt. Skarven får en skarvbit under sig, också Regel 45x145 flatt, över minst två takstolar.
- Träskruv 6,0x100: 2 st snett per takstol, 4 st i varje skarv (från DM Tak: 2×100-skruv per takstol).
---STEG---
1. Lägg en provpanna (Betongpanna) på [översta bärläkten](b1), 1500 från vänstra gaveln. Lägg en nockpanna ovanpå, längs nocken och mitt över [nocken](nock). Läs av höjden till nockpannans underkant.
   koll a1 | Betongpanna | box 1500..1800, 1040..1460, 51..101
   koll a2 | Nockpanna | box 1500..1920, 1375..1625, 101..151
2. Sätt de två första salorna, Regel 45x45 100 långa på tvären, mitt över [nocken](nock), c/c 500 från vänstra stolen.
   koll s1 | Regel 45x45 | box 500..545, 1450..1550, 1..46 | fel Mät c/c från vänstra stolen
   koll s2 | Regel 45x45 | box 1000..1045, 1450..1550, 1..46
3. Lägg nockplankan, Regel 45x145 flatt, i två delar ovanpå salorna och mitt över [nocken](nock). Överkanten ska ligga 10 under nockpannans underkant, och skarven mitt på [tredje stolen](t3).
   koll p1 | Regel 45x145 | box 0..2400, 1427.5..1572.5, 46..91 | fel Plankans överkant ska ligga 10 under nockpannans underkant
   koll p2 | Regel 45x145 | box 2400..4845, 1427.5..1572.5, 46..91
4. Sätt skarvbiten, Regel 45x145 flatt, under plankan från [andra stolen](t2) till [fjärde stolen](t4). Markera fyra Träskruv 6,0x100 ovanifrån i [fog B](scen Fog B – skarv), två på var sida om skarven.
   koll p3 | Regel 45x145 | box 1245..3645, 1427.5..1572.5, 1..46
   koll fästdon | Träskruv 6,0x100 | 4 st | box 2300..2500, 1427.5..1572.5, 81..101
   fog: B
5. Markera två Träskruv 6,0x100 där plankan går över [andra stolen](t2), [fog A](scen Fog A – planka mot takstol).
   koll fästdon | Träskruv 6,0x100 | 2 st | box 1200..1245, 1427.5..1572.5, 81..101
   fog: A
---FRÅGOR---
1. Varför mäter du nockhöjden med en provpanna och inte med ett tum-mått från ritningen?
2. [Fog A](scen Fog A – planka mot takstol): Fästdon → Antal/placering → Varför (varför snett?)
3. [Fog B](scen Fog B – skarv): Fästdon → Antal/placering → Varför (varför över två stolar?)
4. Vad händer med nockpannorna om plankan står 20 för högt, och om den står 20 för lågt?
5. Du ska lägga en ny panna. Vilka värden letar du upp i anvisningen för nocken?
6. *(bonus)* Takfallet är 6,0 m mätt längs fallet och lutningen är 27°. Hur högt över takfoten ligger nocken? Räkna i Bygget → Geometri.
---LEDTRÅDAR---
1. Fog A | Knuff: vad gör skruven när vinden suger uppåt?
2. Fog A | Mer: en sned skruv får längre väg i takstolen och korsar kraften.
3. Fog B | Knuff: var är plankan svagast om skarven saknar stöd?
4. Fog B | Mer: skarvbiten fungerar som en skena mellan två stolar.
5. Höjd | Knuff: på vad ska nockpannan vila?
---PEKARE---
nock | linje 0,1500,1 till 4845,1500,1
---FOGAR---
fog A | Planka mot takstol | scen Fog A – planka mot takstol
pil A | från 5400,500,250 till 5400,500,750 | lyft | Vindsug lyfter nocken
utan A | delar e1 | flytta 0,0,300 | Utan skruv i takstolen lyfter vindsuget plankan och nockpannorna.
fog B | Skarv | scen Fog B – skarv
pil B | från 5900,700,700 till 5900,700,250 | tryck | Nockpannornas last
utan B | delar e1 | flytta 0,150,-150 | En skarv utan skarvbit bryts ner mellan stolarna, och nocken blir ojämn.
---MODELL---
del t1 | Takstol 45x170 | box 0..45, 0..3000, -170..0
del t2 | Takstol 45x170 | box 1200..1245, 0..3000, -170..0
del t3 | Takstol 45x170 | box 2400..2445, 0..3000, -170..0
del t4 | Takstol 45x170 | box 3600..3645, 0..3000, -170..0
del t5 | Takstol 45x170 | box 4800..4845, 0..3000, -170..0
del f1 | Underlagspapp | box 0..4845, 0..3000, 0..1
del s1 | Ströläkt 25x38 | box 300..338, 0..1400, 1..26
del s2 | Ströläkt 25x38 | box 1500..1538, 0..1400, 1..26
del s3 | Ströläkt 25x38 | box 2700..2738, 0..1400, 1..26
del s4 | Ströläkt 25x38 | box 3900..3938, 0..1400, 1..26
del b1 | Bärläkt 25x38 | box 0..4845, 1040..1078, 26..51
del e1 | Regel 45x145 | box 5400..6600, 500..545, 46..191 | exempel
del e2 | Takstol 45x170 | box 5900..5945, 200..900, -170..0 | exempel
---SCENER---
scen Översikt | öga 2400,-2500,3500 | mål 2400,1500,50
scen Fog A – planka mot takstol | öga 1800,1000,700 | mål 1222,1500,140
scen Fog B – skarv | öga 2900,2600,700 | mål 2400,1540,120
scen Sektion vid provpannan | öga -1500,1500,120 | mål 1600,1500,120 | snitt x 1600
---SLUT---
`,c=`BYGGSKOLAN-FACIT
id: tak76-rannkrokar-1
---FRÅGOR---
1. Rännan behöver bara fall där vattnet rinner, från högsta till lägsta kroken. Sträckan är 3,2 m, alltså 22,4 mm, avrundat till 25. Fall åt fel håll ger stillastående vatten och läckage.
2. 2 Ankarskruv 5,0x40 per krok (övningsvärde). Kroken tar tryck från ränna, vatten och snö, och skjuvning från glidande snö. Lyft kan komma från vind.
3. 2 Ankarskruv 5,0x40. Kroken sitter 300 från stupröret för att stöda rännan nära utloppet utan att kollidera med stuprörsstutsen.
4. Snöret spänns på mittmärken. Är takfoten ojämn distansas snöret (125-ränna: läkt 25+36, 150-ränna: 3×25) så att ingen krok lyfter det. Är takfoten över 10 m delas den, med fall åt två håll.
5. Rännans fall och max fall, krokavstånd för rännstorleken, droppkantens bredd, krokens fästning för panna eller plåt, och rännans läge mot pannans droppkant för en ny panna.
6. Bonus: 8,9 m (300 kvar till stupröret) ger cirka 62 mm, avrundat 65. Det är över 60, så delas takfoten eller droppkanten kollas.
---LÖSNING---
Högsta kroken har överkant på 110, 10 över bakkanten på 100. Sträckan mellan krokarna är 3200, och 3,2 × 7 = 22,4 avrundas till 25, så lägsta kroken har överkant på 85. Mellankrokarna följer snöret. Bakkanten är ett övningsvärde.
---MODELL---
del fk1 | Rännkrok | box 87.5..112.5, -28..-22, -140..110
del fk2 | Rännkrok | box 3287.5..3312.5, -28..-22, -165..85
del fk3 | Rännkrok | box 2687.5..2712.5, -28..-22, -160.31..89.69
del fk4 | Rännkrok | box 2087.5..2112.5, -28..-22, -155.62..94.38
del fk5 | Rännkrok | box 1487.5..1512.5, -28..-22, -150.94..99.06
`,l=`BYGGSKOLAN-ÖVNING
id: tak76-rannkrokar-1
titel: Tak 7.6 N2 – rännkrokar med fall från stupröret
typ: bygg
område: Tak
källa: DM Tak (rännkrokar) och AMA Hus. Rännans bakkant i övningen är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfotsbrädans vänstra ände, framsidan, överkant på z 145 (x 0, y 0, z 0)
---UPPGIFT---
Rännkrokarna ska sättas. Du tittar rakt framifrån på [takfotsbrädan](b1), inte utvikt, för här är det höjden som är poängen. Krokarna ritas på brädans framsida, och rännans fall ska synas mellan dem. [Stupröret](stuprör) kommer vid högra änden.

**Principen:** rännan ska luta mot stupröret. Du bestämmer högsta och lägsta kroken, spänner ett snöre och sätter resten efter snöret. Kroken får aldrig lyfta snöret.

**Mått (DM Tak):**
- Första kroken 300 från stupröret, sedan c/c 600. Sista kroken högst 100 från gaveln.
- Fall 7 mm/m, avrundat uppåt till jämnt 5 mm. Högst 60 mm totalt med 80 droppkant. Över 10 m delas takfoten.
- Högsta kroken 10 över rännans bakkant. [Bakkanten vid vänstra gaveln](bakkant) ligger här på z 100 (övningsvärde).

Det är krokens överkant du mäter. Räkna fallet mellan högsta och lägsta kroken. Bygget har räknaren Rännfall. Toleransen är strängare än vanligt i den här övningen, 2–3 mm.
---STEG---
1. Sätt högsta rännkroken på takfotsbrädans framsida, med mitten 100 från [vänstra gaveln](vänstergavel) och överkanten 10 över [rännans bakkant](bakkant).
   koll k1 | Rännkrok | box 87.5..112.5, -28..-22, -140..110 | tolerans 2 | fel Mitten av kroken 100 från gaveln, överkant 10 över bakkanten
   fog: A
2. Sätt lägsta rännkroken med mitten 300 från [stupröret](stuprör). Räkna fallet, 7 mm/m avrundat uppåt till jämnt 5 mm, och sätt överkanten så mycket lägre än den högsta.
   koll k2 | Rännkrok | box 3287.5..3312.5, -28..-22, -165..85 | tolerans 2 | fel Avrunda fallet uppåt till jämnt 5 mm
   fog: B
3. Spänn snöret mellan de två krokarnas överkanter. Sätt de tre närmaste krokarna från stupröret, c/c 600, med överkanten mot snöret.
   koll k3 | Rännkrok | box 2687.5..2712.5, -28..-22, -160.31..89.69 | tolerans 3
   koll k4 | Rännkrok | box 2087.5..2112.5, -28..-22, -155.62..94.38 | tolerans 3
   koll k5 | Rännkrok | box 1487.5..1512.5, -28..-22, -150.94..99.06 | tolerans 3
4. Markera två Ankarskruv 5,0x40 i högsta kroken, [fog A](scen Fog A – högsta kroken).
   koll fästdon | Ankarskruv 5,0x40 | 2 st | box 87.5..112.5, -38..-18, 0..110
   fog: A
5. Markera två Ankarskruv 5,0x40 i lägsta kroken, [fog B](scen Fog B – lägsta kroken).
   koll fästdon | Ankarskruv 5,0x40 | 2 st | box 3287.5..3312.5, -38..-18, 0..85
   fog: B
---FRÅGOR---
1. Varför räknar du fallet mellan krokarna och inte på hela takfoten? Vad händer om fallet går åt fel håll?
2. [Fog A](scen Fog A – högsta kroken): Fästdon → Antal/placering → Varför (vilka laster kommer på kroken?)
3. [Fog B](scen Fog B – lägsta kroken): Fästdon → Antal/placering → Varför (varför sitter kroken 300 från stupröret?)
4. Takfoten är ojämn. Hur använder du snöret så att kroken inte lyfter det, och vad gör du om takfoten är över 10 m?
5. Du får en ny panna eller plåt och en ny rännmodell. Vilka värden letar du upp i anvisningen?
6. *(bonus)* Hur stort blir fallet på en 9 m lång takfot med stupröret i ena änden? Räkna i Bygget → Geometri (Rännfall).
---LEDTRÅDAR---
1. Fog A | Knuff: vad ligger i rännan vintertid?
2. Fog A | Mer: tänk på både tyngden och vind som lyfter.
3. Fog B | Knuff: vad behöver bakkanten och framkanten för höjd vid stupröret?
4. Fog B | Mer: kroken nära stupröret bär den ände som rinner mest.
5. Fall | Knuff: mät hur långt det är från högsta till lägsta kroken, gånger 7, och avrunda uppåt.
---PEKARE---
vänstergavel | linje 0,0,0 till 0,0,145
stuprör | 3600,-100,0
bakkant | linje 0,-40,100 till 600,-40,100
---FOGAR---
fog A | Högsta kroken | scen Fog A – högsta kroken
pil A | från 4412,-200,600 till 4412,-200,200 | tryck | Rännans, vattnets och snöns tyngd
utan A | delar e1 | flytta 0,0,-250 | Utan skruv rycker snön ner kroken, och rännan tappar fallet.
fog B | Lägsta kroken | scen Fog B – lägsta kroken
pil B | från 4412,-500,300 till 4412,-100,300 | skjuv | Snö som glider ner från taket
utan B | delar e1 | flytta 0,-200,-150 | Utan infästning i lägsta kroken sjunker rännan vid stupröret, och vatten rinner över framkanten.
---MODELL---
del b1 | Takfotsbräda 22x145 | box 0..3600, -22..0, 0..145
del e1 | Rännkrok | box 4400..4425, -28..-22, -140..110 | exempel
del e2 | Takfotsbräda 22x145 | box 4100..4700, -22..0, 0..145 | exempel
linje | från 0,-40,100 till 600,-40,100 | Rännans bakkant vid gaveln
---SCENER---
scen Översikt | öga 1800,-3500,300 | mål 1800,-22,0
scen Fog A – högsta kroken | öga 500,-900,300 | mål 100,-25,50
scen Fog B – lägsta kroken | öga 3700,-900,300 | mål 3300,-25,30
---SLUT---
`,u=`BYGGSKOLAN-FACIT
id: tak76-hangranna-1
---FRÅGOR---
1. Från lägsta punkten sätts skarven så att vattnet rinner över den. Vulsten låses från samma håll, så att rännan ligger rätt i krokarna. Den övre längden över den undre ger ingen kant mot strömmen.
2. 2 Popnit 4,0x10 per skarv. De håller rören ihop mot glidning. Falsen vänds bort från fasaden, så att ett läckage i falsen inte hamnar på väggen.
3. Rännskarv enligt tillverkaren, 100 överlapp, tätad. En lös skarv glider isär när plåten rör sig av temperaturen. Inga lösa rännskarvar.
4. Med högre framkant rinner överflöde utåt, inte mot väggen. De 15 mm ger rännan plats att röra sig. AMA Hus kräver krok på och mellan takstolarna, och att rännan snöras.
5. Rännans dimension, krokavstånd, skarvtyp och tätning, fall, droppkant, stuprörets dimension och hur vattnet leds bort för en ny ränna eller panna.
6. Bonus: 9000 / 600 = 15 mellanrum, plus ändkrok: cirka 16 krokar.
---LÖSNING---
Rännan börjar från lågpunkten i höger ände, ränngavel 15 från vindskivorna, med skarv 100. Stupröret är två bitar med 50 överlapp och 2 popnit. Rännan är ritad vågrät i bilden. Stuprörsöverlappet är ett övningsvärde.
---MODELL---
del fr2 | Hängränna | box 2915..4985, -125..0, 0..80
del fr1 | Hängränna | box 15..3015, -125..0, 2..82
del fs1 | Stuprör | box 4600..4675, -100..-25, -3000..0
del fs2 | Stuprör | box 4600..4675, -100..-25, -5950..-2950
`,d=`BYGGSKOLAN-ÖVNING
id: tak76-hangranna-1
titel: Tak 7.6 N2 – hängränna och stuprör
typ: bygg
område: Tak
källa: DM Tak (hängränna och stuprör) och AMA Hus. Stuprörsöverlappet 50 är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Vänstra vindskivans insida vid takfoten, rännans underkant (x 0, y 0, z 0)
---UPPGIFT---
[Krokarna](k1,k2,k3,k4,k5,k6) sitter klara, och rännan ska läggas i dem. Du tittar uppifrån längs takfoten. Rännan ritas vågrät, utan fall, så att måtten syns. Fallet har du redan satt med krokarna. Stupröret kommer i [högra änden](lågpunkt), och det är där rännan är lägst.

**Principen:** rännan läggs från lägsta punkten. Skarven görs så att vattnet rinner över den, inte mot den. Rännans framkant ligger högre än bakkanten, så att ett överflöde rinner utåt och inte in mot väggen. Testa alltid med vatten.

**Mått (DM Tak och AMA Hus):**
- Ränngavel 15 från vindskivan
- Skarv 100, och bågfil aldrig vinkelslip när du kapar
- Framkant 6 högre än bakkant
- Vulsten låses först från lägsta punkten
- Rännan ligger på krokarna både på och mellan takstolarna, och snöret styr
- Stuprör: en undre och en övre bit med 50 överlapp (övningsvärde), 2 popnit per skarv, falsen bort från fasaden
---STEG---
1. Lägg den högra hängrännan från [lågpunkten](lågpunkt) och åt vänster, med ränngaveln 15 från högra vindskivan. Kapa den så att vänstra änden hamnar 2915 från vänstra vindskivan.
   koll r2 | Hängränna | box 2915..4985, -125..0, 0..80 | fel Ränngaveln 15 från högra vindskivan, och skarven räknad från vänster
2. Lägg den vänstra hängrännan ovanpå den högra med 100 skarv, med ränngaveln 15 från vänstra vindskivan.
   koll r1 | Hängränna | box 15..3015, -125..0, 2..82 | tolerans 3 | fel Ränngaveln 15 från vänstra vindskivan
   fog: B
3. Sätt det övre stupröret (3000 långt) under rännan, rörets vänstra sida 4600 från vänstra vindskivan och 25 ut från [krokarnas bakkant](k5). Sätt det undre stupröret (3000) under det, så att de överlappar 50.
   koll s1 | Stuprör | box 4600..4675, -100..-25, -3000..0
   koll s2 | Stuprör | box 4600..4675, -100..-25, -5950..-2950 | fel Bitarna ska överlappa 50, inte stå kant i kant
   fog: A
4. Markera två Popnit 4,0x10 i stuprörsskarven, [fog A](scen Fog A – stuprörsskarv).
   koll fästdon | Popnit 4,0x10 | 2 st | box 4600..4675, -110..-15, -3000..-2950
   fog: A
---FRÅGOR---
1. Varför läggs rännan från lägsta punkten, och varför ska den övre längden ligga ovanpå den undre i skarven?
2. [Fog A](scen Fog A – stuprörsskarv): Fästdon → Antal/placering → Varför (varför ska falsen bort från fasaden?)
3. [Fog B](scen Fog B – rännskarv): Fästdon → Antal/placering → Varför (vad händer med en lös rännskarv?)
4. Varför ligger framkanten 6 högre, och varför 15 från vindskivan? Vad säger AMA Hus om krokarna?
5. Du får en ny ränna eller en ny panna. Vilka värden letar du upp i anvisningen?
6. *(bonus)* Hur många krokar går åt till en 9 m lång takfot med c/c 600? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: vad händer om en stuprörsbit glider ner en bit?
2. Fog A | Mer: var hamnar vattnet om falsen går upp mot väggen?
3. Fog B | Knuff: åt vilket håll rinner vattnet genom skarven?
4. Fog B | Mer: vilken bit ska ligga överst för att vattnet inte ska mötas av en kant?
5. Vindskiva | Knuff: vad händer när rännan rör sig med temperaturen?
---PEKARE---
lågpunkt | linje 5000,-125,40 till 5000,0,40
---FOGAR---
fog A | Stuprörsskarv | scen Fog A – stuprörsskarv
pil A | från 4900,-300,-2400 till 4900,-300,-2900 | drag | Stuprörets tyngd drar i skarven
utan A | delar e2 | flytta 0,0,-300 | Utan nit glider det undre röret ner ur det övre, och vattnet går på fasaden.
fog B | Rännskarv | scen Fog B – rännskarv
pil B | från 2600,-300,300 till 3000,-300,300 | skjuv | Rännan rör sig när det blir varmt och kallt
utan B | delar e1 | flytta 250,0,0 | En lös rännskarv glider isär när plåten rör sig, och läcker rakt ner längs fasaden.
---MODELL---
del v1 | Vindskiva 22x145 | box -22..0, -300..300, -100..45
del v2 | Vindskiva 22x145 | box 5000..5022, -300..300, -100..45
del k1 | Rännkrok | box 100..125, -250..0, -6..0
del k2 | Rännkrok | box 1000..1025, -250..0, -6..0
del k3 | Rännkrok | box 2000..2025, -250..0, -6..0
del k4 | Rännkrok | box 3000..3025, -250..0, -6..0
del k5 | Rännkrok | box 4000..4025, -250..0, -6..0
del k6 | Rännkrok | box 4900..4925, -250..0, -6..0
del e1 | Hängränna | box 5600..6800, -125..0, 0..80 | exempel
del e2 | Stuprör | box 5800..5875, -100..-25, -1600..-300 | exempel
---SCENER---
scen Översikt | öga 2500,-3500,1800 | mål 2500,-100,0
scen Fog A – stuprörsskarv | öga 5100,-1000,-2400 | mål 4637,-62,-2975
scen Fog B – rännskarv | öga 3000,-900,600 | mål 2960,-60,40
---SLUT---
`,f=`BYGGSKOLAN-FACIT
id: tak76-fotplat-1
---FRÅGOR---
1. En kort bit har för få skruvar och rör sig lätt. Därför räknar du baklänges och kapar näst sista längden i stället. Under 500 håller biten dåligt.
2. Takskruv 4,8x35, 5 st c/c 400, inte i krokarna (övningsvärde för fästdonet). Skruven tar lyft från vinden och skjuvning från glidande snö. Skruv i kroken skadar infästningen.
3. Överlapp 100, längderna läggs från vänster, så att skarven täcker vattenvägen enligt DM Tak. Skruven tar plåtens rörelse. Inte skruv genom överlappet om anvisningen säger så.
4. Avledaren för vattnet från gaveln ner i rännan. Uppviket hindrar att vattnet går ut över vindskivan och in bakom rännan.
5. Fotplåtens bredd och utstick, överlapp, skruv c/c och typ, hur pappen ansluter mot fotplåten, och om avledare krävs för en ny panna.
6. Bonus: längder ger 1900 per styck efter första. 2000 + 4×1900 = 9600, så sista biten blir 200 (100 över + 100 överlapp). Det är under 500, så kapa näst sista.
---LÖSNING---
Från vänster: 0–2000, 1900–3700 (kapad till 1800) och 3600–4200. Sista biten blir 600. Avledaren ligger i hörnet ovanpå första längden. Utsticket och avledarens mått är övningsvärden.
---MODELL---
del ff1 | Fotplåt | box 0..2000, -30..120, 7..8
del fa1 | Avledare | box 0..100, 20..220, 8..9
del ff2 | Fotplåt | box 1900..3700, -30..120, 8..9
del ff3 | Fotplåt | box 3600..4200, -30..120, 7..8
`,p=`BYGGSKOLAN-ÖVNING
id: tak76-fotplat-1
titel: Tak 7.6 N2 – fotplåt med avledare och sista biten
typ: bygg
område: Tak
källa: DM Tak (fotplåt) och AMA Hus. Utsticket 30 och avledarens mått är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfallets nedre vänstra hörn, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Rännan sitter, och nu kommer fotplåten. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet. [Rännkrokarna](k1,k2,k3,k4,k5,k6,k7) ligger kvar på [pappen](p1), så fotplåten läggs ovanpå dem.

**Principen:** fotplåten för vattnet från pappen ner i rännan. Du börjar från vänster, och varje ny längd ligger ovanpå den förra. Det är den sista biten du planerar först: blir den för kort håller den inte, så du flyttar skarven på den näst sista längden.

**Mått (DM Tak):**
- Fotplåt i längder om 2000, börja från vänster, överlapp 100
- Utstick 30 förbi takfoten (övningsvärde)
- Uppvik 20 och avledare vid gaveln. Avledaren 100 bred, 200 lång, läggs i hörnet ovanpå plåten, 20 upp från takfoten (övningsvärde).
- Sista biten minst 500. Här: planera för 600.
- Skruv c/c 400, inte i krokarna. Takfoten är 4200.

Bygget har räknaren Sista biten.
---STEG---
1. Lägg första fotplåten, en hel längd 2000, från [vänstra gaveln](gavel) och åt höger. Den ska sticka ut 30 förbi [takfoten](takfot).
   koll f1 | Fotplåt | box 0..2000, -30..120, 7..8 | fel Mät 30 ut förbi takfoten
   fog: A
2. Lägg avledaren (100 bred, 200 lång) i hörnet vid [vänstra gaveln](gavel), ovanpå fotplåten och 20 upp från takfoten.
   koll a1 | Avledare | box 0..100, 20..220, 8..9
3. Lägg andra fotplåten ovanpå den första med 100 överlapp. Kapa den så att sista biten till [högra gaveln](högergavel) blir 600 lång, överlappet inräknat.
   koll f2 | Fotplåt | box 1900..3700, -30..120, 8..9 | fel Räkna baklänges från högra gaveln, sista biten plus överlappet
   fog: B
4. Lägg sista biten, 600 lång, ovanpå den andra med 100 överlapp och änden vid [högra gaveln](högergavel).
   koll f3 | Fotplåt | box 3600..4200, -30..120, 7..8
   fog: B
5. Markera skruvarna i första fotplåten: fem Takskruv 4,8x35, c/c 400, den första 200 in från vänstra gaveln. Skruva inte i en rännkrok.
   koll fästdon | Takskruv 4,8x35 | 5 st | box 180..1820, -30..120, -2..18 | fel c/c 400, och inte i en krok
   fog: A
---FRÅGOR---
1. Varför planerar du sista biten först? Vad händer med en bit under 500?
2. [Fog A](scen Fog A – fotplåt): Fästdon → Antal/placering → Varför (vad vill snö och vind göra med plåten?)
3. [Fog B](scen Fog B – överlapp): Fästdon → Antal/placering → Varför (varför läggs längderna åt det hållet?)
4. Vad gör avledaren vid gaveln, och varför är det ett uppvik där?
5. Du ska lägga en ny panna eller plåt. Vilka värden letar du upp i anvisningen för fotplåten?
6. *(bonus)* Takfoten är 9700. Hur lång blir sista biten med längder om 2000 och överlapp 100? Räkna i Bygget → Geometri (Sista biten).
---LEDTRÅDAR---
1. Fog A | Knuff: var får fotplåten sina laster ifrån?
2. Fog A | Mer: vad händer om du skruvar rakt genom en krok?
3. Fog B | Knuff: vilken bit ska ligga överst för att vattnet ska rinna över skarven?
4. Fog B | Mer: det är inte bara vatten från taket, tänk också på vinden.
5. Sista biten | Knuff: räkna baklänges: sista biten plus överlapp ger var näst sista längden ska sluta.
---PEKARE---
takfot | linje 0,0,1 till 4200,0,1
gavel | linje 0,0,1 till 0,3000,1
högergavel | linje 4200,0,1 till 4200,3000,1
---FOGAR---
fog A | Fotplåt mot underlag | scen Fog A – fotplåt
pil A | från 5000,300,250 till 5000,300,750 | lyft | Vindsug under kanten
utan A | delar e1 | flytta 0,0,250 | Utan skruv lyfter vinden fotplåten, och pappen blir utsatt.
fog B | Överlapp | scen Fog B – överlapp
pil B | från 5000,0,500 till 5000,0,150 | tryck | Vatten rinner över skarven
utan B | delar e1 | flytta 300,0,0 | Utan rätt överlapp öppnar sig skarven när plåten rör sig, och vatten kommer in under.
---MODELL---
del p1 | Underlagspapp | box 0..4200, 0..3000, 0..1
del k1 | Rännkrok | box 287.5..312.5, -30..220, 1..7
del k2 | Rännkrok | box 887.5..912.5, -30..220, 1..7
del k3 | Rännkrok | box 1487.5..1512.5, -30..220, 1..7
del k4 | Rännkrok | box 2087.5..2112.5, -30..220, 1..7
del k5 | Rännkrok | box 2687.5..2712.5, -30..220, 1..7
del k6 | Rännkrok | box 3287.5..3312.5, -30..220, 1..7
del k7 | Rännkrok | box 3887.5..3912.5, -30..220, 1..7
del e1 | Fotplåt | box 4800..6000, -30..120, 7..8 | exempel
---SCENER---
scen Översikt | öga 2100,-3200,4500 | mål 2100,1500,0
scen Fog A – fotplåt | öga 1000,-1100,800 | mål 700,50,8
scen Fog B – överlapp | öga 2400,-1000,700 | mål 1950,50,8
---SLUT---
`,m=`BYGGSKOLAN-FACIT
id: tak74-strolakt-1
---FRÅGOR---
1. Utan ströläkt nederst saknar nedersta bärläkten stöd, och vatten från pappen hindras. Vid fotplåten ska läkten bära, och vattnet ska gå fritt ned.
2. 3 Trådspik 2,8x75 per längd (typ är övningsvärde). Det räcker för läget, eftersom bärläkten håller den sedan. Dold spikning betyder att spiken sitter där läkten täcker den, och läkten trycker pappen tätt runt spiken.
3. 2 Trådspik 2,8x75. Biten tar nedåtkraft längs fallet och håller bärläkten på plats.
4. 100 från gaveln ger plats för uppvik och gavelbeslag. 30–50 från knäcken ger luft och vatten fri väg vid nock, och läkten hamnar inte på vecket.
5. Ströläktens dimension, c/c, hur den ansluter vid nock och takfot, och om tillverkaren kräver viss höjd för luftning för en ny panna.
6. Bonus: 3600 / 560 ≈ 7 ströläkter à 4,5 m, plus förlängningar.
---LÖSNING---
Gavelläkterna ligger 100 från gavlarna, 40 från knäcken och går ner till 20 från takfoten. Förlängningarna går ner till 20 från takfoten. Spiktypen är ett övningsvärde.
---MODELL---
del fa1 | Ströläkt 25x38 | box 100..138, 20..4760, 2..27
del fa2 | Ströläkt 25x38 | box 3462..3500, 20..4760, 2..27
del fb1 | Ströläkt 25x38 | box 660..698, 20..250, 2..27
del fb2 | Ströläkt 25x38 | box 1220..1258, 20..250, 2..27
`,h=`BYGGSKOLAN-ÖVNING
id: tak74-strolakt-1
titel: Tak 7.4 N2 – ströläkt: gavel, knäck och förlängning
typ: bygg
område: Tak
källa: DM Tak (läkt) och AMA Hus. Spiktyp är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfallets nedre vänstra hörn, fotplåtens underkant (x 0, y 0, z 0)
---UPPGIFT---
Pappen är lagd och [mittströläkten](s1,s2,s3,s4,s5) ligger kvar från när ni pappade. Den slutar 250 från takfoten, eftersom avvattningen inte var klar. Nu sitter [fotplåten](f1,f2) och [pappen](p1) är klistrad på den, så ströläkten ska förlängas och gavlarna ska få sin läkt. Takfallet är utvikt, med [takfoten](takfot) nederst och [nocken](nock) överst.

**Varför ströläkt:** den håller bärläkten fri från pappen, så att vatten rinner ner under läkten och luft kan gå upp mot nocken. Därför ska den gå hela vägen ned. Vid gaveln får den inte stå ute vid kanten, för där ska pappens uppvik och beslag få plats.

**Mått (DM Tak):**
- 100 från gaveln, till ströläktens närmaste kant
- 30–50 från knäcken i nock, här 40
- c/c högst 600, läktmall 560
- 3 spik per längd
- Förlängningen ska gå ner till 20 från takfoten, på pappen ovanpå fotplåten.
---STEG---
1. Lägg en ströläkt (25x38) vid [vänstra gaveln](gavel), 100 från gaveln till läktens närmaste kant, från 20 upp från takfoten till 40 under [nocken](nock).
   koll a1 | Ströläkt 25x38 | box 100..138, 20..4760, 2..27 | fel Kolla avståndet från gaveln och knäcken
   fog: A
2. Lägg en ströläkt vid [högra gaveln](högergavel) på samma sätt, 100 från gaveln.
   koll a2 | Ströläkt 25x38 | box 3462..3500, 20..4760, 2..27
3. Förläng den [första](s1) och den [andra](s2) mittströläkten med en kort bit var, stumt mot den befintliga läkten och ner till 20 från takfoten.
   koll b1 | Ströläkt 25x38 | box 660..698, 20..250, 2..27 | fel Stumskarv mot den befintliga läkten, 20 från takfoten
   koll b2 | Ströläkt 25x38 | box 1220..1258, 20..250, 2..27
   fog: B
4. Markera tre Trådspik 2,8x75 i läkten vid vänstra gaveln, [fog A](scen Fog A – läkt mot papp).
   koll fästdon | Trådspik 2,8x75 | 3 st | box 100..138, 20..4760, 17..37
   fog: A
5. Markera två Trådspik 2,8x75 i den första förlängningen, [fog B](scen Fog B – förlängning). Två spik räcker på den korta biten.
   koll fästdon | Trådspik 2,8x75 | 2 st | box 660..698, 20..250, 17..37
   fog: B
---FRÅGOR---
1. Varför ska ströläkten gå hela vägen ner, och vad händer om den slutar 250 från takfoten när pannorna ligger på?
2. [Fog A](scen Fog A – läkt mot papp): Fästdon → Antal/placering → Varför (varför spikas den inte tätare, och vad betyder dold spikning?)
3. [Fog B](scen Fog B – förlängning): Fästdon → Antal/placering → Varför (vad bär en förlängning?)
4. Varför 100 från gaveln och 30–50 från knäcken?
5. Du ska lägga en ny panna. Vilka värden letar du upp i anvisningen för ströläkten?
6. *(bonus)* Takfallet är 3,6 m brett. Hur många ströläkter går åt med mall 560 och hur långa? Räkna i Bygget → Läkt.
---LEDTRÅDAR---
1. Fog A | Knuff: vad håller ströläkten egentligen på plats när bärläkten kommer?
2. Fog A | Mer: spiken går genom pappen. Hur tätar du det?
3. Fog B | Knuff: var hamnar vattnet som rinner längs pappen?
4. Fog B | Mer: läkten ska bära ändan på bärläkten.
5. Gavel | Knuff: vad ska få plats mellan gaveln och ströläkten?
---PEKARE---
takfot | linje 0,0,2 till 3600,0,2
nock | linje 0,4800,2 till 3600,4800,2
gavel | linje 0,0,2 till 0,4800,2
högergavel | linje 3600,0,2 till 3600,4800,2
---FOGAR---
fog A | Ströläkt mot papp | scen Fog A – läkt mot papp
pil A | från -300,1000,300 till -300,1000,800 | lyft | Vindsug lyfter läkten
utan A | delar s1 | flytta 0,0,250 | Utan spik flyttar sig läkten när ni lägger bärläkten, och avståndet blir fel.
fog B | Förlängning | scen Fog B – förlängning
pil B | från 900,500,500 till 900,130,500 | skjuv | Bärläkten vill dra ner förlängningen längs fallet
utan B | delar s2 | flytta 0,-200,0 | Utan förlängning saknar nedersta bärläkten stöd, och den svänger ner mot fotplåten.
---MODELL---
del f1 | Fotplåt | box 0..2000, -30..120, 0..1
del f2 | Fotplåt | box 2000..3600, -30..120, 0..1
del p1 | Underlagspapp | box 0..3600, 20..4800, 1..2
del s1 | Ströläkt 25x38 | box 660..698, 250..4760, 2..27
del s2 | Ströläkt 25x38 | box 1220..1258, 250..4760, 2..27
del s3 | Ströläkt 25x38 | box 1780..1818, 250..4760, 2..27
del s4 | Ströläkt 25x38 | box 2340..2378, 250..4760, 2..27
del s5 | Ströläkt 25x38 | box 2900..2938, 250..4760, 2..27
---SCENER---
scen Översikt | öga 1800,-3500,6000 | mål 1800,2400,0
scen Fog A – läkt mot papp | öga 800,-500,900 | mål 119,600,20
scen Fog B – förlängning | öga 1100,-700,700 | mål 680,120,20
---SLUT---
`,ee=`BYGGSKOLAN-FACIT
id: tak75-pannstaplar-1
---FRÅGOR---
1. 8 × 300 = 2400. Då räcker bunten precis till den bredd du lägger från den, så du behöver inte gå tillbaka. Jämn delning av taket ger inte den matchningen.
2. Läkt 25x38 som stöd, 2 Trådspik 2,8x75. Tyngden längs fallet ger skjuvning som stödläkten tar upp och för över till bärläkten.
3. Inget fästdon. Två buntar sida vid sida vid nock, eftersom raderna där behöver mer och nockpannorna ska finnas nära. Taket ska klara lasten utan att läkten sviktar. Buntarna fördelas så att ingen läkt får all last.
4. Raka linjer gör det lätt att flytta runt, och pannorna fördelas jämnt över stolarna. Högra sidan mot nock passar läggning från höger, så att du tar pannan från rätt håll.
5. Pannor per m², pannor per bunt eller pall, vikt per panna, byggbredd, läktavstånd och hur tillverkaren vill att pannorna staplas på taket för en ny panna.
6. Bonus: 16,8 m² × 10,5 ≈ 176 pannor, 176 / 8 = 22 buntar.
---LÖSNING---
Avståndet blir 8 × 300 = 2400. Buntarna står 5900, 3500 och 1100 till högra sidan. Rakt uppför i samma linje, och dubbelt vid nock. Alla tal är övningsvärden.
---MODELL---
del fb1 | Betongpanna | box 5600..5900, 358..778, 51..101
del fb2 | Betongpanna | box 3200..3500, 358..778, 51..101
del fb3 | Betongpanna | box 800..1100, 358..778, 51..101
del fb4 | Betongpanna | box 5600..5900, 1078..1498, 51..101
del fb5 | Betongpanna | box 5600..5900, 2158..2578, 51..101
del fb6 | Betongpanna | box 5300..5600, 2158..2578, 51..101
del fs1 | Läkt 25x38 | box 5600..5900, 320..358, 51..76
`,te=`BYGGSKOLAN-ÖVNING
id: tak75-pannstaplar-1
titel: Tak 7.5 N2 – pannstaplar: buntplatser på läkten
typ: bygg
område: Tak
källa: DM Tak (leverans) och pannleverantörens anvisning. Pannor per bunt och byggbredd är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfallets nedre vänstra hörn, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Kranen kommer i morgon. Pannorna ska fördelas på [läkten](l1,l2,l3,l4,l5,l6,l7) så att du aldrig behöver gå långt, och så att taket inte får en tung punkt. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet. [Högra vindskivan](v1) är där du börjar.

I modellen visar **en Betongpanna en hel bunt**. Allt ska ligga på läkt, i raka linjer uppför fallet.

**Principen:** när du börjar lägga vid högra gaveln ska nästa bunt finnas där du behöver den. Bunten är en räknefråga: pannor per bunt × byggbredd ger avståndet mellan buntarna.

**Övningsvärden (från pallen och anvisningen):**
- 8 pannor per bunt
- Byggbredd 300
- Från DM Tak: första bunten 100 från högra vindskivan, buntarna i raka linjer med högra sidan mot nock, dubbelt vid nock
- Varje bunt står mot en stödläkt: en Läkt 25x38, 300 lång, flatt på läkten på buntens nedre sida, 2 Trådspik 2,8x75.

Buntarna ligger med underkanten direkt ovanför läkten de vilar på.
---STEG---
1. Sätt första bunten, 8 betongpannor, på [nedersta läkten](l1) med högra sidan 100 från [vindskivan](v1).
   koll b1 | Betongpanna | box 5600..5900, 358..778, 51..101 | fel Räkna från vindskivan till buntens högra sida
   fog: A
2. Räkna buntavståndet och sätt två buntar till på samma läkt, åt vänster.
   koll b2 | Betongpanna | box 3200..3500, 358..778, 51..101 | fel Pannor per bunt gånger byggbredd
   koll b3 | Betongpanna | box 800..1100, 358..778, 51..101
3. Sätt nästa bunt två läkter högre, rakt ovanför den första och med högra sidan i samma linje.
   koll b4 | Betongpanna | box 5600..5900, 1078..1498, 51..101
4. Sätt två buntar sida vid sida på [näst översta läkten](l6), den högra i samma linje som de andra.
   koll b5 | Betongpanna | box 5600..5900, 2158..2578, 51..101
   koll b6 | Betongpanna | box 5300..5600, 2158..2578, 51..101
   fog: B
5. Sätt en stödläkt (Läkt 25x38, 300 lång) flatt på läkten under första bunten. Markera två Trådspik 2,8x75, [fog A](scen Fog A – stödläkt).
   koll s1 | Läkt 25x38 | box 5600..5900, 320..358, 51..76
   koll fästdon | Trådspik 2,8x75 | 2 st | box 5600..5900, 320..358, 66..86
   fog: A
---FRÅGOR---
1. Varför räknar du buntavståndet från pannor per bunt och byggbredd, och inte bara delar taket jämnt?
2. [Fog A](scen Fog A – stödläkt): Fästdon → Antal/placering → Varför (vad håller bunten kvar på ett lutande tak?)
3. [Fog B](scen Fog B – vid nock): Vad är fästdonet här, hur många buntar och varför? Varför dubbelt vid nock, och vilken last ska taket klara under tiden?
4. Varför ska buntarna ligga i raka linjer, och varför ställs de med högra sidan mot nock?
5. Du får en ny panna. Vilka värden letar du upp i anvisningen eller på pallen innan du säger till kranen var pannorna ska stå?
6. *(bonus)* Takfallet är 6 m brett och 2,8 m långt. Med 10,5 pannor/m²: hur många buntar om 8 pannor? Räkna i Bygget → Mängder (Buntplatser).
---LEDTRÅDAR---
1. Fog A | Knuff: vad händer med en stapel på en sluttning?
2. Fog A | Mer: stödläkten behöver hålla mot läkten, inte bara ligga på.
3. Fog B | Knuff: vad behöver du mest av högst upp på taket?
4. Fog B | Mer: raden vid nock får pannor från två håll, de för nocken också.
5. Avstånd | Knuff: om en bunt är slut när du har lagt 8 pannor, hur långt har du då kommit i sidled?
---PEKARE---
takfot | linje 0,0,1 till 6000,0,1
---FOGAR---
fog A | Stödläkt under bunt | scen Fog A – stödläkt
pil A | från -400,1000,150 till -400,600,150 | skjuv | Buntens tyngd vill glida ner längs fallet
utan A | delar e1 | flytta 0,-300,0 | Utan stödläkt glider bunten ner längs fallet och kan gå över kanten.
fog B | Buntar vid nock | scen Fog B – vid nock
pil B | från -400,2400,700 till -400,2400,200 | tryck | Tyngd på läkten
utan B | delar l6 | flytta 0,0,-120 | För mycket last på samma läkt får den att svikta. Fördelningen är lika viktig som mängden.
---MODELL---
del p1 | Underlagspapp | box 0..6000, 0..2800, 0..1
del s1a | Ströläkt 25x38 | box 100..138, 0..2800, 1..26
del s2a | Ströläkt 25x38 | box 1300..1338, 0..2800, 1..26
del s3a | Ströläkt 25x38 | box 2500..2538, 0..2800, 1..26
del s4a | Ströläkt 25x38 | box 3700..3738, 0..2800, 1..26
del s5a | Ströläkt 25x38 | box 4900..4938, 0..2800, 1..26
del s6a | Ströläkt 25x38 | box 5862..5900, 0..2800, 1..26
del l1 | Bärläkt 25x38 | box 0..6000, 320..358, 26..51
del l2 | Bärläkt 25x38 | box 0..6000, 680..718, 26..51
del l3 | Bärläkt 25x38 | box 0..6000, 1040..1078, 26..51
del l4 | Bärläkt 25x38 | box 0..6000, 1400..1438, 26..51
del l5 | Bärläkt 25x38 | box 0..6000, 1760..1798, 26..51
del l6 | Bärläkt 25x38 | box 0..6000, 2120..2158, 26..51
del l7 | Bärläkt 25x38 | box 0..6000, 2480..2518, 26..51
del v1 | Vindskiva 22x145 | box 6000..6022, 0..2800, -45..100
del e1 | Betongpanna | box 6900..7200, 358..778, 51..101 | exempel
---SCENER---
scen Översikt | öga 3000,-3500,5000 | mål 3000,1400,0
scen Fog A – stödläkt | öga 5200,-300,700 | mål 5750,340,60
scen Fog B – vid nock | öga 4800,1400,1000 | mål 5600,2300,70
---SLUT---
`,ne=`BYGGSKOLAN-FACIT
id: tak75-pannlaggning-1
---FRÅGOR---
1. Dalen leder vatten, och slutar raden med en dal rinner vattnet mot vindskivan och in under den. Vågtoppen håller vattnet borta. Blir det en dal får du använda sidospelet eller kapa enligt anvisningen.
2. 1 Trådspik 2,8x75 per panna i de två nedersta och två översta raderna, samt mot gavlar och genomföringar (övningsvärde). Spiken tar lyft från vindsug. På övriga taket räcker oftast pannans vikt och kroken mot läkten.
3. Stormclips, 2 på pannan vid gaveln (övningsvärde, tillverkarens antal gäller). Clipset håller pannans nedre kant, som lyfter först, medan spiken håller den övre.
4. Takfot, nock, gavlar och runt genomföringar. Där skiljs vinden från taket, och undertrycket blir störst.
5. Läggningsriktning, täckbredd och sidospel, radavstånd, randzonens infästning, spik- eller clipstyp och antal, minsta lutning för en ny panna. Tillverkarens anvisning gäller före videon.
6. Bonus: 40 m² × 10,5 = 420 pannor × 1,05 ≈ 441 pannor.
---LÖSNING---
Rad 1 från höger: 1200–1500 ned till 0–300, som slutar mot vänstra vindskivan. 5 × 300 + 20 = 1520, så raden går jämnt ut. Rad 2 ligger 360 högre. Alla tal är övningsvärden.
---MODELL---
del fa1 | Betongpanna | box 1200..1500, -50..370, 51..101
del fa2 | Betongpanna | box 900..1200, -50..370, 51..101
del fa3 | Betongpanna | box 600..900, -50..370, 51..101
del fa4 | Betongpanna | box 300..600, -50..370, 51..101
del fa5 | Betongpanna | box 0..300, -50..370, 51..101
del fc1 | Betongpanna | box 1200..1500, 310..730, 53..103
del fc2 | Betongpanna | box 0..300, 310..730, 53..103
`,re=`BYGGSKOLAN-ÖVNING
id: tak75-pannlaggning-1
titel: Tak 7.5 N2 – pannläggning: start, randzon, stormclips
typ: bygg
område: Tak
källa: DM Tak (pannläggning) och pannleverantörens anvisning. Spik- och clipsantal är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Vänstra vindskivans insida vid takfoten, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Nu läggs pannorna på ett litet takfall mellan [vänstra](v1) och [högra vindskivan](v2). [Läkten](l1,l2,l3) ligger klar. Takfallet är utvikt, röd längs [takfoten](takfot), grön uppför fallet.

**Principen:** du lägger från höger. Den första pannan sätts med ett litet spel mot vindskivan, och varje rad ska sluta med en vågtopp vid den andra vindskivan, inte en dal, annars rinner vattnet ner längs vindskivan. Vid gavlar, takfot, nock och genomföringar är vinden hårdast. Det kallas randzon, och där fästs pannorna extra.

**Övningsvärden (från DM Tak och anvisningen):**
- Pannan är 300 bred och 420 lång. Rad 1 går 50 ut förbi takfoten.
- Pannan hänger över läktens överkant. Radavståndet är 360.
- Första pannan 20 från högra vindskivan. Vänster sida ska då sluta mot vänstra vindskivan med en vågtopp, kontrollera det när du har lagt raden.
- Spika två nedersta och två översta raderna, samt pannorna mot gavlarna. Här: 1 Trådspik 2,8x75 per panna.
- Stormclips (krok som håller pannans nedre kant): 2 på pannan närmast gaveln. Tillverkarens antal gäller före videon.
---STEG---
1. Lägg första betongpannan i rad 1, 20 från [högra vindskivan](v2) och 50 ut förbi takfoten.
   koll a1 | Betongpanna | box 1200..1500, -50..370, 51..101 | fel 20 från vindskivan, och 50 ut förbi takfoten
2. Lägg resten av rad 1 åt vänster, fyra pannor till.
   koll a2 | Betongpanna | box 900..1200, -50..370, 51..101
   koll a3 | Betongpanna | box 600..900, -50..370, 51..101
   koll a4 | Betongpanna | box 300..600, -50..370, 51..101
   koll a5 | Betongpanna | box 0..300, -50..370, 51..101
3. Lägg början av rad 2: en panna längst till höger och en längst till vänster, på rätt radavstånd ovanför rad 1.
   koll c1 | Betongpanna | box 1200..1500, 310..730, 53..103 | fel Radavståndet från anvisningen
   koll c2 | Betongpanna | box 0..300, 310..730, 53..103
4. Markera en Trådspik 2,8x75 per panna i rad 1, över [läkten](l1), [fog A](scen Fog A – panna mot läkt).
   koll fästdon | Trådspik 2,8x75 | 5 st | box 0..1500, 332..370, 91..111
   fog: A
5. Markera två stormclips vid nedre kanten på pannan närmast [vänstra gaveln](v1) i rad 1, [fog B](scen Fog B – panna vid gavel).
   koll fästdon | Stormclips | 2 st | box 0..300, -50..300, 91..111
   fog: B
---FRÅGOR---
1. Varför ska raden sluta med en vågtopp vid vindskivan? Vad gör du om det blir en dal?
2. [Fog A](scen Fog A – panna mot läkt): Fästdon → Antal/placering → Varför (var spikas det, och varför inte på hela taket?)
3. [Fog B](scen Fog B – panna vid gavel): Fästdon → Antal/placering → Varför (vad gör ett stormclips som spiken inte gör?)
4. Vilka delar av taket räknas som randzon, och varför är vinden hårdast där?
5. Du får en ny panna. Vilka värden letar du upp i anvisningen om läggning och infästning?
6. *(bonus)* Hur många pannor går åt till ett takfall på 8 × 5 m med 10,5 pannor/m² och 5 % spill? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: vad lyfter en panna?
2. Fog A | Mer: en panna hänger bara på läkten. Vad håller nedre kanten?
3. Fog B | Knuff: var sitter spiken och var sitter clipset på pannan?
4. Fog B | Mer: nedre kanten är den som lyfter först.
5. Vågtopp | Knuff: var rinner vattnet på pannan, i toppen eller dalen?
---PEKARE---
takfot | linje 0,0,1 till 1520,0,1
---FOGAR---
fog A | Panna mot läkt | scen Fog A – panna mot läkt
pil A | från 1800,100,300 till 1800,100,800 | lyft | Vindsug lyfter pannan
utan A | delar e1 | flytta 0,0,300 | Utan spik i randzonen lyfter vindsuget pannan, och raden öppnar sig som ett blixtlås.
fog B | Panna vid gavel | scen Fog B – panna vid gavel
pil B | från -500,200,150 till -100,200,150 | skjuv | Vinden trycker mot gaveln
utan B | delar e1 | flytta 0,0,180 | Utan clips kan vinden lyfta pannans nedre kant, även när den övre sitter fast.
---MODELL---
del p1 | Underlagspapp | box 0..1520, 0..1200, 0..1
del s1 | Ströläkt 25x38 | box 100..138, 0..1200, 1..26
del s2 | Ströläkt 25x38 | box 700..738, 0..1200, 1..26
del s3 | Ströläkt 25x38 | box 1300..1338, 0..1200, 1..26
del l1 | Bärläkt 25x38 | box 0..1520, 332..370, 26..51
del l2 | Bärläkt 25x38 | box 0..1520, 692..730, 26..51
del l3 | Bärläkt 25x38 | box 0..1520, 1052..1090, 26..51
del v1 | Vindskiva 22x145 | box -22..0, 0..1200, 0..145
del v2 | Vindskiva 22x145 | box 1520..1542, 0..1200, 0..145
del e1 | Betongpanna | box 2200..2500, -50..370, 51..101 | exempel
del e2 | Bärläkt 25x38 | box 2100..2600, 332..370, 26..51 | exempel
---SCENER---
scen Översikt | öga 760,-2000,2500 | mål 760,500,50
scen Fog A – panna mot läkt | öga 1000,-500,700 | mål 750,350,100
scen Fog B – panna vid gavel | öga -600,-300,600 | mål 150,300,100
---SLUT---
`,ie=`BYGGSKOLAN-FACIT
id: tak75-sned-gavel-1
---FRÅGOR---
1. Följer du gaveln blir alla rader sneda, vågorna hamnar fel mot varandra och felet syns över hela taket. Lodlinjen håller taket rakt, och bara sista biten anpassas.
2. 2 Trådspik 2,8x75 (övningsvärde). En kapad panna kan ha tappat sin krok eller stöd och får inte sidfals. Spiken tar lyft och skjuvning.
3. 1 Trådspik 2,8x75 (övningsvärde). Pannan närmast gaveln ligger i randzonen. Blir biten under 100 fördelas det över två pannor eller så flyttas spelet.
4. 10 × 2 = 20 mm. Fullt spel åt ett håll tar bort marginalen, och sidan kan läcka eller låsa sig. Använd lite på varje panna.
5. Sidospel per panna, minsta bredd på kapad panna, hur kapade pannor fästs, om särskild gavelpanna eller gavelbeslag ska användas för en ny panna, och vilket fuktskydd den kapade kanten behöver.
6. Bonus: 4 rader × 360 = 1440, och lutningen 120/1200 = 0,1, så 144 mm.
---LÖSNING---
Lodlinjen sätts från första pannan. Rad 1: c/c 302 tar upp sidospelet. Sista pannan kapas längs en linje 20 från vindskivan. Rad 2 ligger rakt över. Sidospel och minsta bit är övningsvärden.
---MODELL---
del fa1 | Betongpanna | box 1206..1506, -50..370, 51..101
del fc1 | Betongpanna | box 1206..1506, 310..730, 53..103
del fa2 | Betongpanna | box 904..1204, -50..370, 51..101
del fa3 | Betongpanna | box 602..902, -50..370, 51..101
del fa4 | Betongpanna | box 300..600, -50..370, 51..101
del fa5 | Betongpanna | box -2..298, -50..370, 51..101 | kaplinje 120,-50,51 till 162,370,51 behåll 230,160,51
`,ae=`BYGGSKOLAN-ÖVNING
id: tak75-sned-gavel-1
titel: Tak 7.5 N2 – sned gavel: lodlinje, sidospel, kapad panna
typ: bygg
område: Tak
källa: Pannleverantörens anvisning och god praxis. Sidospelet och minsta pannbit är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfoten, 0 på x längst till vänster om gaveln, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Vänstra gaveln är inte vinkelrät mot takfoten: [vindskivan](v1) lutar inåt uppåt fallet. [Högra vindskivan](v2) är rak. Takfallet är utvikt. [Läkten](l1,l2) ligger klar.

**Lodlinje:** om du följer en sned gavel med raderna blir hela taket snett. Därför slår du en lodlinje, rakt upp från takfoten, och håller pannorna lodräta efter den. Bara den sista pannan vid gaveln anpassas.

**Sidospel:** pannorna har lite glapp i sidled. Med det tar du in en liten skillnad över flera pannor, utan att kapa.

**Kapad panna:** den sista pannan kapas så att den följer gaveln. Märk med **Mät ut** och kapa med **Kapa**, pil upp till **Snett (två punkter)**.

**Övningsvärden:**
- Pannan är 300 bred och 420 lång, rad 1 går 50 ut förbi takfoten, radavstånd 360.
- Sidospel 2 mm per panna: c/c 302.
- Första pannan 20 från högra vindskivan.
- Kapad panna: kapkanten 20 från vindskivans insida, längs med vindskivan. Sista pannbiten ska vara minst 100 bred.
- Spik: 2 Trådspik 2,8x75 i kapad panna, 1 i pannan vid gaveln.
---STEG---
1. Lägg första pannan i rad 1 mot [högra vindskivan](v2). Slå lodlinjen rakt upp längs dess vänstra sida.
   koll a1 | Betongpanna | box 1206..1506, -50..370, 51..101 | tolerans 2 | fel 20 från vindskivan, 50 ut förbi takfoten
2. Lägg första pannan i rad 2 rakt ovanför, efter lodlinjen.
   koll c1 | Betongpanna | box 1206..1506, 310..730, 53..103 | tolerans 3 | fel Rakt ovanför, inte åt gaveln
3. Lägg resten av rad 1 åt vänster med sidospel, tre pannor med c/c 302.
   koll a2 | Betongpanna | box 904..1204, -50..370, 51..101 | tolerans 1.5
   koll a3 | Betongpanna | box 602..902, -50..370, 51..101 | tolerans 1.5
   koll a4 | Betongpanna | box 300..600, -50..370, 51..101 | tolerans 1.5
4. Sätt nästa panna med c/c 302 och kapa den snett så att kanten följer [vindskivan](v1), 20 från insidan. Lägg biten som blir kvar och markera två Trådspik 2,8x75.
   koll a5 | Betongpanna | box -2..298, -50..370, 51..101 | kaplinje 120,-50,51 till 162,370,51 behåll 230,160,51 | tolerans 3 | fel Mät 20 från vindskivans insida vid båda ändarna och kapa mellan strecken
   koll fästdon | Trådspik 2,8x75 | 2 st | box 170..280, -40..360, 91..111
   fog: A
5. Markera en Trådspik 2,8x75 i pannan närmast gaveln i rad 1, den hela pannan näst längst till vänster, [fog B](scen Fog B – vid gaveln).
   koll fästdon | Trådspik 2,8x75 | 1 st | box 320..600, -40..360, 91..111
   fog: B
---FRÅGOR---
1. Varför håller du pannorna lodräta efter lodlinjen och följer inte den sneda gaveln med raderna?
2. [Fog A](scen Fog A – kapad panna): Fästdon → Antal/placering → Varför (varför behöver en kapad panna mer infästning?)
3. [Fog B](scen Fog B – vid gaveln): Fästdon → Antal/placering → Varför (vad gör du om biten vid gaveln blir smalare än 100?)
4. Hur mycket kan du ta in med sidospelet på en rad med 10 pannor, och varför ska du inte använda fullt spel åt ett håll?
5. Du får en ny panna. Vilka värden letar du upp i anvisningen när gaveln är sned?
6. *(bonus)* Vindskivan lutar 120 på 1200. Hur mycket flyttar sig kapkanten på rad 5 jämfört med rad 1 med radavståndet 360? Räkna i Bygget → Geometri.
---LEDTRÅDAR---
1. Fog A | Knuff: vad håller en hel panna kvar som den kapade inte har?
2. Fog A | Mer: nabben eller krokbiten kan vara borta.
3. Fog B | Knuff: var börjar randzonen vid gaveln?
4. Fog B | Mer: om biten blir för smal, flytta på spelet eller kapa två pannor.
5. Lodlinje | Knuff: vad händer längre upp om du följer gaveln?
---PEKARE---
takfot | linje 300,0,1 till 1526,0,1
---FOGAR---
fog A | Kapad panna | scen Fog A – kapad panna
pil A | från 2100,100,300 till 2100,100,800 | lyft | Vindsug vid gaveln
utan A | delar e1 | flytta 0,0,300 | Utan extra spik lyfter den kapade biten, för den har tappat en del av sitt grepp.
fog B | Panna vid gaveln | scen Fog B – vid gaveln
pil B | från -300,700,300 till 0,700,300 | skjuv | Vinden trycker mot gaveln
utan B | delar e1 | flytta -150,0,150 | Utan infästning vid gaveln kan vinden ta pannan närmast kapbiten, och raden börjar släppa.
---MODELL---
del p1 | Underlagspapp | box 0..1526, 0..1200, 0..1
del l1 | Bärläkt 25x38 | box 0..1526, 332..370, 26..51
del l2 | Bärläkt 25x38 | box 0..1526, 692..730, 26..51
del v1 | Vindskiva 22x145 | från 89,-50,51 till 214,1200,51 | högkant
del v2 | Vindskiva 22x145 | box 1526..1548, 0..1200, 51..196
del e1 | Betongpanna | box 2000..2300, -50..370, 51..101 | exempel
---SCENER---
scen Översikt | öga 760,-2000,2500 | mål 760,500,50
scen Fog A – kapad panna | öga 100,-700,700 | mål 200,150,90
scen Fog B – vid gaveln | öga 300,-800,700 | mål 450,150,90
---SLUT---
`,oe=`BYGGSKOLAN-FACIT
id: tak76-gavelbeslag-1
---FRÅGOR---
1. Vikt över nock börjar där viket sitter, i nocken, och den övre biten ligger på den undre så att vattnet rinner över skarven. Falsat måste passas ihop nerifrån, och varje ny bit falsas in i den förra.
2. Takskruv 4,8x35, 5 st c/c 400, centrerat (övningsvärde för fästdonet). Mitt på bredden fördelas rörelsen jämnt. Skruven tar lyft och sidkraft.
3. Överlapp 100, ingen skruv genom skarven. Plåten måste kunna röra sig med temperaturen, och ett hål i skarven släpper in vatten.
4. En kort bit håller dåligt och kan lyfta. Blir den kortare kapar du näst sista biten, så att sista blir minst 500.
5. Hur beslaget ska sluta vid nock och takfot, om det ska vara vikt eller falsat, överlapp, skruv c/c, och hur beslaget ansluter mot pannan eller plåten för en ny panna.
6. Bonus: första biten 2000, sedan 1900 per bit. 2000 + 1900 × 2 = 5800, 7300 − 5800 = 1500. Fjärde biten blir 1500 + 100 = 1600 lång.
---LÖSNING---
Vänster: från nock och nedåt, 2900–4900, 1000–3000 och 0–1100. Höger: från takfoten och uppåt, 0–2000, 1900–3900 och 3800–4900. Beslagsbredden är ett övningsvärde.
---MODELL---
del fg1 | Gavelbeslag | box -150..50, 2900..4900, 22..23
del fg2 | Gavelbeslag | box -150..50, 1000..3000, 23..24
del fg3 | Gavelbeslag | box -150..50, 0..1100, 22..23
del fh1 | Gavelbeslag | box 2950..3150, 0..2000, 22..23
del fh2 | Gavelbeslag | box 2950..3150, 1900..3900, 23..24
del fh3 | Gavelbeslag | box 2950..3150, 3800..4900, 22..23
`,se=`BYGGSKOLAN-ÖVNING
id: tak76-gavelbeslag-1
titel: Tak 7.6 N2 – gavelbeslag vikt över nock och falsat
typ: bygg
område: Tak
källa: DM Tak (gavelbeslag) och AMA Hus. Beslagsbredd 200 är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Takfallets nedre vänstra hörn, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Gavlarna ska få sina beslag. Det finns två sätt, och du ska göra båda. [Vänster vindskiva](v1) får ett beslag vikt över nocken. [Höger vindskiva](v2) får ett falsat. Takfallet är utvikt.

**Vikt över nock:** beslaget viks över nocken till andra fallet, så du börjar i nocken och går nedåt. Den övre biten ligger ovanpå den undre. **Falsat:** bitarna falsas ihop, så du börjar vid takfoten och går uppåt.

**Mått (DM Tak):**
- Överlapp 100
- Urklipp 100 i bitens ände där den går över vindskivan
- Sista biten minst 500
- Maskinkanten ska synas
- Skruv c/c 400, centrerat, inte genom överlappet
- Lågfals 15 liggande, 25 stående
- Beslagen är 2000 långa och 200 breda (övningsvärde). Takfallet är 4900.

Beslaget ligger mitt över vindskivans inre kant, 150 ut och 50 in. Bitarna ligger på [vindskivorna](v1,v2) utan höjdskillnad.
---STEG---
1. Lägg första gavelbeslaget (2000 långt) på vänster sida, 150 ut och 50 in över vindskivans inre kant, med övre änden i [nocken](nock).
   koll g1 | Gavelbeslag | box -150..50, 2900..4900, 22..23 | fel Börja vid nocken
   fog: A
2. Lägg nästa gavelbeslag nedåt med 100 överlapp. Lägg sedan sista biten ner till [takfoten](takfot).
   koll g2 | Gavelbeslag | box -150..50, 1000..3000, 23..24 | fel 100 överlapp mot biten ovanför
   koll g3 | Gavelbeslag | box -150..50, 0..1100, 22..23
   fog: B
3. Lägg första gavelbeslaget på höger sida, 150 ut och 50 in, med nedre änden vid [takfoten](takfot).
   koll h1 | Gavelbeslag | box 2950..3150, 0..2000, 22..23 | fel Falsat börjar vid takfoten
4. Lägg nästa bit uppåt med 100 överlapp, och sista biten upp till [nocken](nock).
   koll h2 | Gavelbeslag | box 2950..3150, 1900..3900, 23..24
   koll h3 | Gavelbeslag | box 2950..3150, 3800..4900, 22..23
   fog: B
5. Markera fem Takskruv 4,8x35 i första biten vid nocken: c/c 400, mitt på beslaget, den första 200 från den undre änden. [Fog A](scen Fog A – beslag).
   koll fästdon | Takskruv 4,8x35 | 5 st | box -60..-40, 3050..4750, 12..32 | fel Centrerat på beslaget, och inte i överlappet
   fog: A
---FRÅGOR---
1. Varför börjar beslaget vikt över nock uppifrån, men det falsade nerifrån?
2. [Fog A](scen Fog A – beslag): Fästdon → Antal/placering → Varför (varför centrerat?)
3. [Fog B](scen Fog B – överlapp): Fästdon → Antal/placering → Varför (varför ingen skruv genom överlappet?)
4. Varför ska sista biten vara minst 500, och vad gör du om den blir kortare?
5. Du får en ny panna eller plåt. Vilka värden letar du upp i anvisningen för gavelbeslag?
6. *(bonus)* Takfallet är 7,3 m. Hur många bitar om 2000 med 100 överlapp, och hur lång blir sista biten? Räkna i Bygget → Geometri (Sista biten).
---LEDTRÅDAR---
1. Fog A | Knuff: plåten rör sig med värmen. Vad händer vid kanten?
2. Fog A | Mer: en skruv mitt på bredden låter båda kanterna röra sig lika.
3. Fog B | Knuff: vad händer om två plåtar skruvas ihop och den ena vill röra sig?
4. Fog B | Mer: hålet går igenom två lager, och vatten rinner mot hålet.
5. Riktning | Knuff: vilken del av beslaget ligger överst i nocken?
---PEKARE---
takfot | linje 0,0,1 till 3000,0,1
nock | linje 0,4900,1 till 3000,4900,1
---FOGAR---
fog A | Beslag mot vindskiva | scen Fog A – beslag
pil A | från -600,3900,100 till -250,3900,100 | skjuv | Vinden mot gaveln
pil A | från -400,3200,100 till -400,3200,600 | lyft | Vindsug
utan A | delar e1 | flytta -200,0,200 | Utan skruv bänder vinden upp beslaget från vindskivan.
fog B | Överlapp | scen Fog B – överlapp
pil B | från -500,2400,100 till -500,2850,100 | skjuv | Plåten rör sig längs vindskivan
utan B | delar e1 | flytta 0,200,0 | Skruvar du genom överlappet kan plåten inte röra sig, och den bucklar sig eller drar upp skruven.
---MODELL---
del p1 | Underlagspapp | box 0..3000, 0..4900, 0..1
del v1 | Vindskiva 22x145 | box -145..0, 0..4900, 0..22
del v2 | Vindskiva 22x145 | box 3000..3145, 0..4900, 0..22
del e1 | Gavelbeslag | box 3700..3900, 1000..2200, 22..23 | exempel
---SCENER---
scen Översikt | öga 1500,-3500,6000 | mål 1500,2450,0
scen Fog A – beslag | öga -800,3500,900 | mål -50,3900,20
scen Fog B – överlapp | öga -800,2500,800 | mål -50,2950,20
---SLUT---
`,ce=`BYGGSKOLAN-FACIT
id: tak76-nock-1
---FRÅGOR---
1. Den fria änden vetter bakåt mot den panna som redan ligger. Börjar du i läsidan och lägger mot vinden vetter änden bort från vinden. Lägger du tvärtom tar vinden tag i skarven och kan lyfta pannorna och driva in snö.
2. Trådspik 2,8x75, 6 st c/c 500 längs plankan (övningsvärde för fästdonet). Bandet ska täta mot snö och regn men släppa ut fukt, så det får inte täppa till hela vägen. Fästningen håller det på plats mot vinden.
3. 1 Takskruv 4,8x35 per panna, fog i överlapp (övningsvärde). Skruven tar lyft från vindsug på det mest utsatta stället på taket.
4. En nockpanna genom beslaget skadar plåten och skapar en läckväg. Lämna 10 eller kapa pannan.
5. Nockpannans mått och överlapp, om nockband krävs och vilken typ, ventilation, fästning av nockpannor, hur sista pannan avslutas för en ny panna. Tillverkarens anvisning gäller före videon.
6. Bonus: 8000 / 340 ≈ 24 nockpannor.
---LÖSNING---
Vinden kommer från vänster, så du börjar vid högra gaveln med 10 kvar till gaveln, och lägger åt vänster med c/c 340. Nockbandet ligger mitt över plankan. Överlappet är ett övningsvärde.
---MODELL---
del fb1 | Nockband | box 0..3000, 850..1150, 191..192
del fa1 | Nockpanna | box 2570..2990, 875..1125, 192..242
del fa2 | Nockpanna | box 2230..2650, 875..1125, 194..244
del fa3 | Nockpanna | box 1890..2310, 875..1125, 192..242
`,le=`BYGGSKOLAN-ÖVNING
id: tak76-nock-1
titel: Tak 7.6 N2 – nockband och nockpannor
typ: bygg
område: Tak
källa: DM Tak (nock) och pannleverantörens anvisning. Överlappet 80 är ett övningsvärde. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Nockplankans vänstra ände vid vänstra gaveln, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Nu ska nocken stängas. Nocken går längs [nockplankan](n1) från [vänstra](vänster) till [högra gaveln](höger). Du ser taket utvikt, så båda fallen ligger plant åt var sitt håll från nocken. Vinden kommer mest från vänster.

**Nockband:** ett formbart band som tätar mellan nockpannan och pannorna, men ändå släpper ut fukt från pappen. **Nockpannor bort från vinden:** den fria änden av varje nockpanna ska vetta bort från vinden, så att vinden inte tar tag i skarven. Den ände som ligger på förra pannan vetter bakåt, så du börjar i läsidan och lägger mot vinden.

**Mått (DM Tak och övningsvärden):**
- Nockband 300 brett, mitt över plankan, hela nockens längd. Formbart mot pannorna c/c 500.
- Nockpanna 250 bred och 420 lång, överlapp 80 (övningsvärde), alltså c/c 340.
- Sista pannan får inte gå genom gavelbeslaget: lämna 10 till gaveln.
- Fog i överlapp, en Takskruv 4,8x35 per nockpanna.
---STEG---
1. Lägg nockbandet (300 brett) längs hela [nockplankan](n1), mitt över plankan.
   koll b1 | Nockband | box 0..3000, 850..1150, 191..192 | fel Mitt över plankan
   fog: A
2. Markera sex Trådspik 2,8x75 i bandet längs plankans mitt, c/c 500 med den första 250 från vänstra gaveln.
   koll fästdon | Trådspik 2,8x75 | 6 st | box 200..2800, 985..1015, 181..201 | fel c/c 500 längs plankans mitt
   fog: A
3. Lägg första nockpannan i läsidan, med änden 10 från gaveln. Vinden kommer från vänster.
   koll a1 | Nockpanna | box 2570..2990, 875..1125, 192..242 | fel Börja i läsidan, 10 från gaveln
   fog: B
4. Lägg två nockpannor till mot vinden, c/c 340.
   koll a2 | Nockpanna | box 2230..2650, 875..1125, 194..244 | tolerans 3
   koll a3 | Nockpanna | box 1890..2310, 875..1125, 192..242
5. Markera en Takskruv 4,8x35 i den första nockpannan, [fog B](scen Fog B – nockpanna).
   koll fästdon | Takskruv 4,8x35 | 1 st | box 2570..2990, 875..1125, 232..252
   fog: B
---FRÅGOR---
1. Varför börjar du i läsidan och lägger mot vinden? Vad händer med pannorna om du gör tvärtom?
2. [Fog A](scen Fog A – nockband): Fästdon → Antal/placering → Varför (vad gör nockbandet, och vad får det inte täppa till?)
3. [Fog B](scen Fog B – nockpanna): Fästdon → Antal/placering → Varför (vad händer med nockpannan utan fästning?)
4. Varför får sista nockpannan inte gå genom gavelbeslaget, och vad gör du i stället?
5. Du får en ny panna. Vilka värden letar du upp i anvisningen för nocken?
6. *(bonus)* Hur många nockpannor går åt till en 8 m lång nock med c/c 340? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: vad behöver komma ut genom nocken?
2. Fog A | Mer: bandet ska täta mot snö men andas.
3. Fog B | Knuff: nockpannan är högst på taket. Vad utsätts den för?
4. Fog B | Mer: den håller varandras ändar med skruv eller clips.
5. Vind | Knuff: vilken ände vetter mot vinden när du lägger åt vänster?
---PEKARE---
vänster | linje 0,800,0 till 0,1200,0
höger | linje 3000,800,0 till 3000,1200,0
---FOGAR---
fog A | Nockband | scen Fog A – nockband
pil A | från 3400,1000,600 till 3400,1000,250 | tryck | Nockpannan trycker bandet mot pannorna
utan A | delar n1 | flytta 0,0,120 | Utan nockband blåser snö och regn in under nockpannan.
fog B | Nockpanna | scen Fog B – nockpanna
pil B | från -500,1000,500 till -500,1000,900 | lyft | Vindsug över nocken
utan B | delar e1 | flytta 0,0,300 | Utan fästning lyfter vinden nockpannan, och raden öppnas.
---MODELL---
del n1 | Regel 45x145 | box 0..3000, 977.5..1022.5, 46..191
del p1 | Underlagspapp | box 0..3000, 0..2000, 0..1
del g1 | Gavelbeslag | box 2900..3000, 0..200, 1..2 | tagg Beslag
del g2 | Gavelbeslag | box 0..100, 0..200, 1..2 | tagg Beslag
del e1 | Nockpanna | box 3400..3820, 875..1125, 192..242 | exempel
---SCENER---
scen Översikt | öga 1500,-2000,3000 | mål 1500,1000,100
scen Fog A – nockband | öga 700,500,800 | mål 500,1000,190
scen Fog B – nockpanna | öga 3000,300,800 | mål 2780,1000,220
---SLUT---
`,ue=`BYGGSKOLAN-FACIT
id: tak75-plat-lakt-1
---FRÅGOR---
1. En pannas längd bestämmer överlappet och därför läkten. Plåten är en bärande balk mellan läkterna, så avståndet styrs av hur långt profilen klarar att spänna med snölasten på platsen.
2. 2 Trådspik 3,1x90 i varje korsning (övningsvärde). Spiken tar främst utdrag från vindsuget, eftersom plåten är lätt, och skjuvning längs fallet.
3. Vindsuget är störst vid takfot, gavel och nock. Extra läkten ger en skruvrad till och kortare fritt spann i randzonen. Samma spik, 2 per korsning.
4. Tabellen ger 600 i stället för 900, så fler läkter. Med 900 kan plåten svikta eller få kvarstående buckling under snö.
5. Profil och plåttjocklek, läktavstånd för snölasten, nedersta och översta läktens läge, randzonens extra läkt, minsta lutning, överlapp och skruv per m² för en ny plåt. Tillverkarens anvisning gäller före allmänna råd.
6. Bonus: 7 rader à 3,6 m = 25,2 m, plus spill.
---LÖSNING---
Nedersta läkten 50 från takfoten, extra läkten 300 ovanför, sedan 900 enligt raden för 2,5 kN/m² till sista raden. Översta läkten ligger med övre kanten 50 från nockkanten. Sista mellanrummet blir 710 mellan läkterna, kortare än 900, och det är tillåtet. Alla tal är övningsvärden.
---MODELL---
del fl1 | Bärläkt 45x45 | box 0..3600, 50..95, 26..71
del fl2 | Bärläkt 45x45 | box 0..3600, 350..395, 26..71
del fl3 | Bärläkt 45x45 | box 0..3600, 4705..4750, 26..71
del fr1 | Bärläkt 45x45 | box 0..3600, 1250..1295, 26..71
del fr2 | Bärläkt 45x45 | box 0..3600, 2150..2195, 26..71
del fr3 | Bärläkt 45x45 | box 0..3600, 3050..3095, 26..71
del fr4 | Bärläkt 45x45 | box 0..3600, 3950..3995, 26..71
`,de=`BYGGSKOLAN-ÖVNING
id: tak75-plat-lakt-1
titel: Tak 7.5 N2 – läkt för plåttak enligt tabellen
typ: bygg
område: Tak
källa: Principer enligt plåtleverantörers monteringsanvisningar och AMA Hus. Tabellen är övningsvärden, inte en riktig produkt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Ett takfall ska få profilerad plåt. Takfallet är ritat utvikt (plant): röd längs [takfoten](takfot), grön uppför fallet till [nockkanten](nockkant). Pappen och [ströläkten](s1,s2,s3,s4,s5,s6,s7) är klara.

**Principen:** till plåt styr inte hängande längd läkten, som vid pannor. Plåten är en lång bärande bit, så läktavståndet kommer ur en tabell med plåtens profil och snölasten på platsen. Vid takfoten sitter plåten tätare, för där suger vinden hårdast.

**Övningsplåten (från anvisningen, allt är övningsvärden):**
- Bärläkt 45x45
- Läktavstånd vid snölast 1,5 kN/m²: 1200. Vid 2,5 kN/m²: 900. Vid 3,5 kN/m²: 600.
- Nedersta läkten: 50 från takfoten till läktens nedre kant.
- Extra läkt i randzonen: 300 ovanför nedersta läkten, kant till kant lika.
- Översta läkten: övre kanten 50 från nockkanten.
- Spik: 2 Trådspik 3,1x90 i varje korsning läkt/ströläkt.

Huset ligger där snölasten är 2,5 kN/m². Mät in med **Mät ut**. Läktavståndet räknas från den extra läkten och uppåt. Sista mellanrummet får bli kortare, aldrig längre.
---STEG---
1. Lägg den nedersta bärläkten (45x45) längs hela [takfoten](takfot), med nedre kanten 50 från takfoten.
   koll l1 | Bärläkt 45x45 | box 0..3600, 50..95, 26..71 | fel Mät från takfoten till läktens nedre kant
2. Lägg den extra läkten i randzonen, 300 ovanför den nedersta, mätt från nedre kant till nedre kant.
   koll l2 | Bärläkt 45x45 | box 0..3600, 350..395, 26..71 | fel Mät 300 från nedersta läktens nedre kant
   fog: B
   visa: scen Fog B – extra läkt
3. Lägg den översta läkten med övre kanten 50 från [nockkanten](nockkant).
   koll l3 | Bärläkt 45x45 | box 0..3600, 4705..4750, 26..71 | fel Det är läktens övre kant som ska ligga 50 från nockkanten
4. Läs av läktavståndet för snölasten i tabellen och lägg de fyra läkterna däremellan, räknat från den extra läkten.
   koll r1 | Bärläkt 45x45 | box 0..3600, 1250..1295, 26..71
   koll r2 | Bärläkt 45x45 | box 0..3600, 2150..2195, 26..71
   koll r3 | Bärläkt 45x45 | box 0..3600, 3050..3095, 26..71
   koll r4 | Bärläkt 45x45 | box 0..3600, 3950..3995, 26..71
5. Markera två Trådspik 3,1x90 i [fog A](scen Fog A – läkt mot ströläkt), där första läkten ovanför den extra korsar den [vänstra ströläkten](s1).
   koll fästdon | Trådspik 3,1x90 | 2 st | box 100..138, 1250..1295, 61..81
   fog: A
---FRÅGOR---
1. Varför kommer läktavståndet för plåt ur en tabell med snölast, när det för betongpannor kommer ur pannans längd?
2. [Fog A](scen Fog A – läkt mot ströläkt): Fästdon → Antal/placering → Varför (vilken kraft tar spiken i en plåttaksläkt?)
3. [Fog B](scen Fog B – extra läkt): Varför sitter det en extra läkt nära takfoten? Fästdon → Antal/placering → Varför.
4. Huset flyttas till ett läge med snölast 3,5 kN/m². Vad ändras i läkten, och vad händer på taket om du behåller 900?
5. Du får en ny plåt du aldrig har lagt. Vilka värden letar du upp i anvisningen innan du spikar första läkten?
6. *(bonus)* Takfallet är 3,6 × 4,8 m. Hur många meter bärläkt går åt med din indelning? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: plåten väger lite. Vilken kraft är då störst på läkten?
2. Fog A | Mer: tänk på vinden, som suger uppåt, och på vad spiken gör då.
3. Fog B | Knuff: var på taket suger vinden hårdast?
4. Fog B | Mer: fler läkter ger fler skruvrader där lasten är störst.
5. Tabell | Knuff: en profilerad plåt är en balk som går mellan läkterna. Vad händer med en balk när spännvidden ökar?
---PEKARE---
takfot | linje 0,0,1 till 3600,0,1
nockkant | linje 0,4800,1 till 3600,4800,1
---FOGAR---
fog A | Läkt mot ströläkt | scen Fog A – läkt mot ströläkt
pil A | från 5300,1022,260 till 5300,1022,760 | lyft | Vindsug lyfter läkten genom plåten
utan A | delar e1 | flytta 0,0,300 | Utan spik i korsningen lyfter vindsuget läkten, och plåten följer med.
fog B | Extra läkt vid takfot | scen Fog B – extra läkt
pil B | från -300,370,100 till -300,370,600 | lyft | Vindsuget är störst i randzonen
utan B | delar e1 | flytta 0,0,450 | Utan den extra läkten får plåten en lång fri bit i randzonen, och vindsuget kan bända upp den.
---MODELL---
del p1 | Underlagspapp | box 0..3600, 0..4800, 0..1
del s1 | Ströläkt 25x38 | box 100..138, 0..4800, 1..26
del s2 | Ströläkt 25x38 | box 700..738, 0..4800, 1..26
del s3 | Ströläkt 25x38 | box 1300..1338, 0..4800, 1..26
del s4 | Ströläkt 25x38 | box 1900..1938, 0..4800, 1..26
del s5 | Ströläkt 25x38 | box 2500..2538, 0..4800, 1..26
del s6 | Ströläkt 25x38 | box 3100..3138, 0..4800, 1..26
del s7 | Ströläkt 25x38 | box 3462..3500, 0..4800, 1..26
del e1 | Bärläkt 45x45 | box 4700..5900, 1000..1045, 26..71 | exempel
del e2 | Ströläkt 25x38 | box 5300..5338, 500..1500, 1..26 | exempel
---SCENER---
scen Översikt | öga 1800,-3500,6000 | mål 1800,2400,0
scen Fog A – läkt mot ströläkt | öga 700,700,900 | mål 119,1272,50
scen Fog B – extra läkt | öga 900,-900,800 | mål 500,300,40
---SLUT---
`,fe=`BYGGSKOLAN-FACIT
id: tak75-platlangder-1
---FRÅGOR---
1. Den fria kanten pekar bakåt mot längden som redan ligger. Börjar du i läsidan och lägger mot vinden vetter kanterna bort från vinden. Lägger du tvärtom blåser vinden rakt in i skarvarna och kan lyfta dem och driva in regn.
2. Takskruv 4,8x35 med tätbricka, 6 st, en i varje dal i nedersta läkten (övningsvärde). Vindsuget är störst vid takfoten. I dalen ligger plåten an, så skruven drar den rakt ner. Tätbrickan tätar hålet där vattnet rinner.
3. Takskruv 4,8x35, 3 st c/c 500 i sidöverlappet (övningsvärde). Skruven håller plåtarna ihop mot skjuvning och lyft. Tätheten kommer av skarvens riktning, överlappet och tätbrickan.
4. Vid låg lutning rinner vattnet långsammare och kan tryckas upp i skarven av vind och kapillärkraft. Under minsta lutning kan plåten inte hålla tätt utan tätning, och garantin gäller inte.
5. Täckbredd och sidöverlapp, längdöverlapp per lutning, minsta lutning, utstick vid takfoten, skruvtyp och skruv per m² i randzon och yta, och läggriktning för en ny plåt. Tillverkarens anvisning gäller före allmänna råd.
6. Bonus: 3,6 × 4,8 = 17,28 m² × 6 ≈ 104 skruv, plus takfot och skarvar.
---LÖSNING---
Första längden ligger vid högra gaveln, eftersom vinden kommer från vänster. Den övre längden överlappar 200 eftersom 18° ligger under 22°. Nästa kolumn läggs åt vänster med 100 sidöverlapp. Alla tal är övningsvärden.
---MODELL---
del fp1 | Takplåt profilerad | box 2500..3600, -50..2950, 71..91
del fp2 | Takplåt profilerad | box 2500..3600, 2750..4750, 75..95
del fp3 | Takplåt profilerad | box 1500..2600, -50..2950, 73..93
`,pe=`BYGGSKOLAN-ÖVNING
id: tak75-platlangder-1
titel: Tak 7.5 N2 – plåtlängder: riktning, överlapp, skruv
typ: bygg
område: Tak
källa: Principer enligt plåtleverantörers monteringsanvisningar och AMA Hus. Överlapp och skruv är övningsvärden, inte en riktig produkt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Läkten är klar och plåten ska upp. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet. [Bärläkten](l1,l2,l3,l4,l5,l6,l7) ligger klar.

**Läggriktning:** vinden får inte blåsa in under skarven. Plåtens fria kant vetter bakåt mot den längd som redan ligger, så du börjar i läsidan och lägger mot vinden. Här blåser det mest från vänster.

**Överlapp:** längder uppför fallet läggs så att den övre ligger ovanpå den undre, så att vattnet rinner över skarven. Hur mycket beror på lutningen.

**Övningsplåten (från anvisningen, allt är övningsvärden):**
- Takplåt profilerad: bredd 1100, täckbredd 1000, sidöverlapp 100.
- Utstick förbi takfoten: 50.
- Längdöverlapp: 200 vid lutning under 22°, 150 från 22°.
- Skruv i varje dal i nedersta läkten: 6 st per längd. Skruv i sidöverlappet: c/c 500.

Takets lutning är 18°. Den undre längden är 3000 och den övre 2000. Lägg varje längd direkt på läkten, inte uppe på grannplåten. Bygg godtar några millimeter i höjd.
---STEG---
1. Bestäm vid vilken gavel du börjar och lägg den undre takplåten där, kant i kant med gaveln och 50 ut förbi takfoten.
   koll p1 | Takplåt profilerad | box 2500..3600, -50..2950, 71..91 | fel Börja i läsidan och kolla utsticket vid takfoten
2. Lägg den övre takplåten i samma kolumn, ovanpå den undre med rätt längdöverlapp för takets lutning.
   koll p2 | Takplåt profilerad | box 2500..3600, 2750..4750, 75..95 | tolerans 5 | fel Läs längdöverlappet för rätt lutning
   fog: B
3. Lägg nästa undre takplåt bredvid, mot vinden, med 100 sidöverlapp och 50 ut förbi takfoten.
   koll p3 | Takplåt profilerad | box 1500..2600, -50..2950, 73..93 | tolerans 3
   fog: B
4. Markera sex Takskruv 4,8x35 i [den nedersta läkten](l1) på den första plåten, en i varje dal.
   koll fästdon | Takskruv 4,8x35 | 6 st | box 2500..3600, 50..95, 81..101 | fel En skruv i varje dal
   fog: A
5. Markera Takskruv 4,8x35 c/c 500 i sidöverlappet, på sträckan från [läkten vid randzonen](l2) till [läkten ovanför](l3).
   koll fästdon | Takskruv 4,8x35 | 3 st | box 2500..2600, 350..1400, 81..101
   fog: B
---FRÅGOR---
1. Varför börjar du i läsidan och lägger mot vinden? Vad händer med skarvarna om du gör tvärtom?
2. [Fog A](scen Fog A – skruv i dal): Fästdon → Antal/placering → Varför (varför just i varje dal vid takfoten, och vad gör tätbrickan?)
3. [Fog B](scen Fog B – överlapp): Fästdon → Antal/placering → Varför (vad håller skarven tät?)
4. Varför behövs större längdöverlapp vid lägre lutning? Vad kan hända vid skarven om taket är flackare än plåtens minsta lutning?
5. Du får en ny plåt. Vilka värden letar du upp i anvisningen innan du lyfter upp första längden?
6. *(bonus)* Anvisningen anger 6 skruv/m² på taket i övrigt. Hur många skruv går åt till hela takfallet (3,6 × 4,8 m)? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Riktning | Knuff: vilket håll pekar den fria kanten om du lägger längderna från höger till vänster?
2. Fog A | Knuff: var ligger plåten an mot läkten, i dalen eller på toppen?
3. Fog A | Mer: en skruv i dalen drar plåten rakt ner i läkten, men där rinner också vattnet.
4. Fog B | Knuff: skruven i överlappet håller ihop två plåtar. Vad händer med skarven utan den?
5. Fog B | Mer: det är skarvens läge och överlappet som håller tätt, inte bara tätbrickan.
---PEKARE---
takfot | linje 0,0,1 till 3600,0,1
---FOGAR---
fog A | Skruv i dal vid takfoten | scen Fog A – skruv i dal
pil A | från 4750,500,300 till 4750,500,800 | lyft | Vindsug lyfter plåten
utan A | delar e1 | flytta 0,0,300 | Utan skruv i varje dal vid takfoten lyfter vindsuget plåtens kant, och hela längden kan följa med.
fog B | Överlapp | scen Fog B – överlapp
pil B | från 4200,1000,300 till 4600,1000,300 | skjuv | Vinden trycker sidledes mot skarven
utan B | delar e1 | flytta 200,0,120 | Utan skruv i sidöverlappet glider plåtarna isär, och vind och regn kommer in under skarven.
---MODELL---
del p0 | Underlagspapp | box 0..3600, 0..4800, 0..1
del s1 | Ströläkt 25x38 | box 100..138, 0..4800, 1..26
del s2 | Ströläkt 25x38 | box 1300..1338, 0..4800, 1..26
del s3 | Ströläkt 25x38 | box 2500..2538, 0..4800, 1..26
del s4 | Ströläkt 25x38 | box 3462..3500, 0..4800, 1..26
del l1 | Bärläkt 45x45 | box 0..3600, 50..95, 26..71
del l2 | Bärläkt 45x45 | box 0..3600, 350..395, 26..71
del l3 | Bärläkt 45x45 | box 0..3600, 1250..1295, 26..71
del l4 | Bärläkt 45x45 | box 0..3600, 2150..2195, 26..71
del l5 | Bärläkt 45x45 | box 0..3600, 3050..3095, 26..71
del l6 | Bärläkt 45x45 | box 0..3600, 3950..3995, 26..71
del l7 | Bärläkt 45x45 | box 0..3600, 4705..4750, 26..71
del e1 | Takplåt profilerad | box 4700..5800, 0..2000, 71..91 | exempel
del e2 | Bärläkt 45x45 | box 4700..5800, 500..545, 26..71 | exempel
---SCENER---
scen Översikt | öga 1800,-3500,6000 | mål 1800,2400,0
scen Fog A – skruv i dal | öga 3100,-700,700 | mål 3050,70,80
scen Fog B – överlapp | öga 2550,300,1100 | mål 2550,800,80
---SLUT---
`,me=`BYGGSKOLAN-FACIT
id: tak76-platdetaljer-1
---FRÅGOR---
1. Vattnet från plåten ska rinna ovanpå fotplåten och ut i rännan. Ligger den ovanpå rinner vattnet in under fotplåtens bakkant och ner på pappen.
2. Takskruv 4,8x35, 5 st c/c 400 i den undre biten (övningsvärde). Skruven tar lyft från vindsuget och skjuvning från vinden mot gaveln. Gaveln är randzon.
3. Skruv genom nockplåten ner i plåtens toppar, enligt anvisningen. Tätningen stänger dalarnas öppna ändar mot snö och slagregn och kläms mellan plåt och nockplåt. Skruven tar lyft.
4. Vattnet rinner nedåt, så den övre biten ska ligga ovanpå den undre. Då rinner vattnet över skarven och inte in i den. Börjar du vid takfoten kommer det av sig självt.
5. Fotplåtens utstick, nocktätningens typ och läge, nockplåtens bredd och infästning, gavelbeslagets täckning och överlapp, skruvtyp och c/c för en ny plåt. Tillverkarens anvisning gäller före allmänna råd.
6. Bonus: 3,9 m med 100 överlapp ger 2 bitar per gavel. 4 gavlar × 2 = 8 bitar.
---LÖSNING---
Fotplåten ligger under plåten och går 30 ut. Tätningen ligger 100 under nocken med nockplåten mitt över nocken. Gavelbeslaget börjar vid takfoten, och den övre biten ligger på den undre med 100 överlapp. Alla mått är övningsvärden.
---MODELL---
del ff1 | Fotplåt | box 50..2050, -30..120, 71..72
del fn1 | Nocktätning | box 50..2050, 3750..3800, 92..112
del fn2 | Nockplåt | box 50..2050, 3700..4100, 112..113
del fv1 | Gavelbeslag | box -100..100, 0..2000, 94..95
del fv2 | Gavelbeslag | box -100..100, 1900..3900, 95..96
`,he=`BYGGSKOLAN-ÖVNING
id: tak76-platdetaljer-1
titel: Tak 7.6 N2 – plåt vid takfot, gavel och nock
typ: bygg
område: Tak
källa: Principer enligt plåtleverantörers monteringsanvisningar och AMA Hus. Måtten är övningsvärden, inte en riktig produkt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Plåten är lagd på en liten takdel, och nu ska kanterna tätas. Allt är utvikt. [Takplåtarna](t1,t2) ligger klara. Nocken är [nocklinjen](nocklinje).

**Droppkant:** fotplåten leder vattnet ut förbi takfoten och ner i rännan, så att det inte rinner in bakom. **Gavelbeslag:** täcker övergången mellan plåten och vindskivan. **Nocktätning:** profilens dalar är öppna upptill, och utan tätning blåser snö och regn in under nockplåten.

**Övningsmått (från anvisningen, allt är övningsvärden):**
- Fotplåt: 30 ut förbi takfoten. Kortändarna 50 in från gavlarna, så att gavelbeslaget kan täcka.
- Nocktätning: övre kanten 100 nedanför nocklinjen, rakt över plåtens toppar, kortändarna som fotplåten.
- Nockplåt: 400 bred, mitt över nocklinjen, kortändarna som fotplåten.
- Gavelbeslag: 200 brett, mitt över plåtens kant vid gaveln. Börja vid takfoten. Skarven överlappar 100, och den övre biten ligger ovanpå.
- Skruv i gavelbeslaget: Takskruv 4,8x35 c/c 400.
---STEG---
1. Lägg fotplåten längs [takfoten](takfot), under takplåten, 30 ut förbi takfoten och med kortändarna 50 in från gavlarna.
   koll f1 | Fotplåt | box 50..2050, -30..120, 71..72 | fel Mät utsticket förbi takfoten
2. Lägg nocktätningen ovanpå takplåten, rakt över topparna, med övre kanten 100 nedanför [nocklinjen](nocklinje) och kortändarna som fotplåten.
   koll n1 | Nocktätning | box 50..2050, 3750..3800, 92..112 | fel Övre kanten ska ligga 100 nedanför nocklinjen
   fog: B
3. Lägg nockplåten (400 bred) över tätningen, mitt över [nocklinjen](nocklinje), med kortändarna som fotplåten.
   koll n2 | Nockplåt | box 50..2050, 3700..4100, 112..113
   fog: B
4. Lägg gavelbeslaget (200 brett) längs [vänstra gaveln](gavel), mitt över takplåtens kant. Börja med en hel bit vid takfoten och lägg nästa ovanpå med 100 överlapp.
   koll v1 | Gavelbeslag | box -100..100, 0..2000, 94..95 | tolerans 3
   koll v2 | Gavelbeslag | box -100..100, 1900..3900, 95..96 | tolerans 4 | fel Den övre biten ligger på den undre med 100 överlapp
   fog: A
5. Markera fem Takskruv 4,8x35 i det undre gavelbeslaget, c/c 400 med den första 200 från takfoten.
   koll fästdon | Takskruv 4,8x35 | 5 st | box -100..100, 150..1850, 85..105 | fel c/c 400 längs plåten
   fog: A
---FRÅGOR---
1. Varför läggs fotplåten under plåten och inte ovanpå? Vad händer med vattnet annars?
2. [Fog A](scen Fog A – gavelbeslag): Fästdon → Antal/placering → Varför (vilken kraft tar skruven vid gaveln?)
3. [Fog B](scen Fog B – nockplåt): Fästdon → Antal/placering → Varför (vad gör tätningen, och varför ligger den på topparna av plåten?)
4. Varför börjar gavelbeslaget vid takfoten, och varför ligger den övre biten ovanpå den undre?
5. Du får en ny plåt med andra beslag. Vilka mått och vilka detaljer letar du upp i anvisningen?
6. *(bonus)* Takfallet har två gavlar och är 3,9 m långt. Hur många 2-metersbitar gavelbeslag går åt till båda gavlarna på båda takfallen? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: var på taket suger vinden hårdast, förutom vid takfoten?
2. Fog A | Mer: gaveln får vind både underifrån och från sidan.
3. Fog B | Knuff: titta på plåten från nocken. Är dalarna öppna eller stängda?
4. Fog B | Mer: tätningen behöver klämmas mellan två ytor.
5. Skarv | Knuff: åt vilket håll rinner vattnet längs gavelbeslaget?
---PEKARE---
takfot | linje 0,0,1 till 2100,0,1
nocklinje | linje 0,3900,1 till 2100,3900,1
gavel | linje 0,0,1 till 0,3900,1
---FOGAR---
fog A | Gavelbeslag | scen Fog A – gavelbeslag
pil A | från -500,1000,200 till -150,1000,200 | skjuv | Vinden trycker mot gaveln
pil A | från -300,1500,100 till -300,1500,600 | lyft | Vindsug vid gaveln
utan A | delar t1 | flytta -150,0,180 | Utan skruv och beslag vid gaveln tar vinden tag i kanten och bänder upp plåten.
fog B | Nockplåt med tätning | scen Fog B – nockplåt
pil B | från 2400,3700,500 till 2400,3700,100 | tryck | Nockplåten klämmer tätningen mot plåten
utan B | delar t1,t2 | flytta 0,0,180 | Utan tätning blåser snö och regn in genom dalarna, under nockplåten och ner på pappen.
---MODELL---
del p0 | Underlagspapp | box 0..2100, 0..3900, 0..1
del l1 | Bärläkt 45x45 | box 0..2100, 50..95, 26..71
del l2 | Bärläkt 45x45 | box 0..2100, 1250..1295, 26..71
del l3 | Bärläkt 45x45 | box 0..2100, 2150..2195, 26..71
del l4 | Bärläkt 45x45 | box 0..2100, 3050..3095, 26..71
del l5 | Bärläkt 45x45 | box 0..2100, 3755..3800, 26..71
del t1 | Takplåt profilerad | box 0..1100, -50..3850, 72..92
del t2 | Takplåt profilerad | box 1000..2100, -50..3850, 74..94
---SCENER---
scen Översikt | öga 1000,-3000,5500 | mål 1000,1900,0
scen Fog A – gavelbeslag | öga -1000,900,900 | mål 0,1000,90
scen Fog B – nockplåt | öga 2600,3300,800 | mål 1500,3800,100
scen Sektion vid nocken | öga 1000,6000,100 | mål 1000,3800,100 | snitt y 3775
---SLUT---
`,ge=`BYGGSKOLAN-FACIT
id: tak7-felsok-pannor-1
---FEL---
fel 1 | delar r5 | Ränngaveln sitter mot vindskivan | Rännan får inget utrymme att röra sig, och vatten vid gaveln rinner mot vindskivan | Flytta rännan så att gaveln ligger 15 från vindskivan
fel 2 | delar f2,f3 | Sista fotplåten är 300 lång | För kort bit får för få skruvar och lyfter | Kapa näst sista biten och gör sista biten 600
fel 3 | delar s2 | Ströläkten slutar 250 från takfoten | Bärläkten saknar stöd nederst | Förläng ned till 20 från takfoten
fel 4 | delar p1,p2 | Nockplankans skarv ligger mellan stolarna | Skarven saknar upplag | Lägg skarven mitt på andra stolen
fel 5 | delar g2 | Gavelbeslagets överlapp är bara 30 | Vatten och vind tar sig in | Flytta upp biten till 100 överlapp
---FRÅGOR---
1. Plåten rör sig av temperaturen. Sitter gaveln tätt pressar den mot vindskivan, och vatten kan rinna in bakom.
2. Takskruv c/c 400, inte i krokar, överlapp 100, sista biten minst 500. Skruven tar lyft. En kort bit får bara någon skruv och lyfter.
3. Träskruv 6,0x100, 2 st per stol, skarv mitt på stol. Skarven behöver upplag för tryck från nockpannorna, annars sjunker nocken.
4. Pannorna döljer läkt, fotplåt och beslag. Gå takfot, gavel, nock, och mät innan pannorna läggs. Felen kostar mycket mer när pannorna ligger på.
5. Läktavstånd, hängande längd, minsta lutning, randzonens infästning, nock- och gavellösning, och vilka krav tillverkaren har på underlag för en ny panna.
6. Bonus: 18,7 m² × 10,5 ≈ 196 pannor.
---LÖSNING---
Fem fel: ränngavel, sista fotplåten, ströläkt, nockplankans skarv och gavelbeslagets överlapp. Måtten är övningsvärden.
---MODELL---
del fr5 | Hängränna | box 15..3015, -150..-25, 2795..2875
del ff2 | Fotplåt | från 1900,8.28,2927.79 till 3400,8.28,2927.79 | flatt | upp 0,-0.453990,0.891007
del ff3 | Fotplåt | från 3300,8.74,2926.9 till 3900,8.74,2926.9 | flatt | upp 0,-0.453990,0.891007
del fs8 | Ströläkt 25x38 | från 679,7.38,2929.57 till 679,212.31,3033.99 | flatt
del fp1 | Regel 45x145 | box 0..1222.5, 4254.33..4299.33, 5104.15..5249.15
del fp2 | Regel 45x145 | box 1222.5..3900, 4254.33..4299.33, 5104.15..5249.15
del fg2 | Gavelbeslag | från 65,853.33,3427.94 till 65,2635.34,4335.93 | flatt
`,_e=`BYGGSKOLAN-ÖVNING
id: tak7-felsok-pannor-1
titel: Tak 7 N5 – felsök betongpannetak
typ: felsök
område: Tak
källa: DM Tak och AMA Hus. Övningen samlar fem typiska fel. Måtten är övningsvärden. Där video och tillverkare skiljer sig gäller tillverkaren.
origo: Vänstra gaveln vid takfoten, marken (x 0, y 0, z 0)
---UPPGIFT---
Du kommer till ett hus där laget har slutat innan du fick kontrollera. Huset är ritat som det ser ut på plats: väggar, takstolar, råspont, papp, ränna och vindskivor. Väggarna och marken är bara med för att du ska se helheten. Lutningen är 27°. Pannorna är inte på än, så allt syns.

Titta på [takfoten](takfot), [nocken](nocklinje) och [vänstra vindskivan](v1).

**Det här ska gälla (från övningarna tidigare i serien):**
- Ränngavel 15 från [vindskivan](v1)
- Fotplåt: överlapp 100, sista biten minst 500
- Ströläkten går ner till 20 från takfoten
- Nockplankans skarv ligger mitt på en takstol
- Gavelbeslag: överlapp 100

Det finns **fem fel**, ett för varje punkt. Hitta dem, rätta dem i modellen och skriv varje fel som **Fel → Varför → Åtgärd** i panelen.

Delar i lutning flyttar du längs fallet. Ny ströläkt lägger du med **Placera** och pil upp för att låsa riktningen till fallinjen.
---STEG---
1. Hängrännan sitter fel mot [vänstra vindskivan](v1). Flytta den så att ränngaveln sitter rätt.
   koll r5 | Hängränna | box 15..3015, -150..-25, 2795..2875 | fel Kolla rännans gavel mot vindskivan
2. Fotplåtens skarvar ger en för kort sista bit. Flytta den andra och tredje biten så att sista biten blir 600, med 100 överlapp kvar.
   koll f2 | Fotplåt | från 1900,8.28,2927.79 till 3400,8.28,2927.79 | flatt | upp 0,-0.453990,0.891007 | fel Räkna baklänges från högra gaveln
   koll f3 | Fotplåt | från 3300,8.74,2926.9 till 3900,8.74,2926.9 | flatt | upp 0,-0.453990,0.891007
   fog: A
3. En mittströläkt saknar sin förlängning ner mot takfoten. Lägg den biten.
   koll s8 | Ströläkt 25x38 | från 679,7.38,2929.57 till 679,212.31,3033.99 | flatt | fel Stumskarv, 20 från takfoten
4. Rätta nockplankans skarv så att den ligger mitt på [andra takstolen](t2).
   koll p1 | Regel 45x145 | box 0..1222.5, 4254.33..4299.33, 5104.15..5249.15
   koll p2 | Regel 45x145 | box 1222.5..3900, 4254.33..4299.33, 5104.15..5249.15
   fog: B
5. Ett gavelbeslag har fel överlapp mot biten ovanför. Rätta det.
   koll g2 | Gavelbeslag | från 65,853.33,3427.94 till 65,2635.34,4335.93 | flatt | fel Överlappet mot biten ovanför
---FRÅGOR---
1. Vad händer med ränngaveln när rännan rör sig om den sitter tätt mot vindskivan?
2. [Fog A](scen Fog A – fotplåt): Fästdon → Antal/placering → Varför (vad händer med en för kort sista bit?)
3. [Fog B](scen Fog B – nockplanka): Fästdon → Antal/placering → Varför (vad händer med en skarv utan upplag?)
4. Varför är de här felen svåra att se när pannorna ligger på? I vilken ordning kontrollerar du taket?
5. Du tar över ett tak med en ny panna du aldrig har lagt. Vilka värden letar du upp i anvisningen för att kontrollera det laget gjort?
6. *(bonus)* Hur många pannor går åt till det här takfallet (3,9 × 4,8 m) med 10,5 pannor/m²? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Fog A | Knuff: kolla längden på sista biten.
2. Fog A | Mer: räkna baklänges från gaveln.
3. Fog B | Knuff: var sitter skarven i förhållande till takstolarna?
4. Fog B | Mer: mät från vänster till skarven och jämför med c/c.
5. Ströläkt | Knuff: gå längs takfoten och titta på alla ströläkter.
---PEKARE---
takfot | linje 0,0,2900 till 3900,0,2900
nocklinje | linje 0,4276.83,5104.15 till 3900,4276.83,5104.15
---FOGAR---
fog A | Fotplåt | scen Fog A – fotplåt
pil A | från 3700,-300,2800 till 3700,-300,3300 | lyft | Vindsug under kanten
utan A | delar f3 | flytta 0,-120,200 | En för kort bit har för få skruvar, och vinden lyfter den.
fog B | Nockplanka | scen Fog B – nockplanka
pil B | från 1800,4276.83,5804.15 till 1800,4276.83,5304.15 | tryck | Nockpannornas last
utan B | delar p1,p2 | flytta 0,0,-150 | En skarv mellan takstolarna saknar upplag, och nocken sjunker.
---MODELL---
del m0 | Gräsmatta | box -3000..7000, -3000..11500, -100..0 | miljö | färg 126,160,96
del m1 | Fasad | box 0..3900, 500..695, 0..2655 | miljö | färg 226,218,200
del m2 | Fasad | box 0..3900, 7858.66..8053.66, 0..2655 | miljö | färg 226,218,200
del m3 | Gavelvägg | box 0..195, 500..8053.66, 0..4879.15 | kaplinje 0,0,2700.0 till 0,4276.83,4854.15 behåll 90,4276.83,1000 | kaplinje 0,4276.83,4854.15 till 0,8553.66,2700.0 behåll 90,4276.83,1000 | miljö | färg 226,218,200
del m4 | Gavelvägg | box 3705..3900, 500..8053.66, 0..4879.15 | kaplinje 3705,0,2700.0 till 3705,4276.83,4854.15 behåll 3795,4276.83,1000 | kaplinje 3705,4276.83,4854.15 till 3705,8553.66,2700.0 behåll 3795,4276.83,1000 | miljö | färg 226,218,200
del m5 | Dörr | box 1400..2300, 490..500, 0..2100 | miljö | färg 110,70,50
del h1 | Regel 45x145 | box 0..3900, 530..675, 2655..2700
del h2 | Regel 45x145 | box 0..3900, 7878.66..8023.66, 2655..2700
del t1 | Takstol 45x170 | från 22.5,77.18,2748.53 till 22.5,4354.01,4927.68 | högkant
del b1 | Takstol 45x170 | från 22.5,8476.48,2748.53 till 22.5,4199.65,4927.68 | högkant
del u1 | Takstol 45x170 | box 0..45, 0..8553.66, 2700..2870
del t2 | Takstol 45x170 | från 1222.5,77.18,2748.53 till 1222.5,4354.01,4927.68 | högkant
del b2 | Takstol 45x170 | från 1222.5,8476.48,2748.53 till 1222.5,4199.65,4927.68 | högkant
del u2 | Takstol 45x170 | box 1200..1245, 0..8553.66, 2700..2870
del t3 | Takstol 45x170 | från 2422.5,77.18,2748.53 till 2422.5,4354.01,4927.68 | högkant
del b3 | Takstol 45x170 | från 2422.5,8476.48,2748.53 till 2422.5,4199.65,4927.68 | högkant
del u3 | Takstol 45x170 | box 2400..2445, 0..8553.66, 2700..2870
del t4 | Takstol 45x170 | från 3622.5,77.18,2748.53 till 3622.5,4354.01,4927.68 | högkant
del b4 | Takstol 45x170 | från 3622.5,8476.48,2748.53 till 3622.5,4199.65,4927.68 | högkant
del u4 | Takstol 45x170 | box 3600..3645, 0..8553.66, 2700..2870
del t5 | Takstol 45x170 | från 3877.5,77.18,2748.53 till 3877.5,4354.01,4927.68 | högkant
del b5 | Takstol 45x170 | från 3877.5,8476.48,2748.53 till 3877.5,4199.65,4927.68 | högkant
del u5 | Takstol 45x170 | box 3855..3900, 0..8553.66, 2700..2870
del m6 | Råspont 20x3900 | från 1950,0,2900 till 1950,4276.83,5079.15 | flatt | miljö | färg 232,208,160
del m7 | Papp 1x3900 | från 1950,7.83,2928.68 till 1950,4266.84,5098.76 | flatt | miljö | färg 52,52,56
del m8 | Råspont 20x3900 | från 1950,8553.66,2900 till 1950,4276.83,5079.15 | flatt | miljö | färg 232,208,160
del m9 | Papp 1x3900 | från 1950,8563.65,2919.6 till 1950,4286.82,5098.76 | flatt | miljö | färg 52,52,56
del k1 | Takfotsbräda 22x145 | box 0..3900, -22..0, 2755..2900
del r1 | Rännkrok | från 300,-157.83,2835.3 till 300,64.92,2948.79 | flatt
del r2 | Rännkrok | från 1500,-157.83,2835.3 till 1500,64.92,2948.79 | flatt
del r3 | Rännkrok | från 2700,-157.83,2835.3 till 2700,64.92,2948.79 | flatt
del r4 | Rännkrok | från 3500,-157.83,2835.3 till 3500,64.92,2948.79 | flatt
del r5 | Hängränna | box 0..3000, -150..-25, 2795..2875
del f1 | Fotplåt | från 0,8.74,2926.9 till 2000,8.74,2926.9 | flatt | upp 0,-0.453990,0.891007
del f2 | Fotplåt | från 1900,8.28,2927.79 till 3700,8.28,2927.79 | flatt | upp 0,-0.453990,0.891007
del f3 | Fotplåt | från 3600,8.74,2926.9 till 3900,8.74,2926.9 | flatt | upp 0,-0.453990,0.891007
del s1 | Ströläkt 25x38 | från 119,7.38,2929.57 till 119,4230.75,5081.49 | flatt
del s2 | Ströläkt 25x38 | från 679,212.31,3033.99 till 679,4230.75,5081.49 | flatt
del s3 | Ströläkt 25x38 | från 1239,7.38,2929.57 till 1239,4230.75,5081.49 | flatt
del s4 | Ströläkt 25x38 | från 1799,7.38,2929.57 till 1799,4230.75,5081.49 | flatt
del s5 | Ströläkt 25x38 | från 2359,7.38,2929.57 till 2359,4230.75,5081.49 | flatt
del s6 | Ströläkt 25x38 | från 2919,7.38,2929.57 till 2919,4230.75,5081.49 | flatt
del s7 | Ströläkt 25x38 | från 3479,7.38,2929.57 till 3479,4230.75,5081.49 | flatt
del v1 | Vindskiva 22x145 | från -11,20.6,2837.54 till -11,4306.34,5021.24 | högkant
del v2 | Vindskiva 22x145 | från 3911,20.6,2837.54 till 3911,4306.34,5021.24 | högkant
del p1 | Regel 45x145 | box 0..1800, 4254.33..4299.33, 5104.15..5249.15
del p2 | Regel 45x145 | box 1800..3900, 4254.33..4299.33, 5104.15..5249.15
del g1 | Gavelbeslag | från 65,2546.7,4289.64 till 65,4239.61,5152.22 | flatt
del g2 | Gavelbeslag | från 65,790.96,3396.16 till 65,2572.97,4304.15 | flatt
---SCENER---
scen Översikt | öga 7500,-7000,7000 | mål 1950,3000,3400
scen Fog A – fotplåt | öga 4300,-1500,3700 | mål 3500,40,2930
scen Fog B – nockplanka | öga 2500,1800,6500 | mål 1222,4276.83,5174.15
scen Hängrännan vid vänster gavel | öga -1300,-1300,3300 | mål 150,-60,2850
---SLUT---
`,ve=`BYGGSKOLAN-FACIT
id: tak7-felsok-plat-1
---FEL---
fel 1 | delar l3,l5 | Läkten saknas mellan två rader, så spannet är 1800 | Plåten klarar 900 i tabellen, och den sviktar under snö | Lägg in raden med 900 c/c
fel 2 | delar u1,u2 | Sidöverlappet är bara 30 | Vatten och vind tar sig in i skarven | Flytta plåten så att överlappet blir 100
fel 3 | delar u1,o1 | Längdöverlappet är bara 100 | Vid 18° kräver plåten 200 | Dra ned den övre längden till 200 överlapp
fel 4 | delar n2 | Nocktätning saknas | Snö och regn blåser in genom dalarna | Lägg tätningen under nockplåten
fel 5 | delar f1 | Fotplåten ligger ovanpå plåten | Vattnet rinner in under plåten | Lägg fotplåten under plåten
---FRÅGOR---
1. Ja, läggriktningen är rätt: start i läsidan till höger, och plåtarna läggs mot vinden. Hade plåten börjat till vänster hade de fria kanterna vett mot vinden.
2. Takskruv 4,8x35 i överlapp, c/c 500 (övningsvärde). Sidöverlapp 100 och längdöverlapp 200. Skruven tar lyft och skjuvning, och överlappet håller tätt.
3. Takskruv i nockplåten ner i plåtens toppar, enligt anvisningen. Nocktätningen stänger dalarna. Utan den blåser snö och regn in.
4. Fotplåten och läkten märks oftast sist, när plåten sviktar eller pappen blir fuktig. Sidöverlappet märks först av regn.
5. Läktavstånd, täckbredd, längd- och sidöverlapp, minsta lutning, skruv per m², tätning vid nock och fotplåtens läge för en ny plåt.
6. Bonus: 3,6 m läkt saknas, och spannet blir 1800 i stället för 900.
---LÖSNING---
Fem fel: läkt saknas, sidöverlapp, längdöverlapp, nocktätning och fotplåt ovanpå. Läggriktningen var rätt. Alla tal är övningsvärden.
---MODELL---
del fm1 | Bärläkt 45x45 | box 0..3600, 2150..2195, 26..71
del fu2 | Takplåt profilerad | box 1500..2600, -50..2950, 74..94
del fo1 | Takplåt profilerad | box 2500..3600, 2750..4750, 76..96
del fn1 | Nocktätning | box 1600..3600, 4650..4700, 92..112
del fn2 | Nockplåt | box 1600..3600, 4600..5000, 112..113
del ff1 | Fotplåt | box 1600..3600, -30..120, 71..72
`,ye=`BYGGSKOLAN-ÖVNING
id: tak7-felsok-plat-1
titel: Tak 7 N5 – felsök plåttak
typ: felsök
område: Tak
källa: Principer enligt plåtleverantörers monteringsanvisningar och AMA Hus. Övningsplåtens värden är övningsvärden.
origo: Takfallets nedre vänstra hörn, underlagets underkant (x 0, y 0, z 0)
---UPPGIFT---
Plåttaket är lagt, men något är fel. Du ska kontrollera det innan laget lämnar. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet till [nockkanten](nockkant). Du ser [plåtarna](u1,u2,o1) ligga på [läkten](l1,l2,l3,l5,l6,l7).

**Det här ska gälla (övningsplåten från tidigare övningar, övningsvärden):**
- Läktavstånd 900 från den extra läkten vid takfoten
- Sidöverlapp 100
- Längdöverlapp 200, eftersom lutningen är 18°
- Nocktätning under nockplåten
- Fotplåt under plåten, inte ovanpå

Det finns **fem fel**, ett för varje punkt. Rätta dem i modellen och skriv varje fel som **Fel → Varför → Åtgärd**. Vinden kommer från vänster. Fundera också på om plåten har lagts åt rätt håll, det är fråga 1.
---STEG---
1. En bärläkt (45x45) saknas. Lägg den på rätt läktavstånd.
   koll m1 | Bärläkt 45x45 | box 0..3600, 2150..2195, 26..71 | fel Mät 900 från läkten nedanför
2. Sidöverlappet mellan de två undre takplåtarna är fel. Flytta den vänstra plåten så att överlappet blir rätt.
   koll u2 | Takplåt profilerad | box 1500..2600, -50..2950, 74..94 | fel Mät överlappet mellan plåtarna
   fog: A
3. Den övre takplåten har fel längdöverlapp. Flytta den så att överlappet stämmer för takets lutning.
   koll o1 | Takplåt profilerad | box 2500..3600, 2750..4750, 76..96 | fel Läs längdöverlappet för lutningen
   fog: A
4. Lägg nocktätningen under nockplåten. Rätta sedan nockplåten så att den ligger på tätningen.
   koll n1 | Nocktätning | box 1600..3600, 4650..4700, 92..112
   koll n2 | Nockplåt | box 1600..3600, 4600..5000, 112..113 | fel Den ska ligga ovanpå tätningen
   fog: B
5. Fotplåten ligger ovanpå takplåten. Lägg den under takplåten, 30 ut förbi takfoten.
   koll f1 | Fotplåt | box 1600..3600, -30..120, 71..72 | fel Under plåten, inte ovanpå
---FRÅGOR---
1. Det blåser mest från vänster, och första längden ligger till höger. Är läggriktningen rätt? Vad hade det inneburit om plåten börjat till vänster?
2. [Fog A](scen Fog A – överlapp): Fästdon → Antal/placering → Varför (vad händer med för litet överlapp?)
3. [Fog B](scen Fog B – nock): Fästdon → Antal/placering → Varför (vad händer utan tätning?)
4. Vilket av de fem felen hade märkts först, och vilket hade tagit längst tid innan det syntes?
5. Du tar över ett plåttak med en ny plåt. Vilka värden letar du upp i anvisningen för att kontrollera det?
6. *(bonus)* Hur många meter läkt saknades när raden inte lades på ett tak 3,6 m brett? Hur stort blev spannet där? Räkna i Bygget → Koll.
---LEDTRÅDAR---
1. Fog A | Knuff: mät mellan plåtarnas kanter, inte plåtens längd.
2. Fog A | Mer: vilken lutning har taket, och vad står det i tabellen?
3. Fog B | Knuff: titta i dalarna under nockplåten.
4. Fog B | Mer: hur tätas plåten i dalen?
5. Fotplåt | Knuff: följ vattnet från plåten ned i rännan.
---PEKARE---
takfot | linje 0,0,1 till 3600,0,1
nockkant | linje 0,4800,1 till 3600,4800,1
---FOGAR---
fog A | Överlapp | scen Fog A – överlapp
pil A | från 2400,3000,300 till 2400,3000,800 | lyft | Vindsug
utan A | delar o1 | flytta 0,150,0 | Med för litet överlapp rinner vatten in och vinden tar tag i skarven.
fog B | Nock | scen Fog B – nock
pil B | från 3900,4700,300 till 3700,4700,300 | skjuv | Vind och snö från sidan
utan B | delar n2 | flytta 0,0,180 | Utan tätning blåser snö in genom dalarna, ner på pappen.
---MODELL---
del p0 | Underlagspapp | box 0..3600, 0..4800, 0..1
del s1 | Ströläkt 25x38 | box 100..138, 0..4800, 1..26
del s2 | Ströläkt 25x38 | box 1300..1338, 0..4800, 1..26
del s3 | Ströläkt 25x38 | box 2500..2538, 0..4800, 1..26
del s4 | Ströläkt 25x38 | box 3462..3500, 0..4800, 1..26
del l1 | Bärläkt 45x45 | box 0..3600, 50..95, 26..71
del l2 | Bärläkt 45x45 | box 0..3600, 350..395, 26..71
del l3 | Bärläkt 45x45 | box 0..3600, 1250..1295, 26..71
del l5 | Bärläkt 45x45 | box 0..3600, 3050..3095, 26..71
del l6 | Bärläkt 45x45 | box 0..3600, 3950..3995, 26..71
del l7 | Bärläkt 45x45 | box 0..3600, 4705..4750, 26..71
del u1 | Takplåt profilerad | box 2500..3600, -50..2950, 72..92
del u2 | Takplåt profilerad | box 1430..2530, -50..2950, 74..94
del o1 | Takplåt profilerad | box 2500..3600, 2850..4850, 76..96
del n2 | Nockplåt | box 1600..3600, 4600..5000, 98..99
del f1 | Fotplåt | box 1600..3600, -30..120, 96..97
---SCENER---
scen Översikt | öga 1800,-3500,6000 | mål 1800,2400,0
scen Fog A – överlapp | öga 2600,1500,1200 | mål 2600,2800,90
scen Fog B – nock | öga 3000,3700,900 | mål 3000,4700,100
---SLUT---
`,be=`BYGGSKOLAN-FACIT
id: tak74-plat-fotplat-duk-lakt-1
---FRÅGOR---
1. Vatten som rinner på duken ska ut på fotplåten och vidare till rännan. Ligger duken under fotplåten rinner vattnet in under plåten och ner på takfotsbrädan och i väggen. Fotplåten sitter fast i råsponten först, och duken läggs över (Plannja och Lindab).
2. Ströläkten lyfter bärläkten från duken och ger en spalt längs fallet. Kondens, smältvatten och vatten som blåser in under plåten rinner då ner till takfoten. Ligger bärläkten direkt på duken blir den en dämning: vattnet stannar bakom läkten, kan rinna in vid spikhål och läkten ruttnar. Spalten ventilerar också undersidan av plåten.
3. 2 varmförzinkade Trådspik 3,4x100 i varje korsning (Plannja). Spiken tar lyft från vindsug, som drar i plåten, skruvarna och läkten. Varmförzinkat för att den inte ska rosta.
4. c/c 500 är tillverkarens största spännvidd för plåten med den snölasten. Ett längre fack kan ge nedböjning, bucklor när man går på taket och för få skruvrader. Kortare är alltid okej. Det som styr är plåtens profil och tjocklek, snölasten på orten och om taket ska vara gångbart.
5. Underlaget den gäller för (råspont minst 17 mm, takstolar), läktdimension, ströläktens och bärläktens c/c för snölasten på orten, spik eller skruv och antal per korsning, var nedersta och översta läkten ska sitta, och om det behövs extra läkt vid takfot eller nock.
6. Bonus: ströläkt 7 × 4,8 = 33,6 m. Bärläkt 11 × 3,6 = 39,6 m.
---LÖSNING---
Ströläkt 25x50 c/c 600 från vänstra gaveln, den sista kant i kant med högra. Bärläkt 25x50 kant i kant med takfoten, sedan c/c 500 upp till 4500, och den översta med övre kanten vid nocken (sista facket 200). 2 spik 100x3,4 per korsning. Läktdimension, c/c och spik är Plannjas, lägena vid takfot och nock är övningsvärden.
---MODELL---
del fs1 | Ströläkt 25x50 | box 0..50, 0..4800, 2..27
del fs2 | Ströläkt 25x50 | box 600..650, 0..4800, 2..27
del fs3 | Ströläkt 25x50 | box 1200..1250, 0..4800, 2..27
del fs4 | Ströläkt 25x50 | box 1800..1850, 0..4800, 2..27
del fs5 | Ströläkt 25x50 | box 2400..2450, 0..4800, 2..27
del fs6 | Ströläkt 25x50 | box 3000..3050, 0..4800, 2..27
del fs7 | Ströläkt 25x50 | box 3550..3600, 0..4800, 2..27
del fl1 | Bärläkt 25x50 | box 0..3600, 0..50, 27..52
del fl2 | Bärläkt 25x50 | box 0..3600, 500..550, 27..52
del fl3 | Bärläkt 25x50 | box 0..3600, 1000..1050, 27..52
del fl4 | Bärläkt 25x50 | box 0..3600, 1500..1550, 27..52
del fl5 | Bärläkt 25x50 | box 0..3600, 2000..2050, 27..52
del fl6 | Bärläkt 25x50 | box 0..3600, 2500..2550, 27..52
del fl7 | Bärläkt 25x50 | box 0..3600, 3000..3050, 27..52
del fl8 | Bärläkt 25x50 | box 0..3600, 3500..3550, 27..52
del fl9 | Bärläkt 25x50 | box 0..3600, 4000..4050, 27..52
del fl10 | Bärläkt 25x50 | box 0..3600, 4500..4550, 27..52
del fl11 | Bärläkt 25x50 | box 0..3600, 4750..4800, 27..52
`,xe=`BYGGSKOLAN-ÖVNING
id: tak74-plat-fotplat-duk-lakt-1
titel: Tak 7.4 N2 – plåttak: fotplåt, duk och läkt på råspont
typ: bygg
område: Tak
källa: Plannja monteringsanvisning Tak- och väggprofiler 2024 (Montering läkt, Takfotsbeslag) och Lindab Coverline monteringsanvisning (Fotplåt, underlag och bärläkt). Nedersta och översta läktens läge och fotplåtens utstick är övningsvärden. Läs alltid anvisningen för din plåt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, råspontens ovansida (x 0, y 0, z 0)
---UPPGIFT---
Det gamla taket är rivet ner till råsponten. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet till [nockkanten](nockkant). Takets lutning är 40°. [Fotplåten](f1,f2) och [duken](d1) är redan lagda. Nu ska läkten upp.

**Ordningen vid takfoten:** fotplåten spikas först på råsponten, c/c 500 och minst 100 omlott i skarven. Duken läggs sedan **över** fotplåten, så att vatten som rinner på duken går ut på fotplåten och inte in under den (Plannja: Takfotsbeslag, Lindab: Fotplåt, underlag och bärläkt).

**Ströläkt:** går längs fallet, ovanpå duken. Den lyfter bärläkten från duken, så att vatten och fukt som kommer under plåten kan rinna ner till takfoten (Lindab: Fotplåt, underlag och bärläkt).

**Bärläkt:** går längs takfoten och bär plåten. Avståndet är ett största mått ur tillverkarens tabell, och plåtens profil kan kräva tätare (Plannja: Montering läkt).

**Från Plannjas tabell för träpanel, minst 17 mm (tillverkarens anvisning):**
- Ströläkt 25x50, c/c 600.
- Bärläkt 25x50, c/c 500.
- 2 varmförzinkade spikar 100x3,4 där bärläkten korsar ströläkten.

**Övningsvärden:**
- Första ströläkten kant i kant med vänstra gaveln, den sista kant i kant med högra.
- Nedersta bärläkten kant i kant med takfoten. Översta bärläkten med övre kanten vid nockkanten.
- Mät bärläkten från nedersta läktens nedre kant. Sista mellanrummet får bli kortare än 500, aldrig längre.

Lägg läkten med **Bygg → Virke** (hela längder), flytta med **G** och kopiera med **Ctrl** i Flytta: skriv 600 och sedan till exempel 5x för fem kopior till.
---STEG---
1. Lägg ströläkten 25x50 uppför fallet på duken, från [takfoten](takfot) till [nockkanten](nockkant): den första kant i kant med [vänstra gaveln](vänster gavel), sedan c/c 600, och den sista kant i kant med [högra gaveln](höger gavel).
   koll s1 | Ströläkt 25x50 | box 0..50, 0..4800, 2..27
   koll s2 | Ströläkt 25x50 | box 600..650, 0..4800, 2..27
   koll s3 | Ströläkt 25x50 | box 1200..1250, 0..4800, 2..27
   koll s4 | Ströläkt 25x50 | box 1800..1850, 0..4800, 2..27
   koll s5 | Ströläkt 25x50 | box 2400..2450, 0..4800, 2..27
   koll s6 | Ströläkt 25x50 | box 3000..3050, 0..4800, 2..27
   koll s7 | Ströläkt 25x50 | box 3550..3600, 0..4800, 2..27 | fel Den sista ströläkten ligger kant i kant med högra gaveln
2. Lägg den nedersta bärläkten 25x50 längs [takfoten](takfot), kant i kant med takfoten, och den översta med övre kanten vid [nockkanten](nockkant).
   koll l1 | Bärläkt 25x50 | box 0..3600, 0..50, 27..52 | fel Nedersta läkten kant i kant med takfoten, ovanpå ströläkten
   koll l11 | Bärläkt 25x50 | box 0..3600, 4750..4800, 27..52 | fel Det är läktens övre kant som ska ligga vid nockkanten
3. Lägg bärläkten däremellan med c/c 500, räknat från den nedersta.
   koll l2 | Bärläkt 25x50 | box 0..3600, 500..550, 27..52 | fel c/c 500 från nedersta läktens nedre kant
   koll l3 | Bärläkt 25x50 | box 0..3600, 1000..1050, 27..52
   koll l4 | Bärläkt 25x50 | box 0..3600, 1500..1550, 27..52
   koll l5 | Bärläkt 25x50 | box 0..3600, 2000..2050, 27..52
   koll l6 | Bärläkt 25x50 | box 0..3600, 2500..2550, 27..52
   koll l7 | Bärläkt 25x50 | box 0..3600, 3000..3050, 27..52
   koll l8 | Bärläkt 25x50 | box 0..3600, 3500..3550, 27..52
   koll l9 | Bärläkt 25x50 | box 0..3600, 4000..4050, 27..52
   koll l10 | Bärläkt 25x50 | box 0..3600, 4500..4550, 27..52
4. Markera två Trådspik 3,4x100 i [fog A](scen Fog A – bärläkt mot ströläkt), där den andra bärläkten nerifrån korsar den andra ströläkten från vänster.
   koll fästdon | Trådspik 3,4x100 | 2 st | box 600..650, 500..550, 42..62 | fel Två spik i korsningen, i bärläktens ovansida
   fog: A
---FRÅGOR---
1. Varför spikas fotplåten före duken, och varför ska duken ligga över fotplåten och inte under?
2. Vad gör ströläkten? Vad händer med vatten som kommer in under plåten om bärläkten ligger direkt på duken?
3. [Fog A](scen Fog A – bärläkt mot ströläkt): Fästdon → Antal/placering → Varför (vilken kraft tar spiken i en plåttaksläkt?)
4. Plannja skriver att c/c 500 är det största avståndet och att plåtens profil kan kräva tätare. Varför får sista mellanrummet vid nocken bli kortare men aldrig längre? Vad styr läktavståndet för en profilerad plåt?
5. Du får en ny plåt och ett tak med ett annat underlag. Vilka värden letar du upp i anvisningen innan du spikar första läkten?
6. *(bonus)* Hur många meter ströläkt och bärläkt går åt till takfallet (3,6 × 4,8 m) med din indelning? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Ordning | Knuff: vatten rinner nedåt. Vilket lager ska ligga överst där två lager möts?
2. Ströläkt | Knuff: under plåten kan det bli kondens och smältvatten. Var ska det ta vägen?
3. Fog A | Knuff: plåten är lätt. Vilken kraft är då störst på läkten?
4. Fog A | Mer: vinden suger uppåt, och spiken ska hålla läkten nere.
5. Läktavstånd | Knuff: plåten är en balk mellan läkterna. Vad händer med en balk när spännvidden ökar och snön ligger på?
---PEKARE---
takfot | linje 0,0,2 till 3600,0,2
nockkant | linje 0,4800,2 till 3600,4800,2
vänster gavel | linje 0,0,2 till 0,4800,2
höger gavel | linje 3600,0,2 till 3600,4800,2
---FOGAR---
fog A | Bärläkt mot ströläkt | scen Fog A – bärläkt mot ströläkt
pil A | från 5300,1022,260 till 5300,1022,760 | lyft | Vindsug lyfter läkten genom plåten
utan A | delar e1 | flytta 0,0,300 | Utan spik i korsningen lyfter vindsuget läkten, och plåten följer med.
---MODELL---
del f1 | Fotplåt | box 0..2000, -30..120, 0..1
del f2 | Fotplåt | box 1900..3600, -30..120, 0..1
del d1 | Underlagsduk | box 0..3600, 0..4800, 1..2
del e1 | Bärläkt 25x50 | box 4700..5900, 1000..1050, 27..52 | exempel
del e2 | Ströläkt 25x50 | box 5300..5350, 500..1500, 2..27 | exempel
del r1 | Råspont 20x95 | box 0..3600, 0..95, -20..0
del r2 | Råspont 20x95 | box 0..3600, 95..190, -20..0
del r3 | Råspont 20x95 | box 0..3600, 190..285, -20..0
del r4 | Råspont 20x95 | box 0..3600, 285..380, -20..0
del r5 | Råspont 20x95 | box 0..3600, 380..475, -20..0
del r6 | Råspont 20x95 | box 0..3600, 475..570, -20..0
del r7 | Råspont 20x95 | box 0..3600, 570..665, -20..0
del r8 | Råspont 20x95 | box 0..3600, 665..760, -20..0
del r9 | Råspont 20x95 | box 0..3600, 760..855, -20..0
del r10 | Råspont 20x95 | box 0..3600, 855..950, -20..0
del r11 | Råspont 20x95 | box 0..3600, 950..1045, -20..0
del r12 | Råspont 20x95 | box 0..3600, 1045..1140, -20..0
del r13 | Råspont 20x95 | box 0..3600, 1140..1235, -20..0
del r14 | Råspont 20x95 | box 0..3600, 1235..1330, -20..0
del r15 | Råspont 20x95 | box 0..3600, 1330..1425, -20..0
del r16 | Råspont 20x95 | box 0..3600, 1425..1520, -20..0
del r17 | Råspont 20x95 | box 0..3600, 1520..1615, -20..0
del r18 | Råspont 20x95 | box 0..3600, 1615..1710, -20..0
del r19 | Råspont 20x95 | box 0..3600, 1710..1805, -20..0
del r20 | Råspont 20x95 | box 0..3600, 1805..1900, -20..0
del r21 | Råspont 20x95 | box 0..3600, 1900..1995, -20..0
del r22 | Råspont 20x95 | box 0..3600, 1995..2090, -20..0
del r23 | Råspont 20x95 | box 0..3600, 2090..2185, -20..0
del r24 | Råspont 20x95 | box 0..3600, 2185..2280, -20..0
del r25 | Råspont 20x95 | box 0..3600, 2280..2375, -20..0
del r26 | Råspont 20x95 | box 0..3600, 2375..2470, -20..0
del r27 | Råspont 20x95 | box 0..3600, 2470..2565, -20..0
del r28 | Råspont 20x95 | box 0..3600, 2565..2660, -20..0
del r29 | Råspont 20x95 | box 0..3600, 2660..2755, -20..0
del r30 | Råspont 20x95 | box 0..3600, 2755..2850, -20..0
del r31 | Råspont 20x95 | box 0..3600, 2850..2945, -20..0
del r32 | Råspont 20x95 | box 0..3600, 2945..3040, -20..0
del r33 | Råspont 20x95 | box 0..3600, 3040..3135, -20..0
del r34 | Råspont 20x95 | box 0..3600, 3135..3230, -20..0
del r35 | Råspont 20x95 | box 0..3600, 3230..3325, -20..0
del r36 | Råspont 20x95 | box 0..3600, 3325..3420, -20..0
del r37 | Råspont 20x95 | box 0..3600, 3420..3515, -20..0
del r38 | Råspont 20x95 | box 0..3600, 3515..3610, -20..0
del r39 | Råspont 20x95 | box 0..3600, 3610..3705, -20..0
del r40 | Råspont 20x95 | box 0..3600, 3705..3800, -20..0
del r41 | Råspont 20x95 | box 0..3600, 3800..3895, -20..0
del r42 | Råspont 20x95 | box 0..3600, 3895..3990, -20..0
del r43 | Råspont 20x95 | box 0..3600, 3990..4085, -20..0
del r44 | Råspont 20x95 | box 0..3600, 4085..4180, -20..0
del r45 | Råspont 20x95 | box 0..3600, 4180..4275, -20..0
del r46 | Råspont 20x95 | box 0..3600, 4275..4370, -20..0
del r47 | Råspont 20x95 | box 0..3600, 4370..4465, -20..0
del r48 | Råspont 20x95 | box 0..3600, 4465..4560, -20..0
del r49 | Råspont 20x95 | box 0..3600, 4560..4655, -20..0
del r50 | Råspont 20x95 | box 0..3600, 4655..4750, -20..0
del r51 | Råspont 20x95 | box 0..3600, 4750..4800, -20..0
---SCENER---
scen Översikt | öga 1800,-3500,6000 | mål 1800,2400,0
scen Fog A – bärläkt mot ströläkt | öga 1100,0,900 | mål 625,525,40
scen Vid takfoten | öga 1200,-1200,800 | mål 900,100,0
---SLUT---
`,Se=`BYGGSKOLAN-FACIT
id: tak75-plat-forsta-langden-1
---FRÅGOR---
1. Ungefär 6511 (nere vänster till uppe höger) och 6492 (nere höger till uppe vänster), knappt 20 mm skillnad. Taket är snett: högra gaveln går ut cirka 30 mm på väg upp mot nocken, så hörnet uppe till höger ligger längre ut. Vänstra gaveln är rak.
2. Profilerna är raka och varje längd följer den förra. Ligger första längden efter gaveln står alla längder snett mot takfoten: plåtändarna vid takfoten och nocken går i trappa, skarvarna vid takfoten hamnar fel mot rännan och felet växer mot andra gaveln. Rät vinkel mot takfoten håller raderna raka (Plannja och Lindab säger båda att första plåten ska ligga i 90° mot takfoten).
3. Cirka 30 mm vid nocken (takets kant ligger 30 utanför plåtens kant). 20–30 mm tas upp av gavelbeslaget, som täcker plåtkanten och vindskivan (Plannja: Takmätning). Vid 80 mm räcker inte gavelbeslaget: då får man tänka om innan första plåten läggs, till exempel ett bredare beslag, rätta vindskivan eller fördela felet. Fråga arbetsledaren.
4. Mät 3 m längs takfoten från hörnet och gör ett streck. Mät 4 m uppför från hörnet, ungefär i plåtens riktning, och justera tills det är exakt 5 m snett mellan strecken. Då är vinkeln rät. Är taket litet tar man 1,5-2-2,5. Vill man ha bättre noggrannhet tar man en större triangel, 6-8-10, eftersom ett litet mätfel då betyder mindre.
5. Täckbredd och bredd, sidöverlapp och vilken kant som ligger överst, utstick vid takfoten, var man börjar och läggriktning, minsta lutning, ändöverlapp om plåten skarvas, läktavstånd och skruvschema (var och hur många skruv), och hur stor avvikelse gavelbeslaget klarar.
6. Bonus: 4 hela längder täcker 4000. Det blir 200 kvar vid vänstra gaveln, så en femte längd kapas på längden till 300 bred (200 täckande plus 100 sidöverlapp).
---LÖSNING---
Diagonalerna visar att högra gaveln går ut 30 mm vid nocken. Första plåten läggs i nedre högra hörnet, kant i kant med takets ytterkant vid takfoten, 50 ut och i rät vinkel mot takfoten. Glappet 30 vid nocken täcks av gavelbeslaget. Nästa plåt läggs 1000 till vänster (täckbredden). Utsticket och övningsplåtens mått är övningsvärden.
---MODELL---
del fp1 | Takplåt profilerad | box 3100..4200, -50..4950, 51..71
del fp2 | Takplåt profilerad | box 2100..3200, -50..4950, 51..71
`,Ce=`BYGGSKOLAN-ÖVNING
id: tak75-plat-forsta-langden-1
titel: Tak 7.5 N2 – plåttak: mät taket och lägg första längden
typ: bygg
område: Tak
källa: Plannja monteringsanvisning Tak- och väggprofiler 2024 (takmätning, monteringsriktning, första takprofilen) och Lindab Coverline monteringsanvisning (montering tak). Utsticket vid takfoten och övningsplåtens mått är övningsvärden. Läs alltid anvisningen för din plåt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, dukens underkant (x 0, y 0, z 0)
---UPPGIFT---
Ett gammalt tak har fått ny duk och läkt på råsponten, och nu ska plåten upp. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet till [nockkanten](nockkant). Takets lutning är 40°. [Fotplåten](f1,f2,f3), [duken](d1), [ströläkten](s1,s2,s3,s4,s5,s6,s7,s8) och [bärläkten](l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11) ligger klara.

**Mät taket först:** gamla tak är sällan raka. Mät diagonalerna från hörn till hörn. Är de lika långa är taket rakt. Skiljer de är taket snett, och då ska du veta det innan första plåten ligger (Plannja: Takmätning).

**Första längden styr hela taket:** plåten läggs i rät vinkel mot takfoten, inte efter gaveln. Ligger första längden snett blir alla längder efter den sneda, och vid andra gaveln och vid nocken syns felet. Vinkeln kollar du med 3-4-5: 3 m längs takfoten, 4 m uppför, och då ska det vara 5 m snett emellan (Plannja: Takmätning och Montering av första takprofilen).

**Gaveln tar upp felet:** en liten avvikelse vid gaveln, 20–30 mm, döljs av gavelbeslaget (Plannja: Takmätning). Är den större måste du tänka om innan du börjar.

**Övningsplåten (övningsvärden, inte en riktig produkt):**
- Takplåt profilerad: bredd 1100, täckbredd 1000, profilhöjd 20, längd 5000.
- Utstick förbi takfoten: 50. Kolla alltid din plåts anvisning och var rännan sitter.
- Du börjar vid högra gaveln, i takets nedre högra hörn (Lindab: Montering tak). Plåtens högra kant ligger kant i kant med takets ytterkant vid takfoten.

Mät med **Mät ut**: klicka ett hörn och peka på ett annat, så visar etiketten avståndet. Lägg plåten med **Bygg → Plåt → Takplåt profilerad** direkt på läkten.
---STEG---
1. Mät båda diagonalerna på duken, från [nedre vänstra hörnet](hörn nere vänster) till [övre högra](hörn uppe höger) och från [nedre högra](hörn nere höger) till [övre vänstra](hörn uppe vänster). Skriv måtten i fråga 1.
   visa: scen Översikt
2. Kolla vinkeln med 3-4-5 från [nedre högra hörnet](hörn nere höger): Mät ut 3000 längs takfoten och 4000 rakt uppför, och mät mellan strecken. Mät sedan hur långt [högra gaveln](v2) ligger från din linje uppe vid nocken.
   visa: scen Högra hörnet
3. Lägg första takplåten i nedre högra hörnet, i rät vinkel mot takfoten, kant i kant med takets ytterkant vid takfoten och 50 ut förbi takfoten.
   koll p1 | Takplåt profilerad | box 3100..4200, -50..4950, 51..71 | tolerans 3 | fel Rät vinkel mot takfoten, inte efter gaveln. Kolla också utsticket och var högra kanten ligger vid takfoten
   visa: scen Högra hörnet
4. Lägg nästa takplåt till vänster om den första, med täckbredden 1000 och samma utstick. Lägg den på läkten, inte uppe på första plåten.
   koll p2 | Takplåt profilerad | box 2100..3200, -50..4950, 51..71 | tolerans 3 | fel Täckbredd 1000 från första plåtens högra kant, och samma utstick
---FRÅGOR---
1. Vilka mått fick du på diagonalerna? Vad säger skillnaden om taket, och åt vilket håll är det snett?
2. Varför ska första längden ligga i rät vinkel mot takfoten och inte följa den sneda gaveln? Vad händer längre bort på taket om den ligger snett?
3. Uppe vid nocken blir det ett glapp mellan plåten och [högra vindskivan](v2). Hur stort är det, hur tar du hand om det, och vad gör du om det hade varit 80 mm?
4. Hur gör du 3-4-5 på ett riktigt tak med tumstock eller måttband? Vad gör du om taket är för litet för 3 och 4 meter, eller om du vill ha en noggrannare vinkel?
5. Du får en ny plåt. Vilka värden letar du upp i anvisningen innan du lägger första längden?
6. *(bonus)* Takfoten är 4200 lång och täckbredden 1000. Hur många längder går åt i bredd, och hur bred blir den sista biten vid vänstra gaveln? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Diagonal | Knuff: om taket är rakt är diagonalerna lika långa. Vilken är längst?
2. Diagonal | Mer: den längre diagonalen går mot det hörn som ligger längre ut.
3. Vinkel | Knuff: plåtens profiler är raka. Vad händer om den första står snett och du lägger tio till bredvid?
4. Gavel | Knuff: vad täcker gavelbeslaget?
5. 3-4-5 | Knuff: 6-8-10 och 1,5-2-2,5 är samma triangel.
---PEKARE---
takfot | linje 0,0,1 till 4200,0,1
nockkant | linje 0,4950,1 till 4230,4950,1
hörn nere vänster | 0,0,1
hörn nere höger | 4200,0,1
hörn uppe vänster | 0,4950,1
hörn uppe höger | 4230,4950,1
---MODELL---
del f1 | Fotplåt | box 0..2000, -30..120, -1..0
del f2 | Fotplåt | box 1900..3900, -30..120, -1..0
del f3 | Fotplåt | box 3800..4200, -30..120, -1..0
del d1 | Underlagsduk | box 0..4230, 0..4950, 0..1 | kaplinje 4200,0,0 till 4230,4950,0 behåll 2000,2000,0
del s1 | Ströläkt 25x50 | box 0..50, 0..4950, 1..26
del s2 | Ströläkt 25x50 | box 600..650, 0..4950, 1..26
del s3 | Ströläkt 25x50 | box 1200..1250, 0..4950, 1..26
del s4 | Ströläkt 25x50 | box 1800..1850, 0..4950, 1..26
del s5 | Ströläkt 25x50 | box 2400..2450, 0..4950, 1..26
del s6 | Ströläkt 25x50 | box 3000..3050, 0..4950, 1..26
del s7 | Ströläkt 25x50 | box 3600..3650, 0..4950, 1..26
del s8 | Ströläkt 25x50 | från 4175,0,1 till 4205,4950,1 | flatt
del l1 | Bärläkt 25x50 | box 0..4200, 0..50, 26..51
del l2 | Bärläkt 25x50 | box 0..4203, 500..550, 26..51
del l3 | Bärläkt 25x50 | box 0..4206, 1000..1050, 26..51
del l4 | Bärläkt 25x50 | box 0..4209, 1500..1550, 26..51
del l5 | Bärläkt 25x50 | box 0..4212, 2000..2050, 26..51
del l6 | Bärläkt 25x50 | box 0..4215, 2500..2550, 26..51
del l7 | Bärläkt 25x50 | box 0..4218, 3000..3050, 26..51
del l8 | Bärläkt 25x50 | box 0..4221, 3500..3550, 26..51
del l9 | Bärläkt 25x50 | box 0..4224, 4000..4050, 26..51
del l10 | Bärläkt 25x50 | box 0..4227, 4500..4550, 26..51
del l11 | Bärläkt 25x50 | box 0..4230, 4900..4950, 26..51
del v1 | Vindskiva 22x145 | box -22..0, 0..4950, -74..71
del v2 | Vindskiva 22x145 | från 4211,0,-74 till 4241,4950,-74 | högkant
---SCENER---
scen Översikt | öga 2100,-4500,7000 | mål 2100,2500,0
scen Högra hörnet | öga 4800,-1500,1500 | mål 3900,300,50
scen Vid nocken | öga 4700,5600,1200 | mål 4100,4800,50
---SLUT---
`,we=`BYGGSKOLAN-FACIT
id: tak75-plat-overlapp-skruv-1
---FRÅGOR---
1. Vattnet rinner nedåt. Ligger den övre ovanpå rinner vattnet över skarven och ut på den undre, och ligger den under rinner vattnet in i skarven. Över en läkt ligger skarven an och kan skruvas ihop med skruv i läkten. Läkten ska vara minst 90 bred eller dubbel, så att båda plåtarna får fäste och skruvarna inte hamnar i läktens kant (Plannja).
2. På ett flackt tak rinner vattnet långsammare. Vind och kapillärkraft kan då trycka vattnet uppför in i skarven, så överlappet måste vara längre. Under 14° behövs dessutom tätning i överlappet (Lindab, Plannja).
3. Takskruv 4,8x35 med tätbricka i profilbotten, ner i läkten. Vid plåtens ände i varannan profilbotten och vid sidöverlappet en till varje läkt (Plannja 20-105), eftersom vinden tar tag där först och kanten annars kan bändas upp. I botten ligger plåten an mot läkten, så skruven drar plåten mot läkten utan att trycka ner profilen. Tätbrickan tätar hålet.
4. Fäster man överlappssidan först ligger plåten tätt mot grannen hela vägen. Fäster man andra sidan först kan plåten bukta eller förskjutas, och då går överlappet isär eller glipar.
5. Plåt längre än 12 m rör sig mycket när temperaturen ändras. Ett låst ändöverlapp skulle dra i skruvarna och kunna göra hål eller buckla plåten, så den övre och den undre måste kunna röra sig var för sig (Plannja, Lindab).
6. Nej. Plåt finns i längder upp till 10 m och längre (Plannja 20-105: 700–10000), så en 4,8 m plåt kommer i hela längder och beställs efter takfallets mått. Skarv behövs när takfallet är längre än den längsta plåten som går att få, eller som går att hantera och transportera.
7. Bonus: 10 bottnar, var tredje ger 3 eller 4 skruv per läkt beroende på var man börjar. Med 4 per läkt blir det 5 × 4 = 20 skruv. Lindab skriver dessutom att man ska förskjuta skruvarna en profilbotten för varje läkt.
---LÖSNING---
Undre plåten 2700..3800 vid högra gaveln, 50 ut. Övre plåten ovanpå med 200 överlapp över den dubbla läkten. Nästa plåt till vänster med täckbredden 1000. 5 Takskruv 4,8x35 i varannan profilbotten i nedersta läkten och en skruv per läkt i sidöverlappet. Överlapp och skruvschema är Plannjas (Plannja 20-105). Övningsplåtens mått och läktens läge är övningsvärden.
---MODELL---
del fp1 | Takplåt profilerad | box 2700..3800, -50..2950, 52..72
del fp2 | Takplåt profilerad | box 2700..3800, 2750..5750, 52..72
del fp3 | Takplåt profilerad | box 1700..2800, -50..2950, 52..72
`,Te=`BYGGSKOLAN-ÖVNING
id: tak75-plat-overlapp-skruv-1
titel: Tak 7.5 N2 – plåttak: ändöverlapp, sidöverlapp och skruv
typ: bygg
område: Tak
källa: Plannja monteringsanvisning Tak- och väggprofiler 2024 (Ändöverlapp, Teknisk information Plannja 20-105, Efterföljande profiler) och Lindab Coverline monteringsanvisning (Fastsättning, Ändöverlapp). Övningsplåtens mått, läktens läge och var plåtarna börjar är övningsvärden. Läs alltid anvisningen för din plåt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, råspontens ovansida (x 0, y 0, z 0)
---UPPGIFT---
Ett långt takfall, 5,8 m, där plåten måste skarvas på längden. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet. Takets lutning är 40°. [Duken](d1), [ströläkten](s1,s2,s3,s4,s5,s6,s7) och [bärläkten](l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14) ligger klara. Vid skarven är bärläkten [dubbel](l7,l8).

**Ändöverlapp:** den övre längden ligger ovanpå den undre, så att vattnet rinner över skarven. Överlappet ska ligga över en läkt, och läkten ska vara minst 90 bred eller dubbleras. Hur långt överlappet är beror på lutningen: över 11,3° är det 200, och vid 5,7–6,3° är det 450 (Plannja: Ändöverlapp, Lindab har samma tabell). Är takfallet längre än 12 m behövs ett rörligt ändöverlapp, eftersom plåten rör sig med värmen.

**Skruv:** plåten skruvas i profilbottnarna, där den ligger an mot läkten. Vid plåtens ände sitter skruven tätare än på läkterna däremellan, och vid sidöverlappet sitter det alltid en skruv i varje läkt (Plannja: Plannja 20-105). Fäst varje ny plåt hela vägen upp på överlappssidan först och sedan på andra sidan (Lindab: Fastsättning).

**Från anvisningen (Plannja 20-105, samma sorts plåt som TP20):**
- Vid plåtänden: en skruv i varannan profilbotten.
- På läkterna däremellan: en skruv till varje läkt i var tredje profilbotten.
- Vid sidöverlappet: alltid en skruv till varje läkt.
- Skruv 4,8x35 i läkt.

**Övningsvärden:**
- Övningsplåten är 1100 bred med täckbredd 1000, och den har 10 profilbottnar mellan kanterna.
- Börja vid högra gaveln. Plåten går 50 ut förbi takfoten. Den undre längden är 3000 och den övre 3000.

Lägg varje längd direkt på läkten, inte uppe på grannplåten. Appen godtar några mm i höjd i överlappen.
---STEG---
1. Lägg den undre takplåten vid högra gaveln, kant i kant med gaveln och 50 ut förbi [takfoten](takfot).
   koll p1 | Takplåt profilerad | box 2700..3800, -50..2950, 52..72 | tolerans 3 | fel Kant i kant med högra gaveln och 50 ut förbi takfoten
2. Lägg den övre takplåten i samma kolumn, med 200 ändöverlapp ovanpå den undre, över den dubbla läkten.
   koll p2 | Takplåt profilerad | box 2700..3800, 2750..5750, 52..72 | tolerans 5 | fel 200 ändöverlapp, och överlappet ska ligga över den dubbla läkten
   fog: B
3. Lägg nästa undre takplåt till vänster, med täckbredden 1000 och 50 ut förbi takfoten.
   koll p3 | Takplåt profilerad | box 1700..2800, -50..2950, 52..72 | tolerans 3 | fel Täckbredd 1000, alltså 100 sidöverlapp
4. Markera Takskruv 4,8x35 i [den nedersta läkten](l1) på den första plåten, i varannan profilbotten.
   koll fästdon | Takskruv 4,8x35 | 5 st | box 2760..3800, 0..50, 44..56 | fel En skruv i varannan profilbotten, i botten och inte på toppen
   fog: A
5. Markera Takskruv 4,8x35 i sidöverlappet mellan den första och den nya plåten, en vid var och en av [andra, tredje och fjärde läkten](l2,l3,l4) nerifrån.
   koll fästdon | Takskruv 4,8x35 | 3 st | box 2690..2775, 490..1560, 42..82 | fel En skruv vid varje läkt i sidöverlappet
   fog: A
---FRÅGOR---
1. Varför ska den övre längden ligga ovanpå den undre? Varför ska ändöverlappet ligga över en läkt, och varför ska läkten där vara minst 90 bred eller dubbel?
2. Plannja och Lindab säger 200 i ändöverlapp över 11,3° men 450 vid 6°. Varför behövs längre överlapp när taket är flackare?
3. [Fog A](scen Fog A – skruv vid takfoten): Fästdon → Antal/placering → Varför. Varför sitter skruvarna tätare vid plåtens ände och vid sidöverlappet, och varför i profilbotten?
4. Lindab skriver att en ny plåt ska fästas hela vägen upp på överlappssidan först, och sedan på andra sidan. Varför?
5. Varför måste ändöverlappet vara rörligt när takfallet är längre än 12 m?
6. Holmgrens takfall är ungefär 4,8 m. Behöver ni skarva plåten där? Vad bestämmer om plåten kommer i hela längder eller måste skarvas?
7. *(bonus)* Plannja säger var tredje profilbotten på läkterna däremellan. Hur många skruv blir det på den undre plåten på de fem läkterna mellan takfoten och skarven, utan sidöverlappet? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Överlapp | Knuff: åt vilket håll rinner vattnet över skarven?
2. Överlapp | Mer: på ett flackt tak rinner vattnet långsammare och kan tryckas uppåt av vind och kapillärkraft.
3. Fog A | Knuff: var tar vinden tag i plåten först?
4. Fog A | Mer: plåten ligger an mot läkten i botten. En skruv på toppen trycker ner profilen.
5. Fastsättning | Knuff: vad händer med överlappet om du skruvar mitten först och plåten buktar?
6. Rörelse | Knuff: hur mycket längre blir en lång plåt i solen jämfört med en kall natt?
---PEKARE---
takfot | linje 0,0,2 till 3800,0,2
---FOGAR---
fog A | Skruv vid takfoten och i sidöverlappet | scen Fog A – skruv vid takfoten
pil A | från 3300,300,300 till 3300,300,800 | lyft | Vindsug lyfter plåten vid takfoten
utan A | delar p1 | flytta 0,0,300 | Utan skruv i varannan dal vid takfoten tar vinden tag i plåtens ände, och hela längden kan lyfta.
fog B | Ändöverlapp | scen Fog B – ändöverlapp
pil B | från 3300,2850,500 till 3300,2850,100 | tryck | Den övre längden ligger på den undre över läkten
utan B | delar p1 | flytta 0,-200,0 | Med för kort överlapp eller utan läkt under kan vattnet tryckas in i skarven och plåten svikta där.
---MODELL---
del d1 | Underlagsduk | box 0..3800, 0..5800, 1..2
del s1 | Ströläkt 25x50 | box 0..50, 0..5800, 2..27
del s2 | Ströläkt 25x50 | box 600..650, 0..5800, 2..27
del s3 | Ströläkt 25x50 | box 1200..1250, 0..5800, 2..27
del s4 | Ströläkt 25x50 | box 1800..1850, 0..5800, 2..27
del s5 | Ströläkt 25x50 | box 2400..2450, 0..5800, 2..27
del s6 | Ströläkt 25x50 | box 3000..3050, 0..5800, 2..27
del s7 | Ströläkt 25x50 | box 3750..3800, 0..5800, 2..27
del l1 | Bärläkt 25x50 | box 0..3800, 0..50, 27..52
del l2 | Bärläkt 25x50 | box 0..3800, 500..550, 27..52
del l3 | Bärläkt 25x50 | box 0..3800, 1000..1050, 27..52
del l4 | Bärläkt 25x50 | box 0..3800, 1500..1550, 27..52
del l5 | Bärläkt 25x50 | box 0..3800, 2000..2050, 27..52
del l6 | Bärläkt 25x50 | box 0..3800, 2500..2550, 27..52
del l7 | Bärläkt 25x50 | box 0..3800, 2850..2900, 27..52
del l8 | Bärläkt 25x50 | box 0..3800, 2900..2950, 27..52
del l9 | Bärläkt 25x50 | box 0..3800, 3400..3450, 27..52
del l10 | Bärläkt 25x50 | box 0..3800, 3900..3950, 27..52
del l11 | Bärläkt 25x50 | box 0..3800, 4400..4450, 27..52
del l12 | Bärläkt 25x50 | box 0..3800, 4900..4950, 27..52
del l13 | Bärläkt 25x50 | box 0..3800, 5400..5450, 27..52
del l14 | Bärläkt 25x50 | box 0..3800, 5750..5800, 27..52
del v1 | Vindskiva 22x145 | box -22..0, 0..5800, -73..72
del v2 | Vindskiva 22x145 | box 3800..3822, 0..5800, -73..72
---SCENER---
scen Översikt | öga 1900,-4000,7500 | mål 1900,2900,0
scen Fog A – skruv vid takfoten | öga 3300,-1200,1200 | mål 3250,100,60
scen Fog B – ändöverlapp | öga 4600,2200,900 | mål 3300,2850,60
---SLUT---
`,g=`BYGGSKOLAN-FACIT
id: tak76-plat-skorsten-1
---FRÅGOR---
1. Vattnet som rinner ner mot skorstenen samlas på ovansidan. Där ska tätningen (WFLEX) och skorstensbeslagets bakstycke ligga och leda vattnet runt skorstenen, och det behöver plats. Därför är hålet 150 större i överkant (Lindab).
2. En vinkelslip hettar upp plåten, så att zinken och färgen förstörs, och de heta spånen bränner fast i färgen och rostar. Nibblingsmaskin eller plåtsax klipper kallt (Lindab och Plannja). Klippkanterna bättringsmålas och spånen sopas bort.
3. En lång plåt med ett slutet hål går inte att få ner över en skorsten som står upp. Och ovanför skorstenen ska en egen plåt ligga ovanpå tätningen och den undre plåten, så att vattnet leds ut över skarven (Lindab: lägg en plåt överst, från nock till skorstenen).
4. Tätningsremsa runt skorstenen och papp över, sedan plåten med urklippet, sedan tätningsremsa ovanpå plåten, och överst plåten från nocken. Skorstensbeslaget sätts sist och leder vattnet runt. Lindab beskriver ordningen. På Holmgrens tak klipper ni och lägger plåten, och plåtslagaren gör beslaget runt skorstenen.
5. Båda plåtarna får urklipp, ett på var sida om skarven, och skarven ska ändå ha sitt överlapp. Mät in varje plåt för sig från skorstenens sidor. Ibland kan man flytta indelningen lite, så att skarven inte hamnar vid skorstenen.
6. Hur mycket större hålet ska vara (i överkant, på sidorna och nedtill), vilken tätning som ska in och i vilken ordning, hur plåten ovanför ska ligga, vilket verktyg man får klippa med och hur kanterna ska skyddas.
---LÖSNING---
Undre plåten 1700..2800, 50 ut förbi takfoten, med urklipp 1980..2520 och 2180 upp till plåtens ände 2950 (skorstenen 2000..2500 och 2200..2800, 20 glapp på sidorna och nedtill, 150 i överkant). Övre plåten 2800..4800 i samma kolumn, från skorstenens ovansida upp mot nocken. 150 i överkant är Lindabs, resten är övningsvärden.
---MODELL---
del fp2 | Takplåt profilerad | box 1700..2800, -50..2950, 52..72 | urtag box 1980..2520, 2180..2950, 40..80
del fp3 | Takplåt profilerad | box 1700..2800, 2800..4800, 52..72
`,_=`BYGGSKOLAN-ÖVNING
id: tak76-plat-skorsten-1
titel: Tak 7.6 N2 – plåttak: plåten runt skorstenen
typ: bygg
område: Tak
källa: Lindab Coverline monteringsanvisning (Skorsten) och Plannja monteringsanvisning Tak- och väggprofiler 2024 (Verktyg). Skorstenens mått och läge, glappet på sidorna och nedtill och plåtlängderna är övningsvärden. Skorstensbeslaget görs av plåtslagaren. Läs alltid anvisningen för din plåt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, råspontens ovansida (x 0, y 0, z 0)
---UPPGIFT---
Plåten läggs från högra gaveln, och nu kommer du fram till [skorstenen](sk). Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet till [nocklinjen](nocklinje). Takets lutning är 40°. [Duken](d1), läkten och [den första plåten](p1) ligger klara.

**Ordningen vid skorstenen (Lindab: Skorsten):**
1. Tätningsremsa (Lindab WFLEX) runt skorstenen och papp över, innan plåten kommer.
2. Lägg plåten där den ska ligga och mät in urklippet för skorstenen. **Hålet ska vara 150 större i överkant**, alltså på skorstenens ovansida, så att det finns plats för tätningen bakom skorstenen.
3. Klipp med nibblingsmaskin eller plåtsax, aldrig med vinkelslip. Vinkelslipen bränner sönder färgen och zinken (Lindab och Plannja).
4. Lägg den urklippta plåten och fortsätt med plåten bredvid.
5. Tätningsremsa runt skorstenen ovanpå plåten.
6. **Lägg en plåt överst, från nocken ner till skorstenen.**

På Holmgrens tak gör plåtslagaren skorstensbeslaget, men ni klipper hålet och lägger plåten.

**Övningsvärden:**
- Skorstenen är 500 bred och 600 lång i fallet.
- Glapp i urklippet: 20 på sidorna och nedtill, 150 i överkant (Lindab).
- Den undre plåten är 3000 och går 50 ut förbi takfoten. Då slutar den precis 150 ovanför skorstenen, så urklippet blir öppet uppåt.
- Den övre plåten är 2000 och går från skorstenens ovansida upp mot nocken.
- Plåtarna ligger i kolumnen till vänster om den första, med täckbredden 1000.

Mät in med **Mät ut** på plåten och gör urklippet med **Urklipp** i plåtens meny (eller Kapa och pil upp till Urklipp): klicka två motsatta hörn. Plåten ritas platt när den har ett urklipp.
---STEG---
1. Lägg den undre plåten (3000) i kolumnen till vänster om [den första plåten](p1), 50 ut förbi takfoten. Mät in urklippet för [skorstenen](sk) med Mät ut: 20 utanför skorstenens sidor, 20 under den, och upp till plåtens övre ände (150 ovanför skorstenen).
   visa: scen Vid skorstenen
2. Gör urklippet med Urklipp så att plåten går runt skorstenen.
   koll p2 | Takplåt profilerad | box 1700..2800, -50..2950, 52..72 | urtag box 1980..2520, 2180..2950, 40..80 | tolerans 5 | fel Plåten ska ligga 50 ut förbi takfoten med täckbredden 1000. Hålet: 20 utanför skorstenens sidor och under, och upp till plåtens övre ände
   fog: A
3. Lägg den övre plåten (2000) i samma kolumn, från skorstenens ovansida upp mot nocken, ovanpå den undre plåtens ände.
   koll p3 | Takplåt profilerad | box 1700..2800, 2800..4800, 52..72 | tolerans 5 | fel Plåtens nedre ände vid skorstenens ovansida, i samma kolumn
   fog: B
---FRÅGOR---
1. Varför ska hålet vara 150 större just i överkant, på skorstenens ovansida? Vad ska ligga där?
2. [Fog A](scen Vid skorstenen): Varför klipper man med nibblingsmaskin eller plåtsax och aldrig med vinkelslip? Vad gör du med klippkanterna efteråt?
3. [Fog B](scen Ovanför skorstenen): Varför läggs en egen plåt från nocken ner till skorstenen, i stället för att den undre plåten går hela vägen till nocken med ett hål i?
4. I vilken ordning kommer tätningsremsan, pappen, plåten och skorstensbeslaget? Vad är ditt jobb och vad är plåtslagarens på Holmgrens tak?
5. Skorstenen hamnar ofta mitt över en skarv mellan två plåtar. Vad gör du då?
6. Du får en ny plåt och en ny skorsten. Vilka mått och detaljer letar du upp i anvisningen innan du klipper?
---LEDTRÅDAR---
1. Överkant | Knuff: vattnet som rinner ner mot skorstenen måste ledas runt den. Var samlas det?
2. Klipp | Knuff: vad händer med färgen och zinken när plåten blir het?
3. Övre plåt | Knuff: hur får du ner en lång plåt med hål över en skorsten som står upp?
4. Ordning | Knuff: vatten rinner nedåt. Vilket lager ska ligga överst vid skorstenens ovansida?
---PEKARE---
takfot | linje 0,0,2 till 3800,0,2
nocklinje | linje 0,4850,2 till 3800,4850,2
---FOGAR---
fog A | Urklipp runt skorstenen | scen Vid skorstenen
pil A | från 2250,3600,300 till 2250,2900,300 | tryck | Vattnet rinner ner mot skorstenens ovansida
utan A | delar p1 | flytta 0,0,150 | Utan plats i överkant finns det inget utrymme för tätningen bakom skorstenen, och vattnet rinner in vid hålet.
fog B | Plåt från nocken till skorstenen | scen Ovanför skorstenen
pil B | från 2250,4500,500 till 2250,3000,500 | tryck | Den övre plåten leder vattnet ut över tätningen och den undre plåten
utan B | delar p1 | flytta 0,0,150 | Utan överlapp vid skorstenens ovansida rinner vattnet in under plåten.
---MODELL---
del d1 | Underlagsduk | box 0..3800, 0..4850, 1..2
del s1 | Ströläkt 25x50 | box 0..50, 0..4850, 2..27
del s2 | Ströläkt 25x50 | box 600..650, 0..4850, 2..27
del s3 | Ströläkt 25x50 | box 1200..1250, 0..4850, 2..27
del s4 | Ströläkt 25x50 | box 1800..1850, 0..4850, 2..27
del s5 | Ströläkt 25x50 | box 2400..2450, 0..4850, 2..27
del s6 | Ströläkt 25x50 | box 3000..3050, 0..4850, 2..27
del s7 | Ströläkt 25x50 | box 3600..3650, 0..4850, 2..27
del s8 | Ströläkt 25x50 | box 3750..3800, 0..4850, 2..27
del l1 | Bärläkt 25x50 | box 0..3800, 0..50, 27..52
del l2 | Bärläkt 25x50 | box 0..3800, 500..550, 27..52
del l3 | Bärläkt 25x50 | box 0..3800, 1000..1050, 27..52
del l4 | Bärläkt 25x50 | box 0..3800, 1500..1550, 27..52
del l5 | Bärläkt 25x50 | box 0..3800, 2000..2050, 27..52
del l6 | Bärläkt 25x50 | box 0..3800, 2500..2550, 27..52
del l7 | Bärläkt 25x50 | box 0..3800, 3000..3050, 27..52
del l8 | Bärläkt 25x50 | box 0..3800, 3500..3550, 27..52
del l9 | Bärläkt 25x50 | box 0..3800, 4000..4050, 27..52
del l10 | Bärläkt 25x50 | box 0..3800, 4500..4550, 27..52
del l11 | Bärläkt 25x50 | box 0..3800, 4800..4850, 27..52
del p1 | Takplåt profilerad | box 2700..3800, -50..4800, 52..72
del sk | Betong | box 2000..2500, 2200..2800, 2..1000 | miljö
del v1 | Vindskiva 22x145 | box -22..0, 0..4850, -73..72
del v2 | Vindskiva 22x145 | box 3800..3822, 0..4850, -73..72
---SCENER---
scen Översikt | öga 1900,-3500,6500 | mål 1900,2400,0
scen Vid skorstenen | öga 2250,800,2200 | mål 2250,2500,60
scen Ovanför skorstenen | öga 2250,5800,2200 | mål 2250,3200,60
---SLUT---
`,v=`BYGGSKOLAN-FACIT
id: tak76-plat-gavel-nock-1
---FRÅGOR---
1. Gavelbeslaget ska ligga an mot både plåtens toppar och vindskivan. Sitter vindskivan för lågt hänger beslaget fritt och kan bucklas eller släppa in vatten. Sitter den för högt står beslaget snett och vattnet rinner mot vindskivan (Plannja: vindskivans överkant i höjd med profiltopparna).
2. Takskruv 4,8x35 genom beslaget in i vindskivan, c/c 300 enligt Plannja (Lindab c/c 400 för sitt beslag). Det är anvisningen för plåten och beslagen ni har köpt som gäller. Kolla följesedeln eller tillverkarens anvisning, eller fråga arbetsledaren. Skruven tar vindsug (lyft) och vind från sidan mot gaveln.
3. Plannja säger skruv i varannan profiltopp, Lindab i varje profiltopp. Nockplåten ligger på topparna, och en skruv i toppen drar plåt mot plåt utan att trycka ner dalen, och sitter där vattnet inte rinner. Tätningsbandet stänger de öppna dalarna mot nocken, så att snö och regn inte blåser in under nockplåten.
4. Uppviket stänger dalen i plåtens överkant. Utan det kan vatten och snö som blåser uppför dalarna komma över plåtens kant och ner på duken.
5. Nockplåten måste ha samma vinkel som nocken, alltså 180° − 2 × 40° = 100° mellan benen. Ett beslag för ett flackare tak passar inte. Beställ eller bocka efter takvinkeln.
6. Bonus: varje gavel på varje fall är cirka 4,85 m. Med 100 omlott täcker 3 bitar 3 × 2000 − 2 × 100 = 5800, så det blir 3 bitar per gavel och fall: 2 gavlar × 2 fall × 3 = 12 bitar. Nocken 3,8 m: 2 × 2000 − 200 = 3800, alltså 2 nockplåtar.
---LÖSNING---
Gavelbeslaget börjar vid plåtens nedre ände med kanten ner utanför vindskivan. Nästa bit ovanpå med 100 omlott. 6 Takskruv 4,8x35 c/c 300 från 100 över nedre änden upp till skarven. Nockplåten mitt över nocken på tätningen, från högra vindskivans utsida, nästa bit ovanpå med 200 omlott. Skruvavstånd och omlott är Plannjas, beslagens bredd och var bitarna börjar är övningsvärden.
---MODELL---
del fg1 | Gavelbeslag | box 3578..3778, -50..1950, 72..73
del fg2 | Gavelbeslag | box 3578..3778, 1850..3850, 73..74
del fk1 | Nockplåt | box 1778..3778, 4600..5000, 92..93
del fk2 | Nockplåt | box -22..1978, 4600..5000, 93..94
`,y=`BYGGSKOLAN-ÖVNING
id: tak76-plat-gavel-nock-1
titel: Tak 7.6 N2 – plåttak: gavelbeslag och nockplåt
typ: bygg
område: Tak
källa: Plannja monteringsanvisning Tak- och väggprofiler 2024 (Takfotsbeslag, Gavelbeslag, Nockbeslag) och Lindab Coverline monteringsanvisning (Beslag). Beslagens bredd, nocktätningens läge, var bitarna börjar och övningsplåtens mått är övningsvärden. Läs alltid anvisningen för din plåt.
origo: Takfallets nedre vänstra hörn: takfoten vid vänstra gaveln, råspontens ovansida (x 0, y 0, z 0)
---UPPGIFT---
Plåten ligger på takfallet, och nu ska gaveln och nocken tätas. Takfallet är utvikt: röd längs [takfoten](takfot), grön uppför fallet till [nocklinjen](nocklinje). Takets lutning är 40°. [Takplåtarna](t1,t2,t3,t4), [vindskivorna](v1,v2) och [nocktätningen](n0) ligger klara.

**Vindskivan:** monteras med överkanten i höjd med plåtens profiltoppar, så att gavelbeslaget ligger plant över plåten och vindskivan (Plannja: Takfotsbeslag).

**Gavelbeslag:** täcker plåtens kant och vindskivan. Det skruvas i vindskivan och skarvas 100 omlott. Den övre biten ligger ovanpå den undre, så att vattnet rinner över skarven (Plannja: Gavelbeslag). Lindab skriver c/c 400 för sitt beslag. Det är anvisningen för din plåt som gäller.

**Nock:** tätningsband läggs på plåten och nockplåten ovanpå. Nockplåten skruvas i profiltopparna, och skarven är 200 omlott. Profilbotten viks upp i plåtens överkant (Plannja: Nockbeslag, Lindab: Beslag).

**Från anvisningen (Plannja):**
- Gavelbeslag: Takskruv 4,8x35 c/c 300 i vindskivan, skarv 100 omlott.
- Nockplåt: tätningsband under, skruv i varannan profiltopp, skarv 200 omlott.

**Övningsvärden:**
- Gavelbeslaget är 200 brett. Kanten som viks ner ska ligga utanför [högra vindskivan](v2). Börja vid plåtens nedre ände. Första skruven 100 från nedre änden.
- Nockplåten är 400 bred och läggs mitt över [nocklinjen](nocklinje). Börja vid högra gaveln, med kortändan kant i kant med vindskivans utsida.

Lägg beslagen med **Bygg → Plåt**. Lägg dem ovanpå plåten och ovanpå varandra, inte under.
---STEG---
1. Lägg det nedre gavelbeslaget längs [högra gaveln](höger gavel), med kanten ner utanför vindskivan, från plåtens nedre ände.
   koll g1 | Gavelbeslag | box 3578..3778, -50..1950, 72..73 | tolerans 3 | fel Kanten ner ska ligga mot vindskivans utsida, och beslaget börjar vid plåtens nedre ände
   fog: A
2. Lägg nästa gavelbeslag ovanför, ovanpå det nedre med 100 omlott.
   koll g2 | Gavelbeslag | box 3578..3778, 1850..3850, 73..74 | tolerans 4 | fel Den övre biten ligger ovanpå den undre, 100 omlott
   fog: A
3. Markera Takskruv 4,8x35 i det nedre gavelbeslaget, genom beslaget in i vindskivan, c/c 300 med den första 100 från nedre änden, upp till skarven.
   koll fästdon | Takskruv 4,8x35 | 6 st | box 3578..3790, 40..1800, -80..85 | fel c/c 300 längs beslaget, första 100 från nedre änden
   fog: A
4. Lägg den första nockplåten mitt över [nocklinjen](nocklinje), ovanpå [nocktätningen](n0), med kortändan kant i kant med högra vindskivans utsida.
   koll k1 | Nockplåt | box 1778..3778, 4600..5000, 92..93 | tolerans 3 | fel Mitt över nocklinjen och kortändan vid vindskivans utsida
   fog: B
5. Lägg nästa nockplåt till vänster, ovanpå den första med 200 omlott.
   koll k2 | Nockplåt | box -22..1978, 4600..5000, 93..94 | tolerans 4 | fel 200 omlott, och den nya biten ligger ovanpå
   fog: B
---FRÅGOR---
1. Varför ska vindskivans överkant ligga i höjd med plåtens profiltoppar? Vad händer med gavelbeslaget om vindskivan sitter för lågt eller för högt?
2. [Fog A](scen Fog A – gavelbeslag): Fästdon → Antal/placering → Varför. Plannja säger c/c 300 och Lindab c/c 400. Vilket gäller på Holmgrens tak, och hur tar du reda på det?
3. [Fog B](scen Fog B – nock): Fästdon → Antal/placering → Varför. Varför skruvas nockplåten i profiltopparna och inte i dalarna, och vad gör tätningsbandet?
4. Varför viks profilbotten upp i plåtens överkant vid nocken? Vad kan hända annars när det blåser snö?
5. Taket på Holmgrens hus lutar 40°. Vad betyder lutningen för nockplåten när du beställer den eller bockar den?
6. *(bonus)* Takfallet är 4,8 m och plåten går 50 ut förbi takfoten. Hur många 2-metersbitar gavelbeslag går åt till båda gavlarna på båda takfallen, med 100 omlott? Hur många nockplåtar går åt till en nock som är 3,8 m med 200 omlott? Räkna i Bygget → Mängder.
---LEDTRÅDAR---
1. Gavel | Knuff: beslaget ska ligga an mot två saker samtidigt. Vilka?
2. Fog A | Knuff: vinden tar i gaveln både underifrån och från sidan.
3. Fog A | Mer: två anvisningar säger olika, och då gäller den för plåten du lägger.
4. Fog B | Knuff: var rinner vattnet, i dalen eller på toppen?
5. Fog B | Mer: i nocken ligger nockplåten på topparna. Skruven ska dra plåt mot plåt utan att trycka ner en dal.
6. Uppvik | Knuff: titta på plåten uppifrån nocken. Är dalarna öppna?
---PEKARE---
takfot | linje 0,0,2 till 3756,0,2
nocklinje | linje 0,4800,2 till 3756,4800,2
höger gavel | linje 3756,0,72 till 3756,4800,72
---FOGAR---
fog A | Gavelbeslag i vindskivan | scen Fog A – gavelbeslag
pil A | från 4300,1000,100 till 3900,1000,100 | skjuv | Vinden trycker mot gaveln
pil A | från 4000,1500,100 till 4000,1500,600 | lyft | Vindsug vid gaveln
utan A | delar t1 | flytta 150,0,180 | Utan skruv i vindskivan tar vinden tag i beslaget, och sedan i plåtens kant.
fog B | Nockplåt med tätning | scen Fog B – nock
pil B | från 2400,4700,500 till 2400,4700,120 | tryck | Nockplåten klämmer tätningen mot plåten
utan B | delar t1,t2 | flytta 0,0,180 | Utan tätning och uppvik blåser snö och regn in genom dalarna och ner under nockplåten.
---MODELL---
del d1 | Underlagsduk | box 0..3756, 0..4800, 1..2
del s1 | Ströläkt 25x50 | box 0..50, 0..4800, 2..27
del s2 | Ströläkt 25x50 | box 600..650, 0..4800, 2..27
del s3 | Ströläkt 25x50 | box 1200..1250, 0..4800, 2..27
del s4 | Ströläkt 25x50 | box 1800..1850, 0..4800, 2..27
del s5 | Ströläkt 25x50 | box 2400..2450, 0..4800, 2..27
del s6 | Ströläkt 25x50 | box 3000..3050, 0..4800, 2..27
del s7 | Ströläkt 25x50 | box 3600..3650, 0..4800, 2..27
del s8 | Ströläkt 25x50 | box 3706..3756, 0..4800, 2..27
del l1 | Bärläkt 25x50 | box 0..3756, 0..50, 27..52
del l2 | Bärläkt 25x50 | box 0..3756, 500..550, 27..52
del l3 | Bärläkt 25x50 | box 0..3756, 1000..1050, 27..52
del l4 | Bärläkt 25x50 | box 0..3756, 1500..1550, 27..52
del l5 | Bärläkt 25x50 | box 0..3756, 2000..2050, 27..52
del l6 | Bärläkt 25x50 | box 0..3756, 2500..2550, 27..52
del l7 | Bärläkt 25x50 | box 0..3756, 3000..3050, 27..52
del l8 | Bärläkt 25x50 | box 0..3756, 3500..3550, 27..52
del l9 | Bärläkt 25x50 | box 0..3756, 4000..4050, 27..52
del l10 | Bärläkt 25x50 | box 0..3756, 4500..4550, 27..52
del l11 | Bärläkt 25x50 | box 0..3756, 4750..4800, 27..52
del t1 | Takplåt profilerad | box 2656..3756, -50..4750, 52..72
del t2 | Takplåt profilerad | box 1656..2756, -50..4750, 52..72
del t3 | Takplåt profilerad | box 656..1756, -50..4750, 52..72
del t4 | Takplåt profilerad | box 0..756, -50..4750, 52..72
del n0 | Nocktätning | box 0..3756, 4650..4700, 72..92
del v1 | Vindskiva 22x145 | box -22..0, 0..4800, -73..72
del v2 | Vindskiva 22x145 | box 3756..3778, 0..4800, -73..72
---SCENER---
scen Översikt | öga 1900,-3500,6500 | mål 1900,2400,0
scen Fog A – gavelbeslag | öga 4700,700,900 | mål 3700,1000,60
scen Fog B – nock | öga 3000,3600,1200 | mål 2600,4750,80
---SLUT---
`,b=`BYGGSKOLAN-MÖBEL
id: bank-1
titel: Bänk i ek
origo: vänstra främre nedre hörnet, x åt höger, y bakåt mot väggen, z uppåt
---MÅTT---
B = 1000             # längd
D = 360              # djup
H = 450              # sitthöjd
b = 45               # benens grovlek
st_t = 28            # sitsens tjocklek
sarg_t = 22          # sargens tjocklek
sarg_h = 95          # sargens höjd
indrag = 10          # sargen sitter så här långt in från benets framkant
# Tapp och dymling: övningsvärden, tas fram med källa i steg 8.
tapp_l = 30          # tappens längd in i benet
tapp_t = 8           # tappens tjocklek
ansats = 10          # ansats uppe och nere på tappen
---DELAR---
benfram  | 2 st | Ek        | storlek x b, y b, z H-st_t          | vid x 0 och B-b                       | fiber z
benbak   | 2 st | Ek        | storlek x b, y b, z H-st_t          | vid x 0 och B-b, y D-b                | fiber z
sargfram | 1 st | Ek        | storlek x B-2b, y sarg_t, z sarg_h  | vid x b, y indrag, z H-st_t-sarg_h     | fiber x
sargbak  | 1 st | Ek        | storlek x B-2b, y sarg_t, z sarg_h  | vid x b, y D-indrag-sarg_t, z H-st_t-sarg_h | fiber x
kortsarg | 2 st | Ek        | storlek x sarg_t, y D-2b, z sarg_h  | vid x indrag och B-indrag-sarg_t, y b, z H-st_t-sarg_h | fiber y
sits     | 1 st | Limfog ek | storlek x B, y D, z st_t            | vid z H-st_t                          | fiber x
---FOGAR---
sargfram i benfram | tapp | längd tapp_l, tjocklek tapp_t, ansats ansats
sargbak i benbak   | tapp | längd tapp_l, tjocklek tapp_t, ansats ansats
kortsarg i benfram, benbak | tapp | längd tapp_l, tjocklek tapp_t, ansats ansats
sits i benfram, benbak | dymling 10x40 | 2 st
---ARBETSGÅNG---
# Hur man gör: Williams ritningsexempel (exempel/skarbrada-ritning-*.webp) och vanlig snickarpraxis.
# Inga mått rakt i texten: {uttryck} räknas ur måtten ovan, så texten följer med när möbeln ändras.
blad Kapa virke | visa kapschema Ek
1. Kapa delarna grovt enligt schemat, med längdtillägget.
2. Kapa till rätt längd mot ett stopp, lika delar i samma inställning.   # Williams ritning 4: stoppkloss
3. Märk delarna med krita.                                               # Williams ritning 2
! Kapa aldrig mellan klinga och parallellanhåll, använd kapslädet eller kapsåg.   # Williams ritning 4
» Sargarnas längd i kaplistan har tapparna med.
blad Tappar och hål | visa framifrån | delar sargfram, sargbak, kortsarg, benfram, benbak
1. Märk ut tapparna från samma sida på alla sargar: {tapp_l} långa, {tapp_t} tjocka, ansats {ansats}.
2. Märk ut hålen i benen med samma mått.
3. Gör hålen först, sedan tapparna, och passa varje tapp i sitt hål.
! I hörnen går två tappar in i samma ben från två håll. Kontrollera att de inte möts.
» Provtappa i en spillbit innan sargarna.
blad Limma stommen | visa snedbild | delar benfram, benbak, sargfram, sargbak, kortsarg
1. Torrmontera hela stommen.
2. Limma framramen (benfram och sargfram) och bakramen (benbak och sargbak).
3. När limmet har härdat: limma ihop ramarna med kortsargarna.
4. Mät diagonalerna innan limmet härdar.
! Öppentid och presstid: följ limmets anvisning, tas fram med källa.
blad Sitsen | visa ovanifrån | delar sits
1. Sitsen är limfog. Verkstadsboken räknar den ur reglar (den är inte med i appens kapschema).
2. Borra för dymlingarna i benens överände och i sitsens undersida. Antalet står på blad 1.
» Dymlingsmarkörer ger hålen mitt för varandra.
! Massiv ek rör sig tvärs fibern med fukten. Om sitsen kan sitta fast på dymlingar utan att spricka: tas fram med källa.
`,x=`BYGGSKOLAN-MÖBEL
id: bokhylla-1
titel: Bokhylla björkplywood
origo: vänstra främre nedre hörnet, x åt höger, y bakåt mot väggen, z uppåt
---MÅTT---
B = 800              # bredd
H = 1900            # höjd
D = 300              # djup
t = 18               # skivans tjocklek
hyllor = 4
fack = (H - 2t - hyllor*t) / (hyllor + 1)   # fri höjd i varje fack
# Ryggen ligger i not i sidor, topp och botten. Övningsvärden, tas fram med källa i steg 8.
rt = 4               # ryggens tjocklek
notdjup = 8          # hur djupt ryggen och hyllorna går in i skivan
notkant = 10         # från bakkanten till noten
# Hyllorna skjuts in bakifrån i noter i sidorna, som slutar innan framkanten (Williams val 7 nov 2026).
hyllstopp = 10       # hyllnoten slutar så långt från framkanten, övningsvärde, tas fram med källa
---DELAR---
sida   | 2 st      | Björkplywood 18 | storlek x t, y D, z H                            | vid x 0 och B-t                      | fiber z
topp   | 1 st      | Björkplywood 18 | storlek x B-2t, y D, z t                         | vid x t, z H-t                       | fiber x
botten | 1 st      | Björkplywood 18 | storlek x B-2t, y D, z t                         | vid x t                              | fiber x
hylla  | hyllor st | Björkplywood 18 | storlek x B-2t, y D-notkant-rt, z t              | vid x t, z t+fack | c/c z fack+t     | fiber x
rygg   | 1 st      | Björkplywood 4  | storlek x B-2t, y rt, z H-2t                     | vid x t, y D-notkant-rt, z t                 | fiber z
---FOGAR---
# Ryggen ligger i not runt om. Delarna skrivs med synligt mått, noten lägger till notdjupet i kaplistan.
rygg i sida, topp, botten | not | djup notdjup
# Hyllorna går i noter i sidorna. Noten går ut genom bakkanten och syns inte framifrån.
hylla i sida | not | djup notdjup, stopp hyllstopp
---ARBETSGÅNG---
# Hur man gör: Williams ritningsexempel (exempel/skarbrada-ritning-*.webp) och vanlig snickarpraxis.
# Inga mått rakt i texten: {uttryck} räknas ur måtten ovan, så texten följer med när möbeln ändras.
blad Kapa skivor | visa kapschema Björkplywood 18
1. Klyv remsorna längs skivan i bokstavsordning, kapa sedan delarna av varje remsa.
2. Klyv delarna som är smalare än remsan sist.
3. Märk varje del med namnet, med krita.          # Williams ritning 2: märk med krita
! Kapa aldrig mellan klinga och parallellanhåll, använd kapslädet.   # Williams ritning 4
» Bordsågen: remsan på klingans fria sida, använd skjutpinne.        # Williams ritning 2
blad Kapa ryggen | visa kapschema Björkplywood 4
1. Kapa ryggen till {B-2t+2notdjup} × {H-2t+2notdjup}, med noten runt om.
2. Prova ryggen i noten innan stommen limmas.
blad Fräs noten | visa snitt | delar sida, topp, botten
1. Fräs noten i sidor, topp och botten: {rt} bred, {notdjup} djup, {notkant} från bakkanten.
2. I sidorna slutar noten {t-notdjup} från ändarna, så att den inte syns uppe och nere.
3. I topp och botten går noten hela vägen.
blad Fräs hyllnoterna | visa snitt | delar sida, hylla
1. Fräs en not för varje hylla på insidan av sidorna: {t} bred, {notdjup} djup.
2. Noten börjar i bakkanten och slutar {hyllstopp} från framkanten, så att den inte syns framifrån.
3. Såga ett hack i hyllans båda främre hörn, {notdjup} × {hyllstopp}, så att framkanten ligger jäms med sidorna.
» Prova en hylla i noten innan stommen limmas.
» Provfräs i en spillbit och prova ryggen i spåret först.
! Notens mått är övningsvärden, tas fram med källa i steg 8.
blad Limma stommen | visa framifrån | delar sida, topp, botten, rygg
1. Torrmontera sidor, topp, botten, hyllorna och ryggen.
2. Limma och dra ihop med tvingar.
3. Mät diagonalerna. Är de lika långa är stommen i vinkel.
! Topp och botten har ingen fog i filen än. Bestäm fogen före limningen.
! Ryggen i not runt om stänger bakkanten, så hyllorna kan inte skjutas in bakifrån när stommen är limmad. Fråga till William: ryggen i fals och skruvad sist, eller hyllorna in vid limningen?
! Öppentid och presstid: följ limmets anvisning, tas fram med källa.
`,S=`BYGGSKOLAN-MÖBEL
id: skarbrada-1
titel: Skärbräda i ändträ
origo: vänstra främre nedre hörnet, x åt höger, y bakåt mot väggen, z uppåt
# Källa: Williams ritningar, byggskolan/mobler/exempel/skarbrada-ritning-1…8.webp (6 nov 2026).
# Talen är Williams värden från bladen, alltså övningsvärden. Ritningens nummer står efter talet.
# Limningar i flera omgångar (steg 9): ämnen klyvs till lameller, limmas till en panel, kapas till
# skivor, vrids och limmas till ett block, som hyvlas till brädan. Se ---LIMNING---.
---MÅTT---
Bf = 400             # färdig längd, ritning 1 och 6
Df = 300             # färdig bredd, ritning 1 och 6
Hf = 40              # färdig tjocklek, ritning 1 och 6
# Råvaran: furu 45x95, ritning 1 och 2.
Ta = 45
Ba = 95
L = 650              # ämnenas längd, ritning 2
ämnen = 4            # ritning 2
T = 42               # planhyvlas till 42 före klyvningen, ritning 2
klyv = 1             # klyvs 1 mm över radbredd, ritning 2
# Radernas bredd i färdiga brädan: klyvbredden på ritning 2 (A 51, B 39, C 29, D 21, E 15) minus klyv.
radA = 50
radB = 38
radC = 28
radD = 20
radE = 14
wA = radA + klyv
wB = radB + klyv
wC = radC + klyv
wD = radD + klyv
wE = radE + klyv
Pb = 2(wA + wB + wC + wD + wE)   # panelen när den är limmad
Tp = 41.5            # panelen putsas till ca 41,5, ritning 4
P = 305              # panelens bredd efter riktningen, ca 305, ritning 3 och 5
S = 47               # skivor à 47, ritning 4
skivor = 10          # ritning 4
andkap = 5           # kapa ena änden rak, ca 5, ritning 4
---DELAR---
# Råvaran: det enda som kapas ur virke. Ämnena ligger bredvid varandra på bänken.
ämne      | ämnen st  | Furu | storlek x L, y Ba, z Ta            | c/c y Ba                               | fiber x
# Lamellerna som de ligger i limning 1: A B C D E E D C B A.
A         | 2 st      | Furu | storlek x L, y wA, z T             | vid y 0 och Pb-wA                      | fiber x
B         | 2 st      | Furu | storlek x L, y wB, z T             | vid y wA och Pb-wA-wB                  | fiber x
C         | 2 st      | Furu | storlek x L, y wC, z T             | vid y wA+wB och Pb-wA-wB-wC            | fiber x
D         | 2 st      | Furu | storlek x L, y wD, z T             | vid y wA+wB+wC och Pb-wA-wB-wC-wD      | fiber x
E         | 2 st      | Furu | storlek x L, y wE, z T             | vid y wA+wB+wC+wD och Pb/2             | fiber x
panel     | 1 st      | Furu | storlek x L, y Pb, z T                                                      | fiber x
# Skivorna kapade ur panelen, vridna 90 grader med ändträet upp, som de ligger i limning 2.
ändskiva  | skivor st | Furu | storlek x Tp, y P, z S             | c/c x Tp                               | fiber z
block     | 1 st      | Furu | storlek x skivor*Tp, y P, z S                                               | fiber z
skärbräda | 1 st      | Furu | storlek x Bf, y Df, z Hf                                                    | fiber z
---LIMNING---
A, B, C, D, E = klyv ämne   | planhyvlade före klyvningen
panel = limma A, B, C, D, E | långträ, alla tio lameller i en limning
ändskiva = kapa panel       | panelen putsad först
block = limma ändskiva      | vridna 90 grader, varannan vänd ände mot ände
skärbräda = hyvla block     | hyvla till tjockleken, kapa till längd och bredd
---ARBETSGÅNG---
# Texten är Williams ritning 2–6, nästan ord för ord. Mått som {L} räknas ur måtten ovan.
blad Lameller | visa omgång A
1. Kapa {ämnen} bitar furu {Ta}×{Ba} till {L}.                                    # ritning 2
2. Rikta en flatsida och en kant på rikthyveln.                                   # ritning 2
3. Planhyvla till {T} tjockt ({T-Hf} mm putsas bort efter limningen).             # ritning 2
4. Klyv enligt schemat: 2 st vardera av A {wA}, B {wB}, C {wC}, D {wD} och E {wE}.  # ritning 2
5. Rikta klyvsidan med ett lätt pass så att alla limytor blir raka.                # ritning 2
6. Märk A–E med krita på ändan.                                                   # ritning 2
» Bordsågen: remsan på klingans fria sida, använd skjutpinne.                     # ritning 2
blad Limning 1 – panelen | visa omgång panel
1. Torka limytorna med aceton precis innan, kådan stör limmet.                    # ritning 3
2. Torrpassa: A B C D E E D C B A. Ha tvingarna färdigställda.                    # ritning 3
3. Lim med roller på ena ytan i varje fog, tunt och heltäckande. Ca 10 min öppentid.  # ritning 3
4. 4 tvingar, varannan ovanpå och varannan under så panelen inte bågnar.          # ritning 3
5. Håll kanterna jäms med handen när du drar åt.                                  # ritning 3
6. Efter 1 h: av med tvingarna. Härda 24 h.                                       # ritning 3
» Skrapa limdropparna efter 30 min när de är gummiaktiga.                         # ritning 3
! Tiderna är från Williams ritning. Jämför med limmets anvisning, tas fram med källa.
blad Kapa skivor | visa omgång ändskiva
1. Skrapa limrester. Planhyvla båda sidor lätt tills de är rena (ca {Tp}).        # ritning 4
2. Rikta en kant så panelen ligger stadigt mot anhållet.                          # ritning 4
3. Kapa ena änden rak (ca {andkap}).                                              # ritning 4
4. Stoppkloss på {S}. Kapa {skivor} skivor, samma sida mot stoppet varje gång.    # ritning 4
5. Numrera skivorna 1–{skivor} med krita. Resten blir provbit till planhyveln.    # ritning 4
! Kapa aldrig mellan klinga och parallellanhåll, kapsläde eller kapsåg.            # ritning 4
blad Limning 2 – ändträet | visa omgång block
1. Torrpassa: lägg ut 1–{skivor}, vänd varannan ett halvt varv. Raderna ska gå i linje.  # ritning 5
2. Ändträ suger: stryk tunt på alla fogar, vänta 2 min, stryk igen.               # ritning 5
3. Raka reglar med packtejp över och under som klossar håller skivorna plana.     # ritning 5
4. Dra åt lätt, knacka raderna i linje, dra sedan åt hårt. 3–4 tvingar.           # ritning 5
5. Härda 24 h. Blocket blir ca {skivor*Tp} × {P} × {S}.                           # ritning 5
! Tiderna är från Williams ritning. Jämför med limmets anvisning, tas fram med källa.
blad Planhyvla och kapa | visa omgång skärbräda
1. Limma offerlist F (20 × {S}, långträ) på båda kortändarna. Torka 3 h.          # ritning 6
2. Fasa överkanterna ca 3 med slipkloss. Prova inställningen på provbiten.        # ritning 6
3. 0,3 mm per pass, mata in lite snett. Vänd brädan efter varje pass.             # ritning 6
4. Hyvla till {Hf}.                                                               # ritning 6
5. Kapa till {Bf} (offerlisterna går) och långsidorna till {Df} med kapsläden.    # ritning 6
! Släpper det fibrer: sluta och slipa resten.                                     # ritning 6
`,C=`byggskolan-live`;function w(e){try{return e?.getItem(C)!==`av`}catch{return!0}}function Ee(e,t){try{return e?(e.setItem(C,t?`pa`:`av`),!0):!1}catch{return!1}}var T=`byggskolan-senaste-ovning`;function De(e){try{let t=e?.getItem(T);return t&&/^\d+$/.test(t)?Number(t):null}catch{return null}}function Oe(e,t){try{e?.setItem(T,String(t))}catch{}}function E(){try{return window.localStorage}catch{return null}}function ke(e){return!e.mattBuffer&&e.iValj&&!e.escGjordeNagot}var D=e=>{let t=Number(e.trim().replace(`,`,`.`));if(e.trim()===``||Number.isNaN(t))throw Error(`Inte ett tal: ${e}`);return t},Ae=e=>e.split(`,`).map(D);function O(e){let t=e.split(`,`).map(e=>{let t=Number(e.trim());if(e.trim()===``||Number.isNaN(t))throw Error(`Inte ett tal: ${e}`);return t});if(t.length!==3)throw Error(`Punkten ska ha x,y,z: ${e}`);return[t[0],t[1],t[2]]}function je(e){let t=e.trim().match(/^(-?[\d.]+)\s*\.\.\s*(-?[\d.]+)$/);if(!t)throw Error(`Intervallet ska vara a..b: ${e}`);return[Number(t[1]),Number(t[2])]}function k(e,t){let n=e.split(`,`).map(je);if(n.length!==3)throw Error(`${t}: box ska ha tre intervall.`);return[n[0],n[1],n[2]]}function Me(e,t=`BYGGSKOLAN-ÖVNING`){let n=e.replace(/^﻿/,``).split(/\r?\n/);for(;n.length&&!n[0].trim();)n.shift();if(!(n.shift()??``).trim().toUpperCase().startsWith(t))throw Error(`Blocket måste börja med ${t}.`);let r={},i={},a=null;for(let e of n){let t=e.trim(),n=t.match(/^-{3,}\s*([A-ZÅÄÖ]+)\s*-{3,}$/i);if(n){let e=n[1].toUpperCase();if(e===`SLUT`)break;a=i[e]=[]}else if(a)a.push(e);else if(t&&!t.startsWith(`#`)){let e=t.match(/^([a-zåäö]+)\s*:\s*(.*)$/i);e&&(r[e[1].toLowerCase()]=e[2].trim())}}return{huvud:r,sektioner:i}}function Ne(e){let t=e.split(`|`).map(e=>e.trim()),n=t.shift().replace(/^del\s*/i,``),r=t.shift()??``,i=t.shift()??``,a={id:n,namn:r,exempel:!1,miljo:!1,kap:[],kaplinje:[],urtag:[]},o=i.match(/^box\s+(.+)$/i),s=i.match(/^från\s+(.+?)\s+till\s+(.+)$/i),c=i.match(/^vid\s+(.+)$/i);if(o)a.box=k(o[1],`del ${n}`);else if(s){a.fran=O(s[1]),a.till=O(s[2]);let e=(t.shift()??``).toLowerCase();if(e!==`högkant`&&e!==`flatt`)throw Error(`del ${n}: efter från/till ska det stå högkant eller flatt.`);a.lage=e}else if(c)for(a.vid=O(c[1]);/^[xyz]\s+\S/i.test(t[0]??``);)t.shift();else throw Error(`del ${n}: tredje fältet ska börja med box, från eller vid.`);for(let e of t){let t=e.match(/^kaplinje\s+(.+?)\s+till\s+(.+?)\s+behåll\s+(.+)$/i),r=e.match(/^kap\s+([xyz])\s*([<>])\s*(-?[\d.]+)$/i),i=e.match(/^urtag\s+box\s+(.+)$/i),o=e.match(/^färg\s+(.+)$/i),s=e.match(/^tagg\s+(.+)$/i);if(t)a.kaplinje.push({fran:O(t[1]),till:O(t[2]),behall:O(t[3])});else if(/^kaplinje\b/i.test(e))throw Error(`del ${n}: kaplinje ska skrivas 'kaplinje x1,y1,z1 till x2,y2,z2 behåll x,y,z'.`);else if(r){let e=`xyz`.indexOf(r[1].toLowerCase());a.kap.push({axel:e,behall:r[2],varde:Number(r[3])})}else if(/^kap\b/i.test(e))throw Error(`del ${n}: kap ska skrivas t.ex. 'kap y<1200' (behåll y under 1200).`);else i?a.urtag.push(k(i[1],`del ${n}: urtag`)):/^exempel$/i.test(e)?a.exempel=!0:/^miljö$/i.test(e)?a.exempel=a.miljo=!0:o?a.farg=Ae(o[1]):s&&(a.tagg=s[1].trim(),/^exempel$/i.test(a.tagg)&&(a.exempel=!0))}return a}function Pe(e,t){let n=e.split(`|`).map(e=>e.trim()),r=n[0].replace(/^koll\s*/i,``),i={},a=e=>{let[t,...n]=e.split(/\s+/),r=n.join(` `).trim();if(/^fel$/i.test(t))i.fel=r;else if(/^tolerans$/i.test(t))i.tolerans=D(r.replace(/mm$/i,``));else throw Error(`koll: förstår inte '${e}' (fel <text> eller tolerans <mm>).`)};if(/^schakt$/i.test(r)){let e=(n[1]??``).match(/^box\s+(.+)$/i);if(!e)throw Error(`koll schakt: andra fältet ska vara "box x0..x1, y0..y1, z0..z1".`);let r=!1;for(let e of n.slice(2).filter(Boolean))/^rund$/i.test(e)?r=!0:a(e);return{typ:`schakt`,nyckel:t(),box:k(e[1],`koll schakt`),rund:r,...i}}if(/^f[äa]stdon$/i.test(r)){let e=n[1]??``;if(!e)throw Error(`koll fästdon: namn saknas.`);let r=(n[2]??``).match(/^(\d+)\s*(st)?$/i);if(!r)throw Error(`koll fästdon: tredje fältet ska vara antal, t.ex. "6 st".`);let o=(n[3]??``).match(/^box\s+(.+)$/i);if(!o)throw Error(`koll fästdon: fjärde fältet ska vara "box x0..x1, y0..y1, z0..z1".`);return n.slice(4).filter(Boolean).forEach(a),{typ:`fästdon`,nyckel:t(),namn:e,antal:Number(r[1]),box:k(o[1],`koll fästdon`),...i}}let o=Ne(n.filter((e,t)=>t===0||!/^(fel|tolerans)(\s|$)/i.test(e)||(a(e),!1)).join(` | `).replace(/^koll/i,`del`));return{typ:`del`,nyckel:t(o.id),del:o,...i}}function Fe(e){let t=[];for(let n of e){let e=n.trim(),r=e.match(/^(\d+)\s*[.):]\s*(.*)$/),i=t[t.length-1];if(r)t.push({nr:Number(r[1]),text:r[2],koll:[]});else if(i&&/^koll\s/i.test(e)){let t=i.koll.length;i.koll.push(Pe(e,e=>e?`${i.nr}/${e}`:`${i.nr}/#${t}`))}else i&&/^fog\s*:/i.test(e)&&(i.fog=e.replace(/^fog\s*:/i,``).trim())}return t}function Ie(e){let t=e.split(`|`).map(e=>e.trim()),n=t.find(e=>/^öga\s/i.test(e)),r=t.find(e=>/^mål\s/i.test(e));return!n||!r?null:{namn:t[0].replace(/^scen\s*/i,``),oga:O(n.replace(/^öga\s+/i,``)),mal:O(r.replace(/^mål\s+/i,``))}}var Le=e=>e.filter(e=>/^del\s/i.test(e.trim())).map(e=>Ne(e.trim()));function Re(e){let{huvud:t,sektioner:n}=Me(e),r=e=>(n[e]??[]).filter(e=>e.trim());return{id:t.id??``,titel:t.titel??``,typ:t.typ??``,kalla:t.källa??``,origo:t.origo??``,prov:/^ja$/i.test(t.prov??``),uppgift:(n.UPPGIFT??[]).join(`
`).trim(),steg:Fe(n.STEG??[]),fragor:r(`FRÅGOR`).map(e=>e.trim().replace(/^\d+\.\s*/,``)),delar:Le(r(`MODELL`)),scener:r(`SCENER`).map(Ie).filter(e=>e!==null)}}function A(e){let t=e.split(`/`).pop();if(t.endsWith(`-facit.txt`))return null;let n=/^(\d+)-.*\.txt$/.exec(t);return n?Number(n[1]):null}function ze(e){let t=[];for(let[n,r]of Object.entries(e)){let e=A(n);if(e===null)continue;let i=``,a=!1;try{let e=Re(r);i=e.titel,a=!!e.prov}catch{}i||=n.split(`/`).pop().replace(/^\d+-/,``).replace(/\.txt$/,``),t.push({nr:e,titel:i,prov:a})}return t.sort((e,t)=>e.nr-t.nr)}function Be(e,t,n){let r=j(e,t);return r.sort===`ovning`?r.nr:n!==null&&t.includes(n)?n:t.includes(11)?11:t[0]}function j(e,t){let n=new URLSearchParams(e).get(`ovning`);if(n===null||!/^\d+$/.test(n.trim()))return{sort:`meny`};let r=Number(n);return t.includes(r)?{sort:`ovning`,nr:r}:{sort:`meny`}}var M=[{id:`meny`,namn:`Menyn`,standard:`§`},{id:`flytta`,namn:`Flytta`,standard:`G`},{id:`kopiera`,namn:`Kopiera i Flytta (av och på)`,standard:`Ctrl`},{id:`matUt`,namn:`Mät ut`,standard:``},{id:`kapa`,namn:`Kapa`,standard:`X`},{id:`taBort`,namn:`Ta bort valda`,standard:`Delete`},{id:`valjAlla`,namn:`Välj alla du lagt`,standard:`Ctrl+A`},{id:`angra`,namn:`Ångra`,standard:`Ctrl+Z`},{id:`gorOm`,namn:`Gör om`,standard:`Ctrl+Y`},{id:`avbryt`,namn:`Avmarkera, börja om, sluta`,standard:`Escape`},{id:`vrid`,namn:`Vrid 90° när du lägger`,standard:`Tab`},{id:`fastpunkt`,namn:`Byt fästpunkt när du lägger, byt snitt i Kapa`,standard:`ArrowUp`},{id:`klyv`,namn:`Kap tvärs eller klyvning i Kapa`,standard:`ArrowLeft`},{id:`andraMatt`,namn:`Ändra mått (möbler, dra en yta)`,standard:`P`},{id:`visaAllt`,namn:`Visa allt (kameran tillbaka till modellen)`,standard:`Shift+Z`}],N={Control:`Ctrl`,Alt:`Alt`,Meta:`Ctrl`},Ve=e=>/^[0-9.,\-*]$/.test(e)||e===`Enter`||e===`Backspace`||e===`Shift`;function He(e){if(e.key in N||e.key===`Shift`)return``;let t=e.key.length===1,n=t?e.key.toUpperCase():e.key,r=[];return(e.ctrlKey||e.metaKey)&&r.push(`Ctrl`),e.altKey&&r.push(`Alt`),e.shiftKey&&(!t||/^\p{L}$/u.test(e.key))&&r.push(`Shift`),r.push(n===` `?`Space`:n),r.join(`+`)}var Ue={Escape:`Esc`,ArrowUp:`Pil upp`,ArrowDown:`Pil ned`,ArrowLeft:`Pil vänster`,ArrowRight:`Pil höger`,Space:`Mellanslag`},P=e=>e?e.split(`+`).map(e=>Ue[e]??e).join(`+`):`ingen`,We=class{lagra;val;constructor(e){this.lagra=e,this.val=Object.fromEntries(M.map(e=>[e.id,e.standard]));try{let t=JSON.parse(e?.las()??`{}`);for(let e of M)typeof t[e.id]==`string`&&(this.val[e.id]=t[e.id])}catch{}}tangent(e){return this.val[e]}namn(e){return this.val[e]?P(this.val[e]):`–`}handling(e){return e?M.find(t=>this.val[t.id]===e)?.id??null:null}satt(e,t){if(t&&Ve(t))throw Error(`${P(t)} används av måttrutan.`);let n=t?this.handling(t):null;return n&&n!==e&&(this.val[n]=``),this.val[e]=t,this.spara(),n&&n!==e?n:null}aterstall(){for(let e of M)this.val[e.id]=e.standard;this.spara()}spara(){this.lagra?.skriv(JSON.stringify(this.val))}};function Ge(){return{las(){try{return localStorage.getItem(`byggskolan.tangenter`)}catch{return null}},skriv(e){try{localStorage.setItem(`byggskolan.tangenter`,e)}catch{}}}}var F=new We(typeof localStorage>`u`?void 0:Ge()),Ke=`byggskolan-tema`;function qe(e){try{return e?.getItem(Ke)!==`av`}catch{return!0}}function Je(e,t){try{e?.setItem(Ke,t?`verkstad`:`av`)}catch{}}function Ye(){try{return window.localStorage}catch{return null}}var Xe=[];function Ze(){return document.documentElement.dataset.tema===`verkstad`}function Qe(e){Xe.push(e)}function I(e,t=!0){e?document.documentElement.dataset.tema=`verkstad`:delete document.documentElement.dataset.tema,t&&Je(Ye(),e);for(let t of Xe)t(e)}function $e(){I(qe(Ye()),!1)}var L=()=>!!document.getElementById(`till-menyn`);function et(e,t,n,r){if(L())return;let i=document.createElement(`div`);i.id=`till-menyn`;let a=i.appendChild(document.createElement(`div`));a.setAttribute(`role`,`dialog`);let o=a.appendChild(document.createElement(`h2`));o.textContent=e;let s=a.appendChild(document.createElement(`p`));s.textContent=t;let c=a.appendChild(document.createElement(`div`));c.className=`knappar`;let l=c.appendChild(document.createElement(`button`));l.type=`button`,l.className=`ga`,l.textContent=n;let u=c.appendChild(document.createElement(`button`));u.type=`button`,u.className=`stanna`,u.textContent=`Stanna`;let d=()=>{removeEventListener(`keydown`,f,!0),i.remove()},f=e=>{if(e.key!==`Tab`&&(e.preventDefault(),e.stopImmediatePropagation(),e.key===`Escape`||e.key===`Enter`||e.key===` `)){if(e.key!==`Escape`&&document.activeElement===l)return d(),r();d()}};l.addEventListener(`click`,()=>{d(),r()}),u.addEventListener(`click`,d),i.addEventListener(`pointerdown`,e=>{e.target===i&&d()}),addEventListener(`keydown`,f,!0),document.body.append(i),u.focus()}var tt=Object.assign({"../../../wb_bygg/ovningar/01-tak72-takstolar-1-facit.txt":e,"../../../wb_bygg/ovningar/01-tak72-takstolar-1.txt":t,"../../../wb_bygg/ovningar/02-tak74-raspont-1-facit.txt":n,"../../../wb_bygg/ovningar/02-tak74-raspont-1.txt":r,"../../../wb_bygg/ovningar/03-tak76-vindskivor-1-facit.txt":i,"../../../wb_bygg/ovningar/03-tak76-vindskivor-1.txt":a,"../../../wb_bygg/ovningar/04-tak76-nockplanka-1-facit.txt":o,"../../../wb_bygg/ovningar/04-tak76-nockplanka-1.txt":s,"../../../wb_bygg/ovningar/05-tak76-rannkrokar-1-facit.txt":c,"../../../wb_bygg/ovningar/05-tak76-rannkrokar-1.txt":l,"../../../wb_bygg/ovningar/06-tak76-hangranna-1-facit.txt":u,"../../../wb_bygg/ovningar/06-tak76-hangranna-1.txt":d,"../../../wb_bygg/ovningar/07-tak76-fotplat-1-facit.txt":f,"../../../wb_bygg/ovningar/07-tak76-fotplat-1.txt":p,"../../../wb_bygg/ovningar/08-tak74-strolakt-1-facit.txt":m,"../../../wb_bygg/ovningar/08-tak74-strolakt-1.txt":h,"../../../wb_bygg/ovningar/09-tak75-pannstaplar-1-facit.txt":ee,"../../../wb_bygg/ovningar/09-tak75-pannstaplar-1.txt":te,"../../../wb_bygg/ovningar/10-tak75-pannlaggning-1-facit.txt":ne,"../../../wb_bygg/ovningar/10-tak75-pannlaggning-1.txt":re,"../../../wb_bygg/ovningar/11-tak75-sned-gavel-1-facit.txt":ie,"../../../wb_bygg/ovningar/11-tak75-sned-gavel-1.txt":ae,"../../../wb_bygg/ovningar/12-tak76-gavelbeslag-1-facit.txt":oe,"../../../wb_bygg/ovningar/12-tak76-gavelbeslag-1.txt":se,"../../../wb_bygg/ovningar/13-tak76-nock-1-facit.txt":ce,"../../../wb_bygg/ovningar/13-tak76-nock-1.txt":le,"../../../wb_bygg/ovningar/14-tak75-plat-lakt-1-facit.txt":ue,"../../../wb_bygg/ovningar/14-tak75-plat-lakt-1.txt":de,"../../../wb_bygg/ovningar/15-tak75-platlangder-1-facit.txt":fe,"../../../wb_bygg/ovningar/15-tak75-platlangder-1.txt":pe,"../../../wb_bygg/ovningar/16-tak76-platdetaljer-1-facit.txt":me,"../../../wb_bygg/ovningar/16-tak76-platdetaljer-1.txt":he,"../../../wb_bygg/ovningar/17-tak7-felsok-pannor-1-facit.txt":ge,"../../../wb_bygg/ovningar/17-tak7-felsok-pannor-1.txt":_e,"../../../wb_bygg/ovningar/18-tak7-felsok-plat-1-facit.txt":ve,"../../../wb_bygg/ovningar/18-tak7-felsok-plat-1.txt":ye,"../../../wb_bygg/ovningar/19-tak74-plat-fotplat-duk-lakt-1-facit.txt":be,"../../../wb_bygg/ovningar/19-tak74-plat-fotplat-duk-lakt-1.txt":xe,"../../../wb_bygg/ovningar/20-tak75-plat-forsta-langden-1-facit.txt":Se,"../../../wb_bygg/ovningar/20-tak75-plat-forsta-langden-1.txt":Ce,"../../../wb_bygg/ovningar/21-tak75-plat-overlapp-skruv-1-facit.txt":we,"../../../wb_bygg/ovningar/21-tak75-plat-overlapp-skruv-1.txt":Te,"../../../wb_bygg/ovningar/22-tak76-plat-skorsten-1-facit.txt":g,"../../../wb_bygg/ovningar/22-tak76-plat-skorsten-1.txt":_,"../../../wb_bygg/ovningar/23-tak76-plat-gavel-nock-1-facit.txt":v,"../../../wb_bygg/ovningar/23-tak76-plat-gavel-nock-1.txt":y}),nt=Object.assign({"../../mobler/bank-1.txt":b,"../../mobler/bokhylla-1.txt":x,"../../mobler/skarbrada-1.txt":S});function rt(e=nt){return Object.entries(e).map(([e,t])=>{let n=e.split(`/`).pop().replace(/\.txt$/,``);return{id:n,titel:t.match(/^titel:\s*(.+)$/m)?.[1].trim()??n}}).sort((e,t)=>e.titel.localeCompare(t.titel,`sv`))}function it(e,t){let n=()=>location.search=e;z?.byggt()?et(`Lämna övningen?`,`Det du har byggt i övning ${z.nr} försvinner. Svaren på frågorna finns kvar.`,`Öppna ${t}`,n):n()}var R=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r},z=null,B=null,V=`start`,H=null,U=null,W=``,G=null;function at(e){z=e,K()&&V===`start`&&J(`start`)}var K=()=>!!B&&!B.hidden;function ot(){B||st(),B.hidden=!1,J(`start`)}function q(){B&&(H=null,B.hidden=!0,document.activeElement?.blur?.())}function st(){B=document.body.appendChild(R(`div`)),B.id=`huvudmeny`,B.hidden=!0,B.addEventListener(`pointerdown`,e=>{e.target===B&&q()}),addEventListener(`keydown`,ft,!0),addEventListener(`keyup`,pt,!0)}function J(e){V=e,H=null,W=``,Z(),B.querySelector(`.hm-ruta`).scrollTop=0,B.querySelector(`button.hm-val:not([disabled]), .hm-lista button`)?.focus()}function ct(e){if(z&&e===z.nr)return q();let t=()=>location.search=`?ovning=${e}`;z?.byggt()?et(`Byta övning?`,`Det du har byggt i övning ${z.nr} försvinner. Svaren på frågorna finns kvar.`,`Öppna övning ${e}`,t):t()}function Y(e,t,n,r=``){let i=R(`button`,`hm-val ${r}`.trim());return i.type=`button`,i.append(R(`span`,`hm-val-namn`,e),R(`span`,`hm-val-detalj`,t)),i.addEventListener(`click`,n),i}function X(e){let t=R(`header`,`hm-huvud`);if(V!==`start`){let e=R(`button`,`hm-tillbaka`,`‹ Tillbaka`);e.type=`button`,e.title=`Esc`,e.addEventListener(`click`,()=>J(`start`)),t.append(e)}return t.append(R(`h1`,`hm-rubrik`,e)),t}function Z(){let e=R(`div`,`hm-ruta`);switch(e.setAttribute(`role`,`dialog`),G??=ze(tt),V){case`start`:e.append(X(`Byggskolan`),...z?[Y(`Fortsätt`,`Övning ${z.nr} · ${z.titel} · Esc`,q,`hm-fortsatt`)]:[],Y(`Byggövningar`,`${G.length} takövningar i ordning`,()=>J(`ovningar`)),Y(`Rita möbler`,`${rt().length} möbler · rita i 3D eller se byggritningen`,()=>J(`mobler`)),Y(`Inställningar`,`färger, live watch`,()=>J(`installningar`)),Y(`Kortkommandon`,`se och ändra tangenterna`,()=>J(`tangenter`)));break;case`ovningar`:{let t=R(`ol`,`hm-lista`);for(let e of G){let n=t.appendChild(R(`li`)).appendChild(R(`button`));n.type=`button`,n.append(R(`span`,`hm-nr`,String(e.nr).padStart(2,`0`)),R(`span`,`hm-titel`,e.titel)),e.prov&&n.append(R(`span`,`hm-tagg`,`prov`)),e.nr===z?.nr&&(n.classList.add(`aktuell`),n.append(R(`span`,`hm-tagg hm-nu`,`öppen`))),n.addEventListener(`click`,()=>ct(e.nr))}e.append(X(`Byggövningar`),R(`p`,`hm-ingress`,`Inget är låst. Esc i en övning, när inget är valt, tar fram menyn igen.`),t);break}case`mobler`:{let t=R(`ol`,`hm-lista`);for(let e of rt()){let n=t.appendChild(R(`li`,`hm-mobel`)),r=n.appendChild(R(`button`));r.type=`button`,r.title=`Rita och ändra i 3D`,r.append(R(`span`,`hm-titel`,e.titel)),r.addEventListener(`click`,()=>it(`?mobel=${encodeURIComponent(e.id)}`,e.titel));let i=n.appendChild(R(`button`,`hm-bygg`,`Byggritning`));i.type=`button`,i.title=`Stegen, kaplistan och förbanden, som på paddan`,i.addEventListener(`click`,()=>it(`?bygg=${encodeURIComponent(e.id)}`,`byggritningen för ${e.titel}`))}e.append(X(`Rita möbler`),R(`p`,`hm-ingress`,`Möblerna i byggskolan/mobler. Tryck på namnet för att rita i 3D. Att rita fritt eller med AI kommer senare.`),t);break}case`installningar`:e.append(X(`Inställningar`),ut());break;case`tangenter`:e.append(X(`Kortkommandon`),dt())}B.replaceChildren(e)}function lt(e,t,n){let r=R(`label`,`hm-rad`);return r.appendChild(R(`span`,`hm-rad-text`)).append(R(`span`,`hm-rad-namn`,e),R(`span`,`hm-rad-detalj`,t)),r.append(n),r}function ut(){let e=R(`div`,`hm-installningar`),t=R(`input`);t.type=`checkbox`,t.id=`inst-tema`,t.checked=Ze(),t.addEventListener(`change`,()=>I(t.checked));let n=R(`input`);n.type=`checkbox`,n.id=`inst-live`,n.checked=w(E());let r=R(`p`,`hm-not`);return n.addEventListener(`change`,()=>{r.textContent=Ee(E(),n.checked)?`Sparat. Gäller nästa gång en övning öppnas.`:`Webbläsaren sparar inte valet.`}),e.append(lt(`Verkstadsfärgerna`,`Verkstadsbokens mörka färger. Av ger appens ljusa färger.`,t),lt(`Live watch från start`,`Rutan Live watch är ibockad när en övning öppnas. På prov är den alltid av.`,n),r),e}function dt(){let e=R(`div`);e.append(R(`p`,`hm-ingress`,`Klicka på en tangent och tryck den nya. × tar bort den. Sparas i webbläsaren och gäller direkt. Du kan också ändra dem i övningen, under Mus och tangenter.`));let t=e.appendChild(R(`table`,`hm-tangenter`)),n=R(`p`,`hm-not`,W),r=e=>{W=e,z?.nyaTangenter(),Z()};for(let e of M){let i=t.appendChild(R(`tr`));i.appendChild(R(`td`,``,e.namn));let a=i.appendChild(R(`td`)),o=F.tangent(e.id),s=a.appendChild(R(`button`,`tangent${o?``:` ingen`}`,P(o)));s.type=`button`,s.dataset.handling=e.id,s.title=`Klicka och tryck den nya tangenten`,s.addEventListener(`click`,()=>{if(H)return H=null,W=``,Z();s.textContent=`Tryck …`,s.classList.add(`fangar`),n.textContent=`Tryck den tangent du vill ha för ${e.namn}. Klicka igen för att låta bli.`,H=t=>{try{let n=F.satt(e.id,t),i=M.find(e=>e.id===n)?.namn;r(`${e.namn}: ${P(t)}.${i?` ${i} har ingen tangent nu.`:``}`)}catch(e){W=e.message,Z()}},s.blur()});let c=a.appendChild(R(`button`,`rensa`,`×`));c.type=`button`,c.title=`Ingen tangent`,c.addEventListener(`click`,()=>{H=null,F.satt(e.id,``),r(`${e.namn} har ingen tangent nu.`)})}let i=e.appendChild(R(`button`,`hm-knapp`,`Återställ alla`));return i.type=`button`,i.addEventListener(`click`,()=>{H=null,F.aterstall(),r(`Tangenterna är som från början.`)}),e.append(n,R(`p`,`hm-tips`,`Fast och går inte att ändra: siffror, komma, minus, Enter och Backspace i måttrutan, Shift som låser riktningen, och musen (högerklick menyn, mitten snurrar, Shift + mitten panorerar).`)),e}function ft(e){if(K()&&!L()){if(e.stopImmediatePropagation(),e.key in N?e.repeat||(U=N[e.key]):U=null,H){if(e.key in N||e.key===`Shift`)return;e.preventDefault();let t=H;H=null,t(He(e))}else e.key===`Escape`&&(e.preventDefault(),V===`start`?q():J(`start`))}}function pt(e){if(K()&&!L()&&(e.stopImmediatePropagation(),e.key in N&&U===N[e.key])){let e=U;if(U=null,H){let t=H;H=null,t(e)}}}var mt=`modulepreload`,ht=function(e,t){return new URL(e,t).href},gt={},_t=function(e){return e.pathname.endsWith(`.css`)},vt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ht(t,n);let r=s(t),i=_t(r);return vt(gt,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:mt,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yt=Object.keys({"../../../wb_bygg/ovningar/01-tak72-takstolar-1-facit.txt":0,"../../../wb_bygg/ovningar/01-tak72-takstolar-1.txt":0,"../../../wb_bygg/ovningar/02-tak74-raspont-1-facit.txt":0,"../../../wb_bygg/ovningar/02-tak74-raspont-1.txt":0,"../../../wb_bygg/ovningar/03-tak76-vindskivor-1-facit.txt":0,"../../../wb_bygg/ovningar/03-tak76-vindskivor-1.txt":0,"../../../wb_bygg/ovningar/04-tak76-nockplanka-1-facit.txt":0,"../../../wb_bygg/ovningar/04-tak76-nockplanka-1.txt":0,"../../../wb_bygg/ovningar/05-tak76-rannkrokar-1-facit.txt":0,"../../../wb_bygg/ovningar/05-tak76-rannkrokar-1.txt":0,"../../../wb_bygg/ovningar/06-tak76-hangranna-1-facit.txt":0,"../../../wb_bygg/ovningar/06-tak76-hangranna-1.txt":0,"../../../wb_bygg/ovningar/07-tak76-fotplat-1-facit.txt":0,"../../../wb_bygg/ovningar/07-tak76-fotplat-1.txt":0,"../../../wb_bygg/ovningar/08-tak74-strolakt-1-facit.txt":0,"../../../wb_bygg/ovningar/08-tak74-strolakt-1.txt":0,"../../../wb_bygg/ovningar/09-tak75-pannstaplar-1-facit.txt":0,"../../../wb_bygg/ovningar/09-tak75-pannstaplar-1.txt":0,"../../../wb_bygg/ovningar/10-tak75-pannlaggning-1-facit.txt":0,"../../../wb_bygg/ovningar/10-tak75-pannlaggning-1.txt":0,"../../../wb_bygg/ovningar/11-tak75-sned-gavel-1-facit.txt":0,"../../../wb_bygg/ovningar/11-tak75-sned-gavel-1.txt":0,"../../../wb_bygg/ovningar/12-tak76-gavelbeslag-1-facit.txt":0,"../../../wb_bygg/ovningar/12-tak76-gavelbeslag-1.txt":0,"../../../wb_bygg/ovningar/13-tak76-nock-1-facit.txt":0,"../../../wb_bygg/ovningar/13-tak76-nock-1.txt":0,"../../../wb_bygg/ovningar/14-tak75-plat-lakt-1-facit.txt":0,"../../../wb_bygg/ovningar/14-tak75-plat-lakt-1.txt":0,"../../../wb_bygg/ovningar/15-tak75-platlangder-1-facit.txt":0,"../../../wb_bygg/ovningar/15-tak75-platlangder-1.txt":0,"../../../wb_bygg/ovningar/16-tak76-platdetaljer-1-facit.txt":0,"../../../wb_bygg/ovningar/16-tak76-platdetaljer-1.txt":0,"../../../wb_bygg/ovningar/17-tak7-felsok-pannor-1-facit.txt":0,"../../../wb_bygg/ovningar/17-tak7-felsok-pannor-1.txt":0,"../../../wb_bygg/ovningar/18-tak7-felsok-plat-1-facit.txt":0,"../../../wb_bygg/ovningar/18-tak7-felsok-plat-1.txt":0,"../../../wb_bygg/ovningar/19-tak74-plat-fotplat-duk-lakt-1-facit.txt":0,"../../../wb_bygg/ovningar/19-tak74-plat-fotplat-duk-lakt-1.txt":0,"../../../wb_bygg/ovningar/20-tak75-plat-forsta-langden-1-facit.txt":0,"../../../wb_bygg/ovningar/20-tak75-plat-forsta-langden-1.txt":0,"../../../wb_bygg/ovningar/21-tak75-plat-overlapp-skruv-1-facit.txt":0,"../../../wb_bygg/ovningar/21-tak75-plat-overlapp-skruv-1.txt":0,"../../../wb_bygg/ovningar/22-tak76-plat-skorsten-1-facit.txt":0,"../../../wb_bygg/ovningar/22-tak76-plat-skorsten-1.txt":0,"../../../wb_bygg/ovningar/23-tak76-plat-gavel-nock-1-facit.txt":0,"../../../wb_bygg/ovningar/23-tak76-plat-gavel-nock-1.txt":0}).map(A).filter(e=>e!==null),$=new URLSearchParams(location.search);$.get(`bygg`)?Q(()=>import(`./byggritningvy-CR86jMS5.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url):$.has(`bygg`)?Q(()=>import(`./byggval-Bw1tOnrL.js`),__vite__mapDeps([6,1,2,5]),import.meta.url):(!$.has(`mobel`)&&j(location.search,yt).sort===`meny`&&ot(),Q(()=>import(`./main--vxiGOK0.js`),__vite__mapDeps([7,1,2,3,4,8]),import.meta.url)),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});export{h as $,Se as A,fe as B,y as C,Te as D,g as E,_e as F,se as G,ue as H,ge as I,ie as J,oe as K,he as L,be as M,ye as N,we as O,ve as P,ee as Q,me as R,b as S,_ as T,le as U,de as V,ce as W,ne as X,re as Y,te as Z,De as _,Ze as a,l as at,S as b,M as c,o as ct,P as d,r as dt,m as et,A as f,n as ft,w as g,ke as h,$e as i,u as it,xe as j,Ce as k,He as l,a as lt,Re as m,e as mt,ot as n,f as nt,Qe as o,c as ot,Be as p,t as pt,ae as q,I as r,d as rt,N as s,s as st,at as t,p as tt,F as u,i as ut,Oe as v,v as w,x,E as y,pe as z};