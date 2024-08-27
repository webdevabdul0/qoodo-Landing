import Sidebar from "./Sidebar";

import { useContext } from "react";

const Infoeng = () => {
  const headStyle = `text-[#4A60FF] text-[30px] sm:text-[48px] sm:text-left text-center font-bold`;
  const paraStyle = `text-white break-words  text-base sm:text-xl font-normal`;
  const containerStyle = `flex justify-start items-center  sm:items-start flex-col gap-3`;

  return (
    <div className="wrapper  mt-[160px] mt-[160px]  mx-3 sm:mx-10 md:mx-[100px]">
      <div className="contain xl:flex-row flex-col-reverse flex justify-between items-start gap-[60px]">
        <div className="flex flex-col gap-[20px] justify-start items-start w-full">
          <h2 className="gr-text font-bold text-center sm:text-left text-[35px] sm:text-[48px]">
            Felhasználási feltételek{" "}
          </h2>
          <h4 className="text-[#FF866D] font-bold text-lg sm:text-2xl">
            Utolsó frissítés dátuma: 29.08.2023
          </h4>

          <div id="Introduction" className={containerStyle}>
            <h3 className={headStyle}>Bevezetés</h3>
            <p className={paraStyle}>
              Az itt meghatározott Általános Szerződési Feltételek (a
              továbbiakban: "Feltételek") szabályozzák a Qoodo (a "Vállalat",
              "mi", "minket" vagy "miénk") tulajdonában lévő és üzemeltetett
              https://Qoodo.io/ weboldal (a "Weboldal") használatát. A jelen
              Feltételek fontos információkat nyújtanak Önnek, beleértve
              törvényes jogait, jogorvoslati lehetőségeit és kötelezettségeit.
              Javasoljuk, hogy a Weboldal használata előtt figyelmesen olvassa
              el ezeket a Feltételeket.
              <br />
              <br />
              ⦁ Fenntartjuk a jogot, hogy saját belátásunk szerint bármikor és
              bármilyen okból módosítsuk a jelen Feltételeket. A jelen
              Feltételek "Utolsó frissítés" dátumának frissítésével
              figyelmeztetjük Önt minden változásról, és Ön lemond minden olyan
              jogáról, hogy minden ilyen változásról külön értesítést kapjon. Az
              Ön felelőssége, hogy rendszeresen felülvizsgálja ezeket a
              Feltételeket, hogy értesüljön a frissítésekről. Ön a módosított
              Feltételek változásainak hatálya alá tartozik, és úgy tekintendő,
              hogy tudomást szerzett és elfogadta azokat azáltal, hogy a
              módosított Feltételek közzétételének dátumát követően továbbra is
              használja a Weboldalt.
              <br />
              ⦁ A Felhasználó, a továbbiakban "Ön" és "Öné", bármely természetes
              vagy jogi személyt jelent, aki vagy amely saját céljaira vagy jogi
              személy nevében hozzáfér a Weboldalhoz vagy használja azt.
              <br />
              ⦁ Ha a Weboldalt jogi személy nevében használja, ezennel
              garantálja és kijelenti, hogy jogosult az adott jogi személyt a
              jelen Feltételek betartására kötelezni. Ilyen esetben az "Ön" és
              az "Öné" a jelen Feltételekben szintén erre a jogi személyre
              vonatkozik. Ha nem rendelkezik ilyen felhatalmazással, vagy ha nem
              ért egyet ezekkel a feltételekkel, akkor nem fogadhatja el ezeket
              a feltételeket, és nem használhatja a weboldalt.
              <br />
              ⦁ A Weboldal használatával Ön megerősíti, hogy legalább 18 éves,
              és teljes mértékben képes és kompetens a jelen Feltételekben
              meghatározott feltételek, kötelezettségek, megerősítések,
              nyilatkozatok és garanciák elfogadására, valamint a jelen
              Feltételek betartására és betartására.
              <br />
            </p>
          </div>

          <div
            id="Privacy Policy
"
            className={containerStyle}
          >
            <h3 className={headStyle}>Adatvédelem</h3>
            <p className={paraStyle}>
              Adatvédelmi irányelveink külön oldalon érhetők el. Adatvédelmi
              szabályzatunk elmagyarázza Önnek, hogyan dolgozzuk fel az Önnel
              kapcsolatos információkat. Tudomásul kell vennie, hogy a weboldal
              használatával tudomásul veszi, hogy ezen információk feldolgozása
              az Adatvédelmi Szabályzatnak megfelelően történik.
            </p>
          </div>

          <div id="Your Account" className={containerStyle}>
            <h3 className={headStyle}>Az Ön fiókja</h3>
            <p className={paraStyle}>
              A weboldal használata során Ön felelős a fiókja, jelszava és egyéb
              hitelesítő adatai titkosságának biztosításáért, valamint az
              eszközéhez való biztonságos hozzáférésért. Fiókját nem ruházhatja
              át senkire. A Vállalat nem vállal felelősséget az Ön fiókjához
              való jogosulatlan hozzáférésért, amely a fiók hűtlen kezeléséből
              vagy ellopásából ered. A Társaság megtagadhatja vagy törölheti a
              szolgáltatást, megszüntetheti fiókját, és eltávolíthatja vagy
              szerkesztheti a tartalmat.
              <br />
              <br />⦁ A Társaság tudatosan nem gyűjt személyes adatokat 16
              (tizenhat) év alatti személyektől. Ha Ön 16 (tizenhat) évesnél
              fiatalabb, akkor semmilyen körülmények között nem használhatja a
              weboldalt, és semmilyen körülmények között nem kötheti meg a
              Feltételeket.
            </p>
          </div>

          <div id="Services" className={containerStyle}>
            <h3 className={headStyle}>Szolgáltatás</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A weboldal lehetővé teszi a weboldalon elérhető
              Szolgáltatások használatát. A szolgáltatásokat nem használhatja
              illegális célokra
              <br />
              <br />
              ⦁ Saját belátásunk szerint díjakat állapíthatunk meg a weboldal
              használatáért az Ön számára. Minden árat külön teszünk közzé a
              weboldal megfelelő oldalain. Saját belátásunk szerint bármikor
              megváltoztathatjuk a díjakat
              <br />
              <br />
              ⦁ Használhatunk hitelesített fizetési rendszereket, amelyeknek
              szintén lehetnek jutalékaik. Az ilyen jutalékok felmerülhetnek
              Önben, amikor egy adott fizetési rendszert választ. Az ilyen
              fizetési rendszerek jutalékaira vonatkozó részletes információk
              megtalálhatók a weboldalukon. <br />
              <br />
            </p>
          </div>

          <div id="Third Party Services" className={containerStyle}>
            <h3 className={headStyle}>Harmadik fél szolgáltatásai</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A weboldal tartalmazhat más webhelyekre, alkalmazásokra
              és platformokra mutató hivatkozásokat (a továbbiakban:
              "Hivatkozott webhelyek").
              <br />
              <br />
              ⦁ A Társaság nem ellenőrzi a hivatkozott oldalakat, és nem vállal
              felelősséget a hivatkozott oldalak tartalmáért és egyéb
              anyagaiért. A Társaság ezeket a linkeket elérhetővé teszi az Ön
              számára a weboldalon található funkciók vagy szolgáltatások
              nyújtásához.
              <br />
              <br />
            </p>
          </div>

          <div
            id="Prohibited Uses and Intellectual Property"
            className={containerStyle}
          >
            <h3 className={headStyle}>
              Tiltott felhasználások és szellemi tulajdon
            </h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A Társaság nem átruházható, nem kizárólagos,
              visszavonható licencet ad Önnek a weboldal elérésére és
              használatára egy eszközről a Feltételeknek megfelelően. Nem
              használhatja a weboldalt jogellenes vagy tiltott célokra. Nem
              használhatja a webhelyet olyan módon, amely letilthatja,
              károsíthatja vagy zavarhatja a webhelyet.
              <br />
              <br />
              ⦁ A weboldalon található összes tartalom magában foglalja a
              szöveget, kódot, grafikát, logókat, képeket, összeállítást, a
              weboldalon használt szoftvert (a továbbiakban és a továbbiakban:
              "Tartalom"). A Tartalom a Társaság vagy alvállalkozóinak
              tulajdonát képezi, és az ilyen jogokat védő szellemi tulajdonjogi
              törvények védik. Ön beleegyezik abba, hogy a Tartalomban található
              összes szerzői jogi és egyéb tulajdonjogi értesítést vagy
              korlátozást felhasználja, és tilos a Tartalom megváltoztatása.
              <br />
              <br /> Ön nem teheti közzé, továbbíthatja, módosíthatja, fejtheti
              vissza, nem vehet részt az átruházásban, nem hozhat létre és nem
              értékesíthet származékos műveket, és semmilyen módon nem
              használhatja fel a Tartalmat. A weboldal élvezete nem jogosítja
              fel Önt a tartalom illegális és tiltott felhasználására, és
              különösen nem változtathatja meg a tartalom tulajdonjogait vagy
              értesítéseit. A Tartalmat csak személyes és nem kereskedelmi célra
              használhatja. A Társaság nem ad Önnek licencet a Társaság szellemi
              tulajdonához.
            </p>
          </div>

          <div id="The Company Materials" className={containerStyle}>
            <h3 className={headStyle}>A cég anyagai</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A Tartalom közzétételével, feltöltésével, bevitelével,
              rendelkezésre bocsátásával vagy benyújtásával Ön felhatalmazza a
              Társaságot arra, hogy az Ön Tartalmát a Társaság üzleti
              tevékenységével összefüggésben használja, beleértve, de nem
              kizárólagosan a Tartalom továbbításának, nyilvános
              megjelenítésének, terjesztésének, nyilvános előadásának,
              másolásának, sokszorosításának és fordításának jogát; és az Ön
              nevének közzétételére a Tartalommal kapcsolatban.
              <br />
              <br />
              ⦁ Nem fizetünk kompenzációt az Ön Tartalmának használatáért. A
              Társaság nem köteles közzétenni vagy élvezni az Ön által küldött
              Tartalmat, és bármikor eltávolíthatja a Tartalmat.
              <br />
              <br />
              ⦁ A Tartalom közzétételével, feltöltésével, bevitelével,
              rendelkezésre bocsátásával vagy beküldésével Ön szavatolja és
              kijelenti, hogy a Tartalmához fűződő összes jog az Ön tulajdonában
              van.
              <br />
              <br />
            </p>
          </div>

          <div
            id="Disclaimer of Certain Liabilities"
            className={containerStyle}
          >
            <h3 className={headStyle}>Bizonyos kötelezettségek kizárása</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A weboldalon keresztül elérhető információk tipográfiai
              hibákat vagy pontatlanságokat tartalmazhatnak. A Vállalat nem
              vállal felelősséget ezekért a pontatlanságokért és hibákért.
              <br />
              <br />
              ⦁ A Társaság nem vállal felelősséget a weboldalon található
              Tartalom és az azon elérhető szolgáltatások elérhetőségéért,
              pontosságáért, megbízhatóságáért, alkalmasságáért és
              időszerűségéért. Az alkalmazandó jogszabályok által megengedett
              legnagyobb mértékben minden ilyen Tartalmat és szolgáltatást
              "adott állapotban" biztosítunk. A Vállalat kizár minden garanciát
              és feltételt a jelen Tartalommal és szolgáltatásokkal
              kapcsolatban, beleértve az eladhatóságra és az adott célra való
              alkalmasságra vonatkozó garanciákat és rendelkezéseket.
              <br />
              <br />
              ⦁ Az alkalmazandó jogszabályok által megengedett legnagyobb
              mértékben a Társaság semmilyen esetben sem vállal felelősséget
              semmilyen közvetlen, közvetett, véletlenszerű, következményes,
              különleges, büntető jellegű kárért, beleértve, de nem
              kizárólagosan az élvezet, az adatok vagy a nyereség elvesztéséből
              eredő károkat, a weboldal élvezetével vagy végrehajtásával
              összefüggésben, a weboldal vagy szolgáltatásai élvezetének
              képtelenségével vagy késedelmével összefüggésben, vagy a weboldal
              bármely tartalmáért, vagy más módon, amely a weboldal élvezetéből
              ered, szerződéses és szerződésen kívüli felelősségen vagy más
              okból ered.
              <br />
              <br /> <br />
              <br />
              Ha egy adott esetben tilos a felelősségért való felelősség
              kizárása vagy korlátozása, akár következményes, akár véletlen, a
              felelősség kizárása vagy korlátozása nem vonatkozik Önre.
              <br />
              <br />
            </p>
          </div>

          <div id="Earnings Disclaimer" className={containerStyle}>
            <h3 className={headStyle}>Nyereségre vonatkozó jogi nyilatkozat</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ Bár mindent megteszünk annak biztosítása érdekében, hogy
              pontosan képviseljük az ezen a weboldalon felülvizsgált összes
              terméket és szolgáltatást, meg kell jegyezni, hogy a Qoodo és
              hirdetői / szponzorai kifejezetten kijelentették, hogy a NAP-token
              (a továbbiakban és a továbbiakban: "token") nem kapcsolódik
              bevételi szándékhoz, és nem is szándékozik ilyen eszközként
              használni. A token lehetőséget ad a vásárlóknak, hogy részt
              vegyenek több olyan vállalkozásban, amelyek egyértelműen
              szerepelnek a fehér könyvünkben, és itt ér véget a hasznossága.
              <br />
              <br />⦁ Információink, termékeink és szolgáltatásaink
              használatának saját átvilágításán kell alapulnia, és elfogadja,
              hogy a Nap Token és a weboldal hirdetői / szponzorai nem vállalnak
              felelősséget vállalkozásának sikeréért vagy kudarcáért, amely
              közvetlenül vagy közvetve kapcsolódik az ezen a weboldalon
              felülvizsgált vagy hirdetett információink, termékeink és
              szolgáltatásaink megvásárlásához és használatához.
              <br />
              <br />
            </p>
          </div>

          <div id="Volatility Risks" className={containerStyle}>
            <h3 className={headStyle}>Volatilitási kockázatok</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A felhasználó tudomásul veszi, hogy a kriptovaluták, a
              blokklánc tokenek és más digitális eszközök rendkívül ingadozóak
              számos tényező miatt, beleértve, de nem kizárólagosan az
              elfogadást, a keresletet, a technológiát, a biztonságot és a
              globális gazdasági tényezőket.
              <br />
              <br />
              ⦁ A felhasználó tudomásul veszi, hogy tokenünk ára nagyon rövid
              idő alatt gyorsan változhat, többek között a piaci feltételek, a
              globális politikai feltételek,economic trends, technological
              advancements, regulatory factors, and adaptability of new
              technologies.
              <br />
              <br />
              ⦁ A Felhasználó tudomásul veszi, hogy az ilyen volatilitás
              potenciálisan jelentős veszteségeknek teheti ki a felhasználót. A
              Felhasználónak ezért minden tranzakcióban való részvétel előtt
              figyelembe kell vennie az összes kockázati tényezőt, beleértve
              azok pénzügyi helyzetét és kockázattűrési szintjét.
              <br />
              <br />
              ⦁ Nem vállalunk felelősséget semmilyen veszteségért, amelyet a
              felhasználó az ilyen volatilitás következtében elszenvedhet, és a
              felhasználó vállalja, hogy nem tartja felelősnek a Vállalatot
              semmilyen pénzügyi kárért vagy veszteségért.
              <br />
              <br />
              ⦁ Kizárólag a felhasználó felelőssége annak meghatározása, hogy a
              potenciális előnyök meghaladják-e a tokenünk megvásárlásával,
              birtoklásával és/vagy eladásával járó kockázatokat. Javasoljuk,
              hogy a felhasználók konzultáljanak a megfelelő jogi, pénzügyi és
              adótanácsadókkal, mielőtt bármilyen tranzakcióban részt vennének.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              A Qoodo nem vállal felelősséget és kizár minden felelősséget a
              tokenek alkalmasságával kapcsolatban egy adott felhasználó vagy
              bármely felhasználó pénzügyi helyzete szempontjából, és minden
              felhasználó kizárólagos felelősséggel tartozik a tokenek
              vásárlására, tartására vagy eladására vonatkozó döntésekért,
              amelyek a felhasználó saját megítélésén és kutatásán alapulnak.
              <br />
              <br />
            </p>
          </div>

          <div id="Indenification" className={containerStyle}>
            <h3 className={headStyle}>Függetlenség</h3>
            <p className={paraStyle}>
              Ön vállalja, hogy kártalanítja, megvédi és mentesíti a Társaságot,
              annak vezetőit, igazgatóit, alkalmazottait, ügynökeit és harmadik
              feleit minden költségért, veszteségért, kiadásért (beleértve az
              ügyvédi díjakat is), a weboldal, annak szolgáltatásai, valamint a
              Társaság szolgáltatásainak és termékeinek élvezetével vagy
              élvezetére való képtelenségével kapcsolatos vagy abból eredő
              felelősségekért, a Felhasználó a Feltételek megsértéséért vagy
              harmadik felek jogainak megsértéséért, vagy az alkalmazandó
              jogszabályok Ön általi megsértése. A Vállalat vállalhatja a
              kizárólagos védelmet, és Önnek együtt kell működnie a Társasággal
              a rendelkezésre álló védekezés érvényesítésében.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              ⦁ Megszüntetés és hozzáférés korlátozása
              <br />
              <br />
              ⦁ A Társaság bármikor, előzetes értesítés nélkül megszüntetheti az
              Ön hozzáférését és fiókját a weboldalhoz és a kapcsolódó
              szolgáltatásokhoz, vagy bármely részéhez, ha megsérti a
              Feltételeket.
              <br />
              <br />
              Megfelelőségi felelősségi záradék
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              ⦁ Megfelelőségi felelősség
              <br />
              <br />
              ⦁ A Felhasználó kizárólagos felelőssége, hogy betartsa az összes
              vonatkozó törvényt, szabályozást és szabályt, beleértve, de nem
              kizárólagosan azokat, amelyek a kriptovalutát, a blokkláncot, az
              adatvédelmet, a magánélet védelmét, az adózást és a pénzmosás
              elleni küzdelmet szabályozzák.
              <br />
              <br />
              ⦁ A Qoodo nem felelős a törvények, rendeletek és szabályok
              Felhasználó általi betartásának ellenőrzéséért vagy
              biztosításáért, és kizár minden felelősséget vagy felelősséget
              ebben a tekintetben.
              <br />
              <br />
              ⦁ Abban az esetben, ha a Felhasználó nem tartja be a vonatkozó
              törvényeket, rendeleteket és szabályokat, és bírságot, büntetést
              vagy egyéb felelősséget szabnak ki, kizárólag a Felhasználó
              felelős az ilyen bírság vagy büntetés megfizetéséért, valamint
              bármely más felelősség teljesítéséért.
              <br />
              <br />
              ⦁ A Felhasználó vállalja, hogy kártalanítja és mentesíti Qoodo-t
              minden olyan követeléstől, igénytől, intézkedéstől, kártól,
              veszteségtől, költségtől vagy kiadástól, korlátozás nélkül
              beleértve a jogi és számviteli díjakat, amelyek a Felhasználó be
              nem tartásából erednek vagy azzal kapcsolatosak.
              <br />
              <br />
              ⦁ A felhasználóknak azt tanácsoljuk, hogy kérjenek független jogi
              tanácsot annak biztosítása érdekében, hogy működésük megfeleljen
              az összes alkalmazandó törvénynek, szabályozásnak és szabálynak. A
              Qoodo nem nyújt jogi tanácsot megfelelőségi kérdésekben.
              <br />
              <br />
            </p>
          </div>

          <div
            id="General Clauses
"
            className={containerStyle}
          >
            <h3 className={headStyle}>Általános rendelkezések</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ A Feltételek irányadó joga annak az országnak az anyagi
              joga, ahol a Társaságot alapították, kivéve a kollíziós
              szabályokat. Nem használhatja a weboldalt olyan joghatóságokban,
              amelyek nem érvényre juttatják a Feltételek összes rendelkezését.
              <br />
              <br />⦁ A Feltételek vagy a weboldal használata következtében
              semmilyen vegyesvállalati, partnerségi, foglalkoztatási vagy
              ügynöki kapcsolat nem jöhet létre Ön és a Vállalat között.
              <br />
              <br />⦁ A Feltételek egyetlen rendelkezése sem csorbítja a
              Vállalat azon jogát, hogy megfeleljen a kormányzati, bírósági,
              rendőrségi és bűnüldözési kéréseknek vagy követelményeknek a
              weboldal élvezetével kapcsolatban.
              <br />
              <br />⦁ Ha a Feltételek bármely része érvénytelennek vagy
              végrehajthatatlannak bizonyul az alkalmazandó jogszabályokkal
              összhangban, akkor az érvénytelen vagy végrehajthatatlan
              záradékokat érvényes és végrehajtható záradékok váltják fel,
              hasonlónak kell lenniük a Feltételek eredeti verziójához, és a
              Feltételek egyéb részei és szakaszai alkalmazandók Önre és a
              Vállalatra.
              <br />
              <br />⦁ A Feltételek alkotják a teljes megállapodást Ön és a
              Vállalat között a weboldal élvezetére vonatkozóan, és a Feltételek
              hatályon kívül helyeznek minden korábbi kommunikációt és
              ajánlatot, legyen az elektronikus, szóbeli vagy írásbeli, Ön és a
              Vállalat között.
              <br />
              <br />⦁ A Vállalat és leányvállalatai nem vállalnak felelősséget
              kötelezettségei teljesítésének elmulasztásáért vagy késedelméért,
              ha a hiba vagy késedelem a Vállalat ésszerű ellenőrzésén kívül eső
              okból ered, beleértve a műszaki hibákat, természeti
              katasztrófákat, akadályokat, embargókat, zavargásokat,
              törvényeket, rendeleteket, jogszabályokat vagy
              kormányrendeleteket, terrorcselekményeket, háborút vagy bármely
              más, a Társaság ellenőrzésén kívül eső erőt.
              <br />
              <br />⦁ A Társaság és Ön között a weboldallal vagy más kapcsolódó
              kérdésekkel vagy a Feltételekkel kapcsolatos viták, igények,
              követelések, viták vagy kereseti jogalapok esetén Ön és a Vállalat
              megállapodnak abban, hogy megpróbálják megoldani az ilyen
              ellentmondásokat, igényeket, követeléseket, vitákat vagy kereseti
              jogalapokat jóhiszemű tárgyalással, és az ilyen tárgyalások
              sikertelensége esetén, kizárólag annak az országnak a bíróságain
              keresztül, ahol a Társaságot alapították.
            </p>
          </div>

          <div id="Complaints" className={containerStyle}>
            <h3 className={headStyle}>Panaszok</h3>
            <p className={paraStyle}>
              Elkötelezettek vagyunk az Ön személyes adatainak gyűjtésével vagy
              felhasználásával kapcsolatos panaszok megoldása iránt. Ha panaszt
              szeretne tenni a jelen Feltételekkel vagy a személyes adataival
              kapcsolatos gyakorlatunkkal kapcsolatban, kérjük, vegye fel velünk
              a kapcsolatot weboldalunkon keresztül. Panaszára a lehető
              leghamarabb, de legkésőbb 30 napon belül válaszolunk. Reméljük,
              hogy a tudomásunkra hozott panaszokat megoldjuk, azonban ha úgy
              érzi, hogy panaszát nem oldották meg megfelelően, fenntartja
              magának a jogot, hogy kapcsolatba lépjen a helyi adatvédelmi
              felügyeleti hatósággal.
            </p>
          </div>

          <div
            id="Contact Information
"
            className={containerStyle}
          >
            <h3 className={headStyle}>Kapcsolattartási adatok</h3>
            <p className={paraStyle}>
              Örömmel fogadjuk a Feltételeinkkel kapcsolatos észrevételeit vagy
              kérdéseit. Felveheti velünk a kapcsolatot a weboldalunkon elérhető
              elérhetőségeken keresztül.
            </p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Infoeng;
