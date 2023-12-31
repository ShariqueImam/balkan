import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/router";
import Animator from "../../components/UI/Animator";
import Footer from "../../components/Main/Footer/Footer";
const index = () => {
  const { locale } = useRouter();

  const style = {
    heading: "font-semibold my-2 md:my-3 ",
    para: "text-light my-2 md:my-3 leading-[35px] text-black text-md",
    smallHeading: "text-2xl md:text-2xl text-black my-6",
  };
  const onScroll = (value) => {};
  return (
    <Animator>
      <div className="min-h-[100vh] ">
        <Navbar onScroll={onScroll} />
        {/* adding the privacy policty content */}
        <div className="text-red font-light w-[95%] md:w-[55%] mx-auto py-4 md:py-12">
          <p className="text-4xl md:text-4xl font font-semibold tracking-wider my-12 text-center">
            {locale == "en"
              ? "Terms & Conditions of Entry"
              : "Правила и условия на Вход"}
          </p>

          <p className={style.smallHeading}>
            {locale == "en" ? "1. General Information" : "1. Обща информация"}
          </p>

          <p className={style.para}>
            {locale == "en"
              ? "The Gumball 3000 rally (the “Event”) is not a race or a competition. You must not compete in any manner with other Participants. You must not place any bets of any kind in relation to the You must drive safely in accordance with all road laws in each country and with proper courtesy to all other Participants and members of the public. In particular, you must not drive recklessly. If you are seen driving recklessly or otherwise not in compliance with all Applicable Laws (see section 12 below) by the Organiser, its employees, nominees or other Participants you will be removed and prohibited from taking any further part in the Event. Your participation in the Event and any payment of the Entry Fee shall be deemed to be your acceptance of these Terms and Conditions. If you have any questions regarding these Terms and Conditions or need any further clarification you should contact the Event Organisers. If you do not agree with any part of these Terms and Conditions you should not participate in the Event."
              : "Ралито Gumball 3000 („Събитието“) не е състезание или състезание. Не трябва да се състезавате по никакъв начин с други участници. Ти трябва не правете никакви залози от какъвто и да е вид във връзка с Трябва да шофирате безопасно в съответствие с всички закони за движение по пътищата във всяка страна и с подходяща учтивост към всички други участници и членове на обществеността. По-специално, не трябва да шофирате безразсъдно. Ако ви видят да шофирате безразсъдно или по друг начин в неспазване на всички приложими закони (вижте раздел 12 по-долу) от Организатора, негови служители, номинирани лица или други участници ще бъдете отстранени и ще ви бъде забранено да вземате каквито и да било следваща част от събитието. Вашето участие в Събитието и всякакви плащането на Таксата за участие ще се счита за приемане от Ваша страна тези Общи условия. Ако имате някакви въпроси относно тези Правила и условия или се нуждаете от допълнителни пояснения, които трябва свържете се с организаторите на събитието. Ако не сте съгласни с някоя част от тези Правила и условия не трябва да участвате в Събитието."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en" ? "Age" : "Възраст"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "          You must be 18 or above on the first day of the event in order to participate."
              : "Трябва да сте навършили 18 години на първия ден от събитието, за да можете участвам."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en" ? "3. License and Passport" : "3. Лиценз и паспорт"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? " You must hold a current, valid and unrestricted driver’s license that will be accepted in any and all countries and a current and valid passport together with the relevant visa(s) for each country visited on the Event during the route. It is your own responsibility to ensure you are in possession of the correct documents you may require for the Event."
              : "Трябва да притежавате актуална, валидна и неограничена шофьорска книжка, която ще бъдат приети във всяка и всички страни и ще бъдат актуални и валидни паспорт заедно със съответната(ите) виза(и) за всяка посетена страна на събитието по време на маршрута. Ваша отговорност е да осигурите вие притежавате правилните документи, които може да са ви необходими за Събитие."}
          </p>
          <p className={style.smallHeading}></p>
          <p className={style.para}></p>
          <p className={style.smallHeading}></p>
          <p className={style.para}></p>

          <p className={style.smallHeading}></p>
          <p className={style.para}></p>

          {/* <p className={style.heading}>
          1. Information über den Verantwortlichen und den
          Datenschutzbeauftragten
          </p>
          <p className={style.para}>
          Im Folgenden informieren wir über die Erhebung personenbezogener Daten
          bei Nutzung unserer Webseite.
          </p>
          <p className={style.para}>
          Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutzgrundverordnung (die
            „DSGVO“) und anderer nationaler Datenschutzgesetze der Mitgliedstaaten
            sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:
            </p>
            <p className={style.para}>
            Webseite: www.nachsendeauftrag-einrichten.de
            </p>
            <p className={style.para}>
            Unseren Datenschutzbeauftragten erreichen Sie unter
            datenschutz@nachsendeauftrag-einrichten.de.
            </p>{" "}
            <p className={style.heading}>
            2. Allgemeines zur Verarbeitung personenbezogener Daten
            </p>
            <p className={style.para}>
            Wir erheben und verwenden personenbezogene Daten unserer Nutzer
            grundsätzlich nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Webseite sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten
            unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers.
            Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige
            Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich
            ist und die Verarbeitung der Daten durch gesetzliche Vorschriften
            gestattet ist.
            </p>
            <p className={style.para}>
            Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
            unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            </p>
            <p className={style.para}>
            Die personenbezogenen Daten der betroffenen Person werden gelöscht
            oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
            Speicherung kann darüber hinaus erfolgen, wenn dies durch den
            europäischen oder nationalen Gesetzgeber in unionsrechtlichen
            Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
            Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
            Löschung der Daten erfolgt auch dann, wenn eine durch die genannten
            Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
            Erforderlichkeit zur weiteren Speicherung der Daten für einen
            Vertragsabschluss oder eine Vertragserfüllung besteht.
            </p>
            <p className={style.para}>
            Bei Ihrer Kontaktaufnahme mit uns per E-Mail werden die von Ihnen
            mitgeteilten Daten von uns gespeichert, um Ihre Frage zu beantworten.
            Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die
            Speicherung nicht mehr erforderlich ist, also der Zweck der
            Speicherung entfallen ist, oder schränken die Verarbeitung ein, falls
            gesetzliche Aufbewahrungspflichten bestehen.
            </p>
            <p className={style.para}>
            Falls wir für einzelne Funktionen unseres Angebotes auf beauftragte
            Dienstleister zurückgreifen oder Ihre Daten für gewerbliche Zwecke
            nutzen möchten, werden wir Sie untenstehend im Detail über die
            jeweiligen Vorgänge informieren. Dabei nennen wir auch die
            festgelegten Kriterien der Speicherdauer.
            </p>
            <p className={style.heading}>3. Ihre Rechte als Betroffener</p>
            <p className={style.para}>
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
            </p>
            <p className={style.para}>
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
            beschweren.
            </p>
            <p className={style.para}>
            Sollten Sie Fragen, Kommentare oder Anfragen bezüglich der Erhebung,
            Verarbeitung und Nutzung Ihrer personenbezogenen Daten durch uns
            haben, wenden Sie sich bitte ebenfalls an uns unter den oben
            angegebenen Kontaktdaten.
            </p>
            <p className={style.heading}>
            4. Erhebung personenbezogener Daten bei Besuch unserer Webseite
            </p>
            <p className={style.para}>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Bei der bloß informatorischen Nutzung
            der Webseite, also wenn Sie nicht registriert werden oder uns
            anderweitig Informationen übermitteln, erheben wir nur die
            personenbezogenen Daten, die Ihr Browser an unseren Server
            übermittelt. Wenn Sie unsere Webseite betrachten möchten, erheben wir
            die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen
            unsere Webseite anzuzeigen und die Stabilität und Sicherheit zu
            gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO):
            </p>
            <li className={style.para}>IP-Adresse</li>
            <li className={style.para}>Datum und Uhrzeit der Anfrage</li>
            <li className={style.para}>Inhalt der Anforderung (konkrete Seite)</li>
            <li className={style.para}>Zugriffsstatus / HTTP-Statuscode</li>
            <li className={style.para}>jeweils übertragene Datenmenge</li>
            <li className={style.para}>
            Webseite, von der die Anforderung kommt (Browsertyp)
            </li>
            <li className={style.para}>Betriebssystem des Nutzers</li>
            <p className={style.para}>
            Die Daten werden ebenfalls in den Logfiles unseres Systems
            gespeichert. Eine Speicherung dieser Daten zusammen mit anderen
            personenbezogenen Daten des Nutzers findet nicht statt
            (Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className={style.para}>
            Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der
            Webseite sicherzustellen. Zudem dienen uns die Daten zur Optimierung
            der Webseite und zur Sicherstellung der Sicherheit unserer
            informationstechnischen Systeme. Eine Auswertung der Daten zu
            Marketingzwecken findet in diesem Zusammenhang nicht statt.
            </p>
            <p className={style.para}>
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
            ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung
            der Daten zur Bereitstellung der Webseite ist dies der Fall, wenn die
            jeweilige Sitzung beendet ist.
            </p>
            <p className={style.para}>
            Im Falle der Speicherung der Daten in Logfiles ist dies nach
            spätestens sieben Tagen der Fall. Eine darüberhinausgehende
            Speicherung ist möglich. In diesem Fall werden die IP-Adressen der
            Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden
            Clients nicht mehr möglich ist. Die Erfassung der Daten zur
            Bereitstellung der Webseite und die Speicherung der Daten in Logfiles
            ist für den Betrieb der Internetseite zwingend erforderlich. Es
            besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit.
            </p>
            <p className={style.heading}>5. Einsatz und Verwendung von Cookies</p>
            <p className={style.para}>
            Unsere Webseite nutzt Cookies. Bei Cookies handelt es sich um kleine
            Textdateien, die auf Ihrer Festplatte den von Ihnen verwendeten
            Browser zugeordnet, gespeichert werden und durch welche der Stelle,
            die den Cookie setzt, bestimmte Informationen zufließen. Cookies
            können keine Programme ausführen oder Viren auf Ihren Computer
            übertragen. Sie helfen das Internetangebot insgesamt
            nutzerfreundlicher und effektiver zu machen. Die Rechtsgrundlage für
            die Verarbeitung personenbezogener Daten unter Verwendung von Cookies
            ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className={style.para}>
            Unsere Webseiten setzen temporäre und permanente Cookies ein.
            Temporäre Cookies werden automatisiert gelöscht, wenn Sie den Browser
            schließen. Dazu zählen insbesondere die sogenannten Session-Cookies.
            Diese speichern eine sogenannte Session-ID, mit welcher sich
            verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen
            lassen. Dadurch kann ihr Rechner wiedererkannt werden, wenn Sie auf
            unserer Webseite zurückkehren. Die Session-Cookies werden gelöscht,
            wenn Sie sich ausloggen oder den Browser schließen. Permanente Cookies
            hingegen werden automatisiert nach einer vorgegebenen Dauer gelöscht,
            die sich je nach Cookie unterscheiden kann. Sie können die Cookies in
            den Sicherheitseinstellungen Ihres Browsers jederzeit löschen.
            </p>
            <p className={style.para}>
            Unsere Webseite kann auch grundsätzlich ohne Cookies betrachtet werden
            Sie können Ihre Browsereinstellung entsprechend Ihren Wünschen
            konfigurieren und z.B. die Annahme von sogenannten Third Party Cookies
            oder allen Cookies ablehnen. Bereits gespeicherte Cookies können
            jederzeit gelöscht werden. Dies kann auch automatisiert erfolgen.
            Bitte beachten Sie dabei, dass einzelne Funktionen unserer Webseite
            möglicherweise nicht funktionieren, wenn Sie die Verwendung von
            Cookies deaktiviert haben.
            </p>
            <p className={style.heading}>
            6. Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten
            </p>
            <p className={style.para}>
            Falls Sie eine Einwilligung (Art.6 Abs.1 lit. a DSGVO) zur
            Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit
            widerrufen. Ein solcher Widerruf beeinflusst die Zulässigkeit der
            Verarbeitung Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber
            uns ausgesprochen haben.
            </p>
            <p className={style.para}>
            Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die
            Interessenabwägung stützen, können Sie Widerspruch gegen die
            Verarbeitung einlegen. Dies ist der Fall, wenn die Verarbeitung
            insbesondere nicht zur Erfüllung eines Vertrags mit Ihnen erforderlich
            ist, was von uns jeweils bei der nachfolgenden Beschreibung der
            Funktionen dargestellt wird (z.B. Art. 6 Abs.1 lit. f DSGVO). Bei
            Ausübung eines solchen Widerspruchs bitten wir um Darlegung der
            Gründe, weshalb wir Ihre personenbezogenen Daten nicht wie von uns
            durchgeführt verarbeiten sollten. Im Fall Ihres begründeten
            Widerspruchs prüfen wir die Sachlage und werden entweder die
            Datenverarbeitung einstellen bzw. anpassen oder Ihnen unsere
            zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir die
            Verarbeitung fortführen werden.
            </p>
            <p className={style.heading}>7. Verarbeitung personenbezogener Daten</p>
            <p className={style.para}>
            Die Daten werden für die Vertragserfüllung auf Grundlage des Art. 6
            Abs. 1 lit. b DSGVO verarbeitet. Zur Abwicklung Ihres Auftrags
            arbeiten wir teilweise auch mit Dienstleistern zusammen, die uns ganz
            oder teilweise bei der Durchführung der geschlossenen Verträge
            unterstützen.
            </p>
            <p className={style.para}>
            Enso erfolgt eine Weitergabe im Rahmen von gesetzlichen
            Verpflichtungen (z.B. an Ermittlungsbehörden). Weiterhin sind
            Leistungen zum Kundenservice oder auch bzgl. der IT an Dienstleister
            ausgelagert An diese Dienstleister werden die erhobenen Daten auf
            Grundlage des Art. 6 Abs. 1 lit. b DSGVO weitergegeben.
            </p>
            <p className={style.para}>
            Eine Verarbeitung Ihrer Daten in einem Drittstaat erfolgt
            grundsätzlich nicht. Sofern Ihre neue Anschrift jedoch im Ausland
            liegt, erfolgt eine Übergabe der Daten an den dortigen
            Postdienstleister zwecks Vertragserfüllung. oder Ihre Daten werden
            auch in einem sog. Drittstatt verarbeitet. Dies erfolgt entweder, da
            die Übermittlung zur Vertragserfüllung erforderlich ist, auf Basis der
            EU-Standardvertragsklauseln.
          </p> */}
          {/* <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
    <p className={style.heading}>5. Einsatz und Verwendung von Cookies</p> */}
        </div>
        <Footer />
      </div>
    </Animator>
  );
};

export default index;
