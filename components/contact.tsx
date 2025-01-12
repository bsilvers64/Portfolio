"use client";

import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.5 });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact me"></SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailt:bhavansh64@gmail.com">
          bhavansh64@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {  
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");

        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="senderEmail"
          className="px-4 h-14 rounded-lg borderBlack"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
