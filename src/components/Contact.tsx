import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Title from './Title';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/JonRe88',
    color: 'hover:text-gray-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jony-reyes-developer/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:jreyesturismo@hotmail.com',
    color: 'hover:text-red-600',
  },
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    url: 'https://wa.me/525511856139',
    color: 'hover:text-green-600',
  },
];

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title text="Contacto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <div className={`flex flex-col items-center space-y-4 ${link.color}`}>
                  <link.icon className="w-12 h-12 transition-colors" />
                  <span className="text-lg font-medium">{link.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}