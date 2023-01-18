<script>
	import { Chart } from 'chart.js/auto';
	import { afterUpdate } from 'svelte';

	let readAbout = false;
	let quiz = [
		{
			id: 1,
			question:
				'Чи часто Ви відчуваєте жагу до нових вражень, до того, щоб відволіктися, випробувати сильні відчуття?'
		},
		{
			id: 2,
			question:
				'Чи часто Ви відчуваєте, що маєте потребу в друзях, які можуть зрозуміти Вас, підбадьорити, поспівчувати?'
		},
		{ id: 3, question: 'Чи вважаєте Ви себе безтурботною людиною?' },
		{ id: 4, question: 'Чи дуже важко Вам відмовитися від своїх намірів?' },
		{
			id: 5,
			question: 'Ви обмірковуєте свої справи не поспішаючи чи прагнете почекати, перш ніж діяти?'
		},
		{ id: 6, question: 'Чи завжди Ви виконуєте свої обіцянки, навіть якщо Вам це невигідно?' },
		{ id: 7, question: 'Чи часто у Вас бувають спади та підйоми настрою?' },
		{ id: 8, question: 'Чи швидко Ви зазвичай дієте й говорите?' },
		{
			id: 9,
			question:
				'Чи виникало у Вас коли-небудь відчуття, що Ви нещасні, хоча жодної серйозної причини для цього не було?'
		},
		{ id: 10, question: 'Чи правильно, що на парі Ви здатні зважитися на все?' },
		{
			id: 11,
			question:
				'Чи бентежитеся Ви, коли хочете познайомитися з людиною протилежної статі, яка Вам симпатична?'
		},
		{ id: 12, question: 'Чи буває, що, розлютившись, Ви виходите із себе?' },
		{ id: 13, question: 'Чи часто Ви дієте нерозважливо, під впливом моменту?' },
		{
			id: 14,
			question: 'Вас часто турбує думка про те, що Вам не слід було щось робити або говорити?'
		},
		{ id: 15, question: 'Ви віддаєте перевагу читанню книг, аніж зустрічам з людьми?' },
		{ id: 16, question: 'Чи правильно, що Вас легко образити?' },
		{ id: 17, question: 'Чи полюбляєте Ви часто бувати в компанії?' },
		{ id: 18, question: 'Чи бувають у Вас такі думки, якими Вам не хотілося б ділитися з іншими?' },
		{
			id: 19,
			question:
				'Чи правильно, що іноді Ви настільки сповнені енергії, що все горить у руках, а іноді відчуваєте втому?'
		},
		{
			id: 20,
			question:
				'Чи намагаєтеся Ви обмежувати коло своїх знайомств невеликою кількістю найближчих друзів?'
		},
		{ id: 21, question: 'Чи багато Ви мрієте?' },
		{ id: 22, question: 'Коли на Вас гримають, чи відповідаєте Ви тим самим?' },
		{ id: 23, question: 'Чи вважаєте Ви всі свої звички гарними?' },
		{ id: 24, question: 'Чи часто у Вас виникає почуття, що Ви в чомусь винні?' },
		{
			id: 25,
			question:
				'Чи здатні Ви іноді дати волю своїм почуттям і безтурботно розважатися у веселій компанії?'
		},
		{ id: 26, question: 'Чи можна сказати, що нерви у Вас часто натягнуті до межі?' },
		{ id: 27, question: 'Чи маєте Ви славу людини жвавої та веселої?' },
		{
			id: 28,
			question:
				'Після того як справу зроблено, чи часто Ви подумки повертаєтеся до неї й думаєте, що могли б зробити краще?'
		},
		{ id: 29, question: 'Чи почуваєтеся Ви неспокійно, перебуваючи у великий компанії?' },
		{ id: 30, question: 'Чи трапляється, що Ви передаєте чутки?' },
		{ id: 31, question: 'Чи буває, що Вам не спиться через те, що в голові вирують різні думки?' },
		{
			id: 32,
			question: 'Якщо Ви хочете про щось довідатися, Ви знайдете це в книзі, а не питаєте в людей?'
		},
		{ id: 33, question: 'Чи буває у Вас сильне серцебиття?' },
		{ id: 34, question: 'Чи подобається Вам робота, що вимагає зосередженості?' },
		{ id: 35, question: 'Чи бувають у Вас дрижаки?' },
		{ id: 36, question: 'Чи завжди Ви говорите правду?' },
		{
			id: 37,
			question: 'Чи буває Вам неприємно перебувати в компанії, де кепкують один з одного?'
		},
		{ id: 38, question: 'Чи дратівливі Ви?' },
		{ id: 39, question: 'Чи подобається Вам робота, що вимагає швидкодії?' },
		{
			id: 40,
			question:
				'Чи правильно, що Вам часто не дають спокою думки про різні неприємності й жахи, які могли б статися, хоча все скінчилося благополучно?'
		},
		{ id: 41, question: 'Чи правильно, що Ви неквапливі в рухах і трохи повільні?' },
		{ id: 42, question: 'Чи спізнювалися Ви коли-небудь на роботу, на зустріч із кимось?' },
		{ id: 43, question: 'Чи часто Вам сняться кошмари?' },
		{
			id: 44,
			question:
				'Чи правильно, що Ви так любите поговорити, що не пропускаєте будь-яку нагоду поговорити з новою людиною?'
		},
		{ id: 45, question: 'Чи турбують Вас які-небудь болі?' },
		{ id: 46, question: 'Чи засмутитеся Ви, якщо довго не зможете бачитися з товаришами?' },
		{ id: 47, question: 'Чи нервова Ви людина?' },
		{ id: 48, question: 'Чи є серед ваших знайомих ті, хто Вам точно не подобається?' },
		{ id: 49, question: 'Ви впевнена в собі людина?' },
		{ id: 50, question: 'Вас легко зачіпає критика ваших недоліків чи вашої роботи?' },
		{
			id: 51,
			question:
				'Чи важко Вам одержати справжнє задоволення від заходів, у яких бере участь багато народу?'
		},
		{ id: 52, question: 'Чи турбує Вас відчуття, що Ви чимось гірші за інших?' },
		{ id: 53, question: 'Зуміли б Ви внести пожвавлення в нудну компанію?' },
		{ id: 54, question: 'Чи трапляється, що Ви говорите про речі, на яких зовсім не розумієтесь?' },
		{ id: 55, question: ' Чи піклуєтеся Ви про своє здоров’я?' },
		{ id: 56, question: ' Чи любите Ви пожартувати над іншими?' },
		{ id: 57, question: ' Чи страждаєте Ви від безсоння?' }
	];

	let counter = 0;
	let answers = {};
	let resultReady = false;

	const extraversionAnswer = {
		1: true,
		3: true,
		8: true,
		10: true,
		13: true,
		17: true,
		22: true,
		25: true,
		27: true,
		39: true,
		44: true,
		46: true,
		49: true,
		53: true,
		56: true,
		5: false,
		15: false,
		20: false,
		29: false,
		32: false,
		34: false,
		37: false,
		41: false,
		51: false
	};

	const neuroticAnswer = {
		2: true,
		4: true,
		7: true,
		9: true,
		11: true,
		14: true,
		16: true,
		19: true,
		21: true,
		23: true,
		26: true,
		28: true,
		31: true,
		33: true,
		35: true,
		38: true,
		40: true,
		43: true,
		45: true,
		47: true,
		50: true,
		52: true,
		55: true,
		57: true
	};

	const trustingAnswer = {
		6: true,
		24: true,
		36: true,
		12: false,
		18: false,
		30: false,
		42: false,
		48: false,
		54: false
	};

	let extarversionPoint = 0;
	let neuroticPoint = 0;
	let trustPoint = 0;
	let trustResult = '';
	let neuroticResult = '';
	let extraversionResult = '';
	let chartCanvas;

	const trustExplonation = [
		{
			range: { from: 0, to: 3 },
			message: 'норма людської неправди, відповідям можна довіряти.'
		},
		{
			range: { from: 4, to: 5 },
			message: 'сумнівна правдивість даних відповідей.'
		},
		{
			range: { from: 6, to: 9 },
			message: 'дані відповіді недостовірні. Спробуйте пройти тест ще раз пізніше.'
		}
	];

	const neuroticExplonation = [
		{
			range: { from: 0, to: 10 },
			message: 'Ви емоційно стійка людина'
		},
		{
			range: { from: 11, to: 16 },
			message: 'Ви емоційно вразлива людина'
		},
		{
			range: { from: 17, to: 22 },
			message: 'Ви маєте певні ознаки розхитаності нервової системи'
		},
		{
			range: { from: 23, to: 24 },
			message: 'Ви маєте виражений невротизм, що межує з патологією'
		}
	];

	const extraversionExplonation = [
		{
			range: { from: 0, to: 10 },
			message: 'Ви інтроверт, занурені в себе'
		},
		{
			range: { from: 11, to: 14 },
			message: 'Ви амбіверт, спілкуєтеся, коли Вам це потрібно'
		},
		{
			range: { from: 15, to: 24 },
			message: 'Ви екстраверт, товариська людина, обернена до зовнішнього світу'
		}
	];

	const getResult = () => {
		extarversionPoint = 0;
		neuroticPoint = 0;
		trustPoint = 0;

		var notAnswered = [];
		for (var i = 0; i < quiz.length; i++) {
			if (answers[quiz[i].id] === undefined) {
				notAnswered.push(quiz[i].id);
			}
		}

		if (notAnswered.length > 0) {
			alert('Спочатку дайте відповіді на питання: ' + notAnswered.toString());
			return;
		}

		for (var i = 0; i < quiz.length; i++) {
			if (answers[quiz[i].id] != undefined && neuroticAnswer[quiz[i].id] == answers[quiz[i].id]) {
				neuroticPoint++;
			}

			if (
				answers[quiz[i].id] != undefined &&
				extraversionAnswer[quiz[i].id] == answers[quiz[i].id]
			) {
				extarversionPoint++;
			}

			if (answers[quiz[i].id] != undefined && trustingAnswer[quiz[i].id] == answers[quiz[i].id]) {
				trustPoint++;
			}
		}

		resultReady = true;
	};

	//Draw result
	afterUpdate(() => {
		if (resultReady) {
			//Draw chart
			var myChart = new Chart(chartCanvas, {
				type: 'bubble',
				data: {
					datasets: [
						{
							label: 'Ваш тип темпераменту',
							data: [
								{
									x: extarversionPoint,
									y: neuroticPoint,
									r: 10
								}
							]
						}
					]
				},
				options: {
					aspectRatio: 1,
					plugins: {
						legend: {
							display: false
						}
					},
					scales: {
						x: {
							min: 0,
							max: 24,
							ticks: {
								stepSize: 2
							},
							title: {
								text: 'Екстраверсивнісь'
							}
						},
						y: {
							min: 0,
							max: 24,
							ticks: {
								stepSize: 2
							},
							title: {
								text: 'Невротизм'
							}
						}
					}
				},
				plugins: [
					{
						afterDraw: (c) => {
							let ctx = c.ctx;
							ctx.save();
							ctx.textAlign = 'center';
							ctx.fillText(
								'Меланхолік',
								c.chartArea.left + c.chartArea.width / 10,
								c.chartArea.top + c.chartArea.height / 10
							);
							ctx.fillText(
								'Холерик',
								c.chartArea.right - c.chartArea.width / 10,
								c.chartArea.top + c.chartArea.height / 10
							);
							ctx.fillText(
								'Флегматик',
								c.chartArea.left + c.chartArea.width / 10,
								c.chartArea.bottom - c.chartArea.height / 10
							);
							ctx.fillText(
								'Сангвінік',
								c.chartArea.right - c.chartArea.width / 10,
								c.chartArea.bottom - c.chartArea.height / 10
							);

							ctx.fillText('Екстраверсія', c.chartArea.width / 2, c.chartArea.bottom - 10);

							ctx.fillText('Невротизм', c.chartArea.width - 15, c.chartArea.bottom / 2);
							ctx.restore();
						}
					}
				]
			});

			myChart.options.scales.x.position = { y: 12 };
			myChart.options.scales.y.position = { x: 12 };
			myChart.update();

			//write info
			trustExplonation.map((item) => {
				if (trustPoint >= item.range.from && item.range.to >= trustPoint) {
					trustResult = item.message;
				}
			});

			extraversionExplonation.map((item) => {
				if (extarversionPoint >= item.range.from && item.range.to >= extarversionPoint) {
					extraversionResult = item.message;
				}
			});

			neuroticExplonation.map((item) => {
				if (neuroticPoint >= item.range.from && item.range.to >= neuroticPoint) {
					neuroticResult = item.message;
				}
			});
		}
	});
</script>

<div class="container">
	{#if !readAbout}
		<div class="quiz-card">
			<h1>Інструкція</h1>
			<p>
				Вам пропонується кілька питань. На кожне питання відповідайте лише «так» або «ні». Не
				витрачайте час на обговорення питань, тут не може бути гарних або поганих відповідей, тому
				що це не випробування розумових здібностей.
			</p>
			<button on:click={() => (readAbout = true)}>Перейти до тесту</button>
		</div>
	{:else if resultReady}
		<div class="result">
			<h1>Результати тесту</h1>
			<div class="chart-container">
				<canvas bind:this={chartCanvas} id="chart" />
			</div>
			<div class="quiz-card">
				<div style="text-align: start;">
					<b>Екстраверсія:</b>
					{extraversionResult} <br />
					<b>Невротизм:</b>
					{neuroticResult} <br />
					<b>Правдивість:</b>
					{trustResult} <br />
				</div>
				<h2>Опис темпераментів</h2>
				<div style="text-align: start;">
					<b>Сангвінік</b> має сильний, врівноважений, рухливий тип нервової системи. У людей риси
					цього типу виявляються в енергії та впертості відносно досягнення мети (достатня сила
					нервових процесів), у самовладанні (достатня врівноваженість нервових процесів) і водночас
					у значній рухливості нервових процесів, що виявляється в умінні швидко перебудовувати свої
					звички й уподобання, виходячи з конкретних обставин життя.
					<br /><br />
					<b>Флегматик</b> має сильну, врівноважену, проте інертну нервову систему. Люди, які
					належать до цього типу, відрізняються, передусім, неквапливістю дій. Поряд з енергією та
					великою працездатністю (достатня сила нервових процесів), самовладанням і вмінням тримати
					себе в руках (добра врівноваженість нервових процесів) у них спостерігається певний
					консерватизм поведінки, що свідчить про інертність (малу рухливість) нервових процесів.
					<br /><br />
					<b>Холерик</b> має сильну, але неврівноважену нервову систему. Для людей нестримного типу
					характерна захопленість, з якою вони виконують роботу; вони працюють натхненно, але часто
					будь-яка дрібниця може звести все нанівець, що свідчить про нерівноваженість нервових
					процесів із переважанням збудження.
					<br /><br />
					<b>Меланхолік</b> вирізняється загальною слабкістю нервової системи, для характеристики якої
					такі властивості, як урівноваженість і рухливість нервових процесів не застосовуються. Особливістю
					цього типу є швидкий розвиток позамежного гальмування під дією навіть помірних за силою подразників.
					У людини риси цього типу виявляються насамперед у нерішучості й нездатності наполягати на своєму.
					Меланхолік легко підкоряється чужій волі, за незвичних обставин впадає в паніку, життя видається
					йому дуже тяжким, сповненим переборних труднощів (слабкість нервових процесів). Такі люди намагаються
					ізолювати себе від життя з його хвилюванням, уникають товариства, бояться будь-якої відповідальності.
				</div>
			</div>
		</div>
	{:else}
		<div class="quiz-card">
			<div class="question">
				<div class="text">
					#{quiz[counter].id} : {quiz[counter].question}
				</div>
				<div class="answer">
					<div class="option">
						<p>Так</p>
						<input type="radio" name="answer" value={true} bind:group={answers[quiz[counter].id]} />
					</div>
					<div class="option">
						<p>Ні</p>
						<input
							type="radio"
							name="answer"
							value={false}
							bind:group={answers[quiz[counter].id]}
						/>
					</div>
				</div>
			</div>
			<div class="navigation">
				<button
					on:click={(e) => {
						if (counter > 0) {
							counter--;
						}
					}}>Попереднє запитання</button
				>
				{#if counter == quiz.length - 1}
					<button on:click={getResult}>Отримати результати</button>
				{:else}
					<button
						disabled={answers[quiz[counter].id] == undefined}
						on:click={(e) => {
							if (counter < quiz.length - 1) {
								counter++;
							}
						}}
						>Наступне запитання
					</button>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat');

	* {
		font-family: 'Montserrat', sans-serif;
	}

	.container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.quiz-card {
		border-radius: 1rem;
		border: 1px solid black;
		padding: 1rem;
		margin: 1px;
		display: flex;
		flex-direction: column;
		max-width: 700px;
		text-align: center;
	}

	.quiz-card h1 {
		font-weight: 2rem;
	}

	.question .answer {
		display: flex;
		justify-content: space-around;
	}

	.option {
		display: flex;
		margin: 1px;
		align-items: center;
		flex-wrap: wrap;
	}

	.option p {
		float: left;
	}

	.option input {
		float: right;
	}

	button {
		border-radius: 0.3rem;
		border: 1px solid black;
		background-color: #1317ffd7;
		color: #ffffff;
		font-size: 1.2rem;
		padding: 0.5rem;
		cursor: pointer;
		margin: 1px;
	}

	button:hover {
		background-color: #1c7cc9;
		box-shadow: 1px 1px 1px black;
	}

	.navigation {
		display: flex;
		justify-content: space-between;
	}

	button:disabled {
		background-color: #95aff5d7;
		cursor: default;
	}

	.result {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		align-items: center;
		width: 100%;
	}

	.chart-container {
		display: flex;
		justify-content: center;
		position: relative;
		margin: auto;
		width: 90%;
		max-height: 60vh;
		min-height: 50vh;
	}
</style>
