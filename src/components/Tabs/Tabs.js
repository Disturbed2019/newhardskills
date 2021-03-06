import React from 'react';

const Tabs = ({activeTab}) => {
  return (
    <div className={'mt-8'}>
      <div className={`mb-4 ${activeTab === 1 ? 'block' : 'hidden'}`}>
        <h2 className={'text-xl font-bold text-center'}>ДОГОВОР <br/> о платных услугах</h2>
        <p className={'font-bold py-4'}>1. Предмет договора</p>

        <p>1.1. Общество с ограниченной ответственностью «Нью ХардСкиллс», именуемое в
          дальнейшем «Исполнитель», обязуется оказать Заказчику платные услуги.</p>
        <p>1.2. Виды услуг, которые Исполнитель обязуется оказать в соответствии с настоящим
          договором, срок и место их оказания, стоимость услуг, порядок оплаты, иные условия
          оказания услуг и настоящего договора согласовываются сторонами в спецификациях к
          настоящему договору, которые являются его неотъемлемой частью. </p>
        <p>1.3. Услуги оказываются в форме занятий и в иных формах.</p>

        <p className={'font-bold py-4'}>2. Порядок заключения договора.</p>

        <p>2.1. Размещение текста настоящего договора на сайте https://newhardskills.by/ и (или) в
          социальной сети Instagram на странице аккаунта https://www.instagram.com/newhardskills/
          (далее – информационные ресурсы Исполнителя) и направление Заказчику спецификации
          является предложением (офертой) Исполнителя заключить настоящий договор.</p>
        <p>2.2. Заключение настоящего договора производится путем присоединения Заказчика к
          настоящему договору и означает принятие условий настоящего договора в целом без каких-
          либо изменений. </p>
        <p>2.3. Заказчик считается принявшим условия настоящего договора в полном объеме без
          всяких оговорок и исключений посредством подписания спецификации, согласования
          спецификации иным образом, предусмотренным настоящим договором, либо совершением
          иных действий по выполнению условий спецификации (оплата услуг, фактическое
          пользование услугами и т.п.). В случае несогласия Заказчика с какими-либо из положений
          договора, Заказчик не вправе пользоваться услугами по договору.</p>
        <p>
          2.4. Спецификация к договору может быть согласована путем составления одного
          документа, подписанного сторонами, а также путем обмена документами посредством
          согласованных средств связи.
        </p>
        <p>
          2.5. В случае если, Заказчиком будет являться несовершеннолетний в возрасте до
          четырнадцати лет, договор заключается, от его имени его законным представителем -
          родителем, усыновителем или опекуном.
        </p>
        <p>
          2.6. В случае если, Заказчиком будет являться несовершеннолетний в возрасте от
          четырнадцати до восемнадцати лет, договор заключается таким несовершеннолетним с
          согласия его законного представителя - родителя, усыновителя или опекуна.
        </p>
        <p className={'font-bold py-4'}>3. Права и обязанности сторон.</p>
        <p>3.1. Исполнитель обязан:</p>
        <p> 3.1.1. добросовестно выполнить принятые на себя обязательства согласно условиям
          настоящего договора;
        </p>
        <p> 3.1.2. организовать материально-техническое обеспечение оказания услуг в соответствии
          с установленными санитарными нормами, правилами и гигиеническими нормативами;
        </p>
        <p> 3.1.3. предоставить сотрудников для оказания услуг.</p>
        <p>3.2. Исполнитель вправе:</p>
        <p> 3.2.1. в одностороннем порядке переводить Заказчика в другие группы;</p>
        <p> 3.2.2. переносить занятия, оказание иных услуг на другой день;</p>
        <p> 3.2.3. в одностороннем порядке утверждать и изменять расписание оказания услуг, осуществлять замены
          заявленных
          сотрудников;</p>
        <p> 3.2.4. устанавливать правила оказания услуг, которые являются обязательными для
          Заказчика, а также вносить в них изменения. Указанные правила являются частью договора;
        </p>
        <p> 3.2.5. определять самостоятельно формы, методы и способы оказания услуг по договору; </p>
        <p> 3.2.6. в случае нарушения условий настоящего договора Заказчиком отказать ему в
          оказании услуг и (или) приостановить оказание услуг без возврата уплаченных за услуги
          денежных средств;
        </p>
        <p> 3.2.7. отказаться от настоящего договора в случае нарушения Заказчиком его условий;</p>
        <p> 3.2.8. при исполнении настоящего договора привлекать третьих лиц;</p>
        <p> 3.2.9. в одностороннем порядке определять численность посетителей в группах;</p>
        <p> 3.2.10. не оказывать услуги в государственные праздники и праздничные дни,
          установленные и объявленные Президентом Республики Беларусь нерабочими.</p>
        <p>3.3. Заказчик обязуется:</p>

        <p> 3.3.1. при заключении договора и в процессе его исполнения предоставлять Исполнителю
          достоверную и полную информацию. В случаях предоставления неверной информации или
          если у Исполнителя есть основания полагать, что предоставленная информация неполна
          или недостоверна, Исполнитель имеет право отказать в предоставлении услуг;
        </p>
        <p> 3.3.2. соблюдать технику безопасности, санитарные нормы и правила, правила личной
          гигиены, дисциплину; </p>
        <p> 3.3.3. проявлять уважение к администрации, персоналу Исполнителя и к другим
          заказчикам Исполнителя, не посягать на их честь и достоинство;
        </p>
        <p> 3.3.4. сообщать персоналу Исполнителя об изменении контактной информации;</p>
        <p> 3.3.5. извещать Исполнителя о невозможности посещения занятий и иных услуг и о
          причинах данного отсутствия заблаговременно, но в любом случае не позднее чем за сутки
          до начала соответствующего занятия (оказания иных услуг);
        </p>
        <p> 3.3.6. добросовестно относиться к освоению содержания образовательных программ,
          программ воспитания;</p>
        <p> 3.3.7. выполнять требования учредительных документов, правил внутреннего
          распорядка, иных локальных нормативных правовых актов Исполнителя;
        </p>
        <p> 3.3.8. осуществлять оплату стоимости услуг в сроки в соответствии с договором;
        </p>
        <p> 3.3.9. посещать занятия и пользоваться иными услугами согласно расписанию и срокам
          оказания услуг. При пропуске занятий и иных услуг Заказчиком услуга в части организации
          и проведения пропущенных занятий и иных услуг считается оказанной Заказчику в полном
          объеме и подлежит оплате в полном объеме; В случае болезни (травмы) Заказчика,
          длительность которой превышает 1 (один) месяц при условии предъявления
          подтверждающих документов, выданных в установленном порядке организацией,
          осуществляющей медицинскую деятельность, Заказчик вправе продолжить получение услуг
          с учетом частично полученных им до болезни (травмы) услуг в сроки и в соответствии с
          расписанием, установленными Исполнителем;
        </p>
        <p> 3.3.10. не передавать, не распространять и не допускать возможности передачи третьим
          лицам, а также не использовать в коммерческих целях информационные материалы, в том
          числе видео- и звукозаписи, которые предоставляются Заказчику для самостоятельной
          работы в печатном или электронном виде для оказания услуг по договору; </p>
        <p> 3.3.11. не осуществлять на территории Исполнителя, а также в ходе оказания
          Исполнителем услуг фото-, аудио- и (или) видеосъемку без предварительного письменного
          согласия Исполнителя;
        </p>
        <p> 3.3.12. самостоятельно обеспечить работоспособность своего компьютерного,
          телекоммуникационного оборудования и каналов связи.
        </p>
        <p> 3.4. Заказчик вправе:</p>

        <p> 3.4.1. получить услуги, предусмотренные договором;</p>
        <p> 3.4.2. запрашивать у Исполнителя информацию по всем вопросам, касающимся
          надлежащего оказания услуг Исполнителем;
        </p>
        <p> 3.4.3. в одностороннем порядке отказаться от договора. В этом случае Заказчик обязан
          предупредить Исполнителя не менее чем за 30 дней до даты расторжения договора;
        </p>
        <p>3.4.4. в случае пропуска занятия вправе просмотреть видеозапись занятия в порядке
          определенном Исполнителем.
        </p>

        <p> 3.5. Заказчику запрещается:</p>
        <p> 3.5.1. вмешиваться в процесс оказания услуг, требовать изменения формата оказания услуг,
          давать рекомендации сотрудникам Исполнителя;
        </p>

        <p> 3.6. Заказчик не вправе требовать в случае опоздания или пропуска занятия объяснения
          ему пройденного материала в ущерб другим заказчикам.
        </p>
        <p> 3.7. Заказчик подтверждает, что обладает всеми необходимыми правомочиями для заключения договора.</p>

        <p className={'font-bold py-4'}> 4. Цена и порядок расчетов.</p>
        <p>4.1. Стоимость услуг и сроки их оплаты согласовываются сторонами в спецификации. </p>
        <p> 4.2. Исполнитель не является плательщиком налога на добавленную стоимость в
          соответствии с п. 1 ст. 326 Налогового кодекса Республики Беларусь.
        </p>
        <p> 4.3. Стоимость услуг определяется исходя из затрат на их оказание, утверждается
          приказом руководителя Исполнителя.
        </p>
        <p> 4.4. Проценты за пользование коммерческим займом на сумму предварительной оплаты не
          начисляются и соответственно Исполнителем не выплачиваются.
        </p>
        <p> 4.5. В случае нарушения сроков оплаты Исполнитель имеет право отказать в
          предоставлении услуг Заказчику.
        </p>
        <p> 4.6. Оплата за услуги осуществляется Заказчиком способами в соответствии с указаниями
          Исполнителя. </p>
        <p> 4.7. Оплата услуг без получения от Исполнителя подтверждения о возможности оказания
          таких услуг не допускается. </p>
        <p> 4.8. Заказчик обязан предоставить Исполнителю подтверждение оплаты (квитанцию,
          скриншот экрана, чек и т.п.).
        </p>
        <p> 4.9. В случае нарушение срока оплаты работ Исполнитель вправе в одностороннем порядке
          изменить цену не оплаченных в срок работ путем направления соответствующего
          уведомления Заказчику.
        </p>
        <p> 4.10. В случае досрочного расторжения договора внесенная предоплата за непосещенные
          занятия и иные услуги Заказчику не возвращается.
        </p>
        <p className={'font-bold py-4'}> 5. Ответственность сторон.</p>
        <p> 5.1. За неисполнение, либо ненадлежащее исполнение своих обязательств по настоящему
          договору виновная сторона несет ответственность в соответствии с действующим
          законодательством Республики Беларусь.
        </p>
        <p> 5.2. Заказчик несет ответственность за достоверность сведений, указанных им при
          заключении настоящего договора, а также в процессе его исполнения.

        </p>
        <p> 5.3. Исполнитель не несет ответственность:
        </p>
        <p>5.3.1. за невозможность оказания услуг по причине неполадок в работе компьютерного,
          телекоммуникационного оборудования или каналов связи Заказчика и (или) третьих лиц;
        </p>
        <p>5.3.2. за перебои в работе глобальной компьютерной сети Интернет, а также за
          недостаточное качество или скорость соединения при выходе Заказчика в эту сеть;
        </p>
        <p>5.3.3. за иные задержки и сбои при оказании услуг, возникающие прямо или косвенно по
          причинам, которые находятся за пределами объективного технического контроля
          Исполнителя.
        </p>
        <p> 5.4. Исполнитель не несет ответственность в случае стихийных бедствий (пожар,
          наводнение, ураган), войн, забастовок, массовых беспорядков, эпидемий, неблагоприятных
          эпидемиологических ситуаций, взрывов, аварий, актов терроризма, принятия актов и
          совершения действий органами государственной власти, которые стали причиной
          неисполнения либо ненадлежащего исполнения Исполнителем своих обязательств по
          договору.
        </p>
        <p className={'font-bold py-4'}> 6. Иные условия договора.</p>
        <p> 6.1. Спецификации, письма, уведомления, материалы, любые документы и прочую
          корреспонденцию, связанные с настоящим договором (все вместе далее – корреспонденция)
          стороны вправе направлять с использованием средств связи, указанных в спецификации
          (телефон, электронная почта, мессенджеры) (по тексту договора – согласованные средства
          связи). Стороны признают, что способы передачи корреспонденции, указанные в настоящем
          пункте, имеют юридическую силу направления документов по месту нахождения
          (жительства) сторон. Стороны обязуются самостоятельно и своевременно, но не реже 1 раза
          в рабочий день, проверять корреспонденцию, отправленную вышеуказанными способами, и
          несут ответственность за нарушения указанного обязательства. Стороны также признают,
          что получение документов с использованием согласованных средств связи позволяет
          достоверно установить, что документ исходит от стороны по договору, а соответствующий
          документ, подписан стороной по договору. Днем получения корреспонденции при ее
          направлении посредством согласованных средств связи считается день ее направления
          другой стороне, если другая сторона не докажет, что корреспонденция поступила позже на
          ее средство связи. Если при направлении корреспонденции были использованы не
          согласованные средства связи, направленные таким способом документы не имеют
          юридической силы. Стороны пришли к соглашению об использовании сторонами при
          совершении сделок факсимильного воспроизведения подписи и печати (при ее
          использовании) с помощью средств механического или иного копирования либо иного
          аналога собственноручной подписи.
        </p>
        <p> 6.2. Стороны вправе согласовать в спецификации условия иные по сравнению с условиями
          договора. Такие условия применяются к отношениям сторон, связанным с оказанием услуг,
          указанных в соответствующей спецификации.
        </p>
        <p> 6.3. Исполнитель вправе в одностороннем порядке изменить настоящий договор путем
          размещения новой редакции договора на одном или нескольких информационных ресурсах
          Исполнителя. В таком случае изменения вступают в силу со дня, следующего за днем
          размещение новой редакции договора, если иное не предусмотрено настоящим договором
          или новой редакцией договора.
        </p>
        <p> 6.4. В случае несогласия Заказчика с внесенными изменениями в договор, он должен
          отказаться от дальнейшего пользования услугами. Стороны договариваются, что молчание
          (отсутствие факта отказа от дальнейшего пользования услугами) в соответствии с п. 3 ст.
          159 Гражданского Кодекса Республики Беларусь признается согласием и присоединением
          стороны к новой редакции договора.
        </p>
        <p> 6.5. Оказание услуг физическим лицам подтверждается самим фактом оказания услуг и
          отсутствием претензий со стороны Заказчика, заявленных Исполнителю непосредственно
          после оказания услуг. Исполнитель вправе оформлять первичные учетные документы,
          подтверждающие оказание услуг по договору, единолично.
        </p>
        <p> 6.6. Настоящий договор заключен по месту нахождения Исполнителя.</p>
        <p> 6.7. При изменении сведений, указанных при заключении договора, Заказчик обязуется
          уведомить Исполнителя об этом в течение 5 (пяти) рабочих дней, а при необходимости –
          незамедлительно.
        </p>
        <p> 6.8. Недействительность отдельных условий договора не влечет за собой
          недействительности его других условий и договора в целом.
        </p>
        <p> 6.9. Прекращение (расторжение) договора по любым основаниям не влечет прекращения
          обязательств по оплате, возникшим до момента его прекращения (расторжения), а также
          обязательств по уплате неустойки за просрочку оплаты.
        </p>
        <p> 6.10. Все споры и разногласия по настоящему договору стороны решают путем
          переговоров, а при недостижении согласия - в порядке, установленном законодательством
          Республики Беларусь. Споры, возникающие при исполнении договора и не разрешенные
          путем переговоров, рассматриваются в суде по месту нахождения Исполнителя.
        </p>
        <p> 6.11. Заключая настоящий договор, оплачивая услуги, пользуясь услугами, Заказчик
          совершением любых из этих действий подтверждает, что:
        </p>
        <p> 6.11.1. ему предоставлена необходимая и достоверная информация об оказываемых
          услугах, их видах и особенностях, о цене и форме оплаты, а также ему сообщены по его
          просьбе (при ее наличии) другие относящиеся к договору и оказываемым услугам сведения;
        </p>
        <p> 6.11.2. согласен на сбор, обработку, накопление, хранение, пользование, передачу третьим
          лицам и совершение иных действий Исполнителем с информацией о Заказчике, указанных
          Заказчиком при заключении договора и в процессе его исполнения, включая персональные
          данные, полученные Исполнителем в соответствии с условиями договора;
        </p>
        <p> 6.11.3. согласен на осуществление аудиозаписи телефонных переговоров, производство
          фото- и видеосъемки при заключении и исполнении договора, на использование таких
          материалов в качестве доказательств при возникновении споров (в том числе в суде);
        </p>
        <p> 6.11.4. согласен на получение информации от Исполнителя посредством любых средств
          связи (звонки и сообщения на телефон, мессенджеры, электронная почта, приложения и
          др.);
        </p>
        <p> 6.11.5. не имеет медицинских противопоказаний для оказания ему услуг, которые могут
          повлечь причинение ущерба жизни или здоровью Заказчика, а равно как жизни или
          здоровью иных заказчиков и сотрудников Исполнителя.
        </p>
        <p className={'font-bold py-4'}> 7. Реквизиты и подписи сторон.</p>
        <p> 7.1. Реквизитами Заказчика, которые могут быть использованы при исполнении настоящего договора, являются
          сведения, указанные в спецификации.
        </p>
        <p> 7.2. Реквизиты Исполнителя.</p>

        <div className={'my-8'}>
          <p className={'font-bold'}> Общество с ограниченной <br/>
            ответственностью «Нью ХардСкиллс» <br/></p>

          г.Минск, пер. Можайского 3-й, дом 11,<br/>
          помещение 100 <br/>
          УНП 193616622 <br/>
          р/с BY26 PJCB 3012 0700 0410 0000 0933 в <br/>
          ОАО «Приорбанк», БИК PJCBBY2X
        </div>

      </div>
      <div className={activeTab === 2 ? 'block' : 'hidden'}>
        <h2 className={'text-xl font-bold text-center'}>ЛИЦЕНЗИОННЫЙ ДОГОВОР <br/>On the Way</h2>
        <p className={'font-bold py-4'}>1. Предмет договора</p>

        <p>1.1. Общество с ограниченной ответственностью «Нью ХардСкиллс», именуемое в
          дальнейшем «Лицензиар», обязуется предоставить Лицензиату право использовать объект
          интеллектуальной собственности в пределах, предусмотренных настоящим договором, а
          Лицензиат обязуется уплатить Лицензиару вознаграждение за использование объекта
          интеллектуальной собственности (далее – ОИС). </p>
        <p>1.2. ОИС могут являться обучающие курсы и другие объекты интеллектуальной
          собственности, которые согласовываются сторонами в спецификациях к настоящему договору,
          которые являются его неотъемлемой частью. В состав обучающего курса могут включаться
          аудиовизуальные произведения (видеоуроки), презентации, тесты, изображения, схемы, а
          также иные учебные материалы. Описание ОИС может размещаться на одном или нескольких
          информационных ресурсах Лицензиара. В этом случае такое описание является неотъемлемой
          частью настоящего договора в части непротиворечащей его условиям.
        </p>
        <p>1.3. Размер вознаграждения Лицензиара, порядок оплаты, иные условия настоящего договора
          согласовываются сторонами в спецификациях к настоящему договору, которые являются его
          неотъемлемой частью.
        </p>
        <p>1.4. Лицензиатом по настоящему договору могут быть исключительно физические лица,
          приобретающие право использовать ОИС для личных, семейных или иных целей, не
          связанных с осуществлением предпринимательской деятельности.
        </p>
        <p>1.5. Лицензиар на условиях простой (неисключительной) лицензии предоставляет Лицензиату
          право на использование ОИС исключительно в целях самообразования посредством
          предоставления Лицензиату доступа к Google Диску или иным образом (по усмотрению
          Лицензиара). Лицензиат не вправе копировать, передавать, сохранять ОИС на других
          носителях информации. С момента получения Лицензиатом доступа к ОИС простое
          неисключительное право на использование ОИС считается переданным Лицензиаром и
          полученным Лицензиатом.
        </p>
        <p>1.6. Лицензиат вправе использовать ОИС на территории стран всего мира и только в
          некоммерческих целях.
        </p>
        <p>1.7. Лицензиар сохраняет право использования ОИС любыми способами и по своему
          усмотрению, а также право выдачи лицензии другим лицам.
        </p>
        <p>1.8. Лицензиату предоставляются исключительные права на использование ОИС на весь срок
          действия исключительных прав.
        </p>
        <p>1.9. Лицензиат не вправе предоставлять права использования ОИС другому лицу. </p>


        <p className={'font-bold py-4'}>2. Порядок заключения договора.</p>

        <p>2.1. Размещение текста настоящего договора на сайте https://newhardskills.by/ и (или) в
          социальной сети Instagram на странице аккаунта https://www.instagram.com/newhardskills/ (по
          тексту настоящего договора – информационные ресурсы Лицензиара) и направление
          Лицензиату спецификации является предложением (офертой) Лицензиара заключить
          настоящий договор.
        </p>
        <p>2.2. Заключение настоящего договора производится путем присоединения Лицензиата к
          настоящему договору и означает принятие условий настоящего договора в целом без каких-
          либо изменений.</p>
        <p>2.3. Лицензиат считается принявшим условия настоящего договора в полном объеме без
          всяких оговорок и исключений посредством подписания спецификации, согласования
          спецификации иным образом, предусмотренным настоящим договором, либо совершением
          иных действий по выполнению условий спецификации (оплата, фактическое использование
          ОИС и т.п.). В случае несогласия Лицензиата с какими-либо из положений договора,
          Лицензиат не вправе использовать ОИС. </p>
        <p>
          2.4. Спецификация к договору может быть согласована путем составления одного документа,
          подписанного сторонами, а также путем обмена документами посредством согласованных
          средств связи.
        </p>

        <p className={'font-bold py-4'}>3. Права и обязанности сторон.</p>
        <p>3.1. Лицензиар обязан:</p>
        <p> 3.1.1. предоставить Лицензиату доступ к ОИС в течение 3-х рабочих дней после получения
          предоплаты в соответствии с условиями настоящего договора;
        </p>
        <p> 3.1.2. добросовестно выполнить принятые на себя обязательства согласно условиям
          настоящего договора.
        </p>
        <p>3.2. Лицензиар вправе:</p>
        <p> 3.2.1. в случае нарушения условий настоящего договора Лицензиатом запретить ему
          использование ОИС, а также приостановить или прекратить ему доступ к ОИС без возврата
          уплаченных денежных средств;
        </p>
        <p> 3.2.2. отказаться от настоящего договора в случае нарушения Лицензиатом его условий;</p>
        <p> 3.2.3. при исполнении настоящего договора привлекать третьих лиц.</p>

        <p>3.3. Лицензиат обязуется:</p>

        <p> 3.3.1. при заключении договора и в процессе его исполнения предоставлять Лицензиару
          достоверную и полную информацию;
        </p>
        <p> 3.3.2. проявлять уважение к администрации, персоналу Лицензиара, не посягать на их честь и
          достоинство;
        </p>
        <p> 3.3.3. сообщать персоналу Лицензиара об изменении контактной информации;</p>
        <p> 3.3.4. возмещать ущерб, причиненный имуществу Лицензиара в результате действий
          Лицензиата в соответствии с законодательством Республики Беларусь; </p>
        <p> 3.3.5. осуществлять оплату вознаграждения Лицензиара в сроки в соответствии с договором;
        </p>
        <p> 3.3.6. не передавать, не распространять и не допускать возможности передачи третьим лицам,
          а также не использовать в коммерческих целях ОИС или его отдельные составляющие; </p>
        <p> 3.3.7. самостоятельно обеспечить работоспособность своего компьютерного,
          телекоммуникационного оборудования и каналов связи.
        </p>

        <p> 3.4. Лицензиат вправе:</p>

        <p> 3.4.1. запрашивать у Лицензиара информацию по всем вопросам, касающимся надлежащего
          исполнения обязательств по договору Лицензиаром. </p>
        <p> 3.5. Лицензиат подтверждает, что обладает всеми необходимыми правомочиями для
          заключения договора. </p>

        <p className={'font-bold py-4'}> 4. Цена и порядок расчетов.</p>
        <p>4.1. Размер вознаграждения Лицензиара и сроки его оплаты согласовываются сторонами в
          спецификации.</p>
        <p> 4.2. Лицензиар не является плательщиком налога на добавленную стоимость в соответствии с
          п. 1 ст. 326 Налогового кодекса Республики Беларусь.
        </p>
        <p> 4.3. Проценты за пользование коммерческим займом на сумму предварительной оплаты не
          начисляются и соответственно Лицензиаром не выплачиваются.
        </p>
        <p> 4.4. В случае нарушения сроков оплаты Лицензиар имеет право отказать в предоставлении
          прав использовать ОИС Лицензиату.
        </p>
        <p> 4.5. Оплата вознаграждения осуществляется Лицензиатом способами в соответствии с
          указаниями Лицензиара. </p>
        <p> 4.6. Лицензиат обязан предоставить Лицензиару подтверждение оплаты (квитанцию,
          скриншот экрана, чек и т.п.).
        </p>
        <p> 4.7. В случае нарушение срока оплаты Лицензиар вправе в одностороннем порядке изменить
          размер вознаграждения путем направления соответствующего уведомления Лицензиату. </p>
        <p> 4.8. В случае расторжения договора внесенная предоплата Лицензиату не возвращается, за
          исключением расторжения договора по вине Лицензиара.
        </p>
        <p> 4.9. В случае, если Лицензиат не использовал переданное Лицензиаром простое
          неисключительное право на использование ОИС по причинам, независящим от Лицензиара,
          возврат оплаченного Лицензиатом вознаграждения не производится.
        </p>

        <p className={'font-bold py-4'}> 5. Ответственность сторон.</p>
        <p> 5.1. За неисполнение, либо ненадлежащее исполнение своих обязательств по настоящему
          договору виновная сторона несет ответственность в соответствии с действующим
          законодательством Республики Беларусь.
        </p>
        <p> 5.2. Лицензиат несет ответственность за достоверность сведений, указанных им при
          заключении настоящего договора, а также в процессе его исполнения.
        </p>
        <p> 5.3. Лицензиар не несет ответственность:</p>
        <p>5.3.1. за невозможность предоставления доступа к ОИС по причине неполадок в работе
          компьютерного, телекоммуникационного оборудования или каналов связи Лицензиата и (или)
          третьих лиц;</p>
        <p>5.3.2. за перебои в работе глобальной компьютерной сети Интернет, а также за недостаточное
          качество или скорость соединения при выходе Лицензиата в эту сеть; </p>
        <p>5.3.3. за иные задержки и сбои при предоставлении доступа к ОИС, возникающие прямо или
          косвенно по причинам, которые находятся за пределами объективного технического контроля
          Лицензиара. </p>

        <p> 5.4. Лицензиар не несет ответственность в случае стихийных бедствий (пожар, наводнение,
          ураган), войн, забастовок, массовых беспорядков, эпидемий, неблагоприятных
          эпидемиологических ситуаций, взрывов, аварий, актов терроризма, принятия актов и
          совершения действий органами государственной власти, которые стали причиной
          неисполнения либо ненадлежащего исполнения Лицензиаром своих обязательств по договору.
        </p>
        <p>5.5. Максимальный размер убытков, который может быть взыскан с Лицензиара,
          ограничивается размером вознаграждение Лицензиара по настоящему договору, если иное не
          предусмотрено законодательством для отдельных случаев возмещения убытков.
        </p>

        <p className={'font-bold py-4'}> 6. Иные условия договора.</p>
        <p> 6.1. Спецификации, письма, уведомления, материалы, любые документы и прочую
          корреспонденцию, связанные с настоящим договором (все вместе далее – корреспонденция)
          стороны вправе направлять с использованием средств связи, указанных в спецификации
          (телефон, электронная почта, мессенджеры) (по тексту договора – согласованные средства
          связи). Стороны признают, что способы передачи корреспонденции, указанные в настоящем
          пункте, имеют юридическую силу направления документов по месту нахождения (жительства)
          сторон. Стороны обязуются самостоятельно и своевременно, но не реже 1 раза в рабочий день,
          проверять корреспонденцию, отправленную вышеуказанными способами, и несут
          ответственность за нарушения указанного обязательства. Стороны также признают, что
          получение документов с использованием согласованных средств связи позволяет достоверно
          установить, что документ исходит от стороны по договору, а соответствующий документ,
          подписан стороной по договору. Днем получения корреспонденции при ее направлении
          посредством согласованных средств связи считается день ее направления другой стороне, если
          другая сторона не докажет, что корреспонденция поступила позже на ее средство связи. Если
          при направлении корреспонденции были использованы не согласованные средства связи,
          направленные таким способом документы не имеют юридической силы. Стороны пришли к
          соглашению об использовании сторонами при совершении сделок факсимильного
          воспроизведения подписи и печати (при ее использовании) с помощью средств механического
          или иного копирования либо иного аналога собственноручной подписи.
        </p>
        <p> 6.2. Стороны вправе согласовать в спецификации условия иные по сравнению с условиями
          договора. Такие условия применяются к отношениям сторон, связанным с правом
          использования ОИС, указанного в соответствующей спецификации.
        </p>
        <p> 6.3. Лицензиар вправе в одностороннем порядке изменить настоящий договор путем
          размещения новой редакции договора на одном или нескольких информационных ресурсах
          Лицензиара. В таком случае изменения вступают в силу со дня, следующего за днем
          размещение новой редакции договора, если иное не предусмотрено настоящим договором или
          новой редакцией договора.
        </p>
        <p> 6.4. Предоставление права использования ОИС по настоящему договору подтверждается
          самим фактом предоставления доступа к ОИС и отсутствием претензий со стороны
          Лицензиата, заявленных Лицензиару непосредственно после предоставления доступа.
          Лицензиар вправе оформлять первичные учетные документы, подтверждающие
          предоставление права использования ОИС, единолично.
        </p>
        <p> 6.5. Настоящий договор заключен по месту нахождения Лицензиара.</p>
        <p> 6.6. Договор заключается на срок предоставления Лицензиату исключительного права на
          использование ОИС. </p>
        <p> 6.7. При изменении сведений, указанных при заключении договора, Лицензиат обязуется
          уведомить Лицензиара об этом в течение 5 (пяти) рабочих дней, а при необходимости –
          незамедлительно.
        </p>
        <p> 6.8. Недействительность отдельных условий договора не влечет за собой недействительности
          его других условий и договора в целом.
        </p>
        <p> 6.9. Прекращение (расторжение) договора по любым основаниям не влечет прекращения
          обязательств по оплате, возникшим до момента его прекращения (расторжения), а также
          обязательств по уплате неустойки за просрочку оплаты.
        </p>
        <p> 6.10. Все споры и разногласия по настоящему договору стороны решают путем
          переговоров, а при недостижении согласия - в порядке, установленном законодательством
          Республики Беларусь. Споры, возникающие при исполнении договора и не разрешенные путем
          переговоров, рассматриваются в суде по месту нахождения Лицензиара.
        </p>
        <p> 6.11. Право, подлежащее применению по договору – право Республики Беларусь.</p>
        <p>6.12. Заключая настоящий договор, произведя оплату, используя ОИС, Лицензиат
          совершением любых из этих действий подтверждает, что:</p>
        <p>6.12.1. ему предоставлена необходимая и достоверная информация об ОИС, о цене и форме
          оплаты, а также ему сообщены по его просьбе (при ее наличии) другие относящиеся к
          договору сведения; </p>
        <p>6.12.2. согласен на сбор, обработку, накопление, хранение, пользование, передачу третьим
          лицам и совершение иных действий Лицензиаром с информацией о Лицензиате, указанных
          Лицензиатом при заключении договора и в процессе его исполнения, включая персональные
          данные, полученные Лицензиаром в соответствии с условиями договора;
        </p>
        <p>6.12.3. согласен на осуществление аудиозаписи телефонных переговоров, производство фото-
          и видеосъемки при заключении и исполнении договора, на использование таких материалов в
          качестве доказательств при возникновении споров (в том числе в суде);
        </p>
        <p>6.12.4. согласен на получение информации от Лицензиара посредством любых средств связи
          (звонки и сообщения на телефон, мессенджеры, электронная почта, приложения и др.).
        </p>


        <p className={'font-bold py-4'}> 7. Реквизиты и подписи сторон.</p>
        <p> 7.1. Реквизитами Лицензиата, которые могут быть использованы при исполнении настоящего
          договора,  являются сведения, указанные в спецификации.
        </p>
        <p> 7.2. Реквизиты Лицензиара.</p>

        <div className={'my-8'}>
          <p className={'font-bold'}> Общество с ограниченной <br/>
            ответственностью «Нью ХардСкиллс» <br/></p>

          г.Минск, пер. Можайского 3-й, дом 11,<br/>
          помещение 100 <br/>
          УНП 193616622 <br/>
          р/с BY26 PJCB 3012 0700 0410 0000 0933 в <br/>
          ОАО «Приорбанк», БИК PJCBBY2X
        </div>
      </div>
    </div>
  );
};

export default Tabs;