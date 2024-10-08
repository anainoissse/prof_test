///1 - Теплоэнергетика и теплотехника
    ///2 - Радиотехника и электроника
    ///3 - Машиностроение
    ///4 - Информационные технологии
    ///5 - Электроэнергетика и электротехника
    ///6 - Ничего не подходит

const questions = [
    {
		question: "Давай немного пофантазируем, чтобы представить твои профессиональные перспективы. <br ><br >Итак, далекое будущее… Стали возможны полёты не только на ближайшие планеты, но и в другие Галактики. Впереди освоение очередной экзопланеты Х, так похожей на Землю. Но до неё еще предстоит добраться.<br >Представь себя членом команды космонавтов, которая отправляется в далекий путь. Но ваша миссия короткая: тестирование корабля и первое знакомство с планетой. Впереди вас ждут разные задачи. Какие из них тебя больше заинтересуют?<br ><br >Можно отметить 1-2 варианта в каждой ситуации. А всего их будет 8.<br >Время ответа не ограничено.<br ><br >Вперед к освоению новых рубежей!",
		answers: [],
		correct: []
	},
	{
		question: "Путь неблизкий, нужен надёжный корабль. В разработке какой части корабля ты с удовольствием примешь участие?",
		answers: ["Системы жизнеобеспечения", "Системы связи с Землей", "Корпуса корабля", "Системы автоматизированных устройств", "Системы электрообеспечения", "Ничего из предложенного не подходит"],
		correct: [1, 2, 3, 4, 5, 6]
	},
	{
		question: "Корабль построен. Миссия начинается. Вам предстоит пройти обучение по управлению кораблем. Каким темам ты уделишь больше внимания?",
		answers: [
			"Устройство электрических сетей корабля",
			"Особенности системы контроля климата на корабле и поддержание оптимальных условий",
			"Настройка бортовой радиоаппаратуры для поддержания связи с ЦУПом",
			"Устройство корабля и его технические характеристики",
            "Программное обеспечение и настройка системы автопилота",
            "Ничего из предложенного не подходит"
		],
		correct: [5,1,2,3,4,6]
	},
	{
		question: "Вы в полете. Прошла уже половина пути, теперь нужно провести контрольное тестирование. Проверкой какой системы ты, скорее, займешься?",
		answers: [
			"Бортового управляющего компьютера",
			"Систем электропитания",
			"Системы энергообеспечения",
			"Системы радиосвязи и радиодоступа к информационным системам",
            "Двигательной установки космического корабля",
            "Ничего из предложенного не подходит",
		],
		correct: [4,5,1,2,3,6]
	},
	{
		question: "Вы у цели! Посадка на планету прошла успешно. Построенная вами мобильная станция работает штатно, команда выполняет поставленные перед ней задачи. А с чем ты работаешь большую часть времени?",
		answers: [
			"С трубами, системами теплоснабжения станции",
			"С радиоаппаратурой и электронными устройствами",
			"С оборудованием станции и робототехникой",
			"С программами, языками программирования, компьютером",
            "С проводами, электроснабжением станции",
            "Ничего из предложенного не подходит",
		],
		correct: [1,2,3,4,5,6]
	},
    {
		question: "Неожиданно вы получили информацию о приближающейся песчаной буре. Чем займешься ты, чтобы защитить станцию?",
		answers: [
			"Созданием укрытий для планетоходов",
			"Обеспечением бесперебойной работы компьютерных систем станции",
			"Поиском альтернативных систем электропитания станции",
			"Защитой системы поддержания климата",
            "Защитой радиопередатчика и усилителя сигнала",
            "Ничего из предложенного не подходит",
		],
		correct: [3,4,5,1,2,6]
	},
    {
		question: "Вам удалось сделать все запланированные эксперименты, спасти и наладить работу станции и оборудования. Вы летите обратно. Какой девиз теперь можно увидеть над твоим рабочим местом?",
		answers: [
			"Да будет свет!",
			"Мы несем тепло и уют в каждый дом",
			"Мы делаем расстояния короче, а людей ближе: за стабильную связь",
			"Душа машины сильнее стали",
            "Отладка кода — это как охота. Охота на баги.",
            "Ничего из предложенного не подходит",
		],
		correct: [1,5,2,3,4,6]
	},
    {
		question: "Ваша миссия выполнена, вы без происшествий вернулись домой… Нужно провести несколько занятий с будущими космонавтами, поделиться реальным опытом полета. О чем тебе интереснее было бы рассказать?",
		answers: [
			"О возможностях космической робототехники",
			"О защите информации в условиях длительных полетов",
			"Об электрооборудовании космических аппаратов",
			"Об энергосберегающих теплотехнологиях",
            "О проектировании космической электроники и радиотехники",
            "Ничего из предложенного не подходит",
		],
		correct: [3,4,5,1,2,6]
	},
    {
		question: "Прошло 50 лет после полета, у тебя уже есть внуки. Какое самое интересное направление работы ты им посоветуешь?",
		answers: [
			"Сто процентов, радиотехника. Без надежной связи - в космосе делать нечего!",
			"Однозначно, машиностроение. Без этих специалистов и самого корабля не будет!",
			"Естественно, информационные технологии. Без них вообще ничего не будет работать!",
			"Конечно, электротехника. Без нее корабль не полетит!",
            "Без сомнения, теплотехника. Без нее корабль в космосе превратится в сосульку!",
            "Ничего из предложенного не подходит",
		],
		correct: [2,3,4,5,1,6]
	}
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;
let r6 = 0;

//переменные игры
let questionIndex = 0;
clearPage();
submitBtn.innerHTML = 'Начать';
showQuestion();
submitBtn.onclick = checkAnswer;


function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

//рендер текущего вопроса
function showQuestion(){
   const headerTemplate = `<h2 class="title">%title%</h2>`;
   const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
   headerContainer.innerHTML = title;
   let answerNumber = 1 
   for (answerText of questions[questionIndex]['answers']){
      const questionTemplate = 
            `<li>
				<label>
					<input value = "%number%" type="checkbox" class="answer" name="answer"/>
					<span class="ingredient">%answer%</span>
				</label>
			</li>`;
      const answerHTML = questionTemplate
               .replace('%answer%', answerText)
               .replace('%number%', answerNumber);
      listContainer.innerHTML += answerHTML;
      answerNumber++;
   } 

    
}

function checkAnswer(){
    if (questionIndex===0){
        questionIndex++;
        clearPage();
        submitBtn.innerHTML = 'Ответить';
        showQuestion();
        return; 
    }else{
    const checkedRadio = listContainer.querySelectorAll('input[type = "checkbox"]:checked'); 
    //если ответ не выбран - ничего не делаем и выходим из функции
    if (checkedRadio.length === 0 || checkedRadio.length > 2){
        submitBtn.blur();
        return
    }
    else{
    for (let i = 0;i< checkedRadio.length;i++){
    const userAnswer = parseInt(checkedRadio[i].value);
        console.log(questions[questionIndex]['correct'][userAnswer-1])
        if (questions[questionIndex]['correct'][userAnswer-1] === 1){
            r1++;
        }; if (questions[questionIndex]['correct'][userAnswer-1] === 2){
            r2++;
        } ; if (questions[questionIndex]['correct'][userAnswer-1] === 3){
            r3++;
        } ; if (questions[questionIndex]['correct'][userAnswer-1] === 4){
            r4++;
        } ; if (questions[questionIndex]['correct'][userAnswer-1] === 5){
            r5++;
        } ; if (questions[questionIndex]['correct'][userAnswer-1] === 6){
            r6++;
        }
    }
    if(questionIndex !== questions.length-1){
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
        clearPage();
        showResults();
    }
    }}
}


function diag() {

  // create data
    var data = [
      {x: "Теплоэнергетика и теплотехника", value: r1*100/8},
      {x: "Радиотехника и электроника", value: r2*100/8},
      {x: "Машиностроение", value: r3*100/8},
      {x: "Информационные технологии", value: r4*100/8},
      {x: "Электроэнергетика и электротехника", value: r5*100/8}
    ];
///1 - Теплоэнергетика и теплотехника
    ///2 - Радиотехника и электроника
    ///3 - Машиностроение
    ///4 - Информационные технологии
    ///5 - Электроэнергетика и электротехника
    ///6 - Ничего не подходит

    // create a pie chart and set the data
    var chart = anychart.pie(data);

    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    chart.innerRadius("0%");

    // set the chart title
    chart.title("Рекомендованные направления");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();

}

function showResults() {
    const resultsTemplate1 = `
            <h2 class="title">РЕКОМЕНДОВАННЫЕ НАПРАВЛЕНИЯ</h2>`;
    headerContainer.innerHTML += resultsTemplate1;
 
    const resultsTemplate = `
            <h2 style="font-size:1.1rem;">%title%</h2>
			<p class="summary">%message%</p><br>`;
    let finalMessage;
    let title, message;
    
//    if (r1>4 || r2>4 || r3>4 || r4>4 || r5>4 || r6>4){
//            const Template1 = `
//            <div id="container" style="width: 75%; height: 50vh;"></div>`;
//    Mess = Template1;
//    headerContainer.innerHTML += Mess;
//    diag();
//    }
    
    if (r1<5 && r2<5 && r3<5 && r4<5 && r5<5 && r6<5){
        title = 'В настоящее время не удалось подобрать для тебя одно ведущее направление.';
        message = 'Возможно, в каждом из них есть привлекательные стороны, но есть и то, что пока не позволяет тебе сделать однозначный выбор. Познакомься с ними поближе, почитай описания, собери дополнительную информацию. И тогда тебе будет проще принимать решение, в качестве кого отправляться в космическое путешествие.';
        finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
        
        
    } else if (r6>4){
        title = 'Предупреждение! <br> Ты слишком часто выбираешь вариант «Ничего не подходит».';
        message = 'Вероятно, все указанные направления тебя мало привлекают. Скорее всего, ты отправишься в космос в качестве пассажира космического корабля или в какой-то другой роли, но не члена основного экипажа. Попробуй узнать побольше о других специальностях, возможно, они также пригодятся в космическом путешествии.';
        finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
    } else {
        if (r1>4){
                title = 'Твоё направление – Теплоэнергетика и теплотехника';
                message = 'Именно ты будешь обеспечивать ваш космический экипаж продовольствием, регулировать температуру и влажность воздуха на космической станции, а также получать воду в ходе экспериментов на реакторе. В твои задачи будет входить также снабжение членов экипажа кислородом. Подобно главному герою фильма «Марсианин», ты будешь исследовать различные, порою самые изощрённые, способы получения энергии на новой планете и поддерживать жизнеобеспечение корабля. Твои уникальные способности будут востребованы не только в космосе, но и на Земле. Тебе могут подойти следующие профессии: инженер-проектировщик, теплоэнергетик, инженер-исследователь, разработчик технической документации, технический писатель, а также руководящие должности. В таких специалистах могут быть заинтересованы разные российские компании: «Росатом», «Мосэнерго», «Атомэнергоремонт», «Атомтехэнерго», «Интеравтоматика», «Техноприбор», «МОЭК», «Газпром энергохолдинг» и многие другие. Для того, чтобы стать профессионалом в области теплоэнергетики и теплотехники, удели особое внимание углублённому изучению физики, особенно разделу термодинамики и молекулярно-кинетической теории, а также математике и информатике. Знания в области химии и биологии также пригодятся (космический Робинзон был ботаником по специальности, и это спасло ему жизнь)!';
                finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
            }
            if (r2>4){
                title = 'Твоё направление – Радиотехника и электроника';
                message = 'Благодаря тебе будет поддерживаться связь вашего экипажа с Землёй и другими планетами, с которыми твоими усилиями установлен контакт. Подобно главного герою фильма «Интерстеллар», ты сможешь разобраться в космических координатах и найти нужную планету в бескрайнем космосе. На корабле ты будешь следить за бесперебойной работой электронного оборудования и сигналами из разных уголков Вселенной. Твои уникальные способности будут востребованы не только в космосе, но и на Земле. Тебе могут подойти следующие профессии: инженер по комплектации оборудования, инженер-контролёр, специалист по наладке и испытаниям, инженер-схемотехник, инженер-электронщик, специалист контрольно-измерительных приборов, техник по наладке и испытаниям, проектировщик систем и средств автоматизации, а также руководящие должности. В таких специалистах могут быть заинтересованы разные российские компании и институты: «Радар», «Роскосмос», «Российские космические системы», «Связь инжиниринг М», НИИ «Геодезия», НИИДАР, ВНИИЭМ, ВЭИ и многие другие. Чтобы стать профессионалом в области радиотехники и электроники, удели особое внимание углублённому изучению физики, в особенности явлений электричества и магнетизма, а также информатике и математике (вспомни, инженер и пилот Купер распознал двоичный код в посланиях на полу, благодаря чему и смог установить координаты).';
                finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
            }
            if (r3>4){
                title = 'Твоё направление – Машиностроение';
                message = 'Среди всех членов экипажа именно ты должен знать, как устроен космический корабль и какими техническими характеристиками он обладает: какова его максимальная скорость, насколько прочен его корпус и из чего он сделан (ведь именно тебе посчастливилось участвовать в его строительстве по твоему проекту). Подобно гению доктору Брауну из кинохроники «Назад в будущее», ты сможешь собрать самые необычные гаджеты, которые пригодятся вашему экипажу в космическом путешествии. В случае опасности, именно на тебе лежит задача по строительству укрытия для планетоходов. Твои уникальные способности будут востребованы не только в космосе, но и на Земле. Тебе могут могут подойти следующие профессии: инженер-конструктор, инженер-исследователь, специалист в производственно-технологических и проектно-конструкторских организациях авиационной и ракетно-космической отрасли, а также руководящие должности. В таких специалистах могут быть заинтересованы разные российские компании: «Газпром», «Гидропресс», «Интер РАО», «Атомтехэнерго», «Мосэнерго», «Силовые машины» и многие другие. Чтобы стать профессионалом в области машиностроения, удели особое внимание углублённому изучению физики, в особенности механике, а также математике (вспомни, как точно учёный из мультсериала «Рик и Морти» рассчитывает время перемещения в космосе на своей тарелке).';
                finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
            }
            if (r4>4){
                title = 'Твоё направление – IT';
                message = 'Ни один современный космический корабль не сможет отправиться в полёт без IT-специалиста в составе экипажа. Тебе предстоит следить за программным обеспечением корабля и согласованной деятельностью всех компьютерных систем управления. В случае экстремальной ситуации именно ты сможешь настроить автопилот и даже отразить космическую кибератаку! Твои уникальные способности будут востребованы не только в космосе, но и на Земле. Тебе могут подойти следующие профессии: специалист прикладного и программного обеспечения, системный администратор, системный архитектор, системный интегратор, системный аналитик, управленец со знанием информационных технологий, инженер по защите информации, а также руководящие должности. В таких специалистах могут быть заинтересованы разные российские компании: «ФОРС-Центр разработки», «КРОК инкорпорейтед», «Газпром информ», «ЭнергоДата», «Россети», МОКБ «Марс», ГМЦ Росстата, «Касперский», «Сбербанк», «Яндекс» и многие другие. Чтобы стать профессионалом в области IT, удели особое внимание углублённому изучению информатики, в особенности программированию, а также математике.';
                finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
            }
            if (r5>4){
                title = 'Твоё направление – Электроэнергетика и электротехника';
                message = 'Электричество на космическом корабле – важнейшая составляющая космического путешествия. Именно тебе предстоит обеспечить корабль электричеством и налаживать все неполадки, мешающие бесперебойной работе электросетей. Все члены экипажа будут часто обращаться к тебе за помощью. Твои уникальные способности будут востребованы не только в космосе, но и на Земле. Тебе могут подойти следующие профессии: электромонтёр, электромонтажник, мастер, инженер-проектировщик, диспетчер, а также руководящие должности. В таких специалистах могут быть заинтересованы разные российские компании: «Россети», «РусГидро», «Мосэнерго», «РЖД», «Московский метрополитен», «ИЭК Холдинг» и многие другие. Для того, чтобы стать профессионалом в области электроэнергетики и электротехники, удели особое внимание углублённому изучению физики, в особенности явлений электричества и магнетизма, а также математике.';
                finalMessage = resultsTemplate
                 .replace('%title%', title)
                 .replace('%message%', message);
    
    headerContainer.innerHTML += finalMessage;
            }
    }
    
    if (r1>4 || r2>4 || r3>4 || r4>4 || r5>4 || r6>4){
            const Template1 = `
            <div id="container" style="width: 100%; height: 50vh;"></div>`;
    Mess = Template1;
    headerContainer.innerHTML += Mess;
    diag();
    }
    submitBtn.blur();
    submitBtn.innerHTML = 'Начать заново';
    submitBtn.onclick = () => history.go();
}
