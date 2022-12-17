import dotenv from 'dotenv'
dotenv.config();
import initMB from 'messagebird';
const messagebird = initMB(process.env.MESSAGEBIRD_API_KEY);
class UserController{
    //Send OTP to user
    static userLogin = async (req, res)=>{
        const {phoneNumber} = req.body;
        const newPhonenumber = "+880"+phoneNumber
        var params = {
            tamplate:'Your Login OTP is %token',
            timeout:300
          };
          
          messagebird.verify.create(newPhonenumber, params, (err, response)=> {
            if (err) {
              console.log('OTP Send Error :',err);
              res.status(200).send({
                status:'failed',
                message:'Unable to send OTP'
            })
            }
            console.log('OTP send Response: ',response);
            res.status(200).send({
                status:'success',
                message:'OTP Send Successfully',
                id:response.id
            })
          });
        
    }
}


export default UserController