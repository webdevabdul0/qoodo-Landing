import Sidebar from "./Sidebar";

const Infohun = () => {
  const headStyle = `text-[#4A60FF] text-[30px] sm:text-[48px] sm:text-left text-center font-bold`;
  const paraStyle = `text-white break-words  text-base sm:text-xl font-normal`;
  const containerStyle = `flex justify-start items-center  sm:items-start flex-col gap-3`;
  const listStyle = `text-white text-base sm:text-xl font-normal list-disc pl-5`;

  return (
    <div className="wrapper  mt-[160px]  mx-3 sm:mx-10 md:mx-[100px]">
      <div className="contain xl:flex-row flex-col-reverse flex justify-between items-start gap-[60px]">
        <div className="flex flex-col gap-[20px] justify-start items-start w-full">
          <h2 className="gr-text font-bold text-center sm:text-left text-[35px] sm:text-[48px]">
            Felhasználási feltételek
          </h2>
          <h4 className="text-[#FF866D] font-bold text-lg sm:text-2xl">
            Utolsó frissítés dátuma: 2025.01.27
          </h4>

          <div id="Introduction" className={containerStyle}>
            <h3 className={headStyle}>Bevezetés</h3>
            <p className={paraStyle}>
              Az itt meghatározott Általános Szerződési Feltételek (a
              továbbiakban: "Feltételek") szabályozzák a Qoodo (a "Vállalat",
              "mi", "minket" vagy "miénk") tulajdonában lévő és üzemeltetett
              szolgáltatások használatát, beleértve:
            </p>
            <ul className={listStyle}>
              <li>
                <strong>Weboldalaink:</strong> Qoodo.io, Naplozz.io, Naplózz.hu
              </li>
              <li>
                <strong>Web alkalmazásaink:</strong> app.qoodo.io,
                app.naplozz.io, app.naplozz.hu
              </li>
              <li>
                <strong>Mobil alkalmazásaink:</strong> Qoodo mobil alkalmazás
                (iOS és Android platformokon), Naplózz mobil alkalmazás (iOS és
                Android platformokon) <br /> (a továbbiakban együttesen:
                "Szolgáltatások")
              </li>
            </ul>
            <p className={paraStyle}>
              A jelen Feltételek fontos információkat nyújtanak Önnek, beleértve
              törvényes jogait, jogorvoslati lehetőségeit és kötelezettségeit.
              Javasoljuk, hogy a Szolgáltatások használata előtt figyelmesen
              olvassa el ezeket a Feltételeket.
            </p>
          </div>

          <div id="GeneralProvisions" className={containerStyle}>
            <h3 className={headStyle}>1. Általános rendelkezések</h3>
            <ul className={listStyle}>
              <li>
                Fenntartjuk a jogot, hogy saját belátásunk szerint módosítsuk a
                jelen Feltételeket. Minden jelentős változásról legalább 30
                nappal előre értesítjük Önt email-ben vagy a Szolgáltatásokon
                keresztül. A módosítások nem lépnek hatályba visszamenőlegesen,
                és nem csökkentik az Ön meglévő jogait. Ha nem ért egyet a
                módosításokkal, jogában áll megszüntetni fiókját a változások
                hatálybalépése előtt.
              </li>
              <li>
                A Felhasználó, a továbbiakban "Ön" és "Öné", bármely természetes
                vagy jogi személyt jelent, aki vagy amely saját céljaira vagy
                jogi személy nevében használja Szolgáltatásainkat.
              </li>
              <li>
                Ha a Szolgáltatásokat jogi személy nevében használja, garantálja
                és kijelenti, hogy jogosult az adott jogi személyt a jelen
                Feltételek betartására kötelezni.
              </li>
              <li>
                A Szolgáltatások használatával Ön megerősíti, hogy legalább 18
                éves, és teljes mértékben képes és kompetens a jelen Feltételek
                elfogadására és betartására.
              </li>
            </ul>
          </div>

          <div id="Privacy" className={containerStyle}>
            <h3 className={headStyle}>2. Adatvédelem és GDPR megfelelőség</h3>
            <h4 className={headStyle}>2.1. Alapelvek</h4>
            <ul className={listStyle}>
              <li>
                Személyes adatainak kezelése az EU 2016/679 számú Általános
                Adatvédelmi Rendeletének (GDPR) előírásaival összhangban
                történik.
              </li>
              <li>
                Minden adatkezelési tevékenységünk megfelel a jogszerűség,
                tisztességes eljárás és átláthatóság alapelveinek.
              </li>
              <li>
                Személyes adatait kizárólag meghatározott, egyértelmű és
                jogszerű célból gyűjtjük és kezeljük.
              </li>
            </ul>
            <h4 className={headStyle}>2.2. Az Ön jogai</h4>
            <ul className={listStyle}>
              <li>
                <strong>Hozzáférési jog:</strong> joga van tájékoztatást kapni
                az Önről tárolt személyes adatokról
              </li>
              <li>
                <strong>Helyesbítési jog:</strong> kérheti a pontatlan személyes
                adatok helyesbítését
              </li>
              <li>
                <strong>Törléshez való jog:</strong> kérheti személyes adatai
                törlését bizonyos esetekben
              </li>
              <li>
                <strong>Az adatkezelés korlátozásához való jog</strong>
              </li>
              <li>
                <strong>Adathordozhatósághoz való jog:</strong> kérheti adatai
                továbbítását más adatkezelőhöz
              </li>
              <li>
                <strong>Tiltakozáshoz való jog:</strong> tiltakozhat személyes
                adatai kezelése ellen
              </li>
              <li>
                <strong>
                  Automatizált döntéshozatallal kapcsolatos jogok:
                </strong>{" "}
                kérheti az emberi beavatkozást
              </li>
            </ul>
            <h4 className={headStyle}>2.3. Az adatkezelés jogalapjai</h4>
            <ul className={listStyle}>
              <li>Az Ön kifejezett hozzájárulása</li>
              <li>Szerződés teljesítése</li>
              <li>Jogi kötelezettség teljesítése</li>
              <li>Létfontosságú érdekek védelme</li>
              <li>Közérdekű feladat végrehajtása</li>
              <li>Jogos érdekeink érvényesítése</li>
            </ul>
            <h4 className={headStyle}>2.4. Platform-specifikus adatkezelés</h4>
            <h5>Mobil alkalmazások esetén:</h5>
            <ul className={listStyle}>
              <li>
                Az eszközspecifikus adatok gyűjtése (pl. eszközazonosító,
                operációs rendszer verzió)
              </li>
              <li>Push értesítések kezelése</li>
              <li>Mobileszköz-alapú helymeghatározás (ha engedélyezve van)</li>
              <li>Offline működéshez szükséges adattárolás</li>
            </ul>
            <h5>Web alkalmazások esetén:</h5>
            <ul className={listStyle}>
              <li>Böngésző-alapú adattárolás</li>
              <li>Session kezelés</li>
              <li>Böngésző értesítések kezelése</li>
            </ul>
            <h5>Weboldalak esetén:</h5>
            <ul className={listStyle}>
              <li>Cookie-k és hasonló technológiák használata</li>
              <li>Analitikai adatok gyűjtése</li>
              <li>Marketing célú adatkezelés (ha engedélyezve van)</li>
            </ul>
            <h4 className={headStyle}>2.5. Adatbiztonság</h4>
            <ul className={listStyle}>
              <li>
                Megfelelő technikai és szervezési intézkedéseket alkalmazunk a
                személyes adatok védelmére
              </li>
              <li>Rendszeres biztonsági mentéseket és frissítéseket végzünk</li>
              <li>Az adatokhoz való hozzáférést szigorúan szabályozzuk</li>
              <li>
                Adatvédelmi incidensek esetén 72 órán belül értesítjük az
                illetékes hatóságot és az érintetteket
              </li>
            </ul>
          </div>

          <div id="YourAccount" className={containerStyle}>
            <h3 className={headStyle}>3. Az Ön fiókja</h3>

            <ul className={listStyle}>
              <li>
                3.1. Ön felelős fiókja biztonságáért és a hozzáférési adatok
                titkosságáért.
              </li>
              <li>
                3.2. Jogosulatlan hozzáférés esetén köteles azonnal értesíteni
                minket.
              </li>
              <li>
                3.3. A Társaság fenntartja a jogot a fiók felfüggesztésére vagy
                törlésére a Feltételek súlyos vagy ismételt megsértése esetén,
                előzetes értesítés mellett.
              </li>
            </ul>
          </div>

          <div id="Services" className={containerStyle}>
            <h3 className={headStyle}>4. Szolgáltatások</h3>
            <h4 className={headStyle}>4.1. Alapvető szolgáltatások</h4>
            <ul className={listStyle}>
              <li>
                A Szolgáltatások használata a jelen Feltételeknek megfelelően
                történhet.
              </li>
              <li>A Szolgáltatásokat nem használhatja illegális célokra.</li>
              <li>
                A szolgáltatások használatáért díjat számíthatunk fel, amelyről
                előzetesen tájékoztatjuk.
              </li>
            </ul>
            <h4 className={headStyle}>4.2. Fizetési feltételek</h4>
            <ul className={listStyle}>
              <li>A fizetési feltételeket külön dokumentumban részletezzük.</li>
              <li>Használhatunk hitelesített fizetési rendszereket.</li>
              <li>
                A fizetési rendszerek jutalékairól előzetesen tájékoztatást
                adunk.
              </li>
            </ul>
          </div>

          <div id="TechnicalRequirements" className={containerStyle}>
            <h3 className={headStyle}>5. Technikai követelmények</h3>
            <h4 className={headStyle}>
              5.1. Mobil alkalmazások minimális rendszerkövetelmei
            </h4>
            <ul className={listStyle}>
              <li>
                <strong>iOS:</strong> iOS 12.0 vagy újabb verzió
              </li>
              <li>
                <strong>Android:</strong> Android 6.0 vagy újabb verzió
              </li>
            </ul>
            <h4 className={headStyle}>
              5.2. Web alkalmazások támogatott böngészői
            </h4>
            <ul className={listStyle}>
              <li>
                <strong>Google Chrome:</strong> utolsó két fő verzió
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> utolsó két fő verzió
              </li>
              <li>
                <strong>Safari:</strong> utolsó két fő verzió
              </li>
              <li>
                <strong>Microsoft Edge:</strong> utolsó két fő verzió
              </li>
            </ul>
          </div>

          <div id="IntellectualProperty" className={containerStyle}>
            <h3 className={headStyle}>
              6. Tiltott felhasználások és szellemi tulajdon
            </h3>
            <h4 className={headStyle}>6.1. Licencadás</h4>
            <p className={paraStyle}>
              A Társaság nem átruházható, nem kizárólagos, visszavonható
              licencet ad Önnek a Szolgáltatások használatára a Feltételeknek
              megfelelően.
            </p>
            <h4 className={headStyle}>6.2. Tiltott felhasználások</h4>
            <ul className={listStyle}>
              <li>Jogellenes vagy tiltott célokra</li>
              <li>
                Olyan módon, amely letilthatja, károsíthatja vagy zavarhatja a
                Szolgáltatásokat
              </li>
              <li>
                A Szolgáltatások működésének akadályozására vagy megszakítására
              </li>
            </ul>
            <h4 className={headStyle}>6.3. Szellemi tulajdonjogok</h4>
            <ul className={listStyle}>
              <li>
                Minden tartalom, beleértve a szöveget, kódot, grafikát, logókat,
                képeket a Társaság tulajdonát képezi
              </li>
              <li>A tartalom védett szellemi tulajdonjogi törvények által</li>
              <li>
                Tilos a tartalom engedély nélküli felhasználása, módosítása vagy
                terjesztése
              </li>
            </ul>
          </div>

          <div id="Liability" className={containerStyle}>
            <h3 className={headStyle}>7. Felelősségi korlátozások</h3>
            <h4 className={headStyle}>7.1. Szolgáltatás kizárása</h4>
            <p className={paraStyle}>
              A Szolgáltatásokat "adott állapotban" nyújtjuk, minden kifejezett
              vagy hallgatólagos garancia nélkül.
            </p>
            <h4 className={headStyle}>7.2. Felelősség kizárása</h4>
            <ul className={listStyle}>
              <li>A Szolgáltatások megszakításáért vagy hibáiért</li>
              <li>Az adatvesztésért vagy károkért</li>
              <li>Harmadik felek által okozott károkért</li>
              <li>Közvetett vagy következményi károkért</li>
            </ul>
          </div>

          <div id="Complaints" className={containerStyle}>
            <h3 className={headStyle}>8. Panaszkezelés és jogorvoslat</h3>
            <h4 className={headStyle}>8.1. Panaszkezelés</h4>
            <ul className={listStyle}>
              <li>
                Panaszait elsősorban a weboldalon található űrlapon keresztül
                várjuk
              </li>
              <li>
                Minden panaszt 30 napon belül kivizsgálunk és megválaszolunk
              </li>
            </ul>
            <h4 className={headStyle}>8.2. Jogorvoslati lehetőségek</h4>
            <ul className={listStyle}>
              <li>
                Jogában áll panasszal élni az illetékes adatvédelmi hatóságnál
              </li>
              <li>Bírósági jogorvoslatra is lehetősége van</li>
            </ul>
          </div>

          <div id="Contact" className={containerStyle}>
            <h3 className={headStyle}>
              9. Kapcsolattartás és Adatvédelmi Tisztviselő
            </h3>
            <h4 className={headStyle}>9.1. Elérhetőségeink</h4>
            <ul className={listStyle}>
              <li>
                <strong>Adatvédelmi kérdésekben:</strong> info@qoodo.io
              </li>
              <li>
                <strong>Általános megkeresések:</strong> info@qoodo.io
              </li>
              <li>
                <strong>Postai cím:</strong> 2800 Tatabánya Boróka utca 7.
              </li>
            </ul>
            <h4 className={headStyle}>9.2. Illetékes adatvédelmi hatóság</h4>
            <ul className={listStyle}>
              <li>
                <strong>Hatóság:</strong> Nemzeti Adatvédelmi és
                Információszabadság Hatóság (NAIH)
              </li>
              <li>
                <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
              </li>
              <li>
                <strong>Postacím:</strong> 1363 Budapest, Pf.: 9.
              </li>
              <li>
                <strong>Telefon:</strong> +36 (1) 391-1400
              </li>
              <li>
                <strong>E-mail:</strong> ugyfelszolgalat@naih.hu
              </li>
              <li>
                <strong>Webhely:</strong>{" "}
                <a
                  href="http://www.naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.naih.hu
                </a>
              </li>
            </ul>
          </div>

          <div id="final" className={containerStyle}>
            <h3 className={headStyle}>10. Záró rendelkezések</h3>
            <h4 className={headStyle}>10.1. Irányadó jog és illetékesség</h4>
            <p className={paraStyle}>
              A jelen Feltételekre Magyarország jogszabályai az irányadók.
              Bármely jogvita esetén a magyar bíróságok rendelkeznek kizárólagos
              illetékességgel.
            </p>
            <h4 className={headStyle}>10.2. Érvénytelen rendelkezés</h4>
            <p className={paraStyle}>
              Ha a Feltételek bármely rendelkezése érvénytelennek vagy
              végrehajthatatlannak bizonyul, az a többi rendelkezés
              érvényességét nem érinti. Az érvénytelen rendelkezést olyan
              érvényes rendelkezéssel kell helyettesíteni, amely a lehető
              legjobban megfelel az eredeti rendelkezés céljának.
            </p>
            <h4 className={headStyle}>10.3. Hatálybalépés</h4>
            <p className={paraStyle}>
              A jelen Feltételek 2025. január 27-től hatályosak és visszavonásig
              érvényesek.
            </p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Infohun;
