import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Animator from "../../components/UI/Animator";

import Footer from "../../components/Main/Footer/Footer";
import { useRouter } from "next/router";

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
              ? "        Privacy Policy & Cookie Policy"
              : "Политика за поверителност и политика за бисквитки"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "          This privacy policy describes the personal data collected or generated (processed) when you use the Gumball 3000’s website. It also explains how your personal data is used, shared and protected, what choices you have relating to your personal data and how you can contact us."
              : "Тази политика за поверителност описва събраните или генерирани лични данни (обработено), когато използвате уебсайта на Gumball 3000. Това също обяснява как вашите лични данни се използват, споделят и защитават, какви избори имате имате отношение към вашите лични данни и как можете да се свържете с нас."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "What Personal Data Do We Collect and When?"
              : "Какви лични данни събираме и кога?"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? " We ask you for certain personal data to provide you with the productsor services you request. For example when you make purchases, contactour customer services, request to receive communications, create an account, participate in our events, or use our website."
              : "Молим ви за определени лични данни, за да ви предоставим продуктите или услуги, които поискате. Например, когато правите покупки, свържете се нашите услуги за клиенти, искане за получаване на съобщения, създаване на акаунт, участвайте в нашите събития или използвайте нашия уебсайт."}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "This personal data includes your:"
              : "Тези лични данни включва вашето:"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "    Contact details, including name, email, telephone number and shipping and billing addresses"
              : "Данни за контакт, включително име, имейл, телефонен номер и доставка и адреси за фактуриране"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? " Login and account information, including password and unique user ID"
              : "Информация за вход и акаунт, включително парола и уникален потребителски идентификатор"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? " Personal details including gender, hometown, date of birth and purchase history"
              : "Лични данни, включително пол, роден град, дата на раждане и история на покупките"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "Payment or credit card information"
              : "Плащане или кредитна карта информация"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "  Passport information, drivers license details"
              : "Паспортна информация, данни за шофьорска книжка"}
          </p>
          <p className={style.smallHeading}>
            {locale == "en" ? "KIDS" : "ДЕЦА"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "We comply with local laws and do not allow children to register on our website when they are under the legal age limit of the country in which they reside. We will ask for parental consent for children participating in Gumball 3000 experiences and events."
              : "Ние спазваме местните закони и не позволяваме на деца да се регистрират в нашия уебсайт, когато са под законовата възрастова граница в страната които пребивават. Ще поискаме родителско съгласие за деца участие в Gumball 3000 преживявания и събития."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "Why and How Do We Use Your Personal Data?"
              : "Защо и как използваме вашите лични данни?"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? " We use your personal data in the following ways:"
              : "Ние използваме вашите лични данни по следните начини:"}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "      To Provide the Features of the Website and Services You Request"
              : "За да предоставим функциите на уебсайта и услугите, които поискате"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "    When you use our website we will use your personal data to provide the requested product or service. For example, if you make a purchase on Gumball3000.com or participate in an event or promotion, we will use the contact information you give us to communicate with you about the purchase, event or promotion. If you contact our customer services, we will use information about you, such as delivery or payment information, or the product you have purchased to help you resolve a problem or question."
              : "Когато използвате нашия уебсайт, ние ще използваме вашите лични данни, за да предоставим заявен продукт или услуга. Например, ако направите покупка на Gumball3000.com или участие в събитие или промоция, ние ще използваме информацията за контакт, която ни предоставяте, за да комуникираме с вас относно покупка, събитие или промоция. Ако се свържете с нашите отдели за обслужване на клиенти, ние ще използва информация за вас, като доставка или плащане информация или продукта, който сте закупили, за да ви помогне да разрешите a проблем или въпрос."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "To Communicate Information about our Products, Services, Events and for Other Promotional Purposes"
              : "За да съобщаваме информация за нашите продукти, услуги, събития и за други промоционални цели"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "    When you consent, we will send you marketing communications and news concerning Gumball 3000’s products, services, events and other promotions. You can opt-out at any time after you have given your consent. If you are an existing customer of Gumball 3000 (for example, if you have placed an order with us), we may use the contact details you provided to send you marketing communications about similar Gumball 3000 products or services where permitted by applicable law (unless you have opted-out). In other cases, we ask for your consent to send you marketing information. We may use the information that you provide to us as well as information from other Gumball 3000 products or services - such as your use of Gumball 3000’s website, your participation in Gumball 3000 events and contests - to personalise communications on products and services that may be interesting for you."
              : "Когато се съгласите, ние ще ви изпращаме маркетингови съобщения и новини относно продуктите, услугите, събитията и други на Gumball 3000 промоции. Можете да се откажете по всяко време, след като сте дали своя съгласие. Ако сте съществуващ клиент на Gumball 3000 (напр. ако сте направили поръчка при нас), може да използваме данните за контакт предоставихте да ви изпращаме маркетингови съобщения за подобни Продукти или услуги на Gumball 3000, когато това е разрешено от приложимото законодателство (освен ако не сте се отказали). В други случаи искаме вашето съгласие за да ви изпратим маркетингова информация. Може да използваме информацията, която вие предоставят ни, както и информация от други продукти на Gumball 3000 или услуги – като например използването от ваша страна на уебсайта на Gumball 3000, вашето участие в събития и състезания Gumball 3000 - за персонализиране комуникации за продукти и услуги, които могат да бъдат интересни за Вие."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "To Operate, Improve and Maintain our Business, Products and Services"
              : "За да управляваме, подобряваме и поддържаме нашия бизнес, продукти и услуги"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "We use the personal data you provide to us to operate our business. For example, when you make a purchase, we use that information for accounting, audits and other internal functions. We may use personal data about how you use our products and services to enhance your user experience and to help us diagnose technical and service problems and administer our website."
              : "Ние използваме личните данни, които ни предоставяте, за да управляваме нашия бизнес. Например, когато правите покупка, ние използваме тази информация за счетоводство, одити и други вътрешни функции. Може да използваме лични данни за това как използвате нашите продукти и услуги, за да подобрите вашия потребител опит и да ни помогне да диагностицираме технически и сервизни проблеми и администриране на нашия уебсайт."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? " To Protect Our or Others' Rights, Property or Safety"
              : "За защита на нашите или на други права, собственост или безопасност"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "          We may also use your personal data about how you use our website to prevent or detect fraud, abuse, illegal use, violations of our Terms of Use, and to comply with court orders, governmental requests or applicable law."
              : "Може също да използваме вашите лични данни за това как използвате нашия уебсайт предотвратяване или откриване на измами, злоупотреби, незаконна употреба, нарушения на нашите Условия на използване и за спазване на съдебни разпореждания, правителствени искания или приложим закон."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en"
              ? "        For General Research and Analysis Purposes"
              : "За общи изследвания и анализи"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "         We use data about how our visitors use our website and services to understand customer behaviour or preferences. For example, we may use information about how visitors to Gumball3000.com search for and find products to better understand the best ways to organise and present product offerings."
              : "Ние използваме данни за това как нашите посетители използват нашия уебсайт и услуги, за да разберете поведението или предпочитанията на клиентите. Например, можем да използваме информация за това как посетителите на Gumball3000.com търсят и намират продукти, за да разберете по-добре най-добрите начини за организиране и представяне продуктови предложения."}
          </p>
          <p className={style.smallHeading}>
            {locale == "en" ? "Other Purposes" : "Други цели"}
          </p>
          <p className={style.para}>
            {locale == "en"
              ? "We may also use your personal data in other ways and will provide specific notice at the time of collection and obtain your consent where necessary."
              : "Може също да използваме вашите лични данни по други начини и ще предоставим конкретно известие по време на събирането и да получите вашето съгласие където е необходимо."}
          </p>

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
