import { useForm } from "react-hook-form";
import Container from "../../../Shared/Container";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const SendMessage = () => {
    const form  = useRef()
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors }
    // } = useForm()
    const handleSendMessage = e => {

        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
            } )
            .then(()=>{
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been sent",
                    showConfirmButton: false,
                    timer: 1500
                  });;
            },(error)=>{
                console.log('failed', error.text);
            })
        console.log(form.current);
    }
    //service_om3z9ee

    return (
        <div className="bg-[#FFF8F5] text-center  py-10">
            <Container >
                <h3 className="text-3xl font-bold">Let us handle your <br />
                    project, professionally.</h3>
                <form ref={form} onSubmit={handleSendMessage} className="mt-20 space-y-5" >
                    <div className="grid grid-cols-2 gap-5   max-w-2xl mx-auto">
                        <div className="col-span-1">
                            <input className=" w-full p-3 rounded-md" name="user_firstName"  type="text" placeholder="Name" />
                            
                        </div>
                        <div className="col-span-1">
                            <input className="w-full p-3 rounded-md" name="user_lastName"  type="text" placeholder="Last Name" />
                            
                        </div>
                        <div className="col-span-1">
                            <input className="w-full p-3 rounded-md" name="user_email"  type="email" placeholder="Email" />
                            
                        </div>
                        <div className="col-span-1">
                            <input className="w-full p-3 rounded-md" type="text"  name="user_phone" placeholder="Phone Number" />
                            {/* <div className="w-full text-left">
                                {
                                    errors.phone && <p> {errors.phone.message} </p>
                                }
                            </div> */}
                        </div>
                        <textarea placeholder="Your Message" className="col-span-2 p-3 h-[140px] rounded-md" name="message" id="" ></textarea>
                    </div>
                    <input className=" text-center bg-pink px-8 py-3 rounded-md text-white cursor-pointer" type="submit" value="Send Message" />

                </form>

            </Container>

        </div>
    );
    // return (
    //     <form ref={form} onSubmit={handleSendMessage}>
    //       <label>Name</label>
    //       <input type="text" name="user_name" />
    //       <label>Email</label>
    //       <input type="email" name="user_email" />
    //       <label>Message</label>
    //       <textarea name="message" />
    //       <input type="submit" value="Send" />
    //     </form>
    //   );
};

export default SendMessage;