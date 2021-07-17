const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const mailer = require('nodemailer');

const mailSender = async () => {
	// This is main section for the mailing function start

	// mail sending provider configuration

	const mailTranspoter = mailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'padhu.developer@gmail.com',
			pass: process.env.PASS
		}
	});

	//  Mail sending properties

	const bodyMessage = [
		{
			from: `"Kathir's Footware 🥾" <padhu.developer@gmail.com>`, // sender address
			to: 'siva17588@gmail.com ', // list of receivers
			subject: "Kathir's Footware ✔", // Subject line
			html: modelHTML // html body
		},
		{
			from: `"Kathir's Footware order's" <padhu.developer@gmail.com>`, // sender address
			to: 'padhu.developer@gmail.com', // list of receivers
			subject: 'Order Placed +', // Subject line
			text: ` Model No:_xx-106 \n color:{'red'} \n name:${'bata_shoe'} \n Costomer P-no:${'9876543210'} \n Customer Mail: ${'m.sathish711@gmail.com'}`
		}
	];

	// main send and return back messages for the packages

	await mailTranspoter.sendMail(bodyMessage[0], (err, info) => {
		if (err) console.log(err);
		else console.log(info);
	});

	await mailTranspoter.sendMail(bodyMessage[1], (err, info) => {
		if (err) console.log(err);
		else console.log(info);
	});
};

const modelHTML = `<div>
<header style="width: 100%; background-color: grey">
    <h1 style="text-align: center">Kathir's Footware 🥾</h1>
</header>
<div
    style="
        width:100%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    "
>
    <div
        style="
            height: 750px;
            width: 600px;
        "
    >
        <img
            height="550px"
            width="500px"
            src="https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
            alt="model image"
        />
        <div>
            <h1 style="text-align:center; font-size:32px;">bata shoe</h1>
            <h2 style="text-align:center;">Color:${'red'}</h2>
            <h2 style="text-align:center;">Size:${10}</h2>
        </div>
    </div>
</div>
</div>
`;

mailSender();
