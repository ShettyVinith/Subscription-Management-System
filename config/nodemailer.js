import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "4al22cs144@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "4al22cs144@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
