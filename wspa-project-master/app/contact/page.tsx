
import { Header } from '../../components/Header';

// export default function Contact() {
function Contact() {
    return (
        <main className="mt-6">
            {/* <h1 className="text-2xl font-semibold">Contact page</h1> */}
            <Header>Contact page</Header>
            <p className="mt-5">contact information provided below or by filling out the contact form.</p>

            <p className="mt-5">Contact Information:</p>

            <p className="mt-5">Address: Przy stawie 4, Lublin</p>

            <p className="mt-5">Phone: +1 (555) 123-4567</p>

            <p className="mt-5">Email: mchoga@icoud.com</p>

            <p className="mt-5">Social Media:</p>

            <p className="mt-5">Facebook: facebook.com/music</p>
            <p className="mt-5">Twitter: twitter.com/music</p>
            <p className="mt-5">Instagram: instagram.com/music</p>
            <p className="mt-5">Contact Form:</p>

            <p className="mt-5">Please fill out the form below and we will get back to you as soon as possible.</p>

            <p className="mt-5">[Form fields: Name, Email Address, Phone Number (optional), Message]</p>
        </main>
    );
}

export default Contact;
