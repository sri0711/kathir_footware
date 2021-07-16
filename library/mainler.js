const dotenv = require('dotenv')
dotenv.config({path:"./config/.env"})
const mailer = require('nodemailer')

console.log(process.env)

const mailSender = async ()=>{

    // This is main section for the mailing function start

    // mail sending provider configuration

    const mailTranspoter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'padhu.developer@gmail.com',
            pass:process.env.PASS
        }
    })

    //  Mail sending properties

    const bodyMessage = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "m.sathish0711@gmail.com", // list of receivers
        subject: "Kathir's Footware ✔", // Subject line
        text: `Thank you for ordering our product.
        Please visit again`, // plain text body
        html: `<h1>This is the Sample of the project</h1>`, // html body
      });

    // main send and return back messages for the packages

    await mailTranspoter.sendMail(bodyMessage,(err,info)=>{
        if(err) console.log(err)
        else console.log(info)

    })

}