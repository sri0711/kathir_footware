const dotenv = require('dotenv')
dotenv.config({path:"./config/.env"})
const mailer = require('nodemailer')

console.log(process.env)

const mailSender = async (props)=>{

    const mailTranspoter = mailer.createTransport({
        host:'gmail',
        auth:{
            user:'padhu.developer@gmail.com',
            pass:process.env.PASS
        }
    })

    const bodyMessage = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "m.sathish0711@gmail.com", // list of receivers
        subject: "Kathir's Footware ✔", // Subject line
        text: `Thank you for ordering our product.
        Please visit again`, // plain text body
        html: `<h1>This is the Sample of the project</h1>`, // html body
      });

}